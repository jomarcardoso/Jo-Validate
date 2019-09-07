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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: isNumber, isFunction, isString, isEmptyString, isArray, isPhone, isCep, isCpf, isDate, isDateAbove, isDateBelow, isDateBetween, isEmail, isImageFile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _is_number__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is-number */ \"./src/is-number.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"isNumber\", function() { return _is_number__WEBPACK_IMPORTED_MODULE_0__[\"isNumber\"]; });\n\n/* harmony import */ var _is_function__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./is-function */ \"./src/is-function.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"isFunction\", function() { return _is_function__WEBPACK_IMPORTED_MODULE_1__[\"isFunction\"]; });\n\n/* harmony import */ var _is_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./is-string */ \"./src/is-string.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"isString\", function() { return _is_string__WEBPACK_IMPORTED_MODULE_2__[\"isString\"]; });\n\n/* harmony import */ var _is_emptystring__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./is-emptystring */ \"./src/is-emptystring.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"isEmptyString\", function() { return _is_emptystring__WEBPACK_IMPORTED_MODULE_3__[\"isEmptyString\"]; });\n\n/* harmony import */ var _is_array__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./is-array */ \"./src/is-array.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"isArray\", function() { return _is_array__WEBPACK_IMPORTED_MODULE_4__[\"isArray\"]; });\n\n/* harmony import */ var _is_phone__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./is-phone */ \"./src/is-phone.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"isPhone\", function() { return _is_phone__WEBPACK_IMPORTED_MODULE_5__[\"isPhone\"]; });\n\n/* harmony import */ var _is_cep__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./is-cep */ \"./src/is-cep.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"isCep\", function() { return _is_cep__WEBPACK_IMPORTED_MODULE_6__[\"isCep\"]; });\n\n/* harmony import */ var _is_cpf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./is-cpf */ \"./src/is-cpf.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"isCpf\", function() { return _is_cpf__WEBPACK_IMPORTED_MODULE_7__[\"isCpf\"]; });\n\n/* harmony import */ var _is_date__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./is-date */ \"./src/is-date.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"isDate\", function() { return _is_date__WEBPACK_IMPORTED_MODULE_8__[\"isDate\"]; });\n\n/* harmony import */ var _is_dateabove__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./is-dateabove */ \"./src/is-dateabove.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"isDateAbove\", function() { return _is_dateabove__WEBPACK_IMPORTED_MODULE_9__[\"isDateAbove\"]; });\n\n/* harmony import */ var _is_datebelow__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./is-datebelow */ \"./src/is-datebelow.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"isDateBelow\", function() { return _is_datebelow__WEBPACK_IMPORTED_MODULE_10__[\"isDateBelow\"]; });\n\n/* harmony import */ var _is_datebetween__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./is-datebetween */ \"./src/is-datebetween.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"isDateBetween\", function() { return _is_datebetween__WEBPACK_IMPORTED_MODULE_11__[\"isDateBetween\"]; });\n\n/* harmony import */ var _is_email__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./is-email */ \"./src/is-email.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"isEmail\", function() { return _is_email__WEBPACK_IMPORTED_MODULE_12__[\"isEmail\"]; });\n\n/* harmony import */ var _is_imgfile__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./is-imgfile */ \"./src/is-imgfile.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"isImageFile\", function() { return _is_imgfile__WEBPACK_IMPORTED_MODULE_13__[\"isImageFile\"]; });\n\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/is-array.js":
/*!*************************!*\
  !*** ./src/is-array.js ***!
  \*************************/
/*! exports provided: isArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isArray\", function() { return isArray; });\n/**\r\n * @param {*} any\r\n * @return {boolean}\r\n * @description \"isArray\" say more than \"Array.isArray(any);\"\r\n */\r\nfunction isArray(any) {\r\n    return Array.isArray(any);\r\n}\r\n\n\n//# sourceURL=webpack:///./src/is-array.js?");

/***/ }),

/***/ "./src/is-cep.js":
/*!***********************!*\
  !*** ./src/is-cep.js ***!
  \***********************/
/*! exports provided: isCep */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isCep\", function() { return isCep; });\n/**\r\n * @param {string}\r\n * @return {boolean}\r\n */\r\nfunction isCep(_a) {\r\n    var length = (_a === void 0 ? '' : _a).length;\r\n    return length === 8;\r\n}\r\n\n\n//# sourceURL=webpack:///./src/is-cep.js?");

/***/ }),

/***/ "./src/is-cpf.js":
/*!***********************!*\
  !*** ./src/is-cpf.js ***!
  \***********************/
/*! exports provided: isCpf */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isCpf\", function() { return isCpf; });\n/**\r\n * @param {string}\r\n * @returns {boolean}\r\n */\r\nfunction isCpf(_a) {\r\n    var length = (_a === void 0 ? '' : _a).length;\r\n    return length === 11;\r\n}\r\n\n\n//# sourceURL=webpack:///./src/is-cpf.js?");

/***/ }),

/***/ "./src/is-date.js":
/*!************************!*\
  !*** ./src/is-date.js ***!
  \************************/
/*! exports provided: isDate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isDate\", function() { return isDate; });\n/**\r\n * @param {string} string\r\n * @returns {boolean}\r\n */\r\nfunction isDate(string) {\r\n    // TODO: no momento não valida se o dia existe\r\n    return (String(new Date(string)) !== 'Invalid Date');\r\n}\r\n\n\n//# sourceURL=webpack:///./src/is-date.js?");

/***/ }),

/***/ "./src/is-dateabove.js":
/*!*****************************!*\
  !*** ./src/is-dateabove.js ***!
  \*****************************/
