import { expect, test } from 'vitest';

test('example', () => {
  expect(true).toBe(true);
});

test('test to be true or false', () => {
  expect(true).toBe(true);
  expect(1).toBeTruthy();
});

test('test object', () => {
  const obj = {
    name: 'zhangSan',
    age: 18,
  };
  expect(obj).toStrictEqual({
    name: 'zhangSan',
    age: 18,
  });
});
