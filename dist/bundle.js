/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),
/* 2 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),
/* 3 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* General Styling */\n\n.hidden {\n  display: none!important;\n}\n\nbody {\n  margin: 20px;\n  background-color: #fff9ef;\n  box-shadow: 0 0 5px 0;\n  font-family: Georgia, 'Times New Roman', Times, serif;\n  color: #29190f;\n}\n\nheader {\n  margin: 0 30px;\n  padding: 30px 0 15px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\nh1 {\n  margin: 0;\n  font-size: 48px;\n}\n\nh2 {\n  font-size: 32px;\n  margin-bottom: 0;\n}\n\nh3 {\n  margin-top: 10px;\n  font-size: 16px;\n}\n\nh4 {\n  margin: 10px;\n}\n\nh5 {\n  margin: 0;\n}\n\np {\n  margin: 0.2em 0\n}\n\n.room-description {\n  text-align: left;\n  padding: 0 25px;\n}\n\nform {\n  background-color: #ebd197;\n  margin: 20px 0;\n  padding: 20px 0;\n  display: flex;\n  justify-content: space-evenly;\n  font-size: 24px;\n}\n\n.login-form {\n  margin-top: 50px;\n  margin-bottom: 10%;\n  padding: 60px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  align-items: center;\n}\n\nlabel {\n  display: flex;\n  align-items: center;\n}\n\ninput {\n  height: 24px;\n  width: 170px;\n  margin-left: 1em;\n  border: 1px solid #4c2f1e;\n  font-size: 20px;\n  text-align: center;\n}\n\n.login-info {\n  margin: 0;\n  width: 300px;\n  text-align: left;\n}\n\n.login-error {\n  margin-top: 15px;\n  font-size: 16px;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\nselect {\n  cursor: pointer;\n  height: 30px;\n  width: 175px;\n  margin-left: 1em;\n  padding: 0 4px;\n  border: 1px solid #4c2f1e;\n  font-size: 16px;\n}\n\nsection {\n  margin: 30px;\n  text-align: center;\n}\n\n.login-screen {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.login-info-container {\n  margin: 20px;\n}\n\n.search-container {\n  width: 100%;\n  display: flex;\n  justify-content: space-evenly;\n}\n\nsection.rooms {\n  padding: 40px 0;\n  border-top: 2px solid #29190f;\n  display: flex;\n  justify-content: space-evenly;\n  flex-wrap: wrap;\n}\n\nfigure {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  background-color: #f9eac7;\n  border: 5px solid #ebd197;\n  width: 300px;\n}\n\nfigcaption {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\nfigcaption > p {\n  text-align: left;\n  margin: 5px;\n}\n\n.apology-message {\n  font-size: 20px;\n  margin: 40px;\n}\n\n.booked {\n  margin: 0;\n  padding: 10px;\n  text-align: center;\n  font-size: 24px;\n  font-weight: 300;\n  background-color: #54331f;\n  color: #eee4d2;\n}\n\n\n/* Images */\n\nimg {\n  width: 300px;\n}\n\n/* Buttons */\n\nbutton {\n  height: 32px;\n  width: 200px;\n  border: 2px solid #130c07;\n  border-radius: 2px;\n  cursor: pointer;\n  font-size: 20px;\n  background-color: #54331f;\n  color: #eee4d2;\n}\n\nbutton:hover {\n  background-color: #6a4127;\n}\n\n.book-room-button {\n  height: 50px;\n  width: 220px;\n  font-size: 24px;\n}\n\nfigcaption > button {\n  margin-top: 16px;\n}", "",{"version":3,"sources":["webpack://./src/css/styles.css"],"names":[],"mappings":"AAAA,oBAAoB;;AAEpB;EACE,uBAAuB;AACzB;;AAEA;EACE,YAAY;EACZ,yBAAyB;EACzB,qBAAqB;EACrB,qDAAqD;EACrD,cAAc;AAChB;;AAEA;EACE,cAAc;EACd,oBAAoB;EACpB,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;AACrB;;AAEA;EACE,SAAS;EACT,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,SAAS;AACX;;AAEA;EACE;AACF;;AAEA;EACE,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,yBAAyB;EACzB,cAAc;EACd,eAAe;EACf,aAAa;EACb,6BAA6B;EAC7B,eAAe;AACjB;;AAEA;EACE,gBAAgB;EAChB,kBAAkB;EAClB,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,6BAA6B;EAC7B,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,gBAAgB;EAChB,yBAAyB;EACzB,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,SAAS;EACT,YAAY;EACZ,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;EAChB,eAAe;EACf,yCAAyC;AAC3C;;AAEA;EACE,eAAe;EACf,YAAY;EACZ,YAAY;EACZ,gBAAgB;EAChB,cAAc;EACd,yBAAyB;EACzB,eAAe;AACjB;;AAEA;EACE,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,WAAW;EACX,aAAa;EACb,6BAA6B;AAC/B;;AAEA;EACE,eAAe;EACf,6BAA6B;EAC7B,aAAa;EACb,6BAA6B;EAC7B,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,8BAA8B;EAC9B,yBAAyB;EACzB,yBAAyB;EACzB,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,8BAA8B;AAChC;;AAEA;EACE,gBAAgB;EAChB,WAAW;AACb;;AAEA;EACE,eAAe;EACf,YAAY;AACd;;AAEA;EACE,SAAS;EACT,aAAa;EACb,kBAAkB;EAClB,eAAe;EACf,gBAAgB;EAChB,yBAAyB;EACzB,cAAc;AAChB;;;AAGA,WAAW;;AAEX;EACE,YAAY;AACd;;AAEA,YAAY;;AAEZ;EACE,YAAY;EACZ,YAAY;EACZ,yBAAyB;EACzB,kBAAkB;EAClB,eAAe;EACf,eAAe;EACf,yBAAyB;EACzB,cAAc;AAChB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,gBAAgB;AAClB","sourcesContent":["/* General Styling */\n\n.hidden {\n  display: none!important;\n}\n\nbody {\n  margin: 20px;\n  background-color: #fff9ef;\n  box-shadow: 0 0 5px 0;\n  font-family: Georgia, 'Times New Roman', Times, serif;\n  color: #29190f;\n}\n\nheader {\n  margin: 0 30px;\n  padding: 30px 0 15px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\nh1 {\n  margin: 0;\n  font-size: 48px;\n}\n\nh2 {\n  font-size: 32px;\n  margin-bottom: 0;\n}\n\nh3 {\n  margin-top: 10px;\n  font-size: 16px;\n}\n\nh4 {\n  margin: 10px;\n}\n\nh5 {\n  margin: 0;\n}\n\np {\n  margin: 0.2em 0\n}\n\n.room-description {\n  text-align: left;\n  padding: 0 25px;\n}\n\nform {\n  background-color: #ebd197;\n  margin: 20px 0;\n  padding: 20px 0;\n  display: flex;\n  justify-content: space-evenly;\n  font-size: 24px;\n}\n\n.login-form {\n  margin-top: 50px;\n  margin-bottom: 10%;\n  padding: 60px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  align-items: center;\n}\n\nlabel {\n  display: flex;\n  align-items: center;\n}\n\ninput {\n  height: 24px;\n  width: 170px;\n  margin-left: 1em;\n  border: 1px solid #4c2f1e;\n  font-size: 20px;\n  text-align: center;\n}\n\n.login-info {\n  margin: 0;\n  width: 300px;\n  text-align: left;\n}\n\n.login-error {\n  margin-top: 15px;\n  font-size: 16px;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\nselect {\n  cursor: pointer;\n  height: 30px;\n  width: 175px;\n  margin-left: 1em;\n  padding: 0 4px;\n  border: 1px solid #4c2f1e;\n  font-size: 16px;\n}\n\nsection {\n  margin: 30px;\n  text-align: center;\n}\n\n.login-screen {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.login-info-container {\n  margin: 20px;\n}\n\n.search-container {\n  width: 100%;\n  display: flex;\n  justify-content: space-evenly;\n}\n\nsection.rooms {\n  padding: 40px 0;\n  border-top: 2px solid #29190f;\n  display: flex;\n  justify-content: space-evenly;\n  flex-wrap: wrap;\n}\n\nfigure {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  background-color: #f9eac7;\n  border: 5px solid #ebd197;\n  width: 300px;\n}\n\nfigcaption {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\nfigcaption > p {\n  text-align: left;\n  margin: 5px;\n}\n\n.apology-message {\n  font-size: 20px;\n  margin: 40px;\n}\n\n.booked {\n  margin: 0;\n  padding: 10px;\n  text-align: center;\n  font-size: 24px;\n  font-weight: 300;\n  background-color: #54331f;\n  color: #eee4d2;\n}\n\n\n/* Images */\n\nimg {\n  width: 300px;\n}\n\n/* Buttons */\n\nbutton {\n  height: 32px;\n  width: 200px;\n  border: 2px solid #130c07;\n  border-radius: 2px;\n  cursor: pointer;\n  font-size: 20px;\n  background-color: #54331f;\n  color: #eee4d2;\n}\n\nbutton:hover {\n  background-color: #6a4127;\n}\n\n.book-room-button {\n  height: 50px;\n  width: 220px;\n  font-size: 24px;\n}\n\nfigcaption > button {\n  margin-top: 16px;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 4 */
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),
/* 5 */
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),
/* 6 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/junior-suite.jpeg");

/***/ }),
/* 7 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/residential-suite.jpeg");

/***/ }),
/* 8 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/single-room.jpeg");

/***/ }),
/* 9 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/suite.jpeg");

/***/ }),
/* 10 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Customer {
  constructor(customer) {
    this.id = customer.id;
    this.name = customer.name;
  }

  getCustomerBookings(bookings) {
    return bookings.filter(booking => booking.userID === this.id);
  }

  getTotalCost(bookings, rooms) {
    let customerRooms = [];
    const customerBookings = this.getCustomerBookings(bookings);

    customerBookings.forEach(booking => {
      const customerRoom = (rooms.find(room => {
        return room.number === booking.roomNumber;
      }));
      customerRooms.push(customerRoom);
    });

    return customerRooms.reduce((acc, room) => {
      acc += room.costPerNight;
      return acc;
    }, 0);
  }

  getRoomToBook(date, roomNumber) {
    if (date.includes('-')) {
      date = date.replace(/\-/g, '/');
    }
    
    return {
      "userID": this.id,
      "date": date,
      "roomNumber": roomNumber
    }
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Customer);

/***/ }),
/* 11 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Room {
  constructor(room) {
    this.number = room.number;
    this.roomType = room.roomType;
    this.bidet = room.bidet;
    this.bedSize = room.bedSize;
    this.numBeds = room.numBeds;
    this.costPerNight = room.costPerNight;
  }

  getImageEndPath() {
    return this.roomType.replace(' ', '-') + '.jpeg';
  }

  getRoomName() {
    return this.roomType.split(' ').map(word => {
      return word[0].toUpperCase() + word.substring(1);
    }).join(' ');
  }

  getBedSize() {
    return this.bedSize[0].toUpperCase() + this.bedSize.substring(1);
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Room);

/***/ }),
/* 12 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Booking {
  constructor(booking) {
    this.id = booking.id;
    this.userID = booking.userID;
    this.date = booking.date;
    this.roomNumber = booking.roomNumber;
  }

  getRoom(rooms) {
    return rooms.find(room => room.number === this.roomNumber);
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Booking);

/***/ }),
/* 13 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Booking__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);


class BookingRepo {
  constructor(bookings) {
    this.bookings = bookings.map(booking => new _Booking__WEBPACK_IMPORTED_MODULE_0__.default(booking));
  }

  getVacancies(date, rooms, type) {
    if (date.includes('-')) {
      date = date.replace(/\-/g, '/');
    }

    const dateBookings = this.bookings.filter(booking => {
      return booking.date === date;
    });

    let vacancies = [];
    rooms.forEach(room => {
      if (!dateBookings.some(booking => booking.roomNumber === room.number)) {
        vacancies.push(room);
      }
    });

    if (type === 'any') {
      return vacancies;
    } else {
      type = type.replace(/\-/, ' ');
      return vacancies.filter(room => room.roomType === type);
    }
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BookingRepo);

/***/ }),
/* 14 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchAPI": () => (/* binding */ fetchAPI),
/* harmony export */   "fetchAllData": () => (/* binding */ fetchAllData),
/* harmony export */   "postBooking": () => (/* binding */ postBooking)
/* harmony export */ });
const fetchAPI = (url) => {
  return fetch(`https://overlook-api-jfogiato.vercel.app/api/v1/${url}`).then(
    response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('No Such Path');
      }
  });
}

