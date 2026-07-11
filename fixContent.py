import re

with open('src/lib/courseContent.ts', 'r') as f:
    text = f.read()

courses = [
  'kelas-pemula', 'mindset-kunci', 'manajemen-waktu', 'fokus-maksimal', 
  'membangun-kebiasaan', 'saham-dasar', 'kripto-dasar', 'memulai-bisnis',
  'digital-marketing', 'komunikasi-efektif', 'kesehatan-mental', 'kebugaran-fisik',
  'ui-ux-design', 'graphic-design', 'mental-health', 'health-fitness', 
  'nutrition-diet', 'web-dev', 'data-science', 'ai-tools', 'laporan-keuangan', 
  'startup-bisnis', 'ecommerce-dasar', 'personal-finance', 'passive-income', 
  'growth-mindset', 'time-management'
]

for c in courses:
    # Handle single line moduleTitles
    text = re.sub(r'(moduleTitles:\s*\{[^\}]+\},)\s*("' + c + '":\s*\{)', r'\1\n    },\n    \2', text)
    # Handle multi line moduleTitles
    text = re.sub(r'(\n\s*\},)\s*("' + c + '":\s*\{)', r'\1\n    },\n    \2', text)

with open('src/lib/courseContent.ts', 'w') as f:
    f.write(text)
print("Fixed!")