/*! exports provided: isDateAbove */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isDateAbove\", function() { return isDateAbove; });\n/**\r\n * @param {string} value\r\n * @param {string} limit\r\n * @returns {boolean}\r\n */\r\nfunction isDateAbove(value, limit) {\r\n    return limit < value;\r\n}\r\n\n\n//# sourceURL=webpack:///./src/is-dateabove.js?");

/***/ }),

/***/ "./src/is-datebelow.js":
/*!*****************************!*\
  !*** ./src/is-datebelow.js ***!
  \*****************************/
/*! exports provided: isDateBelow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isDateBelow\", function() { return isDateBelow; });\n/**\r\n * @param {string} value\r\n * @param {string} limit\r\n * @returns {boolean}\r\n */\r\nfunction isDateBelow(value, limit) {\r\n    return limit > value;\r\n}\r\n\n\n//# sourceURL=webpack:///./src/is-datebelow.js?");

/***/ }),

/***/ "./src/is-datebetween.js":
/*!*******************************!*\
  !*** ./src/is-datebetween.js ***!
  \*******************************/
/*! exports provided: isDateBetween */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isDateBetween\", function() { return isDateBetween; });\n/**\r\n * @param {string} value\r\n * @param {Object} options\r\n * @param {string} options.min\r\n * @param {string} options.max\r\n * @returns {boolean}\r\n */\r\nfunction isDateBetween(value, _a) {\r\n    var _b = _a === void 0 ? {} : _a, min = _b.min, max = _b.max;\r\n    var date = isDate(value) ? value : new Date(value);\r\n    if (min && (date < min))\r\n        return false;\r\n    if (max && (max < date))\r\n        return false;\r\n    return true;\r\n}\r\n\n\n//# sourceURL=webpack:///./src/is-datebetween.js?");

/***/ }),

/***/ "./src/is-email.js":
/*!*************************!*\
  !*** ./src/is-email.js ***!
  \*************************/
/*! exports provided: isEmail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isEmail\", function() { return isEmail; });\n/**\r\n * @param {string} string\r\n * @returns {boolean}\r\n */\r\nfunction isEmail(string) {\r\n    return new RegExp(/^([\\w_.\\-+])+@([\\w-]+.)+([\\w]{2,10})+$/).test(string);\r\n}\r\n\n\n//# sourceURL=webpack:///./src/is-email.js?");

/***/ }),

/***/ "./src/is-emptystring.js":
/*!*******************************!*\
  !*** ./src/is-emptystring.js ***!
  \*******************************/
/*! exports provided: isEmptyString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isEmptyString\", function() { return isEmptyString; });\n/**\r\n * @param {string} string\r\n * @return {boolean}\r\n * @description \"isEmptyString\" say more than \"string === ''\"\r\n */\r\nfunction isEmptyString(string) {\r\n    return string === '';\r\n}\r\n\n\n//# sourceURL=webpack:///./src/is-emptystring.js?");

/***/ }),

/***/ "./src/is-function.js":
/*!****************************!*\
  !*** ./src/is-function.js ***!
  \****************************/
/*! exports provided: isFunction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isFunction\", function() { return isFunction; });\n/**\r\n * @param {*} any\r\n * @return {boolean}\r\n * @description \"isFunction\" say more than typeof any === 'function'\"\r\n */\r\nfunction isFunction(any) {\r\n    return typeof any === 'function';\r\n}\r\n\n\n//# sourceURL=webpack:///./src/is-function.js?");

/***/ }),

/***/ "./src/is-imgfile.js":
/*!***************************!*\
  !*** ./src/is-imgfile.js ***!
  \***************************/
/*! exports provided: isImageFile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isImageFile\", function() { return isImageFile; });\nfunction isImageFile(anything) {\r\n    return new RegExp(/^.*\\.(jpg|JPG|png|PNG|gif|GIF|bmp|BMP|webp|WEBP)$/).test(anything);\r\n}\r\n\n\n//# sourceURL=webpack:///./src/is-imgfile.js?");

/***/ }),

/***/ "./src/is-number.js":
/*!**************************!*\
  !*** ./src/is-number.js ***!
  \**************************/
/*! exports provided: isNumber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isNumber\", function() { return isNumber; });\n/**\r\n * @param {*} any\r\n * @return {boolean}\r\n * @description \"isNumber\" say more than typeof any === 'number'\"\r\n */\r\nfunction isNumber(any) {\r\n    return Number.isInteger(any);\r\n}\r\n\n\n//# sourceURL=webpack:///./src/is-number.js?");

/***/ }),

/***/ "./src/is-phone.js":
/*!*************************!*\
  !*** ./src/is-phone.js ***!
  \*************************/
/*! exports provided: isPhone */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isPhone\", function() { return isPhone; });\n/**\r\n * @param {string}\r\n * @return {boolean}\r\n */\r\nfunction isPhone(_a) {\r\n    var length = (_a === void 0 ? '' : _a).length;\r\n    return (length === 11 || length === 10);\r\n}\r\n\n\n//# sourceURL=webpack:///./src/is-phone.js?");

/***/ }),

/***/ "./src/is-string.js":
/*!**************************!*\
  !*** ./src/is-string.js ***!
  \**************************/
/*! exports provided: isString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isString\", function() { return isString; });\n/**\r\n * @param {*} any\r\n * @return {boolean}\r\n * @description \"isString\" say more than \"typeof any === 'string'\"\r\n */\r\nfunction isString(any) {\r\n    return typeof any === 'string';\r\n}\r\n\n\n//# sourceURL=webpack:///./src/is-string.js?");

/***/ })

/******/ });