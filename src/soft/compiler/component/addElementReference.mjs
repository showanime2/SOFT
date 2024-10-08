export function addElementReference(lines, componentId) {
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();
        
        const functionMatch = line.match(/function\s+script\s*\(\s*element\s*\)/);
        if (functionMatch) {
            lines[i] = line.replace(
                'element',
                `element = document.querySelector(".${componentId}")`
            );
            return lines;
        }
    }

    return lines;
}