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
  browser.tabs.query({}, function(result){console.log(result);
    result.forEach(function(value, index){
      if(value.url.startsWith('https://www.youtube.com'))
        browser.tabs.sendMessage(value.id, {});
    });
  });
});
