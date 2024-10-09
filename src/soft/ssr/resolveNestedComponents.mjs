export async function resolveNestedComponents(module, document, originalHTML) {
    const ComponentUses = module.COMPONENT_USES;
    
    // Parse the HTML string into a DOM structure
    let container = document.createElement('div');
    container.innerHTML = originalHTML;  // Convert HTML string to DOM structure
    
    const componentNames = container.querySelectorAll("component-use");

    let CSS = "";

    for (let i = 0; i < componentNames.length; i++) {
        const component = ComponentUses[componentNames[i].id];

        if (!component) continue;

        const childModule = await module.importComponent(component.importPath);
        const componentId = childModule.COMPONENT_ID;

        const data = childModule.loadData ? await childModule.loadData() : undefined;

        // Render the component, assumed to be a string
        let elementHTML = await childModule.SSRElement({ data });

        // Parse the string HTML into a DOM fragment
        let renderedFragment;
        if (typeof elementHTML === "string") {
            renderedFragment = document.createRange().createContextualFragment(elementHTML);
        } else {
            renderedFragment = elementHTML;
        }

        // Replace component-use with rendered fragment
        componentNames[i].replaceWith(renderedFragment);

        // Handle CSS for the child component
        CSS += childModule.style ? `<style class="${componentId}">${await childModule.style()}</style>` : "";

        // Recursively resolve nested components
        const nestedResult = await resolveNestedComponents(childModule, document, container.innerHTML);

        // Combine CSS from nested components
        CSS += nestedResult.css;
    }

    // Return the updated HTML as a string
    return {
        html: container.innerHTML,  // Convert back to an HTML string
        css: CSS
    };
}
