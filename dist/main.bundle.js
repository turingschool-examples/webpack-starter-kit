/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/base.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/base.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "body {\n  background-color: pink;\n}\n\n\n#start-background {\n  height: 300px;\n  width: 300px;\n}\n\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/Data.js":
/*!*********************!*\
  !*** ./src/Data.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

const data = {
  response_code: {
    version: '1.2',
    termsofService: 'http://frontend.turing.io/projects/wheel-of-fortune.html',
    features: {
      wheel: 1,
      puzzles: 1
    },
  },
  wheel: [
    900,
    'BANKRUPT',
    2500,
    600,
    700,
    600,
    650,
    500,
    700,
    'BANKRUPT',
    600,
    550,
    500,
    600,
    'BANKRUPT',
    'LOSE A TURN',
    700,
    800,
    500,
    650,
    500,
    900
  ],
  puzzles: {
    one_word_answers: {
      date: 'Oct 07 2018',
      puzzle_bank: [
        {  
          category: 'Around The House',
          number_of_words: 1,
          total_number_of_letters: 8,
          first_word: 8, 
          description:'Location or object(s) found within a typical house.',
          correct_answer: 'Armchair',
        },
        {  
          category: 'The 90s',
          number_of_words: 1,
          total_number_of_letters: 7,
          first_word: 7, 
          description:'Puzzles pertaining to the decade in question.',
          correct_answer: 'Beepers',
        },
        {  
          category: 'The 90s',
          number_of_words: 1,
          total_number_of_letters: 10,
          first_word: 10, 
          description:'Puzzles pertaining to the decade in question.',
          correct_answer: 'Tamagotchi',
        },
        {  
          category: 'Around The House',
          number_of_words: 1,
          total_number_of_letters: 6,
          first_word: 6,
          description: 'Location or object(s) found within a typical house.',
          correct_answer: 'Teapot',
        },
        {  
          category: 'The 90s',
          number_of_words: 1,
          total_number_of_letters: 10,
          first_word: 10, 
          description:'Puzzles pertaining to the decade in question.',
          correct_answer: 'Scrunchies',
        },
        {  
          category: 'Around The House',
          number_of_words: 1,
          total_number_of_letters: 8,
          first_word: 8,
          description: 'Location or object(s) found within a typical house.',
          correct_answer: 'Mousepad',
        },
        {  
          category: 'The 90s',
          number_of_words: 1,
          total_number_of_letters: 9,
          first_word: 9, 
          description:'Puzzles pertaining to the decade in question.',
          correct_answer: 'Sketchers',
        },
        {  
          category: 'Around The House',
          number_of_words: 1,
          total_number_of_letters: 8,
          first_word: 8,
          description: 'Location or object(s) found within a typical house.',
          correct_answer: 'Toolkits',
        },
        {  
          category: 'Phrase',
          number_of_words: 1,
          total_number_of_letters: 7,
          first_word: 7, 
          description: 'any two (or more) related phrases separated by a comma or otherwise used consecutively',
          correct_answer: 'Bonjour',
        },
         {  
          category: 'The 90s',
          number_of_words: 1,
          total_number_of_letters: 9,
          first_word: 9, 
          description:'Puzzles pertaining to the decade in question.',
          correct_answer: 'Operation',
        },
         {  
          category: 'The 90s',
          number_of_words: 1,
          total_number_of_letters: 3,
          first_word: 3, 
          description:'Puzzles pertaining to the decade in question.',
          correct_answer: 'Moo',
        },
        {  
          category: 'Phrase',
          number_of_words: 1,
          total_number_of_letters: 6,
          first_word: 6, 
          description: 'Any two (or more) related phrases separated by a comma or otherwise used consecutively',
          correct_answer: 'Cheers',
        },
        {  
          category: 'Phrase',
          number_of_words: 1,
          total_number_of_letters: 2,
          first_word: 2, 
          description: 'Any two (or more) related phrases separated by a comma or otherwise used consecutively',
          correct_answer: 'Hi',
        },
        {  
          category: 'Phrase',
          number_of_words: 1,
          total_number_of_letters: 10,
          first_word: 10, 
          description: 'Any two (or more) related phrases separated by a comma or otherwise used consecutively',
          correct_answer: 'Hocus-Pocus',
        },
        {  
          category: 'Phrase',
          number_of_words: 1,
          total_number_of_letters: 6,
          first_word: 6, 
          description: 'Any two (or more) related phrases separated by a comma or otherwise used consecutively',
          correct_answer: 'Presto',
        },
        {  
          category: 'Phrase',
          number_of_words: 1,
          total_number_of_letters: 12,
          first_word: 12,
          description: 'Any two (or more) related phrases separated by a comma or otherwise used consecutively',
          correct_answer: 'Trick-Or-Treat',
        },{  
          category:'Rhyme Time',
          number_of_words: 1,
          total_number_of_letters: 11,
          first_word: 11,
          description: 'Rhyming word(s) or phrase(s).',
          correct_answer: 'Tutti-Fruiti',
        },
        {  
          category:'Rhyme Time',
          number_of_words: 1,
          total_number_of_letters: 10,
          first_word: 10,
          description: 'Rhyming word(s) or phrase(s).',
          correct_answer: 'Lovey-Dovey',
        },
        {  
          category: 'Around The House',
          number_of_words: 1,
          total_number_of_letters: 11,
          first_word: 11,
          description: 'Location or object(s) found within a typical house.',
          correct_answer: 'Windowpanes',
        },{  
          category:'Around The House',
          number_of_words: 1,
          total_number_of_letters: 10,
          first_word: 10,
          description: 'Location or object(s) found within a typical house.',
          correct_answer: 'Snowblower',
        },
        {  
          category:'Rhyme Time',
          number_of_words: 1,
          total_number_of_letters: 7,
          first_word: 7,
          description: 'Rhyming word(s) or phrase(s).',
          correct_answer: 'Hotshot',
        },
        {  
          category:'Rhyme Time',
          number_of_words: 1,
          total_number_of_letters: 10,
          first_word: 10,
          description: 'Rhyming word(s) or phrase(s).',
          correct_answer: 'Superduper',
        },
        {  
          category:'Rhyme Time',
          number_of_words: 1,
          total_number_of_letters: 10,
          first_word: 10,
          description: 'Rhyming word(s) or phrase(s).',
          correct_answer: 'Willy-Nilly',
        },{  
          category:'Rhyme Time',
          number_of_words: 1,
          total_number_of_letters: 6,
          first_word: 6,
          description: 'Rhyming word(s) or phrase(s).',
          correct_answer: 'Bow-wow',
        }
      ]
    },
    two_word_answers: {
      date: 'Oct 07 2018',
      puzzle_bank: [
        {  
          category: 'Around The House',
          number_of_words: 2,
          total_number_of_letters: 11,
          first_word: 7, 
          description:'Location or object(s) found within a typical house.',
          correct_answer: 'Amusing Yarn',
        },
        {  
          category: 'The 90s',
          number_of_words: 2,
          total_number_of_letters: 11,
          first_word: 4, 
          description:'Puzzles pertaining to the decade in question.',
          correct_answer: 'Bowl Haircut',
        },
        {  
          category: 'The 90s',
          number_of_words: 2,
          total_number_of_letters: 13,
          first_word: 7, 
          description:'Puzzles pertaining to the decade in question.',
          correct_answer: 'Britney Spears',
        },
        {  
          category: 'Around The House',
          number_of_words: 1,
          total_number_of_letters: 12,
          first_word: 7,
          description: 'Location or object(s) found within a typical house.',
          correct_answer: 'Beanbag Chair',
        },
        {  
          category: 'The 90s',
          number_of_words: 2,
          total_number_of_letters: 9,
          first_word: 4, 
          description:'Puzzles pertaining to the decade in question.',
          correct_answer: 'Lite Brite',
        },
        {  
          category: 'Around The House',
          number_of_words: 2,
          total_number_of_letters: 8,
          first_word: 5,
          description: 'Location or object(s) found within a typical house.',
          correct_answer: 'Brass bed',
        },
        {  
          category: 'The 90s',
          number_of_words: 2,
          total_number_of_letters: 9,
          first_word: 5, 
          description:'Puzzles pertaining to the decade in question.',
          correct_answer: 'South Park',
        },
        {  
          category: 'Around The House',
          number_of_words: 2,
          total_number_of_letters: 15,
          first_word: 4,
          description: 'Location or object(s) found within a typical house.',
          correct_answer: 'Chic Furnishings',
        },
        {  
          category: 'Phrase',
          number_of_words: 2,
          total_number_of_letters: 6,
          first_word: 4, 
          description: 'any two (or more) related phrases separated by a comma or otherwise used consecutively',
          correct_answer: 'Fess Up',
        },
         {  
          category: 'The 90s',
          number_of_words: 2,
          total_number_of_letters: 6,
          first_word: 3, 
          description:'Puzzles pertaining to the decade in question.',
          correct_answer: 'Fun Dip',
        },
         {  
          category: 'The 90s',
          number_of_words: 2,
          total_number_of_letters: 10,
          first_word: 6, 
          description:'Puzzles pertaining to the decade in question.',
          correct_answer: 'Celine Dion',
        },
        {  
          category: 'Phrase',
          number_of_words: 2,
          total_number_of_letters: 7,
          first_word: 3, 
          description: 'Any two (or more) related phrases separated by a comma or otherwise used consecutively',
          correct_answer: 'Get Lost',
        },
        {  
          category: 'Phrase',
          number_of_words: 2,
          total_number_of_letters: 8,
          first_word: 5, 
          description: 'Any two (or more) related phrases separated by a comma or otherwise used consecutively',
          correct_answer: 'Admit One',
        },
        {  
          category: 'Phrase',
          number_of_words: 2,
          total_number_of_letters: 9,
          first_word: 3, 
          description: 'Any two (or more) related phrases separated by a comma or otherwise used consecutively',
          correct_answer: 'You Betcha',
        },
        {  
          category: 'Phrase',
          number_of_words: 2,
          total_number_of_letters: 10,
          first_word: 4, 
          description: 'Any two (or more) related phrases separated by a comma or otherwise used consecutively',
          correct_answer: 'Open Sesame',
        },
        {  
          category: 'Phrase',
          number_of_words: 2,
          total_number_of_letters: 11,
          first_word: 4,
          description: 'Any two (or more) related phrases separated by a comma or otherwise used consecutively',
          correct_answer: 'Good Morning',
        },{  
          category: 'Around The House',
          number_of_words: 2,
          total_number_of_letters: 11,
          first_word: 11,
          description: 'Location or object(s) found within a typical house.',
          correct_answer: 'Windowpanes',
        },{  
          category:'Rhyme Time',
          number_of_words: 2,
          total_number_of_letters: 8,
          first_word: 4,
          description: 'Rhyming word(s) or phrase(s).',
          correct_answer: 'Wine & Dine',
        },{  
          category:'Rhyme Time',
          number_of_words: 2,
          total_number_of_letters: 10,
          first_word: 5,
          description: 'Rhyming word(s) or phrase(s).',
          correct_answer: 'Fight Night',
        },
        {  
          category:'Around The House',
          number_of_words: 2,
          total_number_of_letters: 9,
          first_word: 4,
          description: 'Location or object(s) found within a typical house.',
          correct_answer: 'Corn Syrup',
        },
        {  
          category:'Rhyme Time',
          number_of_words: 2,
          total_number_of_letters: 11,
          first_word: 6,
          description: 'Rhyming word(s) or phrase(s).',
          correct_answer: 'Flower Power',
        },
        {  
          category:'Rhyme Time',
          number_of_words: 2,
          total_number_of_letters: 15,
          first_word: 7,
          description: 'Rhyming word(s) or phrase(s).',
          correct_answer: 'Jeepers Creepers',
        },
        {  
          category:'Rhyme Time',
          number_of_words: 2,
          total_number_of_letters: 10,
          first_word: 4,
          description: 'Rhyming word(s) or phrase(s).',
          correct_answer: 'Even Steven',
        },{  
          category:'Rhyme Time',
          number_of_words: 2,
          total_number_of_letters: 6,
          first_word: 3,
          description: 'Rhyming word(s) or phrase(s).',
          correct_answer: 'Fat Cat',
        }
      ]
    },
    three_word_answers: {
      date: 'Oct 07 2018',
      puzzle_bank: [
        {  
          category: 'Around The House',
          number_of_words: 3,
          total_number_of_letters: 10,
          first_word: 3, 
          description:'Location or object(s) found within a typical house.',
          correct_answer: 'Hot Glue Gun',
        },
        {  
          category: 'The 90s',
          number_of_words: 3,
          total_number_of_letters: 12,
          first_word: 6, 
          description:'Puzzles pertaining to the decade in question.',
          correct_answer: 'Tickle Me Elmo',
        },
        {  
          category: 'The 90s',
          number_of_words: 3,
          total_number_of_letters: 13,
          first_word: 2, 
          description:'Puzzles pertaining to the decade in question.',
          correct_answer: 'In Living Color',
        },
        {  
          category: 'Around The House',
          number_of_words: 1,
          total_number_of_letters: 13,
          first_word: 5,
          description: 'Location or object(s) found within a typical house.',
          correct_answer: 'Detox Foot Pads',
        },
        {  
          category: 'The 90s',
          number_of_words: 3,
          total_number_of_letters: 19,
          first_word: 3, 
          description:'Puzzles pertaining to the decade in question.',
          correct_answer: 'The Smashing Pumpkins',
        },
        {  
          category: 'Around The House',
          number_of_words: 3,
          total_number_of_letters: 14,
          first_word: 6,
          description: 'Location or object(s) found within a typical house.',
          correct_answer: 'Wooden End Table',
        },
        {  
          category: 'The 90s',
          number_of_words: 3,
          total_number_of_letters: 14,
          first_word: 5, 
          description:'Puzzles pertaining to the decade in question.',
          correct_answer: 'Magic School Bus',
        },
        {  
          category: 'Around The House',
          number_of_words: 3,
          total_number_of_letters: 15,
          first_word: 3,
          description: 'Location or object(s) found within a typical house.',
          correct_answer: 'USB Power Adapter',
        },
        {  
          category: 'Phrase',
          number_of_words: 3,
          total_number_of_letters: 6,
          first_word: 1, 
          description: 'any two (or more) related phrases separated by a comma or otherwise used consecutively',
          correct_answer: 'I Dig It',
        },
          {  
          category: 'The 90s',
          number_of_words: 3,
          total_number_of_letters: 19,
          first_word: 4, 
          description:'Puzzles pertaining to the decade in question.',
          correct_answer: 'Best Friend Necklaces',
        },
          {  
          category: 'The 90s',
          number_of_words: 3,
          total_number_of_letters: 13,
          first_word: 3, 
          description:'Puzzles pertaining to the decade in question.',
          correct_answer: 'Air Jordan Sneakers',
        },
        {  
          category: 'Phrase',
          number_of_words: 3,
          total_number_of_letters: 8,
          first_word: 2, 
          description: 'Any two (or more) related phrases separated by a comma or otherwise used consecutively',
          correct_answer: 'By The Way',
        },
        {  
          category: 'Phrase',
          number_of_words: 3,
          total_number_of_letters: 8,
          first_word: 5, 
          description: 'Any two (or more) related phrases separated by a comma or otherwise used consecutively',
          correct_answer: 'Admit One',
        },
        {  
          category: 'Phrase',
          number_of_words: 3,
          total_number_of_letters: 8,
          first_word: 3, 
          description: 'Any two (or more) related phrases separated by a comma or otherwise used consecutively',
          correct_answer: 'Get A Grip',
        },
        {  
          category: 'Phrase',
          number_of_words: 3,
          total_number_of_letters: 9,
          first_word: 4, 
          description: 'Any two (or more) related phrases separated by a comma or otherwise used consecutively',
          correct_answer: 'Cool As Ice',
        },
        {  
          category: 'Phrase',
          number_of_words: 3,
          total_number_of_letters: 10,
          first_word: 2,
          description: 'Any two (or more) related phrases separated by a comma or otherwise used consecutively',
          correct_answer: 'No Such Luck',
        },{  
          category: 'Around The House',
          number_of_words: 3,
          total_number_of_letters: 16,
          first_word: 6,
          description: 'Location or object(s) found within a typical house.',
          correct_answer: 'French Rolling Pin',
        },{  
          category:'Rhyme Time',
          number_of_words: 3,
          total_number_of_letters: 8,
          first_word: 4,
          description: 'Rhyming word(s) or phrase(s).',
          correct_answer: 'Hop On Pop',
        },{  
          category:'Rhyme Time',
          number_of_words: 3,
          total_number_of_letters: 11,
          first_word: 5,
          description: 'Rhyming word(s) or phrase(s).',
          correct_answer: 'Twice As Nice',
        },
        {  
          category:'Around The House',
          number_of_words: 3,
          total_number_of_letters: 17,
          first_word: 5,
          description: 'Location or object(s) found within a typical house.',
          correct_answer: 'Plaid Flannel Shirt',
        },
        {  
          category:'Rhyme Time',
          number_of_words: 3,
          total_number_of_letters: 21,
          first_word: 8,
          description: 'Rhyming word(s) or phrase(s).',
          correct_answer: 'Sardines And Tangerines',
        },
        {  
          category:'Rhyme Time',
          number_of_words: 3,
          total_number_of_letters: 12,
          first_word: 4,
          description: 'Rhyming word(s) or phrase(s).',
          correct_answer: 'Meet And Greet',
        },
        {  
          category:'Rhyme Time',
          number_of_words: 3,
          total_number_of_letters: 11,
          first_word: 2,
          description: 'Rhyming word(s) or phrase(s).',
          correct_answer: 'In Like Flynn',
        },{  
          category:'Rhyme Time',
          number_of_words: 3,
          total_number_of_letters: 11,
          first_word: 5,
          description: 'Rhyming word(s) or phrase(s).',
          correct_answer: 'Claim To Fame',
        }
      ]
    },
    four_word_answers: {
      date: 'Oct 07 2018',
      puzzle_bank: [
        {  
          category: 'Around The House',
          number_of_words: 4,
          total_number_of_letters: 17,
          first_word: 4, 
          description:'Location or object(s) found within a typical house.',
          correct_answer: 'Roll Of Toilet Paper',
        },
        {  
          category: 'The 90s',
          number_of_words: 4,
          total_number_of_letters: 14,
          first_word: 5, 
          description:'Puzzles pertaining to the decade in question.',
          correct_answer: 'Saved By The Bell',
        },
        {  
          category: 'The 90s',
          number_of_words: 4,
          total_number_of_letters: 18,
          first_word: 3, 
          description:'Puzzles pertaining to the decade in question.',
          correct_answer: 'The Mickey Mouse Club',
        },
        {  
          category: 'Around The House',
          number_of_words: 1,
          total_number_of_letters: 17,
          first_word: 4,
          description: 'Location or object(s) found within a typical house.',
          correct_answer: 'Vase Full Of Flowers',
        },
        {  
          category: 'The 90s',
          number_of_words: 4,
          total_number_of_letters: 24,
          first_word: 6, 
          description:'Puzzles pertaining to the decade in question.',
          correct_answer: 'There\'s Something About Mary',
        },
        {  
          category: 'Around The House',
          number_of_words: 4,
          total_number_of_letters: 21,
          first_word: 4,
          description: 'Location or object(s) found within a typical house.',
          correct_answer: 'High Thread Count Sheets',
        },
        {  
          category: 'The 90s',
          number_of_words: 4,
          total_number_of_letters: 18,
          first_word: 3, 
          description:'Puzzles pertaining to the decade in question.',
          correct_answer: 'Red Hot Chili Peppers',
        },
        {  
          category: 'Around The House',
          number_of_words: 4,
          total_number_of_letters: 22,
          first_word: 5,
          description: 'Location or object(s) found within a typical house.',
          correct_answer: 'Fancy White Cloth Napkins',
        },
        {  
          category: 'Phrase',
          number_of_words: 4,
          total_number_of_letters: 8,
          first_word: 4, 
          description: 'any two (or more) related phrases separated by a comma or otherwise used consecutively',
          correct_answer: 'From A To Z',
        },
          {  
          category: 'The 90s',
          number_of_words: 4,
          total_number_of_letters: 22,
          first_word: 3, 
          description:'Puzzles pertaining to the decade in question.',
          correct_answer: 'Six Degrees of Separation',
        },
          {  
          category: 'The 90s',
          number_of_words: 4,
          total_number_of_letters: 19,
          first_word: 4, 
          description:'Puzzles pertaining to the decade in question.',
          correct_answer: 'Mary Kate & Ashley Olsen',
        },
        {  
          category: 'Phrase',
          number_of_words: 4,
          total_number_of_letters: 9,
          first_word: 3, 
          description: 'Any two (or more) related phrases separated by a comma or otherwise used consecutively',
          correct_answer: 'Sly As A Fox',
        },
        {  
          category: 'Phrase',
          number_of_words: 4,
          total_number_of_letters: 10,
          first_word: 3, 
          description: 'Any two (or more) related phrases separated by a comma or otherwise used consecutively',
          correct_answer: 'Pay As You Go',
        },
        {  
          category: 'Phrase',
          number_of_words: 4,
          total_number_of_letters: 11,
          first_word: 4, 
          description: 'Any two (or more) related phrases separated by a comma or otherwise used consecutively',
          correct_answer: 'Give Me A Hint',
        },
        {  
          category: 'Phrase',
          number_of_words: 4,
          total_number_of_letters: 12,
          first_word: 1, 
          description: 'Any two (or more) related phrases separated by a comma or otherwise used consecutively',
          correct_answer: 'A Piece Of Cake',
        },
        {  
          category: 'Phrase',
          number_of_words: 4,
          total_number_of_letters: 12,
          first_word: 5,
          description: 'Any two (or more) related phrases separated by a comma or otherwise used consecutively',
          correct_answer: 'Happy As A Clam',
        },{  
          category: 'Around The House',
          number_of_words: 4,
          total_number_of_letters: 25,
          first_word: 5,
          description: 'Location or object(s) found within a typical house.',
          correct_answer: 'Clear Plastic Shower Curtain',
        },{  
          category:'Rhyme Time',
          number_of_words: 4,
          total_number_of_letters: 10,
          first_word: 4,
          description: 'Rhyming word(s) or phrase(s).',
          correct_answer: 'Snug As A Bug',
        },{  
          category:'Rhyme Time',
          number_of_words: 4,
          total_number_of_letters: 15,
          first_word: 4,
          description: 'Rhyming word(s) or phrase(s).',
          correct_answer: 'Ants In Your Pants',
        },
        {  
          category:'Around The House',
          number_of_words: 4,
          total_number_of_letters: 12,
          first_word: 1,
          description: 'Location or object(s) found within a typical house.',
          correct_answer: 'A Pile Of Coats',
        },
        {  
          category:'Rhyme Time',
          number_of_words: 4,
          total_number_of_letters: 18,
          first_word: 4,
          description: 'Rhyming word(s) or phrase(s).',
          correct_answer: 'Good Golly Miss Molly',
        },
        {  
          category:'Rhyme Time',
          number_of_words: 4,
          total_number_of_letters: 21,
          first_word: 7,
          description: 'Rhyming word(s) or phrase(s).',
          correct_answer: 'Hostess With The Mostest',
        },
        {  
          category:'Rhyme Time',
          number_of_words: 4,
          total_number_of_letters: 22,
          first_word: 2,
          description: 'Rhyming word(s) or phrase(s).',
          correct_answer: 'An Attitude of Gratitude',
        },{  
          category:'Rhyme Time',
          number_of_words: 4,
          total_number_of_letters: 16,
          first_word: 3,
          description: 'Rhyming word(s) or phrase(s).',
          correct_answer: 'You Snooze You Lose',
        }
      ]
    }
  }
};

module.exports = data;

/***/ }),

