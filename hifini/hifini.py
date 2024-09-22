#!/usr/bin/env python
# Author: Xiaowei Song (Xiaowei.Song@gdit.com)
# Version: 20240921

import re
import sys, os, subprocess, tempfile
import requests
import urllib.request, urllib.parse
from pathlib import Path 
from datetime import datetime, timedelta
from dateutil import parser
#----------------------------------------------------
#configure log for cmd line
with Path(f'{__file__}.LOG').open("a") as LOG:
    cmd=" ".join(f"'{i}'" if " " in i else i for i in sys.argv)
    LOG.write(datetime.now().strftime("%Y%m%d.%H%M%S: ") + cmd + "\n")
#----------------------------------------------------

import pandas as pd 
# import pyap #parse cleaned addresses from string/text

#----------------------------------------------------
#make sure msedgedriver.exe is in the path such that I can automate MS Edge
# import sys
# # sys.path.append('C:\bit9prog\dev\MSEdgeDriver')
# sys.path
# print(os.environ['PATH'].replace(";", "\n"))
#----------------------------------------------------

import numpy as np
import tqdm
import math
import joblib
from random import randint, random 
import time #use its sleep
import string , json
from requests import head, options 

from configobj import ConfigObj

#0-----------------------------
# initialize selenium4
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC 
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.edge.service import Service as EdgeService
from selenium.webdriver.edge.options import Options as EdgeOptions

# import chatPDF #20230818, use chatPDF.com API to extract receipts info

import logging
logging.basicConfig(level=logging.DEBUG, format='%(asctime)s - %(name)s - %(lineno)s - %(levelname)s - %(message)s')
logger = logging.getLogger()
fhandler = logging.FileHandler(filename=__file__+'__logging.log', mode='a')
logger.addHandler(fhandler)
logger.info('-'*16 + datetime.now().strftime("%Y%m%d.%H%M%S") + '-'*16)


#----------------------------------------------------------------------------
# import configparser
config = ConfigObj('config.ini') #(default_config_files=['config.ini', '.config.ini'])
# def parseArgs(fini='config.ini'):
#   global config 
#   config._load(fini)
#   return config

OVERWRITE=0 #config['default']['Overwrite'] #0 by default
#----------------------------------------------------------------------------

# from driveChrome import browser ,browser2
# # from driveEdge import browser ,browser2
# driver=browser
# tmpDriver=browser2
from seleniumbase import Driver, SB #should choose SB over Driver !!! 20240109
driver=None
sb=None
#chrome window handles are class string
win0=''
win1=''
def rsleep(maxSeconds=180, minSeconds=1):
  rsec = randint(minSeconds, maxSeconds)
  print(f"random sleep {rsec} seconds")
  time.sleep(rsec)

#----------------------------------------------------------------------------
def exportFav(favdb):
  with open(f"songs.txt", 'w') as f: f.write("")
  for k in favdb.keys():
    if re.match(r'url:', k):
      print(f"exporting {k}: {favdb[k]}")
      kk=k.replace('url:','')
      artist =re.sub('__.*', '', kk)
      name=re.sub('.*__', '', kk)
      url=favdb[k]
      cover=favdb[f'pic:{kk}']
      with open(f"songs.txt", 'a') as f:
        f.write(f"""{{
name: {name},
artist: {artist},
url: '{url}'
cover: {cover}
}},""")
    
#----------------------------------------------------------------------------
def getFavSongs():
  favdb={}
  sbd=sb.driver  
  sbd.wait_for_element_present("div.subject", timeout=10)
  songs=sbd.find_elements(By.XPATH, '//div[@class="subject"]/a[2]') #counting from 1, not 0!
  hrefs=[None]*len(songs)
  #gather all links for this page
  for i in range(len(songs)): 
    print(songs[i].text)
    songName=re.sub(r"\[.*", r"", songs[i].text)
    href = songs[i].get_attribute('href') 
    favdb[f'song:{songName}']=href
    hrefs[i] = f'song:{songName}'
  print(hrefs)
  for i in range(len(hrefs)):    
    href=favdb[hrefs[i]]
    sbd.uc_open_with_tab(href)
    # rsleep(3)
    # sbd.wait_for_element_present("div.player4", timeout=20)
    sbd.highlight(By.XPATH, "//div[@id='player4']")
    # sb.activate_jquery()
    # print(sbd.execute_script("return jQuery('ap4.list')"))
    # sbd.execute_script("jQuery('console.log(ap4)')")
    mUrl=sbd.execute_script("return ap4.music.url")
    mUrl=f'https://hifini.com/{mUrl}'
    title=sbd.execute_script("return ap4.music.title")
    author=sbd.execute_script("return ap4.music.author")
    pic=sbd.execute_script("return ap4.music.pic")
    print(f'{title} - {author} : {mUrl}')
    favdb[f'pic:{author}__{title}']=pic
    favdb[f'url:{author}__{title}']=mUrl
    #get redirected QQ url for the music
    # #this will download the music
    # sbd.uc_open_with_tab(f'https://hifini.com/{mUrl}')
    # rsleep(3)
    # qUrl=sbd.current_url
    r=requests.head(mUrl, allow_redirects=True, stream=False) #only metadata, not to download
    qUrl=None
    if r.status_code == 200: 
      qUrl=r.url
      favdb[f'url:{author}__{title}']=qUrl      
    print(qUrl)    
    print(f'{title} - {author} : {qUrl}')
    rsleep(30, minSeconds=10)
    # break
  return favdb

