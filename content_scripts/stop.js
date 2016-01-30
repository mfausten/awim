function stop(request, sender, sendResponse) {
    console.log('inside of stop function');
    document.querySelector('.ytp-play-button.ytp-button').click();
    chrome.runtime.onMessage.removeListener(stop);
}

console.log('outside of stop.js');
chrome.runtime.onMessage.addListener(stop);
