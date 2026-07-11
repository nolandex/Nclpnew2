const fs = require('fs');

const content = fs.readFileSync('src/lib/courseContent.ts', 'utf8');

// A very hacky but effective way to deduplicate:
// We will match every language block: id: { ... }, en: { ... }
// Inside each block, we will split by course ID and only keep the first one.

const languages = ['id', 'en', 'es', 'fr', 'de', 'ja', 'zh', 'ru', 'ar', 'ko', 'pt'];
const courses = [
  'kelas-pemula', 'mindset-kunci', 'manajemen-waktu', 'fokus-maksimal', 
  'membangun-kebiasaan', 'saham-dasar', 'kripto-dasar', 'memulai-bisnis',
  'digital-marketing', 'komunikasi-efektif', 'kesehatan-mental', 'kebugaran-fisik',
  'ui-ux-design', 'graphic-design', 'mental-health', 'health-fitness', 
  'nutrition-diet', 'web-dev', 'data-science', 'ai-tools'
];

let newContent = content;

languages.forEach(lang => {
  const langHeader = `  ${lang}: {`;
  let langStart = newContent.indexOf(langHeader);
  if (langStart === -1) return;
  
  let langEnd = newContent.indexOf('  },', langStart + 1);
  if (langEnd === -1) langEnd = newContent.length;

  let block = newContent.substring(langStart, langEnd);
  
  courses.forEach(c => {
    const courseRegex = new RegExp(`    "${c}": \\{[^}]*\\},`, 'g');
    let first = true;
    block = block.replace(courseRegex, (match) => {
      if (first) {
        first = false;
        return match;
      }
      return '';
    });
  });

  newContent = newContent.substring(0, langStart) + block + newContent.substring(langEnd);
});

fs.writeFileSync('src/lib/courseContent.ts', newContent);
console.log('Deduplicated');
