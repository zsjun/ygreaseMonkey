// ==UserScript==
// @name         Url净化
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  清除掘金网站和知乎网站在点击链接的时候，需要跳转到确认页面，然后才能跳转
// @author       zsj
// @match        *://juejin.cn/*
// @match        *://www.zhihu.com/*
// @icon         https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web//static/favicons/favicon-32x32.png
// @run-at       document-end
// @license MIT
// ==/UserScript==

(function () {
  "use strict";
  window.onload = function (event) {
    const aArr = document.querySelectorAll("a");
    for (let i = 0; i < aArr.length; i++) {
      const href = decodeURIComponent(aArr[i].getAttribute("href"));
      const index = href.indexOf("target");
      let newHref = href;
      if (index > -1) {
        newHref = href.substring(index + 7);
      }
      aArr[i].setAttribute("href", newHref);
    }
  };
})();
