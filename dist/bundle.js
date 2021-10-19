/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/Home.js":
/*!************************!*\
  !*** ./src/js/Home.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar KEY = \"ee16de9559db45799581e016de56efca\";\n\nfunction Home() {\n  var argument = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : \"\";\n  var selectedPlatform = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : \"\";\n  var selectPlatform = document.querySelector(\"select\");\n  var welcomeMessage = document.querySelector(\".welcome-message\");\n  welcomeMessage.classList.remove(\"hidden\");\n  selectPlatform.classList.remove(\"hidden\");\n  console.log(\"la plateforme sélectionnée est\", selectedPlatform);\n\n  var preparePage = function preparePage() {\n    var cleanedArgument = argument.replace(/\\s+/g, \"-\");\n    var articles = \"\";\n    var searchedPage = 1;\n    var showMoreButton = document.querySelector(\"#show-more\");\n    showMoreButton.addEventListener(\"click\", function () {\n      searchedPage += 1;\n      console.log(searchedPage);\n      fetchList(\"https://api.rawg.io/api/games\", \"\", searchedPage);\n    });\n\n    var fetchList = function fetchList(url, argument, page) {\n      var finalURL = url + \"?dates=2022-01-01,2022-12-31\" + \"&key=\" + KEY + \"&page=\" + page;\n\n      if (argument) {\n        finalURL = url + \"?search=\" + argument + \"&search_precise=true\" + \"&key=\" + KEY + \"&page=\" + page;\n      } // console.log(\"url final :\", finalURL)\n\n\n      fetch(\"\".concat(finalURL)).then(function (response) {\n        return response.json();\n      }).then(function (response) {\n        var articleList = response.results; // console.log(\"article liste 1 :\", articleList)\n\n        if (selectedPlatform !== \"\") {\n          // console.log(\"je suis dans le if selected platform et plateform : \", selectedPlatform)\n          articleList = articleList.filter(function (article) {\n            return article.platforms.map(function (platformObject) {\n              return platformObject.platform.name;\n            }).includes(selectedPlatform);\n          });\n        }\n\n        console.log(\"articleListe 2 : \", articleList);\n        articleList.forEach(function (article) {\n          articles += \"\\n                  <div class=\\\"cardGame\\\">\\n                    <a href=\\\"#pagedetail/\".concat(article.id, \"\\\"><div><img src=\").concat(article.background_image, \"></img></div></a>\\n                    <h1>\").concat(article.name, \"</h1>\\n                  </div>\\n                \");\n        });\n        document.querySelector(\".page-list .articles\").innerHTML = articles;\n      });\n    };\n\n    fetchList(\"https://api.rawg.io/api/games\", cleanedArgument, searchedPage);\n  };\n\n  var render = function render() {\n    pageContent.innerHTML = \"\\n      \\n      <section class=\\\"page-list\\\">\\n        <div class=\\\"articles\\\">...loading</div>\\n      </section>\\n      <button class=\\\"show-more\\\" id=\\\"show-more\\\" >Show more</button>\\n    \";\n    preparePage();\n  };\n\n  render();\n}\n\n;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n\n//# sourceURL=webpack://SPA/./src/js/Home.js?");

/***/ }),

