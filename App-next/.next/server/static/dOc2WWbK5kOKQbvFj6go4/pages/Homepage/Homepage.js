module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
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

/***/ "+qaO":
/***/ (function(module, exports) {



/***/ }),

/***/ "/+P4":
/***/ (function(module, exports, __webpack_require__) {

var _Object$getPrototypeOf = __webpack_require__("Bhuq");

var _Object$setPrototypeOf = __webpack_require__("TRZx");

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = _Object$setPrototypeOf ? _Object$getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || _Object$getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "/+oN":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "/HRN":
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("WGFC");


/***/ }),

/***/ "0iUn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "0vG8":
/***/ (function(module, exports) {



/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "5T7r":
/***/ (function(module, exports) {



/***/ }),

/***/ "8oGT":
/***/ (function(module, exports) {



/***/ }),

/***/ "9Jkg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("fozc");

/***/ }),

/***/ "AFLn":
/***/ (function(module, exports) {



/***/ }),

/***/ "Bhuq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("/+oN");

/***/ }),

/***/ "DfdR":
/***/ (function(module, exports) {



/***/ }),

/***/ "Fw62":
/***/ (function(module, exports) {



/***/ }),

/***/ "J40/":
/***/ (function(module, exports) {



/***/ }),

/***/ "K47E":
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "KI45":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "LTG3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Filter_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Nu0C");
/* harmony import */ var _Filter_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Filter_scss__WEBPACK_IMPORTED_MODULE_1__);



function Filter(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    id: props.inputId,
    className: props.inputClass,
    onChange: props.onCustomChange,
    name: props.inputName,
    type: props.inputType,
    value: props.inputValue,
    defaultChecked: props.checkedOption
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: props.inputId
  }, props.inputText));
}

/* harmony default export */ __webpack_exports__["a"] = (Filter);

/***/ }),

/***/ "Lc87":
/***/ (function(module, exports) {

module.exports = require("query-string");

/***/ }),

/***/ "M0eJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__("0iUn");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js
var createClass = __webpack_require__("sLSF");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js + 2 modules
var possibleConstructorReturn = __webpack_require__("MI3g");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__("a7VT");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__("Tit0");

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: external "react-router-dom"
var external_react_router_dom_ = __webpack_require__("oncg");

// EXTERNAL MODULE: external "query-string"
var external_query_string_ = __webpack_require__("Lc87");
var external_query_string_default = /*#__PURE__*/__webpack_require__.n(external_query_string_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: ./src/components/CardSection/CardItem.scss
var CardSection_CardItem = __webpack_require__("8oGT");

// CONCATENATED MODULE: ./src/components/CardSection/CardItem.js





var CardItem_CardItem = function CardItem(props) {
  return external_react_default.a.createElement("div", {
    className: "card"
  }, external_react_default.a.createElement("div", {
    className: "card-image"
  }, external_react_default.a.createElement(link_default.a, {
    as: "/movies/masked/".concat(props.movieId),
    href: "/movies/".concat(props.movieId)
  }, external_react_default.a.createElement("img", {
    src: props.imgSrc,
    onClick: function onClick() {
      return router_default.a.push("/movies/".concat(props.movieId));
    }
  }))), external_react_default.a.createElement("div", {
    className: "card-description"
  }, external_react_default.a.createElement("div", {
    className: "card-film-name"
  }, external_react_default.a.createElement("p", {
    className: "card-film-title"
  }, external_react_default.a.createElement(link_default.a, {
    as: "/movies/masked/".concat(props.movieId),
    href: "/movies/".concat(props.movieId)
  }, external_react_default.a.createElement("a", null, props.movieName))), external_react_default.a.createElement("span", {
    className: "card-vote"
  }, props.movieVote), external_react_default.a.createElement("span", {
    className: "card-year"
  }, props.movieAge)), external_react_default.a.createElement("p", {
    className: "card-genre"
  }, props.movieGenre)));
};

/* harmony default export */ var components_CardSection_CardItem = (CardItem_CardItem);
// EXTERNAL MODULE: ./src/containers/Cards/Cards.scss
var Cards_Cards = __webpack_require__("QLEQ");

// CONCATENATED MODULE: ./src/containers/Cards/Cards.js








var Cards_Cards_Cards =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(Cards, _Component);

  function Cards(props) {
    Object(classCallCheck["a" /* default */])(this, Cards);

    return Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(Cards).call(this, props));
  }

  Object(createClass["a" /* default */])(Cards, [{
    key: "render",
    value: function render() {
      var _this = this;

      var pageContent = this.props.apiData.map(function (content) {
        return external_react_default.a.createElement(components_CardSection_CardItem, {
          key: content.id,
          movieId: content.id,
          onCustomClick: _this.props.addingContentToOneCardComponent,
          imgSrc: content.poster_path,
          movieVote: content.vote_average,
          movieName: content.title,
          movieAge: content.release_date.slice(0, 4),
          movieGenre: content.genres.join(', ')
        });
      });
      return external_react_default.a.createElement("div", {
        className: "card-wrapper"
      }, pageContent);
    }
  }]);

  return Cards;
}(external_react_["Component"]);
/* harmony default export */ var containers_Cards_Cards = (Cards_Cards_Cards);
// EXTERNAL MODULE: ./src/components/NoFilmsFound/NoFilmsFound.scss
var NoFilmsFound = __webpack_require__("5T7r");

