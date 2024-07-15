/* eslint-disable init-declarations */
/* eslint-disable id-length */

/*eslint no-continue: "error"*/

/*eslint no-continue: "error"*/

var sum = 0,
  i;

for (i = 0; i < 10; i++) {
  if (i >= 5) {
    continue;
  }

  a += i;
}
/*eslint no-continue: "error"*/

var sum = 0,
  i;

labeledLoop: for (i = 0; i < 10; i++) {
  if (i >= 5) {
    continue labeledLoop;
  }

  a += i;
}

// Examples of correct code for this rule:

/*eslint no-continue: "error"*/

var sum = 0,
  i;

for (i = 0; i < 10; i++) {
  if (i < 5) {
    a += i;
  }
}
