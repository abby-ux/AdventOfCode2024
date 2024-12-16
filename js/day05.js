const fs = require('fs');

const hasText = (x) => x != '';

function partOne() {
    const fileContent = fs.readFileSync('C:\\Users\\abby-\\projects\\advent2024\\js\\input.txt').toString();

    const [pageRules, pageInstructions] = fileContent.split(/\r?\n\r?\n/).map(section => section.trim());

    let adjList = new Map();
    pageRules.split('\n').filter(hasText).forEach((line) => {
        const [before, after] = line.split('|').map((x) => parseInt(x));

        if (!adjList.has(after)) {
            adjList.set(after, []);
        }

        adjList.get(after).push(before);
    });

    // console.log('Adjacency List:', adjList);

    const instructions = pageInstructions.split('\n').filter(hasText);
    let sum = 0;
    let fixedSum = 0;

    for (const line of instructions) {
        let correct = true;
        const inst = line.split(',').map((x) => parseInt(x));

        for (let i = 0; i < inst.length; i++) {
            for (let j = i + 1; j < inst.length; j++) {
                const iList = adjList.get(inst[i]) || [];
                if (iList.includes(inst[j])) {
                    correct = false;
                }
            }
        }

        if (correct) {
            const middleValue = inst[Math.floor(inst.length / 2)];
            sum += middleValue;
        }
        if (!correct) {
            inst.sort((a, b) => adjList.get(a).filter(num => inst.includes(num)).length - adjList.get(b).filter(num => inst.includes(num)).length);
            fixedSum += inst[Math.floor(inst.length / 2)];
        }
    }

    console.log('Sum:', sum);
    console.log('Fixed Sum:', fixedSum);
    return sum;
}

partOne();
