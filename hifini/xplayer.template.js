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
  showlrc: false, //
  lrctype:3,
  mutex: true,
  theme:  '#ad7a86', // '#b7daff',  //'#0a0a0f',//
  listFolded: true,
  audio: [    
    {
      name: '心语',
      artist: '韩红',
      url: 'https://cs1.mp3.pm/listen/32055314/VWIycTVXa09TOHV0NWIzd25tSzZoNmVPakpYSFVyWlVDYkFTY1A0a0RCQnQ4Y1M2M3dldS9vY3UrZTlqMVZYVzRaZTZKY1Ryb05oRFFqUUY4MXpkK1dhRVZWU0h0Tnl0M0tEN1N2dXI3NTZ0OHlvbkh0L1I4M3VyYkp4ZXgwMlY/-_(mp3.pm).mp3' ,
      lrc: '/hifini/心语-韩红.lrc',
      pic: 'http://img1.kuwo.cn/star/albumcover/500/29/33/2480739608.jpg',
    },
    %musicDictList%
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
