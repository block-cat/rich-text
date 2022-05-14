module.exports =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./forum.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./forum.js":
/*!******************!*\
  !*** ./forum.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_forum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/forum */ "./src/forum/index.js");
/* empty/unused harmony star reexport */

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inheritsLoose; });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  Object(_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./src/forum/components/HiddenItemsDropdown.js":
/*!*****************************************************!*\
  !*** ./src/forum/components/HiddenItemsDropdown.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HiddenItemsDropdown; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_components_Dropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/Dropdown */ "flarum/components/Dropdown");
/* harmony import */ var flarum_components_Dropdown__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Dropdown__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/helpers/icon */ "flarum/helpers/icon");
/* harmony import */ var flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _SafariModalHack__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SafariModalHack */ "./src/forum/components/SafariModalHack.js");





var HiddenItemsDropdown = /*#__PURE__*/function (_Dropdown) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(HiddenItemsDropdown, _Dropdown);

  function HiddenItemsDropdown() {
    return _Dropdown.apply(this, arguments) || this;
  }

  HiddenItemsDropdown.initAttrs = function initAttrs(attrs) {
    attrs.buttonClassName = 'Button Button--icon Button--link Button--menuDropdown';
  };

  var _proto = HiddenItemsDropdown.prototype;

  _proto.oninit = function oninit(vnode) {
    _Dropdown.prototype.oninit.call(this, vnode);

    this.state = this.attrs.state;
  };

  _proto.oncreate = function oncreate(vnode) {
    var _this = this;

    _Dropdown.prototype.oncreate.call(this, vnode);

    this.$().on('click', function (e) {
      if ($('.App').is('.mobile-safari')) {
        // Mobile Safari doesn't support fixed items
        // So, we wrap them in a modal.
        app.modal.show(_SafariModalHack__WEBPACK_IMPORTED_MODULE_3__["default"], {
          title: _this.attrs.tooltip,
          vnodeContent: _this.attrs.buttons.map(function (button) {
            return button;
          })
        });
        e.stopPropagation();
      }
    });
    this.$('[data-toggle="tooltip"]').tooltip();
  };

  _proto.getButtonContent = function getButtonContent(children) {
    return m("span", {
      "data-toggle": "tooltip",
      title: this.attrs.tooltip
    }, flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_2___default()(this.attrs.icon));
  };

  _proto.getMenu = function getMenu(items) {
    return m("ul", {
      className: 'Dropdown-menu dropdown-menu AlignText'
    }, this.attrs.buttons);
  };

  return HiddenItemsDropdown;
}(flarum_components_Dropdown__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/forum/components/SafariModalHack.js":
/*!*************************************************!*\
  !*** ./src/forum/components/SafariModalHack.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SafariModalHack; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/components/Modal */ "flarum/common/components/Modal");
/* harmony import */ var flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_1__);



var SafariModalHack = /*#__PURE__*/function (_Modal) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(SafariModalHack, _Modal);

  function SafariModalHack() {
    return _Modal.apply(this, arguments) || this;
  }

  var _proto = SafariModalHack.prototype;

  _proto.className = function className() {
    return 'LoadingModal Modal--small';
  };

  _proto.title = function title() {
    return this.attrs.title;
  };

  _proto.oncreate = function oncreate(vnode) {
    _Modal.prototype.oncreate.call(this, vnode);

    this.$('.CommandButton').on('click', function () {
      app.modal.close();
    });
  };

  _proto.content = function content() {
    var onsubmit = this.attrs.onsubmit ? this.attrs.onsubmit.bind(this) : function () {};
    return m("div", {
      className: "Modal-body"
    }, m("form", {
      className: "Form",
      onsubmit: onsubmit
    }, this.attrs.vnodeContent));
  };

  return SafariModalHack;
}(flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/forum/index.js":
/*!****************************!*\
  !*** ./src/forum/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/extend */ "flarum/extend");
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/Button */ "flarum/components/Button");
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/utils/ItemList */ "flarum/utils/ItemList");
/* harmony import */ var flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_components_TextEditor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/components/TextEditor */ "flarum/components/TextEditor");
/* harmony import */ var flarum_components_TextEditor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_components_TextEditor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_HiddenItemsDropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/HiddenItemsDropdown */ "./src/forum/components/HiddenItemsDropdown.js");





