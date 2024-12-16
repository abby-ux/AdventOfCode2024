const fs = require('fs');

const hasText = (x) => x != '';

const [pageRules, pageInstructions] = fs.readFileSync.toString().split('\n\n');

const rules = pageRules.split('\n').filter(hasText).
map()
