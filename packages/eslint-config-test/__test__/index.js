"use strict";
/* eslint-disable func-style */
/* eslint-disable id-length */

/*eslint accessor-pairs: "error"*/
import test from './exportModule';
import {test} from './exportModule';
import {obj} from './exportModule';

let blubb = 1;

const {obj} = require('./exportModule');

const f = obj;

f.hello();
test();

var o = {
  set a(value) {
    this.val = value;
  },
  get a() {
    return this.val;
  },
};

var o = { d: 1 };
Object.defineProperty(o, "c", {
  set: function (value) {
    this.val = value;
  },
  get: function () {
    return this.val;
  },
});

/*eslint accessor-pairs: "error"*/

var o = {
  set a(value) {
    this.val = value;
  },
};

var o = { d: 1 };
Object.defineProperty(o, "c", {
  set: function (value) {
    this.val = value;
  },
});

/*eslint no-alert: "error"*/

alert("here!");

confirm("Are you sure?");

prompt("What's your name?", "John Doe");

/*eslint no-alert: "error"*/

customAlert("Something happened!");

customConfirm("Are you sure?");

customPrompt("Who are you?");

function foo() {
  var alert = myCustomLib.customAlert;
  alert();
}
/*eslint no-array-constructor: "error"*/

Array(0, 1, 2);

new Array(0, 1, 2);

/*eslint no-array-constructor: "error"*/

Array(500);

new Array(someOtherArray.length)[(0, 1, 2)];

/*eslint no-bitwise: "error"*/

var x = y | z;

var x = y & z;

var x = y ^ z;

var x = ~z;

var x = y << z;

var x = y >> z;

var x = y >>> z;

x |= y;

x &= y;

x ^= y;

x <<= y;

x >>= y;

x >>>= y;

/*eslint no-bitwise: "error"*/

var x = y || z;

var x = y && z;

var x = y > z;

var x = y < z;

x += y;

/*eslint no-caller: "error"*/

function foo(n) {
  if (n <= 0) return;

  arguments.callee(n - 1);
}

[1, 2, 3, 4, 5].map(function (n) {
  return !(n > 1) ? 1 : arguments.callee(n - 1) * n;
});

/*eslint no-caller: "error"*/

function foo(n) {
  if (n <= 0) return;

  foo(n - 1);
}

[1, 2, 3, 4, 5].map(function factorial(n) {
  return !(n > 1) ? 1 : factorial(n - 1) * n;
});
