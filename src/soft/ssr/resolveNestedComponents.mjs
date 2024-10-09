export async function resolveNestedComponents(module, document, originalHTML) {
    const ComponentUses = module.COMPONENT_USES;
    let workingHTML = originalHTML;
    let CSS = "";

    const componentElements = extractComponentElements(workingHTML);

    for (const componentElement of componentElements) {
        const componentId = extractComponentId(componentElement);
        const component = ComponentUses[componentId];

        if (!component) continue;

        const childModule = await module.importComponent(component.importPath);
        const moduleId = childModule.COMPONENT_ID;

        const data = childModule.loadData ? await childModule.loadData() : undefined;

        let elementHTML = await childModule.SSRElement({ data });
        
        workingHTML = workingHTML.replace(componentElement, elementHTML);

        CSS += childModule.style ? `<style class="${moduleId}">${await childModule.style()}</style>` : "";

        const nestedResult = await resolveNestedComponents(childModule, document, workingHTML);
        
        workingHTML = nestedResult.html;
        CSS += nestedResult.css;
    }

    return {
        html: workingHTML,
        css: CSS
    };
}

function extractComponentId(componentElement) {
    const match = componentElement.match(/id=["']([^"']+)["']/);
    return match ? match[1] : null;
}

function extractComponentElements(htmlString) {
    const regex = /<component-use\s+[^>]*?id=["'][^"']+["'][^>]*?(?:\/?>|><\/component-use>)/g;
    return htmlString.match(regex) || [];
}