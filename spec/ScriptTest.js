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
});