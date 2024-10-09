export function extractFunctionBlock(lines, functionName) {
    let startLineNumber = null

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        const isFunctionStart = isLineFunctionStart(line)
        startLineNumber = i-1

        if (isFunctionStart) {
            let endLineNumber = null
            let functionBlock = ""
            let subBrackets = 0

            for (let j = i; j < lines.length; j++) {
                const line = lines[j];
                const chars = line.split("")

                for (let i = 0; i < chars.length; i++) {
                    const char = chars[i];
                    if (char === "{") subBrackets++
                    if (char === "}" && subBrackets > 0) subBrackets--
                }

                if (line.includes("}") && subBrackets === 0) {
                    functionBlock = functionBlock + line
                    endLineNumber = j - 1
                    break
                }

                functionBlock = functionBlock + line
            }

            if (isFunctionStart === functionName) {
                return {
                    functionBlock: functionBlock,
                    start: startLineNumber,
                    end: endLineNumber
                }
            }
        }
    }
}

function isLineFunctionStart(line) {
    if (line.includes("element")) return "element"
    if (line.includes("style")) return "style"
    if (line.includes("script")) return "script"

    return ""
}