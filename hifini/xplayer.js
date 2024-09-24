var ap = new APlayer({
  element: document.getElementById('xplayer'),
  narrow: false,
  //fixed: true, //<!--吸底模式 -->  
  mini: false, 
  autoplay: false, // Google Chrome disabled autoplay and require user's response before auto playback
  loop: 'all',
  order: 'random',
  volume: 1,
  preload: 'none', //'auto',
  showlrc: false,
  lrctype:3,
  mutex: true,
  theme:  '#ad7a86', // '#b7daff',  //'#0a0a0f',//
  listFolded: true,
  audio: [
{
name: '只要平凡' ,
artist: '韩红' ,
url: 'http://ws.stream.qqmusic.qq.com/C400002bTTHy36ujta.m4a?guid=694882362&vkey=2F7CF40FE0F9A84B5990F497C45D8FA341F6152830BC5542469787CF37164374BB67EDC2576621DDE008C37DF7F4F6D37540A2220527B7C9&uin=&fromtag=103032' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000001NlGYI4IemoI.jpg'  ,
},{
name: '那个冬季' ,
artist: '韩红' ,
url: 'http://ws.stream.qqmusic.qq.com/C400001UvbFD0xGg0g.m4a?guid=82255532&vkey=3EBCAF2B384D4194531DE7457EA9733B760BF31090905B431E67D9603536CE275127B0B11E8A9B8A3EF342D44FB7961E75FA0428F163399F&uin=3882469177&fromtag=103032' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M0000037wELT3srhxc.jpg'  ,
},{
name: '天亮了' ,
artist: '韩红' ,
url: 'http://ws.stream.qqmusic.qq.com/C400001jnIPj2Dvm8J.m4a?guid=68052219&vkey=BBE59B00280366054BF20E995062519FEF734711DE8BBBFAE2B24B6296A6A6B2096FE15C1BCE5898993735C5F976507ACE1CBDC5E2BC49CE&uin=3882469177&fromtag=103032' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M0000037wELT3srhxc.jpg'  ,
},{
name: '美丽的神话' ,
artist: '孙楠' ,
url: 'http://ws.stream.qqmusic.qq.com/C400001C6NF12qdWYs.m4a?guid=2046395&vkey=8037B506A548910BA2DC9A880BAED81EBDD0D607BF3D53BA9C15E467AD3E91ACB22958CA42195D181A8343D0F2B1C1F1EFB88CA7FD46D8AA&uin=904921857&fromtag=103032' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M0000023YRbq0UUpdn.jpg'  ,
},{
name: '九儿' ,
artist: '韩红' ,
url: 'http://ws.stream.qqmusic.qq.com/C400003PGWra0J4yze.m4a?guid=4547011&vkey=46DDD8B81E21D41B8CB215F71411C33C656DBB278E366FF5B1667D577B379FCF1E482EB798C6CCFFA57E81B8EFACA0DC00E89BF936BE686B&uin=&fromtag=103032' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M00000330vIN2JcQ33.jpg'  ,
},{
name: '家乡' ,
artist: '韩红' ,
url: 'http://ws.stream.qqmusic.qq.com/C400002CUSg12RVx7f.m4a?guid=54395478&vkey=77AEE051883D191FC65B1F343772A7DF351C19024E807490A95711B6AE682A3DC10AD4DB6245959A7CFD7FE2D853F2C873031B2C40DF8B79&uin=&fromtag=103032' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000002RcWWL3He6Aq.jpg'  ,
},{
name: '爱是你我' ,
artist: '刀郎' ,
url: 'http://ws.stream.qqmusic.qq.com/C400003h4jHq4IHWo8.m4a?guid=5000206&vkey=808C48750E4351B336E68850236504DEE0F7246A33FBA32EFC967E84F37836246F40FAAD986B8C8133D3D8D4D0BF11B42ED3375BD69BAD02&uin=904921857&fromtag=103032&src=C400002Yi6020yjVUH.m4a' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000003A5ZUG2SVEY4.jpg'  ,
},{
name: '问情' ,
artist: '江淑娜' ,
url: 'http://ws.stream.qqmusic.qq.com/C400000cQi5L2BK0Cs.m4a?guid=237374&vkey=8B0D2D5A4D20715765B2E229978E407D6CD441B02D88C179E24E638F9214139F33944317A3E5129CCCBDD8695C030A2F1E3EB2406D0390C1&uin=95272751&fromtag=103032' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000001hzatl3YF6Dg.jpg'  ,
},{
name: '莫再悲' ,
artist: '林子祥' ,
url: 'http://ws.stream.qqmusic.qq.com/C400000m1Njd0FEl2P.m4a?guid=24525896&vkey=B205C84965568A741D0E642C40924C68159B6996D95A147A368DB426D793F7C4260967DF4966ED03CAA11DBB1B32E888419838302CB17041&uin=3935802489&fromtag=103032&src=C400000I3XJW2jxALo.m4a' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000000cQ2JX4YzVSw.jpg'  ,
},{
name: '真的汉子' ,
artist: '林子祥' ,
url: 'http://ws.stream.qqmusic.qq.com/C400001tra2u3AIdIE.m4a?guid=212010&vkey=A14335BE23E6F373453198672D6578E8A5F5C71CE0DB3BB7236C55E0530E26C910A1C42FB18FE689B5234893A420F11C93EAF9C41810DC47&uin=3894766636&fromtag=103032' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000002lPVAj18zWvV.jpg'  ,
},{
name: '情人知己' ,
artist: '叶倩文' ,
url: 'http://ws.stream.qqmusic.qq.com/C4000026DtrW2TW7Af.m4a?guid=252887&vkey=97F9C177E410398BD4B9D904B54C1BE74C5E18F427FEEBE4263B37A0C790106E8622C1B1C81554524683338E89B965142F9F12ED06E5790A&uin=2529038109&fromtag=103032&src=C400001BoJnm1LLjPs.m4a' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M0000036f5CW0XglXn.jpg'  ,
},{
name: '驿动的心' ,
artist: '叶倩文' ,
url: 'http://ws.stream.qqmusic.qq.com/C400002uqhQr33Hvdw.m4a?guid=770341503&vkey=0DDA35F2753C76C4B1B8880CD569211723F00F9AEED1475F51EDB4583AC0208BAFC3627A4CB0B83FA50F0B05B7C27445AF62645993783766&uin=3961673309&fromtag=103032&src=C400001TmBYj0oKnuP.m4a' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000003BdVWg47PTG6.jpg'  ,
},{
name: '伤逝' ,
artist: '叶倩文' ,
url: 'http://ws.stream.qqmusic.qq.com/C400000EVEUB1WcQPr.m4a?guid=615362&vkey=141E6C21946F372554C716BAFB11C31401E10947A16C5349A2C6E66099DE18748301A9CB216E209079799FD0FE456DBED11AD36CBDBBCF7F&uin=&fromtag=103032' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000000g1nSu0uv1Vf.jpg'  ,
},{
name: '真心真意过一生 (快乐随风版)' ,
artist: '叶倩文' ,
url: 'http://ws.stream.qqmusic.qq.com/C400003toWFi3C0iS9.m4a?guid=6538172&vkey=7D0B6AE88B9ED9FB31CA5E38245A8BAEFC2E0CCCDABA43B01D4927D4BD245D9C610FE821A9D17F6E4B519E2172D932E2DD1E37C232166931&uin=3830123772&fromtag=103032' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000003BdVWg47PTG6.jpg'  ,
},{
name: '今天' ,
artist: '半吨兄弟' ,
url: 'http://ws.stream.qqmusic.qq.com/C400000Nv9lc4fJOFj.m4a?guid=8782218&vkey=7096C72A275A2B5BE1B2AA4DA427695BA6541032EDF1D2AA09467D45A3691094EB231500EEE1914AB91E3BC88765BCCD1056336BE821EC28&uin=95272751&fromtag=103032' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000004KioVf3KdSu6.jpg'  ,
},{
name: '女人花' ,
artist: '梅艳芳' ,
url: 'http://ws.stream.qqmusic.qq.com/C400003pA1rw4LgEsM.m4a?guid=745204&vkey=D5303BA8DE10B3867B15C85EBB1410BFF05100EBDC254F0B7CB4D2DEF6BDA8DB8868F625E4965F387B49B7B1A2658193CAF159CE85C758D4&uin=2529038109&fromtag=103032&src=C400003jynm20BMy4f.m4a' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000000KSBeM2r5WbK.jpg'  ,
},{
name: '战马 (DJ默涵版)' ,
artist: '崔伟立' ,
url: 'http://ws.stream.qqmusic.qq.com/C400000TATqO1D1kGD.m4a?guid=5333947&vkey=3B8DAD05C5BE2C5241C00ADA90B14AD5AFEF6985583FB873C9A2F34F780934B2B328FC722CB11A89A45A75AF69B81A0311E6C68917760AA0&uin=95272751&fromtag=103032' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M0000000TM9y3jqwgV.jpg'  ,
},{
name: '月亮之上' ,
artist: '凤凰传奇' ,
url: 'http://ws.stream.qqmusic.qq.com/C400004d8BPy0O6kGQ.m4a?guid=78526246&vkey=B00D7C674F7EA8D647E74B1E08E9979A44C4E0C89F217B3F8232A3CF18A754C3C0D73C48DFDC05727E5A111F95FB68CC4CB809AEE096C9F2&uin=2529038109&fromtag=103032' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000002jdWB13atXv8.jpg'  ,
},{
name: '爱的代价' ,
artist: '李宗盛' ,
url: 'https://hifini.com/https://m.hifini.com/music/002RndLi3ubspW.m4a' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000000q3lXx3ee9fa.jpg'  ,
},{
name: '当爱已成往事' ,
artist: '林忆莲' ,
url: 'http://m804.music.126.net/20240924123007/8156edb6077ec913dc2497b17fa722fb/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/28482399430/2111/2a7d/328d/ddd2f4d7665f899ac17111237942e176.mp3' ,
cover: 'https://p2.music.126.net/S92wHxkuTq7L3yeR0Vpyiw==/80264348845273.jpg?param=130y130'  ,
},{
name: '飘洋过海来看你 (Live)' ,
artist: '李宗盛' ,
url: 'http://ws.stream.qqmusic.qq.com/C400002iM2Rj23e4H7.m4a?guid=5751285&vkey=D30C29F3ADFD76D5AA94E914640968D864E6CAA6922F1396B5E520AE86F734F4462D45F7F4DEB103E2D90171B8EF4C30F7B5ECBB9158332C&uin=3894766636&fromtag=103032' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M0000028Pdb00tG9aA.jpg'  ,
},{
name: '山丘' ,
artist: '李宗盛' ,
url: 'http://ws.stream.qqmusic.qq.com/C400003WM5WQ4VlEuc.m4a?guid=84610967&vkey=85892ACD26D9E93F3660190EC1AB133C4815AB087278DA06D7F98F55425FF57BB04862D3579F42D2B4926A48FBFFF00410F54F50E700CBBC&uin=2529038109&fromtag=103032' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000003pvlsM2k3kE3.jpg'  ,
},{
name: '云宫迅音 (2024版)' ,
artist: '黑神话：悟空' ,
url: 'http://ws.stream.qqmusic.qq.com/C400001pRfzb4fCPI2.m4a?guid=9641809&vkey=15EB872B267E274A5F2F1D000F7C897DD4BA545A0377DC1A25FEF1C675E700ED5E139D1E02DF8E7D26AC23310EDF0CC8FAB85A15B78276CE&uin=&fromtag=103032' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000.jpg'  ,
},{
name: '橄榄树' ,
artist: '齐豫' ,
url: 'http://m10.music.126.net/20240924122803/c2c4e76fa724b4a5642e3ecf191e684c/ymusic/025c/5153/0652/56b95d96fef9d156e51b18dce2ab51f8.mp3' ,
cover: 'https://p2.music.126.net/_3vmKQOutdukdrBoLpktvQ==/109951165687498845.jpg?param=130y130'  ,
},{
name: '女人花 (Live)' ,
artist: '齐豫' ,
url: 'http://ws.stream.qqmusic.qq.com/C400003DQPKE0LYoFx.m4a?guid=8293797&vkey=25F9B9EE81B5E679ECB0DC3714D409EF1CB481DA9DC8B9B3AD1DE3A0B5B35EC48D55DDE14208426ECFA482E4AB0125A0FBAABBC086FAB50A&uin=3882469177&fromtag=103032&src=C400002ruf7p2SlMP6.m4a' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000004UGK3X2vFGt0.jpg'  ,
},{
name: '乡愁 (Live)' ,
artist: '齐豫' ,
url: 'http://ws.stream.qqmusic.qq.com/C400002gByAv00LWPy.m4a?guid=33436909&vkey=A607E91A5F9D6151AFFAE5C755DB8F86964FD7A1227DD6EC94FCFBB6D0C3F6C2F5972CDD6B581143031F473D3CE443E30B96B67D91920D9C&uin=3882469177&fromtag=103032' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000003uo2jb2hVCWo.jpg'  ,
},{
name: '风雨无阻' ,
artist: '周华健' ,
url: 'http://m10.music.126.net/20240924121622/771836e32bfcfac2c563c92ca894f20d/ymusic/obj/w5zDlMODwrDDiGjCn8Ky/3859700441/4df8/4675/fb90/eb1e13f709568240ef034e801000e52e.mp3' ,
cover: 'https://p2.music.126.net/y2UXEEzENB_sKMxcw7BX8w==/109951163879398863.jpg?param=130y130'  ,
},{
name: '花心' ,
artist: '周华健' ,
url: 'http://m704.music.126.net/20240924122558/0e2411c437f231804ca5dcf818ee5ed8/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/14080891078/d1d5/0b66/1805/535d0c543ec3d4e789a60cd72ad14b06.mp3' ,
cover: 'https://p1.music.126.net/gT8luuRI717O0JDaE5qfxw==/109951163076126994.jpg?param=130y130'  ,
},{
name: '朋友' ,
artist: '周华健' ,
url: 'http://m804.music.126.net/20240924121529/2a1c1df276c80ac3e6d42490796e48fb/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/28481843033/94a2/450a/3806/348467f9c657f364687970a0039083a4.mp3' ,
cover: 'https://p2.music.126.net/tppfAdLe7tTit1V7Tt30dQ==/109951163076136512.jpg?param=130y130'  ,
},{
name: '刀剑如梦' ,
artist: '周华健' ,
url: 'http://m10.music.126.net/20240924122502/c246e2dece71106f96ff2d8411f7d8b4/ymusic/obj/w5zDlMODwrDDiGjCn8Ky/3859699947/fb58/882f/1f0b/7c240ff0961dab59c7e992cfe77af3b4.mp3' ,
cover: 'https://p2.music.126.net/WvSPLq6pHBE3oFv2CdfLnQ==/109951165611287994.jpg?param=130y130'  ,
},{
name: '难念的经' ,
artist: '周华健' ,
url: 'https://music.163.com/404' ,
cover: 'https://p2.music.126.net/n_7R-J0uWaBPBkm7aVsA_Q==/122045790701114.jpg?param=130y130'  ,
},{
name: '难念的经 (Live)' ,
artist: '周华健' ,
url: 'http://ws.stream.qqmusic.qq.com/C400003Pz2Sw1mDrIS.m4a?guid=1495813&vkey=CB3FEF74E3E65F100C20E33ED4807D0A2AC41B073C603348C0C50BDE39F131732BB32BE872CE8D9B8CCB05F7CDAA68A2D16FE56CF58663FC&uin=904921857&fromtag=103032&src=C400000mAaWv0sugU2.m4a' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000004DeBIU2GvyzZ.jpg'  ,
},{
name: '神话情话 (粤)' ,
artist: '周华健' ,
url: 'http://m10.music.126.net/20240924122311/3b89a211a0087da7a4ca28ae1d630e64/ymusic/obj/w5zDlMODwrDDiGjCn8Ky/3060932667/1118/ab78/5597/d712a6d3b1baaa68f376f22a33127e43.mp3' ,
cover: 'https://p1.music.126.net/Y1IIadn7rjGrZA5IAKLtBA==/109951163270175127.jpg?param=130y130'  ,
},{
name: '真心英雄' ,
artist: '成龙/周华健/黄耀明/李宗盛' ,
url: 'https://hifini.com/https://m.hifini.com/music/真心英雄.m4a' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000001CM7JS0PyvUJ.jpg'  ,
},{
name: '凡人歌' ,
artist: '李宗盛' ,
url: 'https://music.163.com/404' ,
cover: 'https://p2.music.126.net/XXlcoIURJoLp3D5YcX1V9g==/109951163071279000.jpg?param=130y130'  ,
},{
name: '奢香夫人' ,
artist: '凤凰传奇' ,
url: 'http://ws.stream.qqmusic.qq.com/C400004OSYKc1ErVSQ.m4a?guid=76903723&vkey=7CEE2055754392B9BEE33EBC72340EBD22F1800BA4CFB77F7C371538B4E2307A291ED11D09DE6EE7248768351E040B4CC59029324EB22B45&uin=3935802489&fromtag=103032&src=C400003XMyG91NpwQ1.m4a' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M0000021YkiD1WR578.jpg'  ,
},{
name: '2002年的第一场雪' ,
artist: '刀郎' ,
url: 'http://ws.stream.qqmusic.qq.com/C400000eonOy2GA8sT.m4a?guid=644476053&vkey=789A8F84FCB05078CEC4A50CA474F8E333C623F97F4247906A123BE87D92184ADF4060631CAC7B7A16DDE5A4E58097D8931D4240D434937B&uin=904921857&fromtag=103032&src=C400000lXwEL21jeJi.m4a' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M0000004Nf5B0zJ6Y4.jpg'  ,
},{
name: '披着羊皮的狼' ,
artist: '刀郎' ,
url: 'http://ws.stream.qqmusic.qq.com/C400000xOk6a3H9VkY.m4a?guid=1985363&vkey=C4C949B2609595F6109CDAA349848E229AD3809C973160568F41A554347B48C7F5A02A5A63D69AD9916239E7B8F58572867306AD6DE28657&uin=2529038109&fromtag=103032&src=C400003SIMxH0FxJLq.m4a' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000004CW3sa0jkN2P.jpg'  ,
},{
name: '冲动的惩罚' ,
artist: '刀郎' ,
url: 'http://ws.stream.qqmusic.qq.com/C400000dPwan4IgHwZ.m4a?guid=449034230&vkey=DD82114D36BE163EA126FB556933ABA786252E3B41A72FC7E67DC811D8D740823769A9AB4B1CB5EF169E143000A703CD3226ACF7AE05DC5E&uin=904921857&fromtag=103032&src=C400004WqF503iQyNP.m4a' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M0000004Nf5B0zJ6Y4.jpg'  ,
},{
name: '爱是你我' ,
artist: '云朵' ,
url: 'http://ws.stream.qqmusic.qq.com/C4000039Y89735bbT3.m4a?guid=1864882&vkey=51CE874E6C01D0D2E279343B776D958A6EB436308E9A65F2430FED268E8991FD1AF68E4860D8F2A147E14958F38CB9E676F145B6C267ACFF&uin=3935802489&fromtag=103032&src=C400001rwFmF1ReRuy.m4a' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000001rlK3X4Vzx55.jpg'  ,
},{
name: '天若有情' ,
artist: '袁凤瑛' ,
url: 'https://music.163.com/404' ,
cover: 'https://p1.music.126.net/f2_DZSqxD4PU3shoi-yTPQ==/106652627897489.jpg?param=130y130'  ,
},{
name: '滚滚红尘' ,
artist: '袁凤瑛' ,
url: 'https://music.163.com/404' ,
cover: 'https://p2.music.126.net/thXkupdKJtuSswDv4u-sow==/68169720928612.jpg?param=130y130'  ,
},{
name: '不能说的秘密' ,
artist: '周杰伦' ,
url: 'http://ws.stream.qqmusic.qq.com/C400000cZNr42YkLl1.m4a?guid=89066504&vkey=BD17D949420AD986C7D94D415500C2C0AED917E00B86A13C99E49789386C7535E8D4C8E398B1DF1A4BAD5826690E9CD100429E9B4F3BDEE9&uin=3961673309&fromtag=103032' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000001UP7mW458ipG.jpg'  ,
},{
name: '落花流水' ,
artist: '蔡琴' ,
url: 'http://ws.stream.qqmusic.qq.com/C400003x2w2r15HWXM.m4a?guid=774404013&vkey=AEF2EBE8AFD4FC47DC58C235D5F5F533951509760D5BBCC218DFD558F20E7048D373096EB75DD2302A9CCE03406B6373CD0B2806CFAE1ECE&uin=904921857&fromtag=103032' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000004KfFOf3YzHlx.jpg'  ,
},{
name: '如梦令' ,
artist: '蔡琴' ,
url: 'https://music.163.com/404' ,
cover: 'https://p2.music.126.net/D2o3piQTIkPcrbHsb-C-ug==/109951165705495208.jpg?param=130y130'  ,
},{
name: '恰似你的温柔' ,
artist: '蔡琴' ,
url: 'http://ws.stream.qqmusic.qq.com/C400000z0Ex02a32Cz.m4a?guid=52879655&vkey=75D8D50CAAB744778862F5777408D2BB2C625FF46308B64AA52085B63F31ED243F132C8916EF57B568F41030D25DB725CB1D240EC57A2A60&uin=904921857&fromtag=103032' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000004GTWOM2Dm9N8.jpg'  ,
},{
name: '被遗忘的时光' ,
artist: '蔡琴' ,
url: 'http://ws.stream.qqmusic.qq.com/C400000zSzMh3XvOGz.m4a?guid=6637758&vkey=1E9906046B156A04FC395E3E1329E9EB69D93A8B27765B8D7A763ED4E9259252E70B2162E86DAD02AC69ED17A515E9D1B0481FAB749D1B5B&uin=904921857&fromtag=103032' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000004GTWOM2Dm9N8.jpg'  ,
},{
name: '南屏晚钟' ,
artist: '蔡琴' ,
url: 'http://ws.stream.qqmusic.qq.com/C4000023Eujp3FKTKp.m4a?guid=46088166&vkey=F664C500D3DF558D7A6AF69367F811BA38AA2884B92D64EB341C7DC1778F2D4B2B260140CA5AA5041B819D4EE21D1B0EFCFE747B42D6DD73&uin=904921857&fromtag=103032' ,
cover: 'http://p1.music.126.net/ywlEDcdWT6PE8RydPYfXlg==/109951163213084637.jpg?param=130y130'  ,
},{
name: '你的眼神' ,
artist: '蔡琴' ,
url: 'http://ws.stream.qqmusic.qq.com/C400002aJAKZ3yBRuC.m4a?guid=5208981&vkey=2D7A51975B74D4385C1B5D9EA9B2F7757241924A63AEB3534D04E59A344501C6B631128ED99316EC4268242A6D482B84FD91336F27802B36&uin=&fromtag=103032' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000002jryu73k1QQx.jpg'  ,
},{
name: '渡口' ,
artist: '蔡琴' ,
url: 'http://ws.stream.qqmusic.qq.com/C4000041aqiP3k8MYA.m4a?guid=316197899&vkey=26FB205A4A0D811835EB96DFB51C859E21C6DB8A2993CFCD5D40FAB8A44AD6E47131B4F266F1A38F88BAA18EA52170813F37CD35724D96A1&uin=3935802489&fromtag=103032' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000004GTWOM2Dm9N8.jpg'  ,
},{
name: '涛声依旧' ,
artist: '钟明秋' ,
url: 'http://ws.stream.qqmusic.qq.com/C400004QVmRv2npzEg.m4a?guid=296932&vkey=2AE49AC2ED4D406B9B8DFC474AC354E23E515E4F5FFF8F3BA3051C1A696D68A4841D6373A37EAB0299B20A721CDF14C147B5979949BC9FA8&uin=3961673309&fromtag=103032&src=C40000399H1o46Rdcn.m4a' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000004g1k233vDgQZ.jpg'  ,
},{
name: '女儿情 (粤语对唱版)' ,
artist: '钟明秋' ,
url: 'http://ws.stream.qqmusic.qq.com/C400001DwwVP1zQDka.m4a?guid=328757&vkey=DF24A365890E7FBA7683D0BB2E86FB5D58B57588AE3A1954E6114E93A0EBE82082B6103C94E8EF795CCABF9CD0E19E0C7A338775CADA1197&uin=&fromtag=103032&src=C400003UJAFj42ZjbY.m4a' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000003rMykx3OJSfn.jpg'  ,
},{
name: '男儿当自强' ,
artist: '林子祥' ,
url: 'http://ws.stream.qqmusic.qq.com/C4000029hB6F0gObKo.m4a?guid=2500361&vkey=0AA604C663CF3A79353BDA8444B777FB99F89CE7AC8500520500C786CFDD6697CBC59AF3A6293BAF423B145A9C3939C4B187F204D2C8440E&uin=&fromtag=103032' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000001HyhnA4fzM8Q.jpg'  ,
},{
name: '长路漫漫伴你闯' ,
artist: '林子祥' ,
url: 'http://ws.stream.qqmusic.qq.com/C4000029VZNp2ygvqH.m4a?guid=3844184&vkey=44AB2CD92D8BF9BCB21D3446E2E9E18934B83F973A3D5BC60AE252726DE72EBA3E401F768BC1C3F633542F184253D5C07C4993A069B35A21&uin=2529038109&fromtag=103032&src=C400004DRakm2YJE4L.m4a' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000002EJxDo35nWT3.jpg'  ,
},{
name: '敢爱敢做' ,
artist: '林子祥' ,
url: 'http://ws.stream.qqmusic.qq.com/C400003YfjvW0gWLJG.m4a?guid=66336816&vkey=F25F7FBEF44C007791B5C42C8C2B4D0B3A8F4A3437496A995FE0A55A0065B66C578BF7111D21D484321E05AB6021DEDC10CAE6B209F0A051&uin=904921857&fromtag=103032' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000004ajxtj44cyAN.jpg'  ,
},{
name: '谁能明白我' ,
artist: '林子祥' ,
url: 'http://ws.stream.qqmusic.qq.com/C400004R22S21o8owM.m4a?guid=122577&vkey=D09132F5A12BBA9F60985212FB126E9D7666490DFB6907F12C4572C1B2C67C76110FD17147D2526C519A126AF525701434E2F60382D53D56&uin=2529038109&fromtag=103032' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M0000009fBmG3qdBzw.jpg'  ,
},{
name: '选择' ,
artist: '叶倩文' ,
url: 'http://ws.stream.qqmusic.qq.com/C400001zAyti4N4GLm.m4a?guid=7083199&vkey=220CC82B694B4F66240B2320318CFEE140FB231948DC6824D699FC08F7409CCD1D5285496F9004A97C2C17D944A3CA712CE490E338F91CBC&uin=3882469177&fromtag=103032' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000004C9eea1vzHP7.jpg'  ,
},{
name: '伤逝 (国语)' ,
artist: '叶倩文' ,
url: 'http://ws.stream.qqmusic.qq.com/C4000016fomk1zhtPy.m4a?guid=356183364&vkey=CBEBA3943AAA53AC223ECBE2321058EEDAF89BCCAA94DE3259496A2B9BAA6387505EF81358E969E5BE4E0CFF701A9DC2E564B0ECB02E49A3&uin=&fromtag=103032' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000000g1nSu0uv1Vf.jpg'  ,
},{
name: '潇洒走一回' ,
artist: '叶倩文' ,
url: 'http://ws.stream.qqmusic.qq.com/C400002y1ec72HcE2h.m4a?guid=515631&vkey=4310C3473BFCB8E3E8F99D16603A5493F6B764CA10C8A763F1D08015AC7E21BA617877ED15BF6E2AB39C2DD1D654B6376611204A36D058FE&uin=904921857&fromtag=103032' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000004elsWz3Aa9I9.jpg'  ,
},{
name: '等我熬过所有苦' ,
artist: '大美' ,
url: 'http://ws.stream.qqmusic.qq.com/C400002xIr9U3xu3dZ.m4a?guid=688715&vkey=A881B31606BD64A630B8DFD243AE4049870C9F760E10B8150BEA9A2150C5A9E0EC17969C159CAFC830ABBD782534BE7A23D581D260C549B1&uin=&fromtag=103032' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M0000033lcMV1OwAXH.jpg'  ,
},{
name: '欢笑之歌' ,
artist: '叶倩文' ,
url: 'http://ws.stream.qqmusic.qq.com/C400003BqRvD1IRRnU.m4a?guid=9016199&vkey=6D8D9E6903C3257CD24F0234CD183D4158F54B53CA5EA07EF676D90CD8EF7B836A81F9F236368FEDFDF502986464C1F8FBC5F2496018B92F&uin=&fromtag=103032&src=C400000qCoHc2zLNQR.m4a' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000003BfOMK0fTtdj.jpg'  ,
},{
name: '我是谁 广东版' ,
artist: '成龙' ,
url: 'http://m804.music.126.net/20240924123858/049e6401f7bacdd083c844138a9ce1e0/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/32765999885/7462/0f9b/e859/3af2417d54c8e5aaba63c40b493162b5.mp3' ,
cover: 'https://p1.music.126.net/QsYEOzW1Nsix2knqNe_uEA==/3223768095295377.jpg?param=130y130'  ,
},{
name: '醉拳' ,
artist: '成龙' ,
url: 'http://m704.music.126.net/20240924123935/a9c25ae8dd2fabb9f21c8ec16255738b/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/11985443689/959b/61d3/75a5/f32d359aaea283b4711cd43b8a77443f.mp3' ,
cover: 'https://p2.music.126.net/tRdJt5Ql68Jaj0o32huwCw==/101155069767489.jpg?param=130y130'  ,
},{
name: '问心无愧' ,
artist: '成龙' ,
url: 'http://m10.music.126.net/20240924124007/d5d97a0433c669fd82647430bfafd87b/ymusic/obj/w5zDlMODwrDDiGjCn8Ky/3662069392/c230/adf2/c8a2/69fe07ad3ee46dd3b74678d67e194ab4.mp3' ,
cover: 'https://p2.music.126.net/zPWW92VdueQAePpc7k1_KA==/109951163069123395.jpg?param=130y130'  ,
},{
name: '男儿当自强' ,
artist: '成龙' ,
url: 'http://m10.music.126.net/20240924124046/2500a7c83a637dfdcd0a40285cc0b8fa/ymusic/obj/w5zDlMODwrDDiGjCn8Ky/3662079520/572d/3e5f/8c23/25ef2fc32d6f454baea77f202e5f3386.mp3' ,
cover: 'https://p1.music.126.net/zPWW92VdueQAePpc7k1_KA==/109951163069123395.jpg?param=130y130'  ,
},{
name: '壮志在我胸' ,
artist: '成龙' ,
url: 'http://m10.music.126.net/20240924124114/ba84b59a7cf80ca39cd6937d8dbb77a5/ymusic/obj/w5zDlMODwrDDiGjCn8Ky/3431352507/e25d/9ade/a254/0ba55daac148901e2142aec0df1f82a0.mp3' ,
cover: 'https://p2.music.126.net/5AVy-LvitnbT_nYgVG4jeA==/81363860456107.jpg?param=130y130'  ,
},{
name: '擦肩而过' ,
artist: '韩红' ,
url: 'https://hifini.com/https://od.lk/s/MzVfMzg4NDczNTVf/%E9%9F%A9%E7%BA%A2%20-%20%E6%93%A6%E8%82%A9%E8%80%8C%E8%BF%87.mp3' ,
cover: 'upload/avatar/000/769413.png?1702528934'  ,
},{
name: '知否知否' ,
artist: '胡夏' ,
url: 'http://ws.stream.qqmusic.qq.com/C400002krvKI4Jgvq9.m4a?guid=959439855&vkey=6EF848932888714B90DD300B7FCDC2BD6E5C5E3F54EFF9EC92223ACA0D3D85E782DD1BE6394B85F267B8C974AAEDEFAE341B9DCFC14B3658&uin=3961673309&fromtag=103032' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000003hzX7h4Flbcb.jpg'  ,
},{
name: '路过人间' ,
artist: '郁可唯' ,
url: 'http://ws.stream.qqmusic.qq.com/C4000042jyJt0aQ0Gd.m4a?guid=77194771&vkey=D94BEC9F7721940EF0B9508E188CFEB6EAF1C36AA49FDA56C58EBE8F36B342A8F79D7F54456347C3AF99DABDD4A4566D95763DFA7ABD7A84&uin=904921857&fromtag=103032' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000004NkJKq0GkHOa.jpg'  ,
},{
name: '水中花' ,
artist: '郁可唯' ,
url: 'https://music.163.com/404' ,
cover: 'https://p2.music.126.net/rxBbH4p-3rt8DMvaU5M8jw==/109951166567127803.jpg?param=130y130'  ,
},{
name: '时间煮雨' ,
artist: '郁可唯' ,
url: 'https://music.163.com/404' ,
cover: 'https://p2.music.126.net/6-tqeY2U5pAePa3vKSuM5w==/19034745300240313.jpg?param=130y130'  ,
},{
name: '知否知否 (女声版)' ,
artist: '郁可唯' ,
url: 'http://ws.stream.qqmusic.qq.com/C400000xfd4p2FtGy6.m4a?guid=289635472&vkey=E1B5DCFA3ACDF9F6DAF21BE66DAF2BBF8B14DDA97EE56924D8980A2C700F7BCF9F5333E9B525EB14349BD73CFAE74E9FE84443AF81C06C2C&uin=3882469177&fromtag=103032' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000003hzX7h4Flbcb.jpg'  ,
},{
name: '天涯 (Live)' ,
artist: '郁可唯' ,
url: 'http://ws.stream.qqmusic.qq.com/C400004gUTEg4fbATN.m4a?guid=538901&vkey=E2CE7A47F9379C48B2BF2B12F932E667809BADF1B0B90674F998980611C86528987B1D88F46C357BD1A469C935CFA24403EC35D924B2C31F&uin=3882469177&fromtag=103032' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000000arR8w36uLS6.jpg'  ,
},{
name: '如果云知道 (Live)' ,
artist: '郁可唯' ,
url: 'http://ws.stream.qqmusic.qq.com/C400003aHxEK1R7JhX.m4a?guid=3323056&vkey=A5078B38028DE45FFA5F22D337F772D923291FB25E69FC879F1DD703159E767FAB15BFD5B00A079DBD73870A62011E29C277CAFD639F6914&uin=3961673309&fromtag=103032' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000004cEJJM3RHaL5.jpg'  ,
},{
name: '天下无敌' ,
artist: '郁可唯/张哲瀚' ,
url: 'https://hifini.com/https://m.hifini.com/music/C400002BqIgA3zBpJ8.m4a' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M0000009Oj3y0eJsiT.jpg'  ,
},{
name: '笑看风云' ,
artist: '郑少秋' ,
url: 'http://ws.stream.qqmusic.qq.com/C400001Ymwjm0egSJE.m4a?guid=108815&vkey=763E75234E630912BBBC85659D14DA1C34F0308364A03F43E97994BC6B61957DCA6DF69542D60CCCF0C8E2DE4560442EE4663F15D8633694&uin=3830123772&fromtag=103032' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000000qE3kp0Ufado.jpg'  ,
},{
name: '天涯孤客' ,
artist: '郑少秋' ,
url: 'http://ws.stream.qqmusic.qq.com/C400002qlUY23Y0gD1.m4a?guid=487554&vkey=8A5A080B2EE85F0E386A7238C4E8FB3AC0DEB50A6F308000D5B99D90B3FE3A4F37E4AEE3673EF841B880C90C904542766BC6E1B069694F9F&uin=&fromtag=103032' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000000qE3kp0Ufado.jpg'  ,
},{
name: '世间始终你好' ,
artist: '莫文蔚' ,
url: 'http://m10.music.126.net/20240924124651/bff239dc4e32dcdba2514543d8f78519/ymusic/8617/e5e1/da6f/71c8df4a4e041a81d57b32799518bb79.mp3' ,
cover: 'https://p2.music.126.net/yLqhiypydqJyuChUEFLjvg==/3272146612453635.jpg?param=130y130'  ,
},{
name: '慢慢喜欢你' ,
artist: '莫文蔚' ,
url: 'http://ws.stream.qqmusic.qq.com/C400002VtIa50dTs4X.m4a?guid=346792623&vkey=4AF6541A02A2F1DAFF3EF72CEECB6781D903D27F3651C2CBE955900B896579AA765CA55010331302D23689CF21476C470914D3F992745757&uin=3961673309&fromtag=103032' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000001XtPF21kfMXb.jpg'  ,
},{
name: '电台情歌' ,
artist: '莫文蔚' ,
url: 'http://ws.stream.qqmusic.qq.com/C400000XzeaV3yFBax.m4a?guid=1702421&vkey=B624F038912A464D4B9BF44EECE0C37191840154F63B06334C859BD2ABD0DBD4F73D8298B1DA91978CDE62246104C5110D45AF8FDFE58D47&uin=3882469177&fromtag=103032' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000004eNxMk2QyCn4.jpg'  ,
},{
name: '天大地大' ,
artist: '郑少秋' ,
url: 'http://ws.stream.qqmusic.qq.com/C400004UbyuM1bcVtx.m4a?guid=4316636&vkey=4A883110CDB61D36218C1454AA8DAD424BE6FC4FE75AE98189144C3C705C30E6BD940E9747CB8A0C93AE38E9A74F7D00B4E8B3C0196AF2E9&uin=3830123772&fromtag=103032' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000001Gj60s01AYR8.jpg'  ,
},{
name: '楚留香' ,
artist: '郑少秋' ,
url: 'http://ws.stream.qqmusic.qq.com/C400000kLWrj0AZzRO.m4a?guid=2203571&vkey=66C168952E91B72613AE14A2D4E05613F7B6CC892AD168FEB780175CF48D699F36AAB9D5B193169D9A8F7199AE253113C630E45C4D309FE1&uin=2529038109&fromtag=103032&src=C400001icQHb0YeE1o.m4a' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000001vLQDf3Yprug.jpg'  ,
},{
name: '我们不哭' ,
artist: '周华健' ,
url: 'http://m704.music.126.net/20240924124922/f577e02288a79021b2e59fc9a7d00fd8/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/32398570488/7155/24f7/543a/3c16e2042d7c3fa453cf8fbdd36617a2.mp3' ,
cover: 'https://y.qq.com/music/photo_new/T002R300x300M000004JTXyD320k56_1.jpg?max_age=2592000'  ,
},{
name: '飞鸟与鱼 (Live)' ,
artist: '齐豫' ,
url: 'http://ws.stream.qqmusic.qq.com/C400002L2KEz2q6r8O.m4a?guid=899678494&vkey=74BF0F969E8FB720BF9DEA95174501C2D3C45CEE4A042269630CFA33FD9D8C6551FDDB29C4498D84857AF746DC65D125EAD433B12D5FF605&uin=904921857&fromtag=103032&src=C400004ZlY7q1AmqWh.m4a' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M0000024yUeW1rusYw.jpg'  ,
},{
name: '忘忧草' ,
artist: '周华健' ,
url: 'http://m704.music.126.net/20240924125029/dd83920d0da8016d9bf4057f06a7ea85/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/28482330267/e07a/8976/06cb/d25dc35bc2cd6fb7e527169504f829f1.mp3' ,
cover: 'https://p2.music.126.net/9J0uFtmpQ-Ouk3-SPDjwQA==/109951163076131271.jpg?param=130y130'  ,
},{
name: '迷途' ,
artist: '周华健' ,
url: 'http://ws.stream.qqmusic.qq.com/C400003KyEOX1pS5su.m4a?guid=403059&vkey=BBEF40B66CC14F981A54E573330FD0D68C86E658435587726F3786C06CC6220C9F1B042E2199D3A0D373B0D10E32ABCCD73883925E842978&uin=&fromtag=103032' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000001lnAOG218v97.jpg'  ,
},{
name: 'Under Pressure' ,
artist: 'Queen' ,
url: 'http://ws.stream.qqmusic.qq.com/C400004Q56DJ4JZZ0O.m4a?guid=14629204&vkey=63FC0C62610EE8EAA3EE980F1FA029FC2FEDD3EE5B2BF6F2A4D0F486E0CC600595F8609E0E0ACEC2DC157917DB21AA72FC66C7C1E207403D&uin=&fromtag=103032' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000000rYh9x3ml1vJ.jpg'  ,
},{
name: '岁月无情' ,
artist: '郑少秋' ,
url: 'http://ws.stream.qqmusic.qq.com/C40000467MsP0DEb7e.m4a?guid=143131&vkey=12181A40278C860A2EDC1F62AC254B0042A6FB8F17BAD921BBC02CB2AC3BC2D4A51D59B64773C8AA9EBF494252DAC84C7E43BD5A00774E5A&uin=3882469177&fromtag=103032' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000002mTcV02rIGhb.jpg'  ,
},{
name: '从不放弃' ,
artist: '郑少秋' ,
url: 'http://ws.stream.qqmusic.qq.com/C400003RGa2R3cu50C.m4a?guid=816907&vkey=DECC3CFEB69053402053D6C042A0391C2C8FADAA7952DEC2D2BEC3DDF1D8B05236F9913D6E1B02D2EF754DA9D722C02FBF0EB62472B373E4&uin=95272751&fromtag=103032' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000000IGBqc0fI3Qv.jpg'  ,
},{
name: '人间烟火' ,
artist: '程响' ,
url: 'http://m704.music.126.net/20240924124718/22c33b3ca0b541c6c42fa7340d1aa94b/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/16672208896/9ef4/88a9/8cfd/ff566bc0635a48093ad4143f0cbbce87.mp3' ,
cover: 'https://p1.music.126.net/v0V_wIobKIvP946B0hysjQ==/109951167165571077.jpg?param=130y130'  ,
},{
name: '江南夜色' ,
artist: '程响' ,
url: 'http://ws.stream.qqmusic.qq.com/C400001EuzA6288BMP.m4a?guid=337269517&vkey=D8231709EDAC5E403BA7253F3E0EA4BE3A4B07AD58F8F179BE14880EAA8418BE9C634398C72FD9BABC25F429F9457083A80B3E10A549C9CA&uin=2529038109&fromtag=103032' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M0000001GG1c194DZ2.jpg'  ,
},{
name: '分开那天' ,
artist: '程响' ,
url: 'http://ws.stream.qqmusic.qq.com/C400002CLeQE1qTZVe.m4a?guid=309793875&vkey=F43DC40622B89384AAF6370BAC7E6E4D693E5175984B27D366B9C76C60166B814E18502355138113A8407F8DED93F39E8CA2336F8F31D978&uin=3961673309&fromtag=103032' ,
cover: 'https://p2.music.126.net/t3jM4u95lnT0dMt49LLHJQ==/5831809673760315.jpg?param=130y130'  ,
},{
name: '不再联系' ,
artist: '程响' ,
url: 'http://ws.stream.qqmusic.qq.com/C400002GpBNY28WIQJ.m4a?guid=594332850&vkey=91A9488A94EA62093C9D79D67CCD306C2C912452E077A797292584F15FB496465E4CE122A6DA578FE8E07D78A61D8C1E70467BE408674AE9&uin=904921857&fromtag=103032' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000000hz05a0H3mRE.jpg'  ,
},{
name: '围城' ,
artist: '程响' ,
url: 'http://ws.stream.qqmusic.qq.com/C400002Wy8gi3zjlf0.m4a?guid=8310904&vkey=C9BEDB64C08E47790469D5AFE892CA5182BCDED3A95A4CC476E9DF5F5A0C1682DC81884D150702013391C5B104B8C2040F5992D0200E6B88&uin=3882469177&fromtag=103032' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000001qBkWP0tCTvD.jpg'  ,
},{
name: 'Hurt inside' ,
artist: '程响' ,
url: 'http://ws.stream.qqmusic.qq.com/C400002FwDIz4dJEKx.m4a?guid=9522608&vkey=AD028AA4C042C4A2FB8E2C9164443A90E28C0B5091F96BC4D73B155B671A7F14F13FB411B6F7073872A852566D197C77F0BB60D6A7349C09&uin=3935802489&fromtag=103032' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000000K0WaQ2CdIi9.jpg'  ,
},{
name: '十年之前' ,
artist: '程响' ,
url: 'http://ws.stream.qqmusic.qq.com/C400003IF5WJ0fqcSo.m4a?guid=574052&vkey=E97C2A15CB5E511F1B56DF6F7730D56934F2CAF184DADA11343176A0D0DE8C975B61D912CD9A1A7DB25F87A4EFECBD6081D474A86F182634&uin=3961673309&fromtag=103032' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000001smOHo1z7alH.jpg'  ,
},{
name: '三生缘' ,
artist: '程响' ,
url: 'https://hifini.com/https://m.hifini.com/music/程响 - 三生缘.m4a' ,
cover: 'https://img4.kuwo.cn/star/albumcover/500/98/31/3389133156.jpg'  ,
},{
name: '出卖我' ,
artist: '程响' ,
url: 'https://hifini.com/get_music.php?key=ecx9DEvpz3yKIUjbHd6R4Mec38C0yxxHiFiNixxmRk4uRxxHiFiNixxsDXDX4aGZMoFPuvuCPqwwwHiFiNicomIghwwwHiFiNicomxmVtoGXqmEMW679bDzArxdW&p=MADQAAAAAAAAAAAAAAAAAAC7AUHVGAAAAAAAAAAAAAAAAAAALBBQS7IQB4HQAAAAAAAAAGYXARCHSSYGB4HT6IJPF4TSOEI3HY2EKQCOPUPDCHQGAASQMIY3EEBVUZSQJROA6DZ7EEXS6JZHCENVWCKDKFVAYACGCQMFA4IMDMHFMBKZOBOXAVZGCQZRWEZBGA2FUUAGHUAEC3DBBUOR4PY5OUCHSAQ3HRNEAZ3TMINUCTYDAFZA2JRNEAODO4LPPZPQME2DPQSXMDBJAYKBQGT2LZ7VYOI6CQTQIFRNBE7AHiFiNiYINYUECICHANGHiFiNiYINYUECICHANGHiFiNiYINYUECICHANGHiFiNiYINYUECICHANG' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000002VhMlj0YiBtl.jpg'  ,
},{
name: '君所见' ,
artist: '程响' ,
url: 'http://ws.stream.qqmusic.qq.com/C400000kKql71y6Jqg.m4a?guid=99148100&vkey=B154FF2D7CA79ED47CD544964CBF3BA4AC5B811082DD17C80332B43AA9FD1936D61508E8B6555D1DC8264C6255A7F3B6493117C391C9F68C&uin=3882469177&fromtag=103032' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000003BPZ5A2e7KyW.jpg'  ,
},{
name: '新娘不是我' ,
artist: '程响' ,
url: 'http://ws.stream.qqmusic.qq.com/C4000035Fiay2rr34H.m4a?guid=7970615&vkey=1363C5EDF6C5280826490AF27B77545044675986247F3B3A79F04C3D37556895F3E6F09113E48F39D7B7B03F67E60692652AD30ACB2100BA&uin=904921857&fromtag=103032' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000001TPIbf0a6qgb.jpg'  ,
},{
name: '夕阳之歌' ,
artist: '梅艳芳' ,
url: 'http://ws.stream.qqmusic.qq.com/C4000041Pf7a40eRyP.m4a?guid=663777&vkey=57C2CC4D9009B05D6B45444E60A61F8B57152BE104E455D2D86B305A8A46A68501A80435CC11689F7645F3B7D5F934761A32B4A21B3F1A88&uin=3882469177&fromtag=103032' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000003MEUvN1JRFIa.jpg'  ,
},{
name: '似水流年' ,
artist: '梅艳芳' ,
url: 'http://ws.stream.qqmusic.qq.com/C400002Je6O71i0hvS.m4a?guid=87855728&vkey=1C620F7C6F7D49C875354C621B5096597256F920E00288D919AFC6455A4FB77DE17680858DA05BF3A7E7C3F0CB4EFE025C5CF7C9789BCE04&uin=95272751&fromtag=103032' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000004U4kWq1XmQx0.jpg'  ,
},{
name: '亲密爱人' ,
artist: '梅艳芳' ,
url: 'http://ws.stream.qqmusic.qq.com/C400001pjAHo2nhhPn.m4a?guid=95404685&vkey=F93886F65AC331E39CA2DDDFC0BDE27F1AF57571C85EC2E9C84D5038F027FB0AFDF50ACA41BB97FB94AEAE6C3C425B47B4383017541FBA7B&uin=3882469177&fromtag=103032' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000002q5hzK15ir1L.jpg'  ,
},{
name: '胭脂扣' ,
artist: '梅艳芳' ,
url: 'http://ws.stream.qqmusic.qq.com/C400004fAiFO3qTNXd.m4a?guid=276492&vkey=60EBD5853A930BC715965DFB178884635BD335C9AC7B63501C5C67A1EC1A2A313A9146C9473865A3CFB79A83324C8DEB36D36784FB9C4D7C&uin=3894766636&fromtag=103032' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000002NC3NF01Jzuo.jpg'  ,
},{
name: '人世间 (Live)' ,
artist: '韩红' ,
url: 'http://ws.stream.qqmusic.qq.com/C4000020fwBa42hpKD.m4a?guid=35556151&vkey=FA452EED242D0708F26DBA9568E1984F90AAB01907901ABEF2BC8DFD7F478D7ECC63A79438680C37888AB6AB72E622576A07C8A4B84C89BE&uin=&fromtag=103032' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000.jpg'  ,
},{
name: '只要有你' ,
artist: '那英' ,
url: 'http://ws.stream.qqmusic.qq.com/C4000006GF9d3ZSR9p.m4a?guid=7983056&vkey=A6380C1B5974FEB0711B16DBB872CE1CC9E3CFDF79898439664E8CC6754EEF5478012B3A44313DCD960ACBFED016C66FBA259A152855BF57&uin=&fromtag=103032' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000002FPTQD10CVWp.jpg'  ,
},{
name: '有个爱你的人不容易' ,
artist: '那英' ,
url: 'http://ws.stream.qqmusic.qq.com/C400001UnmHh1CaLEu.m4a?guid=987949105&vkey=C083022C30BECF653B1EB0447A2F2E9C2ABB1185ED3E93EFF42A62A401E3B83F79609F23FE6AF34A5E7C265BB347D5DABF740B21BBA2D4E9&uin=95272751&fromtag=103032' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M0000010bzpH1ZBuvY.jpg'  ,
},{
name: '征服' ,
artist: '那英' ,
url: 'http://ws.stream.qqmusic.qq.com/C400001RPOwt21Oj1I.m4a?guid=821525&vkey=1583A4F873F2C86BB1A168CD9396E6EDCC7D5862085E42BC4719FE5EAD9EC586628E41830E9DCDCF8C2F7DB4E317FC508B21D01E373D2838&uin=3882469177&fromtag=103032' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000003gl6se31pMoh.jpg'  ,
},{
name: '默' ,
artist: '那英' ,
url: 'https://music.163.com/404' ,
cover: 'https://p1.music.126.net/OCGt5ln0lPPtPbVJ3VEKtA==/109951163020570422.jpg?param=130y130'  ,
},{
name: '相约九八 (Live)' ,
artist: '那英' ,
url: 'http://ws.stream.qqmusic.qq.com/C400001tpaSZ1EcJIo.m4a?guid=2051177&vkey=D093D1299F8E64B49E9F9E06EA9D5088C61624AFF0177C80DAAB39F72105922F5747F1FB6840EEAF61D24AC76E43FE6B30092E8EEBB7354F&uin=3882469177&fromtag=103032' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000004fCosH0XuXvN.jpg'  ,
},{
name: '平凡之路' ,
artist: '沈腾' ,
url: 'http://ws.stream.qqmusic.qq.com/C400000SURPj1BFW3j.m4a?guid=8573282&vkey=1E5C39C71F532F17D7F3754D8437784125DD91431B791EEFABC3E9C3F02853DBBFF93E25B31A533EB5AC1039151A062912944FE3520E56CD&uin=&fromtag=103032' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000000dCGzx2XRcY3.jpg'  ,
},{
name: '回家之路' ,
artist: '沈腾' ,
url: 'http://ws.stream.qqmusic.qq.com/C400000bEkfd0mJBrc.m4a?guid=129920&vkey=E33B4C8F73B45C29227A8ADB318F37F2A839E25D7DCD308A217B89FCFA7CDC97F8A4F51CCB569AF6D3E80529423057282C9A4F956207B19D&uin=3882469177&fromtag=103032&src=C400003tbIjA21SA4x.m4a' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000000GpnY52AIWMo.jpg'  ,
},{
name: '路灯下的小姑娘' ,
artist: '贾玲' ,
url: 'http://ws.stream.qqmusic.qq.com/C4000027GSyc1cpEnP.m4a?guid=686522&vkey=5957E630485BB03599453481E4D4C84D553E6556EE3B05D02BA90D6D28A7F867B5AD5A4C2DF9EF33B98B42745F1819114D2044F939BA80AF&uin=&fromtag=103032&src=C4000014G9wr1k6erQ.m4a' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000001ItQiG2MLamK.jpg'  ,
},{
name: '一切都来得及' ,
artist: '贾玲' ,
url: 'http://ws.stream.qqmusic.qq.com/C400002VKvPZ0di33Y.m4a?guid=987810&vkey=7B8ED4651E16B9AEB41B94FA71FF4B639949DE4F87310F1AB9960D3BA087369A1E5A50565F14A6794A9DCA4DC903C5EBB77736EFFF274388&uin=3882469177&fromtag=103032&src=C400000Thags0dKSwz.m4a' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000003AoYiR1JDdqE.jpg'  ,
},{
name: '疯狂的外星人' ,
artist: '黄渤/梁龙/沈腾' ,
url: 'https://hifini.com/https://m.hifini.com/music/000PCeih0yNlV9.m4a' ,
cover: 'https://p2.music.126.net/BeuZdndGdvwLewochKK0aA==/109951163873626650.jpg?param=130y130'  ,
},{
name: '梦一场' ,
artist: '那英' ,
url: 'http://ws.stream.qqmusic.qq.com/C400000gg0en3J7yXq.m4a?guid=738992630&vkey=2BBE04E4DD50FD65AC1F0FC6B30C8CE5C85C151455BA32BE5EC6015E6E3E93953E8C41EA07D42270910D90C6216221F3CECF09B89570E079&uin=3882469177&fromtag=103032' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000004UUP4h2fn0nD.jpg'  ,
},{
name: '白天不懂夜的黑' ,
artist: '那英' ,
url: 'http://ws.stream.qqmusic.qq.com/C400000IOeZF2VgPiu.m4a?guid=516938092&vkey=54BB5F90B07FC4950471FE9CCB26DA54C2A3C0141A89B1EF8B92C79F233242E2816F305CF3764424ED399677A6D3E040C21E553911660EE2&uin=3830123772&fromtag=103032' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M0000034cEPk1ULBnW.jpg'  ,
},{
name: '一笑而过' ,
artist: '那英' ,
url: 'http://ws.stream.qqmusic.qq.com/C400002RtHXx0YeGxw.m4a?guid=74586613&vkey=138EDA7D228CBD93E98338B945FA9362A8EDA3C5CDB3D9A7F1243533143D13552FB94337F98EA3A89A83A36C6179A2D5F1A6B1112D7BC093&uin=3894766636&fromtag=103032' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000002yUcCR37Oshp.jpg'  ,
},{
name: '留什么给你' ,
artist: '孙楠' ,
url: 'http://ws.stream.qqmusic.qq.com/C400003h61Av0r8yLR.m4a?guid=968693004&vkey=1B74FCA38060CFFF8149A2F941C0F6842A0D2B51525C90DC271510CD350B25E564F1D3D8550D9C550DB747694E396FB99280796132A9C272&uin=3894766636&fromtag=103032' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000002cq1pb41nYhZ.jpg'  ,
},{
name: '拯救' ,
artist: '孙楠' ,
url: 'http://ws.stream.qqmusic.qq.com/C400003Aeujd0SIMS6.m4a?guid=9680224&vkey=070EB47E8331704211692F8C202DAD22CDCD45CE8E478C6EC2D0946E6FDC406C9A929E4817E249DD6CE0E01D0E9663F4AE4628C421AA9538&uin=3894766636&fromtag=103032' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000003q4iti4eFRe9.jpg'  ,
},{
name: '不见不散' ,
artist: '孙楠' ,
url: 'http://ws.stream.qqmusic.qq.com/C4000025SnEZ2ADnEi.m4a?guid=41113234&vkey=005FB78585A54A7ADC766E804B1E009B44448E630F5405ECD29D321BDD909BB17B001C69F10D8706CE7CE00199A02633EEB41E4E056AADD1&uin=3882469177&fromtag=103032' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000002cq1pb41nYhZ.jpg'  ,
},{
name: '风往北吹' ,
artist: '孙楠' ,
url: 'https://music.163.com/404' ,
cover: 'https://p1.music.126.net/FK0xIj0dbMnmqGowRjBByQ==/109951163439488066.jpg?param=130y130'  ,
},{
name: '风往北吹 (Live)' ,
artist: '孙楠' ,
url: 'http://ws.stream.qqmusic.qq.com/C4000012G1Pw1Gcl7I.m4a?guid=1982296&vkey=4319015927D4DF0A8CDB326B10871CE5C3344DEF3DFDC639C1FD888679551242686BD6F8CB8781658292479E48DADA748B88FA307FB6D560&uin=3882469177&fromtag=103032&src=C400003ukv9s2KjUjo.m4a' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M00000397Jhs10CKrJ.jpg'  ,
},{
name: '天路 (世界音乐版)' ,
artist: '韩红' ,
url: 'http://ws.stream.qqmusic.qq.com/C400003hCHkg0PJDd3.m4a?guid=58503621&vkey=AE07649426A7EC9B5075869C0BBECC6390E0B1047D23DE58D43F6B0493D01381EC618E79A034906E732717AD38F95647997177C1A058F0B1&uin=3882469177&fromtag=103032' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000002GIYDv3vt4x9.jpg'  ,
},{
name: '路过人间 (演唱会Live限定版)' ,
artist: '郁可唯' ,
url: 'http://ws.stream.qqmusic.qq.com/C4000029PjgL0iEN89.m4a?guid=621634999&vkey=6B64CD4E85B365F11087F414AC120801266241CC2CA3E6E5458F90784BFF1D4ED5FDAE52E0322DA49314232C6B9A7C923BBE52AA26BC79D6&uin=3830123772&fromtag=103032' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000000NuVV21TFY2i.jpg'  ,
},{
name: '沧海一声笑' ,
artist: '黄霑' ,
url: 'https://music.163.com/404' ,
cover: 'https://p2.music.126.net/Hp7aEFznpTv-ECxAfaPRgg==/40681930243424.jpg?param=130y130'  ,
},{
name: '从头再来' ,
artist: '刘欢' ,
url: 'https://hifini.com/https://m.hifini.com/music/刘欢 - 从头再来.m4a' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000001gcDxk3ufHWh.jpg'  ,
},{
name: '人间半途' ,
artist: '刘阳阳' ,
url: 'http://ws.stream.qqmusic.qq.com/C400004XGxlv3rZkrF.m4a?guid=335896453&vkey=F9995D39A668BA54B31DB5CE4F4F84F4AE0CB82E851BF09FE1F6BADD20E5AE0BD58C62AF4D75619339A5F2E845FF428265779DC56AF2A9A5&uin=904921857&fromtag=103032' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M0000040FAM72QfYm7.jpg'  ,
},{
name: '世间水火' ,
artist: '刘阳阳' ,
url: 'http://ws.stream.qqmusic.qq.com/C400001UecdM40qOso.m4a?guid=560502&vkey=159E771FDB761E9CB29E317C676B1F508CDF16CB1325EDA32FDA4627A5E2364D734F1646FFC52AA42CE86B68EAF81E62EA8314D651438BC0&uin=3961673309&fromtag=103032' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000000DFuss01QUSE.jpg'  ,
},{
name: '毒药' ,
artist: '刘阳阳' ,
url: 'http://ws.stream.qqmusic.qq.com/C400002aQOgg0PPK81.m4a?guid=38327797&vkey=12F5604AA18F0D1F0819B9B61ECFBD53CF0F5C92F1403231EED1266BE743801C05E45FD83673AF51EC58718B2429BDA3244434E1D2587DDB&uin=&fromtag=103032' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000000RTtPr2Ce0Q1.jpg'  ,
},{
name: '了无牵挂' ,
artist: '刘阳阳' ,
url: 'http://ws.stream.qqmusic.qq.com/C4000006RYsd4BtKbU.m4a?guid=23283651&vkey=D803D18DA3FFE5CFBB91382F1C8962456D4B1A14C048D7B61C92274FB32521DC48926A73F58A39F00986E2D3FB9565D4742E830FA3BF1082&uin=&fromtag=103032' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000000d4iCk2eOwsE.jpg'  ,
},{
name: '有苦不声张' ,
artist: '刘阳阳' ,
url: 'http://ws.stream.qqmusic.qq.com/C400002v0uMf3Yx0nX.m4a?guid=6709300&vkey=5EB24BD1414C26742826B66B8359A1DD0A0A522A34664F32D1932BB63C41C9DEE81979E4FA7686454FE7AC9264B2E4306AD0E6F6F4E72EA8&uin=3894766636&fromtag=103032' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000002XtUZe4N97fG.jpg'  ,
},{
name: '往事已尘封' ,
artist: '刘阳阳' ,
url: 'http://ws.stream.qqmusic.qq.com/C400003cK2Js43MaY3.m4a?guid=712087&vkey=EA28D8318068E877D6958179A64774C82D9061C2A0898065BC7EA4B286EB5E4842833D10565271785E9D88E6147A68F7A0B0632E8BF99FDC&uin=3961673309&fromtag=103032' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000002vY1AK0n6DBc.jpg'  ,
},{
name: '听客' ,
artist: '刘阳阳' ,
url: 'http://ws.stream.qqmusic.qq.com/C4000028y30G0Vlwej.m4a?guid=348356&vkey=7E11999CDC17727CE306C6E3DEA8EFC01FBD395361389659C77C8E101590E25D1F51A967B965E1CA1D443A0BB448B91EA3C97C35CEB6E582&uin=&fromtag=103032' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000002yjh8V1Nak0W.jpg'  ,
},{
name: '孤枕难眠' ,
artist: '周华健' ,
url: 'http://m10.music.126.net/20240924131428/0dcc2bffed35c736b3f8ad8210ce3a95/ymusic/ddda/5206/2649/7d3812980ac39e849d8845e2a346a848.mp3' ,
cover: 'https://p2.music.126.net/gT8luuRI717O0JDaE5qfxw==/109951163076126994.jpg?param=130y130'  ,
},{
name: '青花瓷' ,
artist: '周杰伦' ,
url: 'http://ws.stream.qqmusic.qq.com/C4000015zR8B3gjJLl.m4a?guid=640518826&vkey=3B8E8EFB8E72DC1836C598369126D958F862F079ECCCB2CC4923C8D9C8A58E6EABCBFE401EDDA667D451EE484FFBDA4952DD1EC8EAA89A4D&uin=3830123772&fromtag=103032' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000002eFUFm2XYZ7z.jpg'  ,
},{
name: '稻香' ,
artist: '周杰伦' ,
url: 'http://ws.stream.qqmusic.qq.com/C4000020wJDo3cx0j3.m4a?guid=3910651&vkey=08539A396D5B1EFC03D466DB85A4707523673BD0A0846BD0F92FAEBBF3129A155DE30141AF2A7489EC6C7FA4928AA4B1D9E64421B55B39E7&uin=3894766636&fromtag=103032' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000002Neh8l0uciQZ.jpg'  ,
},{
name: '夜曲' ,
artist: '周杰伦' ,
url: 'http://ws.stream.qqmusic.qq.com/C4000024jrso28p8VA.m4a?guid=12796133&vkey=ADC5E21BEC6D04A4CD1ED7E8E2872707BFF332B29FC80D72A19DE53C8753366CD9E1DA2ADAEA7BE557024722A3DCB5E0C566FC68BA171F0B&uin=2529038109&fromtag=103032' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M0000024bjiL2aocxT.jpg'  ,
},{
name: '像我这样的人' ,
artist: '毛不易' ,
url: 'https://music.163.com/404' ,
cover: 'https://p1.music.126.net/vmCcDvD1H04e9gm97xsCqg==/109951163350929740.jpg?param=130y130'  ,
},{
name: '消愁' ,
artist: '毛不易' ,
url: 'https://music.163.com/404' ,
cover: 'https://p1.music.126.net/vmCcDvD1H04e9gm97xsCqg==/109951163350929740.jpg?param=130y130'  ,
},{
name: '一程山路 (Live)' ,
artist: '毛不易' ,
url: 'http://ws.stream.qqmusic.qq.com/C400003VqwNd47xjLZ.m4a?guid=954570&vkey=385455AAED5A73F359809506198E00D56958ABC71A283E62C0309D87A4B0B187582A32B3359115F0B21423BA686E6CC97306445003A1B72D&uin=904921857&fromtag=103032&src=C400004eePuq3pHTsg.m4a' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000003wbJW33N45fI.jpg'  ,
},{
name: '牧马城市' ,
artist: '毛不易' ,
url: 'http://ws.stream.qqmusic.qq.com/C400000lhVok1aa6sA.m4a?guid=226576&vkey=F27CD2881E8CE98DF5CAB7C114FB5E836AB0EF57F8D784AA92DB8EA6ADA3D1718DD9D8B60E21D187076EF6B5FFE3093C004C8C8926706B1C&uin=3882469177&fromtag=103032&src=C400000uhMwj387EBp.m4a' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000001yHQzz2rm3lk.jpg'  ,
},{
name: '无问' ,
artist: '毛不易' ,
url: 'https://music.163.com/404' ,
cover: 'https://p2.music.126.net/SJLDel776uY6MEKEU5GbjA==/109951163099854364.jpg?param=130y130'  ,
},{
name: '背叛情歌' ,
artist: '动力火车' ,
url: 'http://ws.stream.qqmusic.qq.com/C400001TOiNH41PgPz.m4a?guid=638802&vkey=09EA457E265F92F310BC813A472A3D743C4733A835A8C114CEF623308D238A93019465DB42DD9E450FCC3F0642DA50C65877E9DE7550D89F&uin=3894766636&fromtag=103032' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000000ZatF13PjqdF.jpg'  ,
},{
name: '那就这样吧' ,
artist: '动力火车' ,
url: 'http://ws.stream.qqmusic.qq.com/C400001lOH9q1eBUzJ.m4a?guid=586725&vkey=F3990BAC6CDE8937F3272657205A60D2BE108E6A2CA6618DC104F8919630A14344B1572FD620F4203E58F6818C6BCBF56BAD92D41DDE3BCB&uin=3935802489&fromtag=103032' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000001k8Aou1MU13e.jpg'  ,
},{
name: '忠孝东路走九遍' ,
artist: '动力火车' ,
url: 'http://ws.stream.qqmusic.qq.com/C400003vuLHG4CP3Pu.m4a?guid=477580&vkey=23EE8F8BE10F093E8293876B0A16E90182535FC44F323D63245C4D45A26135200FBE080F1ADAAFB2103F7FA317F38F1040A9061E5E630538&uin=904921857&fromtag=103032' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000001JIYkd3szAgP.jpg'  ,
},{
name: '酒醉的探戈' ,
artist: '动力火车' ,
url: 'https://hifini.com/get_music.php?key=KM54DRyymHiKIUjbHd6R4Mec38C0yxxHiFiNixxmRk4uRxxHiFiNixxsDXDX4aGZMoFPuuomjG6osg4mnii5SXqmEMW676bDzDqA&p=ORQQ4HY7PY5DAWQADYVQQFKKP5IHGHRZDYYBCLY7AANVAFYVPJPH6XBZDYHTAOA7DY4R4KYGFNNXSUCWDANAKCQFOE6SSHAKC4KXUXT7LQ4R4DZQLURBQKB2LIMFYULHAABBEIQQPUBXEKZEEAAT4DTWMRBVELQNIR5QAFS3HA6DOFIHLNPXYDIDIECDCORXEY3BCKYGFNNXSUCNB4RBWGQ7PYRCMXIHA4UXCQ2JOYXTAI32FI2F2BK2' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000001JIYkd3szAgP.jpg'  ,
},{
name: '终于明白' ,
artist: '动力火车' ,
url: 'http://ws.stream.qqmusic.qq.com/C400002YmYE34Uq9GQ.m4a?guid=644662&vkey=BC4C275F56EB5910442073FAC166F4D426AFA37B97015938F7B97457256EF043D754CA7669CC0EAB40F176972B4E8719709D04CB6C27479F&uin=904921857&fromtag=103032' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000002fNZDg1LHT3o.jpg'  ,
},{
name: '无情的情书' ,
artist: '动力火车' ,
url: 'http://ws.stream.qqmusic.qq.com/C400003CGTMM3ATkcv.m4a?guid=578643492&vkey=E0C1CFC279DB44AC1CBF2EE1C6BAB51A7069DFC39F1E21ACCD979EF40F89E950806709F996FCFBC05AC9D48A8262BF2A8171F5E6E3DD99A0&uin=3894766636&fromtag=103032' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M0000000390v2mFnV6.jpg'  ,
},{
name: '阳光总在风雨后' ,
artist: '许美静' ,
url: 'http://ws.stream.qqmusic.qq.com/C400004Xo5FC18sZjX.m4a?guid=221148909&vkey=36147C2A04EAF2FE35FDCEAE0932A0784D160423565E3055A82C722D067AA2F64AD8B2DEC415D069C94F028497DCC39DCDA4679E573A7114&uin=2529038109&fromtag=103032' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M0000004Z1UZ4Ovcu6.jpg'  ,
},{
name: '城里的月光' ,
artist: '许美静' ,
url: 'http://ws.stream.qqmusic.qq.com/C400003dYlK115X00X.m4a?guid=6901562&vkey=9492CCC4D77EDB2D891EF7D75DA4119AD80651C06A83830F69153C7111EAEC52C5E9CB3501AAD5F2E6A86A069C1F2E1FB659D7B6E9036657&uin=2529038109&fromtag=103032' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000001PY0Sn1iL7dB.jpg'  ,
},{
name: '铁窗' ,
artist: '许美静' ,
url: 'http://ws.stream.qqmusic.qq.com/C400004MjLMf4Q4wJb.m4a?guid=21178858&vkey=71D132F4E81BE8CF4EDA2CF4B7BE693213FF1F51A7099BEAAE857EDE9321374E12B017D58F5ABE9DB321B6964350158F291B12C3E6CD5238&uin=3830123772&fromtag=103032&src=C400001ZoYdg3JAIfS.m4a' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000001PY0Sn1iL7dB.jpg'  ,
},{
name: '只是这人生' ,
artist: '许美静' ,
url: 'https://music.163.com/404' ,
cover: 'https://p2.music.126.net/yX4kQn-1AGR3uL7WKlTToQ==/109951164973466313.jpg?param=130y130'  ,
},{
name: '世界第一等' ,
artist: '刘德华' ,
url: 'http://ws.stream.qqmusic.qq.com/C400001XHDrC34Wpmv.m4a?guid=1828846&vkey=64428062DF8F234A992FFFD4DE2CCD29C69D8B9C967480A526FF01F62B74D30C84FD6AC772CFD1A376B6B9D099A314657DDAF768333A9F1E&uin=904921857&fromtag=103032' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000003V9RQC25xddw.jpg'  ,
},{
name: '天意' ,
artist: '刘德华' ,
url: 'http://ws.stream.qqmusic.qq.com/C400003zHahu0l9xvP.m4a?guid=49002404&vkey=8E877CB5A397EA530DADFDAA776E2AC075F70F28730C4A0FC1124E6319FA5D14826492CEC42B931C8B31919E559DB617698CB4D811BE5071&uin=3882469177&fromtag=103032' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000002wTfmy23tG4V.jpg'  ,
},{
name: '冰雨' ,
artist: '刘德华' ,
url: 'http://ws.stream.qqmusic.qq.com/C400004XYLtg3h675F.m4a?guid=222474884&vkey=A5D5BCA7FF11E63C33AC3D9252A7F3265BF1BC2AA01B538BA30C40BD494A94ECF3A6B977DED8CE7544E042F3415914E62D6015C1738F3D93&uin=3935802489&fromtag=103032' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000003V9RQC25xddw.jpg'  ,
},{
name: '来生缘' ,
artist: '刘德华' ,
url: 'http://m804.music.126.net/20240924132433/aecbf338efc9593bb241e4d44c994681/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/45443294395/8a84/92c3/f8cc/4b3e75f8f6595df74208890904e4bb6a.mp3' ,
cover: 'https://p2.music.126.net/r-DAWP5CdH0xE8aALZ65FQ==/111050674418368.jpg?param=130y130'  ,
},{
name: '练习' ,
artist: '刘德华' ,
url: 'http://ws.stream.qqmusic.qq.com/C400003aFU4131kxGS.m4a?guid=67258866&vkey=330136F63FBC495D5A896F040EB24C202DA2B5C45AA1150721C0B2420B96DFE3A76B5C030F514CC285A2A13FD66CB49D98AC7BDBB4E32A84&uin=904921857&fromtag=103032' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000004Dhl9z3VsEHs.jpg'  ,
},{
name: '一起走过的日子' ,
artist: '刘德华' ,
url: 'http://ws.stream.qqmusic.qq.com/C400002thrJU2Pmd1U.m4a?guid=18796520&vkey=C16AB2E70CDF7A638E916081A7B1A8B2CB1464ED58F9D4F25E74F5A42DF1D4DD789673122CE4D81164743DF5CED2E71DD7DD6EC286ACBA45&uin=904921857&fromtag=103032' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000001MYVwe23zYvz.jpg'  ,
},{
name: '忘情水' ,
artist: '刘德华' ,
url: 'http://ws.stream.qqmusic.qq.com/C400002kpSIL1HbWhj.m4a?guid=415612571&vkey=641D5C85F82C5E0010985B72885509DEB331F4F00FA3828F31EAA36BCEB8521940AAFA86A2EDDFD05DA303CF27A28701322C5F551A74B173&uin=3882469177&fromtag=103032' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000004PDB6S0DGTmZ.jpg'  ,
},{
name: '故乡' ,
artist: '许巍' ,
url: 'http://ws.stream.qqmusic.qq.com/C400004FfS371gJHd4.m4a?guid=9887198&vkey=4AAC7C5BD026F7FE7405C4D9A7FEB6AE087B6049A4D4C5353F96E4BA871CE6C279E9010AA6829F6EDAB1983EC75828ED03714B5BCB88ECAF&uin=3830123772&fromtag=103032' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000003ABtp4335BAq.jpg'  ,
},{
name: '蓝莲花' ,
artist: '许巍' ,
url: 'http://ws.stream.qqmusic.qq.com/C400002Zm0qP2LQsVh.m4a?guid=10572422&vkey=25E2527ECC30578048A27AF40C2E20B4C02E2712EF77D02A3D9610A2228B2D12CEF46FE38660D9A9BE24C8F11C9A473FF9A58BA3F78F69A6&uin=2529038109&fromtag=103032' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000003GDQSA1c4k5T.jpg'  ,
},{
name: '像风一样自由' ,
artist: '许巍' ,
url: 'http://ws.stream.qqmusic.qq.com/C400002vZwLc4FYxvg.m4a?guid=9992322&vkey=BF1370134465FF2551B6F3BD376035E24E344E84CB9CEDB7DD2DA475247242F2D7E8735BC75F2C2839CD3C61EAA72AF60EAAEAA15D9E7B3E&uin=2529038109&fromtag=103032' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000000K1xeI0bbYeQ.jpg'  ,
},{
name: '曾经的你' ,
artist: '许巍' ,
url: 'http://ws.stream.qqmusic.qq.com/C400001mcnKR2Vhzhk.m4a?guid=7388498&vkey=09D06DE84CE373F5B368543ADE8684D830ED3A58A3E8698F97AC59B61CB84586DEDF76B71EB336E7942A5EFEF8FA14CE02873912A2A3E1AD&uin=904921857&fromtag=103032' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000000lrk6m1fk7tl.jpg'  ,
},{
name: '大约在冬季' ,
artist: '齐秦' ,
url: 'http://ws.stream.qqmusic.qq.com/C40000335TF83XqTLs.m4a?guid=90116910&vkey=8A5C9BA1E4CC712558E0F35EFF5E099F78E95E29759276FE91593D3849891FC3EC1AE33EC7DA62113A1A2AB755C7D45C50B7CC59021AB3BA&uin=&fromtag=103032' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000000gLT8E1KF4hZ.jpg'  ,
},{
name: '不让我的眼泪陪我过夜' ,
artist: '齐秦' ,
url: 'http://ws.stream.qqmusic.qq.com/C4000005BITi03foZ9.m4a?guid=1477931&vkey=A9A1CEB9AD0366CD013F789C5B38320014A68E111ECEA0FF5B2DE57111A4CF7F32383FD1B8A12B8B0965619FD3BCF990C91E78FCD25ABAAA&uin=3894766636&fromtag=103032' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000001GVbUR1J23uF.jpg'  ,
},{
name: '笑红尘' ,
artist: '陈淑桦' ,
url: 'http://m10.music.126.net/20240924132927/db741236abad1649fe54f85a94c9471f/ymusic/obj/w5zDlMODwrDDiGjCn8Ky/3443508065/9b6b/2a3b/39d1/53ee6a409fd6fead9a4dd7f023b737e7.mp3' ,
cover: 'https://p1.music.126.net/BKF9fZU9fQ7kAO_lT5S4TQ==/109951164423060899.jpg?param=130y130'  ,
},{
name: '囚鸟' ,
artist: '彭羚' ,
url: 'http://ws.stream.qqmusic.qq.com/C400002tOV6341pZtb.m4a?guid=73379746&vkey=F7A1005306D250D0E1CA6E3220AC871B53CF263EABB5444F8C7AD83DDFA46196FE17D1E9AD59B0941690F7D4C58D49595C719CAF415965E5&uin=904921857&fromtag=103032' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000000d03Oz0HBtqu.jpg'  ,
},{
name: '跟着感觉走' ,
artist: '苏芮' ,
url: 'http://ws.stream.qqmusic.qq.com/C400000Z3cNS39iWzt.m4a?guid=17241941&vkey=29CE8E9C4330C94C1BC155681B121A9FFEFBA31CBD6F4ECAA1EC62CDA99FC7DCC6F72778427B865B729B6E0E058359B55133065ABB0370F5&uin=3894766636&fromtag=103032' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000003KLQo24bQCqR.jpg'  ,
},{
name: '酒干倘卖无' ,
artist: '苏芮' ,
url: 'http://ws.stream.qqmusic.qq.com/C400001xOej71512hX.m4a?guid=5652706&vkey=9F5F2F58558B688DA9DC132D3CF5565ED9F462E7D4E19FC633B75DFFFABA456E8D33891644DF019B6F42240434E103EEC54E09361D7FC1E4&uin=904921857&fromtag=103032' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M0000044zQjY2cJHAs.jpg'  ,
},{
name: '四季予你' ,
artist: '程响' ,
url: 'http://ws.stream.qqmusic.qq.com/C400000pUTAS1Z8qc9.m4a?guid=183518&vkey=10505AD1144FAA52433671C2DB5B5403E3E822C0890EF921A2DAB81D9E24786A68E17E0CE3399E7C0E2100837C70A0B8870667FD0372FB1E&uin=904921857&fromtag=103032' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M00000431aJU0XFrgv.jpg'  ,
},{
name: '左手指月' ,
artist: '萨顶顶' ,
url: 'http://m704.music.126.net/20240924133205/b616e2f42977b509f450f00e99661347/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/28481806040/7418/11ca/d464/a4b35e2f81934d797df7f2fa8e68f963.mp3' ,
cover: 'https://p1.music.126.net/gEia-o05FSas8uJos54Sug==/109951163456726954.jpg?param=130y130'  ,
},{
name: '不染' ,
artist: '毛不易' ,
url: 'http://m804.music.126.net/20240924133242/ee3ad61e66001c9685dc17efbaeb8a20/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/28481692639/7e81/2c54/a8da/0d07ab62ab049e90bfc475cdc21535d3.mp3' ,
cover: 'https://p2.music.126.net/gEia-o05FSas8uJos54Sug==/109951163456726954.jpg?param=130y130'  ,
},{
name: '自由行走的花' ,
artist: '萨顶顶' ,
url: 'http://ws.stream.qqmusic.qq.com/C400000aEXa60CA0oo.m4a?guid=2479282&vkey=7EF9B13BBAECA7B4020EF9A6F8CDA93FFFA75BF0FBE280B7B15211ED6597F88538C2EB68973DC95FA168DAEF7473C56A6201D1BD54FAFAC4&uin=904921857&fromtag=103032' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000001MLeA10l78mu.jpg'  ,
},{
name: '大梦天华' ,
artist: '萨顶顶' ,
url: 'http://ws.stream.qqmusic.qq.com/C400003vaXQ73ZAQv4.m4a?guid=579857875&vkey=CB1B22906D4C932E1D31B66B1AB122AC785BC27736F05E5585BF464A8193BBE2123CD2171E8231615E0249B08E16F1585D8A89659F20C181&uin=&fromtag=103032&src=C400003udxs81E9i3m.m4a' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000003zSTDf0h0qQQ.jpg'  ,
},{
name: '我这一生' ,
artist: '半吨兄弟' ,
url: 'http://ws.stream.qqmusic.qq.com/C400003BJbOZ3AkWma.m4a?guid=72181881&vkey=BFB6BAB48288502EDE151431C61294CBE88ECF44FE6ACDCAAE4CED355870CF2CF396836AE1155406CC3C64F8190D060DFE151C2F2FB2D05F&uin=904921857&fromtag=103032' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000003pYx7E2y0Ubv.jpg'  ,
},{
name: '新鸳鸯蝴蝶梦' ,
artist: '黄安' ,
url: 'http://ws.stream.qqmusic.qq.com/C400001Z5Mqj3JMTl5.m4a?guid=709775588&vkey=035272F0FADBA42C63F1FBECFD25C012D36AFD9C568F27C92B21878292EF586109FEDCCA7608F7E1D152F9CEE0267ACDD287BD8787EE541F&uin=&fromtag=103032' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000000H4sce1by4ys_1.jpg?max_age=2592000'  ,
},{
name: '无名的人' ,
artist: '毛不易' ,
url: 'http://ws.stream.qqmusic.qq.com/C400001wjXrr272hPl.m4a?guid=96542123&vkey=415C04790A1D657418E8D09C0F71CD9D1EB6AC759EDFEB4F5FC3315B63AC28992957F9678647759F7610F284A2B7A7F95914B898086C8993&uin=3882469177&fromtag=103032' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000002mPgSG01LLtu.jpg'  ,
},{
name: '铁血丹心' ,
artist: '罗文' ,
url: 'http://ws.stream.qqmusic.qq.com/C400001RIbLt0rqh7A.m4a?guid=3932384&vkey=65F3D529BC33CEF2520568F1DC2702F74E4893C27FF175515834ED58548943C8E7AC0BC7C8370D9B3C37D4C0F0DB2910C9BD4A95174F1A1E&uin=3894766636&fromtag=103032' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000000zzpBQ2MHa5Q.jpg'  ,
},{
name: '一阵风吹过' ,
artist: '刘阳阳' ,
url: 'http://ws.stream.qqmusic.qq.com/C4000023hp2444Cq56.m4a?guid=217425&vkey=A22B89784BF83E535759AA61F549FAFE5558F818A671E718B9363140710F3F360D25BB9A71C7B1A7797003D36B6B8F7975B8DE104F130AB9&uin=&fromtag=103032' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000003WYcYT1YPtfV.jpg'  ,
},{
name: '情话说给左耳听' ,
artist: '刘阳阳' ,
url: 'http://ws.stream.qqmusic.qq.com/C400001fU5bO2jMD4o.m4a?guid=6790204&vkey=AFC311C81EA0AD306863067C9A7B0BAA07694E11B4DDA46C843D9BBA4FE62ABA383A57E568288FEF150324DF692FE7CCDAF24C7F03622626&uin=3961673309&fromtag=103032' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M0000004SL421qWfu3.jpg'  ,
},{
name: '雪怕太阳草怕霜' ,
artist: '刘阳阳' ,
url: 'http://ws.stream.qqmusic.qq.com/C4000047UDs02MNB4E.m4a?guid=889231&vkey=967C923C196990B2F85BEEBC42EC6FCF294FAF574BF266A7B08C8CB4E0AA8093B36A9B1D3A272F67EE9A808C693F262DD23E4380D006254D&uin=904921857&fromtag=103032' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000003Hq0Mn0dQmAQ.jpg'  ,
},{
name: '晚风' ,
artist: '伍佰' ,
url: 'https://v.baiyuechenlun.com/00fG34f0vHc3xM.m4a' ,
cover: 'https://p2.music.126.net/fQOh1ut3heT69l8IQF6ZBg==/109951164811428161.jpg?param=130y130'  ,
},{
name: '突然的自我' ,
artist: '伍佰' ,
url: 'http://m10.music.126.net/20240924133747/1d9e66ce350b6545cf9e0b603fd04ca0/ymusic/0053/045a/035a/79a32c302630a2063e24401de58ebf20.mp3' ,
cover: 'https://p2.music.126.net/zDdl2mtUVUpQwBo4Cl7-1w==/109951164811431723.jpg?param=130y130'  ,
},{
name: '浪人情歌' ,
artist: '伍佰 & China Blue' ,
url: 'http://m704.music.126.net/20240924133811/adaca4f1d45ab9342d1783653ade029e/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/32408266268/970d/9e56/1e6a/ee89753908f65c976fde2c526349b392.mp3' ,
cover: 'https://p2.music.126.net/ZuHoNSZB2cWbOXergHVu0g==/109951165611283987.jpg?param=130y130'  ,
},{
name: '白鸽' ,
artist: '伍佰 & China Blue' ,
url: 'http://m10.music.126.net/20240924132207/edae6e00e6d4ab895858d0bae4fc0d57/ymusic/obj/w5zDlMODwrDDiGjCn8Ky/3036087023/5709/03c1/ce39/c6a3199884995548b4f1f0a086a746c1.mp3' ,
cover: 'https://p1.music.126.net/RapqPMQnRyfW2J7w8k0u8A==/109951165611292291.jpg?param=130y130'  ,
},{
name: '痛哭的人' ,
artist: '伍佰 & China Blue' ,
url: 'http://m804.music.126.net/20240924133920/277d35edfb61a61ee3b50009c6a664a9/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/32047847324/6418/ecf4/acb3/028c77392039d7ac038cd1ce0c2a1a78.mp3' ,
cover: 'https://p1.music.126.net/obqsKxAiHB4d2UC5hB2Y_A==/109951163346522299.jpg?param=130y130'  ,
},{
name: '一生最爱的人' ,
artist: '伍佰 & China Blue' ,
url: 'http://m10.music.126.net/20240924133946/da76acc41fc39f455871f5b309bfa3cc/ymusic/obj/w5zDlMODwrDDiGjCn8Ky/3066888820/804a/bae0/a4b4/f6ec1be087176614e5d7462d70eefbbb.mp3' ,
cover: 'https://p1.music.126.net/VLFmbPWelG6HomcYYIT-Tg==/109951163346508216.jpg?param=130y130'  ,
},{
name: '再度重相逢' ,
artist: '伍佰 & China Blue' ,
url: 'http://m10.music.126.net/20240924132530/3be3a0fee50c63bab7690ea514fc1e4e/ymusic/035d/0509/5308/47917bd4eb2c94a92d80db3023e83c1d.mp3' ,
cover: 'https://p1.music.126.net/fQOh1ut3heT69l8IQF6ZBg==/109951164811428161.jpg?param=130y130'  ,
},{
name: '让水倒流' ,
artist: '伍佰 & China Blue' ,
url: 'http://m704.music.126.net/20240924134053/71ef07eafb554c7f86f2734855f91bb6/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/32321277859/a422/74f7/6f5c/2d6f43679570ab0198bb2458c9de2ce0.mp3' ,
cover: 'https://p1.music.126.net/iM_jSZ42S_BYJYfx1qlcKg==/109951164077992049.jpg?param=130y130'  ,
},    {
      name: '心语',
      artist: '韩红',
      url: 'https://cs1.mp3.pm/listen/32055314/VWIycTVXa09TOHV0NWIzd25tSzZoNmVPakpYSFVyWlVDYkFTY1A0a0RCQnQ4Y1M2M3dldS9vY3UrZTlqMVZYVzRaZTZKY1Ryb05oRFFqUUY4MXpkK1dhRVZWU0h0Tnl0M0tEN1N2dXI3NTZ0OHlvbkh0L1I4M3VyYkp4ZXgwMlY/-_(mp3.pm).mp3' ,
      lrc: '/hifini/心语-韩红.lrc',
      pic: 'http://img1.kuwo.cn/star/albumcover/500/29/33/2480739608.jpg',
    },
  ]
});
//save decoded hifini URLs (i.e., qq music url) to local cookies
// ap.on('play', function () {
//   console.log('Start playing song: ' + ap.list.index );
//   console.log('URL: ' + ap.list.audios[ap.list.index].url);
//   console.log(ap.list.audios[ap.list.index]);
//   //console.log(null==ap.audios); //true
//   console.log("src: "+ ap.audio.src)
//   console.log(ap.audio)  
// });

// ap.on('loadeddata', function () {
//   console.log('loadeddata of song: ' + ap.list.index );
//   console.log('URL: ' + ap.list.audios[ap.list.index].url);
//   console.log(ap.list.audios[ap.list.index]);
//   //console.log(null==ap.audios); //true
//   console.log("src: "+ ap.audio.src)

//   console.log(ap.audio.buffered)
// });
