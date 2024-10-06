/**
 * 
 * @param {string[]} lines 
 * @param {Number} elementStart 
 * @param {Number} elementEnd 
 * @param {string} transformedElement 
 * @returns 
 */
export function replaceElement(lines, elementStart, elementEnd, transformedElement) {
    lines.splice(elementStart + 2, elementEnd - elementStart)

    lines[elementStart + 1] = `    return ${transformedElement}\n`
    return lines.join("")
}