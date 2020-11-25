// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

chrome.runtime.onInstalled.addListener(function() {
  // should remove this when necessary
  chrome.storage.sync.set({color: '#3aa757'}, function() {
    console.log('The color is green.');
  });
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [new chrome.declarativeContent.PageStateMatcher({
        pageUrl: {hostEquals: 'klas.kw.ac.kr'},
      })],
      actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
  });
});

chrome.webNavigation.onCompleted.addListener(
  function () {
    const res = chrome.tabs.query(
      { active: true, currentWindow: true },
      function (tabs) {
        chrome.tabs.executeScript(tabs[0].id, { file: "dark_mode.js" });
      }
    );
  },
  { url: [{ hostEquals: "klas.kw.ac.kr" }] }
);


