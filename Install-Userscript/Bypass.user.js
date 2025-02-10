// ==UserScript==
// @name        Bypass Key System
// @homepageURL https://discord.gg/gFNAH7WNZj
// @namespace   https://tampermonkey.net/
// @version     3.4.1
// @description A userscript designed to bypass restrictions and streamline user experiences by automating bypass processes for various stages and challenges
// @author      Bacon But Pro
// @match       *://linkvertise.com/*/*
// @match       *://linkvertise.com/?iwantbypass=*
// @match       *://loot-link.com/s?*
// @match       *://loot-links.com/s?*
// @match       *://lootlink.org/s?*
// @match       *://lootlinks.co/s?*
// @match       *://lootdest.info/s?*
// @match       *://lootdest.org/s?*
// @match       *://lootdest.com/s?*
// @match       *://links-loot.com/s?*
// @match       *://linksloot.net/s?*
// @match       *://socialwolvez.com/*
// @match       *://rekonise.com/*
// @match       *://mboost.me/a/*
// @match       *://*.keyrblx.com/*
// @match       *://mobile.codex.lol/*
// @match       *://pandadevelopment.net/getkey?*
// @match       *://spdmteam.com/key-system*
// @match       *://*/recaptcha/*
// @match       *://*.hcaptcha.com/*hcaptcha-challenge*
// @match       *://*.hcaptcha.com/*checkbox*
// @match       *://*.hcaptcha.com/*captcha*
// @match       *://bot-hosting.net/panel/*
// @match       *://trigonevo.com/getkey/?hwid=*
// @match       *://trigonevo.fun/whitelist/*
// @match       *://work.ink/*/*
// @match       *://workink.net/*/*
// @match       *://paster.so/*
// @match       *://sub2unlock.com/*
// @match       *://*.sub2get.com/*
// @match       *://boost.ink/*
// @match       *://social-unlock.com/*
// @match       *://getkey.farrghii.com/*
// @match       *://dusarisalary.com/*
// @match       *://bloggingdaze.com/*
// @match       *://sub4unlock.com/*
// @match       *://mendationforc.info/*
// @match       *://flux.li/android/external/*
// @match       *://ads.luarmor.net/*
// @match       *://auth.platoboost.com/*
// @match       *://bstlar.com/*
// @match       *://yeumoney.com/*
// @match       *://auth.platoboost.com/*
// @resource    notifCss https://cdn.jsdelivr.net/gh/f3oall/awesome-notifications/dist/style.css
// @require     https://ajax.googleapis.com/ajax/libs/jquery/3.7.0/jquery.min.js
// @require     https://update.greasyfork.org/scripts/484331/1308737/customnotifications.js
// @require     https://github.com/BaconButPro/ron12373/raw/Premium/Bypass-Userscript/API.js
// @require     https://github.com/BaconButPro/ron12373/raw/Premium/Bypass-Userscript/Main.js
// @run-at      document-end
// @grant       GM_getResourceText
// @grant       GM_xmlhttpRequest
// @grant       GM_notification
// @grant       GM_openInTab
// @grant       GM_addStyle
// @grant       GM_setClipboard
// @grant       GM_setValue
// @grant       GM_getValue
// @license     Bacon
// @connect     linkvertise.com
// @connect     short-jambo.com
// @connect     api.codex.lol
// @connect     cdn.jsdelivr.net
// @connect     spdmteam.com
// @connect     api.keyrblx.com
// @connect     keyrblx.com
// @connect     auth.platoboost.net
// @connect     ads.luarmor.net
// @connect     pandadevelopment.net
// @icon        https://cdn141.picsart.com/351217840073211.png
// @downloadURL https://github.com/BaconButPro/ron12373/raw/Premium/Install-Userscript/Bypass.user.js
// @updateURL https://github.com/BaconButPro/ron12373/raw/Premium/Install-Userscript/Bypass.user.js
// ==/UserScript==

function APIKEY() {
    const APIKEY = '';
    return APIKEY;
}

function config() {
    const fluxus_copy = false; // enable to auto copy Fluxus key
    const keyrblx_copy = false; // enable to auto copy Keyrblx key
    const panda_copy = false; // enable to auto copy Pandadevelopment key
    const platoboost_copy = false; // enable to auto copy Platoboost key
    return { fluxus_copy, keyrblx_copy, panda_copy, platoboost_copy };
}

function time_config() {
    return { ads_luarmor: 5 }; // set delay bypass for ads.luarmor.net
}

function others() {
    const linkvertise_Premium = false; // enable if have linkvertise premium only
    const fallback_checking = false; // Set to true if the checking key is failed
    const clientside_delta = false; // enable delta client side bypass (Beta)
    return { linkvertise_Premium, fallback_checking, clientside_delta };
}
