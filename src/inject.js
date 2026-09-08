/*
 * noslither injection script
 * DONT paste into console
 */

let script = document.createElement('script');
script.src = chrome.runtime.getURL('main.js');
document.documentElement.appendChild(script);
script.remove();