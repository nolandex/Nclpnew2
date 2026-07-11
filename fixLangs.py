import re

with open('src/lib/courseLanguages.ts', 'r') as f:
    content = f.read()

# Fix interface
content = re.sub(
    r'categories:\s*\{[^}]*allCategories:\s*string;\s*\};',
    '''categories: {
        finance: string;
        business: string;
        money: string;
        mindset: string;
        health: string;
        mental_health: string;
        nutrition: string;
        tech: string;
        data: string;
        design: string;
        allCategories: string;
      };''',
    content
)

# Fix duplicate keys in implementations (clean them out entirely first)
content = re.sub(r'mental_health:\s*"Mental Health",\s*', '', content)
content = re.sub(r'nutrition:\s*"Nutrition",\s*', '', content)
content = re.sub(r'data:\s*"Data",\s*', '', content)
content = re.sub(r'design:\s*"Design",\s*', '', content)

# Now inject them once before allCategories
content = re.sub(r'allCategories:\s*"', 'mental_health: "Mental Health", nutrition: "Nutrition", data: "Data", design: "Design", allCategories: "', content)

with open('src/lib/courseLanguages.ts', 'w') as f:
    f.write(content)

print("Done python fix")
