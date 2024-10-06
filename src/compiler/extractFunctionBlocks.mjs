/**
 * 
 * @param {string[]} lines 
 */
export function extractElementFunction(lines) {
    let startLineNumber = null
    let element = ""

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        const isFunctionStart = isLineElementFunctionStart(line)
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
 * @param {string[]} lines 
 */
export function extractStyleFunction(lines) {
    let startLineNumber = null
    let element = ""

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        const isFunctionStart = isLineStyleFunctionStart(line)
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

            if (isFunctionStart === "style") {
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
function isLineElementFunctionStart(line) {
    const elementFunctionNames = ["function app", "function element", "function html", "function template"]

    if (elementFunctionNames.some(name => line.includes(name))) return "element"

    return ""
}

/**
 * 
 * @param {string} line 
 */
function isLineStyleFunctionStart(line) {
    const styleFunctionNames = ["function style", "function css"]

    if (styleFunctionNames.some(name => line.includes(name))) return "style"

    return ""
}