const fetchAllData = () => {
  return Promise.all([
    fetchAPI('customers'),
    fetchAPI('rooms'),
    fetchAPI('bookings')
  ]).catch(
    error => handleError(error)
  );
}

const postBooking = (booking) => {
  return fetch('https://overlook-api-jfogiato.vercel.app/api/v1/bookings', {
    method: 'POST',
    body: JSON.stringify(booking),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(
    response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    }
  ).catch(
    err => handleError(err)
  );
}



/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _images_junior_suite_jpeg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _images_residential_suite_jpeg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
/* harmony import */ var _images_single_room_jpeg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8);
/* harmony import */ var _images_suite_jpeg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9);
/* harmony import */ var _src_classes_Customer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10);
/* harmony import */ var _src_classes_Room__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(11);
/* harmony import */ var _src_classes_Booking__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(12);
/* harmony import */ var _classes_BookingRepo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(13);
/* harmony import */ var _apiCalls__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(14);
// IMPORTS











// GLOBAL VARIABLES
let bookingRepo, customer;
let customers = [];
let rooms = [];
let bookings = [];

// QUERY SELECTORS
const loginScreen = document.getElementById('loginScreen');
const loginForm = document.getElementById('loginForm');
const username = document.getElementById('username');
const password = document.getElementById('password');
const loginError = document.getElementById('loginError');
const searchContainer = document.getElementById('searchContainer');
const roomsDisplayTitle = document.getElementById('roomsDisplayTitle');
const roomsDisplay = document.getElementById('roomsDisplay');
const dateInput = document.getElementById('dateInput');
const typeSelection = document.getElementById('typeSelection');
const searchForm = document.querySelector('form');
const bookingsButton = document.getElementById('bookingsButton');

