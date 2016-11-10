(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _progressBar = require('./progressBar');

var _progressBar2 = _interopRequireDefault(_progressBar);

var _steps = require('./steps.json');

var _steps2 = _interopRequireDefault(_steps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function () {

	var progressBar = new _progressBar2.default();
	var refNode = document.querySelector('#progress-title');
	progressBar.properties = _steps2.default;
	refNode.parentNode.insertBefore(progressBar, refNode.nextSibling);
}();

},{"./progressBar":2,"./steps.json":3}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _HTMLElement = function _HTMLElement() {};
_HTMLElement.prototype = HTMLElement.prototype;

var ProgressBarEl = function (_HTMLElement2) {
	_inherits(ProgressBarEl, _HTMLElement2);

	function ProgressBarEl() {
		_classCallCheck(this, ProgressBarEl);

		return _possibleConstructorReturn(this, (ProgressBarEl.__proto__ || Object.getPrototypeOf(ProgressBarEl)).call(this));
	}
	//createdCallback(){ . . }  The behavior you define occurs when the element is registered.
	//detachedCallback(){ . . } The behavior occurs when the element is removed from the DOM
	//attributeChangedCallback() The behavior occurs when an attribute of the element is added, changed, or removed

	_createClass(ProgressBarEl, [{
		key: "attachedCallback",
		value: function attachedCallback() {
			this.innerHTML = "\n\t\t\t<div class=\"progress-wrap\">\n\t\t\t<ul class=\"progress-bar\">\n\t\t\t\t" + this.steps.map(function (step, index) {
				return "\n\t\t\t\t\t<li class=\"" + step.status + "\" data-text=\"" + (index + 1) + "\">\n\t\t\t\t\t<span class=\"label\">" + step.text + "</span>\n\t\t\t\t\t</li>\n\t\t\t\t";
			}).join('') + "\n\t\t\t</ul>\n\t\t\t</div>\n\t\t\t";
		}
	}, {
		key: "properties",
		set: function set(props) {
			this.steps = props;
		}
	}]);

	return ProgressBarEl;
}(_HTMLElement);

var ProgressBar = document.registerElement("progress-bar", ProgressBarEl);

exports.default = ProgressBar;

},{}],3:[function(require,module,exports){
module.exports=[
  {"text":"Planning", "status":"done"},
  {"text":"Development", "status":"progress"},
  {"text":"Testing", "status":"none"},
  {"text":"Production", "status":"none"}
]
},{}]},{},[1]);
