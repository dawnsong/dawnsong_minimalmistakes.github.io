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
  showlrc: true,
  lrctype:3,
  mutex: true,
  theme:  '#ad7a86', // '#b7daff',  //'#0a0a0f',//
  listFolded: true,
  audio: [
{
name: '只要平凡' ,
artist: '韩红' ,
url: 'http://ws.stream.qqmusic.qq.com/C400002bTTHy36ujta.m4a?guid=375063553&vkey=89F0DDE2B5444AB693624F186657B5D7B846E98E830FDE3A4228EF46A538C9FED62A07AC201B8CECC50C9E1DAB239636895DB789F256D404&uin=&fromtag=103032' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000001NlGYI4IemoI.jpg'  ,
},{
name: '那个冬季' ,
artist: '韩红' ,
url: 'http://ws.stream.qqmusic.qq.com/C400001UvbFD0xGg0g.m4a?guid=361752&vkey=C6067AECB4A7C014EC3F66727C29CED367EBE0371669249A71CFECF7409789AB27F3383333127F65B1FC66B07D179194922A8D62C071A698&uin=3894766636&fromtag=103032' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M0000037wELT3srhxc.jpg'  ,
},{
name: '天亮了' ,
artist: '韩红' ,
url: 'http://ws.stream.qqmusic.qq.com/C400001jnIPj2Dvm8J.m4a?guid=219218&vkey=AEBD55D60ED4789EAA7DFA19D00BDFB64D5B61BCAB97DD54C49B5D581B2BAF53FBDF207A44AFCB3417073ECF4DF02BD0CC97777EC38D6AEE&uin=2529038109&fromtag=103032' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M0000037wELT3srhxc.jpg'  ,
},{
name: '美丽的神话' ,
artist: '孙楠' ,
url: 'http://ws.stream.qqmusic.qq.com/C400001C6NF12qdWYs.m4a?guid=42114746&vkey=47C6CEAD0D00136933F7AB7AC4694C9216158B345CD05C5101B7BFB8B5EC91D2D8B67816CE383A1F1F17408CAC091690F7BB89711461DD4F&uin=2529038109&fromtag=103032' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M0000023YRbq0UUpdn.jpg'  ,
},{
name: '九儿' ,
artist: '韩红' ,
url: 'http://ws.stream.qqmusic.qq.com/C400003PGWra0J4yze.m4a?guid=174938&vkey=1FB44820C9C2348277E03C5E491FDD84A2C22D7A746A7DC52D8B2A07D3BCBA65FDFEA49E96A6B60D63332BBC57D4EB66AF3CC05BEEFF6961&uin=&fromtag=103032' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M00000330vIN2JcQ33.jpg'  ,
},{
name: '家乡' ,
artist: '韩红' ,
url: 'http://ws.stream.qqmusic.qq.com/C400002CUSg12RVx7f.m4a?guid=384412074&vkey=4543A3EB282E8416A0381DC9A66D01633331492F32490873E2C20DBDB0728BAE69667D86F2BA4C87B31FCC5B27CCDA1D112AC6C07F3576FF&uin=&fromtag=103032' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000002RcWWL3He6Aq.jpg'  ,
},{
name: '爱是你我' ,
artist: '刀郎' ,
url: 'http://ws.stream.qqmusic.qq.com/C400003h4jHq4IHWo8.m4a?guid=3345441&vkey=0B7FA706256228D58200F7247657144DBDB2837FEAD889E27A642AFDA88DDDE4047DB0D81003F2702393238388CC47416B639C0030742585&uin=904921857&fromtag=103032&src=C400002Yi6020yjVUH.m4a' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000003A5ZUG2SVEY4.jpg'  ,
},{
name: '问情' ,
artist: '江淑娜' ,
url: 'http://ws.stream.qqmusic.qq.com/C400000cQi5L2BK0Cs.m4a?guid=180891&vkey=94475E6B411CDC92BA06FB4F7E19AF5051BB30CAB9B289EA9D8EABEFC94F99FE6A6384C3DCA78603CC48D2EB3D8D5EC5662457AC5C73B9DB&uin=3882469177&fromtag=103032' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000001hzatl3YF6Dg.jpg'  ,
},{
name: '莫再悲' ,
artist: '林子祥' ,
url: 'http://ws.stream.qqmusic.qq.com/C400000m1Njd0FEl2P.m4a?guid=331374&vkey=50D4DFBC2D6660A5A840CB1BE9009EC7C2F7EF4C08D92D50239E34E18FB4ADB554DCF2B4CB2672ADF1CB74EE2A900E982C236378B3F64292&uin=3894766636&fromtag=103032&src=C400000I3XJW2jxALo.m4a' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000000cQ2JX4YzVSw.jpg'  ,
},{
name: '真的汉子' ,
artist: '林子祥' ,
url: 'http://ws.stream.qqmusic.qq.com/C400001tra2u3AIdIE.m4a?guid=81115163&vkey=78F1C6CDDF7D34B34A88D47A5CC0EC88B5BAA2BA3A98BFEF6B22620CD7CDBED9458686F433E578EFFEC5F12A63129D21BC974E97B47A9ED7&uin=3882469177&fromtag=103032' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000002lPVAj18zWvV.jpg'  ,
},{
name: '情人知己' ,
artist: '叶倩文' ,
url: 'http://ws.stream.qqmusic.qq.com/C4000026DtrW2TW7Af.m4a?guid=49280690&vkey=298220C41DCB31880E5D5BF13BC18B52AD68A40C6137B90036DFE32D43E10D66AA1BBCB245894BA705E60289F0356386A6BEE4B494B3773F&uin=2529038109&fromtag=103032&src=C400001BoJnm1LLjPs.m4a' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M0000036f5CW0XglXn.jpg'  ,
},{
name: '驿动的心' ,
artist: '叶倩文' ,
url: 'http://ws.stream.qqmusic.qq.com/C400002uqhQr33Hvdw.m4a?guid=2895984&vkey=39FF046FCF80C76E28CF1FABC51534A06D548FC412C9B09BAA64BB413519DE4AA45AED3DC9785BB54C2C83220F9CB4D97C79FB9CA98D15DC&uin=3935802489&fromtag=103032&src=C400001TmBYj0oKnuP.m4a' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000003BdVWg47PTG6.jpg'  ,
},{
name: '伤逝' ,
artist: '叶倩文' ,
url: 'http://ws.stream.qqmusic.qq.com/C400000EVEUB1WcQPr.m4a?guid=82068585&vkey=EF35006D2506842F17BF049DD384ADB23E6608D6E825FFFB61594324BD670D734973ECCA26E082E99A6D8BE081EDB25459CFD0875A4D59BF&uin=&fromtag=103032' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000000g1nSu0uv1Vf.jpg'  ,
},{
name: '真心真意过一生 (快乐随风版)' ,
artist: '叶倩文' ,
url: 'http://ws.stream.qqmusic.qq.com/C400003toWFi3C0iS9.m4a?guid=983137882&vkey=5AFA486E9CFB03FAD3C7BE6B6E983FACDD0B949C2EF70B8A956593D036D8E01253EF927A630DBDD70C91962C6A5A15AC4C12714B53F56596&uin=3961673309&fromtag=103032' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000003BdVWg47PTG6.jpg'  ,
},{
name: '今天' ,
artist: '半吨兄弟' ,
url: 'http://ws.stream.qqmusic.qq.com/C400000Nv9lc4fJOFj.m4a?guid=730567315&vkey=83CBFC74AF77EFB7FBCF2B5DA15C16EC1CE655D50A3AC959CA95E7E18B5C89695B50B7F5A4A3C359A64F0D39A60C5D17AF0A03AC408FEB81&uin=3830123772&fromtag=103032' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000004KioVf3KdSu6.jpg'  ,
},{
name: '女人花' ,
artist: '梅艳芳' ,
url: 'http://ws.stream.qqmusic.qq.com/C400003pA1rw4LgEsM.m4a?guid=5937886&vkey=E6886CF028981F3444240581DC9A07624651164115EFA68C02B3713EB3F5A0B464C65C8BD7D03535234B24E04B5EE2C946BDFC3BD557BDDE&uin=3961673309&fromtag=103032&src=C400003jynm20BMy4f.m4a' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000000KSBeM2r5WbK.jpg'  ,
},{
name: '战马 (DJ默涵版)' ,
artist: '崔伟立' ,
url: 'http://ws.stream.qqmusic.qq.com/C400000TATqO1D1kGD.m4a?guid=5957368&vkey=BC2740AF867FFD7413439CCF6A62DA5BEF608C2FBC4726662C4A6176F23A603648FE20FB2EB447E3034D35A23D151FBE5B25CA74B6F7C2AC&uin=2529038109&fromtag=103032' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M0000000TM9y3jqwgV.jpg'  ,
},{
name: '月亮之上' ,
artist: '凤凰传奇' ,
url: 'http://ws.stream.qqmusic.qq.com/C400004d8BPy0O6kGQ.m4a?guid=69469029&vkey=0E8116B354594D1BD402BEE74EF954D765409DAE7C6153F85F3CE9FCAF3703B5FBA53577461946F6E846DC18A24E1018EE3F3F2625D66184&uin=904921857&fromtag=103032' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000002jdWB13atXv8.jpg'  ,
},{
name: '爱的代价' ,
artist: '李宗盛' ,
url: 'https://hifini.com/https://m.hifini.com/music/002RndLi3ubspW.m4a' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000000q3lXx3ee9fa.jpg'  ,
},{
name: '当爱已成往事' ,
artist: '林忆莲' ,
url: 'http://m804.music.126.net/20240923094542/ba125ba918e3e4980e3489a74eb57dff/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/28482399430/2111/2a7d/328d/ddd2f4d7665f899ac17111237942e176.mp3' ,
cover: 'https://p2.music.126.net/S92wHxkuTq7L3yeR0Vpyiw==/80264348845273.jpg?param=130y130'  ,
},{
name: '飘洋过海来看你 (Live)' ,
artist: '李宗盛' ,
url: 'http://ws.stream.qqmusic.qq.com/C400002iM2Rj23e4H7.m4a?guid=204603&vkey=1381C49188D0FB84B649076F2E45B3A03D6EE1820EA12FDF7083D73DFC92110C82C66604228DD8BE9FD354DA66CD7CFEF7E8259543668BE0&uin=2529038109&fromtag=103032' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M0000028Pdb00tG9aA.jpg'  ,
},{
name: '山丘' ,
artist: '李宗盛' ,
url: 'http://ws.stream.qqmusic.qq.com/C400003WM5WQ4VlEuc.m4a?guid=447794660&vkey=6B6291BAF97C087F0E990DA7006CE56F8C52D7B1C567593958586B97654A98C8E940F1AE6D04CC2CA070DCD1D52CD55F264C9BF642AEE4EE&uin=904921857&fromtag=103032' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000003pvlsM2k3kE3.jpg'  ,
},{
name: '云宫迅音 (2024版)' ,
artist: '黑神话：悟空' ,
url: 'http://ws.stream.qqmusic.qq.com/C400001pRfzb4fCPI2.m4a?guid=841907&vkey=1E5CC19B64DBBE8F6DA7C4F8EB270B4DF6FAE26B18C8A6943003FFEBA43EC6EC28A7BDC68F764F1AF03A26B8E7846F3364331B9F1A1C11EE&uin=&fromtag=103032' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000.jpg'  ,
},{
name: '橄榄树' ,
artist: '齐豫' ,
url: 'http://m10.music.126.net/20240922134729/80494df9abde9f07330f61c64e18008c/ymusic/025c/5153/0652/56b95d96fef9d156e51b18dce2ab51f8.mp3' ,
cover: 'https://p2.music.126.net/_3vmKQOutdukdrBoLpktvQ==/109951165687498845.jpg?param=130y130'  ,
},{
name: '女人花 (Live)' ,
artist: '齐豫' ,
url: 'http://ws.stream.qqmusic.qq.com/C400003DQPKE0LYoFx.m4a?guid=912168&vkey=879F5EE32D5B8F5AB82FE441EE986CC1422ABA919294468CBC4B61DC02181EFC3C7F539F233085822B19236C73BBCD0EA51837C785047696&uin=2529038109&fromtag=103032&src=C400002ruf7p2SlMP6.m4a' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000004UGK3X2vFGt0.jpg'  ,
},{
name: '乡愁 (Live)' ,
artist: '齐豫' ,
url: 'http://ws.stream.qqmusic.qq.com/C400002gByAv00LWPy.m4a?guid=316731212&vkey=C68204BD74CCB52073BABAB93F8BA95C133D952705D85199CB3D3EBB6547444B8F3095EBD3389F25E30E28C363AA28684BAA5FFC5D71304A&uin=2529038109&fromtag=103032' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000003uo2jb2hVCWo.jpg'  ,
},{
name: '风雨无阻' ,
artist: '周华健' ,
url: 'http://m10.music.126.net/20240922134604/2c47f49d54173cf9c6a50c64e3c3709f/ymusic/obj/w5zDlMODwrDDiGjCn8Ky/3859700441/4df8/4675/fb90/eb1e13f709568240ef034e801000e52e.mp3' ,
cover: 'https://p2.music.126.net/y2UXEEzENB_sKMxcw7BX8w==/109951163879398863.jpg?param=130y130'  ,
},{
name: '花心' ,
artist: '周华健' ,
url: 'http://m804.music.126.net/20240922133737/34940537e96e99754a40194f5ed7cdd8/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/14080891078/d1d5/0b66/1805/535d0c543ec3d4e789a60cd72ad14b06.mp3' ,
cover: 'https://p1.music.126.net/gT8luuRI717O0JDaE5qfxw==/109951163076126994.jpg?param=130y130'  ,
},{
name: '朋友' ,
artist: '周华健' ,
url: 'http://m804.music.126.net/20240922134133/d232ab9d8d7f7af99a58d40171d7d37c/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/28481843033/94a2/450a/3806/348467f9c657f364687970a0039083a4.mp3' ,
cover: 'https://p2.music.126.net/tppfAdLe7tTit1V7Tt30dQ==/109951163076136512.jpg?param=130y130'  ,
},{
name: '刀剑如梦' ,
artist: '周华健' ,
url: 'http://m10.music.126.net/20240922134438/3bee83ce3c4f3d18f166ec8a70e8aff0/ymusic/obj/w5zDlMODwrDDiGjCn8Ky/3859699947/fb58/882f/1f0b/7c240ff0961dab59c7e992cfe77af3b4.mp3' ,
cover: 'https://p2.music.126.net/WvSPLq6pHBE3oFv2CdfLnQ==/109951165611287994.jpg?param=130y130'  ,
},{
name: '难念的经' ,
artist: '周华健' ,
url: 'https://music.163.com/404' ,
cover: 'https://p2.music.126.net/n_7R-J0uWaBPBkm7aVsA_Q==/122045790701114.jpg?param=130y130'  ,
},{
name: '难念的经 (Live)' ,
artist: '周华健' ,
url: 'http://ws.stream.qqmusic.qq.com/C400003Pz2Sw1mDrIS.m4a?guid=6734098&vkey=41A71CF6C8B5726230A3E321ADE6B4703C78554794D4CF4D38AC5DCCAB2BFA8C78C4D9F4CC68829200788617180A1F6F780DE34A5113DBE8&uin=2529038109&fromtag=103032&src=C400000mAaWv0sugU2.m4a' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000004DeBIU2GvyzZ.jpg'  ,
},{
name: '神话情话 (粤)' ,
artist: '周华健' ,
url: 'http://m10.music.126.net/20240923093615/9494f5a721a41c4f62415a4109e1f9de/ymusic/obj/w5zDlMODwrDDiGjCn8Ky/3060932667/1118/ab78/5597/d712a6d3b1baaa68f376f22a33127e43.mp3' ,
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
url: 'http://ws.stream.qqmusic.qq.com/C400004OSYKc1ErVSQ.m4a?guid=172509&vkey=1777F404CCF46A89EBE9D18FC39F2DE84B774346E8C28CCCE642A5D4F38BB6B086BC0AE93EE1C5F41FFACCA7EB81660300FB1ADDB82DE2E4&uin=3935802489&fromtag=103032&src=C400003XMyG91NpwQ1.m4a' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M0000021YkiD1WR578.jpg'  ,
},{
name: '2002年的第一场雪' ,
artist: '刀郎' ,
url: 'http://ws.stream.qqmusic.qq.com/C400000eonOy2GA8sT.m4a?guid=1793947&vkey=E0BB848B2C70E96BA0BBF8FAF747540AEED41DCC3D3DE2B0FE39FD5BF35936923CCD8B8A3BF16A6434CD592848DFC6993B5CC0724305BC56&uin=3882469177&fromtag=103032&src=C400000lXwEL21jeJi.m4a' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M0000004Nf5B0zJ6Y4.jpg'  ,
},{
name: '披着羊皮的狼' ,
artist: '刀郎' ,
url: 'http://ws.stream.qqmusic.qq.com/C400000xOk6a3H9VkY.m4a?guid=97363208&vkey=27F7E5FAA2768E98F13DAA928D244C86C402C81AA186872416E875B35C024616D605D31F55F6FB414866FB0828E30BB4DC25332CF0089F0F&uin=2529038109&fromtag=103032&src=C400003SIMxH0FxJLq.m4a' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000004CW3sa0jkN2P.jpg'  ,
},{
name: '冲动的惩罚' ,
artist: '刀郎' ,
url: 'http://ws.stream.qqmusic.qq.com/C400000dPwan4IgHwZ.m4a?guid=875250&vkey=B2B1CAE4CB0FD3AF8C5B8A11EF4E321E7195A21965820B6A38406A9A9ADA215C351A459D8E0C7A38338E18D6AFDFA7B4313C1070B1315BAF&uin=904921857&fromtag=103032&src=C400004WqF503iQyNP.m4a' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M0000004Nf5B0zJ6Y4.jpg'  ,
},{
name: '爱是你我' ,
artist: '云朵' ,
url: 'http://ws.stream.qqmusic.qq.com/C4000039Y89735bbT3.m4a?guid=676710&vkey=985947A6E4D5431DCDA24D2DB88A0D24E68A2E1D612698036FEC253571C55E39BEA714CCCF976B5BCA3E13D675DDE89504BDFE02767235B8&uin=95272751&fromtag=103032&src=C400001rwFmF1ReRuy.m4a' ,
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
url: 'http://ws.stream.qqmusic.qq.com/C400000cZNr42YkLl1.m4a?guid=884837367&vkey=7CB18A6340C295188461457CAC4C44C0E9676D0880FDCFFEEF51FC96965B57AAAD5964CEC67143A113FA6F904259EB1FDE42C051D1A6F518&uin=3894766636&fromtag=103032' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000001UP7mW458ipG.jpg'  ,
},{
name: '落花流水' ,
artist: '蔡琴' ,
url: 'http://ws.stream.qqmusic.qq.com/C400003x2w2r15HWXM.m4a?guid=660382121&vkey=E1BEAE106BD9493946B2CEE805DF82DAB31F3C7FD2DA1C088F69F26D847D7B6727D3A3F31AA3842C21A7CF34FCF477561B6B099A1F49E268&uin=3882469177&fromtag=103032' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000004KfFOf3YzHlx.jpg'  ,
},{
name: '如梦令' ,
artist: '蔡琴' ,
url: 'https://music.163.com/404' ,
cover: 'https://p2.music.126.net/D2o3piQTIkPcrbHsb-C-ug==/109951165705495208.jpg?param=130y130'  ,
},{
name: '恰似你的温柔' ,
artist: '蔡琴' ,
url: 'https://hifini.com/get_music.php?key=CwwwHiFiNicomohaXZOD5KHOmrKHq4XoFtWiOdhatZykvu6RPayntLHJlFJm5Qj5TxxHiFiNixxZVL280GgJB6Qh6r0uVwwwHiFiNicomeJRLj73MU&p=NF5RANJEAQWR6KYZBYECYKKFIBHH2HRRDYDAAJIGEM7TODA6ABHU6YA6IICXWLRPA4ESOVCWERFE64K4GEPDSIIRHYFQSHQUDASVW4KQPMPBIGBFKEJF6HRFAQ4VQAK7KZ2A4BZHPEMBCEJWEEFCSBD4LZAU2BZDIUVA4LREG44SABCZMZQVM6CDEQRQWBZWEMWC2URVF5ZVQ2LADIBQ6MBBF4XSOJYKC4KUU3YNOAMA4AJBBQPVAORKCUQCEBTCMF6EGHAHiFiNiYINYUECICHANG' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000004GTWOM2Dm9N8.jpg'  ,
},{
name: '被遗忘的时光' ,
artist: '蔡琴' ,
url: 'http://ws.stream.qqmusic.qq.com/C400000zSzMh3XvOGz.m4a?guid=470696387&vkey=043B8B0A7AA25840F5535B2F3A9D755F0A158B8C062465944D0CF8F34637769C979D3B5300AEB586F29F282D670760F97D9A70BB701FEC19&uin=3882469177&fromtag=103032' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000004GTWOM2Dm9N8.jpg'  ,
},{
name: '南屏晚钟' ,
artist: '蔡琴' ,
url: 'http://ws.stream.qqmusic.qq.com/C4000023Eujp3FKTKp.m4a?guid=936244096&vkey=7DF6BE76464206CB0725EC84BCBC21136CE01B9A8F323C1CD8F4962F4F667525487EDAD6C29574E07125C83ED6F45775CC9B3D397524B9F6&uin=3882469177&fromtag=103032' ,
cover: 'http://p1.music.126.net/ywlEDcdWT6PE8RydPYfXlg==/109951163213084637.jpg?param=130y130'  ,
},{
name: '你的眼神' ,
artist: '蔡琴' ,
url: 'http://ws.stream.qqmusic.qq.com/C400002aJAKZ3yBRuC.m4a?guid=752358237&vkey=A90550E5029BD985EC93CBFE50ACA840E5BCA56B9D2367A28C552053CDE131965AEF6DFB5EE9FA0866425CA5F7A0BF3BA53F38DA9BC46842&uin=&fromtag=103032' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000002jryu73k1QQx.jpg'  ,
},{
name: '渡口' ,
artist: '蔡琴' ,
url: 'http://ws.stream.qqmusic.qq.com/C4000041aqiP3k8MYA.m4a?guid=693121&vkey=B54CD0615B5C8CC4A7173B27FEA4D44111F57964F88F75279D50B8BF4C8611912BA1DAF576D5DAE2999E4CED0E3B649C1F45A4E601291557&uin=3882469177&fromtag=103032' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000004GTWOM2Dm9N8.jpg'  ,
},{
name: '涛声依旧' ,
artist: '钟明秋' ,
url: 'http://ws.stream.qqmusic.qq.com/C400004QVmRv2npzEg.m4a?guid=720439589&vkey=68885E6EAA7847B3D56A4369EEA5BCCB2EB655DAE4D3005BCA766B573350962F899005220C439C097E676D2B729F5D6ECC9BBEBD1DC2051F&uin=3882469177&fromtag=103032&src=C40000399H1o46Rdcn.m4a' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000004g1k233vDgQZ.jpg'  ,
},{
name: '女儿情 (粤语对唱版)' ,
artist: '钟明秋' ,
url: 'http://ws.stream.qqmusic.qq.com/C400001DwwVP1zQDka.m4a?guid=558533&vkey=ADF1062842A94A19BE4CD73C4882F531FD58ADE0D6CAE886DF59EBBBAEEB3429CB2537112F7063727834EF6F93EB1C5600FEE97060AA0041&uin=&fromtag=103032&src=C400003UJAFj42ZjbY.m4a' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000003rMykx3OJSfn.jpg'  ,
},{
name: '男儿当自强' ,
artist: '林子祥' ,
url: 'http://ws.stream.qqmusic.qq.com/C4000029hB6F0gObKo.m4a?guid=605813554&vkey=31D255A768E8319F55FB02944337AF7C5B814CBD2A78597FAB284AD8DFC4136676349777A71E79B370C0E42AEFCF49C212414C9529155130&uin=&fromtag=103032' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000001HyhnA4fzM8Q.jpg'  ,
},{
name: '长路漫漫伴你闯' ,
artist: '林子祥' ,
url: 'http://ws.stream.qqmusic.qq.com/C4000029VZNp2ygvqH.m4a?guid=448992460&vkey=13B5215E53DC9F30C7D3A370E767437612C8E528EE0F025FBB9D5B719768F648121763E991574D9F8CEF96DBED08FC5B7D2139310040FDD1&uin=2529038109&fromtag=103032&src=C400004DRakm2YJE4L.m4a' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000002EJxDo35nWT3.jpg'  ,
},{
name: '敢爱敢做' ,
artist: '林子祥' ,
url: 'http://ws.stream.qqmusic.qq.com/C400003YfjvW0gWLJG.m4a?guid=637392511&vkey=20CBB3177B89A5C4D8096F8F1AC5450CCE379CFF0E22DC225F94CF6073C1B62E380C04F32E2749BA53408D81F30D7D642B02BA55350156EC&uin=95272751&fromtag=103032' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000004ajxtj44cyAN.jpg'  ,
},{
name: '谁能明白我' ,
artist: '林子祥' ,
url: 'http://ws.stream.qqmusic.qq.com/C400004R22S21o8owM.m4a?guid=19136630&vkey=06F8866024A59F46D3789F3E9D36FC5392BA865BDEB6890CD34F02A349AE4E3AC0EB24CC5D04FD6D0F019BDC74502E1963DF3FEEA72A5719&uin=2529038109&fromtag=103032' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M0000009fBmG3qdBzw.jpg'  ,
},{
name: '选择' ,
artist: '叶倩文' ,
url: 'http://ws.stream.qqmusic.qq.com/C400001zAyti4N4GLm.m4a?guid=6536136&vkey=CB7E07709762BBF22E657444B29775685057DE9927E59A508E7D813EC082A49025F685CB12C91E71DA525946D4D400057F89A5691EEFF261&uin=2529038109&fromtag=103032' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000004C9eea1vzHP7.jpg'  ,
},{
name: '伤逝 (国语)' ,
artist: '叶倩文' ,
url: 'http://ws.stream.qqmusic.qq.com/C4000016fomk1zhtPy.m4a?guid=948033027&vkey=E232970DF43F76A67ADD159BBE62BB2C835F5D7EB762B7707372F530662B115E76BC6EFDB665B9AE89CA293C530C36D65DE79F0D19212051&uin=&fromtag=103032' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000000g1nSu0uv1Vf.jpg'  ,
},{
name: '潇洒走一回' ,
artist: '叶倩文' ,
url: 'http://ws.stream.qqmusic.qq.com/C400002y1ec72HcE2h.m4a?guid=274889201&vkey=C71DEE655B4C870E6848BBC42559CE9707795537E0C82982328F61F0079B78B1ECC11F259FA0E35A30F04B23F4D711A40E30A73D9453D696&uin=3894766636&fromtag=103032' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000004elsWz3Aa9I9.jpg'  ,
},{
name: '等我熬过所有苦' ,
artist: '大美' ,
url: 'http://ws.stream.qqmusic.qq.com/C400002xIr9U3xu3dZ.m4a?guid=410970&vkey=06445B5EB7C1DB90C2835293728377512787084B89B0F9540B85C6B099E16B3F95D70A9907B576C853E2C1DB9B74AE370F1CCFE578AD2409&uin=&fromtag=103032' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M0000033lcMV1OwAXH.jpg'  ,
},{
name: '欢笑之歌' ,
artist: '叶倩文' ,
url: 'http://ws.stream.qqmusic.qq.com/C400003BqRvD1IRRnU.m4a?guid=619048363&vkey=83221B21B98D6043A322CA852888A9F74842FBB5F343D55A6CAB6CDBFAD3FCF24B9E78366AA8A8DBCF6E9B372ED0178E9F00ED14B2D99DBD&uin=&fromtag=103032&src=C400000qCoHc2zLNQR.m4a' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000003BfOMK0fTtdj.jpg'  ,
},{
name: '我是谁 广东版' ,
artist: '成龙' ,
url: 'http://m704.music.126.net/20240923095034/9d27c38f152e1be9c136e3120cbd8635/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/32765999885/7462/0f9b/e859/3af2417d54c8e5aaba63c40b493162b5.mp3' ,
cover: 'https://p1.music.126.net/QsYEOzW1Nsix2knqNe_uEA==/3223768095295377.jpg?param=130y130'  ,
},{
name: '醉拳' ,
artist: '成龙' ,
url: 'http://m704.music.126.net/20240923095100/d5face7f7c64bdeeb979703f4d408ea4/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/11985443689/959b/61d3/75a5/f32d359aaea283b4711cd43b8a77443f.mp3' ,
cover: 'https://p2.music.126.net/tRdJt5Ql68Jaj0o32huwCw==/101155069767489.jpg?param=130y130'  ,
},{
name: '问心无愧' ,
artist: '成龙' ,
url: 'http://m10.music.126.net/20240922135829/17629cbd6893fc14c3649ede3d866a43/ymusic/obj/w5zDlMODwrDDiGjCn8Ky/3662069392/c230/adf2/c8a2/69fe07ad3ee46dd3b74678d67e194ab4.mp3' ,
cover: 'https://p2.music.126.net/zPWW92VdueQAePpc7k1_KA==/109951163069123395.jpg?param=130y130'  ,
},{
name: '男儿当自强' ,
artist: '成龙' ,
url: 'http://m10.music.126.net/20240922135849/6fdc73f70921c4014782d39d660e7716/ymusic/obj/w5zDlMODwrDDiGjCn8Ky/3662079520/572d/3e5f/8c23/25ef2fc32d6f454baea77f202e5f3386.mp3' ,
cover: 'https://p1.music.126.net/zPWW92VdueQAePpc7k1_KA==/109951163069123395.jpg?param=130y130'  ,
},{
name: '壮志在我胸' ,
artist: '成龙' ,
url: 'http://m10.music.126.net/20240922135919/f2b7104fd77fc62a19b6bb9137adc805/ymusic/obj/w5zDlMODwrDDiGjCn8Ky/3431352507/e25d/9ade/a254/0ba55daac148901e2142aec0df1f82a0.mp3' ,
cover: 'https://p2.music.126.net/5AVy-LvitnbT_nYgVG4jeA==/81363860456107.jpg?param=130y130'  ,
},{
name: '擦肩而过' ,
artist: '韩红' ,
url: 'https://hifini.com/https://od.lk/s/MzVfMzg4NDczNTVf/%E9%9F%A9%E7%BA%A2%20-%20%E6%93%A6%E8%82%A9%E8%80%8C%E8%BF%87.mp3' ,
cover: 'upload/avatar/000/769413.png?1702528934'  ,
},{
name: '知否知否' ,
artist: '胡夏' ,
url: 'http://ws.stream.qqmusic.qq.com/C400002krvKI4Jgvq9.m4a?guid=15522686&vkey=ACEE6BA1AE9573348D64C3D8B51C713B24E7A579ACB568C9A0FD7F540369B98CE8CBAC99D650B0EF8A16861CD2E92EBA6A5049B1A07A2186&uin=2529038109&fromtag=103032' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000003hzX7h4Flbcb.jpg'  ,
},{
name: '路过人间' ,
artist: '郁可唯' ,
url: 'http://ws.stream.qqmusic.qq.com/C4000042jyJt0aQ0Gd.m4a?guid=704646627&vkey=897D73EC88A983D60BB3E72230804E31EE1044E852AB4CFC03F7F422E6976FDDB02CD0EBFF281BD29BD9916B7285F6B48C94A086CCC74AC5&uin=95272751&fromtag=103032' ,
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
url: 'http://ws.stream.qqmusic.qq.com/C400000xfd4p2FtGy6.m4a?guid=9899379&vkey=FD4EC7E8F73C981A4B82BCA3AC40AA55DF822954175518DE5AA87304EC3D18033B018B8596F86FDF336F95D84E20F6183FE84B81A147D143&uin=904921857&fromtag=103032' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000003hzX7h4Flbcb.jpg'  ,
},{
name: '天涯 (Live)' ,
artist: '郁可唯' ,
url: 'http://ws.stream.qqmusic.qq.com/C400004gUTEg4fbATN.m4a?guid=8875276&vkey=25D83F84D145DC1B7B900EA05292BEB5633AD7EC5170EEC890DC296A6DAAC49720793AA8B367E1576506C75F0A2CC2D27FC2BE27B5E7252A&uin=3894766636&fromtag=103032' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000000arR8w36uLS6.jpg'  ,
},{
name: '如果云知道 (Live)' ,
artist: '郁可唯' ,
url: 'http://ws.stream.qqmusic.qq.com/C400003aHxEK1R7JhX.m4a?guid=38813095&vkey=C3332C253B5745BEFAF4988DDAE8BA151573D707189FAAE61E8A1BA09340DD59350A247867908F919A62B350ED0C833A456A8063040BC770&uin=95272751&fromtag=103032' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000004cEJJM3RHaL5.jpg'  ,
},{
name: '天下无敌' ,
artist: '郁可唯/张哲瀚' ,
url: 'https://hifini.com/https://m.hifini.com/music/C400002BqIgA3zBpJ8.m4a' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M0000009Oj3y0eJsiT.jpg'  ,
},{
name: '笑看风云' ,
artist: '郑少秋' ,
url: 'http://ws.stream.qqmusic.qq.com/C400001Ymwjm0egSJE.m4a?guid=234492&vkey=594DFCDA3E4CBD894FBC0F435CCD96B74AF77E572924B6C0566666D096B1AB84543D7B8EAC7D070205B180957EE5C492DE596FCDB8AD4049&uin=3882469177&fromtag=103032' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000000qE3kp0Ufado.jpg'  ,
},{
name: '天涯孤客' ,
artist: '郑少秋' ,
url: 'http://ws.stream.qqmusic.qq.com/C400002qlUY23Y0gD1.m4a?guid=999142830&vkey=70850D4DFC8824EAB84F0276EB7FBC25DAD89505464716E1240D2DEC63C54F7DB9FAB7A5E15A4FD1C41B53494810E27BDB6780F217F92A6A&uin=&fromtag=103032' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000000qE3kp0Ufado.jpg'  ,
},{
name: '世间始终你好' ,
artist: '莫文蔚' ,
url: 'http://m10.music.126.net/20240923095627/907a98108428b7d31e5b9cacc2146655/ymusic/8617/e5e1/da6f/71c8df4a4e041a81d57b32799518bb79.mp3' ,
cover: 'https://p2.music.126.net/yLqhiypydqJyuChUEFLjvg==/3272146612453635.jpg?param=130y130'  ,
},{
name: '慢慢喜欢你' ,
artist: '莫文蔚' ,
url: 'http://ws.stream.qqmusic.qq.com/C400002VtIa50dTs4X.m4a?guid=318316&vkey=427EEB498D72AB07C1944D2559672E2E142A6F04EF1CDA7055A2CD0F2EB4F372E02BE690D20E725CCD9D77FCA1F7E312B213F062636B4856&uin=3830123772&fromtag=103032' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000001XtPF21kfMXb.jpg'  ,
},{
name: '电台情歌' ,
artist: '莫文蔚' ,
url: 'http://ws.stream.qqmusic.qq.com/C400000XzeaV3yFBax.m4a?guid=221554&vkey=64E77F80C4DC308E8CC9C27448EE286BD99045EFB6DF8F94CD9545CD20784CFF97C6A6D6E085B10D0CCE1FDF820C5FC34CF478A0C7650F5E&uin=2529038109&fromtag=103032' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000004eNxMk2QyCn4.jpg'  ,
},{
name: '天大地大' ,
artist: '郑少秋' ,
url: 'http://ws.stream.qqmusic.qq.com/C400004UbyuM1bcVtx.m4a?guid=4216497&vkey=6DFEBCDEF9441558AEAE332462A6E6DC3D8CCA9CCB6F2EC8B28D2B62164B220028FC9992276FE115E4911611E509E159A17CD1E23A120BE9&uin=3961673309&fromtag=103032' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000001Gj60s01AYR8.jpg'  ,
},{
name: '楚留香' ,
artist: '郑少秋' ,
url: 'http://ws.stream.qqmusic.qq.com/C400000kLWrj0AZzRO.m4a?guid=431290&vkey=5C5A8A2979F9E91CAC479EBE742F9809FCF51FFC62E48B827B2DA102289C6DBA7C4345D2CA7FFD294EF35022C5E31772344D37DA89E982F6&uin=904921857&fromtag=103032&src=C400001icQHb0YeE1o.m4a' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000001vLQDf3Yprug.jpg'  ,
},{
name: '我们不哭' ,
artist: '周华健' ,
url: 'http://m704.music.126.net/20240923095842/29f78ef204ae9ace421936edf4ff4634/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/32398570488/7155/24f7/543a/3c16e2042d7c3fa453cf8fbdd36617a2.mp3' ,
cover: 'https://y.qq.com/music/photo_new/T002R300x300M000004JTXyD320k56_1.jpg?max_age=2592000'  ,
},{
name: '飞鸟与鱼 (Live)' ,
artist: '齐豫' ,
url: 'http://ws.stream.qqmusic.qq.com/C400002L2KEz2q6r8O.m4a?guid=996912520&vkey=7AEC11E17072174D7219B992907EE21BB0FD4FA77B9C1BF689CC6C6B85A01DE7234071242590273EAC5B4EA78239E5C82EA7827CE53456D7&uin=3961673309&fromtag=103032&src=C400004ZlY7q1AmqWh.m4a' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M0000024yUeW1rusYw.jpg'  ,
},{
name: '忘忧草' ,
artist: '周华健' ,
url: 'http://m804.music.126.net/20240923095946/574770198eacc2abfd65c459e9e228fc/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/28482330267/e07a/8976/06cb/d25dc35bc2cd6fb7e527169504f829f1.mp3' ,
cover: 'https://p2.music.126.net/9J0uFtmpQ-Ouk3-SPDjwQA==/109951163076131271.jpg?param=130y130'  ,
},{
name: '迷途' ,
artist: '周华健' ,
url: 'http://ws.stream.qqmusic.qq.com/C400003KyEOX1pS5su.m4a?guid=7723666&vkey=B3AC6090A4483024270D4A129C5A3ECCAD13343A086960AA515DD348D2B30DE666E9BA8DD37A79C227FE431BD9C7F62B2888F8BB62E87A45&uin=&fromtag=103032' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000001lnAOG218v97.jpg'  ,
},{
name: 'Under Pressure' ,
artist: 'Queen' ,
url: 'http://ws.stream.qqmusic.qq.com/C400004Q56DJ4JZZ0O.m4a?guid=92050385&vkey=079D1E8397D1971B315A8397BC46DA9DA53046798B30E15D0E4D8F094D0FC4E48C89CFEFC40C148FE0F111C914E6C932317D8129859486F6&uin=&fromtag=103032' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000000rYh9x3ml1vJ.jpg'  ,
},{
name: '岁月无情' ,
artist: '郑少秋' ,
url: 'http://ws.stream.qqmusic.qq.com/C40000467MsP0DEb7e.m4a?guid=6571755&vkey=68929E06EAFBDE7C7B4829353EF5219D9096F8E93FBA0DE7C335ACFC09474CC58E87912398DDDFE1AC54681F209F565FA130EDEAC8627835&uin=3961673309&fromtag=103032' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000002mTcV02rIGhb.jpg'  ,
},{
name: '从不放弃' ,
artist: '郑少秋' ,
url: 'http://ws.stream.qqmusic.qq.com/C400003RGa2R3cu50C.m4a?guid=38294065&vkey=4979393A4A15841C997BDC26ACA0E84679E9752ACCAC40B30628E521F6C5E6B4E9C1250B198E0DCD5AB5D95FF4F9B720B92640B6003B6A0A&uin=3830123772&fromtag=103032' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000000IGBqc0fI3Qv.jpg'  ,
},{
name: '人间烟火' ,
artist: '程响' ,
url: 'http://m804.music.126.net/20240923100146/9d8e9e679e50e8b7da65985bd0d7d085/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/16672208896/9ef4/88a9/8cfd/ff566bc0635a48093ad4143f0cbbce87.mp3' ,
cover: 'https://p1.music.126.net/v0V_wIobKIvP946B0hysjQ==/109951167165571077.jpg?param=130y130'  ,
},{
name: '江南夜色' ,
artist: '程响' ,
url: 'http://ws.stream.qqmusic.qq.com/C400001EuzA6288BMP.m4a?guid=4202991&vkey=0EF72684C58F66236B006EA9801A1029C890C92937B3E471B2E6EFC55C6374FAA03D64282FB6621EE947538E4859B16F98D0ACF6107BCD39&uin=2529038109&fromtag=103032' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M0000001GG1c194DZ2.jpg'  ,
},{
name: '分开那天' ,
artist: '程响' ,
url: 'http://ws.stream.qqmusic.qq.com/C400002CLeQE1qTZVe.m4a?guid=84526273&vkey=B55D0F6E22D364232F245F7CC00732810274A5926EFE7E31C7BA5419AC4C89B484FC0FFC11C6CF53DE2494A94D7DF8A090A3C21BF3235472&uin=3830123772&fromtag=103032' ,
cover: 'https://p2.music.126.net/t3jM4u95lnT0dMt49LLHJQ==/5831809673760315.jpg?param=130y130'  ,
},{
name: '不再联系' ,
artist: '程响' ,
url: 'http://ws.stream.qqmusic.qq.com/C400002GpBNY28WIQJ.m4a?guid=64755252&vkey=51F1195426D4F585DD8A8B5433612BB3A09E06BA60A3E3DA6AB4714D755C009E5A459B3F4C4F12BC85BC0CC5020734944F5C330FB0A66ED0&uin=2529038109&fromtag=103032' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000000hz05a0H3mRE.jpg'  ,
},{
name: '围城' ,
artist: '程响' ,
url: 'http://ws.stream.qqmusic.qq.com/C400002Wy8gi3zjlf0.m4a?guid=833073190&vkey=9B3B2F85E0318A929856C5C2437C34FB2DAD1B580F9E233CFFC0736BA9834ABE9A6D94364EC1E484EAAD4D299C28148CB8D71BC76167206D&uin=2529038109&fromtag=103032' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000001qBkWP0tCTvD.jpg'  ,
},{
name: 'Hurt inside' ,
artist: '程响' ,
url: 'http://ws.stream.qqmusic.qq.com/C400002FwDIz4dJEKx.m4a?guid=35493867&vkey=C253AA8B95EE80B975D86D3C13FDF80B2B93359973E1DCFEDAE289B0F6C24FF41775B5A05BD6F26AEF1747787DAF1BF3B2805DCB8D0EFB84&uin=904921857&fromtag=103032' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000000K0WaQ2CdIi9.jpg'  ,
},{
name: '十年之前' ,
artist: '程响' ,
url: 'http://ws.stream.qqmusic.qq.com/C400003IF5WJ0fqcSo.m4a?guid=85797877&vkey=117A57FF603F33BCBB755071E7141990CC300751F89370DBBC2630DCFB746812FF3D4B307D0CA15E7F612930CAAF1C1DEB4641EDD57E3C76&uin=3830123772&fromtag=103032' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000001smOHo1z7alH.jpg'  ,
},{
name: '三生缘' ,
artist: '程响' ,
url: 'https://hifini.com/https://m.hifini.com/music/程响 - 三生缘.m4a' ,
cover: 'https://img4.kuwo.cn/star/albumcover/500/98/31/3389133156.jpg'  ,
},{
name: '出卖我' ,
artist: '程响' ,
url: 'https://hifini.com/get_music.php?key=3mEsuiZjxf38BC46zqtfc8os5PMEswv7QSuebNL2PNVRygX7cwwwHiFiNicomFzpbLxVTymzXmkC65uzFISRY14efNasZ9m&p=JZGQ6PY6BYAAQABWCEDSGX2XLRUEOMZUHJ7RAB26DEVBSGA2IV7VA4Y6HEPCWBRLDU3RUGYXEVNXCUD3DYHQ6PBCGIOQMXBLDMKVY4DDNQ2TKHJSLITTSNC5DETBK5CULNPDCNAEEQ6AOIJGB4LT6FKIMEEWIDYPH4QS6LZHE4IRWXC2AZ4X24ZGGATD2HDUBUEFYVBEFJ5QG42BJYCBGCR7BYBX2GAKC4EFKQAJLAKQEJJRHIJSADAHiFiNiYINYUECICHANG' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000002VhMlj0YiBtl.jpg'  ,
},{
name: '君所见' ,
artist: '程响' ,
url: 'http://ws.stream.qqmusic.qq.com/C400000kKql71y6Jqg.m4a?guid=584112&vkey=A9112A74FB1D6D793E765B75ECF18E563E9154AAF19CF394AAF6EFF4B1CF0412599C27ECA98C4B54EACFCE65C29008EFBBF487FB0B06C2D2&uin=904921857&fromtag=103032' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000003BPZ5A2e7KyW.jpg'  ,
},{
name: '新娘不是我' ,
artist: '程响' ,
url: 'http://ws.stream.qqmusic.qq.com/C4000035Fiay2rr34H.m4a?guid=3176818&vkey=859DD16FD3EB00D130A6648B68633D7C5BF215ECEE0F2404F1F13264FE15B69C576C448F2FBC5DB949DF7F26F471D9A35725FC2D847A98C7&uin=2529038109&fromtag=103032' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000001TPIbf0a6qgb.jpg'  ,
},{
name: '夕阳之歌' ,
artist: '梅艳芳' ,
url: 'http://ws.stream.qqmusic.qq.com/C4000041Pf7a40eRyP.m4a?guid=514107&vkey=62B3AE525B8516E624CB58A4C4CF6401F285E8D8BD1EDA81AAF992FDA52E95E7B33ECCB36341CFF8FD67443F32D1CB18240B56BD7D2BEE1D&uin=904921857&fromtag=103032' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000003MEUvN1JRFIa.jpg'  ,
},{
name: '似水流年' ,
artist: '梅艳芳' ,
url: 'http://ws.stream.qqmusic.qq.com/C400002Je6O71i0hvS.m4a?guid=86394962&vkey=3DD8FC0E986F9304070464B25BA22007B529DB8C7742FF7492F87CAC616EC6F1D73398B6D9B72A2BDB00894C5AE690E08FA3DE0DC02062DE&uin=3830123772&fromtag=103032' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000004U4kWq1XmQx0.jpg'  ,
},{
name: '亲密爱人' ,
artist: '梅艳芳' ,
url: 'http://ws.stream.qqmusic.qq.com/C400001pjAHo2nhhPn.m4a?guid=23629360&vkey=F692061AE7E1071C5D1B3BA8AA5497A1FF6830D2E57AFD9C8611AAB715AB94FD18CDBC529544E00E746296822442E1A6C42DEAADFE781143&uin=904921857&fromtag=103032' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000002q5hzK15ir1L.jpg'  ,
},{
name: '胭脂扣' ,
artist: '梅艳芳' ,
url: 'http://ws.stream.qqmusic.qq.com/C400004fAiFO3qTNXd.m4a?guid=430595&vkey=994B32DF1B358CAD6A6AE49FEEA14BC1956D292D9B2E7526CCB06E5332134E114CA6301B9E1D106A694315F215A407B1FC502B39F2121D40&uin=904921857&fromtag=103032' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000002NC3NF01Jzuo.jpg'  ,
},{
name: '人世间 (Live)' ,
artist: '韩红' ,
url: 'http://ws.stream.qqmusic.qq.com/C4000020fwBa42hpKD.m4a?guid=393945&vkey=E4BFA2B9F8C9026C0B7AD21B6374B076B63EFD2915B7EFF0F8134129CF0ADB92DAD39D3CEF087A4346B98306F8198F704C260DEF00CDFC41&uin=&fromtag=103032' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000.jpg'  ,
},{
name: '只要有你' ,
artist: '那英' ,
url: 'http://ws.stream.qqmusic.qq.com/C4000006GF9d3ZSR9p.m4a?guid=9978957&vkey=CAAEC9540D5253D3163DB3A7888541EA83BBEC6365F99EE72CBBCC54524AD6999875A8B5C63F5774DD0326C2BB19CD4557B76CAF666659E1&uin=&fromtag=103032' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000002FPTQD10CVWp.jpg'  ,
},{
name: '有个爱你的人不容易' ,
artist: '那英' ,
url: 'http://ws.stream.qqmusic.qq.com/C400001UnmHh1CaLEu.m4a?guid=49001575&vkey=17AD94301AC5664A0C3F4ABD1691C01E58F37E232F5FBDE59A1BB1296CE3699A831C8CC53A5448369DBB8F9A750E330EBD574429099EC795&uin=95272751&fromtag=103032' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M0000010bzpH1ZBuvY.jpg'  ,
},{
name: '征服' ,
artist: '那英' ,
url: 'http://ws.stream.qqmusic.qq.com/C400001RPOwt21Oj1I.m4a?guid=39272143&vkey=F818A45A7C1B8420393D8F8FD73EFC89A5C487793AA1C8261EB67463E4CC819BD01B6140AC6E3AE8412E95084C372E7F1AEE8DC465E7CCD2&uin=3830123772&fromtag=103032' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000003gl6se31pMoh.jpg'  ,
},{
name: '默' ,
artist: '那英' ,
url: 'https://music.163.com/404' ,
cover: 'https://p1.music.126.net/OCGt5ln0lPPtPbVJ3VEKtA==/109951163020570422.jpg?param=130y130'  ,
},{
name: '相约九八 (Live)' ,
artist: '那英' ,
url: 'http://ws.stream.qqmusic.qq.com/C400001tpaSZ1EcJIo.m4a?guid=549465763&vkey=76B909E15D8311CDDD82B17D69F3003B271948B2680EE0ECCCCFFDABC412735CD3578588642B5727752CAC248E29CB9F2B5FDD7DE3C7FF8A&uin=2529038109&fromtag=103032' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000004fCosH0XuXvN.jpg'  ,
},{
name: '平凡之路' ,
artist: '沈腾' ,
url: 'http://ws.stream.qqmusic.qq.com/C400000SURPj1BFW3j.m4a?guid=104843652&vkey=6B5F53668C5D587F7390A631D974E03A3D29C5E8271CFC2812A2B515D363BF69663EE4AED0FAEE31DA112B27C3A87F932F435350FF383F15&uin=&fromtag=103032' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000000dCGzx2XRcY3.jpg'  ,
},{
name: '回家之路' ,
artist: '沈腾' ,
url: 'http://ws.stream.qqmusic.qq.com/C400000bEkfd0mJBrc.m4a?guid=69383609&vkey=478F497EDAECA87F44B84555DE0E8B5229055659FCD84CA47173C7EF1F14384ED92ED5C74874E060AE67418C78AD8245B3D094A606031C21&uin=2529038109&fromtag=103032&src=C400003tbIjA21SA4x.m4a' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000000GpnY52AIWMo.jpg'  ,
},{
name: '路灯下的小姑娘' ,
artist: '贾玲' ,
url: 'http://ws.stream.qqmusic.qq.com/C4000027GSyc1cpEnP.m4a?guid=857690948&vkey=64D3A1B523C9D947E3F8DF148A0512B4368EC9607541F6FAB3D06ADD7B0C7C95E4F82996F28449FF68E4E3A07DF8AE92EFABD73153030174&uin=&fromtag=103032&src=C4000014G9wr1k6erQ.m4a' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000001ItQiG2MLamK.jpg'  ,
},{
name: '一切都来得及' ,
artist: '贾玲' ,
url: 'http://ws.stream.qqmusic.qq.com/C400002VKvPZ0di33Y.m4a?guid=943939084&vkey=EACBD1E8BDCE55AB480C3C29C766E1D492E2E12729D4485D3A657347E9D93BA1684544DD30182F4135F97109F757898DAE808E02EE7BDD9C&uin=2529038109&fromtag=103032&src=C400000Thags0dKSwz.m4a' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000003AoYiR1JDdqE.jpg'  ,
},{
name: '疯狂的外星人' ,
artist: '黄渤/梁龙/沈腾' ,
url: 'https://hifini.com/https://m.hifini.com/music/000PCeih0yNlV9.m4a' ,
cover: 'https://p2.music.126.net/BeuZdndGdvwLewochKK0aA==/109951163873626650.jpg?param=130y130'  ,
},{
name: '梦一场' ,
artist: '那英' ,
url: 'http://ws.stream.qqmusic.qq.com/C400000gg0en3J7yXq.m4a?guid=721003883&vkey=DA6BC00D66CF3E92BA3A542CAD9A6CD93E45E5E24104942E8A6A2FA93A12013D3ED8D4F608AF903CB8ED3509BAA19C4548437FAFC8726CBE&uin=2529038109&fromtag=103032' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000004UUP4h2fn0nD.jpg'  ,
},{
name: '白天不懂夜的黑' ,
artist: '那英' ,
url: 'http://ws.stream.qqmusic.qq.com/C400000IOeZF2VgPiu.m4a?guid=580400004&vkey=8FF4A12F2121B8FB56837F86C4A66FC2D86545A76BE66C2E8D1D25F07CC3854024DCBFA632AE23632EDE64712370725CE9F8BEBA58157DC1&uin=3830123772&fromtag=103032' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M0000034cEPk1ULBnW.jpg'  ,
},{
name: '一笑而过' ,
artist: '那英' ,
url: 'http://ws.stream.qqmusic.qq.com/C400002RtHXx0YeGxw.m4a?guid=185081&vkey=05593E36828E89C840DDBCC7E4CB74D26B8C24977AE05217F3F1DB789FD8EE58ACF8619678CC2B4C3C31C7940D1CC9BA47AAF5EEB62D7B13&uin=2529038109&fromtag=103032' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000002yUcCR37Oshp.jpg'  ,
},{
name: '留什么给你' ,
artist: '孙楠' ,
url: 'http://ws.stream.qqmusic.qq.com/C400003h61Av0r8yLR.m4a?guid=433512&vkey=9C4726369C28AAC202F43139797F20F85888D9C04ADAA5E839E84326EEA47236568A319E58CC6F1E7447454CE7DCBA82BBC1B4329BFA4D5F&uin=2529038109&fromtag=103032' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000002cq1pb41nYhZ.jpg'  ,
},{
name: '拯救' ,
artist: '孙楠' ,
url: 'http://ws.stream.qqmusic.qq.com/C400003Aeujd0SIMS6.m4a?guid=3156815&vkey=C52842D2BD85DCB86ECA4C6E8955EBC740786ECDFA98A5940934A586843ABB0F5ACD7F034BBDFC4952E78D02EC97A4D35AF9A32DF2157C0D&uin=904921857&fromtag=103032' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000003q4iti4eFRe9.jpg'  ,
},{
name: '不见不散' ,
artist: '孙楠' ,
url: 'http://ws.stream.qqmusic.qq.com/C4000025SnEZ2ADnEi.m4a?guid=33249608&vkey=A70255747094E49118645401BBA2560B68AA27E518182DDD79E92550685DF1D42017867818396F9F2982E261A0E2A0B3AE0868407F3FBD40&uin=2529038109&fromtag=103032' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000002cq1pb41nYhZ.jpg'  ,
},{
name: '风往北吹' ,
artist: '孙楠' ,
url: 'https://music.163.com/404' ,
cover: 'https://p1.music.126.net/FK0xIj0dbMnmqGowRjBByQ==/109951163439488066.jpg?param=130y130'  ,
},{
name: '风往北吹 (Live)' ,
artist: '孙楠' ,
url: 'http://ws.stream.qqmusic.qq.com/C4000012G1Pw1Gcl7I.m4a?guid=7506818&vkey=F5D7C59080493A5820E5B10B717C4E31AC11DA5CF4090ADEB1E7CAA772372C5596FD779F9C971DC2F68BA2E29E0EDFA3560B6940CC5086E1&uin=2529038109&fromtag=103032&src=C400003ukv9s2KjUjo.m4a' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M00000397Jhs10CKrJ.jpg'  ,
},{
name: '天路 (世界音乐版)' ,
artist: '韩红' ,
url: 'http://ws.stream.qqmusic.qq.com/C400003hCHkg0PJDd3.m4a?guid=50664195&vkey=884B6021DFCEEC08A9DCE4211FDDDD604DA2E9F186B02A2D174E7313911AE5931C7BB4B539D8BE03C075EE63052980F18B1FCEFEE6A591F9&uin=2529038109&fromtag=103032' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000002GIYDv3vt4x9.jpg'  ,
},{
name: '路过人间 (演唱会Live限定版)' ,
artist: '郁可唯' ,
url: 'http://ws.stream.qqmusic.qq.com/C4000029PjgL0iEN89.m4a?guid=396977&vkey=0059D38DFCFB4603614FBD260BBDE01B16A93929E2718E88842CA4ABB2A2D18E92AB7C50258E25DA1555F65E6A37FBD0540CC53F68C500B7&uin=904921857&fromtag=103032' ,
cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000000NuVV21TFY2i.jpg'  ,
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
