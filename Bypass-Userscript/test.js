// ==UserScript==
// @name         User-Agent Spoofer
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Spoof the User-Agent to bypass browser restrictions
// @author       Bacon But Pro
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Define the User-Agent string for Chrome
    const chromeUserAgent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36";

    // Override the User-Agent for all requests
    Object.defineProperty(navigator, 'userAgent', {
        get: function() {
            return chromeUserAgent;
        }
    });

    // For XMLHttpRequests
    const originalOpen = XMLHttpRequest.prototype.open;
    XMLHttpRequest.prototype.open = function() {
        this.setRequestHeader("User-Agent", chromeUserAgent);
        originalOpen.apply(this, arguments);
    };

    // For Fetch API
    const originalFetch = window.fetch;
    window.fetch = function(input, init = {}) {
        if (!init.headers) {
            init.headers = {};
        }
        init.headers['User-Agent'] = chromeUserAgent;
        return originalFetch(input, init);
    };
})();
