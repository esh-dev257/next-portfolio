const fs = require('fs');
const css = fs.readFileSync('d:/Study/next-portfolio/node_modules/@hackernoon/pixel-icon-library/fonts/iconfont.css', 'utf8');
const matches = [...css.matchAll(/\.hn-([a-zA-Z0-9-]+):before/g)];
const iconNames = matches.map(m => m[1]);
fs.writeFileSync('d:/Study/next-portfolio/icons-list.json', JSON.stringify(iconNames, null, 2));
console.log('Saved', iconNames.length, 'icons to icons-list.json');
