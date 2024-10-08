export function modifyFunction(lines) {
    addExportStatement(lines)
}

function addExportStatement(lines) {
    const functionPatterns = [
        // Regular function declaration
        /^(\s*)(async\s+)?function\s+(\w+)/,
        // Arrow function with explicit "const/let/var"
        /^(\s*)(const|let|var)\s+(\w+)\s*=\s*(async\s+)?\(/,
        // Arrow function assignment to object property
        /^(\s*)(\w+)\s*:\s*(async\s+)?\(/,
    ];

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        
        if (line.includes("export")) {
            continue;
        }

        for (const pattern of functionPatterns) {
            const match = line.match(pattern);
            if (match) {
                if (isInsideClassDefinition(lines, line)) break;
                
                const functionName = match[3] || match[2];
                
                if (functionName === 'element') {
                    if (line.includes('async')) {
                        lines[i] = `export ${line}`;
                    } else {
                        lines[i] = `export async ${line}`;
                    }
                } else {
                    lines[i] = `export ${line}`;
                }
                break;
            }
        }
    }
}

function isInsideClassDefinition(lines, currentLine) {
    const currentIndex = lines.indexOf(currentLine);
    const previousLines = lines.slice(0, currentIndex);
    let openBraces = 0;
    
    for (const line of previousLines.reverse()) {
        openBraces += (line.match(/{/g) || []).length;
        openBraces -= (line.match(/}/g) || []).length;
        
        if (line.includes('class') && openBraces > 0) {
            return true;
        }
    }
    
    return false;
}