'use strict';

const path = require('path');

require('glob')
	.sync('./**/*.spec.js')
	.forEach(function(file) {
		require(path.resolve(file));
	});