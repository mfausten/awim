/**
*
* gets the player control iframe and click the start/pause button.
* removes the listener
*
* @see https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/runtime/onMessage
*
**/
function stopOrStartSpotify(request, sender, sendResponse) {
	document.getElementById('app-player')
		.contentWindow
		.document
		.getElementById('play-pause')
		.click();

  chrome.runtime.onMessage.removeListener(stopOrStartSpotify);
}

/**
*
* adds listener to start/stop spotify stream
*
* @see https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/runtime/onMessage
*
**/
chrome.runtime.onMessage.addListener(stopOrStartSpotify);
