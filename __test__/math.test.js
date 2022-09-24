const {sumTwoNums, multiplyNums} = require("../math")

test("sumTwoNums function adds two numbers", () => {
    expect(sumTwoNums(1,2)).toEqual(3);
});

describe("multiplyNums function works", () => {
    it("should multiply 2 numbers accurately", () => {
        expect(multiplyNums(2,3)).toEqual(6);
    });

    it("should multiply 3 numbers accurately", () => {
        expect(multiplyNums(2,3,2)).toEqual(12);
    });
});