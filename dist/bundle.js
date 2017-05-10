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
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
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
var welcome_1 = __webpack_require__(8);
var test_1 = __webpack_require__(6);
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
        _this.updateScore = _this.updateScore.bind(_this);
        return _this;
    }
    App.prototype.beginTest = function () {
        this.setState({
            questionNumber: 1,
            score: null
        });
    };
    App.prototype.updateScore = function (correct) {
        var score = this.state.score || {
            correctAnswers: 0,
            questionsAnswered: 0
        };
        score.correctAnswers = score.correctAnswers + (correct ? 1 : 0);
        score.questionsAnswered = score.questionsAnswered + 1;
        this.setState({
            score: score
        });
    };
    App.prototype.nextQuestion = function () {
        this.setState({
            questionNumber: this.state.questionNumber + 1,
        });
    };
    App.prototype.render = function () {
        if (this.state.questionNumber < 1) {
            return (React.createElement(welcome_1.Welcome, { beginTest: this.beginTest }));
        }
        else if (this.state.questionNumber > this.numberOfQuestions) {
            return (React.createElement(result_1.Result, { restartTest: this.beginTest, score: this.state.score }));
        }
        else {
            return (React.createElement(test_1.Test, { questionNumber: this.state.questionNumber, nextQuestion: this.nextQuestion, score: this.state.score, updateScore: this.updateScore }));
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
                "You answered ",
                this.props.score.correctAnswers,
                " of ",
                this.props.score.questionsAnswered,
                " questions correctly. Well done!"),
            React.createElement("a", { className: "btn btn-primary", onClick: this.restartTest }, "Restart Test")));
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
var Answer = (function (_super) {
    __extends(Answer, _super);
    function Answer(props) {
        var _this = _super.call(this, props) || this;
        _this.nextQuestion = _this.nextQuestion.bind(_this);
        return _this;
    }
    Answer.prototype.nextQuestion = function () {
        this.props.nextQuestion();
    };
    Answer.prototype.render = function () {
        var _this = this;
        var buttons = this.props.wordOptions
            .map(function (s, i) {
            // assume there are always 5 options
            var divClass = "btn-question col-sm-2";
            if (i == 0) {
                divClass = divClass + " col-sm-offset-1";
            }
            var buttonClass = "btn center-block";
            if (i === _this.props.correctOption) {
                buttonClass = buttonClass + " btn-success";
            }
            else if (i === _this.props.selectedOption) {
                buttonClass = buttonClass + " btn-danger";
            }
            else {
                buttonClass = buttonClass + " btn-default";
            }
            return (React.createElement("div", { className: divClass, key: i },
                React.createElement("a", { className: buttonClass }, s)));
        });
        var message = this.props.correctOption === this.props.selectedOption
            ? "You answered correctly, well done!"
            : "You answered incorrectly. The correct answer was " + this.props.wordOptions[this.props.correctOption] + " Better luck next time.";
        var score = this.props.score
            ? React.createElement("p", null,
                "Score: ",
                this.props.score.correctAnswers,
                " out of ",
                this.props.score.questionsAnswered,
                ".")
            : null;
        return (React.createElement("div", null,
            React.createElement("div", { className: "row" }, buttons),
            score,
            React.createElement("p", null, message),
            React.createElement("a", { className: "btn btn-primary", onClick: this.nextQuestion }, "Next")));
    };
    return Answer;
}(React.Component));
exports.Answer = Answer;


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
var Question = (function (_super) {
    __extends(Question, _super);
    function Question(props) {
        var _this = _super.call(this, props) || this;
        _this.selectOption = _this.selectOption.bind(_this);
        return _this;
    }
    Question.prototype.selectOption = function (event) {
        var anchorElement = event.currentTarget;
        var index = parseInt(anchorElement.id.substr(4), 10);
        this.props.selectOption(index);
    };
    Question.prototype.render = function () {
        var _this = this;
        var buttons = this.props.wordOptions
            .map(function (s, i) {
            // assume there are always 5 options
            var divClass = "btn-question col-sm-2";
            if (i == 0) {
                divClass = divClass + " col-sm-offset-1";
            }
            return (React.createElement("div", { className: divClass, key: i },
                React.createElement("a", { id: "btn_" + i, className: "btn btn-default center-block", onClick: _this.selectOption }, s)));
        });
        var score = this.props.score
            ? React.createElement("p", null,
                "Score: ",
                this.props.score.correctAnswers,
                " out of ",
                this.props.score.questionsAnswered,
                ".")
            : null;
        return (React.createElement("div", null,
            React.createElement("div", { className: "row" }, buttons),
            score));
    };
    return Question;
}(React.Component));
exports.Question = Question;