// EVENT LISTENERS
window.addEventListener('load', () => {
  (0,_apiCalls__WEBPACK_IMPORTED_MODULE_9__.fetchAllData)().then(
    data => {
      data[0].customers.forEach(customer => customers.push(new _src_classes_Customer__WEBPACK_IMPORTED_MODULE_5__.default(customer)));
      data[1].rooms.forEach(room => rooms.push(new _src_classes_Room__WEBPACK_IMPORTED_MODULE_6__.default(room)));
      data[2].bookings.forEach(booking => bookings.push(new _src_classes_Booking__WEBPACK_IMPORTED_MODULE_7__.default(booking)));
      bookingRepo = new _classes_BookingRepo__WEBPACK_IMPORTED_MODULE_8__.default(bookings);
    }
  );
});

loginForm.addEventListener('submit', event => {
  event.preventDefault();
  if (loginUser(username.value, password.value)) {
    showDashboard();
    resetDateInput();
    showBookingTotal();
    showCustomerBookings();
  };
});

searchForm.addEventListener('submit', event => {
  event.preventDefault();
  updateBookings();
  showVacancies(dateInput.value, rooms, typeSelection.value);
});

roomsDisplay.addEventListener('click', (event) => {
  if (event.target.id.includes('bookButton')) {
    const roomNumber = parseInt(event.target.id.substring(10));
    const bookingData = customer.getRoomToBook(dateInput.value, roomNumber);
    (0,_apiCalls__WEBPACK_IMPORTED_MODULE_9__.postBooking)(bookingData);
    replaceBookingButton(event.target, dateInput.value);
    updateBookings();
  }
});

