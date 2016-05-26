describe("Script", function() {
	var script;

	beforeEach(function(){
		script = new Script();
	});

	it("should be fizzBuzz is a function", function() {
		expect(typeof script.fizzBuzz).toEqual('function');
	});
});