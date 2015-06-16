/* @flow */
// jshint ignore:start

import {map} from 'lodash';

// should work
var list = map([5, 6], x=>x+1);
console.log(list);

// should fail flow check
var list2 = map(123, 'foo');
console.log(list2);