/***/ "./src/js/PageDetail.js":
/*!******************************!*\
  !*** ./src/js/PageDetail.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar KEY = \"ee16de9559db45799581e016de56efca\";\nvar selectPlatform = document.querySelector(\"select\");\nvar welcomeMessage = document.querySelector(\".welcome-message\");\n\nfunction PageDetail(argument) {\n  welcomeMessage.classList.add(\"hidden\");\n  selectPlatform.classList.add(\"hidden\");\n\n  var preparePage = function preparePage() {\n    var cleanedArgument = argument.replace(/\\s+/g, \"-\");\n\n    var fetchGame = function fetchGame(url, argument) {\n      var finalURL = url + argument + \"?key=\" + KEY;\n      console.log(finalURL);\n      fetch(\"\".concat(finalURL)).then(function (response) {\n        return response.json();\n      }).then(function (response) {\n        var name = response.name,\n            released = response.released,\n            description = response.description,\n            background_image = response.background_image,\n            developers = response.developers,\n            platforms = response.platforms,\n            publishers = response.publishers,\n            genres = response.genres,\n            tags = response.tags,\n            stores = response.stores,\n            website = response.website;\n        console.log(response);\n        var releasedDate = released === null ? \"N/A\" : released;\n        var publisherStr = publishers.length === 0 ? \"N/A\" : publishers[0].name;\n        var platformsString = platforms.map(function (platform) {\n          return platform.platform.name;\n        }).join(', ');\n        var regexp = /♞|♚|♝|♛/g; // vu dans l'une des descriptions...\n\n        var newDescription = description.replace(regexp, \"•\");\n        var genresStr = genres.length > 0 ? genres.map(function (genre) {\n          return genre.name;\n        }).join(', ') : \"N/A\";\n        var tagsStr = tags.length > 0 ? tags.map(function (tag) {\n          return tag.name;\n        }).join(', ') : \"N/A\";\n        var storesStr = stores.map(function (store) {\n          return \"<a href=\\\"\".concat(store.store.domain, \"\\\">\").concat(store.store.name, \"</a></br>\");\n        }).join('');\n        var articleDOM = document.querySelector(\".page-detail .article\");\n        articleDOM.querySelector(\".img-game img\").src = background_image;\n        articleDOM.querySelector(\"h1.title\").innerHTML = name;\n        articleDOM.querySelector(\"p.release-date\").innerHTML = releasedDate;\n        articleDOM.querySelector(\"p.description\").innerHTML = newDescription;\n        articleDOM.querySelector(\"p.developers\").innerHTML = developers[0].name;\n        articleDOM.querySelector(\"p.platforms\").innerHTML = platformsString;\n        articleDOM.querySelector(\"p.publishers\").innerHTML = publisherStr;\n        articleDOM.querySelector(\"p.genre\").innerHTML = genresStr;\n        articleDOM.querySelector(\"p.tags\").innerHTML = tagsStr;\n        articleDOM.querySelector(\"p.buy\").innerHTML = storesStr;\n        articleDOM.querySelector(\".img-game > a\").href = website;\n        articleDOM.querySelector(\".img-game > a\").target = \"_blank\";\n      });\n    };\n\n    fetchGame(\"https://api.rawg.io/api/games/\", cleanedArgument);\n  };\n\n  var render = function render() {\n    pageContent.innerHTML = \"\\n      <section class=\\\"page-detail\\\">\\n        <div class=\\\"article\\\">\\n          <div class=\\\"img-game\\\">\\n            <img>\\n            <a>Check Website <i class=\\\"fas fa-play\\\"></i></a>\\n          </div>\\n          <h1 class=\\\"title\\\"></h1>\\n          <div>\\n            <h3>Plot</h3>\\n            <p class=\\\"description\\\"></p>\\n          </div>\\n          <div class=\\\"released-developer-platform-publisher\\\">\\n            <div>\\n              <h4>Released date:</h4>\\n              <p class=\\\"release-date\\\"></p>\\n            </div>\\n            <div>\\n              <h4>Developer:</h4>\\n              <p class=\\\"developers\\\"></p>\\n            </div>\\n            <div>\\n              <h4>Platforms:</h4>\\n              <p class=\\\"platforms\\\"></p>\\n            </div>\\n            <div>\\n              <h4>Publisher:</h4>\\n              <p class=\\\"publishers\\\"></p>\\n            </div>\\n            <div>\\n              <h4>Genre:</h4>\\n              <p class=\\\"genre\\\"></p>\\n            </div>\\n            <div>\\n              <h4>Tags:</h4>\\n              <p class=\\\"tags\\\"></p>\\n            </div>\\n          </div>\\n          <h2>BUY</h2>\\n          <p class=\\\"buy\\\"></p>\\n          <h2>TRAILERS</h2>\\n          <h2>SCREENSHOTS</h2>\\n          <h2>YOUTUBE</h2>\\n          <h2>SIMILAR GAMES</h2>\\n\\n        </div>\\n      </section>\\n    \";\n    preparePage();\n  };\n\n  render();\n}\n\n;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageDetail);\n\n//# sourceURL=webpack://SPA/./src/js/PageDetail.js?");

/***/ }),

/***/ "./src/js/PageList.js":
/*!****************************!*\
  !*** ./src/js/PageList.js ***!
  \****************************/
