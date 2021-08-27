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

/***/ "./webpack/module_basket.js":
/*!**********************************!*\
  !*** ./webpack/module_basket.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"basket\": () => (/* binding */ basket)\n/* harmony export */ });\nlet basket = {\r\n    props: [\"isVisible\", \"cart\", \"totalPrice\"],\r\n    template: `\r\n            <div class=\"shopping_cart\" v-show=\"isVisible\">\r\n                <div class=\"table_container\">\r\n                    <table class=\"table\">\r\n                        <thead>\r\n                        <tr>\r\n                            <th scope=\"col\">#</th>\r\n                            <th scope=\"col\">Item</th>\r\n                            <th scope=\"col\">Price</th>\r\n                            <th scope=\"col\">Delete</th>\r\n                        </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                        <tr v-for=\"(item, index) in cart\">\r\n                            <th scope=\"row\">{{ index + 1 }}</th>\r\n                            <td>{{ item.product_name }}</td>\r\n                            <td>{{ item.price }}$</td>\r\n                            <td>\r\n                                <button class=\"del_btn btn-primary\" @click=\"$emit('remove-item', index)\">Delete</button>\r\n                            </td>\r\n                        </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n                <p v-show=\"totalPrice\">Total price: {{ totalPrice }}$</p>\r\n            </div>\r\n    `\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://advanced_js/./webpack/module_basket.js?");

/***/ }),

/***/ "./webpack/module_good_item.js":
/*!*************************************!*\
  !*** ./webpack/module_good_item.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"goods_item\": () => (/* binding */ goods_item)\n/* harmony export */ });\nlet goods_item = {\r\n    props: [\"good\"],\r\n    template: `\r\n        <div class=\"card\">\r\n            <img src=\"../img/default_image_product.png\" class=\"card-img-top\" alt=\"product\">\r\n            <div class=\"card-body\">\r\n                <h5 class=\"card-title\">{{ good.product_name }}</h5>\r\n                <p class=\"card-text\">Price: {{ good.price }}</p>\r\n                <a class=\"btn btn-primary\" @click=\"$emit('add-item', good)\">Add to cart</a>\r\n            </div>\r\n        </div>\r\n    `\r\n}\n\n//# sourceURL=webpack://advanced_js/./webpack/module_good_item.js?");

/***/ }),

/***/ "./webpack/module_goods_list.js":
/*!**************************************!*\
  !*** ./webpack/module_goods_list.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"goods_list\": () => (/* binding */ goods_list)\n/* harmony export */ });\nlet goods_list = {\r\n    props: ['goods', 'addFunk'],\r\n    template: `\r\n       <div class=\"goods-list\">\r\n        <goods-item v-for=\"good in goods\" :good=\"good\" @add-item=\"addFunk\"></goods-item>\r\n       </div>\r\n    `\r\n}\n\n//# sourceURL=webpack://advanced_js/./webpack/module_goods_list.js?");

/***/ }),

/***/ "./webpack/module_search.js":
/*!**********************************!*\
  !*** ./webpack/module_search.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"search\": () => (/* binding */ search)\n/* harmony export */ });\nlet search ={\r\n    props: ['searchLine'],\r\n    template: `\r\n        <div>\r\n            <input type=\"text\" class=\"goods-search\" v-bind:value=\"searchLine\" v-on:input=\"$emit('input', $event.target.value)\">\r\n            <button class=\"search-button cart-button btn btn-outline-success me-2\" type=\"button\"\r\n                    @click=\"$emit('filter-goods')\">Искать\r\n            </button>\r\n        </div>\r\n    `\r\n}\n\n//# sourceURL=webpack://advanced_js/./webpack/module_search.js?");

/***/ }),

