'use strict'

function Script() {
	var number;
};

Script.prototype = {
	fizzBuzz: function(param) {
		if (param === 3) {
			return 'fizz';
		}
		return param;
	}
};