/***/ "./src/Game.js":
/*!*********************!*\
  !*** ./src/Game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Player_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Player.js */ "./src/Player.js");
/* harmony import */ var _Data_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Data.js */ "./src/Data.js");
/* harmony import */ var _Data_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Data_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Puzzle_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Puzzle.js */ "./src/Puzzle.js");
/* harmony import */ var _domUpdates_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./domUpdates.js */ "./src/domUpdates.js");
 
 
 
 

 class Game {
  constructor(currentRound = 1, activePlayer, roundWinner, gameWinner, gamePuzzles) {
    this.currentRound = currentRound,
    this.activePlayer = activePlayer,
    this.roundWinner = roundWinner,
    this.gameWinner = gameWinner,
    this.gamePuzzles = []
  }

  startGame(players) {
    console.log('game started!');
    this.createPlayers(players);
    let puzzle = new _Puzzle_js__WEBPACK_IMPORTED_MODULE_2__["default"]()
    puzzle.grabPuzzleBanks();
  }

  createPlayers(players) {
    const playerOne = new _Player_js__WEBPACK_IMPORTED_MODULE_0__["default"](players[0], true);
    const playerTwo = new _Player_js__WEBPACK_IMPORTED_MODULE_0__["default"](players[1]);
    const playerThree = new _Player_js__WEBPACK_IMPORTED_MODULE_0__["default"](players[2]);
    console.log(playerOne);
  }

  // grabPuzzleBanks() {
  //   let puzzleArrayOne = data.puzzles.one_word_answers.puzzle_bank
  //   let puzzleArrayTwo = data.puzzles.two_word_answers.puzzle_bank
  //   let puzzleArrayThree = data.puzzles.three_word_answers.puzzle_bank
  //   let puzzleArrayFour = data.puzzles.four_word_answers.puzzle_bank
  //   let puzzleBank = puzzleArrayOne.concat(puzzleArrayTwo, puzzleArrayThree, puzzleArrayFour)
  //   this.randomizeBank(puzzleBank);
  //   let fourPuzzles = this.setGamePuzzles(puzzleBank);
  //   let roundPuzzle = this.setRoundPuzzle(fourPuzzles);
  //   console.log(roundPuzzle)
  //   return puzzleBank;
  // }

  // randomizeBank(arr) {
  //   for (let i = 0; i < arr.length - 1; i++) {
  //     const randomIndex = Math.floor((Math.random() * (arr.length - i))) + i;
  //     [arr[i], arr[randomIndex]] = [arr[randomIndex], arr[i]];
  //   }
  //   return arr;
  // }

  // setGamePuzzles(puzzleBank) {
  //   let fourPuzzles = puzzleBank.slice(0, 4);
  //   this.gamePuzzles = fourPuzzles.map(puzzle => {
  //     return new Puzzle(puzzle.category, puzzle.total_number_of_letters, puzzle.correct_answer, puzzle.description, 0, )
  //   })
  //   return fourPuzzles;
  // }

  // setRoundPuzzle(fourPuzzles) {
  //   let roundPuzzle = fourPuzzles.pop();
  //   console.log(fourPuzzles.length)
  //   return roundPuzzle;
  // }

}

// if (typeof module !== 'undefined') {
//   module.exports = Game;
// }

/* harmony default export */ __webpack_exports__["default"] = (Game);

/***/ }),

/***/ "./src/Player.js":
/*!***********************!*\
  !*** ./src/Player.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Player {
  constructor(name, activePlayer, roundScore, totalScore) {
    this.name = name;
    this.activePlayer = false;
    this.roundScore = roundScore;
    this.totalScore = totalScore;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Player);

/***/ }),

/***/ "./src/Puzzle.js":
/*!***********************!*\
  !*** ./src/Puzzle.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Data.js */ "./src/Data.js");
/* harmony import */ var _Data_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Data_js__WEBPACK_IMPORTED_MODULE_0__);


class Puzzle {
  constructor(category, numberOfLetters, correctAnswer, description, guessedLetters = 0) {
    this.category = category,
    this.numberOfLetters = numberOfLetters,
    this.correctAnswer = correctAnswer,
    this.description = description,
    this.guessedLetters = guessedLetters
    this.consonantsBank = [],
    this.vowelsBank = []
  }

    grabPuzzleBanks() {
    let puzzleArrayOne = _Data_js__WEBPACK_IMPORTED_MODULE_0___default.a.puzzles.one_word_answers.puzzle_bank
    let puzzleArrayTwo = _Data_js__WEBPACK_IMPORTED_MODULE_0___default.a.puzzles.two_word_answers.puzzle_bank
    let puzzleArrayThree = _Data_js__WEBPACK_IMPORTED_MODULE_0___default.a.puzzles.three_word_answers.puzzle_bank
    let puzzleArrayFour = _Data_js__WEBPACK_IMPORTED_MODULE_0___default.a.puzzles.four_word_answers.puzzle_bank
    let puzzleBank = puzzleArrayOne.concat(puzzleArrayTwo, puzzleArrayThree, puzzleArrayFour)
    this.randomizeBank(puzzleBank);
    let fourPuzzles = this.setGamePuzzles(puzzleBank);
    let roundPuzzle = this.setRoundPuzzle(fourPuzzles);
    console.log(roundPuzzle)
    return puzzleBank;
  }

  randomizeBank(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
      const randomIndex = Math.floor((Math.random() * (arr.length - i))) + i;
      [arr[i], arr[randomIndex]] = [arr[randomIndex], arr[i]];
    }
    return arr;
  }

  setGamePuzzles(puzzleBank) {
    let fourPuzzles = puzzleBank.slice(0, 4);
    this.gamePuzzles = fourPuzzles.map(puzzle => {
      return new Puzzle(puzzle.category, puzzle.total_number_of_letters, puzzle.correct_answer, puzzle.description, 0, )
    })
    return fourPuzzles;
  }

  setRoundPuzzle(fourPuzzles) {
    let roundPuzzle = fourPuzzles.pop();
    console.log(fourPuzzles.length)
    return roundPuzzle;
  }

  countVowels(correctAnswer) {
    let vowels = ['a', 'e', 'i', 'o', 'u']
    
  }

  populateConsonantsBank() {
    this.consonantsBank = this.consonantsBank.concat(['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'])
    this.vowelsBank = this.vowelsBank.concat(['a', 'e', 'i', 'o', 'u'])
  }
 }

/* harmony default export */ __webpack_exports__["default"] = (Puzzle);

/***/ }),

/***/ "./src/css/base.css":
/*!**************************!*\
  !*** ./src/css/base.css ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./base.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/base.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/domUpdates.js":
/*!***************************!*\
  !*** ./src/domUpdates.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  //methods go here
});

/***/ }),

/***/ "./src/images/turing-logo.png":
/*!************************************!*\
  !*** ./src/images/turing-logo.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "images/turing-logo.png";

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_base_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/base.css */ "./src/css/base.css");
/* harmony import */ var _css_base_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_base_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Game_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Game.js */ "./src/Game.js");
/* harmony import */ var _images_turing_logo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/turing-logo.png */ "./src/images/turing-logo.png");
/* harmony import */ var _images_turing_logo_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_images_turing_logo_png__WEBPACK_IMPORTED_MODULE_2__);
// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file

// Tell webpack to use a CSS file
 


//  Tell webpack to use an image (link to it in index.html)


$('#submit-btn').on('click', function(e) {
  e.preventDefault();
  
  let wheelOfFortune = new _Game_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
  let playersArray = [];

  let playerOne = $('#player-one').val();
  let playerTwo = $('#player-two').val();
  let playerThree = $('#player-three').val();

  playersArray.push(playerOne, playerTwo, playerThree);

  wheelOfFortune.startGame(playersArray);
})

console.log('This is the JavaScript entry file - your code begins here.');



