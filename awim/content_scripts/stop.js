/**
  *
  * this function is executed when the button in the firefox toolbar is clicked.
  * it will execute the the code in a specific tab and stop/resume the video
  *
  **/
function stop() {
    document.querySelector('.ytp-play-button.ytp-button').click();
}

if(false === browser.runtime.onMessage.hasListener(stop)){
  browser.runtime.onMessage.addListener(stop);
}
