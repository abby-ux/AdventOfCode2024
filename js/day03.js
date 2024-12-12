const fs = require('fs');

function partOne() {
    const input = fs.readFileSync('./input.txt').toString();
    const regexp = /mul\((\d+),(\d+)\)/g;

    let result = 0;
    let match;

    while (match = regexp.exec(input)) {
        result += match[1] * match[2];
    }

    console.log(result);
}

function partTwo() {
    const input = fs.readFileSync('./input.txt').toString();
    const regexp = /do(?:n't)*\(\)|mul\((\d+),(\d+)\)/g;

    let result = 0;
    let match;
    let counts = true; 

    while (match = regexp.exec(input)) {
        const [F, num1, num2] = match;

        if (F === 'do()') {
            counts = true; 
        } else if (F === "don't()") {
            counts = false; 
        }

        if (counts && num1 !== undefined && num2 !== undefined) {
            result += parseInt(num1) * parseInt(num2);
        }
    }

    console.log(result);
}

partOne();
partTwo()