/***/ (() => {

eval("// import key from './key';\n// const KEY = key()\n// function PageList(argument = \"\", selectedPlatform = \"\") {\n//   console.log(\"la plateforme sélectionnée est\", selectedPlatform)\n//   const preparePage = () => {\n//     let cleanedArgument = argument.replace(/\\s+/g, \"-\");\n//     let articles = \"\";\n//     const fetchList = (url, game) => {\n//       let finalURL = url + \"?key=\" + KEY;\n//       if (argument) {\n//         finalURL = url + \"?search=\" + argument + \"&search_precise=true\" + \"&key=\" + KEY;\n//       }\n//       fetch(`${finalURL}`)\n//       .then((response) => response.json())\n//       .then((response) => {\n//           let articleList = response.results\n//           // response.results.forEach((article) => {\n//             // response.results.filter(article => article.platforms[0].platform.name.includes(\"Xbox\")).forEach((article) => {\n//             // console.log(response.results\n//             //   .filter(article => article.platforms\n//             //     .map(platformObject => platformObject.platform.name).includes(\"Xbox 360\")))\n//           if (selectedPlatform !== \"\"){\n//             articleList = articleList.filter(article => article.platforms\n//               .map(platformObject => platformObject.platform.name).includes(selectedPlatform))\n//           }\n//             articleList\n//               .forEach((article) => {\n//             articles += `\n//                   <div class=\"cardGame\">\n//                     <h1>${article.name}</h1>\n//                     <h4>${article.released}</h4>\n//                     <a href = \"#pagedetail/${article.id}\">${article.id}</a>\n//                   </div>\n//                 `;\n//             console.log(article.platforms)\n//             console.log(article.platforms.map(Object.values))\n//             console.log(article.platforms.map(platformObject => platformObject.platform.name))\n//             console.log(article.platforms.map(platformObject => platformObject.platform.name).includes(\"Xbox 360\"))\n//           });\n//           document.querySelector(\".page-list .articles\").innerHTML = articles;\n//         });\n//     };\n//     fetchList(\"https://api.rawg.io/api/games\", cleanedArgument);\n//   };\n//   // https://api.rawg.io/api/games?search=303%20squadron&search_precise=true&key=ee16de9559db45799581e016de56efca\n//   const render = () => {\n//     pageContent.innerHTML = `\n//       <section class=\"page-list\">\n//         <div class=\"articles\">...loading</div>\n//       </section>\n//     `;\n//     preparePage();\n//   };\n//   render();\n// };\n// const testFunction = () => {\n//   console.log(\"TEST OK\")\n// }\n// export default PageList;\n\n//# sourceURL=webpack://SPA/./src/js/PageList.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sass_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/style.scss */ \"./src/sass/style.scss\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./routes */ \"./src/js/routes.js\");\n\n\nvar searchForm = document.querySelector(\"#search-form\");\nvar findGameInput = document.querySelector(\"#find-game\");\nvar selectPlatform = document.querySelector(\"select\");\nvar route = _routes__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\nvar pageArgument;\n\nvar setRoute = function setRoute() {\n  var selectedPlatform = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : \"\";\n  var path = window.location.hash.substring(1).split(\"/\");\n  console.log(path);\n  pageArgument = path[1] || \"\";\n  var pageContent = document.querySelector(\"#pageContent\");\n  console.log(\"pageArgument :\", pageArgument, \"Selected Plateforme : \", selectedPlatform);\n  route[path[0]](pageArgument, selectedPlatform); //  routes[pagelist]\n\n  return true;\n};\n\nwindow.addEventListener(\"hashchange\", function () {\n  console.log(\"2\");\n  setRoute();\n});\nwindow.addEventListener(\"DOMContentLoaded\", function () {\n  return setRoute();\n});\nselectPlatform.addEventListener(\"change\", function () {\n  return setRoute(selectPlatform[selectPlatform.options.selectedIndex].value);\n});\nsearchForm.addEventListener(\"submit\", function () {\n  searchForm.action = \"index-webpack.html?#/\".concat(findGameInput.value.replace(/\\s+/g, \"-\"));\n  console.log(\"1\", findGameInput.value.replace(/\\s+/g, \"-\"));\n});\n\n//# sourceURL=webpack://SPA/./src/js/index.js?");

/***/ }),

/***/ "./src/js/routes.js":
/*!**************************!*\
  !*** ./src/js/routes.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _PageList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PageList */ \"./src/js/PageList.js\");\n/* harmony import */ var _PageList__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_PageList__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home */ \"./src/js/Home.js\");\n/* harmony import */ var _PageDetail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PageDetail */ \"./src/js/PageDetail.js\");\n\n\n\nvar routes = {\n  \"\": _Home__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  // \"pagelist\": newPageList,\n  \"pagedetail\": _PageDetail__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (routes);\n\n//# sourceURL=webpack://SPA/./src/js/routes.js?");

/***/ }),

/***/ "./src/sass/style.scss":
/*!*****************************!*\
  !*** ./src/sass/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;