app.initializers.add('block-cat/rich-text', function () {
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(__webpack_require__(/*! @askvortsov-rich-text */ "@askvortsov-rich-text").components.ProseMirrorMenu.prototype, 'items', function (items) {
    var state = this.attrs.state; // console.log(state);
    // state.editorView._root.defaultView.app.composer.body.attrs.post.editedContent = ' TikTak';
    // state.editorView._root.defaultView.app.composer.editor.attrs.value = ' TikTak';

    if (items.has('code')) {
      items.remove('code');
    }

    var buttons = new flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_2___default.a();
    var textEditor = app.session.user.preferences().useRichTextEditor ? '.ProseMirror.FormControl.Composer-flexible.TextEditor-editor.Post-body' : '';
    buttons.add('center', flarum_components_Button__WEBPACK_IMPORTED_MODULE_1___default.a.component({
      className: 'Button Button--icon Button--link',
      icon: 'fas fa-align-center',
      onclick: click.bind(this, textEditor, 'center')
    }));
    buttons.add('right', flarum_components_Button__WEBPACK_IMPORTED_MODULE_1___default.a.component({
      className: 'Button Button--icon Button--link',
      icon: 'fas fa-align-right',
      onclick: click.bind(this, textEditor, 'right')
    }));
    buttons.add('justify', flarum_components_Button__WEBPACK_IMPORTED_MODULE_1___default.a.component({
      className: 'Button Button--icon Button--link',
      icon: 'fas fa-align-justify',
      onclick: click.bind(this, textEditor, 'justify')
    }));
    items.add('text_align', _components_HiddenItemsDropdown__WEBPACK_IMPORTED_MODULE_4__["default"].component({
      type: 'text_align',
      icon: 'fas fa-align-left',
      tooltip: 'Select text align',
      state: state,
      buttons: buttons.toArray()
    }), 70);
  });
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(__webpack_require__(/*! @askvortsov-rich-text */ "@askvortsov-rich-text").components.ProseMirrorMenu.prototype, 'hiddenItems', function (items) {
    var state = this.attrs.state;
    var modifierKey = this.modifierKey;
    items.add('code', __webpack_require__(/*! @askvortsov-rich-text */ "@askvortsov-rich-text").components.MarkButton.component({
      type: 'code',
      icon: 'fas fa-code',
      tooltip: app.translator.trans('askvortsov-rich-text.forum.composer.code_tooltip', {
        modifierKey: modifierKey
      }),
      state: state,
      mark: state.getSchema().marks.code
    }), 1);
  });
});

function click(textarea, align, e) {
  // var selectedText = '';
  // var caretPosition = 0;
  // var childContent = '';
  // if (window.getSelection) {
  //   selectedText = window.getSelection().toString();
  //   caretPosition = window.getSelection().anchorOffset;
  //   childContent = window.getSelection().anchorNode.parentElement.innerHTML;
  // } else if (document.getSelection) {
  //   selectedText = document.getSelection().toString();
  //   caretPosition = document.getSelection().anchorOffset;
  //   childContent = document.getSelection().anchorNode.parentElement.innerHTML;
  // }
  // // console.log(childContent);
  // // console.log(caretPosition);
  // let arrayLen = $(textarea)[0].children.length;
  // let elements = $(textarea)[0].children;
  // for(let i = 0; i < arrayLen; i++) {
  //   if (elements[i].outerText.search(selectedText) !== -1 && elements[i].outerText === childContent) {
  //     if (elements[i].outerText.search(selectedText) == caretPosition) {
  //       // to add bbcode
  //       console.log(elements[i].outerText.search(selectedText));
  //     } else if (elements[i].outerText.search(selectedText) == caretPosition - selectedText.length && elements[i].outerText === childContent) {
  //       // to add bbcode
  //       console.log(elements[i].outerText.search(selectedText));
  //     } else if (elements[i].innerHTML === childContent) {
  //       let start = elements[i].innerHTML.slice(0, caretPosition);
  //       let end = elements[i].innerHTML.slice(caretPosition);
  //       elements[i].innerHTML = start + 'dsdsd' + end;
  //     }
  //   }
  // }
  // console.log($(textarea)[0].children);
  // console.log($(textarea)[0].children.length);
  $(textarea).html() == '<p data-before="Write a Post..." class="placeholder"><br></p>' ? $(textarea).html('[' + align + ']  [/' + align + ']') : $(textarea).append('[' + align + ']  [/' + align + ']');
}

/***/ }),

/***/ "@askvortsov-rich-text":
/*!************************************************************!*\
  !*** external "flarum.extensions['askvortsov-rich-text']" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.extensions['askvortsov-rich-text'];

/***/ }),

/***/ "flarum/common/components/Modal":
/*!****************************************************************!*\
  !*** external "flarum.core.compat['common/components/Modal']" ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/components/Modal'];

/***/ }),

/***/ "flarum/components/Button":
/*!**********************************************************!*\
  !*** external "flarum.core.compat['components/Button']" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Button'];

/***/ }),

/***/ "flarum/components/Dropdown":
/*!************************************************************!*\
  !*** external "flarum.core.compat['components/Dropdown']" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Dropdown'];

/***/ }),

/***/ "flarum/components/TextEditor":
/*!**************************************************************!*\
  !*** external "flarum.core.compat['components/TextEditor']" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/TextEditor'];

/***/ }),

/***/ "flarum/extend":
/*!***********************************************!*\
  !*** external "flarum.core.compat['extend']" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['extend'];

/***/ }),

/***/ "flarum/helpers/icon":
/*!*****************************************************!*\
  !*** external "flarum.core.compat['helpers/icon']" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['helpers/icon'];

/***/ }),

/***/ "flarum/utils/ItemList":
/*!*******************************************************!*\
  !*** external "flarum.core.compat['utils/ItemList']" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['utils/ItemList'];

/***/ })

/******/ });
//# sourceMappingURL=forum.js.map