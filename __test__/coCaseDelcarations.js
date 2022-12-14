/* eslint-disable max-classes-per-file */
/* eslint-disable func-style */
/* eslint-disable id-length */

/*eslint no-case-declarations: "error"*/
/*eslint-env es6*/

switch (foo) {
  case 1:
    let x = 1;
    break;
  case 2:
    const y = 2;
    break;
  case 3:
    function f() {}
    break;
  default:
    class C {}
}

/*eslint no-case-declarations: "error"*/
/*eslint-env es6*/

// Declarations outside switch-statements are valid
const a = 0;

switch (foo) {
  // The following case clauses are wrapped into blocks using brackets
  case 1: {
    let x = 1;
    break;
  }
  case 2: {
    const y = 2;
    break;
  }
  case 3: {
    function f() {}
    break;
  }
  case 4:
    // Declarations using var without brackets are valid due to function-scope hoisting
    var z = 4;
    break;
  default: {
    class C {}
  }
}
