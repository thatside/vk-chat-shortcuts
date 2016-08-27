// ==UserScript==
// @name         vk-chat-shortcuts
// @namespace    https://github.com/thatside/vk-chat-shortcuts/
// @version      0.3.3
// @description  Allows to change active chats with Ctrl+(1-5) (only 5 last of them)
// @author       thatside
// @include      *vk.com*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    document.onkeydown = function(e) {
        e = e || window.event;
        if(e.ctrlKey) {
            var keyCode = e.which || e.keyCode;
            switch(keyCode) {
                case 49:
                    switchDialog(e, 0);
                    break;
                case 50:
                    switchDialog(e, 1);
                    break;
                case 51:
                    switchDialog(e, 2);
                    break;
                case 52:
                    switchDialog(e, 3);
                    break;
                case 53:
                    switchDialog(e, 4);
                    break;
                default:
            }
        }
    };

    function switchDialog(event, number) {
        document.getElementsByClassName('nim-dialog')[number].click();
        event.preventDefault();
        event.stopPropagation();
    }
})();
