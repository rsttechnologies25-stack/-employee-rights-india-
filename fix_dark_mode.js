const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(function(file) {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) { 
            results = results.concat(walk(file));
        } else { 
            if (file.endsWith('.jsx')) results.push(file);
        }
    });
    return results;
}

const files = walk('./src');
files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;
    
    // Backgrounds
    content = content.replace(/\bbg-white(?!\s+dark:bg-)/g, 'bg-white dark:bg-gray-950');
    content = content.replace(/\bbg-gray-50(?!\s+dark:bg-)/g, 'bg-gray-50 dark:bg-gray-900');
    
    // Text
    content = content.replace(/\btext-gray-900(?!\s+dark:text-)/g, 'text-gray-900 dark:text-gray-100');
    content = content.replace(/\btext-gray-800(?!\s+dark:text-)/g, 'text-gray-800 dark:text-gray-200');
    content = content.replace(/\btext-gray-700(?!\s+dark:text-)/g, 'text-gray-700 dark:text-gray-300');
    content = content.replace(/\btext-gray-600(?!\s+dark:text-)/g, 'text-gray-600 dark:text-gray-400');
    content = content.replace(/\btext-gray-500(?!\s+dark:text-)/g, 'text-gray-500 dark:text-gray-400');
    
    // Borders
    content = content.replace(/\bborder-gray-100(?!\s+dark:border-)/g, 'border-gray-100 dark:border-gray-800');
    content = content.replace(/\bborder-gray-200(?!\s+dark:border-)/g, 'border-gray-200 dark:border-gray-700');
    content = content.replace(/\bborder-gray-50(?!\s+dark:border-)/g, 'border-gray-50 dark:border-gray-800');
    
    if (content !== original) {
        fs.writeFileSync(file, content, 'utf8');
        console.log(`Updated ${file}`);
    }
});
