// ==UserScript==
// @name         vk-chat-shortcuts
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Allows to change active chats with Ctrl+(1-5) (only 5 last of them)
// @author       thatside
// @include      *vk.com/im*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    document.onkeydown = function(e) {
        e = e || window.event;
        console.log(e);
        if(e.ctrlKey) {
            var keyCode = e.which || e.keyCode;
            switch(keyCode) {
                case 49:
                    document.getElementsByClassName('nim-dialog')[0].click();
                    e.preventDefault();
                    e.stopPropagation();
                    break;
                case 50:
                    document.getElementsByClassName('nim-dialog')[1].click();
                    e.preventDefault();
                    e.stopPropagation();
                    break;
                case 51:
                    document.getElementsByClassName('nim-dialog')[2].click();
                    e.preventDefault();
                    e.stopPropagation();
                    break;
                case 52:
                    document.getElementsByClassName('nim-dialog')[3].click();
                    e.preventDefault();
                    e.stopPropagation();
                    break;
                case 53:
                    document.getElementsByClassName('nim-dialog')[4].click();
                    e.preventDefault();
                    e.stopPropagation();
                    break;
                default:
            }
        }
    };
})();
