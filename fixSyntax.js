const fs = require('fs');

let content = fs.readFileSync('src/lib/courseContent.ts', 'utf8');

// Replace any double closing braces that precede a string key
content = content.replace(/\},\s*\},\s*"/g, '},\n    "');
// Also maybe there are triple closing braces?
content = content.replace(/\},\s*\},\s*\},\s*"/g, '},\n    "');

fs.writeFileSync('src/lib/courseContent.ts', content);
console.log('Fixed braces');
