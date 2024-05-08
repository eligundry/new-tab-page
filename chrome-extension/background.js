chrome.tabs.onCreated.addListener(async (tab) => {
  let newTabURL = chrome.runtime.getURL("newtab.html");

  if (tab.pendingUrl === "chrome://newtab/" || tab.pendingUrl === newTabURL) {
    try {
      await chrome.tabs.update(tab.id, { url: newTabURL });
    } catch (error) {
      console.error(`Could not update tab: ${error}`);
    }
  }
});