// CONCATENATED MODULE: ./src/components/NoFilmsFound/NoFilmsFound.js



function NoFilmsFound_NoFilmsFound() {
  return external_react_default.a.createElement("div", {
    className: "no-films-found-wrapper"
  }, external_react_default.a.createElement("p", {
    className: "no-films-found-text"
  }, "No films found"));
}

/* harmony default export */ var components_NoFilmsFound_NoFilmsFound = (NoFilmsFound_NoFilmsFound);
// EXTERNAL MODULE: ./src/redux/movies/movies.actions.js + 1 modules
var movies_actions = __webpack_require__("iCza");

// CONCATENATED MODULE: ./src/containers/Cards/Cards.hoc.js













var Cards_hoc_CardsHOC =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(CardsHOC, _Component);

  function CardsHOC(props) {
    Object(classCallCheck["a" /* default */])(this, CardsHOC);

    return Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(CardsHOC).call(this, props));
  }

  Object(createClass["a" /* default */])(CardsHOC, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var values = external_query_string_default.a.parse(this.props.location.search);

      if (values.limit) {
        var search = values.search,
            searchBy = values.searchBy,
            sortBy = values.sortBy;
        this.props.showApiData(search, searchBy, sortBy);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return this.props.apiData.length === 0 ? external_react_default.a.createElement(components_NoFilmsFound_NoFilmsFound, null) : external_react_default.a.createElement(containers_Cards_Cards, this.props);
    }
  }]);

  return CardsHOC;
}(external_react_["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    apiData: state.movies.apiData
  };
};

var Cards_hoc_mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    showApiData: function showApiData(searchText, searchBy, sortBy) {
      dispatch(Object(movies_actions["a" /* asyncHandlingSubmitFormAction */])(searchText, searchBy, sortBy));
    }
  };
};

/* harmony default export */ var Cards_hoc = __webpack_exports__["a"] = (Object(external_react_router_dom_["withRouter"])(Object(external_react_redux_["connect"])(mapStateToProps, Cards_hoc_mapDispatchToProps)(Cards_hoc_CardsHOC)));

/***/ }),

/***/ "MI3g":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js
var iterator = __webpack_require__("XVgq");
var iterator_default = /*#__PURE__*/__webpack_require__.n(iterator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/symbol.js
var symbol = __webpack_require__("Z7t5");
var symbol_default = /*#__PURE__*/__webpack_require__.n(symbol);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js



function typeof_typeof2(obj) { if (typeof symbol_default.a === "function" && typeof iterator_default.a === "symbol") { typeof_typeof2 = function _typeof2(obj) { return typeof obj; }; } else { typeof_typeof2 = function _typeof2(obj) { return obj && typeof symbol_default.a === "function" && obj.constructor === symbol_default.a && obj !== symbol_default.a.prototype ? "symbol" : typeof obj; }; } return typeof_typeof2(obj); }

function typeof_typeof(obj) {
  if (typeof symbol_default.a === "function" && typeof_typeof2(iterator_default.a) === "symbol") {
    typeof_typeof = function _typeof(obj) {
      return typeof_typeof2(obj);
    };
  } else {
    typeof_typeof = function _typeof(obj) {
      return obj && typeof symbol_default.a === "function" && obj.constructor === symbol_default.a && obj !== symbol_default.a.prototype ? "symbol" : typeof_typeof2(obj);
    };
  }

  return typeof_typeof(obj);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _possibleConstructorReturn; });


function _possibleConstructorReturn(self, call) {
  if (call && (typeof_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

/***/ }),

/***/ "N9n2":
/***/ (function(module, exports, __webpack_require__) {

var _Object$create = __webpack_require__("SqZg");

var setPrototypeOf = __webpack_require__("vjea");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _Object$create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "Nu0C":
/***/ (function(module, exports) {



/***/ }),

/***/ "QLEQ":
/***/ (function(module, exports) {



/***/ }),

/***/ "S5UA":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Footer_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("gdOY");
/* harmony import */ var _Footer_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Footer_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_NetflixLogo_NetflixLogo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("x9NN");




var Footer = function Footer() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "footer"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "footer-wrapper"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_NetflixLogo_NetflixLogo__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], null)));
};

