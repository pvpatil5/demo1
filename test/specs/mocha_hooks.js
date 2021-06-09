describe('mocha hooks', () => {
    before(function() {
        // runs once before the first test in this block
        console.log("i am from before mocha hook");
    });

    beforeEach(function() {
        // runs before each test in this block
        console.log("i am from beforeeach mocha hook");
    });

    afterEach(function() {
        // runs after each test in this block
        console.log("i am from afterreeach mocha hook");

    });

    after(function() {
        // runs once after the last test in this block
        console.log("i am from after mocha hook");

    });
    
    it('tc_01', () => {
        console.log("this is  tc_01");
    });
    it('tc_02', () => {
        console.log("this is  tc_02");
    });
    it('tc_03', () => {
        console.log("this is  tc_03");
    });
    
});