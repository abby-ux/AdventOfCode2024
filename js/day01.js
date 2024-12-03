const fs = require('fs');

function getAnswer() {
    const left = [];
    const right = [];
    const freq = {};
    // read the file in
    const lines = fs.readFileSync('../input.txt').toString().split('\n');
    // split the input up into a left and right list
    lines.forEach((s) => {
        const[l, r] = s.split(/\s+/).map(s => parseInt(s));

        left.push(l);
        right.push(r);
        freq[r] = (freq[r] ?? 0) + 1;
    });
    // sort the lists
    left.sort();
    right.sort();
    // get the total difference of the lists
    diffSum = 0;
    for (let i = 0; i < left.length; i++) {
        diffSum += Math.abs(left[i] - right[i]);
    }
    console.log("difference sum: " + diffSum);

    // get the similarity score
    let similarity = 0;

    left.forEach((num) => {
        similarity += num * (freq[num] ?? 0);
    })
    console.log("similarity: " + similarity);
}

function main() {
    getAnswer();
}

main();