/* harmony default export */ __webpack_exports__["a"] = (Footer);

/***/ }),

/***/ "SqZg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("o5io");

/***/ }),

/***/ "TRZx":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Wk4r");

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "Tit0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/create.js
var create = __webpack_require__("SqZg");
var create_default = /*#__PURE__*/__webpack_require__.n(create);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js
var set_prototype_of = __webpack_require__("TRZx");
var set_prototype_of_default = /*#__PURE__*/__webpack_require__.n(set_prototype_of);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js

function _setPrototypeOf(o, p) {
  _setPrototypeOf = set_prototype_of_default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _inherits; });


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = create_default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

/***/ }),

/***/ "UXZV":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dGr4");

/***/ }),

/***/ "WGFC":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Homepage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_containers_Header_Header_hoc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("db1C");
/* harmony import */ var _src_containers_SortingSection_SortingSection_hoc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("lEza");
/* harmony import */ var _src_containers_Cards_Cards_hoc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("M0eJ");
/* harmony import */ var _src_containers_Footer_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("S5UA");





function Homepage() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_containers_Header_Header_hoc__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_containers_SortingSection_SortingSection_hoc__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_containers_Cards_Cards_hoc__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_containers_Footer_Footer__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], null));
}

/***/ }),

/***/ "WaGi":
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__("hfKm");

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _Object$defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "Wk4r":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "XVgq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("gHn/");

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "Z7t5":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("vqFK");

/***/ }),

/***/ "ZDA2":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("iZP3");

