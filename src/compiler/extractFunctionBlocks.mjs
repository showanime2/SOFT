/**
 * 
 * @param {string[]} lines 
 */
export function extractElementFunction(lines) {
    let startLineNumber = null
    let element = ""

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

                if (line.includes("{")) { subBrackets++ }
                if (line.includes("}") && subBrackets > 0) { subBrackets-- }

                if (line.includes("}") && subBrackets === 0) {
                    functionBlock = functionBlock + line
                    endLineNumber = j - 1
                    break
                }

                functionBlock = functionBlock + line
            }

            if (isFunctionStart === "element") {
                element = functionBlock
                return {
                    element,
                    start: startLineNumber,
                    end: endLineNumber
                }
            }
        }
    }
}

/**
 * 
 * @param {string} line 
 */
function isLineFunctionStart(line) {
    const elementFunctionNames = ["function app", "function element", "function html", "function template"]
    const styleFunctionNames = ["function style", "function css"]
    const scriptFunctionNames = ["function logic", "function script", "function js"]

    if (elementFunctionNames.some(name => line.includes(name))) return "element"

    return ""
}