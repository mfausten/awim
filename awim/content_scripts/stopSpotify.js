/**
  *
  * this function is executed when the button in the firefox toolbar is clicked.
  * it will execute the the code in a specific tab and stop/resume the video
  *
  **/
/*function stop() {
	console.log('about to click play/pause button');
    document.querySelector('button#play-pause').click();
	console.log('clicked play/pause button');
}*/

/*if(false === browser.runtime.onMessage.hasListener(stop)){
  browser.runtime.onMessage.addListener(stop);
}*/

console.log('inside stopSpotify.js');

function stop(request, sender, sendResponse) {
  console.log('about to click play/pause button');
  
    //document.querySelector('button#play-pause').click();
	
	
	document.getElementById('app-player')
		.contentWindow
		.document
		.getElementById('play-pause')
		.click();
	
	/*var iframe = document.getElementById('app-player');
	
    iframeDoc = ((!!iframe['contentDocument']) 
              ? iframe.contentDocument 
              : iframe.contentWindow.document);
	
	cell      = iframeDoc.getElementById('play-pause');
	
	cell.click();*/
	
	
	console.log('clicked play/pause button');
  chrome.runtime.onMessage.removeListener(stop);
}

chrome.runtime.onMessage.addListener(stop);