def getFavList(favdb={}):  
  sbd=sb.driver
  # sbd.switch_to.window(win0)
  sbd.uc_open_with_tab('https://hifini.com/my-favorites-1.htm?orderby=desc')
  nfavH=sbd.find_elements(By.XPATH, "//ul[@class='nav nav-tabs card-header-tabs']")[0]
  print(nfavH.text)  
  nfav=int(re.sub(r".*\(([0-9]*)\)", r"\1", nfavH.text))
  # print(nfav)
  npage=int(np.ceil(nfav/10))
  print(f"npage= {npage}")
  
  for i in range(1, npage+1):  
    # sbd.switch_to_window(win1)
    sbd.uc_open_with_tab(f'https://hifini.com/my-favorites-{i}.htm?orderby=asc')
    psongs=getFavSongs()
    print(psongs)
    favdb.update(psongs)
    # print(favdb)
    rsleep(5)
    # break
  
  return favdb
#----------------------------------------------------------------------------

#$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
def debugModules():
  for m in set(sys.modules).union( set(globals()) ): #& is the intersection
    try:
      print(f'Imported module version of "{m}" is: {sys.modules[m].__version__}')
    except Exception as e:
      # logger.exception(e)
      logger.warning(f'Imported module "{m}" does not have __version__')

def getSeliumBase(fini='browser.ini'):  
  cfg=ConfigObj(fini)
  chrome=cfg['chrome']
  args=chrome['arguments']
  if 'proxy-server' in args: args['chromium-arg'] = f'{args['chromium-arg']} , --proxy-server={args["proxy-server"]}'
  return SB(test=True,  uc_cdp=True, binary_location=chrome['chromePath'], user_data_dir=args['user-data-dir'], incognito=False, chromium_arg=args['chromium-arg']) #, proxy='5.161.74.235:8215')
      
def main():
  # debugModules()
  global OVERWRITE, config, sb, driver   
  # parseArgs('config.ini')
  for k in config['default']:
    logger.info(f"{k}= {config['default'][k]}")
  OVERWRITE=int(config['default']['Overwrite'])
  
  tday = datetime.today()  
  op='fav' #sign
  if len(sys.argv)>1: op=sys.argv[1]
  fzdb=f'hifini.z'
  if len(sys.argv)>2: fzdb=sys.argv[2]
  favdb={}
  if Path(fzdb).exists(): [favdb] = joblib.load(fzdb)
    
    
  #starting URL with parameters selected for many sub-types
  # sURL='https://oig.hhs.gov/fraud/enforcement/?type=covid-19&type=criminal-and-civil-actions&type=fraud-self-disclosures&type=grant-and-contractor-fraud-self-disclosures&type=state-enforcement-agencies#results'  
  # sURL='https://oig.hhs.gov/fraud/enforcement/?type=covid-19&type=criminal-and-civil-actions'  
  sURL='https://hifini.com/'
  if 'OVERWRITE' in os.environ: OVERWRITE=int(os.environ['OVERWRITE']) #overwrite global var 
    
  #run-----------------------------
  scraped=0 
  with getSeliumBase(fini='browser.ini') as sb: #  
    driver=sb.driver    
    #create 2 windows, one for news list, another one for content from justice.org
    driver.get(sURL)
    logger.info(f'current window: {driver.current_window_handle} and its type: {type(driver.current_window_handle)}')
    # win0=driver.current_window_handle
    # driver.switch_to.new_window('window')
    # win1=driver.current_window_handle
    # driver.switch_to.window(driver.window_handles[1])
    
    if op=='fav': #download my favorite songs' URLs
      favdb = getFavList(favdb)
    elif op=='sign': #sign to get 1 gold coin each day
      pass
    else:
      logger.info('Unknown operation, fav/sign supported')
      return
    joblib.dump([favdb], fzdb) #save after parsing each NPI
    exportFav(favdb)
if __name__ == "__main__": main()
#$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$