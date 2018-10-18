!function(n){var t={};function o(e){if(t[e])return t[e].exports;var r=t[e]={i:e,l:!1,exports:{}};return n[e].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=n,o.c=t,o.d=function(e,r,n){o.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(r,e){if(1&e&&(r=o(r)),8&e)return r;if(4&e&&"object"==typeof r&&r&&r.__esModule)return r;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:r}),2&e&&"string"!=typeof r)for(var t in r)o.d(n,t,function(e){return r[e]}.bind(null,t));return n},o.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(r,"a",r),r},o.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},o.p="",o(o.s="./src/main.js")}({"./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */function(module,exports,__webpack_require__){eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/index.css?")},"./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no static exports found */function(module,exports,__webpack_require__){eval('var math = __webpack_require__(/*! ./math */ "./src/math.js")\r\n__webpack_require__(/*! ./index.css */ "./src/index.css")\r\n// require(\'./index.html\') 用插件取代loader\r\nconsole.log(math(1, 3))\n\n//# sourceURL=webpack:///./src/main.js?')},"./src/math.js":
/*!*********************!*\
  !*** ./src/math.js ***!
  \*********************/
/*! no static exports found */function(module,exports){eval("module.exports = function add(a, b) {\r\n    return a + b\r\n}\n\n//# sourceURL=webpack:///./src/math.js?")}});