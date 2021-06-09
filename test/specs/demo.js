describe("demonstrartin of mocha suite1", () => {
    it("test case1", ()=> {
        //place to write test scripts
        console.log("demo1");
    })
    it("test case2", ()=> {
        //place to write test scripts
        console.log("demo2");
    })
    it("test case3", ()=> {
        //place to write test scripts
        console.log("demo3");
    })
})


describe("demonstrartin of mocha outersuite", () => {
    describe('demonstrartin of mocha innersuite', () => {
        it("test case1", ()=> {
            //place to write test scripts
            console.log("I demo1");
        })
        it("test case2", ()=> {
            //place to write test scripts
            console.log("I demo2");
        })
        it.only("test case3", ()=> {
            //place to write test scripts
            console.log("I demo3");
        })
        
    });
    
})

it.skip('indivisual it block', () => {
    console.log("independent");
    
});


