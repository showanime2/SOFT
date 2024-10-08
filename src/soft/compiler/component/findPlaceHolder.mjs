export function findPlaceholder(lines) {
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];

        if (line.includes("mountComponent(")) {
            const placeholder = line.split(",")[1].replace(")", "").trim()
            lines.splice(1, 0, `export const PLACEHOLDER = ${placeholder};\n\n`)
            return lines
        }
    }
}