var assertThisInitialized = __webpack_require__("K47E");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "a7VT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Bhuq");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("TRZx");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "blj3":
/***/ (function(module, exports) {



/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* global __NEXT_DATA__ */

var _interopRequireDefault = __webpack_require__("KI45");

var _stringify = _interopRequireDefault(__webpack_require__("9Jkg"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("/HRN"));

var _createClass2 = _interopRequireDefault(__webpack_require__("WaGi"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("ZDA2"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("/+P4"));

var _inherits2 = _interopRequireDefault(__webpack_require__("N9n2"));

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__("bzos");

var react_1 = __importStar(__webpack_require__("cDcd"));

var prop_types_1 = __importDefault(__webpack_require__("rf6O"));

var router_1 = __importStar(__webpack_require__("4Q3z"));

var utils_1 = __webpack_require__("p8BD");

function isLocal(href) {
  var url = url_1.parse(href, false, true);
  var origin = url_1.parse(utils_1.getLocationOrigin(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return function (href, as) {
    if (href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? utils_1.formatWithValidation(url) : url;
}

var Link =
/*#__PURE__*/
function (_react_1$Component) {
  (0, _inherits2.default)(Link, _react_1$Component);

  function Link() {
    var _this;

    (0, _classCallCheck2.default)(this, Link);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Link).apply(this, arguments)); // The function is memoized so that no extra lifecycles are needed
    // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html

    _this.formatUrls = memoizedFormatUrl(function (href, asHref) {
      return {
        href: formatUrl(href),
        as: formatUrl(asHref, true)
      };
    });

    _this.linkClicked = function (e) {
      var _e$currentTarget = e.currentTarget,
          nodeName = _e$currentTarget.nodeName,
          target = _e$currentTarget.target;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var _this$formatUrls = _this.formatUrls(_this.props.href, _this.props.as),
          href = _this$formatUrls.href,
          as = _this$formatUrls.as;

      if (!isLocal(href)) {
        // ignore click if it's outside our scope
        return;
      }

      var pathname = window.location.pathname;
      href = url_1.resolve(pathname, href);
      as = as ? url_1.resolve(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var scroll = _this.props.scroll;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      router_1.default[_this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: _this.props.shallow
      }).then(function (success) {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      }).catch(function (err) {
        if (_this.props.onError) _this.props.onError(err);
      });
    };

    return _this;
  }

  (0, _createClass2.default)(Link, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.prefetch();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if ((0, _stringify.default)(this.props.href) !== (0, _stringify.default)(prevProps.href)) {
        this.prefetch();
      }
    }
  }, {
    key: "prefetch",
    value: function prefetch() {
      if (!this.props.prefetch) return;
      if (typeof window === 'undefined') return; // Prefetch the JSON page if asked (only in the client)

      var pathname = window.location.pathname;

      var _this$formatUrls2 = this.formatUrls(this.props.href, this.props.as),
          parsedHref = _this$formatUrls2.href;

      var href = url_1.resolve(pathname, parsedHref);
      router_1.default.prefetch(href);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var children = this.props.children;

      var _this$formatUrls3 = this.formatUrls(this.props.href, this.props.as),
          href = _this$formatUrls3.href,
          as = _this$formatUrls3.as; // Deprecated. Warning shown by propType check. If the childen provided is a string (<Link>example</Link>) we wrap it in an <a> tag


      if (typeof children === 'string') {
        children = react_1.default.createElement("a", null, children);
      } // This will return the first child, if multiple are provided it will throw an error


      var child = react_1.Children.only(children);
      var props = {
        onClick: function onClick(e) {
          if (child.props && typeof child.props.onClick === 'function') {
            child.props.onClick(e);
          }

          if (!e.defaultPrevented) {
            _this2.linkClicked(e);
          }
        }
      }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

      if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
        props.href = as || href;
      } // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly.


      if (true) {
        if (props.href && typeof __NEXT_DATA__ !== 'undefined' && __NEXT_DATA__.nextExport) {
          props.href = router_1.Router._rewriteUrlForNextExport(props.href);
        }
      }

      return react_1.default.cloneElement(child, props);
    }
  }]);
  return Link;
}(react_1.Component);

if (false) { var exact, warn; }

exports.default = Link;

/***/ }),

/***/ "dGr4":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "db1C":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__("0iUn");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js
var createClass = __webpack_require__("sLSF");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js + 2 modules
var possibleConstructorReturn = __webpack_require__("MI3g");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__("a7VT");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__("Tit0");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-router-dom"
var external_react_router_dom_ = __webpack_require__("oncg");

// EXTERNAL MODULE: ./src/containers/Header/Header.scss
var Header_Header = __webpack_require__("+qaO");

// EXTERNAL MODULE: ./src/components/Header/FindYourMovie/FindYourMovie.scss
var FindYourMovie_FindYourMovie = __webpack_require__("qg/E");

// CONCATENATED MODULE: ./src/components/Header/FindYourMovie/FindYourMovie.js



var FindYourMovie_FindYourMovie_FindYourMovie = function FindYourMovie() {
  return external_react_default.a.createElement("p", {
    className: "find-your-movie"
  }, "Find your movie");
};

/* harmony default export */ var Header_FindYourMovie_FindYourMovie = (FindYourMovie_FindYourMovie_FindYourMovie);
// EXTERNAL MODULE: ./src/components/NetflixLogo/NetflixLogo.js
var NetflixLogo = __webpack_require__("x9NN");

// EXTERNAL MODULE: ./src/redux/filters/filters.actions.js + 1 modules
var filters_actions = __webpack_require__("irwD");

// EXTERNAL MODULE: ./src/redux/movies/movies.actions.js + 1 modules
var movies_actions = __webpack_require__("iCza");

// EXTERNAL MODULE: ./src/components/Search/SearchInput/SearchInput.scss
var SearchInput_SearchInput = __webpack_require__("DfdR");

// CONCATENATED MODULE: ./src/components/Search/SearchInput/SearchInput.js



var SearchInput_SearchInput_SearchInput = function SearchInput(props) {
  var inputClass = '';

  if (props.inputClass === 'search') {
    inputClass = 'search-input';
  }

  return external_react_default.a.createElement("div", null, external_react_default.a.createElement("input", {
    className: inputClass,
    placeholder: props.placeholder,
    value: props.searchValue,
    onChange: props.onCustomChange
  }));
};

/* harmony default export */ var Search_SearchInput_SearchInput = (SearchInput_SearchInput_SearchInput);
// EXTERNAL MODULE: ./src/components/Search/SearchButton/SearchButton.scss
var SearchButton_SearchButton = __webpack_require__("plsE");

// CONCATENATED MODULE: ./src/components/Search/SearchButton/SearchButton.js



var SearchButton_SearchButton_SearchButton = function SearchButton(props) {
  var buttonClass = '';

  if (props.buttonClass === 'filter') {
    buttonClass = 'search-button';
  } else if (props.buttonClass === 'backToFilter') {
    buttonClass = 'back-to-filter';
  }

  return external_react_default.a.createElement("div", null, external_react_default.a.createElement("button", {
    className: buttonClass,
    onClick: props.onCustomSubmit
  }, props.children));
};

/* harmony default export */ var Search_SearchButton_SearchButton = (SearchButton_SearchButton_SearchButton);
// EXTERNAL MODULE: ./src/components/Search/SearchFilters/SearchFilters.scss
var SearchFilters_SearchFilters = __webpack_require__("uNH+");

// EXTERNAL MODULE: ./src/components/Search/SearchFilters/Filter/Filter.scss
var Filter = __webpack_require__("Nu0C");

// EXTERNAL MODULE: ./src/components/Search/SearchFilters/Filter/Filter.js
var Filter_Filter = __webpack_require__("LTG3");

// CONCATENATED MODULE: ./src/components/Search/SearchFilters/SearchFilters.js





var SearchFilters_SearchFilters_SearchFilters = function SearchFilters(props) {
  return external_react_default.a.createElement("div", {
    className: "search-filters"
  }, external_react_default.a.createElement("p", null, "Search by"), external_react_default.a.createElement(Filter_Filter["a" /* default */], {
    inputId: "title",
    inputClass: "main-filter",
    onCustomChange: props.changingByValue,
    inputName: "search",
    inputType: "radio",
    inputValue: "title",
    inputText: "Title",
    checkedOption: props.searchBy === 'title' ? true : false
  }), external_react_default.a.createElement(Filter_Filter["a" /* default */], {
    inputId: "genres",
    inputClass: "main-filter",
    onCustomChange: props.changingByValue,
    inputName: "search",
    inputType: "radio",
    inputValue: "genres",
    inputText: "Genres",
    checkedOption: props.searchBy === 'genres' ? true : false
  }));
};

/* harmony default export */ var Search_SearchFilters_SearchFilters = (SearchFilters_SearchFilters_SearchFilters);
// CONCATENATED MODULE: ./src/components/Search/SearchFilters/SearchFilters.hoc.js




var mapStateToProps = function mapStateToProps(state) {
  return {
    searchBy: state.filters.searchBy
  };
};

var SearchFilters_hoc_mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    changingByValue: function changingByValue(e) {
      dispatch(Object(filters_actions["a" /* changingSearchByValue */])(e.target.value));
    }
  };
};

