export function modifyImportRoutes(lines) {
    const SOFT_KEYWORD = 'soft';
    const RELATIVE_PATH = '../';
    
    for (let i = 0; i < lines.length; i++) {
        let line = lines[i];
        
        if (!line.includes('import')) {
            continue;
        }

        const indexBracket = line.indexOf('}');
        if (indexBracket === -1) {
            continue;
        }

        const afterBracket = line.slice(indexBracket);
        if (afterBracket.includes(SOFT_KEYWORD)) {
            lines[i] = line.replace(RELATIVE_PATH, '');
        }
    }
    
    return lines;
}