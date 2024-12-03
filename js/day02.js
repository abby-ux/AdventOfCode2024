const fs = require('fs');

function getReports(filename) {
    const lines = fs.readFileSync(filename).toString().split('\n');
    const reports = [];
    lines.forEach((line) => {
        const report = line.split(" ").map(num => parseInt(num));
        reports.push(report);
    });
    return reports;
}

function isSafe(report) {
    // if (report.length == 1) return true;
    const increasing = (report[0] - report[1]) < 0 ? true : false;
    for (let i = 1; i < report.length; i++) {
        const diff = Math.abs(report[i-1] - report[i]);
        if (diff > 3 || diff < 1) return false;
        if (increasing && report[i-1] - report[i] > 0) {
            return false;
        } else if (!increasing && report[i-1] - report[i] < 0) {
            return false;
        }
    }
    return true;
}

function getPartOne(filename) {
    const reports = getReports(filename);
    // console.log(reports);
    let safe = 0;
    // loop through the reports and count which ones are safe
    for (let i = 0; i < reports.length; i++) {
        // console.log(reports[i]);
        if (isSafe(reports[i])) {
            safe++;
        }
    }
    console.log("part 1: " + safe);
    return safe;
}

function getPartTwo(filename) {
    const reports = getReports(filename);
    let safe = 0;
    for (let i = 0; i < reports.length; i++) {
        if (isSafe(reports[i])) {
            safe++;
        } else {
            for (let j = 0; j < reports[i].length; j++) {
                const modReport = [...reports[i].slice(0, j), ...reports[i].slice(j + 1)];
                if (isSafe(modReport)) {
                    safe++;
                    break;
                }
            }
        }
    }
    console.log("part 2: " + safe);
}

getPartOne("C:\\Users\\abby-\\projects\\advent2024\\java\\input.txt");
getPartTwo("C:\\Users\\abby-\\projects\\advent2024\\java\\input.txt");