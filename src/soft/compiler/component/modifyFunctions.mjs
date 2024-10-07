export function modifyFunction(lines) {
    addExportStatement(lines)
}

function addExportStatement(lines) {
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        
        if (!line.includes("export") && line.includes("function")) {
            lines[i] = line.replace("function", "export function")
        }
    }
}