const code = require('fs').readFileSync('src/lib/translations.ts', 'utf8');
let depth = 0;
let inString = false;
let escape = false;
const lines = code.split('\n');

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  for (let j = 0; j < line.length; j++) {
    const c = line[j];
    if (inString) {
      if (escape) {
        escape = false;
      } else if (c === '\\') {
        escape = true;
      } else if (c === '"') {
        inString = false;
      }
    } else {
      if (c === '"') {
        inString = true;
      } else if (c === '{') {
        depth++;
      } else if (c === '}') {
        depth--;
        if (depth === 0) {
            console.log(`Object closed at line ${i+1}, column ${j+1}`);
        }
      }
    }
  }
}
