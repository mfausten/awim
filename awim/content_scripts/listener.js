/**
  * @param callback - the function to exexute when triggered
  *
  * this function works as a "listener" and is running as a background-script.
  * when it fires, it will iterate each tab in any running firefox instance
  * and looking for any "youtube" tabs. if there are any, it will send a single message
  * to the content_script in the found tab(s).
  *
  **/
/*browser.browserAction.onClicked.addListener(function(tab) {
  browser.tabs.query({}, function(result){
    result.forEach(function(value, index){
		console.log('inside listener');
		
		
      if(value.url.startsWith('https://www.youtube.com')){
	  browser.tabs.sendMessage(value.id, {});}
	
	
	  if(value.url.startsWith('https://play.spotify.com')){
		  console.table(value);
		  console.log('found spotify tab');
		//browser.tabs.sendMessage(value.id, {});  
		
		chrome.tabs.executeScript(null, { file: "/content_scripts/stopSpotify.js" });
		
	  }
		  
        
    });
  });
});*/


function handleClick() {
	
	console.log('inside event listener');
	
	browser.tabs.query({}, function(result){
	  
        console.log(result);
		console.log('iterating...');
		
        result.forEach(function(value, index){
          /*if(value.url.startsWith('https://www.youtube.com')){
            console.log('found youtube tab');
            console.log(value);
            console.log('execute script');
            browser.tabs.executeScript(value.id, { file: "/content_scripts/stop.js" }, function(result){console.log('received result!');console.log(result);})
            console.log('send message')
            browser.tabs.sendMessage(value.id, {});
            console.log('done');
          }*/
		  
		  if(value.url.startsWith('https://play.spotify.com')) {
			
			console.log('found spotify tab');
			
			//browser.tabs.executeScript(value.id, { file: "/content_scripts/stopSpotify.js" }, function(result) { console.log('result!'); console.table(result); });
			
			console.log('tab id: ' + value.id);
			
			chrome.tabs.executeScript(value.id, {
				file: "/content_scripts/stopSpotify.js"
			}, function(result) { console.log(result); });
			
			
			
			chrome.tabs.sendMessage(value.id, {beastURL: ''}, null, function(response) { console.log(response); });
			
		  }
		  
        });
      });
	
}

chrome.browserAction.onClicked.addListener(handleClick);
