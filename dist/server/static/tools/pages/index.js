module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "0bYB":
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "1mXb":
/***/ (function(module, exports) {



/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("23aj");


/***/ }),

/***/ "23aj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/antd/lib/pagination/style/css.js
var css = __webpack_require__("gY95");

// EXTERNAL MODULE: external "antd/lib/pagination"
var pagination_ = __webpack_require__("gR/H");
var pagination_default = /*#__PURE__*/__webpack_require__.n(pagination_);

// EXTERNAL MODULE: ./node_modules/antd/lib/table/style/css.js
var style_css = __webpack_require__("YWsy");

// EXTERNAL MODULE: external "antd/lib/table"
var table_ = __webpack_require__("Puj+");
var table_default = /*#__PURE__*/__webpack_require__.n(table_);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/regenerator/index.js
var regenerator = __webpack_require__("ln6h");
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/antd/lib/message/style/css.js
var message_style_css = __webpack_require__("q5v/");

// EXTERNAL MODULE: external "antd/lib/message"
var message_ = __webpack_require__("3PsY");
var message_default = /*#__PURE__*/__webpack_require__.n(message_);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("O40h");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js
var is_array = __webpack_require__("p0XB");
var is_array_default = /*#__PURE__*/__webpack_require__.n(is_array);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js

function _arrayWithHoles(arr) {
  if (is_array_default()(arr)) return arr;
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js
var get_iterator = __webpack_require__("XXOK");
var get_iterator_default = /*#__PURE__*/__webpack_require__.n(get_iterator);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = get_iterator_default()(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js



function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}
// EXTERNAL MODULE: ./node_modules/antd/lib/input/style/css.js
var input_style_css = __webpack_require__("1mXb");

// EXTERNAL MODULE: external "antd/lib/input"
var input_ = __webpack_require__("Uqqx");
var input_default = /*#__PURE__*/__webpack_require__.n(input_);

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__("HJQg");
var style_default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js
var stringify = __webpack_require__("9Jkg");
var stringify_default = /*#__PURE__*/__webpack_require__.n(stringify);

// EXTERNAL MODULE: external "isomorphic-unfetch"
var external_isomorphic_unfetch_ = __webpack_require__("0bYB");
var external_isomorphic_unfetch_default = /*#__PURE__*/__webpack_require__.n(external_isomorphic_unfetch_);

// CONCATENATED MODULE: ./request/hospitalCode.ts


var hospitalCode_getHospitalDetail = function getHospitalDetail(hospitalName) {
  var url = 'http://tool.imakan.cn/api/hospital';
  var params = {
    hospitalName: hospitalName
  };
  return external_isomorphic_unfetch_default()(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: stringify_default()(params)
  }).then(function (res) {
    return res.json();
  }).then(function (data) {
    if (data.data) {
      for (var i = 0; i < data.data.length; i++) {
        data.data[i].key = i;
      }
    }

    return data.data || '';
  });
};
var hospitalCode_getAllHospitalDetail = function getAllHospitalDetail(currentPage, pageSize) {
  var url = 'http://tool.imakan.cn/api/hospital/all';
  var params = {
    currentPage: currentPage,
    pageSize: pageSize
  };
  return external_isomorphic_unfetch_default()(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: stringify_default()(params)
  }).then(function (res) {
    return res.json();
  }).then(function (data) {
    if (data.data) {
      for (var i = 0; i < data.data.length; i++) {
        data.data[i].key = i;
      }
    }

    return data;
  });
};
// CONCATENATED MODULE: ./pages/index.tsx













var Search = input_default.a.Search;

var initCurrentPage = 1;
var initPageSize = 10;

