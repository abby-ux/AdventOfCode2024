const fs = require('fs');

function partOne() {
    const lines = fs.readFileSync('C:\\Users\\abby-\\projects\\advent2024\\js\\input.txt').toString().split('\n');
    // .map((line) => line.split(''));
    let count = 0;
    for (let r = 0; r < lines.length; r++) {
        const letters = lines[r].split('');
        for (let c = 0; c < letters.length; c++) {
            if (lines[r][c] != 'X') continue;
            for (let rowDir = -1; rowDir <= 1; rowDir++) {
                for (let colDir = -1; colDir <= 1; colDir++) {
                    if (colDir == 0 && rowDir == 0) continue;
                    if (r + (rowDir * 3) < 0 || r + (rowDir * 3) >= lines.length || 
                    c + (colDir * 3) < 0 || c + (colDir * 3) >= letters.length) continue;
                    if (lines[r + rowDir][c + colDir] == 'M' && lines[r + (rowDir*2)][c + (colDir*2)] == 'A' && lines[r + (rowDir*3)][c + (colDir*3)] == 'S') {
                        count++;
                    }
                }
            }
            
        }
    }
    console.log(count);
    return count;
}

function partTwo() {
    const lines = fs.readFileSync('C:\\Users\\abby-\\projects\\advent2024\\js\\input.txt').toString().split('\n');
    let count = 0;
    for (let r = 0; r < lines.length; r++) {
        const letters = lines[r].split('');
        for (let c = 0; c < letters.length; c++) {
            for (let rowDir = -1; rowDir <= 1; rowDir++) {
                for (let colDir = -1; colDir <= 1; colDir++) {
                    if (rowDir == 0 || colDir == 0) continue;
                    if (r + rowDir < 0 || r + rowDir >= lines.length || 
                        r - rowDir < 0 || r - rowDir >= lines.length ||
                        c + colDir < 0 || c + colDir >= letters.length || 
                        c - colDir < 0 || c - colDir >= letters.length) continue;
                    if (lines[r][c] != 'A') continue;
                    if (((lines[r+rowDir][c+colDir] == 'M' && lines[r-rowDir][c-colDir] == 'S')
                        || (lines[r+rowDir][c+colDir] == 'S' && lines[r-rowDir][c-colDir] == 'M')) &&
                    ((lines[r-rowDir][c+colDir] == 'M' && lines[r+rowDir][c-colDir] == 'S')
                    || (lines[r-rowDir][c+colDir] == 'S' && lines[r+rowDir][c-colDir] == 'M'))) {
                        count++;
                    }
                }
            }
        }
    }
    console.log(count/4);
    return count;
}

partOne();
partTwo();