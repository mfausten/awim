/**
  *
  *
  *
  *
  *
  *
  *
  **/
browser.browserAction.onClicked.addListener(function(tab) {
  browser.tabs.query({}, function(result){
    result.forEach(function(value, index){
      if(value.url.startsWith('https://www.youtube.com')){
        browser.tabs.executeScript(value.id, { file: "/content_scripts/stop.js" })
        browser.tabs.sendMessage(value.id, {});
      }
    });
  });
});
