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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `.top-bar {\n  display: flex;\n  justify-content: space-between;\n  padding: 15px 20px;\n  background-color: #f4f4f4;\n  border-bottom: 1px solid #ddd;\n  width: 100%; /* Full width */\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);\n}\n\n.top-bar-title {\n  text-align: left;\n  font-size: 20px;\n  font-weight: bold;\n}\n\n.create-todo-btn {\n  position: absolute; \n  top: 1%;\n  left: 50%; \n  transform: translateX(-50%);\n  background-color: green;\n  color: white;\n  border: none;\n  padding: 10px 20px;\n  font-size: 16px;\n  border-radius: 5px;\n  cursor: pointer;\n}\n\n/* Modal Styling */\n.modal {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1000;\n}\n\n.modal-form {\n  background-color: white;\n  padding: 20px;\n  border-radius: 8px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n}\n\n.modal-form h2 {\n  margin-bottom: 15px;\n}\n\n.modal-form label {\n  display: block;\n  margin-bottom: 5px;\n  font-weight: bold;\n}\n\n.modal-form input, .modal-form textarea, .modal-form select {\n  width: 90%;\n  padding: 10px;\n  margin-bottom: 10px;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  font-size: 16px;\n}\n\n.modal-form .button-group {\n  display: flex;\n  justify-content: space-between;\n  gap: 10px;\n}\n\n.modal-form .create-btn {\n  background-color: blue;\n  color: white;\n  border: none;\n  padding: 10px 20px;\n  border-radius: 5px;\n  cursor: pointer;\n}\n\n.modal-form .cancel-btn {\n  background-color: gray;\n  color: white;\n  border: none;\n  padding: 10px 20px;\n  border-radius: 5px;\n  cursor: pointer;\n}\n\n/* Todo Styling */\n.todo {\n  border: 1px solid #ddd;\n  border-radius: 5px;\n  padding: 10px;\n  margin-bottom: 10px;\n  background-color: #f9f9f9;\n}\n\n.todo .button-group {\n  margin-top: 10px;\n}\n\n.todo .edit-btn, .todo .delete-btn {\n  padding: 5px 10px;\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n}\n\n.todo .edit-btn {\n  margin-right: 10px;\n  background-color: lightblue;\n}\n\n.todo .delete-btn {\n  background-color: red;\n  color: white;\n}\n\nform textarea {\n  resize: none; /* Disable resizing */\n  height: 150px; /* Increase the height */\n  width: 100%; /* Ensure it spans the full width */\n  padding: 10px;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  font-size: 16px;\n}\n\n.completion-popup {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: green;\n  color: white;\n  padding: 20px;\n  border-radius: 8px;\n  font-size: 18px;\n  font-weight: bold;\n  text-align: center;\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);\n  z-index: 1000;\n  animation: fadeOut 3s forwards;\n}\n\n@keyframes fadeOut {\n  0% {\n    opacity: 1;\n  }\n  90% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n\n.complete-btn {\n  background-color: green;\n  color: white;\n  border: none;\n  padding: 5px 10px;\n \n  border-radius: 5px;\n  cursor: pointer;\n}\n\n.complete-btn:hover {\n  background-color: darkgreen; /* Optional hover effect */\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todo/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initApp: () => (/* binding */ initApp),\n/* harmony export */   renderAllProjects: () => (/* binding */ renderAllProjects)\n/* harmony export */ });\n/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ \"./src/dom.js\");\n\n\n\nconst TODOS_KEY = 'todos';\nconst PROJECTS_KEY = 'projects';\n\n//storage control\nlet todos = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.loadFromLocalStorage)(TODOS_KEY) || [];\nlet projects = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.loadFromLocalStorage)(PROJECTS_KEY) || [];\n\ntodos = todos.map(function (todo) {\n  return {\n    title: todo.title,\n    description: todo.description,\n    date: todo.date,\n    priority: todo.priority,\n    edit: function (newTitle, newDescription) {\n      this.title = newTitle;\n      this.description = newDescription;\n    },\n    complete: function () {\n      console.log('Task \"' + this.title + '\" completed!');\n    }\n  };\n});\n\nprojects = projects.map(function (project) {\n  return {\n    name: project.name,\n    todos: project.todos || [],\n    addTodo: function (todo) {\n      this.todos.push(todo);\n    }\n  };\n});\n\nfunction renderDashboard() {\n  const appContainer = document.getElementById('app');\n\n  const existingDashboard = document.getElementById('dashboard');\n  if (existingDashboard) {\n    existingDashboard.remove();\n  }\n\n  const dashboard = document.createElement('div');\n  dashboard.id = 'dashboard';\n\n  todos.forEach(function (todo, index) {\n    const todoElement = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.renderTodo)(\n      todo,\n      function (updatedTodo) {\n        todos[index] = updatedTodo;\n        (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.saveToLocalStorage)(TODOS_KEY, todos); //save after edit to stor\n        renderDashboard();\n      },\n      function () {\n        todos.splice(index, 1);\n        (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.saveToLocalStorage)(TODOS_KEY, todos);\n        renderDashboard();\n      },\n      function () {\n        todos.splice(index, 1);\n        (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.saveToLocalStorage)(TODOS_KEY, todos);\n        renderDashboard();\n      }\n    );\n    dashboard.appendChild(todoElement);\n  });\n\n  appContainer.appendChild(dashboard);\n}\n\nfunction renderAllProjects(container) {\n  container.innerHTML = '';\n\n  if (projects.length === 0) {\n    const message = document.createElement('p');\n    message.textContent = 'No projects available. Create one to get started!';\n    message.style.textAlign = 'center';\n    message.style.color = '#777';\n    container.appendChild(message);\n    return;\n  }\n\n  projects.forEach(function (project) {\n    const projectElement = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.renderProject)(project);\n\n    const todoForm = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.renderTodoForm)(function (todoData) {\n      const newTodo = {\n        title: todoData.title,\n        description: todoData.description,\n        dueDate: todoData.dueDate,\n        priority: todoData.priority\n      };\n      project.addTodo(newTodo);\n\n      (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.saveToLocalStorage)(PROJECTS_KEY, projects);\n      renderAllProjects(container);\n    });\n    projectElement.appendChild(todoForm);\n\n    container.appendChild(projectElement);\n  });\n}\n\nfunction initApp() {\n  const appContainer = document.getElementById('app');\n  appContainer.innerHTML = '';\n  const topBar = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.renderTopBar)(function () {\n    const modal = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.renderTodoModal)(function (todoData) {\n      todos.push(todoData);\n\n      (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.saveToLocalStorage)(TODOS_KEY, todos);\n      renderDashboard();\n    });\n    document.body.appendChild(modal);\n  });\n\n  appContainer.appendChild(topBar);\n  renderDashboard(); //render\n}\n\n\n//# sourceURL=webpack://todo/./src/app.js?");

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadFromLocalStorage: () => (/* binding */ loadFromLocalStorage),\n/* harmony export */   renderProject: () => (/* binding */ renderProject),\n/* harmony export */   renderProjectForm: () => (/* binding */ renderProjectForm),\n/* harmony export */   renderTodo: () => (/* binding */ renderTodo),\n/* harmony export */   renderTodoForm: () => (/* binding */ renderTodoForm),\n/* harmony export */   renderTodoModal: () => (/* binding */ renderTodoModal),\n/* harmony export */   renderTopBar: () => (/* binding */ renderTopBar),\n/* harmony export */   saveToLocalStorage: () => (/* binding */ saveToLocalStorage),\n/* harmony export */   showCompletionPopup: () => (/* binding */ showCompletionPopup)\n/* harmony export */ });\nfunction renderProject(project) {\n  const projectDiv = document.createElement('div');\n  projectDiv.classList.add('project');\n  projectDiv.innerHTML = `<h2>${project.name}</h2>`;\n\n  project.todos.forEach(todo => {\n    const todoDiv = document.createElement('div');\n    todoDiv.classList.add('todo');\n    todoDiv.innerHTML = `\n      <h3>${todo.title}</h3>\n      <p>${todo.description}</p>\n      <p>Due: ${todo.dueDate}</p>\n      <p>Priority: ${todo.priority}</p>\n    `;\n    projectDiv.appendChild(todoDiv);\n  });\n\n  return projectDiv;\n}\n\nfunction renderTodoForm(onSubmitCallback) {\n  const form = document.createElement('form');\n  form.innerHTML = `\n    <input type=\"text\" id=\"todo-title\" placeholder=\"Title\" required />\n    <input type=\"text\" id=\"todo-description\" placeholder=\"Description\" />\n    <input type=\"date\" id=\"todo-due-date\" required />\n    <select id=\"todo-priority\">\n      <option value=\"Low\">Low</option>\n      <option value=\"Medium\">Medium</option>\n      <option value=\"High\">High</option>\n    </select>\n    <button type=\"submit\">Add Todo</button>\n  `;\n\n  form.addEventListener('submit', (e) => {\n    e.preventDefault();\n    const title = document.getElementById('todo-title').value;\n    const description = document.getElementById('todo-description').value;\n    const dueDate = document.getElementById('todo-due-date').value;\n    const priority = document.getElementById('todo-priority').value;\n    onSubmitCallback({ title, description, dueDate, priority });\n    form.reset();\n  });\n\n  return form;\n}\n\nfunction renderProjectForm(onSubmitCallback) {\n  const form = document.createElement('form');\n  form.innerHTML = `\n    <input type=\"text\" id=\"project-name\" placeholder=\"Project Name\" required />\n    <button type=\"submit\">Add Project</button>\n  `;\n\n  form.addEventListener('submit', (e) => {\n    e.preventDefault();\n    const projectName = document.getElementById('project-name').value;\n    onSubmitCallback(projectName);\n    form.reset();\n  });\n\n  return form;\n}\n\n//topbar\nfunction renderTopBar(onCreateTodoClick) {\n  const topBar = document.createElement('div');\n  topBar.classList.add('top-bar'); \n\n\n  const title = document.createElement('div');\n  title.classList.add('top-bar-title'); \n  title.textContent = 'TODO List';\n\n  const createButton = document.createElement('button');\n  createButton.classList.add('create-todo-btn');\n  createButton.textContent = 'Create TODO';\n\n  createButton.addEventListener('click', () => {\n    onCreateTodoClick();\n  });\n\n  topBar.appendChild(title);\n  topBar.appendChild(createButton);\n\n  return topBar;\n}\n\nfunction renderTodoModal(onSubmitCallback) {\n  const modal = document.createElement('div');\n  modal.classList.add('modal');\n\n  const form = document.createElement('form');\n  form.classList.add('modal-form');\n\n  form.innerHTML = `\n    <h2>Create TODO</h2>\n    <label>Title:</label>\n    <input type=\"text\" id=\"todo-title\" placeholder=\"Title\" required />\n    <label>Description:</label>\n    <textarea id=\"todo-description\" placeholder=\"Description\"></textarea>\n    <label>Date:</label>\n    <input type=\"date\" id=\"todo-date\" required />\n    <label>Priority:</label>\n    <select id=\"todo-priority\">\n      <option value=\"Low\">Low</option>\n      <option value=\"Medium\">Medium</option>\n      <option value=\"High\">High</option>\n    </select>\n    <div class=\"button-group\">\n      <button type=\"submit\" class=\"create-btn\">Create</button>\n      <button type=\"button\" id=\"cancel-button\" class=\"cancel-btn\">Cancel</button>\n    </div>\n  `;\n  \n  //dissalow passed dates\n  const today = new Date().toISOString().split('T')[0];\n  form.querySelector('#todo-date').setAttribute('min', today);\n\n  // Sumbit\n  form.addEventListener('submit', (e) => {\n    e.preventDefault();\n    const title = document.getElementById('todo-title').value;\n    const description = document.getElementById('todo-description').value;\n    const date = document.getElementById('todo-date').value;\n    const priority = document.getElementById('todo-priority').value;\n    onSubmitCallback({ title, description, date, priority });\n    modal.remove();\n  });\n\n  form.querySelector('#cancel-button').addEventListener('click', () => {\n    modal.remove();\n  });\n\n  modal.appendChild(form);\n  return modal;\n}\n\n\nfunction renderTodo(todo, onEditCallback, onDeleteCallback, onCompleteCallback) {\n  const todoDiv = document.createElement('div');\n  todoDiv.classList.add('todo');\n\n  todoDiv.innerHTML = `\n    <h3>${todo.title}</h3>\n    <p>${todo.description}</p>\n    <p><strong>Date:</strong> ${todo.date}</p>\n    <p><strong>Priority:</strong> ${todo.priority}</p>\n    <div class=\"button-group\">\n      <button class=\"edit-btn\">Edit</button>\n      <button class=\"delete-btn\">Delete</button>\n      <button class=\"complete-btn\">Complete</button>\n    </div>\n  `;\n\n  todoDiv.querySelector('.edit-btn').onclick = () => {\n    const updatedTitle = prompt('Edit Title:', todo.title);\n    const updatedDescription = prompt('Edit Description:', todo.description);\n\n    if (updatedTitle !== null) todo.title = updatedTitle;\n    if (updatedDescription !== null) todo.description = updatedDescription;\n\n    onEditCallback(todo);\n  };\n\n  todoDiv.querySelector('.delete-btn').onclick = () => onDeleteCallback(todo);\n  todoDiv.querySelector('.complete-btn').onclick = () => {\n    showCompletionPopup();\n    onCompleteCallback(todo);\n  };\n\n  return todoDiv;\n}\n\n\n\nfunction showCompletionPopup() {\n  const popup = document.createElement('div');\n  popup.classList.add('completion-popup');\n  popup.textContent = 'Task completed!';\n\n  document.body.appendChild(popup);\n  //timer for pop up\n  setTimeout(() => {\n    popup.remove();\n  }, 3000);\n}\n\n//storage functions\nfunction saveToLocalStorage(key, data) {\n  localStorage.setItem(key, JSON.stringify(data));\n}\n\nfunction loadFromLocalStorage(key) {\n  const data = localStorage.getItem(key);\n  return data ? JSON.parse(data) : null;\n}\n\n//# sourceURL=webpack://todo/./src/dom.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.js */ \"./src/app.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n\n\n\nconst appContainer = document.createElement('div');\nappContainer.id = 'app';\ndocument.body.appendChild(appContainer);\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  const appContainer = document.createElement('div');\n  appContainer.id = 'app';\n  document.body.appendChild(appContainer);\n\n  (0,_app_js__WEBPACK_IMPORTED_MODULE_0__.initApp)();\n});\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  (0,_app_js__WEBPACK_IMPORTED_MODULE_0__.initApp)();\n});\n\n(0,_app_js__WEBPACK_IMPORTED_MODULE_0__.renderAllProjects)(appContainer);\n\n//# sourceURL=webpack://todo/./src/index.js?");

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;