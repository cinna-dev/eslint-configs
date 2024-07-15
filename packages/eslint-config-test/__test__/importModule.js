'use strict';

import test from './exportModule';
import { test } from './exportModule';
import { obj } from './exportModule';
const { obj } = require('./exportModule');

const func = obj;

func.hello();
test();