/* harmony default export */ var SearchFilters_hoc = (Object(external_react_redux_["connect"])(mapStateToProps, SearchFilters_hoc_mapDispatchToProps)(Search_SearchFilters_SearchFilters));
// EXTERNAL MODULE: ./src/components/Search/Search.scss
var Search_Search = __webpack_require__("Fw62");

// CONCATENATED MODULE: ./src/components/Search/Search.js











var Search_Search_Search =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(Search, _Component);

  function Search(props) {
    Object(classCallCheck["a" /* default */])(this, Search);

    return Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(Search).call(this, props));
  }

  Object(createClass["a" /* default */])(Search, [{
    key: "submitForm",
    value: function submitForm(e) {
      e.preventDefault();
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      return external_react_default.a.createElement("form", {
        onSubmit: this.submitForm.bind(this)
      }, external_react_default.a.createElement(Search_SearchInput_SearchInput, {
        placeholder: "Example: Quentin Tarantino",
        inputClass: "search",
        passingValue: this.props.searchValue,
        searchValue: this.props.searchValue,
        onCustomChange: this.props.changingInputValue
      }), external_react_default.a.createElement("div", {
        className: "header-filters"
      }, external_react_default.a.createElement(SearchFilters_hoc, null), external_react_default.a.createElement(external_react_router_dom_["Link"], {
        to: {
          pathname: "/movies",
          search: "?search=".concat(this.props.searchValue, "&searchBy=").concat(this.props.searchBy, "&sortBy=").concat(this.props.sortBy, "&sortOrder=desc&limit=20")
        }
      }, external_react_default.a.createElement(Search_SearchButton_SearchButton, {
        buttonClass: "filter",
        onCustomSubmit: function onCustomSubmit() {
          return _this.props.onSubmitForm(_this.props.searchValue, _this.props.searchBy, _this.props.sortBy);
        }
      }, "Search"))));
    }
  }]);

  return Search;
}(external_react_["Component"]);
/* harmony default export */ var components_Search_Search = (Object(external_react_router_dom_["withRouter"])(Search_Search_Search));
// CONCATENATED MODULE: ./src/components/Search/Search.hoc.js





var Search_hoc_mapStateToProps = function mapStateToProps(state) {
  return {
    searchValue: state.filters.searchValue,
    searchBy: state.filters.searchBy,
    sortBy: state.filters.sortBy
  };
};

var Search_hoc_mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    changingInputValue: function changingInputValue(e) {
      dispatch(Object(filters_actions["b" /* changingSearchInputValue */])(e.target.value));
    },
    onSubmitForm: function onSubmitForm(searchText, searchBy, sortBy) {
      dispatch(Object(movies_actions["a" /* asyncHandlingSubmitFormAction */])(searchText, searchBy, sortBy));
    }
  };
};

/* harmony default export */ var Search_hoc = (Object(external_react_redux_["connect"])(Search_hoc_mapStateToProps, Search_hoc_mapDispatchToProps)(components_Search_Search));
// EXTERNAL MODULE: ./src/components/OneFilmCard/OneFilmCard.scss
var OneFilmCard_OneFilmCard = __webpack_require__("rW0Z");

// CONCATENATED MODULE: ./src/components/OneFilmCard/OneFilmCard.js



