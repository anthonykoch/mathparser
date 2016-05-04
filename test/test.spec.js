'use strict';

const test = require('tape');
const { Evaluator } = require('../index');

function setup(input) {
	return new Evaluator({ data: input }).eval();
}

test('nth square root simple', function (assert) {
	const expected = 2;
	const actual = setup('4 √ 2');
	assert.equal(actual, expected, 'nth square root simple');
	assert.end();
});

test('nth square root with multiplication', function (assert) {
	const expected = 6.7400307729863883368711815695154;
	const actual = setup('5 * 6 √ 6');
	assert.equal(actual, expected, 'nth square root with multiplication');
	assert.end();
});

test('exponent simple', function (assert) {
	const expected = 16;
	const actual = setup('4 ** 2');
	assert.equal(actual, expected, 'exponent simple');
	assert.end();
});

test('exponent with multiplcation', function (assert) {
	const expected = 32;
	const actual = setup('4 ** 2 * 2');
	assert.equal(actual, expected, 'exponent with multiplcation');
	assert.end();
});

test('exponent with parenthesized multiplication', function (assert) {
	const expected = 256;
	const actual = setup('4 ** (2 * 2)');
	assert.equal(actual, expected, 'exponent with parenthesized multiplication');
	assert.end();
});

test('addition with multiplication', function (assert) {
	const expected = 11;
	const actual = setup('2 + 3 * 3');
	assert.equal(actual, expected, 'addition with multiplication');
	assert.end();
});

test('parenthesized addition with multiplication', function (assert) {
	const expected = 15;
	const actual = setup('(2 + 3) * 3');
	assert.equal(actual, expected, 'parenthesized addition with multiplication');
	assert.end();
});