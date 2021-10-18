/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/Home.js":
/*!************************!*\
  !*** ./src/js/Home.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction Home() {\n  var KEY = \"ee16de9559db45799581e016de56efca\";\n\n  var preparePage = function preparePage() {\n    var articles = \"\";\n    var searchedPage = 1;\n    var showMoreButton = document.querySelector(\"#show-more\");\n    showMoreButton.addEventListener(\"click\", function () {\n      searchedPage += 1;\n      console.log(searchedPage);\n      fetchList(\"https://api.rawg.io/api/games\", \"\", searchedPage);\n    });\n\n    var fetchList = function fetchList(url, argument, page) {\n      var finalURL = url + \"?key=\" + KEY + \"&page=\" + page;\n\n      if (argument) {\n        finalURL = url + \"?search=\" + argument + \"&search_precise=true\" + \"&key=\" + KEY + \"&page=\" + page;\n      }\n\n      console.log(finalURL);\n      fetch(\"\".concat(finalURL)).then(function (response) {\n        return response.json();\n      }).then(function (response) {\n        response.results.forEach(function (article) {\n          articles += \"\\n                  <div class=\\\"cardGame\\\">\\n                    <h1>\".concat(article.name, \"</h1>\\n                    <h4>\").concat(article.released, \"</h4>\\n                    <a href = \\\"#pagedetail/\").concat(article.id, \"\\\">\").concat(article.id, \"</a>\\n                  </div>\\n                \");\n        });\n        document.querySelector(\".page-list .articles\").innerHTML = articles;\n      });\n    };\n\n    fetchList(\"https://api.rawg.io/api/games\", \"\", searchedPage);\n  }; // https://api.rawg.io/api/games?search=303%20squadron&search_precise=true&key=ee16de9559db45799581e016de56efca\n\n\n  var render = function render() {\n    pageContent.innerHTML = \"\\n      <h2>Welcome</h2>\\n      <p>The Hyper Progame is the world\\u2019s premier event for computer and video games and related products. At The Hyper Progame, the video game industry\\u2019s top talent pack the Los Angeles Convention Center, connecting tens of thousands of the best, brightest, and most innovative in the interactive entertainment industry. For three exciting days, leading-edge companies, groundbreaking new technologies, and never-before-seen products will be showcased. The Hyper Progame connects you with both new and existing partners, industry executives, gamers, and social influencers providing unprecedented exposure</p>\\n      <section class=\\\"page-list\\\">\\n        <div class=\\\"articles\\\">...loading</div>\\n      </section>\\n      <button class=\\\"show-more\\\" id=\\\"show-more\\\" >Show more</button>\\n    \";\n    preparePage();\n  };\n\n  render();\n}\n\n;\n\nvar testFunction = function testFunction() {\n  console.log(\"TEST OK\");\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n\n//# sourceURL=webpack://SPA/./src/js/Home.js?");

/***/ }),

/***/ "./src/js/PageDetail.js":
/*!******************************!*\
  !*** ./src/js/PageDetail.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _key__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./key */ \"./src/js/key.js\");\n\nvar KEY = (0,_key__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\nfunction PageDetail(argument) {\n  var preparePage = function preparePage() {\n    var cleanedArgument = argument.replace(/\\s+/g, \"-\");\n\n    var fetchGame = function fetchGame(url, argument) {\n      var finalURL = url + argument + \"?key=\" + KEY;\n      console.log(finalURL);\n      fetch(\"\".concat(finalURL)).then(function (response) {\n        return response.json();\n      }).then(function (response) {\n        var name = response.name,\n            released = response.released,\n            description = response.description;\n        var articleDOM = document.querySelector(\".page-detail .article\");\n        articleDOM.querySelector(\"h1.title\").innerHTML = name;\n        articleDOM.querySelector(\"p.release-date span\").innerHTML = released;\n        articleDOM.querySelector(\"p.description\").innerHTML = description;\n      });\n    };\n\n    fetchGame(\"https://api.rawg.io/api/games/\", cleanedArgument);\n  };\n\n  var render = function render() {\n    pageContent.innerHTML = \"\\n      <section class=\\\"page-detail\\\">\\n        <div class=\\\"article\\\">\\n          <h1 class=\\\"title\\\"></h1>\\n          <p class=\\\"release-date\\\">Release date : <span></span></p>\\n          <p class=\\\"description\\\"></p>\\n        </div>\\n      </section>\\n    \";\n    preparePage();\n  };\n\n  render();\n}\n\n;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageDetail);\n\n//# sourceURL=webpack://SPA/./src/js/PageDetail.js?");

/***/ }),

