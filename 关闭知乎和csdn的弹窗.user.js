// ==UserScript==
// @name         关闭知乎和csdn的弹窗
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  关闭知乎和csdn每次进入都会弹窗登录的弹窗
// @author       zsj
// @match        *://www.zhihu.com/*
// @match        *://zhuanlan.zhihu.com/*
// @match        *://blog.csdn.net/*
// @homepageURL  https://github.com/zsjun/ygreaseMonkey.git
// @icon         https://www.google.com/s2/favicons?domain=zhihu.com
// @grant        none
// @license MIT
// ==/UserScript==

(function() {
    'use strict';

    window.onload = function() {
        document.querySelector(".Modal-closeButton").click()
        document.querySelector("..passport-login-container").style.display="none"
    }
    // Your code here...
})();