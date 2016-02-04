/**
  * @param callback - the function to exexute when triggered
  *
  * this function works as a "listener" and is running as a background-script.
  * when it fires, it will iterate each tab in any running firefox instance
  * and looking for any "youtube" tabs. if there are any, it will send a single message
  * to the content_script in the found tab(s).
  *
  **/
browser.browserAction.onClicked.addListener(function(tab) {
  browser.tabs.query({}, function(result){
    result.forEach(function(value, index){
      if(value.url.startsWith('https://www.youtube.com'))
        browser.tabs.sendMessage(value.id, {});
    });
  });
});
