'use strict';

const test = require('tape');
const { Lexer, operators, TYPE_NUMBER_LITERAL } = require('../index');

function setup(input) {
	return new Lexer({ data: input }).next();
}

operators.forEach(function (operator) {
	test(`Lexes operator "${operator}"`, function (assert) {
		const expected = operator;
		const actual = setup(expected);
		assert.equal(actual, expected, `lexes operator "${operator}"`);
		assert.end();
	});
});

test('Lexes open paren', function (assert) {
	const expected = '(';
	const actual = setup(expected);
	assert.equal(actual, expected, 'lexes open paren');
	assert.end();
});

test('Lexes close paren', function (assert) {
	const expected = ')';
	const actual = setup(expected);
	assert.equal(actual, expected, 'lexes close paren');
	assert.end();
});

test('Allows number literal to be retrieved through method', function (assert) {
	const expected = '123';
	const lexer = new Lexer({ data: expected });
	const token = lexer.next();
	const actual = lexer.getLiteral();
	assert.equal(actual, expected, 'getLiteral returns the value of the current literal');
	assert.equal(token, TYPE_NUMBER_LITERAL, `returns ${TYPE_NUMBER_LITERAL} from lexing number literal`);
	assert.end();
});

test('Lexes integer', function (assert) {
	const expected = '123';
	const lexer = new Lexer({ data: expected });
	const token = lexer.next();
	const actual = lexer.getLiteral();
	assert.equal(actual, expected, 'lexes integer');
	assert.equal(token, TYPE_NUMBER_LITERAL, 'lexes number to type');
	assert.end();
});

test('Lexes float starting with decimal', function (assert) {
	const expected = '.123';
	const lexer = new Lexer({ data: expected });
	const token = lexer.next();
	const actual = lexer.getLiteral();
	assert.equal(actual, expected, 'lexes float');
	assert.equal(token, TYPE_NUMBER_LITERAL, 'lexes number to type');
	assert.end();
});

test('Lexes float starting with a digit', function (assert) {
	const expected = '132.123';
	const lexer = new Lexer({ data: expected });
	const token = lexer.next();
	const actual = lexer.getLiteral();
	assert.equal(actual, expected, 'lexes float starting with digit');
	assert.equal(token, TYPE_NUMBER_LITERAL, 'lexes number to type');
	assert.end();
});