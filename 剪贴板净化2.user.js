// ==UserScript==
// @name         剪贴板净化2
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  清除掘金等网站在复制的时候添加一些个人信息,原来的剪切板净化已经不能使用了
// @author       zsj
// @match        *://juejin.cn/*
// @icon         https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web//static/favicons/favicon-32x32.png
// @run-at       document-end
// @license      GPL-3.0 License
// ==/UserScript==

(function() {
'use strict';
    function clear(e){
		e.preventDefault();
		// 获取用户选择的文本
		var text = window.getSelection().toString();
        alert(text)
        // 注入剪贴板中
		if (event.clipboardData) {
            return event.clipboardData.setData('text', text); // 将信息写入粘贴板
        } else {
            // 兼容IE
            return window.clipboardData.setData("text", text);
        }

	}
    document.addEventListener('copy',clear)
    // Your code here...
})();