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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var welcome_1 = __webpack_require__(5);
var question_1 = __webpack_require__(4);
var result_1 = __webpack_require__(3);
var AppState = (function () {
    function AppState() {
    }
    return AppState;
}());
exports.AppState = AppState;
var App = (function (_super) {
    __extends(App, _super);
    function App(props) {
        var _this = _super.call(this, props) || this;
        _this.numberOfQuestions = 5;
        _this.state = {
            questionNumber: 0
        };
        _this.beginTest = _this.beginTest.bind(_this);
        _this.nextQuestion = _this.nextQuestion.bind(_this);
        return _this;
    }
    App.prototype.beginTest = function () {
        this.setState({ questionNumber: 1 });
    };
    App.prototype.nextQuestion = function () {
        this.setState({ questionNumber: this.state.questionNumber + 1 });
    };
    App.prototype.render = function () {
        if (this.state.questionNumber < 1) {
            return (React.createElement(welcome_1.Welcome, { beginTest: this.beginTest }));
        }
        else if (this.state.questionNumber > this.numberOfQuestions) {
            return (React.createElement(result_1.Result, { restartTest: this.beginTest, totalQuestions: this.numberOfQuestions }));
        }
        else {
            return (React.createElement(question_1.Question, { questionNumber: this.state.questionNumber, nextQuestion: this.nextQuestion }));
        }
    };
    return App;
}(React.Component));
exports.App = App;


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var Result = (function (_super) {
    __extends(Result, _super);
    function Result(props) {
        var _this = _super.call(this, props) || this;
        _this.restartTest = _this.restartTest.bind(_this);
        return _this;
    }
    Result.prototype.restartTest = function () {
        this.props.restartTest();
    };
    Result.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement("h3", null, "Results"),
            React.createElement("p", null,
                "You completed ",
                this.props.totalQuestions,
                " questions"),
            React.createElement("a", { className: "btn btn-primary", onClick: this.restartTest }, "Next")));
    };
    return Result;
}(React.Component));
exports.Result = Result;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var Question = (function (_super) {
    __extends(Question, _super);
    function Question(props) {
        var _this = _super.call(this, props) || this;
        _this.nextQuestion = _this.nextQuestion.bind(_this);
        return _this;
    }
    Question.prototype.nextQuestion = function () {
        this.props.nextQuestion();
    };
    Question.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement("h3", null,
                "Question ",
                this.props.questionNumber),
            React.createElement("a", { className: "btn btn-primary", onClick: this.nextQuestion }, "Next")));
    };
    return Question;
}(React.Component));
exports.Question = Question;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var Welcome = (function (_super) {
    __extends(Welcome, _super);
    function Welcome(props) {
        var _this = _super.call(this, props) || this;
        _this.beginTestClick = _this.beginTestClick.bind(_this);
        return _this;
    }
    Welcome.prototype.beginTestClick = function () {
        this.props.beginTest();
    };
    Welcome.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement("h3", null, "Welcome to the Synonym Test"),
            React.createElement("a", { className: "btn btn-primary", onClick: this.beginTestClick }, "Begin Test")));
    };
    return Welcome;
}(React.Component));
exports.Welcome = Welcome;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var ReactDOM = __webpack_require__(2);
var app_1 = __webpack_require__(1);
ReactDOM.render(React.createElement(app_1.App, null), document.getElementById("app"));


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map