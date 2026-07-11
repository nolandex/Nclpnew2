const fs = require('fs');
let langContent = fs.readFileSync('src/lib/courseLanguages.ts', 'utf8');

// The keys we added that duplicated:
// mental_health: "Mental Health",
// nutrition: "Nutrition",
// data: "Data",
// design: "Design",

langContent = langContent.replace(/mental_health:.*?\n/g, '');
langContent = langContent.replace(/nutrition:.*?\n/g, '');
langContent = langContent.replace(/data:.*?\n/g, '');
langContent = langContent.replace(/design:.*?\n/g, '');

fs.writeFileSync('src/lib/courseLanguages.ts', langContent);
console.log('Cleaned');
