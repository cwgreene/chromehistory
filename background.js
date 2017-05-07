let doom;
chrome.browserAction.onClicked.addListener(function(initiatingTab) {
  chrome.tabs.getCurrent((tab) => {
    console.log("hi");
    if (!tab) {
      chrome.tabs.create({"url":"ui.html"});
      const bp = chrome.extension.getBackgroundPage();
    }
  });
});
