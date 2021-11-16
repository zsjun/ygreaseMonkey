// ==UserScript==
// @name         关闭知乎和csdn的弹窗
// @namespace    http://tampermonkey.net/
// @version      0.9
// @description  关闭知乎和csdn每次进入都会弹窗登录的弹窗
// @author       zsj
// @match        *://www.zhihu.com/*
// @match        *://zhuanlan.zhihu.com/*
// @match        *://blog.csdn.net/*
// @homepageURL  https://github.com/zsjun/ygreaseMonkey.git
// @icon         https://www.google.com/s2/favicons?domain=zhihu.com
// @supportURL   https://github.com/zsjun/ygreaseMonkey/blob/main/关闭知乎和csdn的弹窗.user.js
// @updateURL    https://github.com/zsjun/ygreaseMonkey/issues
// @downloadURL  https://github.com/zsjun/ygreaseMonkey/blob/main/关闭知乎和csdn的弹窗.user.js
// @grant        none
// @license MIT
// ==/UserScript==
(function () {
  let zhihuFlag = false;
  let csdnFlag = false;

  const removeLoginModal = (mutationsList) => {
    for (const mutation of mutationsList) {
      for (const target of mutation.addedNodes) {
        if (target.nodeType !== 1) return;
        const zhihuButton =
          target && target.querySelector(".Modal-closeButton");
        const csdnButtonParent =
          target && target.querySelector(".passport-login-box");
        let csdnButton;

        if (csdnButtonParent) {
          csdnButton = csdnButtonParent.querySelector("span");
        }

        if (zhihuButton && !zhihuFlag) {
          zhihuFlag = true;
          zhihuButton.click();
        }

        if (csdnButton && !csdnFlag) {
          csdnFlag = true;
          csdnButton.click();
        }
      }
    }
  };

  const observer = new MutationObserver(removeLoginModal);
  observer.observe(document, {
    childList: true,
    subtree: true,
  });
})();
