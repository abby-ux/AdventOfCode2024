const fs = require('fs')

function getTestVals(filename) {
    const lines = fs.readFileSync(filename).toString().split('\n');
    const testVals = [];
    const nums = [];
    const sum = 0;
    lines.forEach((line) => {
        const [test, num] = line.split(": ");

        testVals.push(parseInt(t));
        nums.push(num);

    })
    testVals.forEach((testVal) => {
        const nums = nums.split(/\s+/);
        nums.forEach((i) => {
            currentSum = getSum()
            cureentSum2 = getProduct()
        })
    })
}

function getSum(nums) {
    return nums + 
}