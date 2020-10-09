module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cha2");


/***/ }),

/***/ "4DCN":
/***/ (function(module, exports) {

module.exports = require("redux-logger");

/***/ }),

/***/ "B6+W":
/***/ (function(module, exports) {

module.exports = require("connected-react-router");

/***/ }),

/***/ "JMOJ":
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cha2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__("rKB8");

// EXTERNAL MODULE: external "next-redux-wrapper"
var external_next_redux_wrapper_ = __webpack_require__("JMOJ");

// EXTERNAL MODULE: external "redux-logger"
var external_redux_logger_ = __webpack_require__("4DCN");

// CONCATENATED MODULE: ./lib/constants/actionTypes.ts
const APP_LOAD = 'APP_LOAD';
// CONCATENATED MODULE: ./lib/middleware.ts
 // How to use middleware in Redux:
// https://redux.js.org/advanced/middleware

const promiseMiddleware = store => next => action => {
  next(action);
};

const localStorageMiddleware = store => next => action => {
  next(action);
};

function isPromise(v) {
  return v && typeof v.then === 'function';
}


// EXTERNAL MODULE: external "connected-react-router"
var external_connected_react_router_ = __webpack_require__("B6+W");

// CONCATENATED MODULE: ./lib/reducers/commonReducer.ts

const defaultState = {
  appName: 'NextjsReduxTemplate'
};
/* harmony default export */ var commonReducer = ((state = defaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
});
// CONCATENATED MODULE: ./lib/reducer.ts



const createRootReducer = () => Object(external_redux_["combineReducers"])({
  common: commonReducer
});

/* harmony default export */ var reducer = (createRootReducer);
// CONCATENATED MODULE: ./lib/store.ts

 //import thunk from 'redux-thunk';




 // Build the middleware for intercepting and dispatching navigation actions

const myRouterMiddleware = Object(external_connected_react_router_["routerMiddleware"])(null);

const getMiddleware = () => {
  if (true) {
    return Object(external_redux_["applyMiddleware"])(myRouterMiddleware, promiseMiddleware, localStorageMiddleware);
  } else {}
};

// export const store = (initialState = {}) => {
//   //return createStore(createRootReducer(), initialState, getMiddleware());
//   return createStore(createRootReducer(), initialState);
// };
// create a makeStore function
const makeStore = context => Object(external_redux_["createStore"])(reducer()); // export an assembled wrapper


const wrapper = Object(external_next_redux_wrapper_["createWrapper"])(makeStore, {
  debug: true
});
// CONCATENATED MODULE: ./pages/_app.tsx
var __jsx = external_react_default.a.createElement;



const _App = ({
  Component,
  pageProps
}) => __jsx(Component, pageProps);

/* harmony default export */ var _app = __webpack_exports__["default"] = (wrapper.withRedux(_App));

/***/ }),

/***/ "rKB8":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ })

/******/ });