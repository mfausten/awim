/**
  *
  *
  *
  *
  **/
function stop(request, sender, sendResponse) {
    document.querySelector('.ytp-play-button.ytp-button').click();
    browser.runtime.onMessage.removeListener(stop);
}

browser.runtime.onMessage.addListener(stop);