bookingsButton.addEventListener('click', () => {
  updateBookings();
  clearRoomsDisplay();
  resetSearchBar();
  showBookingTotal();
  showCustomerBookings();
});

// FUNCTIONS
const loginUser = (user, password) => {
  const validUsername = /^customer\d+$/
  let usernameNum, possibleCustomer;

  if (!validUsername.test(user) || password !== 'overlook2021') {
    show(loginError);
    return false;
  } else {
    usernameNum = parseInt(user.substring(8));
  }

  possibleCustomer = customers.find(customer => customer.id === usernameNum);

  if (possibleCustomer instanceof _src_classes_Customer__WEBPACK_IMPORTED_MODULE_5__.default) {
    customer = possibleCustomer;
    return true;
  } else {
    show(loginError);
    return false;
  }
}

const showBookingTotal = () => {
  const customerBookings = customer.getCustomerBookings(bookings);
  let total = customer.getTotalCost(bookings, rooms);  
  total = total.toFixed(2);
  
  return `You have ${customerBookings.length} bookings for a total of $${total}`;
}

const showCustomerBookings = () => {
  hide(bookingsButton);
  const customerBookings = customer.getCustomerBookings(bookings);
  customerBookings.forEach(booking => {
    const bookingDate = arrangeDate(booking.date);
    const room = booking.getRoom(rooms);
    const imageEndPath = room.getImageEndPath();
    const roomName = room.getRoomName();
    const bedSize = room.getBedSize();
    let bidetStatus;
    if (room.bidet) {
      bidetStatus = 'Includes Bidet';
    } else {
      bidetStatus = 'Does not Include Bidet';
    }
    
    roomsDisplayTitle.innerHTML = `
      <h2>Your Bookings</h2>
      <h3>${showBookingTotal()}</h3>
    `;
    
    roomsDisplay.innerHTML += `
      <figure>
        <img src="./images/${imageEndPath}" alt="picture of ${room.roomType}">
        <figcaption>
          <div>
          <h4>Room #${booking.roomNumber} - ${roomName}</h4>
          <h5>$${room.costPerNight}</h5>
          </div>
          <div class="room-description">
            <p>Bed Size: ${bedSize}</p>
            <p>Number of Beds: 2</p>
            <p>${bidetStatus}</p>
          </div>
          <div>  
            <h6 class="booked">Booked for ${bookingDate}</h6>
          </div>
        </figcaption>
      </figure>
    `;
  });
}

