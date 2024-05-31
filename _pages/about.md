---
permalink: /about/
title: "Xiaowei Song's Resume (CV)"
---

<style>
r { color: Red }
o { color: Orange }
g { color: Green }
</style>

## Senior Data Analyst @ GDIT Federal Civilian | PIMAS (Program Integrity Modeling & Analytic Services)

## EDUCATION

- Part-time PhD student, Department of Computer Science and Electrical Engineering, University of Maryland, Baltimore County

- 2006~2009, Master of Computer Applied Science, State key laboratory of cognitive neuroscience, Beijing Normal University (2008 graduated, one-year ahead of 3-years training plan)

- 1999~2003, Bachelor of Automation, School of Electrical Engineering, Zhengzhou University

## SKILLS

- Core Skills: Robust Statistical estimation & detection,  Machine learning, Data Analysis/Mining, Big Data
- Programming Languages: Python/R/Julia, SQL, MATLAB, C/C++, Pascal/Delphi
- Tools: Jupyter Notebook, RStudio, Singularity, AWS, Hadoop, Spark, SQL Servers, Databricks/Snowflake/MLflow/ AWS Lambda\|Q\|bedrock\|SageMaker
- Machine learning packages: TensorFlow/pytorch, Scikit-learn, SPAMs and my own REST package for fMRI.
- Statistic and Machine learning models: Anomaly detection by principal component analysis (PCA), independent component analysis (ICA) and Dictionary learning (DL), Deep neural network learning (convolution neural-network, graphical signal processing, graphical convolutional neuro-network, Regression/Estimation (Best linear unbiased estimator, or BLUE estimator), Random Forest, Cluster analysis (including K-means, incremental K-means, Bregman divergence based K-means), K-nearest neighbor (k-NN) …
- Mathematical optimizations: gradient descent, online/stochastic gradient descent, fixed point, pre-conditioned stochastic descent ...

## WORK EXPERIENCE

- Data analyst Senior, GDIT (PIMASC, federal civilian department, HHS CMS contractor) (May 2022 -- Present);
  > - Home health assistance (HHA) claims analysis, I used natural language processing (NLP) techniques to encode HCPCS and ICD-10-CM codes, with long-short term memory (LSTM)– autoencoder based deep learning, and have achieved better performance than Med-BERT (Rasmy, L., Xiang, Y., Xie, Z., Tao, C., & Zhi, D. (2021). Med-BERT: pretrained contextualized embeddings on large-scale structured electronic health records for disease prediction. NPJ digital medicine, 4(1), 86.).
  > - Graph signal based analysis on opioid’s tri-party (beneficiary, prescriber, and pharmacy) directional networks, I have achieved more than 50 times model lift (especially with an entropy based feature on measuring how evenly a prescriber distribute opioid with different pharmacies), and can present meaningful detection results with either pure graph networks, or with OpenStreetMap based geo-spatial maps. This interactive geo-spatial map can help reveal many long-distance prescriptions. I designed, coded the algorithms, and draw all these interactive maps using free open source software’s instead of expensive graph signal processing package (such as Neo4j).
  > - DME referral provider-based machine learning focuses on exploring the referral provider features among the tri-party (billing/rendering provider, referral provider and beneficiary). This model is still under active development and pending with more model methods comparison to achieve better fraud detection.
  > - Web-scraping
  >> - on FDA, FTC warning letters, especially using ChatGPT to digest the FTC PDF-based warning letters to extract meaningful leads information. 
  >> - On npidb etc. beneficiary reviews website to find out bad reviews on prescribers.
  >> - On ups.com, fedex.com to find out all their store addresses such that finding false mail P.O. box that may lead to fraud behaviors.
  > - Data warehouses on Medicare Part A, B , DME, D claim data; Medicare Provider Enrollment, Chain, and Ownership System (PECOS), UCM, BIU and compromised data.
- Statistician, National Institute on Drug Abuse of National institute of Health (NIDA, NIH: 2013 – Feb 2024 as a Kelly contractor, Feb 2024 - now, as a guest researcher): Working on longitudinal data analysis (2 journal papers published), cross-species comparison (i.e., non-human primate vs human. 1 journal paper published, 1 in preparation).
- Part-time Neuroimaging programmer, Northwestern University (2013 – 2021): Web-based Parallel Optimized Quality assurance and Robust pipelines for various MRI data (2 conference papers).
- Assistant researcher, Institute of Biophysics, Chinese Academy of Science (2008 – 2012).
- Professional software coder (using C/C++ or Pascal/Delphi), 2004 – 2006.
- Automation engineer, 150 rolling mill, Tegang corporation, Shougang group, 2003 – 2004.

## PUBLICATION

(* indicates corresponding author, with my major contributions  listed under each paper. <r>red</r> font indicates journal paper. Full [google scholar paper list](http://scholar.google.com/citations?user=b2M-4scAAAAJ):[ http://scholar.google.com/citations?user=b2M-4scAAAAJ ](http://scholar.google.com/citations?user=b2M-4scAAAAJ))

1. **<o>Xiaowei Song</o>**, Zhang-Ye Dong, Xiang-Yu Long, Su-Fang Li, Xi-Nian Zuo, Chao-Zhe Zhu, Yong He, Chao-Gan Yan, Yu-Feng Zang*. (2011) REST: A Toolkit for Resting-State Functional Magnetic Resonance Imaging Data Processing. <r>PLoS ONE</r> 6(9): e25031.

  > - a. This paper describes the first dedicated softwares for resting-state fMRI data processing, includes some necessary preprocessing and a graphical interactive brain viewer  (which has support for Yoke function as in MRIcro’s multi-process synchronization function)
  > - b. I wrote all the Matlab codes, applied and was granted the software copyright registration (REST® 2008SR05547) in China.
  > - c. In the contrary to the copyright protection, I share all my codes as a starting base to help grow the resting-state Neuroimaging tools developments. My tool (REST), as a set of Matlab based tools/graphical interfaces, has stimulated many other softwares. Among the derived softwares built upon REST, DPARSF has been cited over 2690
  > - d. I built and maintained the restfmri.net since 2008, also contributed codes for the website on various functions. This website/online-forum has been the main place to help resting-state fMRI community, not just on the use of REST, but also many other related tools.

2. **<o>Xiaowei Song</o>**, Xue Wang, Kate Alpert, Lejian Huang, Yufen Chen, Lei Wang, Todd Parrish*. Rapid automatic comprehensive quality assurance metrics evaluation for Neuroimaging studies.  OHBM, 2015.

  > - a. I wrote all the back-end scripts to do fully automated, comprehensive quality metrics calculations for anatomical, functional, and diffusion MRI images

3. **<o>Xiaowei Song</o>**, H. P. JEDEMA, H. LU, S.-G. KIM, P. WANG, Y. YANG, *C. W. BRADBERRY, E. A. STEIN;. Longitudinal changes in resting state functional connectivity by cocaine in rhesus monkeys. Society for Neuroscience, 2014.

  > - a. I migrated many human processing softwares to deal with Rhesus monkey, in the time when there is almost no or very few tools.
  > - b. I found longitudinal differences and strong correlations among specific brain regions with addicted monkeys.

4. **<o>Xiaowei Song</o>***, S Bhinge, R Quiton, T Adali. (2018) A two-level ICA approach reveals important differences in the female brain response to thermal pain. Biomedical Imaging (ISBI 2018), IEEE ISBI, D.C.

  > - a. I applied ICA for the 1st time to the traditional 2nd level analysis in neuroimaging domain
  > - b. I found gender difference mainly in SII region on thermal pain for healthy volunteers
  > - c. Such subtle difference is not detectable through traditional GLM method

5. E. Gali, J. Jeremy, **<o>Xiaowei Song</o>**, and B. Rapp*. (2019) High-level Integrative Networks: A Resting-state fMRI Investigation of Reading and Spelling. <r>Journal of cognitive neuroscience</r> 31,961—977.

  > - a. I helped Gali on building the null hypothesis with random network generations

6. **<o>Xiaowei Song</o>***. (2019) An intuitive and most efficient L1-norm principal component analysis algorithm for big data. Oral presentation at the 53rd Annual Conference on Information Sciences and Systems (CISS, JHU, March 2019), IEEE.

  > - a. I analyzed L1/Robust-PCA methods in an intuitive way
  > - b. I proposed and proved a most efficient PCA method, which also has minimum memory footprint

7. **<o>Xiaowei Song</o>*, S Bhinge, RL Quiton, T Adalı. (2019) An ICA based approach for steady-state and transient analysis of task fMRI data: Application to study of thermal pain response. <r>Journal of neuroscience methods</r>, 326, 108356.

  > - a. Traditional fusion studies focus on joining static features, ignoring the dynamic changes, or treating dynamical signals as noise
  > - b. Traditional dynamical studies, especially sliding window-based approaches, treat signal as steady state within a short period
  > - c. I proposed an SVD-style/rank-one type matrix trick to recover the dynamics/fusion down to each time/sample point

8. Hank P Jedema, **<o>Xiaowei Song</o>**, Howard J Aizenstein, et al. (2020) Long term cocaine self-administration produces structural brain changes that correlate with altered cognition. <r>Biological Psychiatry</r>.

  > - a. Traditional VBM studies do not respect the longitudinal structure, which will blur the subtle changes 
  > - b. I developed a new VBM routine which can respect the longitudinal within-subject dependence structure, unlike many studies only work on longitudinal analysis as the final statistical inference step. I found when the processing is respecting the longitudinal structure, the subtle difference may show up in a meaningful way.

9. **<o>Xiaowei Song</o>**, Pamela García-Saldivar, Nathan Kindred, et al. (2021) Strengths and challenges of longitudinal non-human primate neuroimaging, <r>Neuroimage</r>, 236, 118009.

  > - a. I showed with simulations that how to respect the averaging in a longitudinal VBM study
  > - b. I also showed with simulations that longitudinal studies can beat cross-sectional studies not only in power, but also in cost (i.e., with less subjects).
  > - c. This review paper was listed as the 1st paper in the 2021 Nov special issue of the NeuroImage journal (which is top-rank in neuroimaging methods domain).

10. Jordi Bonaventura, Matthew A Boehm, Hank P Jedema, Oscar Solis, Marco Pignatelli, **<o>Xiaowei Song</o>**, Hanbing Lu, Christopher T Richie, Shiliang Zhang, Juan L Gomez, Sherry Lam, Marisela Morales, Omar A Gharbawie, Martin G Pomper, Elliot A Stein, Charles W Bradberry, Michael Michaelides*. (2023) Expression of the excitatory opsin ChRERα can be traced longitudinally in rat and nonhuman primate brains with PET imaging. <r>Science translational medicine</r>, 15, 706.

  > - a. I verified the PET findings with a new set of squirrel monkeys’ resting-state fMRI datasets and showed the promising overlap between fMRI imaging and PET imaging.
