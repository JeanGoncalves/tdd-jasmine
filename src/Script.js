'use strict'

function Script() {
	var number;
};

Script.prototype = {
	fizzBuzz: function(param) {
		if (param % 3 === 0) {
			return 'fizz';
		}
		if (param % 5 === 0) {
			return 'buzz';
		}
		return param;
	}
};