const showVacancies = (date, rooms, type) => {
  clearRoomsDisplay();
  show(bookingsButton);
  const vacancies = bookingRepo.getVacancies(date, rooms, type);

  if (vacancies.length === 0) {
    roomsDisplayTitle.innerHTML = `<h2>No Rooms Available`;
    roomsDisplay.innerHTML = `
      <p class="apology-message">Our deepest and most sincere apologies. Try selecting a different date or search for a different room type.</p>
    `;
  } else {
    vacancies.forEach((room) => {
      const imageEndPath = room.getImageEndPath();
      const roomName = room.getRoomName();
      const bedSize = room.getBedSize();
      let bidetStatus;

      if (room.bidet) {
        bidetStatus = 'Includes Bidet';
      } else {
        bidetStatus = 'Does not Include Bidet';
      }
      
      roomsDisplayTitle.innerHTML = `<h2>Rooms Available</h2>`;
      roomsDisplay.innerHTML += `
        <figure>
          <img src="./images/${imageEndPath}" alt="picture of ${room.roomType}">
          <figcaption>
            <div>
              <h4>Room #${room.number} - ${roomName}</h4>
              <h5>$${room.costPerNight}</h5>
            </div>
            <div class="room-description">
              <p>Bed Size: ${bedSize}</p>
              <p>Number of Beds: 2</p>
              <p>${bidetStatus}</p>
            </div>
            <div>  
              <button id="bookButton${room.number}">Click to Book</button>
            </div>
          </figcaption>
        </figure>
      `;
    });
  }
}



const replaceBookingButton = (button, bookingDate) => {
  const month = bookingDate.substring(5, 7);
  const day = bookingDate.substring(8);
  const year = bookingDate.substring(0, 4);
  bookingDate = month + '/' + day + '/' + year;
  button.parentElement.innerHTML = `<p class="booked">Booked for ${bookingDate}</p>`;
}

const resetDateInput = () => {
  let todaysDate = new Date();
  const year = String(todaysDate.getFullYear());
  let month = String(todaysDate.getMonth() + 1);
  if (month.length === 1) {
    month = '0' + month;
  }

  let day = String(todaysDate.getDate());
  if (day.length === 1) {
    day = '0' + day;
  }

  todaysDate = year + '-' + month + '-' + day;
  dateInput.value = todaysDate;
  dateInput.min = todaysDate;
}

const resetSearchBar = () => {
  resetDateInput();
  typeSelection.value = 'any';
}

const clearRoomsDisplay = () => roomsDisplay.innerHTML = '';

const updateBookings = () => {
  (0,_apiCalls__WEBPACK_IMPORTED_MODULE_9__.fetchAPI)('bookings').then(
    data => {
      bookings = [];
      data.bookings.forEach(booking => bookings.push(new _src_classes_Booking__WEBPACK_IMPORTED_MODULE_7__.default(booking)));
      bookingRepo = new _classes_BookingRepo__WEBPACK_IMPORTED_MODULE_8__.default(bookings);
    }
  );
}

function arrangeDate(date) {
  const monthAndDay = date.substring(5);
  const year = date.substring(0, 4);
  return monthAndDay + '/' + year;
}

const showDashboard = () => {
  hide(loginScreen);
  show(searchContainer);
  show(roomsDisplayTitle);
  show(roomsDisplay);
}

const hide = (element) => element.classList.add('hidden');
const show = (element) => element.classList.remove('hidden');

const handleError = (error) => roomsDisplay.innerText = `${error}, sorry!`;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handleError);
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map