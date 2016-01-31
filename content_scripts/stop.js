/**
  *
  *
  *
  *
  **/
function stop(request, sender, sendResponse) {
    console.log('executing clock on pause/resume button');
    document.querySelector('.ytp-play-button.ytp-button').click();
}

if(false === browser.runtime.onMessage.hasListener(stop)){
  browser.runtime.onMessage.addListener(stop);
}
