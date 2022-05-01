const throttle = require("lodash.throttle");
const iframe = document.querySelector('#vimeo-player');
const iframePlayer = new Vimeo.Player(iframe);




if (localStorage.getItem("videoplayer-current-time")) {

    iframePlayer.setCurrentTime(localStorage.getItem("videoplayer-current-time"))

}


iframePlayer.on('play', function (e) {
  

    iframePlayer.on('timeupdate',throttle(wraiteMameri, 1000));
    

    function wraiteMameri (evn) {

     localStorage.setItem("videoplayer-current-time", evn.seconds);
        
    }
       
});




