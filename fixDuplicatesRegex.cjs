const fs = require('fs');

const content = fs.readFileSync('src/lib/courseContent.ts', 'utf8');

let newContent = content;
const languages = ['id', 'en', 'es', 'fr', 'de', 'ja', 'zh', 'ru', 'ar', 'ko', 'pt'];
const courses = [
  'kelas-pemula', 'mindset-kunci', 'manajemen-waktu', 'fokus-maksimal', 
  'membangun-kebiasaan', 'saham-dasar', 'kripto-dasar', 'memulai-bisnis',
  'digital-marketing', 'komunikasi-efektif', 'kesehatan-mental', 'kebugaran-fisik',
  'ui-ux-design', 'graphic-design', 'mental-health', 'health-fitness', 
  'nutrition-diet', 'web-dev', 'data-science', 'ai-tools'
];

languages.forEach(lang => {
  const langHeader = `  ${lang}: {`;
  let langStart = newContent.indexOf(langHeader);
  if (langStart === -1) return;
  
  // Find the closing bracket for this language. 
  // Because it's indentation-based, we can look for `  },`
  let langEnd = newContent.indexOf('\n  },', langStart);
  if (langEnd === -1) return;
  
  let block = newContent.substring(langStart, langEnd);
  
  // Now, within this block, we only want to keep the FIRST occurrence of each course.
  courses.forEach(c => {
    // Each course is formatted like `    "course-id": { ... },`
    // We can split the block by `    "${c}": {`
    
    const parts = block.split(`    "${c}": {`);
    if (parts.length > 2) {
      // It's duplicated!
      // parts[0] is everything before the first occurrence.
      // parts[1] is the first occurrence up to the next `    },`
      // parts[2], parts[3] etc are duplicates.
      
      let reconstructed = parts[0] + `    "${c}": {` + parts[1];
      
      for (let i = 2; i < parts.length; i++) {
        // Find where the duplicate object ends
        const endOfObject = parts[i].indexOf('    },');
        if (endOfObject !== -1) {
          // Append anything that comes AFTER the duplicate object (e.g. whitespace, other courses)
          reconstructed += parts[i].substring(endOfObject + 6);
        }
      }
      block = reconstructed;
    }
  });

  newContent = newContent.substring(0, langStart) + block + newContent.substring(langEnd);
});

fs.writeFileSync('src/lib/courseContent.ts', newContent);
console.log('Fixed using split/join');