var pages_HospitalCode = function HospitalCode(props) {
  var _useState = Object(external_react_["useState"])(props.tableData),
      _useState2 = _slicedToArray(_useState, 2),
      tableData = _useState2[0],
      setTableData = _useState2[1];

  var _useState3 = Object(external_react_["useState"])(initCurrentPage),
      _useState4 = _slicedToArray(_useState3, 2),
      currentPage = _useState4[0],
      setCurrentPage = _useState4[1];

  var _useState5 = Object(external_react_["useState"])(initPageSize),
      _useState6 = _slicedToArray(_useState5, 2),
      pageSize = _useState6[0],
      setPageSize = _useState6[1];

  var _useState7 = Object(external_react_["useState"])(0),
      _useState8 = _slicedToArray(_useState7, 2),
      validateInput = _useState8[0],
      setValidateInput = _useState8[1];

  var _useState9 = Object(external_react_["useState"])(true),
      _useState10 = _slicedToArray(_useState9, 2),
      showPagination = _useState10[0],
      setShowPagination = _useState10[1];

  var handleChange = function handleChange(e) {
    var val = e.target.value;

    if (!val) {
      setValidateInput(1);
      return;
    }

    setValidateInput(0);
  };

  var handleSearch =
  /*#__PURE__*/
  function () {
    var _ref = Object(asyncToGenerator["a" /* default */])(
    /*#__PURE__*/
    regenerator_default.a.mark(function _callee(val) {
      var dataSource;
      return regenerator_default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (val) {
                _context.next = 3;
                break;
              }

              setValidateInput(1);
              return _context.abrupt("return");

            case 3:
              if (!(validateInput === 0)) {
                _context.next = 12;
                break;
              }

              _context.next = 6;
              return hospitalCode_getHospitalDetail(val);

            case 6:
              dataSource = _context.sent;

              if (dataSource.length === 0) {
                message_default.a.info('未查询到医院信息', 0.8);
              }

              setPageSize(10); // 默认每一页的数量

              setCurrentPage(1); // 默认当前页

              setShowPagination(false); // 隐藏分页器

              setTableData(dataSource);

            case 12:
              return _context.abrupt("return");

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleSearch(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var columns = [{
    title: '编码',
    dataIndex: 'hospitalCode',
    key: 'code'
  }, {
    title: '医院名称',
    dataIndex: 'hospitalName',
    key: 'hospitalName',
    className: 'hospitalNameClass',
    width: 300
  }, {
    title: '所属区县',
    dataIndex: 'county',
    key: 'county'
  }, {
    title: '医院类别',
    dataIndex: 'type',
    key: 'type'
  }, {
    title: '医院等级',
    dataIndex: 'level',
    key: 'level'
  }, {
    title: '医院地址',
    dataIndex: 'address',
    key: 'address',
    className: 'hospitalAddressClass'
  }];

  var pageChange = function pageChange(currentPage) {
    setCurrentPage(currentPage);
    hospitalCode_getAllHospitalDetail(currentPage, pageSize).then(function (data) {
      setTableData(data.data || '');
    });
  };

  var onShowSizeChange =
  /*#__PURE__*/
  function () {
    var _ref2 = Object(asyncToGenerator["a" /* default */])(
    /*#__PURE__*/
    regenerator_default.a.mark(function _callee2(pageSize) {
      return regenerator_default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              setPageSize(pageSize);
              hospitalCode_getAllHospitalDetail(currentPage, pageSize).then(function (data) {
                setTableData(data.data || '');
              });

            case 2:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function onShowSizeChange(_x2) {
      return _ref2.apply(this, arguments);
    };
  }();

  return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement(style_default.a, {
    id: "3799678537"
  }, [".hospitalNameClass.jsx-3799678537{width:200px;}", ".hospitalAddressClass.jsx-3799678537{width:320px;}", ".tabelPagination.jsx-3799678537{margin-top:20px;float:right;}", ".input.jsx-3799678537{position:relative;width:50%;margin:0px auto 40px;}", ".input-explain.jsx-3799678537{display:none;font-variant:tabular-nums;font-feature-settings:'tnum';color:#f5222d;box-sizing:border-box;clear:both;min-height:40px;font-size:14px;-webkit-transition:color 0.3s cubic-bezier(0.215,0.61,0.355,1);-webkit-transition:color 0.3s cubic-bezier(0.215,0.61,0.355,1);transition:color 0.3s cubic-bezier(0.215,0.61,0.355,1);position:absolute;}", ".input-error.jsx-3799678537{display:block;}", ".hospitalNameClass.jsx-3799678537{width:150px;}", ".hospitalAddressClass.jsx-3799678537{width:300px;}"]), external_react_default.a.createElement("div", {
    className: "jsx-3799678537" + " " + "input"
  }, external_react_default.a.createElement(Search, {
    placeholder: "\u8BF7\u8F93\u5165\u533B\u9662\u540D\u79F0",
    onSearch: handleSearch,
    allowClear: true,
    enterButton: true,
    autoComplete: "off",
    onChange: handleChange,
    className: validateInput === 0 ? '' : 'has-error'
  }), external_react_default.a.createElement("div", {
    className: "jsx-3799678537" + " " + ('input-explain ' + (validateInput === 1 ? 'input-error' : '') || false)
  }, "\u533B\u9662\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A")), external_react_default.a.createElement(table_default.a, {
    bordered: true,
    size: "middle",
    locale: {
      emptyText: '暂无医院信息'
    },
    columns: columns,
    pagination: false,
    dataSource: tableData
  }), showPagination && external_react_default.a.createElement("div", {
    className: "jsx-3799678537" + " " + "tabelPagination"
  }, external_react_default.a.createElement(pagination_default.a, {
    showQuickJumper: true,
    showSizeChanger: true,
    defaultCurrent: 1,
    total: props.total,
    current: currentPage,
    pageSize: pageSize,
    onChange: pageChange,
    onShowSizeChange: onShowSizeChange
  })));
};

pages_HospitalCode.getInitialProps =
/*#__PURE__*/
function () {
  var _ref4 = Object(asyncToGenerator["a" /* default */])(
  /*#__PURE__*/
  regenerator_default.a.mark(function _callee3(_ref3) {
    var err, data;
    return regenerator_default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            err = _ref3.err;

            if (!err) {
              _context3.next = 3;
              break;
            }

            throw err;

          case 3:
            _context3.next = 5;
            return hospitalCode_getAllHospitalDetail(initCurrentPage, initPageSize);

          case 5:
            data = _context3.sent;
            return _context3.abrupt("return", {
              total: data.total || 0,
              tableData: data.data || ''
            });

          case 7:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function (_x3) {
    return _ref4.apply(this, arguments);
  };
}();

/* harmony default export */ var pages = __webpack_exports__["default"] = (pages_HospitalCode);

/***/ }),

/***/ "3PsY":
/***/ (function(module, exports) {

module.exports = require("antd/lib/message");

/***/ }),

/***/ "9Jkg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("fozc");

/***/ }),

/***/ "HJQg":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "J3/a":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/get-iterator");

/***/ }),

/***/ "O40h":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _asyncToGenerator; });
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("eVuF");
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "Puj+":
/***/ (function(module, exports) {

module.exports = require("antd/lib/table");

/***/ }),

/***/ "R2Q7":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/is-array");

/***/ }),

/***/ "Uqqx":
/***/ (function(module, exports) {

module.exports = require("antd/lib/input");

/***/ }),

/***/ "XXOK":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("J3/a");

/***/ }),

/***/ "YWsy":
/***/ (function(module, exports) {



/***/ }),

/***/ "aC71":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cu1A":
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ }),

/***/ "eVuF":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("aC71");

/***/ }),

/***/ "fozc":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "gR/H":
/***/ (function(module, exports) {

module.exports = require("antd/lib/pagination");

/***/ }),

/***/ "gY95":
/***/ (function(module, exports) {



/***/ }),

/***/ "ln6h":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cu1A");


/***/ }),

/***/ "p0XB":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("R2Q7");

/***/ }),

/***/ "q5v/":
/***/ (function(module, exports) {



/***/ })

/******/ });