/***/ "./src/js/PageList.js":
/*!****************************!*\
  !*** ./src/js/PageList.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _key__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./key */ \"./src/js/key.js\");\n\nvar KEY = (0,_key__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\nfunction PageList() {\n  var argument = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : \"\";\n  var selectedPlatform = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : \"\";\n  console.log(\"la plateforme sélectionnée est\", selectedPlatform);\n\n  var preparePage = function preparePage() {\n    var cleanedArgument = argument.replace(/\\s+/g, \"-\");\n    var articles = \"\";\n\n    var fetchList = function fetchList(url, game) {\n      var finalURL = url + \"?key=\" + KEY;\n\n      if (argument) {\n        finalURL = url + \"?search=\" + argument + \"&search_precise=true\" + \"&key=\" + KEY;\n      }\n\n      fetch(\"\".concat(finalURL)).then(function (response) {\n        return response.json();\n      }).then(function (response) {\n        var articleList = response.results; // response.results.forEach((article) => {\n        // response.results.filter(article => article.platforms[0].platform.name.includes(\"Xbox\")).forEach((article) => {\n        // console.log(response.results\n        //   .filter(article => article.platforms\n        //     .map(platformObject => platformObject.platform.name).includes(\"Xbox 360\")))\n\n        if (selectedPlatform !== \"\") {\n          articleList = articleList.filter(function (article) {\n            return article.platforms.map(function (platformObject) {\n              return platformObject.platform.name;\n            }).includes(selectedPlatform);\n          });\n        }\n\n        articleList.forEach(function (article) {\n          articles += \"\\n                  <div class=\\\"cardGame\\\">\\n                    <h1>\".concat(article.name, \"</h1>\\n                    <h4>\").concat(article.released, \"</h4>\\n                    <a href = \\\"#pagedetail/\").concat(article.id, \"\\\">\").concat(article.id, \"</a>\\n                  </div>\\n                \");\n          console.log(article.platforms);\n          console.log(article.platforms.map(Object.values));\n          console.log(article.platforms.map(function (platformObject) {\n            return platformObject.platform.name;\n          }));\n          console.log(article.platforms.map(function (platformObject) {\n            return platformObject.platform.name;\n          }).includes(\"Xbox 360\"));\n        });\n        document.querySelector(\".page-list .articles\").innerHTML = articles;\n      });\n    };\n\n    fetchList(\"https://api.rawg.io/api/games\", cleanedArgument);\n  }; // https://api.rawg.io/api/games?search=303%20squadron&search_precise=true&key=ee16de9559db45799581e016de56efca\n\n\n  var render = function render() {\n    pageContent.innerHTML = \"\\n      <section class=\\\"page-list\\\">\\n        <div class=\\\"articles\\\">...loading</div>\\n      </section>\\n    \";\n    preparePage();\n  };\n\n  render();\n}\n\n;\n\nvar testFunction = function testFunction() {\n  console.log(\"TEST OK\");\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageList);\n\n//# sourceURL=webpack://SPA/./src/js/PageList.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sass_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/style.scss */ \"./src/sass/style.scss\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./routes */ \"./src/js/routes.js\");\n\n\nvar searchForm = document.querySelector(\"#search-form\");\nvar findGameInput = document.querySelector(\"#find-game\");\nvar selectPlatform = document.querySelector(\"select\");\nvar route = _routes__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\nvar pageArgument;\n\nvar setRoute = function setRoute() {\n  var selectedPlatform = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : \"\";\n  var path = window.location.hash.substring(1).split(\"/\");\n  console.log(path);\n  pageArgument = path[1] || \"\";\n  var pageContent = document.querySelector(\"#pageContent\");\n  route[path[0]](pageArgument, selectedPlatform); //  routes[pagelist]\n\n  return true;\n};\n\nwindow.addEventListener(\"hashchange\", function () {\n  return setRoute();\n});\nwindow.addEventListener(\"DOMContentLoaded\", function () {\n  return setRoute();\n});\nselectPlatform.addEventListener(\"change\", function () {\n  return setRoute(selectPlatform[selectPlatform.options.selectedIndex].value);\n});\nsearchForm.addEventListener(\"submit\", function () {\n  searchForm.action = \"index-webpack.html?#pagelist/\".concat(findGameInput.value.replace(/\\s+/g, \"-\"));\n});\n\n//# sourceURL=webpack://SPA/./src/js/index.js?");

/***/ }),

/***/ "./src/js/key.js":
/*!***********************!*\
  !*** ./src/js/key.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction myKey() {\n  return \"ee16de9559db45799581e016de56efca\";\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (myKey);\n\n//# sourceURL=webpack://SPA/./src/js/key.js?");

/***/ }),

/***/ "./src/js/routes.js":
/*!**************************!*\
  !*** ./src/js/routes.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _PageList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PageList */ \"./src/js/PageList.js\");\n/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home */ \"./src/js/Home.js\");\n/* harmony import */ var _PageDetail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PageDetail */ \"./src/js/PageDetail.js\");\n\n\n\nvar routes = {\n  \"\": _Home__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  \"pagelist\": _PageList__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  \"pagedetail\": _PageDetail__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (routes);\n\n//# sourceURL=webpack://SPA/./src/js/routes.js?");

/***/ }),

/***/ "./src/sass/style.scss":
/*!*****************************!*\
  !*** ./src/sass/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://SPA/./src/sass/style.scss?");

/***/ })

/******/ 	});
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
/******/ 			// no module.id needed
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;