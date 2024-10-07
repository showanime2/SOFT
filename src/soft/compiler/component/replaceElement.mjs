export function replaceElement(lines, elementStart, elementEnd, transformedElement) {
    lines.splice(elementStart + 2, elementEnd - elementStart)

    lines[elementStart + 1] = `    return ${transformedElement}\n`
    return lines.join("")
}