/***/ "./webpack/script.js":
/*!***************************!*\
  !*** ./webpack/script.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _module_basket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module_basket */ \"./webpack/module_basket.js\");\n/* harmony import */ var _module_good_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module_good_item */ \"./webpack/module_good_item.js\");\n/* harmony import */ var _module_goods_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./module_goods_list */ \"./webpack/module_goods_list.js\");\n/* harmony import */ var _module_search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./module_search */ \"./webpack/module_search.js\");\n\r\n\r\n\r\n\r\n\r\nconst app = new Vue({\r\n    el: '#app',\r\n    components: {\r\n        \"basket\": _module_basket__WEBPACK_IMPORTED_MODULE_0__.basket,\r\n        \"goods-item\": _module_good_item__WEBPACK_IMPORTED_MODULE_1__.goods_item,\r\n        \"goods-list\": _module_goods_list__WEBPACK_IMPORTED_MODULE_2__.goods_list,\r\n        \"search\": _module_search__WEBPACK_IMPORTED_MODULE_3__.search\r\n    },\r\n    data: {\r\n        cart: [],\r\n        goods: [],\r\n        filteredGoods: [],\r\n        searchLine: '',\r\n        totalPrice: 0,\r\n        isVisibleCart: false\r\n    },\r\n    methods: {\r\n        makeGETRequest(url) {\r\n            return new Promise((resolve, reject) => {\r\n                let xhr;\r\n\r\n                if (window.XMLHttpRequest) {\r\n                    xhr = new XMLHttpRequest();\r\n                } else if (window.ActiveXObject) {\r\n                    xhr = new ActiveXObject(\"Microsoft.XMLHTTP\");\r\n                }\r\n\r\n                xhr.onreadystatechange = function () {\r\n                    if (xhr.readyState === 4 && xhr.status === 200) {\r\n                        resolve(xhr.responseText);\r\n                    } else if (xhr.readyState === 4 && xhr.status !== 200) {\r\n                        reject(xhr.status);\r\n                    }\r\n                }\r\n\r\n                xhr.open('GET', url, true);\r\n                xhr.send();\r\n            })\r\n        },\r\n        makePOSTRequest(url, data) {\r\n            return new Promise((resolve, reject) => {\r\n                let xhr;\r\n\r\n                if (window.XMLHttpRequest) {\r\n                    xhr = new XMLHttpRequest();\r\n                } else if (window.ActiveXObject) {\r\n                    xhr = new ActiveXObject(\"Microsoft.XMLHTTP\");\r\n                }\r\n\r\n                xhr.onreadystatechange = function () {\r\n                    if (xhr.readyState === 4 && xhr.status === 200) {\r\n                        resolve(xhr.responseText);\r\n                    }\r\n                }\r\n\r\n                xhr.open('POST', url, true);\r\n                xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');\r\n                data = JSON.stringify(data)\r\n                xhr.send(data);\r\n            })\r\n        },\r\n        makeDELETERequest(url, data) {\r\n            return new Promise((resolve, reject) => {\r\n                let xhr;\r\n\r\n                if (window.XMLHttpRequest) {\r\n                    xhr = new XMLHttpRequest();\r\n                } else if (window.ActiveXObject) {\r\n                    xhr = new ActiveXObject(\"Microsoft.XMLHTTP\");\r\n                }\r\n\r\n                xhr.onreadystatechange = function () {\r\n                    if (xhr.readyState === 4 && xhr.status === 200) {\r\n                        resolve(xhr.responseText);\r\n                    }\r\n                }\r\n\r\n                xhr.open('DELETE', url, true);\r\n                xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');\r\n                data = JSON.stringify(data)\r\n                xhr.send(data);\r\n            })\r\n        },\r\n        FilteredGoods() {\r\n            const regexp = new RegExp(this.searchLine, 'i');\r\n            this.filteredGoods = this.goods.filter(good =>\r\n                regexp.test(good.product_name));\r\n        },\r\n        addItem(item) {\r\n            this.cart.push(item)\r\n            this.totalPrice += item.price\r\n            this.makePOSTRequest(`/addToCart`, item)\r\n                .then((resp) => {\r\n                    console.log(resp)\r\n                })\r\n        },\r\n        removeItem(index) {\r\n            this.makeDELETERequest(`/deleteFromCart`, this.cart[index])\r\n                .then((resp) => {\r\n                    console.log(resp)\r\n                });\r\n            this.totalPrice -= this.cart[index].price\r\n            this.cart = [...this.cart.slice(0, index), ...this.cart.slice(index + 1)];\r\n        }\r\n    },\r\n    mounted() {\r\n        this.makeGETRequest(`/catalogData`)\r\n            .then((goods) => {\r\n                this.goods = JSON.parse(goods);\r\n                this.filteredGoods = JSON.parse(goods);\r\n            })\r\n            .catch((error) => {\r\n                console.log(error)\r\n            });\r\n    }\r\n});\n\n//# sourceURL=webpack://advanced_js/./webpack/script.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./webpack/script.js");
/******/ 	
/******/ })()
;