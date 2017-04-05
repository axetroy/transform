/**
 * Created by axetroy on 2017/4/4.
 */

import test from 'ava';
import transform from '../index';

function uppercase(input) {
  return input.toUpperCase();
}

function trim(input) {
  return input.trim();
}

function removeSpace(input) {
  return input.replace(/\s+/g, '');
}

test('simple', t => {
  const src = 'hello world  ';
  const result = transform(src)
    .pipe(uppercase)
    .pipe(trim)
    .pipe(removeSpace)
    .value();
  t.deepEqual(result, 'HELLOWORLD');
});
