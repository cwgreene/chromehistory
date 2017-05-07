let doom;

function logAllVisits() {
  chrome.history.query({"text":""}, (historyItems) => {
    const results = [];
    let count = 0;
    let done = () => {
      console.log(results);
    }
    historyItems.map((item) => {
      chrome.history.getVisits({url: item.url}, (visit) => {
        results.append(visit);
        count += 1;
        if (count == historyItems.length) {
          done();
        }
      })});
  });
}

chrome.browserAction.onClicked.addListener(function(initiatingTab) {
  chrome.tabs.query({
      "url":`chrome-extension://${chrome.runtime.id}/ui.html`
    },
    (tabs) => {
      console.log(tabs);
      if (tabs.length == 0) {
        chrome.tabs.create({"url":"ui.html"});
      } else {
        const tab = tabs[0];
        chrome.tabs.update(tab.id, {active: true});
      }
      // Don't need to wait for tab creation, as the background page
      // already exists.
      const bp = chrome.extension.getBackgroundPage();
    });
});
