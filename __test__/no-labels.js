/* eslint-disable no-continue */
label: while (true) {
  // ...
}

label: while (true) {
  break;
}

label: while (true) {
  continue;
}

label: switch (a) {
  case 0:
    break;
}

label: {
  break label;
}

label: if (a) {
  break label;
}
