describe("Script", function() {
	var script;

	beforeEach(function(){
		script = new Script();
		console.log(script.fizzBuzz(1));
	});

	it("fizzBuzz é uma função existente", function() {
		expect(typeof script.fizzBuzz).toEqual('function');
	});

	it("fizzBuzz(1) retorna 1", function() {
		expect(script.fizzBuzz(1)).toBe(1);
	});

	it("fizzBuzz(2) retorna 2", function() {
		expect(script.fizzBuzz(2)).toBe(2);
	});

	it("fizzBuzz(3) retorna 'fizz'", function() {
		expect(script.fizzBuzz(3)).toBe('fizz');
	});

	it("fizzBuzz(5) retorna 'buzz'", function() {
		expect(script.fizzBuzz(5)).toBe('buzz');
	});

	it("fizzBuzz(9) retorna 'fizz'", function() {
		expect(script.fizzBuzz(9)).toBe('fizz');
	});

	it("fizzBuzz(10) retorna 'buzz'", function() {
		expect(script.fizzBuzz(10)).toBe('buzz');
	});

	it("fizzBuzz(15) retorna 'fizzbuzz'", function() {
		expect(script.fizzBuzz(15)).toBe('fizzbuzz');
	});
});