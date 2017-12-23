"use strict";

chrome.browserAction.onClicked.addListener(function (activeTab) {
    var newURL = "chrome://apps/";
    chrome.tabs.create({ url: newURL });
});