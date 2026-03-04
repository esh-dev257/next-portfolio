const fs = require('fs');
const path = require('path');

const iconsList = JSON.parse(fs.readFileSync('d:/Study/next-portfolio/icons-list.json', 'utf8'));
const componentsDir = 'd:/Study/next-portfolio/app/components';

const files = fs.readdirSync(componentsDir).filter(f => f.endsWith('.tsx'));
const missing = new Set();
const found = new Set();

for (const file of files) {
  const content = fs.readFileSync(path.join(componentsDir, file), 'utf8');
  const matches = [...content.matchAll(/className=["'`][^"'`]*hn-([a-zA-Z0-9-]+)/g)];
  
  for (const m of matches) {
    if (!iconsList.includes(m[1])) {
      missing.add(m[1]);
    } else {
      found.add(m[1]);
    }
  }
}

fs.writeFileSync('d:/Study/next-portfolio/missing-icons.json', JSON.stringify(Array.from(missing), null, 2));
