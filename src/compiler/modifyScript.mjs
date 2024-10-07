/**
 * 
 * @param {string} lines 
 * @param {Object} scriptBlock 
 */
export function modifyScript(lines, scriptBlock) {
    for (let i = scriptBlock.start; i < lines.length; i++) {
        const line = lines[i];

        if (line.includes("(element")) {
            lines[i] = lines[i].replace("(element", "(element = document.querySelector(`.${COMPONENT_ID}`)")
            break
        }
    }
}