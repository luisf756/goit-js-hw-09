!function(){function e(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},r=o.parcelRequire7bc7;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,o.call(r.exports,r,r.exports),r.exports}var d=new Error("Cannot find module '"+e+"'");throw d.code="MODULE_NOT_FOUND",d}).register=function(e,o){n[e]=o},o.parcelRequire7bc7=r);var d=r("6JpON"),a=document.querySelector("body"),i=document.querySelector("[data-start]"),l=document.querySelector("[data-stop]"),c=null;l.disabled=!0,i.addEventListener("click",(function(){c=setInterval((function(){a.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3),e(d).Notify.info("Color body activado"),i.disabled=!0,l.disabled=!1})),l.addEventListener("click",(function(){e(d).Notify.warning("Color body desActivado"),clearInterval(c),l.disabled=!0,i.disabled=!1}))}();
//# sourceMappingURL=01-color-switcher.e0a9c336.js.map