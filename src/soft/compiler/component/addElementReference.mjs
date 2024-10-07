export function addElementReference(lines, componentId) {
    let inFunction = false;

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();

        if (line.includes("function")) {
            inFunction = true;
        }

        if (inFunction && line === "") {
            continue;
        }

        if (inFunction && line !== "" && line.includes("script")) {
            for (let j = i; j < lines.length; j++) {
                if (lines[j].includes("element")) {
                    lines[j] = lines[j].replace(
                        "element",
                        `element = document.querySelector(".${componentId}")`
                    );
                    return;
                }
            }
        }
    }
}