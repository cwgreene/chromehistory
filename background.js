chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.create({"url":"ui.html"});
});