var OneFilmCard_OneFilmCard_OneFilmCard = function OneFilmCard(props) {
  return external_react_default.a.createElement("div", {
    className: "film-card-wrapper"
  }, external_react_default.a.createElement("div", {
    className: "film-card-image"
  }, external_react_default.a.createElement("img", {
    src: props.cardImgPath
  })), external_react_default.a.createElement("div", {
    className: "film-card-description"
  }, external_react_default.a.createElement("h2", {
    className: "film-card-header"
  }, props.cardTitle), external_react_default.a.createElement("p", {
    className: "film-card-genres"
  }, props.cardGenres), external_react_default.a.createElement("div", {
    className: "film-card-characteristics"
  }, external_react_default.a.createElement("span", {
    className: "film-card-year"
  }, props.cardReleaseDate), external_react_default.a.createElement("span", {
    className: "film-card-time"
  }, props.cardRuntime ? "".concat(props.cardRuntime, " min") : null)), external_react_default.a.createElement("p", {
    className: "film-card-text"
  }, props.cardFilmOverview)));
};

/* harmony default export */ var components_OneFilmCard_OneFilmCard = (OneFilmCard_OneFilmCard_OneFilmCard);
// CONCATENATED MODULE: ./src/containers/Header/Header.js













var Header_Header_Header =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(Header, _Component);

  function Header(props) {
    Object(classCallCheck["a" /* default */])(this, Header);

    return Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(Header).call(this, props));
  }

  Object(createClass["a" /* default */])(Header, [{
    key: "render",
    value: function render() {
      var _this = this;

      var header, headerContent;

      if (this.props.location.pathname === '/' || this.props.location.pathname === '/movies') {
        header = external_react_default.a.createElement(NetflixLogo["a" /* default */], null);
        headerContent = external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement(Header_FindYourMovie_FindYourMovie, null), external_react_default.a.createElement(Search_hoc, null));
      } else if (this.props.match.params.id) {
        var cardToShow = this.props.apiData.filter(function (card) {
          return card.id === Number(_this.props.match.params.id);
        })[0];
        header = external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement(NetflixLogo["a" /* default */], null), external_react_default.a.createElement(Search_SearchButton_SearchButton, {
          buttonClass: "backToFilter"
        }, external_react_default.a.createElement(external_react_router_dom_["Link"], {
          to: {
            pathname: "/movies",
            search: "?search=".concat(this.props.searchValue, "&searchBy=").concat(this.props.searchBy, "&sortBy=").concat(this.props.sortBy, "&sortOrder=desc&limit=20")
          }
        }, "Search")));
        headerContent = external_react_default.a.createElement(components_OneFilmCard_OneFilmCard, {
          cardImgPath: cardToShow.poster_path,
          cardTitle: cardToShow.title,
          cardGenres: cardToShow.genres.join(', '),
          cardReleaseDate: cardToShow.release_date.slice(0, 4),
          cardRuntime: cardToShow.runtime,
          cardFilmOverview: cardToShow.overview
        });
      }

      return external_react_default.a.createElement("div", {
        className: "header-image"
      }, external_react_default.a.createElement("div", {
        className: "header"
      }, external_react_default.a.createElement("div", {
        className: "logo-header"
      }, header), headerContent));
    }
  }]);

  return Header;
}(external_react_["Component"]);
/* harmony default export */ var containers_Header_Header = (Object(external_react_router_dom_["withRouter"])(Header_Header_Header));
// CONCATENATED MODULE: ./src/containers/Header/Header.hoc.js



var Header_hoc_mapStateToProps = function mapStateToProps(state) {
  return {
    apiData: state.movies.apiData,
    sortBy: state.filters.sortBy,
    searchValue: state.filters.searchValue,
    searchBy: state.filters.searchBy
  };
};

/* harmony default export */ var Header_hoc = __webpack_exports__["a"] = (Object(external_react_redux_["connect"])(Header_hoc_mapStateToProps)(containers_Header_Header));

/***/ }),

/***/ "fozc":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "gHn/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "gdOY":
/***/ (function(module, exports) {



/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "iCza":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("zr5I");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./src/redux/movies/movies.constants.js
var SUBMIT_SEARCH_FORM = 'SUBMIT_SEARCH_FORM';
// CONCATENATED MODULE: ./src/redux/movies/movies.actions.js
/* unused harmony export submitSearchForm */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return movies_actions_asyncHandlingSubmitFormAction; });


