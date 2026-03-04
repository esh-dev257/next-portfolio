const fs = require('fs');
const path = require('path');

const iconsList = JSON.parse(fs.readFileSync('d:/Study/next-portfolio/icons-list.json', 'utf8'));
const componentsDir = 'd:/Study/next-portfolio/app/components';

// Helper to convert PascalCase to kebab-case
function toKebabCase(str) {
  return str.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}

// Map some specific Lucide icons to best pixel icon equivalent
const customMap = {
  Github: 'github',
  Linkedin: 'linkedin',
  ExternalLink: 'external-link',
  ChevronLeft: 'chevron-left',
  ChevronRight: 'chevron-right',
  ChevronUp: 'chevron-up',
  ChevronDown: 'chevron-down',
  Menu: 'bars',
  X: 'times',
  Briefcase: 'business',
  Mail: 'envelope',
  FileText: 'file',
  Trophy: 'trophy',
  Zap: 'bolt',
  Users: 'users',
  Code: 'code',
  Code2: 'code',
  Award: 'star',
  Rocket: 'plane-departure',
  Brain: 'face-thinking',
  Terminal: 'code-block',
  Ship: 'plane',
  Scan: 'search',
  Fingerprint: 'lock',
  PenTool: 'pen',
  Monitor: 'tv',
  Layers: 'grid',
  Layout: 'grid',
  Palette: 'themes',
  Braces: 'code',
  Hexagon: 'box',
  Server: 'database',
  Database: 'database',
  DbIcon: 'database',
  Box: 'box-usd',
  Boxes: 'box-usd',
  Component: 'code-block',
  Triangle: 'play',
  Shield: 'lock',
  TrendingUp: 'trending',
  TabletSmartphone: 'mobile',
  Blocks: 'grid',
  Webhook: 'link',
  CloudUpload: 'cloud-upload',
  Folder: 'folder',
  FileCode: 'file',
  HardDrive: 'save',
  Cpu: 'cog',
  Plug: 'bolt',
  GitBranch: 'code-branch',
  Cloud: 'cloud',
  MessageSquare: 'comment',
  Flame: 'fire',
  Key: 'lock-open',
  Move: 'arrows-alt',
  Share2: 'share',
  BarChart3: 'chart-line',
  Calendar: 'calender', // pixel icons has 'calender'
  Loader2: 'spinner'
};

const missingIcons = new Set();
const files = fs.readdirSync(componentsDir).filter(f => f.endsWith('.tsx'));

for (const file of files) {
  const filePath = path.join(componentsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Find the lucide-react import
  const importRegex = /import\s+\{([^}]+)\}\s+from\s+['"]lucide-react['"];?/g;
  let match;
  let importedIcons = [];
  while ((match = importRegex.exec(content)) !== null) {
    importedIcons = importedIcons.concat(match[1].split(',').map(s => s.trim().split(' as ')[0]).filter(Boolean));
  }

  if (importedIcons.length > 0) {
    // Remove the import statement
    content = content.replace(importRegex, '');

    // Replace usages
    for (const icon of importedIcons) {
      let mappedName = customMap[icon] || toKebabCase(icon);
      if (!iconsList.includes(mappedName)) {
        missingIcons.add(icon + ' -> ' + mappedName);
      }
      
      // Regex to find <IconName ...props /> 
      // This is a bit simplistic but works for most standard cases
      const tagRegex = new RegExp(`<${icon}([^>]*?)/?>`, 'g');
      content = content.replace(tagRegex, (fullMatch, propsString) => {
        let size = 24;
        let className = '';

        // Extract style and other props lightly
        let restProps = propsString;
        
        const sizeMatch = propsString.match(/size=\{?['"]?(\d+)['"]?\}?/);
        if (sizeMatch) {
          size = sizeMatch[1];
          restProps = restProps.replace(sizeMatch[0], '');
        }

        const classMatch = propsString.match(/className=(?:\{['"`](.*?)['"`]\}|['"`](.*?)['"`])/);
        if (classMatch) {
          className = classMatch[1] || classMatch[2];
          restProps = restProps.replace(classMatch[0], '');
        }

        // Just build an <i> tag since that's what Pixel Icon Library uses
        return `<i className="hn hn-${mappedName} ${className}" style={{ fontSize: '${size}px' }} ${restProps.trim()}></i>`;
      });
    }

    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${file}`);
  }
}

if (missingIcons.size > 0) {
  console.log('\\nWARNING: Some icons might not map exactly or are missing in pixel icon library:');
  for (const m of missingIcons) console.log(m);
} else {
  console.log('All icons mapped successfully.');
}
