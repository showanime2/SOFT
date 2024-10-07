export function extractElement(elementFunction) {
    let startLineNumber = null
    const lines = elementFunction.functionBlock.split("\n").map(line => line + "\n")
    let element = ""

    const inString = false

    for (let i = 0; i < lines.length; i++) {
        let endLineNumber = null
        const line = lines[i];
        const chars = line.split("")

        if (!inString && line.includes("return")) {
            startLineNumber = elementFunction.start + i

            const afterReturn = line.split("return")[1]
            const linesFromReturn = [afterReturn, ...lines.slice(i + 1, -1)]

            let inString = false
            let inStringChar = ""

            for (let j = 0; j < linesFromReturn.length; j++) {
                const line = linesFromReturn[j];
                const chars = line.split("")

                for (let k = 0; k < chars.length; k++) {
                    const char = chars[k];

                    if (inString) {
                        element = element + char
                    }

                    if (char === '"' || char === "'" || char === "`") {
                        if (inString) {
                            if (inStringChar === char) {
                                inString = false
                                endLineNumber = startLineNumber + j
                                return {
                                    element,
                                    start: startLineNumber,
                                    end: endLineNumber
                                }
                            }
                        } else {
                            inString = true
                            element = element + char
                            inStringChar = char
                        }
                    }
                }
            }
        }

        for (let j = 0; j < chars.length; j++) {
            const char = chars[j];

            if (char === '"' || char === "'" || char === "`") {
                if (!inString) {
                    inString = true
                } else {
                    inString = false
                }
            }
        }
    }
}