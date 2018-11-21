(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _calculator = require('./modules/calculator');

(0, _calculator.calculator)(); // Calculator

},{"./modules/calculator":2}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var screen = document.getElementById('js-calculator-screen'),
    keys = document.getElementById('js-calculator-keys');

// Reset Content in Screen
screen.textContent = '0';

// Execute Operation?
var operationStatus = false,
    number1 = void 0,
    typeOperation = void 0;

var calculator = function calculator() {
  if (!keys) return;
  keys.addEventListener('click', function (e) {
    var t = e.target,
        d = t.dataset;

    // detectar pulsar un número
    if (d.number) writeScreen(d.number); // Ok
    // detectar pulsar una operación matemática
    if (d.math) getOperation(t, d.math); // Ok
    // detectar pulsar una otra operación
    if (d.operation) runOperation(d.operation);
  });
};

// Write in Screen
var writeScreen = function writeScreen(number) {
  screen.textContent === '0' || operationStatus === true ? screen.textContent = number : number === '.' && !screen.textContent.includes('.') ? screen.textContent += number : number !== '.' ? screen.textContent += number : null;

  operationStatus = false;
};

// Get Operation
var getOperation = function getOperation(element, operation) {
  operationStatus = true;
  number1 = Number(screen.textContent);
  typeOperation = operation;
  screen.textContent = element.textContent;
};

// Run Operation
var runOperation = function runOperation(operation) {

  // Get Result
  var getResult = function getResult(number1, typeOperation) {
    var number2 = Number(screen.textContent);
    var result = void 0;
    switch (typeOperation) {
      case 'add':
        result = number1 + number2;
        break;
      case 'minus':
        result = number1 + number2;
        break;
      case 'multiply':
        result = number1 * number2;
        break;
      case 'divide':
        result = number1 / number2;
        break;
      default:
        break;
    }

    result == Infinity ? screen.textContent = 'Error' : screen.textContent = result;
  };

  // Operation
  operation === 'clear' ? screen.textContent = '0' : getResult(number1, typeOperation);

  operationStatus = true;
};

exports.calculator = calculator;

},{}]},{},[1]);

//# sourceMappingURL=scripts-min.js.map