/***/ }),
/* 6 */
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
var words_1 = __webpack_require__(7);
var question_1 = __webpack_require__(5);
var answer_1 = __webpack_require__(4);
var Test = (function (_super) {
    __extends(Test, _super);
    function Test(props) {
        var _this = _super.call(this, props) || this;
        _this.state = _this.getRefreshedState(props.questionNumber);
        _this.nextQuestion = _this.nextQuestion.bind(_this);
        _this.selectOption = _this.selectOption.bind(_this);
        return _this;
    }
    Test.prototype.nextQuestion = function () {
        this.props.nextQuestion();
    };
    Test.prototype.random = function (maxValueExclusive) {
        return Math.floor(Math.random() * maxValueExclusive);
    };
    Test.prototype.selectOption = function (option) {
        this.props.updateScore(option === this.state.correctOption);
        this.setState({
            selectedOption: option
        });
    };
    Test.prototype.getRefreshedState = function (questionNumber) {
        var word = null;
        var wordOptions = null;
        var correctOption = null;
        if (questionNumber === 0 || questionNumber > 0) {
            var words = words_1.Words.getWords();
            this.shuffle(words);
            var synonyms = words[0];
            this.shuffle(synonyms);
            word = synonyms[0];
            wordOptions = [synonyms[1]];
            for (var i = 1; i < 5; i++) {
                var antonyms = words[i];
                this.shuffle(antonyms);
                wordOptions.push(antonyms[0]);
            }
            this.shuffle(wordOptions);
            correctOption = wordOptions.indexOf(synonyms[1]);
        }
        return {
            questionNumber: questionNumber,
            selectedOption: null,
            word: word,
            wordOptions: wordOptions,
            correctOption: correctOption,
        };
    };
    Test.prototype.shuffle = function (source) {
        for (var i = source.length - 1; i > 0; i--) {
            var n = this.random(i + 1);
            var temp = source[i];
            source[i] = source[n];
            source[n] = temp;
        }
    };
    Test.prototype.componentWillReceiveProps = function (nextProps) {
        if (nextProps.questionNumber !== this.state.questionNumber) {
            this.setState(this.getRefreshedState(nextProps.questionNumber));
        }
    };
    Test.prototype.render = function () {
        var answered = this.state.selectedOption === 0 || this.state.selectedOption > 0;
        var questionOrResult = answered
            ? React.createElement(answer_1.Answer, { correctOption: this.state.correctOption, nextQuestion: this.nextQuestion, selectedOption: this.state.selectedOption, wordOptions: this.state.wordOptions, score: this.props.score })
            : React.createElement(question_1.Question, { wordOptions: this.state.wordOptions, selectOption: this.selectOption, score: this.props.score });
        return (React.createElement("div", null,
            React.createElement("h3", null,
                "Question ",
                this.props.questionNumber),
            React.createElement("p", null,
                "Click or tap the word that is a synonym of ",
                this.state.word),
            questionOrResult));
    };
    return Test;
}(React.Component));
exports.Test = Test;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Words = (function () {
    function Words() {
    }
    Words.getWords = function () {
        return [
            ["abandon", "leave"],
            ["abbreviate", "shorten"],
            ["abode", "dwelling"],
            ["abrupt", "sudden"],
            ["abundant", "plentiful"],
            ["accommodation", "room"],
            ["accurate", "correct"],
            ["adversity", "misfortune"],
            ["aggressive", "pushy", "quarrelsome"],
            ["altitude", "height"],
            ["amiable", "friendly"],
            ["ample", "plentiful"],
            ["animosity", "hatred"],
            ["annual", "yearly"],
            ["anonymous", "nameless"],
            ["anticipate", "expect"],
            ["apparel", "clothes"],
            ["apparition", "ghost"],
            ["arrogant", "proud, haughty"],
            ["assembly", "gathering"],
            ["assistance", "help"],
            ["astonishment", "surprise"],
            ["attired", "dressed"],
            ["audacity", "impudence, insolence"],
            ["austere", "severe"],
            ["avaricious", "greedy"],
            ["beverage", "drink"],
            ["brief", "short"],
            ["catastrophe", "disaster"],
            ["cautious", "careful"],
            ["cease", "stop"],
            ["celebrated", "famous"],
            ["centre", "middle"],
            ["chivalrous", "gallant"],
            ["circular", "round"],
            ["colossal", "huge"],
            ["commence", "begin"],
            ["compel", "force"],
            ["comprehend", "understand"],
            ["conceal", "hide"],
            ["Word", "Synonym"],
            ["conclusion", "end"],
            ["conversation", "talk"],
            ["countenance", "face"],
            ["courageous", "brave"],
            ["courteous", "polite"],
            ["deceive", "mislead, cheat"],
            ["deficiency", "shortage"],
            ["demonstrate", "show"],
            ["denounce", "condemn"],
            ["deride", "mock"],
            ["desert", "forsake"],
            ["despise", "scorn"],
            ["detest", "hate"],
            ["diminish", "lessen"],
            ["diminutive", "small"],
            ["disperse", "scatter"],
            ["drowsy", "sleepy"],
            ["dubious", "doubtful"],
            ["edible", "eatable"],
            ["elude", "escape"],
            ["Word", "Synonym"],
            ["eminent", "famous"],
            ["encircle", "surround"],
            ["endeavour", "attempt"],
            ["energetic", "active"],
            ["enormous", "huge"],
            ["excavate", "dig"],
            ["exhibit", "show"],
            ["extravagance", "waste"],
            ["fatigue", "weariness"],
            ["ferocious", "fierce"],
            ["frigid", "cold"],
            ["generous", "kind"],
            ["gleaming", "shining"],
            ["gorgeous", "beautiful, splendid"],
            ["gratitude", "thankfulness"],
            ["grave", "serious"],
            ["gruesome", "horrible"],
            ["indolent", "lazy"],
            ["industrious", "busy"],
            ["infuriated", "angry"],
            ["Word", "Synonym"],
            ["inquire", "ask"],
            ["insane", "mad"],
            ["insolent", "cheeky"],
            ["intention", "purpose"],
            ["interior", "inside"],
            ["intoxicated", "drunk"],
            ["invaluable", "priceless"],
            ["invincible", "unbeatable"],
            ["isolation", "loneliness"],
            ["jovial", "jolly"],
            ["loathe", "hate"],
            ["lubricate", "oil"],
            ["mammoth", "huge"],
            ["margin", "edge"],
            ["mariner", "sailor"],
            ["matrimony", "marriage"],
            ["maximum", "most"],
            ["mechanism", "machinery"],
            ["melancholy", "sad"],
            ["minimum", "least"],
            ["Word", "Synonym"],
            ["lofty", "high"],
            ["moist", "damp"],
            ["motionless", "still"],
            ["mute", "dumb"],
            ["necessity", "need"],
            ["obstinate", "stubborn"],
            ["odour", "smell"],
            ["omen", "sign"],
            ["option", "choice"],
            ["pandemonium", "uproar"],
            ["pathetic", "pitiful"],
            ["peculiar", "odd"],
            ["penetrate", "pierce"],
            ["perceive", "see"],
            ["persuade", "coax"],
            ["peruse", "read"],
            ["portion", "part"],
            ["procure", "obtain"],
            ["prohibit", "forbid"],
            ["prominent", "outstanding"],
            ["Word", "Synonym"],
            ["prompt", "quick"],
            ["puny", "weak"],
            ["putrid", "rotten"],
            ["rare", "scarce"],
            ["reckless", "rash"],
            ["recollect", "remember"],
            ["regret", "sorrow"],
            ["reluctant", "unwilling"],
            ["reveal", "show"],
            ["robust", "strong"],
            ["ruddy", "red"],
            ["scanty", "scarce"],
            ["seclusion", "privacy"],
            ["sever", "separate"],
            ["significance", "importance"],
            ["slender", "slim"],
            ["solitude", "loneliness"],
            ["spectre", "ghost"],
            ["squander", "waste"],
            ["stationary", "still"],
            ["sufficient", "enough"],
            ["summit", "top"],
            ["tempestuous", "stormy"],
            ["tranquil", "calm"],
            ["unite", "join"],
            ["vacant", "empty"],
            ["valiant", "brave"],
            ["vanquish", "conquer"],
            ["velocity", "speed"],
            ["infer", "deduce"],
            ["dissent", "discord"],
            ["curtail", "shorten"],
            ["adjourn", "postpone"],
            ["feasible", "doable"],
            ["enfranchise", "empower"],
            ["apathetic", "indifferent"],
            ["impecunious", "poor"],
            ["disquieting", "annoying"],
            ["cord", "string"],
            ["cord", "twine"],
            ["chord", "arc"],
            ["chord", "loop"],
            ["lightening", "brighten"],
            ["encounter", "meet"],
            ["fallacious", "false"],
            ["profusion", "abundance", "copiousness"],
            ["fretful", "distressed"],
            ["explicit", "direct"],
            ["eulogy", "praise"],
            ["deprecate", "detest"],
            ["scanty", "meagre", "scarce", "limited"],
            ["zenith", "apex", "peak"],
            ["ardour", "passion", "zeal", "fervor"],
            ["dessecate", "dry"],
            ["assent", "approval"],
            ["defuse", "deactivate"],
            ["diffuse", "spread"],
            ["coax", "convince"],
            ["commiseration", "sympathy", "condolence"],
            ["admonish", "scold"],
            ["expunge", "eliminate"],
            ["hallowed", "sacred"],
            ["extrapolate", "remove"],
            ["euphemism", "substitute"],
            ["mercurial", "volatile"],
            ["countermand", "repeal", "rescind", "retract"],
            ["amass", "gather", "aggregate"],
            ["undergo", "receive", "accept"],
            ["weighty", "serious"],
            ["balmy", "mild"],
            ["barmy", "crazy"],
            ["sham", "quack", "charlatan"],
            ["elude", "evade"],
            ["exacting", "demanding"],
            ["exhaustive", "complete"],
            ["sagacious", "wise"],
            ["erroneous", "wrong"],
            ["elated", "animated", "jubilant"],
            ["sophisticated", "cultivated", "cosmopolitan"],
            ["discrectionary", "elective", "optional"],
            ["annul", "cancel"],
            ["brook", "stream"],
            ["introvert", "loner"],
            ["bemuse", "confused"],
            ["coy", "flirtatious"],
            ["dutiful", "conscientious"],
            ["desecration", "violation"],
            ["desecration", "sacrilege"],
            ["raconteur", "storyteller"],
            ["dissuade", "discourage"],
            ["complicit", "scheming"],
            ["conspire", "plot"],
            ["concoct", "prepare"],
            ["pervasive", "ubiquitous", "omnipresent"],
            ["assimilate", "incorporate"],
            ["forlorn", "unhappy"],
            ["exonerate", "acquit"],
            ["credulous", "naive"],
            ["crescendo", "increasing"],
            ["elision", "descrease"],
            ["ambiguous", "unclear"],
            ["contemptible", "arrogant"],
            ["repudiate", " reject"],
            ["erratic", "random"],
            ["mollify", "calm"],
            ["docile", "obedient"],
            ["repugnant", " repulsive"],
            ["loquatious", "talkative"],
            ["arid", "dry"],
            ["taciturn", "silent"],
            ["incongruous", " inappropriate"],
            ["feasible", "doable"],
            ["callous", "heartless"],
            ["tantamount", "equivalent"],
            ["submerege", "dive"],
            ["lucid", " understandable"],
            ["lucid", "sane"],
            ["concise", "short"],
            ["slovenly", "messy"],
            ["diluted", "weakened"],
            ["convoluted", "complicated"],
            ["culpable", "guilty"],
            ["brood", "progeny"],
            ["mediocre", "average"],
            ["reticent", "reserved"],
            ["tedious", "boring"],
            ["monarchy", "regality"],
            ["via", "through"],
            ["insipid", "tasteless"],
            ["controversial", "contentious"],
            ["sparse", "scarce"],
            ["unruly", "rowdy"],
            ["frugal", "thrifty"],
            ["hapless", "unlucky"],
            ["comely", "attractive"],
            ["cygnet", "young swan"],
            ["rancid", "smelly"],
            ["stale", "old"],
            ["intuitive", "instictive"],
            ["meticulous", "careful"],
            ["irate", "angry"],
            ["quell", "end"],
            ["surly", "unfriendly"],
            ["temperamental", "moody"],
            ["dour", "stern"],
            ["solemn", "dignified"],
            ["wistful", "longing"],
            ["sage", "wise"],
            ["aspiration", "ambition"],
            ["crypt", "tomb"],
            ["bough", "branch"],
            ["dwell", "live"],
            ["artful", "skilful"],
            ["heedless", "imprudent"],
            ["impart", "convey"],
            ["intercede", "mediate"],
            ["amply", "generously"],
            ["stolid", "calm"],
            ["stolid", "wooden"],
            ["corrosive", "erroding"],
            ["munifience", "generosity"],
            ["lunar", "moonlike"],
            ["seldom", "infrequent"],
            ["secrete", "produce"],
            ["adhere", "stick"],
            ["adhere", "cling"],
            ["abate", "lessen"],
            ["dispute", "debate"],
            ["dispute", "conflict"],
            ["droll", "funny"],
            ["complicity", "involvement"],
            ["unwitting", "unknowing"],
            ["balk", "refuse"],
            ["remote", "isolated"],
            ["intrepid", "resourceful"],
            ["discreet", "tactful"],
            ["grinding", "relentless"],
            ["rural", "rustic"],
            ["mysterious", "inexplicable"],
            ["exotic", "foreign"],
            ["apprehensive", "anxious"],
            ["comforted", "consoled"],
            ["scolded", "blamed"],
            ["amusing", "entertaining"],
            ["rotate", "revolve"],
            ["intimidated", "daunted"],
            ["hazardous", "dangerous"],
            ["chased", "pursued"],
            ["ample", "plentiful"],
            ["assembly", "gathering"],
            ["accurate", "correct"],
            ["amiable", "friendly"],
            ["abode", "dwelling"],
            ["animosity", "hatred"],
            ["apparition", "ghost"],
            ["chivalrous", "gallant"],
            ["countenance", "face"],
            ["diminutive", "small"],
            ["deride", "mock"],
            ["deride", "ridicule"],
            ["deceive", "mislead"],
            ["dubious", "doubtful"],
            ["virtuous", "moral"],
            ["partial", "incomplete"],
            ["sincere", "trustworthy"],
            ["paltry", "puny"],
            ["paltry", "worthless"],
            ["benevolent", "kind"],
            ["bewildered", "puzzled"],
            ["sleuth", "investigator"],
            ["woe", "sadness"],
            ["scoop", "spoon"],
            ["amateur", "incompetent"],
            ["fluctuating", "changing"],
            ["taciturn", "untalkative"],
            ["dissatified", "unhappy"],
            ["deliberate", "ponder"],
            ["deliberate", "intentional"],
            ["affable", "friendly"],
            ["demure", "shy"],
            ["bony", "skinny"],
            ["dishevelled", "messy"],
            ["turbulent", "agitated"],
            ["unpalatable", "unappealing"],
            ["hellix", "twist"],
            ["debilitate", "weaken"],
            ["contract", "shrink"],
            ["lethargic", "sleepy"],
            ["ornate", "decorative"],
            ["loathe", "hate"],
            ["mournful", "sad"],
            ["onerous", "shameful"],
            ["counterfeit", "fake"],
            ["commence", "begin"],
            ["egotistical", "selfish"],
            ["avaricious", "greedy"],
            ["fastidious", "fussy"],
            ["lenient", "merciful"],
            ["callous", "insensitive"],
            ["versatile", "flexible"],
            ["versatile", "adaptable"],
            ["fortuitous", "fortunate"],
            ["fortuitous", "lucky"],
            ["conceited", "vain"],
            ["infamous", "notorious"],
            ["secluded", "hidden"],
            ["apprehensive", "anxious"],
            ["abandon", "leave"],
            ["abbreviate", "shorten"],
            ["abode", "dwelling"],
            ["abrupt", "sudden"],
            ["abundant", "plentiful"],
            ["accommodation", "room"],
            ["accurate", "correct"],
            ["adversity", "misfortune"],
            ["aggressive", "pushy", "quarrelsome"],
            ["altitude", "height"],
            ["amiable", "friendly"],
            ["ample", "plentiful"],
            ["animosity", "hatred"],
            ["annual", "yearly"],
            ["anonymous", "nameless"],
            ["anticipate", "expect"],
            ["apparel", "clothes"],
            ["apparition", "ghost"],
            ["arrogant", "proud", " haughty"],
            ["assembly", "gathering"],
            ["assistance", "help"],
            ["astonishment", "surprise"],
            ["attired", "dressed"],
            ["audacity", "impudence", " insolence"],
            ["austere", "severe"],
            ["avaricious", "greedy"],
            ["beverage", "drink"],
            ["brief", "short"],
            ["catastrophe", "disaster"],
            ["cautious", "careful"],
            ["cease", "stop"],
            ["celebrated", "famous"],
            ["centre", "middle"],
            ["chivalrous", "gallant"],
            ["circular", "round"],
            ["colossal", "huge"],
            ["commence", "begin"],
            ["compel", "force"],
            ["comprehend", "understand"],
            ["conceal", "hide"],
            ["conclusion", "end"],
            ["conversation", "talk"],
            ["countenance", "face"],
            ["courageous", "brave"],
            ["courteous", "polite"],
            ["deceive", "mislead", " cheat"],
            ["deficiency", "shortage"],
            ["demonstrate", "show"],
            ["denounce", "condemn"],
            ["deride", "mock"],
            ["desert", "forsake"],
            ["despise", "scorn"],
            ["detest", "hate"],
            ["diminish", "lessen"],
            ["diminutive", "small"],
            ["disperse", "scatter"],
            ["drowsy", "sleepy"],
            ["dubious", "doubtful"],
            ["edible", "eatable"],
            ["elude", "escape"],
            ["eminent", "famous"],
            ["encircle", "surround"],
            ["endeavour", "attempt"],
            ["energetic", "active"],
            ["enormous", "huge"],
            ["excavate", "dig"],
            ["exhibit", "show"],
            ["extravagance", "waste"],
            ["fatigue", "weariness"],
            ["ferocious", "fierce"],
            ["frigid", "cold"],
            ["generous", "kind"],
            ["gleaming", "shining"],
            ["gorgeous", "beautiful", " splendid"],
            ["gratitude", "thankfulness"],
            ["grave", "serious"],
            ["gruesome", "horrible"],
            ["indolent", "lazy"],
            ["industrious", "busy"],
            ["infuriated", "angry"],
            ["inquire", "ask"],
            ["insane", "mad"],
            ["insolent", "cheeky"],
            ["intention", "purpose"],
            ["interior", "inside"],
            ["intoxicated", "drunk"],
            ["invaluable", "priceless"],
            ["invincible", "unbeatable"],
            ["isolation", "loneliness"],
            ["jovial", "jolly"],
            ["loathe", "hate"],
            ["lubricate", "oil"],
            ["mammoth", "huge"],
            ["margin", "edge"],
            ["mariner", "sailor"],
            ["matrimony", "marriage"],
            ["maximum", "most"],
            ["mechanism", "machinery"],
            ["melancholy", "sad"],
            ["minimum", "least"],
            ["moist", "damp"],
            ["motionless", "still"],
            ["mute", "dumb"],
            ["necessity", "need"],
            ["obstinate", "stubborn"],
            ["odour", "smell"],
            ["omen", "sign"],
            ["option", "choice"],
            ["pandemonium", "uproar"],
            ["pathetic", "pitiful"],
            ["peculiar", "odd"],
            ["penetrate", "pierce"],
            ["perceive", "see"],
            ["persuade", "coax"],
            ["peruse", "read"],
            ["portion", "part"],
            ["procure", "obtain"],
            ["prohibit", "forbid"],
            ["prominent", "outstanding"],
            ["prompt", "quick"],
            ["puny", "weak"],
            ["putrid", "rotten"],
            ["rare", "scarce"],
            ["reckless", "rash"],
            ["recollect", "remember"],
            ["regret", "sorrow"],
            ["reluctant", "unwilling"],
            ["reveal", "show"],
            ["robust", "strong"],
            ["ruddy", "red"],
            ["scanty", "scarce"],
            ["seclusion", "privacy"],
            ["sever", "separate"],
            ["significance", "importance"],
            ["slender", "slim"],
            ["solitude", "loneliness"],
            ["spectre", "ghost"],
            ["squander", "waste"],
            ["stationary", "still"],
            ["sufficient", "enough"],
            ["summit", "top"],
            ["tempestuous", "stormy"],
            ["tranquil", "calm"],
            ["unite", "join"],
            ["vacant", "empty"],
            ["valiant", "brave"],
            ["vanquish", "conquer"],
            ["velocity", "speed"],
            ["Abode", "house", "residence", "dwelling", "habitat", "domicile", "quarters"],
            ["Abundance", "profusion", "plenty", "wealth", "copiousness"],
            ["Alert", "attentive", "vigilant", "observant", "ready"],
            ["Altitude", "height", "elevation", "loftiness"],
            ["Antiquity", "relic", "artefact", "remains"],
            ["Apprehensive", "anxious", "worried", "nervous", "hesitant", "concerned"],
            ["Benefit", "advantage", "profit", "use", "value", "subsidy", "allowance"],
            ["Bewildered", "confuzed", "puzzled", "bemused", "baffled", "disorientated", "dazed"],
            ["Clemency", "mercy", "leniency", "compassion", "moderation", "kindness"],
            ["complex", "multifaceted", "compound", "composite", "intricate", "convoluted", "complicated"],
            ["concave", "dipped", "hollow"],
            ["Conceited", "proud", "vain", "superior", "snobbish", "smug", "narcissistic"],
            ["Conclusion", "deduction", "assumption", "inference", "supposition", "decision", "finale"],
            ["content", "gratified", "satisfied", "relaxed", "substance", "matter", "subject"],
            ["Contract", "agreement", "bond", "convention", "diminish", "shrink", "wither", "treaty"],
            ["convex", "curved", "arched", "bowed"],
            ["counterfeit", "fake", "forged", "imitation", "phony", "reproduction"],
            ["Covet", "want", "crave", "hanker", "desire", ""],
            ["Coy", "shy", "bashful", "modest", "timid", "demure", "diffident"],
            ["Debrief", "question", "interrogate", "interview", "examine", "quiz", "probe"],
            ["Deliberate", "cautious", "considered", "metodical", "wary", "thoughtful", "intentional", "premeditated"],
            ["Demolished", "destroyed", "devastated", "ruined", "thrashed", "devoured", "annihilated"],
            ["detrimental", "harmful", "unfavourable", "negative", "injurious", "damaging"],
            ["Device", "machine", "tool", "contraption", "mechanism", "apparatus"],
            ["Dismal", "gloomy", "depressing", "drab", "grim", "murky"],
            ["Drought", "lack", "dificiency", "scarcity", "famine", "dearth"],
            ["Emerge", "arise", "appear", "occur", "develop", "materialise"],
            ["evaluation", "assessment", "appraisal", "estimation", "calcualtion", "costing"],
            ["exposure", "acquaintance", "revelation", "coverage", "publicity", "experience"],
            ["Feign", "pretend", "fake", "simulate", "invent", "assume"],
            ["Flamboyant", "ostentatious", "exuberant", "confident", "lively", "buoyant", "animated", "energetic", "vibrant", "vivacious", "extravagant", "theatrical", "showy"],
            ["Foe", "enemy", "adversary", "rival", "antagonist", "opponent"],
            ["frivolous", "jokey", "light-hearted", "facetious", "fatuous", "inane", "shallow", "superficial", "senseless", "thoughtless"],
            ["gentle", "kind", "kindly", "tender", "benign", "humane", "lenient", "merciful", "forgiving", "forbearing", "sympathetic", "considerate", "understanding", "clement", "compassionate", "benevolent"],
            ["Gregarious", "sociable", "social", "company-loving", "companionable", "convivial", "clubbable"],
            ["Habitat", "haunt", "locale", "surroundings", "environment", "territory"],
            ["Helix", "spiral", "coil", "curl", "corkscrew", "twist", "twirl", "loop", "gyre", "whorl", "scroll"],
            ["high", "tall", "lofty", "towering", "soaring", "elevated"],
            ["Humble", "meek", "deferential", "respectful", "submissive", "self-effacing", "unassertive", "unpresuming"],
            ["Inaugurate", "initiate", "begin", "start", "institute", "launch"],
            ["Incision", "cut", "opening", "slit"],
            ["Inconspicuous", "unobtrusive", "unnoticeable", "unremarkable", "unspectacular", "unostentatious", "unimposing", "undistinguished", "unexceptional", "modest", "unassuming", "discreet", "hidden", "concealed"],
            ["Inferior", "lesser", "second-class", "second-fiddle", "minor", "subservient", "lowly", "humble", "menial"],
            ["Intense", "great", "acute", "enormous", "fierce", "severe", "extreme", "high", "exceptional", "extraordinary", "harsh", "strong", "powerful", "potent", "vigorous"],
            ["interpret", "explain", "elucidate", "expound", "explicate", "clarify"],
            ["Nauseous", "sick", "nauseated", "queasy", "bilious"],
            ["nurseryman", "a", "worker", "in", "or", "owner", "of", "a", "plant", "or", "tree", "nursery"],
            ["obscure", "unclear", "uncertain", "unknown", "in", "doubt", "doubtful", "dubious", "mysterious", "hazy", "vague", "indeterminate", "concealed", "hidden"],
            ["passive", "submissive", "acquiescent", "unresisting", "yielding", "unassertive", "non-resistant", "compliant", "complaisant", "pliant", "resigned", "obedient", "docile", "tractable", "malleable", "pliable", "meek", "subdued", "deferential", "forbearing"],
            ["perplexed", "puzzled"],
            ["polarity", "difference", "separation", "opposition", "contradiction"],
            ["Pompous", "imperious", "overbearing", "domineering", "magisterial", "pontifical", "sententious", "grandiose", "affected", "stiff", "pretentious", "puffed", "up", "arrogant", "vain", "haughty", "proud", "conceited"],
            ["Precarious", "uncertain", "insecure", "unreliable", "unsure", "unpredictable", "undependable", "risky", "hazardous", "dangerous", "unsafe"],
            ["resort", "centre", "spot", "retreat", "haunt", "use", "utilize"],
            ["Rigid", "stiff", "hard", "firm", "inflexible", "strict", "severe", "stern", "stringent"],
            ["Shrink", "contract", "diminish", "lessen", "reduce", "decrease", "dwindle", "narrow", "shorten", "slim", "decline", "condense", "deflate", "shrivel", "wither"],
            ["Subdued", "sombre", "low-spirited", "downcast", "sad", "dejected", "depressed", "low", "gloomy", "despondent", "dispirited"],
            ["Submissive", "compliant", "yielding", "malleable", "acquiescent", "accommodating", "amenable", "tractable", "manageable", "unassertive", "non-resisting", "passive", "obedient", "biddable", "dutiful", "duteous", "docile", "ductile", "pliant", "meek", "timid", "mild", "patient", "resigned", "forbearing", "subdued", "humble", "self-effacing", "spiritless", "Subterfuge", "trickery", "intrigue", "guile", "evasion", "deceit", "deception", "dishonesty"],
            ["superfluous", "surplus", "redundant", "unneeded"],
            ["Tempestuous", "turbulent", "stormy", "tumultuous", "violent", "wild", "lively", "heated", "explosive", "uncontrolled", "unrestrained", "feverish", "hysterical", "frenetic", "frenzied", "frantic"],
            ["Tranquil", "peaceful", "restful", "reposeful", "calm", "quiet", "still", "serene", "placid", "relaxing", "soothing", "undisturbed", "idyllic", "halcyon", "mild", "pleasant"],
            ["Trivial", "unimportant", "insignificant", "inconsequential", "minor", "frivolous", "superficial", "shallow", "unthinking"],
            ["unfathomable", "inscrutable", "incomprehensible", "enigmatic", "incalculable", "indecipherable", "obscure", "esoteric", "abstruse", "puzzling", "cryptic", "deep", "immeasurable"],
            ["Uniform", "constant", "consistent", "steady", "invariable", "unvarying", "unfluctuating", "unvaried", "unchanging", "unwavering", "undeviating", "stable", "static", "sustained", "regular", "fixed", "even", "equal", "equable", "monotonous"],
            ["Unorthodox", "unconventional", "unusual", "uncommon", "unwonted", "out", "of", "the", "ordinary", "radical", "revolutionary", "nonconformist", "irregular", "offbeat", "abnormal", "extreme", "divergent", "aberrant", "anomalous", "bizarre", "outlandish"],
            ["vicarious", "indirect", "second-hand", "secondary", "derivative", "surrogate", "substitute"],
            ["Volatile", "tense", "strained", "fraught", "uneasy", "uncomfortable", "charged", "explosive", "eruptive", "inflammatory", "turbulent", "unpredictable", "changeable", "variable", "inconstant", "inconsistent", "uncertain", "erratic", "irregular", "unstable", "turbulent", "unsteady", "unsettled", "unreliable", "undependable"],
            ["Wide", "gaping", "broad", "extensive", "spacious", "open", "vast"],
            ["wound", "insult", "blow", "slight", "offence", "affront"]
        ];
    };
    return Words;
}());
exports.Words = Words;


/***/ }),
/* 8 */
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
/* 9 */
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