var movies_actions_submitSearchForm = function submitSearchForm(data) {
  return {
    type: SUBMIT_SEARCH_FORM,
    payload: {
      data: data
    }
  };
};
var movies_actions_asyncHandlingSubmitFormAction = function asyncHandlingSubmitFormAction(searchText, searchBy, sortBy) {
  var url = "http://react-cdp-api.herokuapp.com/movies?search=".concat(searchText, "&searchBy=").concat(searchBy, "&sortBy=").concat(sortBy, "&sortOrder=desc&limit=20");
  console.log(url);
  return function (dispatch) {
    external_axios_default.a.get(url).then(function (res) {
      return dispatch(movies_actions_submitSearchForm(res.data.data));
    }).catch(function (err) {
      return console.error(err);
    });
  };
};

/***/ }),

/***/ "iZP3":
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__("XVgq");

var _Symbol = __webpack_require__("Z7t5");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "irwD":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./src/redux/filters/filters.constants.js
var CHANGING_SEARCH_TEXT_VALUE = 'CHANGING_SEARCH_TEXT_VALUE';
var CHANGING_SEARCH_BY_VALUE = 'CHANGING_SEARCH_BY_VALUE';
var CHANGING_SORT_BY_VALUE = 'CHANGING_SORT_BY_VALUE';
// CONCATENATED MODULE: ./src/redux/filters/filters.actions.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return filters_actions_changingSearchInputValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return filters_actions_changingSearchByValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return filters_actions_changingSortByValue; });

var filters_actions_changingSearchInputValue = function changingSearchInputValue(inputValue) {
  return {
    type: CHANGING_SEARCH_TEXT_VALUE,
    payload: inputValue
  };
};
var filters_actions_changingSearchByValue = function changingSearchByValue(searchByValue) {
  return {
    type: CHANGING_SEARCH_BY_VALUE,
    payload: searchByValue
  };
};
var filters_actions_changingSortByValue = function changingSortByValue(sortByValue) {
  return {
    type: CHANGING_SORT_BY_VALUE,
    payload: sortByValue
  };
};

/***/ }),

/***/ "lEza":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js
var object_assign = __webpack_require__("UXZV");
var assign_default = /*#__PURE__*/__webpack_require__.n(object_assign);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js

function _extends() {
  _extends = assign_default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__("0iUn");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js
var createClass = __webpack_require__("sLSF");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js + 2 modules
var possibleConstructorReturn = __webpack_require__("MI3g");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__("a7VT");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__("Tit0");

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./src/components/SortingSection/MoviesFound/MoviesFound.scss
var MoviesFound_MoviesFound = __webpack_require__("AFLn");

// CONCATENATED MODULE: ./src/components/SortingSection/MoviesFound/MoviesFound.js



var MoviesFound_MoviesFound_MoviesFound = function MoviesFound(props) {
  return external_react_default.a.createElement("p", {
    className: "movies-found"
  }, props.moviesFound, " movies found");
};

/* harmony default export */ var SortingSection_MoviesFound_MoviesFound = (MoviesFound_MoviesFound_MoviesFound);
// EXTERNAL MODULE: ./src/redux/movies/movies.actions.js + 1 modules
var movies_actions = __webpack_require__("iCza");

// EXTERNAL MODULE: ./src/redux/filters/filters.actions.js + 1 modules
var filters_actions = __webpack_require__("irwD");

// EXTERNAL MODULE: ./src/components/SortingSection/SortBy/SortBy.scss
var SortBy_SortBy = __webpack_require__("0vG8");

// EXTERNAL MODULE: ./src/components/Search/SearchFilters/Filter/Filter.js
var Filter = __webpack_require__("LTG3");

// CONCATENATED MODULE: ./src/components/SortingSection/SortBy/SortBy.js




var SortBy_SortBy_SortBy = function SortBy(props) {
  return external_react_default.a.createElement("div", {
    className: "sort-filters"
  }, external_react_default.a.createElement("p", null, "Sort by"), external_react_default.a.createElement(Filter["a" /* default */], {
    inputId: "release",
    onCustomChange: function onCustomChange(e) {
      return props.handilngSortInputChange(e.target.value), props.changingSortBy(props.searchValue, props.searchBy, e.target.value);
    },
    inputClass: "secondary-filter",
    inputName: "sort",
    inputType: "radio",
    inputValue: "release_date",
    inputText: "release date",
    checkedOption: props.sortBy === 'release_date' ? true : false
  }), external_react_default.a.createElement(Filter["a" /* default */], {
    inputId: "rating",
    onCustomChange: function onCustomChange(e) {
      return props.handilngSortInputChange(e.target.value), props.changingSortBy(props.searchValue, props.searchBy, e.target.value);
    },
    inputClass: "secondary-filter",
    inputName: "sort",
    inputType: "radio",
    inputValue: "vote_average",
    inputText: "rating",
    checkedOption: props.sortBy === 'vote_average' ? true : false
  }));
};

/* harmony default export */ var SortingSection_SortBy_SortBy = (SortBy_SortBy_SortBy);
// CONCATENATED MODULE: ./src/components/SortingSection/SortBy/SortBy.hoc.js





var mapStateToProps = function mapStateToProps(state) {
  return {
    searchValue: state.filters.searchValue,
    searchBy: state.filters.searchBy,
    sortBy: state.filters.sortBy
  };
};

var SortBy_hoc_mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    handilngSortInputChange: function handilngSortInputChange(sortInputValue) {
      dispatch(Object(filters_actions["c" /* changingSortByValue */])(sortInputValue));
    },
    changingSortBy: function changingSortBy(searchText, searchBy, sortBy) {
      dispatch(Object(movies_actions["a" /* asyncHandlingSubmitFormAction */])(searchText, searchBy, sortBy));
    }
  };
};

