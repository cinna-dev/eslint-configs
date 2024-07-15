/* eslint-disable arrow-body-style */
/* eslint-disable id-length */
//Examples of incorrect code for this rule:

/*eslint no-confusing-arrow: "error"*/
/*eslint-env es6*/

var x = (a) => (1 ? 2 : 3);
var x = (a) => (1 ? 2 : 3);
//Examples of correct code for this rule:

/*eslint no-confusing-arrow: "error"*/
/*eslint-env es6*/
var x = (a) => (1 ? 2 : 3);
var x = (a) => (1 ? 2 : 3);
var x = (a) => {
  return 1 ? 2 : 3;
};
var x = (a) => {
  return 1 ? 2 : 3;
};
