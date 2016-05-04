# Math parser

This is a project I did for a dribbble challenge for a calculator, which can be [found here](http://codepen.io/anthonykoch/pen/xVQOwb?editors=0010). It was written in a very short amount of time (like 2 days) not efficient and doesn't take floating point errors into account. 


## Supported expressions

- Primary expression 
	- Number literal (does not support exponents)

- Unary expressions
	- Unary plus e.g. "+42 + 6" or "42 \* +6"
	- Unary minus e.g. "-42 + 6" or "42 + -6"

- Exponents and root
	- Exponents through "\*\*" e.g. "4 \*\* 4" evaluates to 256
	- nth root. 

- Multiplicative expressions
	- Division e.g. "20 / 4"
	- Multiplication e.g. "3 * 2"

- Additive expressions
	- Addition e.g. "2 + 6"
	- Subtraction e.g. "6 - 4"

- Parentheses


## Examples

### Evaluator usage

```javascript
const { Evaluator } = require('./index');

const expression = '3 * 2';
const evaluator  new Evaluator({ data: expression });
console.log(evaluator.eval()); // 6
```


## Todo

- [ ] More tests

- [ ] Change the root character to "yroot"

- [ ] Add support for auto closing parens.