/* harmony default export */ var SortBy_hoc = (Object(external_react_redux_["connect"])(mapStateToProps, SortBy_hoc_mapDispatchToProps)(SortingSection_SortBy_SortBy));
// EXTERNAL MODULE: ./src/components/SortingSection/FilmsByGenre/FilmsByGenre.scss
var FilmsByGenre = __webpack_require__("p5UY");

// CONCATENATED MODULE: ./src/components/SortingSection/FilmsByGenre/FilmsByGenre.js



function FilmsByGenre_FilmsByGenre() {
  return external_react_default.a.createElement("p", {
    className: "films-by-genre"
  }, "Films by N genre");
}

/* harmony default export */ var SortingSection_FilmsByGenre_FilmsByGenre = (FilmsByGenre_FilmsByGenre);
// EXTERNAL MODULE: ./src/containers/SortingSection/SortingSection.scss
var SortingSection_SortingSection = __webpack_require__("blj3");

// CONCATENATED MODULE: ./src/containers/SortingSection/SortingSection.js










var SortingSection_SortingSection_SortingSection =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(SortingSection, _Component);

  function SortingSection(props) {
    Object(classCallCheck["a" /* default */])(this, SortingSection);

    return Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(SortingSection).call(this, props));
  }

  Object(createClass["a" /* default */])(SortingSection, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("div", {
        className: "sorting-section-wrapper"
      }, external_react_default.a.createElement("div", {
        className: "sorting-section"
      }, external_react_default.a.createElement(SortingSection_MoviesFound_MoviesFound, {
        moviesFound: this.props.moviesFound
      }), external_react_default.a.createElement(SortBy_hoc, null)));
    }
  }]);

  return SortingSection;
}(external_react_["Component"]);
/* harmony default export */ var containers_SortingSection_SortingSection = (SortingSection_SortingSection_SortingSection);
// CONCATENATED MODULE: ./src/containers/SortingSection/SortingSection.hoc.js










var SortingSection_hoc_SortingSectionHOC =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(SortingSectionHOC, _Component);

  function SortingSectionHOC(props) {
    Object(classCallCheck["a" /* default */])(this, SortingSectionHOC);

    return Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(SortingSectionHOC).call(this, props));
  }

  Object(createClass["a" /* default */])(SortingSectionHOC, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement(containers_SortingSection_SortingSection, _extends({
        moviesFound: this.props.apiData.length
      }, this.props));
    }
  }]);

  return SortingSectionHOC;
}(external_react_["Component"]);

var SortingSection_hoc_mapStateToProps = function mapStateToProps(state) {
  return {
    apiData: state.movies.apiData
  };
};

/* harmony default export */ var SortingSection_hoc = __webpack_exports__["a"] = (Object(external_react_redux_["connect"])(SortingSection_hoc_mapStateToProps)(SortingSection_hoc_SortingSectionHOC));

/***/ }),

/***/ "o5io":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "oncg":
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),

/***/ "p5UY":
/***/ (function(module, exports) {



/***/ }),

/***/ "p8BD":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "plsE":
/***/ (function(module, exports) {



/***/ }),

/***/ "qg/E":
/***/ (function(module, exports) {



/***/ }),

/***/ "rW0Z":
/***/ (function(module, exports) {



/***/ }),

/***/ "rf6O":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "sLSF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hfKm");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "uNH+":
/***/ (function(module, exports) {



/***/ }),

/***/ "vjea":
/***/ (function(module, exports, __webpack_require__) {

var _Object$setPrototypeOf = __webpack_require__("TRZx");

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = _Object$setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "vqFK":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "x9NN":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("oncg");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _NetflixLogo_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("J40/");
/* harmony import */ var _NetflixLogo_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_NetflixLogo_scss__WEBPACK_IMPORTED_MODULE_2__);




var NetflixLogo = function NetflixLogo() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "netflix-logo"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/"
  }, "netflixroulette"));
};

/* harmony default export */ __webpack_exports__["a"] = (NetflixLogo);

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });