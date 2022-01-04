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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
module.exports = __webpack_require__(6);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

Nova.booting(function (Vue, router, store) {
  Vue.component('nova-generic-oauth', __webpack_require__(2));
});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(3)
/* script */
var __vue_script__ = __webpack_require__(4)
/* template */
var __vue_template__ = __webpack_require__(5)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/components/Tool.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-68ff5483", Component.options)
  } else {
    hotAPI.reload("data-v-68ff5483", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 3 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["resourceName", "resourceId", "panel"],

  mounted: function mounted() {
    //
  },
  data: function data() {
    return {
      loading: false
    };
  },

  computed: {
    webOathUrl: function webOathUrl() {
      return this.panel.fields[0].web_oath_url;
    },
    oathResults: function oathResults() {
      return this.panel.fields[0].oath_results;
    }
  },
  methods: {
    onSubmitForm: function onSubmitForm() {
      alert("on submit form");
    }
  }
});

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "div",
      { staticClass: "md:grid md:grid-cols-3 md:gap-6" },
      [
        _c("div", { staticClass: "md:col-span-1 flex justify-between" }, [
          _c("div", { staticClass: "px-4 sm:px-0" }, [
            _c("h3", { staticClass: "text-lg font-medium text-gray-900" }, [
              _vm._v(
                "\n          " +
                  _vm._s(_vm.__("FreeeとAPI連携設定")) +
                  "\n        "
              )
            ]),
            _vm._v(" "),
            _c("p", { staticClass: "mt-1 text-sm text-gray-600" }, [
              _vm._v(
                '\n          "Freeeとの連携を設定"をクリックしてFreeeへのAPI許可を行うことで、顧客情報をFreeeへ連携することが出来ます。行政侍からFreeeへの連携のみですので、Freeeで作られた取引先は行政侍には作られませんのでご注意ください。\n        '
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "px-4 sm:px-0" })
        ]),
        _vm._v(" "),
        _c(
          "loading-card",
          { staticClass: "md:col-span-2", attrs: { loading: _vm.loading } },
          [
            _c("div", { staticClass: "mt-5 md:mt-0 md:col-span-2" }, [
              _c(
                "div",
                {
                  staticClass:
                    "\n            px-4\n            py-5\n            bg-white\n            sm:p-6\n            shadow\n            sm:rounded-tl-md sm:rounded-tr-md\n          "
                },
                [
                  _c("div", { staticClass: "grid grid-cols-6 gap-6" }, [
                    _c("div", { staticClass: "col-span-6 sm:col-span-4" }, [
                      !_vm.oathResults
                        ? _c("p", [
                            _vm._v(
                              "\n                " +
                                _vm._s(_vm.__("Freeeとの連携は未設定です。")) +
                                "\n              "
                            )
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.oathResults
                        ? _c("p", [
                            _vm._v(
                              "\n                " +
                                _vm._s(
                                  _vm.__(
                                    "Freeeとの連携設定済みです。顧客情報がFreeeへ連携されてない様でしたら、もう一度連携設定を行い、問題が解決しない様であればサポートまでお問い合わせください。"
                                  )
                                ) +
                                "\n              "
                            )
                          ])
                        : _vm._e()
                    ])
                  ])
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass:
                    "\n            flex\n            items-center\n            justify-end\n            px-4\n            py-3\n            bg-gray-50\n            text-right\n            sm:px-6\n            shadow\n            sm:rounded-bl-md sm:rounded-br-md\n          "
                },
                [
                  _c(
                    "a",
                    {
                      staticClass:
                        "\n              inline-flex\n              items-center\n              px-4\n              py-2\n              bg-gray-800\n              border border-transparent\n              rounded-md\n              font-semibold\n              text-xs text-white\n              uppercase\n              tracking-widest\n              hover:bg-gray-700\n              active:bg-gray-900\n              focus:outline-none\n              focus:border-gray-900\n              focus:ring\n              focus:ring-gray-300\n              transition\n            ",
                      attrs: { href: _vm.webOathUrl }
                    },
                    [
                      _vm._v(
                        "\n            " +
                          _vm._s(_vm.__("Freeeとの連携を設定")) +
                          "\n          "
                      )
                    ]
                  )
                ]
              )
            ])
          ]
        )
      ],
      1
    ),
    _vm._v(" "),
    _vm._m(0)
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "hidden sm:block" }, [
      _c("div", { staticClass: "py-8" }, [
        _c("div", { staticClass: "border-t border-gray-200" })
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-68ff5483", module.exports)
  }
}

/***/ }),
/* 6 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);