// export default index.js;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9iYXNlLmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi91cmxzLmpzIiwid2VicGFjazovLy8uL3NyYy9EYXRhLmpzIiwid2VicGFjazovLy8uL3NyYy9HYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9QbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1B1enpsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY3NzL2Jhc2UuY3NzPzVmMDUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvbVVwZGF0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy90dXJpbmctbG9nby5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQSwyQkFBMkIsbUJBQU8sQ0FBQyx3R0FBbUQ7QUFDdEY7QUFDQSxjQUFjLFFBQVMsU0FBUywyQkFBMkIsR0FBRyx5QkFBeUIsa0JBQWtCLGlCQUFpQixHQUFHOzs7Ozs7Ozs7Ozs7OztBQ0ZoSDs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7O0FBRWhCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHVDQUF1QyxnQkFBZ0I7QUFDdkQsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsSUFBSTs7O0FBR0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsbUJBQW1CLGlCQUFpQjtBQUNwQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxlQUFlLG9CQUFvQjtBQUNuQyw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0EscURBQXFELGNBQWM7QUFDbkU7QUFDQSxDOzs7Ozs7Ozs7OztBQ3BGQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBLGNBQWMsbUJBQU8sQ0FBQyx1REFBUTs7QUFFOUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLGlCQUFpQixtQkFBbUI7QUFDcEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLHNCQUFzQjtBQUN2Qzs7QUFFQTtBQUNBLG1CQUFtQiwyQkFBMkI7O0FBRTlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZ0IsbUJBQW1CO0FBQ25DO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpQkFBaUIsMkJBQTJCO0FBQzVDO0FBQ0E7O0FBRUEsUUFBUSx1QkFBdUI7QUFDL0I7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQSxpQkFBaUIsdUJBQXVCO0FBQ3hDO0FBQ0E7O0FBRUEsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsZ0JBQWdCLGlCQUFpQjtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYzs7QUFFZCxrREFBa0Qsc0JBQXNCO0FBQ3hFO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOztBQUVBO0FBQ0EsS0FBSyxLQUF3QyxFQUFFLEVBRTdDOztBQUVGLFFBQVEsc0JBQWlCO0FBQ3pCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RDtBQUN2RDs7QUFFQSw2QkFBNkIsbUJBQW1COztBQUVoRDs7QUFFQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDOVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxXQUFXLEVBQUU7QUFDckQsd0NBQXdDLFdBQVcsRUFBRTs7QUFFckQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxzQ0FBc0M7QUFDdEMsR0FBRztBQUNIO0FBQ0EsOERBQThEO0FBQzlEOztBQUVBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsUztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxTO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULFM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsUztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxTO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULFM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsUztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxTO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULFU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsVTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxTO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULFM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsUztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxTO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULFM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLEU7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsUztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxTO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxFO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULFM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsUztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxTO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxFO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULFM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsUztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxTO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULFM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsUztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxTO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULFM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsUztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxVO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULFU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsUztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxTO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULFM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsUztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxTO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxFO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxFO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxFO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULFM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsUztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxTO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULFM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLEU7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsUztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxTO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULFM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsUztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxTO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULFM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsUztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxTO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULFc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsVztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxTO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULFM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsUztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxTO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULFM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLEU7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLEU7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLEU7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsUztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxTO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULFM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsUztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsRTtBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsUztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxTO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULFM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsUztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxTO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULFM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsUztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxTO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULFM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsVztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxXO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULFM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsUztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxTO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULFM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsUztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsRTtBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsRTtBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsRTtBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxTO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULFM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsUztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxTO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxFO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxzQjs7Ozs7Ozs7Ozs7O0FDMXlCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDQUFrQztBQUNsQyxDQUE4QjtBQUM5QixDQUFrQztBQUNsQyxDQUEwQzs7QUFFMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsa0RBQU07QUFDM0I7QUFDQTs7QUFFQTtBQUNBLDBCQUEwQixrREFBTTtBQUNoQywwQkFBMEIsa0RBQU07QUFDaEMsNEJBQTRCLGtEQUFNO0FBQ2xDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXNCLG9CQUFvQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRWUsbUVBQUksRTs7Ozs7Ozs7Ozs7O0FDckVuQjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWUscUVBQU0sRTs7Ozs7Ozs7Ozs7O0FDVHJCO0FBQUE7QUFBQTtBQUE2Qjs7QUFFN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx5QkFBeUIsK0NBQUk7QUFDN0IseUJBQXlCLCtDQUFJO0FBQzdCLDJCQUEyQiwrQ0FBSTtBQUMvQiwwQkFBMEIsK0NBQUk7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtQkFBbUIsb0JBQW9CO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZSxxRUFBTSxFOzs7Ozs7Ozs7Ozs7QUMxRHJCLGNBQWMsbUJBQU8sQ0FBQyx1SEFBd0Q7O0FBRTlFLDRDQUE0QyxRQUFTOztBQUVyRDtBQUNBOzs7O0FBSUEsZUFBZTs7QUFFZjtBQUNBOztBQUVBLGFBQWEsbUJBQU8sQ0FBQyxzR0FBbUQ7O0FBRXhFOztBQUVBLEdBQUcsS0FBVSxFQUFFLEU7Ozs7Ozs7Ozs7OztBQ25CZjtBQUFlO0FBQ2Y7QUFDQSxDQUFDLEU7Ozs7Ozs7Ozs7O0FDRkQsMEM7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7O0FBRUE7O0FBRTRCOztBQUU1QjtBQUNrQzs7QUFFbEM7QUFDQTs7QUFFQSwyQkFBMkIsZ0RBQUk7QUFDL0I7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDs7OztBQUlBLDJCIiwiZmlsZSI6Im1haW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcGluaztcXG59XFxuXFxuXFxuI3N0YXJ0LWJhY2tncm91bmQge1xcbiAgaGVpZ2h0OiAzMDBweDtcXG4gIHdpZHRoOiAzMDBweDtcXG59XFxuXFxuXCIsIFwiXCJdKTtcblxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuICdAbWVkaWEgJyArIGl0ZW1bMl0gKyAneycgKyBjb250ZW50ICsgJ30nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgICB9XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IG1vZHVsZXNbaV07IC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcbiAgICAgIC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXG4gICAgICAvLyB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXG4gICAgICAvLyBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cbiAgICAgIGlmIChpdGVtWzBdID09IG51bGwgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgaWYgKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgICAgaXRlbVsyXSA9ICcoJyArIGl0ZW1bMl0gKyAnKSBhbmQgKCcgKyBtZWRpYVF1ZXJ5ICsgJyknO1xuICAgICAgICB9XG5cbiAgICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJztcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gJy8qIyBzb3VyY2VVUkw9JyArIGNzc01hcHBpbmcuc291cmNlUm9vdCArIHNvdXJjZSArICcgKi8nO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9ICdzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCwnICsgYmFzZTY0O1xuICByZXR1cm4gJy8qIyAnICsgZGF0YSArICcgKi8nO1xufSIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5cbnZhciBzdHlsZXNJbkRvbSA9IHt9O1xuXG52YXJcdG1lbW9pemUgPSBmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW87XG5cblx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0XHRpZiAodHlwZW9mIG1lbW8gPT09IFwidW5kZWZpbmVkXCIpIG1lbW8gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdHJldHVybiBtZW1vO1xuXHR9O1xufTtcblxudmFyIGlzT2xkSUUgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcblx0Ly8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3Ncblx0Ly8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuXHQvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG5cdC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuXHQvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcblx0cmV0dXJuIHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iO1xufSk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiAodGFyZ2V0LCBwYXJlbnQpIHtcbiAgaWYgKHBhcmVudCl7XG4gICAgcmV0dXJuIHBhcmVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG4gIH1cbiAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbn07XG5cbnZhciBnZXRFbGVtZW50ID0gKGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbyA9IHt9O1xuXG5cdHJldHVybiBmdW5jdGlvbih0YXJnZXQsIHBhcmVudCkge1xuICAgICAgICAgICAgICAgIC8vIElmIHBhc3NpbmcgZnVuY3Rpb24gaW4gb3B0aW9ucywgdGhlbiB1c2UgaXQgZm9yIHJlc29sdmUgXCJoZWFkXCIgZWxlbWVudC5cbiAgICAgICAgICAgICAgICAvLyBVc2VmdWwgZm9yIFNoYWRvdyBSb290IHN0eWxlIGkuZVxuICAgICAgICAgICAgICAgIC8vIHtcbiAgICAgICAgICAgICAgICAvLyAgIGluc2VydEludG86IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9vXCIpLnNoYWRvd1Jvb3QgfVxuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRhcmdldCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0dmFyIHN0eWxlVGFyZ2V0ID0gZ2V0VGFyZ2V0LmNhbGwodGhpcywgdGFyZ2V0LCBwYXJlbnQpO1xuXHRcdFx0Ly8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblx0XHRcdGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHQvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuXHRcdFx0XHRcdC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcblx0XHRcdFx0fSBjYXRjaChlKSB7XG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBudWxsO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcblx0XHR9XG5cdFx0cmV0dXJuIG1lbW9bdGFyZ2V0XVxuXHR9O1xufSkoKTtcblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXJcdHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xudmFyXHRzdHlsZXNJbnNlcnRlZEF0VG9wID0gW107XG5cbnZhclx0Zml4VXJscyA9IHJlcXVpcmUoXCIuL3VybHNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xuXHRpZiAodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XG5cdFx0aWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xuXHR9XG5cblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cblx0b3B0aW9ucy5hdHRycyA9IHR5cGVvZiBvcHRpb25zLmF0dHJzID09PSBcIm9iamVjdFwiID8gb3B0aW9ucy5hdHRycyA6IHt9O1xuXG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cdGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSBcImJvb2xlYW5cIikgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgPGhlYWQ+IGVsZW1lbnRcbiAgICAgICAgaWYgKCFvcHRpb25zLmluc2VydEludG8pIG9wdGlvbnMuaW5zZXJ0SW50byA9IFwiaGVhZFwiO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIGJvdHRvbSBvZiB0aGUgdGFyZ2V0XG5cdGlmICghb3B0aW9ucy5pbnNlcnRBdCkgb3B0aW9ucy5pbnNlcnRBdCA9IFwiYm90dG9tXCI7XG5cblx0dmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0LCBvcHRpb25zKTtcblxuXHRhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUgKG5ld0xpc3QpIHtcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xuXHRcdH1cblxuXHRcdGlmKG5ld0xpc3QpIHtcblx0XHRcdHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCwgb3B0aW9ucyk7XG5cdFx0XHRhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xuXHRcdH1cblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV07XG5cblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcblx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykgZG9tU3R5bGUucGFydHNbal0oKTtcblxuXHRcdFx0XHRkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcbn07XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tIChzdHlsZXMsIG9wdGlvbnMpIHtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdGlmKGRvbVN0eWxlKSB7XG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBwYXJ0cyA9IFtdO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblxuXHRcdFx0c3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7aWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0c307XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyAobGlzdCwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGVzID0gW107XG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XG5cdFx0dmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG5cdFx0dmFyIGNzcyA9IGl0ZW1bMV07XG5cdFx0dmFyIG1lZGlhID0gaXRlbVsyXTtcblx0XHR2YXIgc291cmNlTWFwID0gaXRlbVszXTtcblx0XHR2YXIgcGFydCA9IHtjc3M6IGNzcywgbWVkaWE6IG1lZGlhLCBzb3VyY2VNYXA6IHNvdXJjZU1hcH07XG5cblx0XHRpZighbmV3U3R5bGVzW2lkXSkgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcblx0XHRlbHNlIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcblx0fVxuXG5cdHJldHVybiBzdHlsZXM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudCAob3B0aW9ucywgc3R5bGUpIHtcblx0dmFyIHRhcmdldCA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvKVxuXG5cdGlmICghdGFyZ2V0KSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnRJbnRvJyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG5cdH1cblxuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZXNJbnNlcnRlZEF0VG9wW3N0eWxlc0luc2VydGVkQXRUb3AubGVuZ3RoIC0gMV07XG5cblx0aWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidG9wXCIpIHtcblx0XHRpZiAoIWxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCB0YXJnZXQuZmlyc3RDaGlsZCk7XG5cdFx0fSBlbHNlIGlmIChsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHRcdH1cblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGUpO1xuXHR9IGVsc2UgaWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwiYm90dG9tXCIpIHtcblx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydEF0ID09PSBcIm9iamVjdFwiICYmIG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlKSB7XG5cdFx0dmFyIG5leHRTaWJsaW5nID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEF0LmJlZm9yZSwgdGFyZ2V0KTtcblx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBuZXh0U2libGluZyk7XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiW1N0eWxlIExvYWRlcl1cXG5cXG4gSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcgKCdvcHRpb25zLmluc2VydEF0JykgZm91bmQuXFxuIE11c3QgYmUgJ3RvcCcsICdib3R0b20nLCBvciBPYmplY3QuXFxuIChodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlciNpbnNlcnRhdClcXG5cIik7XG5cdH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50IChzdHlsZSkge1xuXHRpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuXHRzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcblxuXHR2YXIgaWR4ID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcC5pbmRleE9mKHN0eWxlKTtcblx0aWYoaWR4ID49IDApIHtcblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnNwbGljZShpZHgsIDEpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblxuXHRpZihvcHRpb25zLmF0dHJzLm5vbmNlID09PSB1bmRlZmluZWQpIHtcblx0XHR2YXIgbm9uY2UgPSBnZXROb25jZSgpO1xuXHRcdGlmIChub25jZSkge1xuXHRcdFx0b3B0aW9ucy5hdHRycy5ub25jZSA9IG5vbmNlO1xuXHRcdH1cblx0fVxuXG5cdGFkZEF0dHJzKHN0eWxlLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlKTtcblxuXHRyZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxpbmtFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblx0b3B0aW9ucy5hdHRycy5yZWwgPSBcInN0eWxlc2hlZXRcIjtcblxuXHRhZGRBdHRycyhsaW5rLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIGxpbmspO1xuXG5cdHJldHVybiBsaW5rO1xufVxuXG5mdW5jdGlvbiBhZGRBdHRycyAoZWwsIGF0dHJzKSB7XG5cdE9iamVjdC5rZXlzKGF0dHJzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRlbC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyc1trZXldKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGdldE5vbmNlKCkge1xuXHRpZiAodHlwZW9mIF9fd2VicGFja19ub25jZV9fID09PSAndW5kZWZpbmVkJykge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0cmV0dXJuIF9fd2VicGFja19ub25jZV9fO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZSAob2JqLCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZSwgdXBkYXRlLCByZW1vdmUsIHJlc3VsdDtcblxuXHQvLyBJZiBhIHRyYW5zZm9ybSBmdW5jdGlvbiB3YXMgZGVmaW5lZCwgcnVuIGl0IG9uIHRoZSBjc3Ncblx0aWYgKG9wdGlvbnMudHJhbnNmb3JtICYmIG9iai5jc3MpIHtcblx0ICAgIHJlc3VsdCA9IHR5cGVvZiBvcHRpb25zLnRyYW5zZm9ybSA9PT0gJ2Z1bmN0aW9uJ1xuXHRcdCA/IG9wdGlvbnMudHJhbnNmb3JtKG9iai5jc3MpIFxuXHRcdCA6IG9wdGlvbnMudHJhbnNmb3JtLmRlZmF1bHQob2JqLmNzcyk7XG5cblx0ICAgIGlmIChyZXN1bHQpIHtcblx0ICAgIFx0Ly8gSWYgdHJhbnNmb3JtIHJldHVybnMgYSB2YWx1ZSwgdXNlIHRoYXQgaW5zdGVhZCBvZiB0aGUgb3JpZ2luYWwgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBydW5uaW5nIHJ1bnRpbWUgdHJhbnNmb3JtYXRpb25zIG9uIHRoZSBjc3MuXG5cdCAgICBcdG9iai5jc3MgPSByZXN1bHQ7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgXHQvLyBJZiB0aGUgdHJhbnNmb3JtIGZ1bmN0aW9uIHJldHVybnMgYSBmYWxzeSB2YWx1ZSwgZG9uJ3QgYWRkIHRoaXMgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBjb25kaXRpb25hbCBsb2FkaW5nIG9mIGNzc1xuXHQgICAgXHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdCAgICBcdFx0Ly8gbm9vcFxuXHQgICAgXHR9O1xuXHQgICAgfVxuXHR9XG5cblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG5cblx0XHRzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcblxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG5cblx0fSBlbHNlIGlmIChcblx0XHRvYmouc291cmNlTWFwICYmXG5cdFx0dHlwZW9mIFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIlxuXHQpIHtcblx0XHRzdHlsZSA9IGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IHVwZGF0ZUxpbmsuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblxuXHRcdFx0aWYoc3R5bGUuaHJlZikgVVJMLnJldm9rZU9iamVjdFVSTChzdHlsZS5ocmVmKTtcblx0XHR9O1xuXHR9IGVsc2Uge1xuXHRcdHN0eWxlID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblx0XHR9O1xuXHR9XG5cblx0dXBkYXRlKG9iaik7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlIChuZXdPYmopIHtcblx0XHRpZiAobmV3T2JqKSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdG5ld09iai5jc3MgPT09IG9iai5jc3MgJiZcblx0XHRcdFx0bmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiZcblx0XHRcdFx0bmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcFxuXHRcdFx0KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlbW92ZSgpO1xuXHRcdH1cblx0fTtcbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuXG5cdFx0cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG5cdH07XG59KSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnIChzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcblxuXHRpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuXHR9IGVsc2Uge1xuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcblxuXHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuXHRcdFx0c3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcgKHN0eWxlLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcblxuXHRpZihtZWRpYSkge1xuXHRcdHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxuXHR9XG5cblx0aWYoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcblx0fSBlbHNlIHtcblx0XHR3aGlsZShzdHlsZS5maXJzdENoaWxkKSB7XG5cdFx0XHRzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcblx0XHR9XG5cblx0XHRzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcblx0fVxufVxuXG5mdW5jdGlvbiB1cGRhdGVMaW5rIChsaW5rLCBvcHRpb25zLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG5cdC8qXG5cdFx0SWYgY29udmVydFRvQWJzb2x1dGVVcmxzIGlzbid0IGRlZmluZWQsIGJ1dCBzb3VyY2VtYXBzIGFyZSBlbmFibGVkXG5cdFx0YW5kIHRoZXJlIGlzIG5vIHB1YmxpY1BhdGggZGVmaW5lZCB0aGVuIGxldHMgdHVybiBjb252ZXJ0VG9BYnNvbHV0ZVVybHNcblx0XHRvbiBieSBkZWZhdWx0LiAgT3RoZXJ3aXNlIGRlZmF1bHQgdG8gdGhlIGNvbnZlcnRUb0Fic29sdXRlVXJscyBvcHRpb25cblx0XHRkaXJlY3RseVxuXHQqL1xuXHR2YXIgYXV0b0ZpeFVybHMgPSBvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyA9PT0gdW5kZWZpbmVkICYmIHNvdXJjZU1hcDtcblxuXHRpZiAob3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgfHwgYXV0b0ZpeFVybHMpIHtcblx0XHRjc3MgPSBmaXhVcmxzKGNzcyk7XG5cdH1cblxuXHRpZiAoc291cmNlTWFwKSB7XG5cdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcblx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArIFwiICovXCI7XG5cdH1cblxuXHR2YXIgYmxvYiA9IG5ldyBCbG9iKFtjc3NdLCB7IHR5cGU6IFwidGV4dC9jc3NcIiB9KTtcblxuXHR2YXIgb2xkU3JjID0gbGluay5ocmVmO1xuXG5cdGxpbmsuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG5cblx0aWYob2xkU3JjKSBVUkwucmV2b2tlT2JqZWN0VVJMKG9sZFNyYyk7XG59XG4iLCJcbi8qKlxuICogV2hlbiBzb3VyY2UgbWFwcyBhcmUgZW5hYmxlZCwgYHN0eWxlLWxvYWRlcmAgdXNlcyBhIGxpbmsgZWxlbWVudCB3aXRoIGEgZGF0YS11cmkgdG9cbiAqIGVtYmVkIHRoZSBjc3Mgb24gdGhlIHBhZ2UuIFRoaXMgYnJlYWtzIGFsbCByZWxhdGl2ZSB1cmxzIGJlY2F1c2Ugbm93IHRoZXkgYXJlIHJlbGF0aXZlIHRvIGFcbiAqIGJ1bmRsZSBpbnN0ZWFkIG9mIHRoZSBjdXJyZW50IHBhZ2UuXG4gKlxuICogT25lIHNvbHV0aW9uIGlzIHRvIG9ubHkgdXNlIGZ1bGwgdXJscywgYnV0IHRoYXQgbWF5IGJlIGltcG9zc2libGUuXG4gKlxuICogSW5zdGVhZCwgdGhpcyBmdW5jdGlvbiBcImZpeGVzXCIgdGhlIHJlbGF0aXZlIHVybHMgdG8gYmUgYWJzb2x1dGUgYWNjb3JkaW5nIHRvIHRoZSBjdXJyZW50IHBhZ2UgbG9jYXRpb24uXG4gKlxuICogQSBydWRpbWVudGFyeSB0ZXN0IHN1aXRlIGlzIGxvY2F0ZWQgYXQgYHRlc3QvZml4VXJscy5qc2AgYW5kIGNhbiBiZSBydW4gdmlhIHRoZSBgbnBtIHRlc3RgIGNvbW1hbmQuXG4gKlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzcykge1xuICAvLyBnZXQgY3VycmVudCBsb2NhdGlvblxuICB2YXIgbG9jYXRpb24gPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdy5sb2NhdGlvbjtcblxuICBpZiAoIWxvY2F0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiZml4VXJscyByZXF1aXJlcyB3aW5kb3cubG9jYXRpb25cIik7XG4gIH1cblxuXHQvLyBibGFuayBvciBudWxsP1xuXHRpZiAoIWNzcyB8fCB0eXBlb2YgY3NzICE9PSBcInN0cmluZ1wiKSB7XG5cdCAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHZhciBiYXNlVXJsID0gbG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKyBsb2NhdGlvbi5ob3N0O1xuICB2YXIgY3VycmVudERpciA9IGJhc2VVcmwgKyBsb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9cXC9bXlxcL10qJC8sIFwiL1wiKTtcblxuXHQvLyBjb252ZXJ0IGVhY2ggdXJsKC4uLilcblx0Lypcblx0VGhpcyByZWd1bGFyIGV4cHJlc3Npb24gaXMganVzdCBhIHdheSB0byByZWN1cnNpdmVseSBtYXRjaCBicmFja2V0cyB3aXRoaW5cblx0YSBzdHJpbmcuXG5cblx0IC91cmxcXHMqXFwoICA9IE1hdGNoIG9uIHRoZSB3b3JkIFwidXJsXCIgd2l0aCBhbnkgd2hpdGVzcGFjZSBhZnRlciBpdCBhbmQgdGhlbiBhIHBhcmVuc1xuXHQgICAoICA9IFN0YXJ0IGEgY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgKD86ICA9IFN0YXJ0IGEgbm9uLWNhcHR1cmluZyBncm91cFxuXHQgICAgICAgICBbXikoXSAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKD86ICA9IFN0YXJ0IGFub3RoZXIgbm9uLWNhcHR1cmluZyBncm91cHNcblx0ICAgICAgICAgICAgICAgICBbXikoXSsgID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgICAgIFteKShdKiAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICBcXCkgID0gTWF0Y2ggYSBlbmQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICkgID0gRW5kIEdyb3VwXG4gICAgICAgICAgICAgICpcXCkgPSBNYXRjaCBhbnl0aGluZyBhbmQgdGhlbiBhIGNsb3NlIHBhcmVuc1xuICAgICAgICAgICkgID0gQ2xvc2Ugbm9uLWNhcHR1cmluZyBncm91cFxuICAgICAgICAgICogID0gTWF0Y2ggYW55dGhpbmdcbiAgICAgICApICA9IENsb3NlIGNhcHR1cmluZyBncm91cFxuXHQgXFwpICA9IE1hdGNoIGEgY2xvc2UgcGFyZW5zXG5cblx0IC9naSAgPSBHZXQgYWxsIG1hdGNoZXMsIG5vdCB0aGUgZmlyc3QuICBCZSBjYXNlIGluc2Vuc2l0aXZlLlxuXHQgKi9cblx0dmFyIGZpeGVkQ3NzID0gY3NzLnJlcGxhY2UoL3VybFxccypcXCgoKD86W14pKF18XFwoKD86W14pKF0rfFxcKFteKShdKlxcKSkqXFwpKSopXFwpL2dpLCBmdW5jdGlvbihmdWxsTWF0Y2gsIG9yaWdVcmwpIHtcblx0XHQvLyBzdHJpcCBxdW90ZXMgKGlmIHRoZXkgZXhpc3QpXG5cdFx0dmFyIHVucXVvdGVkT3JpZ1VybCA9IG9yaWdVcmxcblx0XHRcdC50cmltKClcblx0XHRcdC5yZXBsYWNlKC9eXCIoLiopXCIkLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pXG5cdFx0XHQucmVwbGFjZSgvXicoLiopJyQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSk7XG5cblx0XHQvLyBhbHJlYWR5IGEgZnVsbCB1cmw/IG5vIGNoYW5nZVxuXHRcdGlmICgvXigjfGRhdGE6fGh0dHA6XFwvXFwvfGh0dHBzOlxcL1xcL3xmaWxlOlxcL1xcL1xcL3xcXHMqJCkvaS50ZXN0KHVucXVvdGVkT3JpZ1VybCkpIHtcblx0XHQgIHJldHVybiBmdWxsTWF0Y2g7XG5cdFx0fVxuXG5cdFx0Ly8gY29udmVydCB0aGUgdXJsIHRvIGEgZnVsbCB1cmxcblx0XHR2YXIgbmV3VXJsO1xuXG5cdFx0aWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiLy9cIikgPT09IDApIHtcblx0XHQgIFx0Ly9UT0RPOiBzaG91bGQgd2UgYWRkIHByb3RvY29sP1xuXHRcdFx0bmV3VXJsID0gdW5xdW90ZWRPcmlnVXJsO1xuXHRcdH0gZWxzZSBpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvXCIpID09PSAwKSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byB0aGUgYmFzZSB1cmxcblx0XHRcdG5ld1VybCA9IGJhc2VVcmwgKyB1bnF1b3RlZE9yaWdVcmw7IC8vIGFscmVhZHkgc3RhcnRzIHdpdGggJy8nXG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIGN1cnJlbnQgZGlyZWN0b3J5XG5cdFx0XHRuZXdVcmwgPSBjdXJyZW50RGlyICsgdW5xdW90ZWRPcmlnVXJsLnJlcGxhY2UoL15cXC5cXC8vLCBcIlwiKTsgLy8gU3RyaXAgbGVhZGluZyAnLi8nXG5cdFx0fVxuXG5cdFx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCB1cmwoLi4uKVxuXHRcdHJldHVybiBcInVybChcIiArIEpTT04uc3RyaW5naWZ5KG5ld1VybCkgKyBcIilcIjtcblx0fSk7XG5cblx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCBjc3Ncblx0cmV0dXJuIGZpeGVkQ3NzO1xufTtcbiIsImNvbnN0IGRhdGEgPSB7XG4gIHJlc3BvbnNlX2NvZGU6IHtcbiAgICB2ZXJzaW9uOiAnMS4yJyxcbiAgICB0ZXJtc29mU2VydmljZTogJ2h0dHA6Ly9mcm9udGVuZC50dXJpbmcuaW8vcHJvamVjdHMvd2hlZWwtb2YtZm9ydHVuZS5odG1sJyxcbiAgICBmZWF0dXJlczoge1xuICAgICAgd2hlZWw6IDEsXG4gICAgICBwdXp6bGVzOiAxXG4gICAgfSxcbiAgfSxcbiAgd2hlZWw6IFtcbiAgICA5MDAsXG4gICAgJ0JBTktSVVBUJyxcbiAgICAyNTAwLFxuICAgIDYwMCxcbiAgICA3MDAsXG4gICAgNjAwLFxuICAgIDY1MCxcbiAgICA1MDAsXG4gICAgNzAwLFxuICAgICdCQU5LUlVQVCcsXG4gICAgNjAwLFxuICAgIDU1MCxcbiAgICA1MDAsXG4gICAgNjAwLFxuICAgICdCQU5LUlVQVCcsXG4gICAgJ0xPU0UgQSBUVVJOJyxcbiAgICA3MDAsXG4gICAgODAwLFxuICAgIDUwMCxcbiAgICA2NTAsXG4gICAgNTAwLFxuICAgIDkwMFxuICBdLFxuICBwdXp6bGVzOiB7XG4gICAgb25lX3dvcmRfYW5zd2Vyczoge1xuICAgICAgZGF0ZTogJ09jdCAwNyAyMDE4JyxcbiAgICAgIHB1enpsZV9iYW5rOiBbXG4gICAgICAgIHsgIFxuICAgICAgICAgIGNhdGVnb3J5OiAnQXJvdW5kIFRoZSBIb3VzZScsXG4gICAgICAgICAgbnVtYmVyX29mX3dvcmRzOiAxLFxuICAgICAgICAgIHRvdGFsX251bWJlcl9vZl9sZXR0ZXJzOiA4LFxuICAgICAgICAgIGZpcnN0X3dvcmQ6IDgsIFxuICAgICAgICAgIGRlc2NyaXB0aW9uOidMb2NhdGlvbiBvciBvYmplY3QocykgZm91bmQgd2l0aGluIGEgdHlwaWNhbCBob3VzZS4nLFxuICAgICAgICAgIGNvcnJlY3RfYW5zd2VyOiAnQXJtY2hhaXInLFxuICAgICAgICB9LFxuICAgICAgICB7ICBcbiAgICAgICAgICBjYXRlZ29yeTogJ1RoZSA5MHMnLFxuICAgICAgICAgIG51bWJlcl9vZl93b3JkczogMSxcbiAgICAgICAgICB0b3RhbF9udW1iZXJfb2ZfbGV0dGVyczogNyxcbiAgICAgICAgICBmaXJzdF93b3JkOiA3LCBcbiAgICAgICAgICBkZXNjcmlwdGlvbjonUHV6emxlcyBwZXJ0YWluaW5nIHRvIHRoZSBkZWNhZGUgaW4gcXVlc3Rpb24uJyxcbiAgICAgICAgICBjb3JyZWN0X2Fuc3dlcjogJ0JlZXBlcnMnLFxuICAgICAgICB9LFxuICAgICAgICB7ICBcbiAgICAgICAgICBjYXRlZ29yeTogJ1RoZSA5MHMnLFxuICAgICAgICAgIG51bWJlcl9vZl93b3JkczogMSxcbiAgICAgICAgICB0b3RhbF9udW1iZXJfb2ZfbGV0dGVyczogMTAsXG4gICAgICAgICAgZmlyc3Rfd29yZDogMTAsIFxuICAgICAgICAgIGRlc2NyaXB0aW9uOidQdXp6bGVzIHBlcnRhaW5pbmcgdG8gdGhlIGRlY2FkZSBpbiBxdWVzdGlvbi4nLFxuICAgICAgICAgIGNvcnJlY3RfYW5zd2VyOiAnVGFtYWdvdGNoaScsXG4gICAgICAgIH0sXG4gICAgICAgIHsgIFxuICAgICAgICAgIGNhdGVnb3J5OiAnQXJvdW5kIFRoZSBIb3VzZScsXG4gICAgICAgICAgbnVtYmVyX29mX3dvcmRzOiAxLFxuICAgICAgICAgIHRvdGFsX251bWJlcl9vZl9sZXR0ZXJzOiA2LFxuICAgICAgICAgIGZpcnN0X3dvcmQ6IDYsXG4gICAgICAgICAgZGVzY3JpcHRpb246ICdMb2NhdGlvbiBvciBvYmplY3QocykgZm91bmQgd2l0aGluIGEgdHlwaWNhbCBob3VzZS4nLFxuICAgICAgICAgIGNvcnJlY3RfYW5zd2VyOiAnVGVhcG90JyxcbiAgICAgICAgfSxcbiAgICAgICAgeyAgXG4gICAgICAgICAgY2F0ZWdvcnk6ICdUaGUgOTBzJyxcbiAgICAgICAgICBudW1iZXJfb2Zfd29yZHM6IDEsXG4gICAgICAgICAgdG90YWxfbnVtYmVyX29mX2xldHRlcnM6IDEwLFxuICAgICAgICAgIGZpcnN0X3dvcmQ6IDEwLCBcbiAgICAgICAgICBkZXNjcmlwdGlvbjonUHV6emxlcyBwZXJ0YWluaW5nIHRvIHRoZSBkZWNhZGUgaW4gcXVlc3Rpb24uJyxcbiAgICAgICAgICBjb3JyZWN0X2Fuc3dlcjogJ1NjcnVuY2hpZXMnLFxuICAgICAgICB9LFxuICAgICAgICB7ICBcbiAgICAgICAgICBjYXRlZ29yeTogJ0Fyb3VuZCBUaGUgSG91c2UnLFxuICAgICAgICAgIG51bWJlcl9vZl93b3JkczogMSxcbiAgICAgICAgICB0b3RhbF9udW1iZXJfb2ZfbGV0dGVyczogOCxcbiAgICAgICAgICBmaXJzdF93b3JkOiA4LFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnTG9jYXRpb24gb3Igb2JqZWN0KHMpIGZvdW5kIHdpdGhpbiBhIHR5cGljYWwgaG91c2UuJyxcbiAgICAgICAgICBjb3JyZWN0X2Fuc3dlcjogJ01vdXNlcGFkJyxcbiAgICAgICAgfSxcbiAgICAgICAgeyAgXG4gICAgICAgICAgY2F0ZWdvcnk6ICdUaGUgOTBzJyxcbiAgICAgICAgICBudW1iZXJfb2Zfd29yZHM6IDEsXG4gICAgICAgICAgdG90YWxfbnVtYmVyX29mX2xldHRlcnM6IDksXG4gICAgICAgICAgZmlyc3Rfd29yZDogOSwgXG4gICAgICAgICAgZGVzY3JpcHRpb246J1B1enpsZXMgcGVydGFpbmluZyB0byB0aGUgZGVjYWRlIGluIHF1ZXN0aW9uLicsXG4gICAgICAgICAgY29ycmVjdF9hbnN3ZXI6ICdTa2V0Y2hlcnMnLFxuICAgICAgICB9LFxuICAgICAgICB7ICBcbiAgICAgICAgICBjYXRlZ29yeTogJ0Fyb3VuZCBUaGUgSG91c2UnLFxuICAgICAgICAgIG51bWJlcl9vZl93b3JkczogMSxcbiAgICAgICAgICB0b3RhbF9udW1iZXJfb2ZfbGV0dGVyczogOCxcbiAgICAgICAgICBmaXJzdF93b3JkOiA4LFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnTG9jYXRpb24gb3Igb2JqZWN0KHMpIGZvdW5kIHdpdGhpbiBhIHR5cGljYWwgaG91c2UuJyxcbiAgICAgICAgICBjb3JyZWN0X2Fuc3dlcjogJ1Rvb2xraXRzJyxcbiAgICAgICAgfSxcbiAgICAgICAgeyAgXG4gICAgICAgICAgY2F0ZWdvcnk6ICdQaHJhc2UnLFxuICAgICAgICAgIG51bWJlcl9vZl93b3JkczogMSxcbiAgICAgICAgICB0b3RhbF9udW1iZXJfb2ZfbGV0dGVyczogNyxcbiAgICAgICAgICBmaXJzdF93b3JkOiA3LCBcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ2FueSB0d28gKG9yIG1vcmUpIHJlbGF0ZWQgcGhyYXNlcyBzZXBhcmF0ZWQgYnkgYSBjb21tYSBvciBvdGhlcndpc2UgdXNlZCBjb25zZWN1dGl2ZWx5JyxcbiAgICAgICAgICBjb3JyZWN0X2Fuc3dlcjogJ0JvbmpvdXInLFxuICAgICAgICB9LFxuICAgICAgICAgeyAgXG4gICAgICAgICAgY2F0ZWdvcnk6ICdUaGUgOTBzJyxcbiAgICAgICAgICBudW1iZXJfb2Zfd29yZHM6IDEsXG4gICAgICAgICAgdG90YWxfbnVtYmVyX29mX2xldHRlcnM6IDksXG4gICAgICAgICAgZmlyc3Rfd29yZDogOSwgXG4gICAgICAgICAgZGVzY3JpcHRpb246J1B1enpsZXMgcGVydGFpbmluZyB0byB0aGUgZGVjYWRlIGluIHF1ZXN0aW9uLicsXG4gICAgICAgICAgY29ycmVjdF9hbnN3ZXI6ICdPcGVyYXRpb24nLFxuICAgICAgICB9LFxuICAgICAgICAgeyAgXG4gICAgICAgICAgY2F0ZWdvcnk6ICdUaGUgOTBzJyxcbiAgICAgICAgICBudW1iZXJfb2Zfd29yZHM6IDEsXG4gICAgICAgICAgdG90YWxfbnVtYmVyX29mX2xldHRlcnM6IDMsXG4gICAgICAgICAgZmlyc3Rfd29yZDogMywgXG4gICAgICAgICAgZGVzY3JpcHRpb246J1B1enpsZXMgcGVydGFpbmluZyB0byB0aGUgZGVjYWRlIGluIHF1ZXN0aW9uLicsXG4gICAgICAgICAgY29ycmVjdF9hbnN3ZXI6ICdNb28nLFxuICAgICAgICB9LFxuICAgICAgICB7ICBcbiAgICAgICAgICBjYXRlZ29yeTogJ1BocmFzZScsXG4gICAgICAgICAgbnVtYmVyX29mX3dvcmRzOiAxLFxuICAgICAgICAgIHRvdGFsX251bWJlcl9vZl9sZXR0ZXJzOiA2LFxuICAgICAgICAgIGZpcnN0X3dvcmQ6IDYsIFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnQW55IHR3byAob3IgbW9yZSkgcmVsYXRlZCBwaHJhc2VzIHNlcGFyYXRlZCBieSBhIGNvbW1hIG9yIG90aGVyd2lzZSB1c2VkIGNvbnNlY3V0aXZlbHknLFxuICAgICAgICAgIGNvcnJlY3RfYW5zd2VyOiAnQ2hlZXJzJyxcbiAgICAgICAgfSxcbiAgICAgICAgeyAgXG4gICAgICAgICAgY2F0ZWdvcnk6ICdQaHJhc2UnLFxuICAgICAgICAgIG51bWJlcl9vZl93b3JkczogMSxcbiAgICAgICAgICB0b3RhbF9udW1iZXJfb2ZfbGV0dGVyczogMixcbiAgICAgICAgICBmaXJzdF93b3JkOiAyLCBcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ0FueSB0d28gKG9yIG1vcmUpIHJlbGF0ZWQgcGhyYXNlcyBzZXBhcmF0ZWQgYnkgYSBjb21tYSBvciBvdGhlcndpc2UgdXNlZCBjb25zZWN1dGl2ZWx5JyxcbiAgICAgICAgICBjb3JyZWN0X2Fuc3dlcjogJ0hpJyxcbiAgICAgICAgfSxcbiAgICAgICAgeyAgXG4gICAgICAgICAgY2F0ZWdvcnk6ICdQaHJhc2UnLFxuICAgICAgICAgIG51bWJlcl9vZl93b3JkczogMSxcbiAgICAgICAgICB0b3RhbF9udW1iZXJfb2ZfbGV0dGVyczogMTAsXG4gICAgICAgICAgZmlyc3Rfd29yZDogMTAsIFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnQW55IHR3byAob3IgbW9yZSkgcmVsYXRlZCBwaHJhc2VzIHNlcGFyYXRlZCBieSBhIGNvbW1hIG9yIG90aGVyd2lzZSB1c2VkIGNvbnNlY3V0aXZlbHknLFxuICAgICAgICAgIGNvcnJlY3RfYW5zd2VyOiAnSG9jdXMtUG9jdXMnLFxuICAgICAgICB9LFxuICAgICAgICB7ICBcbiAgICAgICAgICBjYXRlZ29yeTogJ1BocmFzZScsXG4gICAgICAgICAgbnVtYmVyX29mX3dvcmRzOiAxLFxuICAgICAgICAgIHRvdGFsX251bWJlcl9vZl9sZXR0ZXJzOiA2LFxuICAgICAgICAgIGZpcnN0X3dvcmQ6IDYsIFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnQW55IHR3byAob3IgbW9yZSkgcmVsYXRlZCBwaHJhc2VzIHNlcGFyYXRlZCBieSBhIGNvbW1hIG9yIG90aGVyd2lzZSB1c2VkIGNvbnNlY3V0aXZlbHknLFxuICAgICAgICAgIGNvcnJlY3RfYW5zd2VyOiAnUHJlc3RvJyxcbiAgICAgICAgfSxcbiAgICAgICAgeyAgXG4gICAgICAgICAgY2F0ZWdvcnk6ICdQaHJhc2UnLFxuICAgICAgICAgIG51bWJlcl9vZl93b3JkczogMSxcbiAgICAgICAgICB0b3RhbF9udW1iZXJfb2ZfbGV0dGVyczogMTIsXG4gICAgICAgICAgZmlyc3Rfd29yZDogMTIsXG4gICAgICAgICAgZGVzY3JpcHRpb246ICdBbnkgdHdvIChvciBtb3JlKSByZWxhdGVkIHBocmFzZXMgc2VwYXJhdGVkIGJ5IGEgY29tbWEgb3Igb3RoZXJ3aXNlIHVzZWQgY29uc2VjdXRpdmVseScsXG4gICAgICAgICAgY29ycmVjdF9hbnN3ZXI6ICdUcmljay1Pci1UcmVhdCcsXG4gICAgICAgIH0seyAgXG4gICAgICAgICAgY2F0ZWdvcnk6J1JoeW1lIFRpbWUnLFxuICAgICAgICAgIG51bWJlcl9vZl93b3JkczogMSxcbiAgICAgICAgICB0b3RhbF9udW1iZXJfb2ZfbGV0dGVyczogMTEsXG4gICAgICAgICAgZmlyc3Rfd29yZDogMTEsXG4gICAgICAgICAgZGVzY3JpcHRpb246ICdSaHltaW5nIHdvcmQocykgb3IgcGhyYXNlKHMpLicsXG4gICAgICAgICAgY29ycmVjdF9hbnN3ZXI6ICdUdXR0aS1GcnVpdGknLFxuICAgICAgICB9LFxuICAgICAgICB7ICBcbiAgICAgICAgICBjYXRlZ29yeTonUmh5bWUgVGltZScsXG4gICAgICAgICAgbnVtYmVyX29mX3dvcmRzOiAxLFxuICAgICAgICAgIHRvdGFsX251bWJlcl9vZl9sZXR0ZXJzOiAxMCxcbiAgICAgICAgICBmaXJzdF93b3JkOiAxMCxcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ1JoeW1pbmcgd29yZChzKSBvciBwaHJhc2UocykuJyxcbiAgICAgICAgICBjb3JyZWN0X2Fuc3dlcjogJ0xvdmV5LURvdmV5JyxcbiAgICAgICAgfSxcbiAgICAgICAgeyAgXG4gICAgICAgICAgY2F0ZWdvcnk6ICdBcm91bmQgVGhlIEhvdXNlJyxcbiAgICAgICAgICBudW1iZXJfb2Zfd29yZHM6IDEsXG4gICAgICAgICAgdG90YWxfbnVtYmVyX29mX2xldHRlcnM6IDExLFxuICAgICAgICAgIGZpcnN0X3dvcmQ6IDExLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnTG9jYXRpb24gb3Igb2JqZWN0KHMpIGZvdW5kIHdpdGhpbiBhIHR5cGljYWwgaG91c2UuJyxcbiAgICAgICAgICBjb3JyZWN0X2Fuc3dlcjogJ1dpbmRvd3BhbmVzJyxcbiAgICAgICAgfSx7ICBcbiAgICAgICAgICBjYXRlZ29yeTonQXJvdW5kIFRoZSBIb3VzZScsXG4gICAgICAgICAgbnVtYmVyX29mX3dvcmRzOiAxLFxuICAgICAgICAgIHRvdGFsX251bWJlcl9vZl9sZXR0ZXJzOiAxMCxcbiAgICAgICAgICBmaXJzdF93b3JkOiAxMCxcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ0xvY2F0aW9uIG9yIG9iamVjdChzKSBmb3VuZCB3aXRoaW4gYSB0eXBpY2FsIGhvdXNlLicsXG4gICAgICAgICAgY29ycmVjdF9hbnN3ZXI6ICdTbm93Ymxvd2VyJyxcbiAgICAgICAgfSxcbiAgICAgICAgeyAgXG4gICAgICAgICAgY2F0ZWdvcnk6J1JoeW1lIFRpbWUnLFxuICAgICAgICAgIG51bWJlcl9vZl93b3JkczogMSxcbiAgICAgICAgICB0b3RhbF9udW1iZXJfb2ZfbGV0dGVyczogNyxcbiAgICAgICAgICBmaXJzdF93b3JkOiA3LFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnUmh5bWluZyB3b3JkKHMpIG9yIHBocmFzZShzKS4nLFxuICAgICAgICAgIGNvcnJlY3RfYW5zd2VyOiAnSG90c2hvdCcsXG4gICAgICAgIH0sXG4gICAgICAgIHsgIFxuICAgICAgICAgIGNhdGVnb3J5OidSaHltZSBUaW1lJyxcbiAgICAgICAgICBudW1iZXJfb2Zfd29yZHM6IDEsXG4gICAgICAgICAgdG90YWxfbnVtYmVyX29mX2xldHRlcnM6IDEwLFxuICAgICAgICAgIGZpcnN0X3dvcmQ6IDEwLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnUmh5bWluZyB3b3JkKHMpIG9yIHBocmFzZShzKS4nLFxuICAgICAgICAgIGNvcnJlY3RfYW5zd2VyOiAnU3VwZXJkdXBlcicsXG4gICAgICAgIH0sXG4gICAgICAgIHsgIFxuICAgICAgICAgIGNhdGVnb3J5OidSaHltZSBUaW1lJyxcbiAgICAgICAgICBudW1iZXJfb2Zfd29yZHM6IDEsXG4gICAgICAgICAgdG90YWxfbnVtYmVyX29mX2xldHRlcnM6IDEwLFxuICAgICAgICAgIGZpcnN0X3dvcmQ6IDEwLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnUmh5bWluZyB3b3JkKHMpIG9yIHBocmFzZShzKS4nLFxuICAgICAgICAgIGNvcnJlY3RfYW5zd2VyOiAnV2lsbHktTmlsbHknLFxuICAgICAgICB9LHsgIFxuICAgICAgICAgIGNhdGVnb3J5OidSaHltZSBUaW1lJyxcbiAgICAgICAgICBudW1iZXJfb2Zfd29yZHM6IDEsXG4gICAgICAgICAgdG90YWxfbnVtYmVyX29mX2xldHRlcnM6IDYsXG4gICAgICAgICAgZmlyc3Rfd29yZDogNixcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ1JoeW1pbmcgd29yZChzKSBvciBwaHJhc2UocykuJyxcbiAgICAgICAgICBjb3JyZWN0X2Fuc3dlcjogJ0Jvdy13b3cnLFxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICB0d29fd29yZF9hbnN3ZXJzOiB7XG4gICAgICBkYXRlOiAnT2N0IDA3IDIwMTgnLFxuICAgICAgcHV6emxlX2Jhbms6IFtcbiAgICAgICAgeyAgXG4gICAgICAgICAgY2F0ZWdvcnk6ICdBcm91bmQgVGhlIEhvdXNlJyxcbiAgICAgICAgICBudW1iZXJfb2Zfd29yZHM6IDIsXG4gICAgICAgICAgdG90YWxfbnVtYmVyX29mX2xldHRlcnM6IDExLFxuICAgICAgICAgIGZpcnN0X3dvcmQ6IDcsIFxuICAgICAgICAgIGRlc2NyaXB0aW9uOidMb2NhdGlvbiBvciBvYmplY3QocykgZm91bmQgd2l0aGluIGEgdHlwaWNhbCBob3VzZS4nLFxuICAgICAgICAgIGNvcnJlY3RfYW5zd2VyOiAnQW11c2luZyBZYXJuJyxcbiAgICAgICAgfSxcbiAgICAgICAgeyAgXG4gICAgICAgICAgY2F0ZWdvcnk6ICdUaGUgOTBzJyxcbiAgICAgICAgICBudW1iZXJfb2Zfd29yZHM6IDIsXG4gICAgICAgICAgdG90YWxfbnVtYmVyX29mX2xldHRlcnM6IDExLFxuICAgICAgICAgIGZpcnN0X3dvcmQ6IDQsIFxuICAgICAgICAgIGRlc2NyaXB0aW9uOidQdXp6bGVzIHBlcnRhaW5pbmcgdG8gdGhlIGRlY2FkZSBpbiBxdWVzdGlvbi4nLFxuICAgICAgICAgIGNvcnJlY3RfYW5zd2VyOiAnQm93bCBIYWlyY3V0JyxcbiAgICAgICAgfSxcbiAgICAgICAgeyAgXG4gICAgICAgICAgY2F0ZWdvcnk6ICdUaGUgOTBzJyxcbiAgICAgICAgICBudW1iZXJfb2Zfd29yZHM6IDIsXG4gICAgICAgICAgdG90YWxfbnVtYmVyX29mX2xldHRlcnM6IDEzLFxuICAgICAgICAgIGZpcnN0X3dvcmQ6IDcsIFxuICAgICAgICAgIGRlc2NyaXB0aW9uOidQdXp6bGVzIHBlcnRhaW5pbmcgdG8gdGhlIGRlY2FkZSBpbiBxdWVzdGlvbi4nLFxuICAgICAgICAgIGNvcnJlY3RfYW5zd2VyOiAnQnJpdG5leSBTcGVhcnMnLFxuICAgICAgICB9LFxuICAgICAgICB7ICBcbiAgICAgICAgICBjYXRlZ29yeTogJ0Fyb3VuZCBUaGUgSG91c2UnLFxuICAgICAgICAgIG51bWJlcl9vZl93b3JkczogMSxcbiAgICAgICAgICB0b3RhbF9udW1iZXJfb2ZfbGV0dGVyczogMTIsXG4gICAgICAgICAgZmlyc3Rfd29yZDogNyxcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ0xvY2F0aW9uIG9yIG9iamVjdChzKSBmb3VuZCB3aXRoaW4gYSB0eXBpY2FsIGhvdXNlLicsXG4gICAgICAgICAgY29ycmVjdF9hbnN3ZXI6ICdCZWFuYmFnIENoYWlyJyxcbiAgICAgICAgfSxcbiAgICAgICAgeyAgXG4gICAgICAgICAgY2F0ZWdvcnk6ICdUaGUgOTBzJyxcbiAgICAgICAgICBudW1iZXJfb2Zfd29yZHM6IDIsXG4gICAgICAgICAgdG90YWxfbnVtYmVyX29mX2xldHRlcnM6IDksXG4gICAgICAgICAgZmlyc3Rfd29yZDogNCwgXG4gICAgICAgICAgZGVzY3JpcHRpb246J1B1enpsZXMgcGVydGFpbmluZyB0byB0aGUgZGVjYWRlIGluIHF1ZXN0aW9uLicsXG4gICAgICAgICAgY29ycmVjdF9hbnN3ZXI6ICdMaXRlIEJyaXRlJyxcbiAgICAgICAgfSxcbiAgICAgICAgeyAgXG4gICAgICAgICAgY2F0ZWdvcnk6ICdBcm91bmQgVGhlIEhvdXNlJyxcbiAgICAgICAgICBudW1iZXJfb2Zfd29yZHM6IDIsXG4gICAgICAgICAgdG90YWxfbnVtYmVyX29mX2xldHRlcnM6IDgsXG4gICAgICAgICAgZmlyc3Rfd29yZDogNSxcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ0xvY2F0aW9uIG9yIG9iamVjdChzKSBmb3VuZCB3aXRoaW4gYSB0eXBpY2FsIGhvdXNlLicsXG4gICAgICAgICAgY29ycmVjdF9hbnN3ZXI6ICdCcmFzcyBiZWQnLFxuICAgICAgICB9LFxuICAgICAgICB7ICBcbiAgICAgICAgICBjYXRlZ29yeTogJ1RoZSA5MHMnLFxuICAgICAgICAgIG51bWJlcl9vZl93b3JkczogMixcbiAgICAgICAgICB0b3RhbF9udW1iZXJfb2ZfbGV0dGVyczogOSxcbiAgICAgICAgICBmaXJzdF93b3JkOiA1LCBcbiAgICAgICAgICBkZXNjcmlwdGlvbjonUHV6emxlcyBwZXJ0YWluaW5nIHRvIHRoZSBkZWNhZGUgaW4gcXVlc3Rpb24uJyxcbiAgICAgICAgICBjb3JyZWN0X2Fuc3dlcjogJ1NvdXRoIFBhcmsnLFxuICAgICAgICB9LFxuICAgICAgICB7ICBcbiAgICAgICAgICBjYXRlZ29yeTogJ0Fyb3VuZCBUaGUgSG91c2UnLFxuICAgICAgICAgIG51bWJlcl9vZl93b3JkczogMixcbiAgICAgICAgICB0b3RhbF9udW1iZXJfb2ZfbGV0dGVyczogMTUsXG4gICAgICAgICAgZmlyc3Rfd29yZDogNCxcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ0xvY2F0aW9uIG9yIG9iamVjdChzKSBmb3VuZCB3aXRoaW4gYSB0eXBpY2FsIGhvdXNlLicsXG4gICAgICAgICAgY29ycmVjdF9hbnN3ZXI6ICdDaGljIEZ1cm5pc2hpbmdzJyxcbiAgICAgICAgfSxcbiAgICAgICAgeyAgXG4gICAgICAgICAgY2F0ZWdvcnk6ICdQaHJhc2UnLFxuICAgICAgICAgIG51bWJlcl9vZl93b3JkczogMixcbiAgICAgICAgICB0b3RhbF9udW1iZXJfb2ZfbGV0dGVyczogNixcbiAgICAgICAgICBmaXJzdF93b3JkOiA0LCBcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ2FueSB0d28gKG9yIG1vcmUpIHJlbGF0ZWQgcGhyYXNlcyBzZXBhcmF0ZWQgYnkgYSBjb21tYSBvciBvdGhlcndpc2UgdXNlZCBjb25zZWN1dGl2ZWx5JyxcbiAgICAgICAgICBjb3JyZWN0X2Fuc3dlcjogJ0Zlc3MgVXAnLFxuICAgICAgICB9LFxuICAgICAgICAgeyAgXG4gICAgICAgICAgY2F0ZWdvcnk6ICdUaGUgOTBzJyxcbiAgICAgICAgICBudW1iZXJfb2Zfd29yZHM6IDIsXG4gICAgICAgICAgdG90YWxfbnVtYmVyX29mX2xldHRlcnM6IDYsXG4gICAgICAgICAgZmlyc3Rfd29yZDogMywgXG4gICAgICAgICAgZGVzY3JpcHRpb246J1B1enpsZXMgcGVydGFpbmluZyB0byB0aGUgZGVjYWRlIGluIHF1ZXN0aW9uLicsXG4gICAgICAgICAgY29ycmVjdF9hbnN3ZXI6ICdGdW4gRGlwJyxcbiAgICAgICAgfSxcbiAgICAgICAgIHsgIFxuICAgICAgICAgIGNhdGVnb3J5OiAnVGhlIDkwcycsXG4gICAgICAgICAgbnVtYmVyX29mX3dvcmRzOiAyLFxuICAgICAgICAgIHRvdGFsX251bWJlcl9vZl9sZXR0ZXJzOiAxMCxcbiAgICAgICAgICBmaXJzdF93b3JkOiA2LCBcbiAgICAgICAgICBkZXNjcmlwdGlvbjonUHV6emxlcyBwZXJ0YWluaW5nIHRvIHRoZSBkZWNhZGUgaW4gcXVlc3Rpb24uJyxcbiAgICAgICAgICBjb3JyZWN0X2Fuc3dlcjogJ0NlbGluZSBEaW9uJyxcbiAgICAgICAgfSxcbiAgICAgICAgeyAgXG4gICAgICAgICAgY2F0ZWdvcnk6ICdQaHJhc2UnLFxuICAgICAgICAgIG51bWJlcl9vZl93b3JkczogMixcbiAgICAgICAgICB0b3RhbF9udW1iZXJfb2ZfbGV0dGVyczogNyxcbiAgICAgICAgICBmaXJzdF93b3JkOiAzLCBcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ0FueSB0d28gKG9yIG1vcmUpIHJlbGF0ZWQgcGhyYXNlcyBzZXBhcmF0ZWQgYnkgYSBjb21tYSBvciBvdGhlcndpc2UgdXNlZCBjb25zZWN1dGl2ZWx5JyxcbiAgICAgICAgICBjb3JyZWN0X2Fuc3dlcjogJ0dldCBMb3N0JyxcbiAgICAgICAgfSxcbiAgICAgICAgeyAgXG4gICAgICAgICAgY2F0ZWdvcnk6ICdQaHJhc2UnLFxuICAgICAgICAgIG51bWJlcl9vZl93b3JkczogMixcbiAgICAgICAgICB0b3RhbF9udW1iZXJfb2ZfbGV0dGVyczogOCxcbiAgICAgICAgICBmaXJzdF93b3JkOiA1LCBcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ0FueSB0d28gKG9yIG1vcmUpIHJlbGF0ZWQgcGhyYXNlcyBzZXBhcmF0ZWQgYnkgYSBjb21tYSBvciBvdGhlcndpc2UgdXNlZCBjb25zZWN1dGl2ZWx5JyxcbiAgICAgICAgICBjb3JyZWN0X2Fuc3dlcjogJ0FkbWl0IE9uZScsXG4gICAgICAgIH0sXG4gICAgICAgIHsgIFxuICAgICAgICAgIGNhdGVnb3J5OiAnUGhyYXNlJyxcbiAgICAgICAgICBudW1iZXJfb2Zfd29yZHM6IDIsXG4gICAgICAgICAgdG90YWxfbnVtYmVyX29mX2xldHRlcnM6IDksXG4gICAgICAgICAgZmlyc3Rfd29yZDogMywgXG4gICAgICAgICAgZGVzY3JpcHRpb246ICdBbnkgdHdvIChvciBtb3JlKSByZWxhdGVkIHBocmFzZXMgc2VwYXJhdGVkIGJ5IGEgY29tbWEgb3Igb3RoZXJ3aXNlIHVzZWQgY29uc2VjdXRpdmVseScsXG4gICAgICAgICAgY29ycmVjdF9hbnN3ZXI6ICdZb3UgQmV0Y2hhJyxcbiAgICAgICAgfSxcbiAgICAgICAgeyAgXG4gICAgICAgICAgY2F0ZWdvcnk6ICdQaHJhc2UnLFxuICAgICAgICAgIG51bWJlcl9vZl93b3JkczogMixcbiAgICAgICAgICB0b3RhbF9udW1iZXJfb2ZfbGV0dGVyczogMTAsXG4gICAgICAgICAgZmlyc3Rfd29yZDogNCwgXG4gICAgICAgICAgZGVzY3JpcHRpb246ICdBbnkgdHdvIChvciBtb3JlKSByZWxhdGVkIHBocmFzZXMgc2VwYXJhdGVkIGJ5IGEgY29tbWEgb3Igb3RoZXJ3aXNlIHVzZWQgY29uc2VjdXRpdmVseScsXG4gICAgICAgICAgY29ycmVjdF9hbnN3ZXI6ICdPcGVuIFNlc2FtZScsXG4gICAgICAgIH0sXG4gICAgICAgIHsgIFxuICAgICAgICAgIGNhdGVnb3J5OiAnUGhyYXNlJyxcbiAgICAgICAgICBudW1iZXJfb2Zfd29yZHM6IDIsXG4gICAgICAgICAgdG90YWxfbnVtYmVyX29mX2xldHRlcnM6IDExLFxuICAgICAgICAgIGZpcnN0X3dvcmQ6IDQsXG4gICAgICAgICAgZGVzY3JpcHRpb246ICdBbnkgdHdvIChvciBtb3JlKSByZWxhdGVkIHBocmFzZXMgc2VwYXJhdGVkIGJ5IGEgY29tbWEgb3Igb3RoZXJ3aXNlIHVzZWQgY29uc2VjdXRpdmVseScsXG4gICAgICAgICAgY29ycmVjdF9hbnN3ZXI6ICdHb29kIE1vcm5pbmcnLFxuICAgICAgICB9LHsgIFxuICAgICAgICAgIGNhdGVnb3J5OiAnQXJvdW5kIFRoZSBIb3VzZScsXG4gICAgICAgICAgbnVtYmVyX29mX3dvcmRzOiAyLFxuICAgICAgICAgIHRvdGFsX251bWJlcl9vZl9sZXR0ZXJzOiAxMSxcbiAgICAgICAgICBmaXJzdF93b3JkOiAxMSxcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ0xvY2F0aW9uIG9yIG9iamVjdChzKSBmb3VuZCB3aXRoaW4gYSB0eXBpY2FsIGhvdXNlLicsXG4gICAgICAgICAgY29ycmVjdF9hbnN3ZXI6ICdXaW5kb3dwYW5lcycsXG4gICAgICAgIH0seyAgXG4gICAgICAgICAgY2F0ZWdvcnk6J1JoeW1lIFRpbWUnLFxuICAgICAgICAgIG51bWJlcl9vZl93b3JkczogMixcbiAgICAgICAgICB0b3RhbF9udW1iZXJfb2ZfbGV0dGVyczogOCxcbiAgICAgICAgICBmaXJzdF93b3JkOiA0LFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnUmh5bWluZyB3b3JkKHMpIG9yIHBocmFzZShzKS4nLFxuICAgICAgICAgIGNvcnJlY3RfYW5zd2VyOiAnV2luZSAmIERpbmUnLFxuICAgICAgICB9LHsgIFxuICAgICAgICAgIGNhdGVnb3J5OidSaHltZSBUaW1lJyxcbiAgICAgICAgICBudW1iZXJfb2Zfd29yZHM6IDIsXG4gICAgICAgICAgdG90YWxfbnVtYmVyX29mX2xldHRlcnM6IDEwLFxuICAgICAgICAgIGZpcnN0X3dvcmQ6IDUsXG4gICAgICAgICAgZGVzY3JpcHRpb246ICdSaHltaW5nIHdvcmQocykgb3IgcGhyYXNlKHMpLicsXG4gICAgICAgICAgY29ycmVjdF9hbnN3ZXI6ICdGaWdodCBOaWdodCcsXG4gICAgICAgIH0sXG4gICAgICAgIHsgIFxuICAgICAgICAgIGNhdGVnb3J5OidBcm91bmQgVGhlIEhvdXNlJyxcbiAgICAgICAgICBudW1iZXJfb2Zfd29yZHM6IDIsXG4gICAgICAgICAgdG90YWxfbnVtYmVyX29mX2xldHRlcnM6IDksXG4gICAgICAgICAgZmlyc3Rfd29yZDogNCxcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ0xvY2F0aW9uIG9yIG9iamVjdChzKSBmb3VuZCB3aXRoaW4gYSB0eXBpY2FsIGhvdXNlLicsXG4gICAgICAgICAgY29ycmVjdF9hbnN3ZXI6ICdDb3JuIFN5cnVwJyxcbiAgICAgICAgfSxcbiAgICAgICAgeyAgXG4gICAgICAgICAgY2F0ZWdvcnk6J1JoeW1lIFRpbWUnLFxuICAgICAgICAgIG51bWJlcl9vZl93b3JkczogMixcbiAgICAgICAgICB0b3RhbF9udW1iZXJfb2ZfbGV0dGVyczogMTEsXG4gICAgICAgICAgZmlyc3Rfd29yZDogNixcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ1JoeW1pbmcgd29yZChzKSBvciBwaHJhc2UocykuJyxcbiAgICAgICAgICBjb3JyZWN0X2Fuc3dlcjogJ0Zsb3dlciBQb3dlcicsXG4gICAgICAgIH0sXG4gICAgICAgIHsgIFxuICAgICAgICAgIGNhdGVnb3J5OidSaHltZSBUaW1lJyxcbiAgICAgICAgICBudW1iZXJfb2Zfd29yZHM6IDIsXG4gICAgICAgICAgdG90YWxfbnVtYmVyX29mX2xldHRlcnM6IDE1LFxuICAgICAgICAgIGZpcnN0X3dvcmQ6IDcsXG4gICAgICAgICAgZGVzY3JpcHRpb246ICdSaHltaW5nIHdvcmQocykgb3IgcGhyYXNlKHMpLicsXG4gICAgICAgICAgY29ycmVjdF9hbnN3ZXI6ICdKZWVwZXJzIENyZWVwZXJzJyxcbiAgICAgICAgfSxcbiAgICAgICAgeyAgXG4gICAgICAgICAgY2F0ZWdvcnk6J1JoeW1lIFRpbWUnLFxuICAgICAgICAgIG51bWJlcl9vZl93b3JkczogMixcbiAgICAgICAgICB0b3RhbF9udW1iZXJfb2ZfbGV0dGVyczogMTAsXG4gICAgICAgICAgZmlyc3Rfd29yZDogNCxcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ1JoeW1pbmcgd29yZChzKSBvciBwaHJhc2UocykuJyxcbiAgICAgICAgICBjb3JyZWN0X2Fuc3dlcjogJ0V2ZW4gU3RldmVuJyxcbiAgICAgICAgfSx7ICBcbiAgICAgICAgICBjYXRlZ29yeTonUmh5bWUgVGltZScsXG4gICAgICAgICAgbnVtYmVyX29mX3dvcmRzOiAyLFxuICAgICAgICAgIHRvdGFsX251bWJlcl9vZl9sZXR0ZXJzOiA2LFxuICAgICAgICAgIGZpcnN0X3dvcmQ6IDMsXG4gICAgICAgICAgZGVzY3JpcHRpb246ICdSaHltaW5nIHdvcmQocykgb3IgcGhyYXNlKHMpLicsXG4gICAgICAgICAgY29ycmVjdF9hbnN3ZXI6ICdGYXQgQ2F0JyxcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAgdGhyZWVfd29yZF9hbnN3ZXJzOiB7XG4gICAgICBkYXRlOiAnT2N0IDA3IDIwMTgnLFxuICAgICAgcHV6emxlX2Jhbms6IFtcbiAgICAgICAgeyAgXG4gICAgICAgICAgY2F0ZWdvcnk6ICdBcm91bmQgVGhlIEhvdXNlJyxcbiAgICAgICAgICBudW1iZXJfb2Zfd29yZHM6IDMsXG4gICAgICAgICAgdG90YWxfbnVtYmVyX29mX2xldHRlcnM6IDEwLFxuICAgICAgICAgIGZpcnN0X3dvcmQ6IDMsIFxuICAgICAgICAgIGRlc2NyaXB0aW9uOidMb2NhdGlvbiBvciBvYmplY3QocykgZm91bmQgd2l0aGluIGEgdHlwaWNhbCBob3VzZS4nLFxuICAgICAgICAgIGNvcnJlY3RfYW5zd2VyOiAnSG90IEdsdWUgR3VuJyxcbiAgICAgICAgfSxcbiAgICAgICAgeyAgXG4gICAgICAgICAgY2F0ZWdvcnk6ICdUaGUgOTBzJyxcbiAgICAgICAgICBudW1iZXJfb2Zfd29yZHM6IDMsXG4gICAgICAgICAgdG90YWxfbnVtYmVyX29mX2xldHRlcnM6IDEyLFxuICAgICAgICAgIGZpcnN0X3dvcmQ6IDYsIFxuICAgICAgICAgIGRlc2NyaXB0aW9uOidQdXp6bGVzIHBlcnRhaW5pbmcgdG8gdGhlIGRlY2FkZSBpbiBxdWVzdGlvbi4nLFxuICAgICAgICAgIGNvcnJlY3RfYW5zd2VyOiAnVGlja2xlIE1lIEVsbW8nLFxuICAgICAgICB9LFxuICAgICAgICB7ICBcbiAgICAgICAgICBjYXRlZ29yeTogJ1RoZSA5MHMnLFxuICAgICAgICAgIG51bWJlcl9vZl93b3JkczogMyxcbiAgICAgICAgICB0b3RhbF9udW1iZXJfb2ZfbGV0dGVyczogMTMsXG4gICAgICAgICAgZmlyc3Rfd29yZDogMiwgXG4gICAgICAgICAgZGVzY3JpcHRpb246J1B1enpsZXMgcGVydGFpbmluZyB0byB0aGUgZGVjYWRlIGluIHF1ZXN0aW9uLicsXG4gICAgICAgICAgY29ycmVjdF9hbnN3ZXI6ICdJbiBMaXZpbmcgQ29sb3InLFxuICAgICAgICB9LFxuICAgICAgICB7ICBcbiAgICAgICAgICBjYXRlZ29yeTogJ0Fyb3VuZCBUaGUgSG91c2UnLFxuICAgICAgICAgIG51bWJlcl9vZl93b3JkczogMSxcbiAgICAgICAgICB0b3RhbF9udW1iZXJfb2ZfbGV0dGVyczogMTMsXG4gICAgICAgICAgZmlyc3Rfd29yZDogNSxcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ0xvY2F0aW9uIG9yIG9iamVjdChzKSBmb3VuZCB3aXRoaW4gYSB0eXBpY2FsIGhvdXNlLicsXG4gICAgICAgICAgY29ycmVjdF9hbnN3ZXI6ICdEZXRveCBGb290IFBhZHMnLFxuICAgICAgICB9LFxuICAgICAgICB7ICBcbiAgICAgICAgICBjYXRlZ29yeTogJ1RoZSA5MHMnLFxuICAgICAgICAgIG51bWJlcl9vZl93b3JkczogMyxcbiAgICAgICAgICB0b3RhbF9udW1iZXJfb2ZfbGV0dGVyczogMTksXG4gICAgICAgICAgZmlyc3Rfd29yZDogMywgXG4gICAgICAgICAgZGVzY3JpcHRpb246J1B1enpsZXMgcGVydGFpbmluZyB0byB0aGUgZGVjYWRlIGluIHF1ZXN0aW9uLicsXG4gICAgICAgICAgY29ycmVjdF9hbnN3ZXI6ICdUaGUgU21hc2hpbmcgUHVtcGtpbnMnLFxuICAgICAgICB9LFxuICAgICAgICB7ICBcbiAgICAgICAgICBjYXRlZ29yeTogJ0Fyb3VuZCBUaGUgSG91c2UnLFxuICAgICAgICAgIG51bWJlcl9vZl93b3JkczogMyxcbiAgICAgICAgICB0b3RhbF9udW1iZXJfb2ZfbGV0dGVyczogMTQsXG4gICAgICAgICAgZmlyc3Rfd29yZDogNixcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ0xvY2F0aW9uIG9yIG9iamVjdChzKSBmb3VuZCB3aXRoaW4gYSB0eXBpY2FsIGhvdXNlLicsXG4gICAgICAgICAgY29ycmVjdF9hbnN3ZXI6ICdXb29kZW4gRW5kIFRhYmxlJyxcbiAgICAgICAgfSxcbiAgICAgICAgeyAgXG4gICAgICAgICAgY2F0ZWdvcnk6ICdUaGUgOTBzJyxcbiAgICAgICAgICBudW1iZXJfb2Zfd29yZHM6IDMsXG4gICAgICAgICAgdG90YWxfbnVtYmVyX29mX2xldHRlcnM6IDE0LFxuICAgICAgICAgIGZpcnN0X3dvcmQ6IDUsIFxuICAgICAgICAgIGRlc2NyaXB0aW9uOidQdXp6bGVzIHBlcnRhaW5pbmcgdG8gdGhlIGRlY2FkZSBpbiBxdWVzdGlvbi4nLFxuICAgICAgICAgIGNvcnJlY3RfYW5zd2VyOiAnTWFnaWMgU2Nob29sIEJ1cycsXG4gICAgICAgIH0sXG4gICAgICAgIHsgIFxuICAgICAgICAgIGNhdGVnb3J5OiAnQXJvdW5kIFRoZSBIb3VzZScsXG4gICAgICAgICAgbnVtYmVyX29mX3dvcmRzOiAzLFxuICAgICAgICAgIHRvdGFsX251bWJlcl9vZl9sZXR0ZXJzOiAxNSxcbiAgICAgICAgICBmaXJzdF93b3JkOiAzLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnTG9jYXRpb24gb3Igb2JqZWN0KHMpIGZvdW5kIHdpdGhpbiBhIHR5cGljYWwgaG91c2UuJyxcbiAgICAgICAgICBjb3JyZWN0X2Fuc3dlcjogJ1VTQiBQb3dlciBBZGFwdGVyJyxcbiAgICAgICAgfSxcbiAgICAgICAgeyAgXG4gICAgICAgICAgY2F0ZWdvcnk6ICdQaHJhc2UnLFxuICAgICAgICAgIG51bWJlcl9vZl93b3JkczogMyxcbiAgICAgICAgICB0b3RhbF9udW1iZXJfb2ZfbGV0dGVyczogNixcbiAgICAgICAgICBmaXJzdF93b3JkOiAxLCBcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ2FueSB0d28gKG9yIG1vcmUpIHJlbGF0ZWQgcGhyYXNlcyBzZXBhcmF0ZWQgYnkgYSBjb21tYSBvciBvdGhlcndpc2UgdXNlZCBjb25zZWN1dGl2ZWx5JyxcbiAgICAgICAgICBjb3JyZWN0X2Fuc3dlcjogJ0kgRGlnIEl0JyxcbiAgICAgICAgfSxcbiAgICAgICAgICB7ICBcbiAgICAgICAgICBjYXRlZ29yeTogJ1RoZSA5MHMnLFxuICAgICAgICAgIG51bWJlcl9vZl93b3JkczogMyxcbiAgICAgICAgICB0b3RhbF9udW1iZXJfb2ZfbGV0dGVyczogMTksXG4gICAgICAgICAgZmlyc3Rfd29yZDogNCwgXG4gICAgICAgICAgZGVzY3JpcHRpb246J1B1enpsZXMgcGVydGFpbmluZyB0byB0aGUgZGVjYWRlIGluIHF1ZXN0aW9uLicsXG4gICAgICAgICAgY29ycmVjdF9hbnN3ZXI6ICdCZXN0IEZyaWVuZCBOZWNrbGFjZXMnLFxuICAgICAgICB9LFxuICAgICAgICAgIHsgIFxuICAgICAgICAgIGNhdGVnb3J5OiAnVGhlIDkwcycsXG4gICAgICAgICAgbnVtYmVyX29mX3dvcmRzOiAzLFxuICAgICAgICAgIHRvdGFsX251bWJlcl9vZl9sZXR0ZXJzOiAxMyxcbiAgICAgICAgICBmaXJzdF93b3JkOiAzLCBcbiAgICAgICAgICBkZXNjcmlwdGlvbjonUHV6emxlcyBwZXJ0YWluaW5nIHRvIHRoZSBkZWNhZGUgaW4gcXVlc3Rpb24uJyxcbiAgICAgICAgICBjb3JyZWN0X2Fuc3dlcjogJ0FpciBKb3JkYW4gU25lYWtlcnMnLFxuICAgICAgICB9LFxuICAgICAgICB7ICBcbiAgICAgICAgICBjYXRlZ29yeTogJ1BocmFzZScsXG4gICAgICAgICAgbnVtYmVyX29mX3dvcmRzOiAzLFxuICAgICAgICAgIHRvdGFsX251bWJlcl9vZl9sZXR0ZXJzOiA4LFxuICAgICAgICAgIGZpcnN0X3dvcmQ6IDIsIFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnQW55IHR3byAob3IgbW9yZSkgcmVsYXRlZCBwaHJhc2VzIHNlcGFyYXRlZCBieSBhIGNvbW1hIG9yIG90aGVyd2lzZSB1c2VkIGNvbnNlY3V0aXZlbHknLFxuICAgICAgICAgIGNvcnJlY3RfYW5zd2VyOiAnQnkgVGhlIFdheScsXG4gICAgICAgIH0sXG4gICAgICAgIHsgIFxuICAgICAgICAgIGNhdGVnb3J5OiAnUGhyYXNlJyxcbiAgICAgICAgICBudW1iZXJfb2Zfd29yZHM6IDMsXG4gICAgICAgICAgdG90YWxfbnVtYmVyX29mX2xldHRlcnM6IDgsXG4gICAgICAgICAgZmlyc3Rfd29yZDogNSwgXG4gICAgICAgICAgZGVzY3JpcHRpb246ICdBbnkgdHdvIChvciBtb3JlKSByZWxhdGVkIHBocmFzZXMgc2VwYXJhdGVkIGJ5IGEgY29tbWEgb3Igb3RoZXJ3aXNlIHVzZWQgY29uc2VjdXRpdmVseScsXG4gICAgICAgICAgY29ycmVjdF9hbnN3ZXI6ICdBZG1pdCBPbmUnLFxuICAgICAgICB9LFxuICAgICAgICB7ICBcbiAgICAgICAgICBjYXRlZ29yeTogJ1BocmFzZScsXG4gICAgICAgICAgbnVtYmVyX29mX3dvcmRzOiAzLFxuICAgICAgICAgIHRvdGFsX251bWJlcl9vZl9sZXR0ZXJzOiA4LFxuICAgICAgICAgIGZpcnN0X3dvcmQ6IDMsIFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnQW55IHR3byAob3IgbW9yZSkgcmVsYXRlZCBwaHJhc2VzIHNlcGFyYXRlZCBieSBhIGNvbW1hIG9yIG90aGVyd2lzZSB1c2VkIGNvbnNlY3V0aXZlbHknLFxuICAgICAgICAgIGNvcnJlY3RfYW5zd2VyOiAnR2V0IEEgR3JpcCcsXG4gICAgICAgIH0sXG4gICAgICAgIHsgIFxuICAgICAgICAgIGNhdGVnb3J5OiAnUGhyYXNlJyxcbiAgICAgICAgICBudW1iZXJfb2Zfd29yZHM6IDMsXG4gICAgICAgICAgdG90YWxfbnVtYmVyX29mX2xldHRlcnM6IDksXG4gICAgICAgICAgZmlyc3Rfd29yZDogNCwgXG4gICAgICAgICAgZGVzY3JpcHRpb246ICdBbnkgdHdvIChvciBtb3JlKSByZWxhdGVkIHBocmFzZXMgc2VwYXJhdGVkIGJ5IGEgY29tbWEgb3Igb3RoZXJ3aXNlIHVzZWQgY29uc2VjdXRpdmVseScsXG4gICAgICAgICAgY29ycmVjdF9hbnN3ZXI6ICdDb29sIEFzIEljZScsXG4gICAgICAgIH0sXG4gICAgICAgIHsgIFxuICAgICAgICAgIGNhdGVnb3J5OiAnUGhyYXNlJyxcbiAgICAgICAgICBudW1iZXJfb2Zfd29yZHM6IDMsXG4gICAgICAgICAgdG90YWxfbnVtYmVyX29mX2xldHRlcnM6IDEwLFxuICAgICAgICAgIGZpcnN0X3dvcmQ6IDIsXG4gICAgICAgICAgZGVzY3JpcHRpb246ICdBbnkgdHdvIChvciBtb3JlKSByZWxhdGVkIHBocmFzZXMgc2VwYXJhdGVkIGJ5IGEgY29tbWEgb3Igb3RoZXJ3aXNlIHVzZWQgY29uc2VjdXRpdmVseScsXG4gICAgICAgICAgY29ycmVjdF9hbnN3ZXI6ICdObyBTdWNoIEx1Y2snLFxuICAgICAgICB9LHsgIFxuICAgICAgICAgIGNhdGVnb3J5OiAnQXJvdW5kIFRoZSBIb3VzZScsXG4gICAgICAgICAgbnVtYmVyX29mX3dvcmRzOiAzLFxuICAgICAgICAgIHRvdGFsX251bWJlcl9vZl9sZXR0ZXJzOiAxNixcbiAgICAgICAgICBmaXJzdF93b3JkOiA2LFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnTG9jYXRpb24gb3Igb2JqZWN0KHMpIGZvdW5kIHdpdGhpbiBhIHR5cGljYWwgaG91c2UuJyxcbiAgICAgICAgICBjb3JyZWN0X2Fuc3dlcjogJ0ZyZW5jaCBSb2xsaW5nIFBpbicsXG4gICAgICAgIH0seyAgXG4gICAgICAgICAgY2F0ZWdvcnk6J1JoeW1lIFRpbWUnLFxuICAgICAgICAgIG51bWJlcl9vZl93b3JkczogMyxcbiAgICAgICAgICB0b3RhbF9udW1iZXJfb2ZfbGV0dGVyczogOCxcbiAgICAgICAgICBmaXJzdF93b3JkOiA0LFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnUmh5bWluZyB3b3JkKHMpIG9yIHBocmFzZShzKS4nLFxuICAgICAgICAgIGNvcnJlY3RfYW5zd2VyOiAnSG9wIE9uIFBvcCcsXG4gICAgICAgIH0seyAgXG4gICAgICAgICAgY2F0ZWdvcnk6J1JoeW1lIFRpbWUnLFxuICAgICAgICAgIG51bWJlcl9vZl93b3JkczogMyxcbiAgICAgICAgICB0b3RhbF9udW1iZXJfb2ZfbGV0dGVyczogMTEsXG4gICAgICAgICAgZmlyc3Rfd29yZDogNSxcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ1JoeW1pbmcgd29yZChzKSBvciBwaHJhc2UocykuJyxcbiAgICAgICAgICBjb3JyZWN0X2Fuc3dlcjogJ1R3aWNlIEFzIE5pY2UnLFxuICAgICAgICB9LFxuICAgICAgICB7ICBcbiAgICAgICAgICBjYXRlZ29yeTonQXJvdW5kIFRoZSBIb3VzZScsXG4gICAgICAgICAgbnVtYmVyX29mX3dvcmRzOiAzLFxuICAgICAgICAgIHRvdGFsX251bWJlcl9vZl9sZXR0ZXJzOiAxNyxcbiAgICAgICAgICBmaXJzdF93b3JkOiA1LFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnTG9jYXRpb24gb3Igb2JqZWN0KHMpIGZvdW5kIHdpdGhpbiBhIHR5cGljYWwgaG91c2UuJyxcbiAgICAgICAgICBjb3JyZWN0X2Fuc3dlcjogJ1BsYWlkIEZsYW5uZWwgU2hpcnQnLFxuICAgICAgICB9LFxuICAgICAgICB7ICBcbiAgICAgICAgICBjYXRlZ29yeTonUmh5bWUgVGltZScsXG4gICAgICAgICAgbnVtYmVyX29mX3dvcmRzOiAzLFxuICAgICAgICAgIHRvdGFsX251bWJlcl9vZl9sZXR0ZXJzOiAyMSxcbiAgICAgICAgICBmaXJzdF93b3JkOiA4LFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnUmh5bWluZyB3b3JkKHMpIG9yIHBocmFzZShzKS4nLFxuICAgICAgICAgIGNvcnJlY3RfYW5zd2VyOiAnU2FyZGluZXMgQW5kIFRhbmdlcmluZXMnLFxuICAgICAgICB9LFxuICAgICAgICB7ICBcbiAgICAgICAgICBjYXRlZ29yeTonUmh5bWUgVGltZScsXG4gICAgICAgICAgbnVtYmVyX29mX3dvcmRzOiAzLFxuICAgICAgICAgIHRvdGFsX251bWJlcl9vZl9sZXR0ZXJzOiAxMixcbiAgICAgICAgICBmaXJzdF93b3JkOiA0LFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnUmh5bWluZyB3b3JkKHMpIG9yIHBocmFzZShzKS4nLFxuICAgICAgICAgIGNvcnJlY3RfYW5zd2VyOiAnTWVldCBBbmQgR3JlZXQnLFxuICAgICAgICB9LFxuICAgICAgICB7ICBcbiAgICAgICAgICBjYXRlZ29yeTonUmh5bWUgVGltZScsXG4gICAgICAgICAgbnVtYmVyX29mX3dvcmRzOiAzLFxuICAgICAgICAgIHRvdGFsX251bWJlcl9vZl9sZXR0ZXJzOiAxMSxcbiAgICAgICAgICBmaXJzdF93b3JkOiAyLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnUmh5bWluZyB3b3JkKHMpIG9yIHBocmFzZShzKS4nLFxuICAgICAgICAgIGNvcnJlY3RfYW5zd2VyOiAnSW4gTGlrZSBGbHlubicsXG4gICAgICAgIH0seyAgXG4gICAgICAgICAgY2F0ZWdvcnk6J1JoeW1lIFRpbWUnLFxuICAgICAgICAgIG51bWJlcl9vZl93b3JkczogMyxcbiAgICAgICAgICB0b3RhbF9udW1iZXJfb2ZfbGV0dGVyczogMTEsXG4gICAgICAgICAgZmlyc3Rfd29yZDogNSxcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ1JoeW1pbmcgd29yZChzKSBvciBwaHJhc2UocykuJyxcbiAgICAgICAgICBjb3JyZWN0X2Fuc3dlcjogJ0NsYWltIFRvIEZhbWUnLFxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICBmb3VyX3dvcmRfYW5zd2Vyczoge1xuICAgICAgZGF0ZTogJ09jdCAwNyAyMDE4JyxcbiAgICAgIHB1enpsZV9iYW5rOiBbXG4gICAgICAgIHsgIFxuICAgICAgICAgIGNhdGVnb3J5OiAnQXJvdW5kIFRoZSBIb3VzZScsXG4gICAgICAgICAgbnVtYmVyX29mX3dvcmRzOiA0LFxuICAgICAgICAgIHRvdGFsX251bWJlcl9vZl9sZXR0ZXJzOiAxNyxcbiAgICAgICAgICBmaXJzdF93b3JkOiA0LCBcbiAgICAgICAgICBkZXNjcmlwdGlvbjonTG9jYXRpb24gb3Igb2JqZWN0KHMpIGZvdW5kIHdpdGhpbiBhIHR5cGljYWwgaG91c2UuJyxcbiAgICAgICAgICBjb3JyZWN0X2Fuc3dlcjogJ1JvbGwgT2YgVG9pbGV0IFBhcGVyJyxcbiAgICAgICAgfSxcbiAgICAgICAgeyAgXG4gICAgICAgICAgY2F0ZWdvcnk6ICdUaGUgOTBzJyxcbiAgICAgICAgICBudW1iZXJfb2Zfd29yZHM6IDQsXG4gICAgICAgICAgdG90YWxfbnVtYmVyX29mX2xldHRlcnM6IDE0LFxuICAgICAgICAgIGZpcnN0X3dvcmQ6IDUsIFxuICAgICAgICAgIGRlc2NyaXB0aW9uOidQdXp6bGVzIHBlcnRhaW5pbmcgdG8gdGhlIGRlY2FkZSBpbiBxdWVzdGlvbi4nLFxuICAgICAgICAgIGNvcnJlY3RfYW5zd2VyOiAnU2F2ZWQgQnkgVGhlIEJlbGwnLFxuICAgICAgICB9LFxuICAgICAgICB7ICBcbiAgICAgICAgICBjYXRlZ29yeTogJ1RoZSA5MHMnLFxuICAgICAgICAgIG51bWJlcl9vZl93b3JkczogNCxcbiAgICAgICAgICB0b3RhbF9udW1iZXJfb2ZfbGV0dGVyczogMTgsXG4gICAgICAgICAgZmlyc3Rfd29yZDogMywgXG4gICAgICAgICAgZGVzY3JpcHRpb246J1B1enpsZXMgcGVydGFpbmluZyB0byB0aGUgZGVjYWRlIGluIHF1ZXN0aW9uLicsXG4gICAgICAgICAgY29ycmVjdF9hbnN3ZXI6ICdUaGUgTWlja2V5IE1vdXNlIENsdWInLFxuICAgICAgICB9LFxuICAgICAgICB7ICBcbiAgICAgICAgICBjYXRlZ29yeTogJ0Fyb3VuZCBUaGUgSG91c2UnLFxuICAgICAgICAgIG51bWJlcl9vZl93b3JkczogMSxcbiAgICAgICAgICB0b3RhbF9udW1iZXJfb2ZfbGV0dGVyczogMTcsXG4gICAgICAgICAgZmlyc3Rfd29yZDogNCxcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ0xvY2F0aW9uIG9yIG9iamVjdChzKSBmb3VuZCB3aXRoaW4gYSB0eXBpY2FsIGhvdXNlLicsXG4gICAgICAgICAgY29ycmVjdF9hbnN3ZXI6ICdWYXNlIEZ1bGwgT2YgRmxvd2VycycsXG4gICAgICAgIH0sXG4gICAgICAgIHsgIFxuICAgICAgICAgIGNhdGVnb3J5OiAnVGhlIDkwcycsXG4gICAgICAgICAgbnVtYmVyX29mX3dvcmRzOiA0LFxuICAgICAgICAgIHRvdGFsX251bWJlcl9vZl9sZXR0ZXJzOiAyNCxcbiAgICAgICAgICBmaXJzdF93b3JkOiA2LCBcbiAgICAgICAgICBkZXNjcmlwdGlvbjonUHV6emxlcyBwZXJ0YWluaW5nIHRvIHRoZSBkZWNhZGUgaW4gcXVlc3Rpb24uJyxcbiAgICAgICAgICBjb3JyZWN0X2Fuc3dlcjogJ1RoZXJlXFwncyBTb21ldGhpbmcgQWJvdXQgTWFyeScsXG4gICAgICAgIH0sXG4gICAgICAgIHsgIFxuICAgICAgICAgIGNhdGVnb3J5OiAnQXJvdW5kIFRoZSBIb3VzZScsXG4gICAgICAgICAgbnVtYmVyX29mX3dvcmRzOiA0LFxuICAgICAgICAgIHRvdGFsX251bWJlcl9vZl9sZXR0ZXJzOiAyMSxcbiAgICAgICAgICBmaXJzdF93b3JkOiA0LFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnTG9jYXRpb24gb3Igb2JqZWN0KHMpIGZvdW5kIHdpdGhpbiBhIHR5cGljYWwgaG91c2UuJyxcbiAgICAgICAgICBjb3JyZWN0X2Fuc3dlcjogJ0hpZ2ggVGhyZWFkIENvdW50IFNoZWV0cycsXG4gICAgICAgIH0sXG4gICAgICAgIHsgIFxuICAgICAgICAgIGNhdGVnb3J5OiAnVGhlIDkwcycsXG4gICAgICAgICAgbnVtYmVyX29mX3dvcmRzOiA0LFxuICAgICAgICAgIHRvdGFsX251bWJlcl9vZl9sZXR0ZXJzOiAxOCxcbiAgICAgICAgICBmaXJzdF93b3JkOiAzLCBcbiAgICAgICAgICBkZXNjcmlwdGlvbjonUHV6emxlcyBwZXJ0YWluaW5nIHRvIHRoZSBkZWNhZGUgaW4gcXVlc3Rpb24uJyxcbiAgICAgICAgICBjb3JyZWN0X2Fuc3dlcjogJ1JlZCBIb3QgQ2hpbGkgUGVwcGVycycsXG4gICAgICAgIH0sXG4gICAgICAgIHsgIFxuICAgICAgICAgIGNhdGVnb3J5OiAnQXJvdW5kIFRoZSBIb3VzZScsXG4gICAgICAgICAgbnVtYmVyX29mX3dvcmRzOiA0LFxuICAgICAgICAgIHRvdGFsX251bWJlcl9vZl9sZXR0ZXJzOiAyMixcbiAgICAgICAgICBmaXJzdF93b3JkOiA1LFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnTG9jYXRpb24gb3Igb2JqZWN0KHMpIGZvdW5kIHdpdGhpbiBhIHR5cGljYWwgaG91c2UuJyxcbiAgICAgICAgICBjb3JyZWN0X2Fuc3dlcjogJ0ZhbmN5IFdoaXRlIENsb3RoIE5hcGtpbnMnLFxuICAgICAgICB9LFxuICAgICAgICB7ICBcbiAgICAgICAgICBjYXRlZ29yeTogJ1BocmFzZScsXG4gICAgICAgICAgbnVtYmVyX29mX3dvcmRzOiA0LFxuICAgICAgICAgIHRvdGFsX251bWJlcl9vZl9sZXR0ZXJzOiA4LFxuICAgICAgICAgIGZpcnN0X3dvcmQ6IDQsIFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnYW55IHR3byAob3IgbW9yZSkgcmVsYXRlZCBwaHJhc2VzIHNlcGFyYXRlZCBieSBhIGNvbW1hIG9yIG90aGVyd2lzZSB1c2VkIGNvbnNlY3V0aXZlbHknLFxuICAgICAgICAgIGNvcnJlY3RfYW5zd2VyOiAnRnJvbSBBIFRvIFonLFxuICAgICAgICB9LFxuICAgICAgICAgIHsgIFxuICAgICAgICAgIGNhdGVnb3J5OiAnVGhlIDkwcycsXG4gICAgICAgICAgbnVtYmVyX29mX3dvcmRzOiA0LFxuICAgICAgICAgIHRvdGFsX251bWJlcl9vZl9sZXR0ZXJzOiAyMixcbiAgICAgICAgICBmaXJzdF93b3JkOiAzLCBcbiAgICAgICAgICBkZXNjcmlwdGlvbjonUHV6emxlcyBwZXJ0YWluaW5nIHRvIHRoZSBkZWNhZGUgaW4gcXVlc3Rpb24uJyxcbiAgICAgICAgICBjb3JyZWN0X2Fuc3dlcjogJ1NpeCBEZWdyZWVzIG9mIFNlcGFyYXRpb24nLFxuICAgICAgICB9LFxuICAgICAgICAgIHsgIFxuICAgICAgICAgIGNhdGVnb3J5OiAnVGhlIDkwcycsXG4gICAgICAgICAgbnVtYmVyX29mX3dvcmRzOiA0LFxuICAgICAgICAgIHRvdGFsX251bWJlcl9vZl9sZXR0ZXJzOiAxOSxcbiAgICAgICAgICBmaXJzdF93b3JkOiA0LCBcbiAgICAgICAgICBkZXNjcmlwdGlvbjonUHV6emxlcyBwZXJ0YWluaW5nIHRvIHRoZSBkZWNhZGUgaW4gcXVlc3Rpb24uJyxcbiAgICAgICAgICBjb3JyZWN0X2Fuc3dlcjogJ01hcnkgS2F0ZSAmIEFzaGxleSBPbHNlbicsXG4gICAgICAgIH0sXG4gICAgICAgIHsgIFxuICAgICAgICAgIGNhdGVnb3J5OiAnUGhyYXNlJyxcbiAgICAgICAgICBudW1iZXJfb2Zfd29yZHM6IDQsXG4gICAgICAgICAgdG90YWxfbnVtYmVyX29mX2xldHRlcnM6IDksXG4gICAgICAgICAgZmlyc3Rfd29yZDogMywgXG4gICAgICAgICAgZGVzY3JpcHRpb246ICdBbnkgdHdvIChvciBtb3JlKSByZWxhdGVkIHBocmFzZXMgc2VwYXJhdGVkIGJ5IGEgY29tbWEgb3Igb3RoZXJ3aXNlIHVzZWQgY29uc2VjdXRpdmVseScsXG4gICAgICAgICAgY29ycmVjdF9hbnN3ZXI6ICdTbHkgQXMgQSBGb3gnLFxuICAgICAgICB9LFxuICAgICAgICB7ICBcbiAgICAgICAgICBjYXRlZ29yeTogJ1BocmFzZScsXG4gICAgICAgICAgbnVtYmVyX29mX3dvcmRzOiA0LFxuICAgICAgICAgIHRvdGFsX251bWJlcl9vZl9sZXR0ZXJzOiAxMCxcbiAgICAgICAgICBmaXJzdF93b3JkOiAzLCBcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ0FueSB0d28gKG9yIG1vcmUpIHJlbGF0ZWQgcGhyYXNlcyBzZXBhcmF0ZWQgYnkgYSBjb21tYSBvciBvdGhlcndpc2UgdXNlZCBjb25zZWN1dGl2ZWx5JyxcbiAgICAgICAgICBjb3JyZWN0X2Fuc3dlcjogJ1BheSBBcyBZb3UgR28nLFxuICAgICAgICB9LFxuICAgICAgICB7ICBcbiAgICAgICAgICBjYXRlZ29yeTogJ1BocmFzZScsXG4gICAgICAgICAgbnVtYmVyX29mX3dvcmRzOiA0LFxuICAgICAgICAgIHRvdGFsX251bWJlcl9vZl9sZXR0ZXJzOiAxMSxcbiAgICAgICAgICBmaXJzdF93b3JkOiA0LCBcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ0FueSB0d28gKG9yIG1vcmUpIHJlbGF0ZWQgcGhyYXNlcyBzZXBhcmF0ZWQgYnkgYSBjb21tYSBvciBvdGhlcndpc2UgdXNlZCBjb25zZWN1dGl2ZWx5JyxcbiAgICAgICAgICBjb3JyZWN0X2Fuc3dlcjogJ0dpdmUgTWUgQSBIaW50JyxcbiAgICAgICAgfSxcbiAgICAgICAgeyAgXG4gICAgICAgICAgY2F0ZWdvcnk6ICdQaHJhc2UnLFxuICAgICAgICAgIG51bWJlcl9vZl93b3JkczogNCxcbiAgICAgICAgICB0b3RhbF9udW1iZXJfb2ZfbGV0dGVyczogMTIsXG4gICAgICAgICAgZmlyc3Rfd29yZDogMSwgXG4gICAgICAgICAgZGVzY3JpcHRpb246ICdBbnkgdHdvIChvciBtb3JlKSByZWxhdGVkIHBocmFzZXMgc2VwYXJhdGVkIGJ5IGEgY29tbWEgb3Igb3RoZXJ3aXNlIHVzZWQgY29uc2VjdXRpdmVseScsXG4gICAgICAgICAgY29ycmVjdF9hbnN3ZXI6ICdBIFBpZWNlIE9mIENha2UnLFxuICAgICAgICB9LFxuICAgICAgICB7ICBcbiAgICAgICAgICBjYXRlZ29yeTogJ1BocmFzZScsXG4gICAgICAgICAgbnVtYmVyX29mX3dvcmRzOiA0LFxuICAgICAgICAgIHRvdGFsX251bWJlcl9vZl9sZXR0ZXJzOiAxMixcbiAgICAgICAgICBmaXJzdF93b3JkOiA1LFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnQW55IHR3byAob3IgbW9yZSkgcmVsYXRlZCBwaHJhc2VzIHNlcGFyYXRlZCBieSBhIGNvbW1hIG9yIG90aGVyd2lzZSB1c2VkIGNvbnNlY3V0aXZlbHknLFxuICAgICAgICAgIGNvcnJlY3RfYW5zd2VyOiAnSGFwcHkgQXMgQSBDbGFtJyxcbiAgICAgICAgfSx7ICBcbiAgICAgICAgICBjYXRlZ29yeTogJ0Fyb3VuZCBUaGUgSG91c2UnLFxuICAgICAgICAgIG51bWJlcl9vZl93b3JkczogNCxcbiAgICAgICAgICB0b3RhbF9udW1iZXJfb2ZfbGV0dGVyczogMjUsXG4gICAgICAgICAgZmlyc3Rfd29yZDogNSxcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ0xvY2F0aW9uIG9yIG9iamVjdChzKSBmb3VuZCB3aXRoaW4gYSB0eXBpY2FsIGhvdXNlLicsXG4gICAgICAgICAgY29ycmVjdF9hbnN3ZXI6ICdDbGVhciBQbGFzdGljIFNob3dlciBDdXJ0YWluJyxcbiAgICAgICAgfSx7ICBcbiAgICAgICAgICBjYXRlZ29yeTonUmh5bWUgVGltZScsXG4gICAgICAgICAgbnVtYmVyX29mX3dvcmRzOiA0LFxuICAgICAgICAgIHRvdGFsX251bWJlcl9vZl9sZXR0ZXJzOiAxMCxcbiAgICAgICAgICBmaXJzdF93b3JkOiA0LFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnUmh5bWluZyB3b3JkKHMpIG9yIHBocmFzZShzKS4nLFxuICAgICAgICAgIGNvcnJlY3RfYW5zd2VyOiAnU251ZyBBcyBBIEJ1ZycsXG4gICAgICAgIH0seyAgXG4gICAgICAgICAgY2F0ZWdvcnk6J1JoeW1lIFRpbWUnLFxuICAgICAgICAgIG51bWJlcl9vZl93b3JkczogNCxcbiAgICAgICAgICB0b3RhbF9udW1iZXJfb2ZfbGV0dGVyczogMTUsXG4gICAgICAgICAgZmlyc3Rfd29yZDogNCxcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ1JoeW1pbmcgd29yZChzKSBvciBwaHJhc2UocykuJyxcbiAgICAgICAgICBjb3JyZWN0X2Fuc3dlcjogJ0FudHMgSW4gWW91ciBQYW50cycsXG4gICAgICAgIH0sXG4gICAgICAgIHsgIFxuICAgICAgICAgIGNhdGVnb3J5OidBcm91bmQgVGhlIEhvdXNlJyxcbiAgICAgICAgICBudW1iZXJfb2Zfd29yZHM6IDQsXG4gICAgICAgICAgdG90YWxfbnVtYmVyX29mX2xldHRlcnM6IDEyLFxuICAgICAgICAgIGZpcnN0X3dvcmQ6IDEsXG4gICAgICAgICAgZGVzY3JpcHRpb246ICdMb2NhdGlvbiBvciBvYmplY3QocykgZm91bmQgd2l0aGluIGEgdHlwaWNhbCBob3VzZS4nLFxuICAgICAgICAgIGNvcnJlY3RfYW5zd2VyOiAnQSBQaWxlIE9mIENvYXRzJyxcbiAgICAgICAgfSxcbiAgICAgICAgeyAgXG4gICAgICAgICAgY2F0ZWdvcnk6J1JoeW1lIFRpbWUnLFxuICAgICAgICAgIG51bWJlcl9vZl93b3JkczogNCxcbiAgICAgICAgICB0b3RhbF9udW1iZXJfb2ZfbGV0dGVyczogMTgsXG4gICAgICAgICAgZmlyc3Rfd29yZDogNCxcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ1JoeW1pbmcgd29yZChzKSBvciBwaHJhc2UocykuJyxcbiAgICAgICAgICBjb3JyZWN0X2Fuc3dlcjogJ0dvb2QgR29sbHkgTWlzcyBNb2xseScsXG4gICAgICAgIH0sXG4gICAgICAgIHsgIFxuICAgICAgICAgIGNhdGVnb3J5OidSaHltZSBUaW1lJyxcbiAgICAgICAgICBudW1iZXJfb2Zfd29yZHM6IDQsXG4gICAgICAgICAgdG90YWxfbnVtYmVyX29mX2xldHRlcnM6IDIxLFxuICAgICAgICAgIGZpcnN0X3dvcmQ6IDcsXG4gICAgICAgICAgZGVzY3JpcHRpb246ICdSaHltaW5nIHdvcmQocykgb3IgcGhyYXNlKHMpLicsXG4gICAgICAgICAgY29ycmVjdF9hbnN3ZXI6ICdIb3N0ZXNzIFdpdGggVGhlIE1vc3Rlc3QnLFxuICAgICAgICB9LFxuICAgICAgICB7ICBcbiAgICAgICAgICBjYXRlZ29yeTonUmh5bWUgVGltZScsXG4gICAgICAgICAgbnVtYmVyX29mX3dvcmRzOiA0LFxuICAgICAgICAgIHRvdGFsX251bWJlcl9vZl9sZXR0ZXJzOiAyMixcbiAgICAgICAgICBmaXJzdF93b3JkOiAyLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnUmh5bWluZyB3b3JkKHMpIG9yIHBocmFzZShzKS4nLFxuICAgICAgICAgIGNvcnJlY3RfYW5zd2VyOiAnQW4gQXR0aXR1ZGUgb2YgR3JhdGl0dWRlJyxcbiAgICAgICAgfSx7ICBcbiAgICAgICAgICBjYXRlZ29yeTonUmh5bWUgVGltZScsXG4gICAgICAgICAgbnVtYmVyX29mX3dvcmRzOiA0LFxuICAgICAgICAgIHRvdGFsX251bWJlcl9vZl9sZXR0ZXJzOiAxNixcbiAgICAgICAgICBmaXJzdF93b3JkOiAzLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnUmh5bWluZyB3b3JkKHMpIG9yIHBocmFzZShzKS4nLFxuICAgICAgICAgIGNvcnJlY3RfYW5zd2VyOiAnWW91IFNub296ZSBZb3UgTG9zZScsXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZGF0YTsiLCIgaW1wb3J0IFBsYXllciBmcm9tICcuL1BsYXllci5qcyc7XG4gaW1wb3J0IGRhdGEgZnJvbSAnLi9EYXRhLmpzJztcbiBpbXBvcnQgUHV6emxlIGZyb20gJy4vUHV6emxlLmpzJztcbiBpbXBvcnQgZG9tVXBkYXRlcyBmcm9tICcuL2RvbVVwZGF0ZXMuanMnO1xuXG4gY2xhc3MgR2FtZSB7XG4gIGNvbnN0cnVjdG9yKGN1cnJlbnRSb3VuZCA9IDEsIGFjdGl2ZVBsYXllciwgcm91bmRXaW5uZXIsIGdhbWVXaW5uZXIsIGdhbWVQdXp6bGVzKSB7XG4gICAgdGhpcy5jdXJyZW50Um91bmQgPSBjdXJyZW50Um91bmQsXG4gICAgdGhpcy5hY3RpdmVQbGF5ZXIgPSBhY3RpdmVQbGF5ZXIsXG4gICAgdGhpcy5yb3VuZFdpbm5lciA9IHJvdW5kV2lubmVyLFxuICAgIHRoaXMuZ2FtZVdpbm5lciA9IGdhbWVXaW5uZXIsXG4gICAgdGhpcy5nYW1lUHV6emxlcyA9IFtdXG4gIH1cblxuICBzdGFydEdhbWUocGxheWVycykge1xuICAgIGNvbnNvbGUubG9nKCdnYW1lIHN0YXJ0ZWQhJyk7XG4gICAgdGhpcy5jcmVhdGVQbGF5ZXJzKHBsYXllcnMpO1xuICAgIGxldCBwdXp6bGUgPSBuZXcgUHV6emxlKClcbiAgICBwdXp6bGUuZ3JhYlB1enpsZUJhbmtzKCk7XG4gIH1cblxuICBjcmVhdGVQbGF5ZXJzKHBsYXllcnMpIHtcbiAgICBjb25zdCBwbGF5ZXJPbmUgPSBuZXcgUGxheWVyKHBsYXllcnNbMF0sIHRydWUpO1xuICAgIGNvbnN0IHBsYXllclR3byA9IG5ldyBQbGF5ZXIocGxheWVyc1sxXSk7XG4gICAgY29uc3QgcGxheWVyVGhyZWUgPSBuZXcgUGxheWVyKHBsYXllcnNbMl0pO1xuICAgIGNvbnNvbGUubG9nKHBsYXllck9uZSk7XG4gIH1cblxuICAvLyBncmFiUHV6emxlQmFua3MoKSB7XG4gIC8vICAgbGV0IHB1enpsZUFycmF5T25lID0gZGF0YS5wdXp6bGVzLm9uZV93b3JkX2Fuc3dlcnMucHV6emxlX2JhbmtcbiAgLy8gICBsZXQgcHV6emxlQXJyYXlUd28gPSBkYXRhLnB1enpsZXMudHdvX3dvcmRfYW5zd2Vycy5wdXp6bGVfYmFua1xuICAvLyAgIGxldCBwdXp6bGVBcnJheVRocmVlID0gZGF0YS5wdXp6bGVzLnRocmVlX3dvcmRfYW5zd2Vycy5wdXp6bGVfYmFua1xuICAvLyAgIGxldCBwdXp6bGVBcnJheUZvdXIgPSBkYXRhLnB1enpsZXMuZm91cl93b3JkX2Fuc3dlcnMucHV6emxlX2JhbmtcbiAgLy8gICBsZXQgcHV6emxlQmFuayA9IHB1enpsZUFycmF5T25lLmNvbmNhdChwdXp6bGVBcnJheVR3bywgcHV6emxlQXJyYXlUaHJlZSwgcHV6emxlQXJyYXlGb3VyKVxuICAvLyAgIHRoaXMucmFuZG9taXplQmFuayhwdXp6bGVCYW5rKTtcbiAgLy8gICBsZXQgZm91clB1enpsZXMgPSB0aGlzLnNldEdhbWVQdXp6bGVzKHB1enpsZUJhbmspO1xuICAvLyAgIGxldCByb3VuZFB1enpsZSA9IHRoaXMuc2V0Um91bmRQdXp6bGUoZm91clB1enpsZXMpO1xuICAvLyAgIGNvbnNvbGUubG9nKHJvdW5kUHV6emxlKVxuICAvLyAgIHJldHVybiBwdXp6bGVCYW5rO1xuICAvLyB9XG5cbiAgLy8gcmFuZG9taXplQmFuayhhcnIpIHtcbiAgLy8gICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGggLSAxOyBpKyspIHtcbiAgLy8gICAgIGNvbnN0IHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcigoTWF0aC5yYW5kb20oKSAqIChhcnIubGVuZ3RoIC0gaSkpKSArIGk7XG4gIC8vICAgICBbYXJyW2ldLCBhcnJbcmFuZG9tSW5kZXhdXSA9IFthcnJbcmFuZG9tSW5kZXhdLCBhcnJbaV1dO1xuICAvLyAgIH1cbiAgLy8gICByZXR1cm4gYXJyO1xuICAvLyB9XG5cbiAgLy8gc2V0R2FtZVB1enpsZXMocHV6emxlQmFuaykge1xuICAvLyAgIGxldCBmb3VyUHV6emxlcyA9IHB1enpsZUJhbmsuc2xpY2UoMCwgNCk7XG4gIC8vICAgdGhpcy5nYW1lUHV6emxlcyA9IGZvdXJQdXp6bGVzLm1hcChwdXp6bGUgPT4ge1xuICAvLyAgICAgcmV0dXJuIG5ldyBQdXp6bGUocHV6emxlLmNhdGVnb3J5LCBwdXp6bGUudG90YWxfbnVtYmVyX29mX2xldHRlcnMsIHB1enpsZS5jb3JyZWN0X2Fuc3dlciwgcHV6emxlLmRlc2NyaXB0aW9uLCAwLCApXG4gIC8vICAgfSlcbiAgLy8gICByZXR1cm4gZm91clB1enpsZXM7XG4gIC8vIH1cblxuICAvLyBzZXRSb3VuZFB1enpsZShmb3VyUHV6emxlcykge1xuICAvLyAgIGxldCByb3VuZFB1enpsZSA9IGZvdXJQdXp6bGVzLnBvcCgpO1xuICAvLyAgIGNvbnNvbGUubG9nKGZvdXJQdXp6bGVzLmxlbmd0aClcbiAgLy8gICByZXR1cm4gcm91bmRQdXp6bGU7XG4gIC8vIH1cblxufVxuXG4vLyBpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbi8vICAgbW9kdWxlLmV4cG9ydHMgPSBHYW1lO1xuLy8gfVxuXG5leHBvcnQgZGVmYXVsdCBHYW1lOyIsImNsYXNzIFBsYXllciB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGFjdGl2ZVBsYXllciwgcm91bmRTY29yZSwgdG90YWxTY29yZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5hY3RpdmVQbGF5ZXIgPSBmYWxzZTtcbiAgICB0aGlzLnJvdW5kU2NvcmUgPSByb3VuZFNjb3JlO1xuICAgIHRoaXMudG90YWxTY29yZSA9IHRvdGFsU2NvcmU7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGxheWVyOyIsImltcG9ydCBkYXRhIGZyb20gJy4vRGF0YS5qcyc7XG5cbmNsYXNzIFB1enpsZSB7XG4gIGNvbnN0cnVjdG9yKGNhdGVnb3J5LCBudW1iZXJPZkxldHRlcnMsIGNvcnJlY3RBbnN3ZXIsIGRlc2NyaXB0aW9uLCBndWVzc2VkTGV0dGVycyA9IDApIHtcbiAgICB0aGlzLmNhdGVnb3J5ID0gY2F0ZWdvcnksXG4gICAgdGhpcy5udW1iZXJPZkxldHRlcnMgPSBudW1iZXJPZkxldHRlcnMsXG4gICAgdGhpcy5jb3JyZWN0QW5zd2VyID0gY29ycmVjdEFuc3dlcixcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb24sXG4gICAgdGhpcy5ndWVzc2VkTGV0dGVycyA9IGd1ZXNzZWRMZXR0ZXJzXG4gICAgdGhpcy5jb25zb25hbnRzQmFuayA9IFtdLFxuICAgIHRoaXMudm93ZWxzQmFuayA9IFtdXG4gIH1cblxuICAgIGdyYWJQdXp6bGVCYW5rcygpIHtcbiAgICBsZXQgcHV6emxlQXJyYXlPbmUgPSBkYXRhLnB1enpsZXMub25lX3dvcmRfYW5zd2Vycy5wdXp6bGVfYmFua1xuICAgIGxldCBwdXp6bGVBcnJheVR3byA9IGRhdGEucHV6emxlcy50d29fd29yZF9hbnN3ZXJzLnB1enpsZV9iYW5rXG4gICAgbGV0IHB1enpsZUFycmF5VGhyZWUgPSBkYXRhLnB1enpsZXMudGhyZWVfd29yZF9hbnN3ZXJzLnB1enpsZV9iYW5rXG4gICAgbGV0IHB1enpsZUFycmF5Rm91ciA9IGRhdGEucHV6emxlcy5mb3VyX3dvcmRfYW5zd2Vycy5wdXp6bGVfYmFua1xuICAgIGxldCBwdXp6bGVCYW5rID0gcHV6emxlQXJyYXlPbmUuY29uY2F0KHB1enpsZUFycmF5VHdvLCBwdXp6bGVBcnJheVRocmVlLCBwdXp6bGVBcnJheUZvdXIpXG4gICAgdGhpcy5yYW5kb21pemVCYW5rKHB1enpsZUJhbmspO1xuICAgIGxldCBmb3VyUHV6emxlcyA9IHRoaXMuc2V0R2FtZVB1enpsZXMocHV6emxlQmFuayk7XG4gICAgbGV0IHJvdW5kUHV6emxlID0gdGhpcy5zZXRSb3VuZFB1enpsZShmb3VyUHV6emxlcyk7XG4gICAgY29uc29sZS5sb2cocm91bmRQdXp6bGUpXG4gICAgcmV0dXJuIHB1enpsZUJhbms7XG4gIH1cblxuICByYW5kb21pemVCYW5rKGFycikge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aCAtIDE7IGkrKykge1xuICAgICAgY29uc3QgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKChNYXRoLnJhbmRvbSgpICogKGFyci5sZW5ndGggLSBpKSkpICsgaTtcbiAgICAgIFthcnJbaV0sIGFycltyYW5kb21JbmRleF1dID0gW2FycltyYW5kb21JbmRleF0sIGFycltpXV07XG4gICAgfVxuICAgIHJldHVybiBhcnI7XG4gIH1cblxuICBzZXRHYW1lUHV6emxlcyhwdXp6bGVCYW5rKSB7XG4gICAgbGV0IGZvdXJQdXp6bGVzID0gcHV6emxlQmFuay5zbGljZSgwLCA0KTtcbiAgICB0aGlzLmdhbWVQdXp6bGVzID0gZm91clB1enpsZXMubWFwKHB1enpsZSA9PiB7XG4gICAgICByZXR1cm4gbmV3IFB1enpsZShwdXp6bGUuY2F0ZWdvcnksIHB1enpsZS50b3RhbF9udW1iZXJfb2ZfbGV0dGVycywgcHV6emxlLmNvcnJlY3RfYW5zd2VyLCBwdXp6bGUuZGVzY3JpcHRpb24sIDAsIClcbiAgICB9KVxuICAgIHJldHVybiBmb3VyUHV6emxlcztcbiAgfVxuXG4gIHNldFJvdW5kUHV6emxlKGZvdXJQdXp6bGVzKSB7XG4gICAgbGV0IHJvdW5kUHV6emxlID0gZm91clB1enpsZXMucG9wKCk7XG4gICAgY29uc29sZS5sb2coZm91clB1enpsZXMubGVuZ3RoKVxuICAgIHJldHVybiByb3VuZFB1enpsZTtcbiAgfVxuXG4gIGNvdW50Vm93ZWxzKGNvcnJlY3RBbnN3ZXIpIHtcbiAgICBsZXQgdm93ZWxzID0gWydhJywgJ2UnLCAnaScsICdvJywgJ3UnXVxuICAgIFxuICB9XG5cbiAgcG9wdWxhdGVDb25zb25hbnRzQmFuaygpIHtcbiAgICB0aGlzLmNvbnNvbmFudHNCYW5rID0gdGhpcy5jb25zb25hbnRzQmFuay5jb25jYXQoWydiJywgJ2MnLCAnZCcsICdmJywgJ2cnLCAnaCcsICdqJywgJ2snLCAnbCcsICdtJywgJ24nLCAncCcsICdxJywgJ3InLCAncycsICd0JywgJ3YnLCAndycsICd4JywgJ3knLCAneiddKVxuICAgIHRoaXMudm93ZWxzQmFuayA9IHRoaXMudm93ZWxzQmFuay5jb25jYXQoWydhJywgJ2UnLCAnaScsICdvJywgJ3UnXSlcbiAgfVxuIH1cblxuZXhwb3J0IGRlZmF1bHQgUHV6emxlOyIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Jhc2UuY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Jhc2UuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9iYXNlLmNzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImV4cG9ydCBkZWZhdWx0IHtcbiAgLy9tZXRob2RzIGdvIGhlcmVcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBcImltYWdlcy90dXJpbmctbG9nby5wbmdcIjsiLCIvLyBUaGlzIGlzIHRoZSBKYXZhU2NyaXB0IGVudHJ5IGZpbGUgLSB5b3VyIGNvZGUgYmVnaW5zIGhlcmVcbi8vIERvIG5vdCBkZWxldGUgb3IgcmVuYW1lIHRoaXMgZmlsZVxuXG4vLyBUZWxsIHdlYnBhY2sgdG8gdXNlIGEgQ1NTIGZpbGVcbmltcG9ydCAnLi9jc3MvYmFzZS5jc3MnOyBcbmltcG9ydCBHYW1lIGZyb20nLi9HYW1lLmpzJztcblxuLy8gIFRlbGwgd2VicGFjayB0byB1c2UgYW4gaW1hZ2UgKGxpbmsgdG8gaXQgaW4gaW5kZXguaHRtbClcbmltcG9ydCAnLi9pbWFnZXMvdHVyaW5nLWxvZ28ucG5nJztcblxuJCgnI3N1Ym1pdC1idG4nKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgXG4gIGxldCB3aGVlbE9mRm9ydHVuZSA9IG5ldyBHYW1lKCk7XG4gIGxldCBwbGF5ZXJzQXJyYXkgPSBbXTtcblxuICBsZXQgcGxheWVyT25lID0gJCgnI3BsYXllci1vbmUnKS52YWwoKTtcbiAgbGV0IHBsYXllclR3byA9ICQoJyNwbGF5ZXItdHdvJykudmFsKCk7XG4gIGxldCBwbGF5ZXJUaHJlZSA9ICQoJyNwbGF5ZXItdGhyZWUnKS52YWwoKTtcblxuICBwbGF5ZXJzQXJyYXkucHVzaChwbGF5ZXJPbmUsIHBsYXllclR3bywgcGxheWVyVGhyZWUpO1xuXG4gIHdoZWVsT2ZGb3J0dW5lLnN0YXJ0R2FtZShwbGF5ZXJzQXJyYXkpO1xufSlcblxuY29uc29sZS5sb2coJ1RoaXMgaXMgdGhlIEphdmFTY3JpcHQgZW50cnkgZmlsZSAtIHlvdXIgY29kZSBiZWdpbnMgaGVyZS4nKTtcblxuXG5cbi8vIGV4cG9ydCBkZWZhdWx0IGluZGV4LmpzOyJdLCJzb3VyY2VSb290IjoiIn0=