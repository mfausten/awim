/**
*
* gets all tabs in all firefox instances in iterates each one.
* if any spotify tab is found it injects the start/pause code into the tab and sends
* a message to start/pause the stream.
*
* @see https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/tabs/query
* @see https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/tabs/executeScript
* @see https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/tabs/sendMessage
*
**/
function startOrPauseStream() {
	chrome.tabs.query({}, function(tabs){
		tabs.forEach(function(tab, index){	  
		  if(tab.url.startsWith('https://play.spotify.com')) {
        chrome.tabs.executeScript(tab.id, {
          file: "/content_scripts/stopOrStartSpotify.js"
        });
        
        chrome.tabs.sendMessage(tab.id, {});
		  }
    });
  });
}

/**
*
* listens to the command specified in manifest.json.
* when called starts/pauses the spotify stream
*
* @see https://github.com/mdn/webextensions-examples/tree/master/commands
*
**/
chrome.commands.onCommand.addListener(function(command) {
  startOrPauseStream();
});

/**
*
* listens to click events on the button of the extension in the browser toolbar.
* when clicked starts/pauses the spotify stream
*
* @see https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/browserAction/onClicked
*
**/
chrome.browserAction.onClicked.addListener(startOrPauseStream);
