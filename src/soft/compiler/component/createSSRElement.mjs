import { extractFunctionBlock } from "./extractFunctionBlock.mjs";

export function createSSRElement(fileContents) {
    const lines = fileContents.split('\n').map(line => line + '\n');
    const elementBlock = extractFunctionBlock(lines, "element");
    
    lines.push("\n");

    const start = lines.length;

    const SSRElementFunction = elementBlock.functionBlock
        .replace("element", "SSRElement")
        .split("\n")
        .map(line => line + "\n");

    lines.push(...SSRElementFunction);

    const end = lines.length - 1;  // -1 because array is 0-indexed

    const { imports, componentUses } = findComponentImports(lines, { start, end });
    lines.push(`export const COMPONENT_USES = ${JSON.stringify(componentUses, null, 4)}\n\n`)

    lines.push(`export async function importComponent(path) {
        return await import(path)
    }\n\n`)

    return lines
}

function findComponentImports(lines, elementBlock) {
    const imports = {};
    const componentUses = {};

    // Find imports in the entire file
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        const importMatch = line.match(/import\s*{([^}]+)}\s*from\s*['"]([^'"]+)['"]/);

        if (importMatch) {
            const components = importMatch[1].split(',').map(comp => comp.trim());
            const importPath = importMatch[2];

            components.forEach(component => {
                imports[component] = {
                    path: importPath,
                    line: i + 1
                };
            });
        }
    }

    // Only look for component uses within the SSR function
    for (let i = elementBlock.start; i <= elementBlock.end; i++) {
        const line = lines[i];
        const useMatches = line.match(/\${useMount\(([^)]+)\)}/g);

        if (useMatches) {
            useMatches.forEach(use => {
                const componentMatch = use.match(/\${useMount\(([^)]+)\)}/);
                if (componentMatch) {
                    const componentName = componentMatch[1].trim();
                    const importInfo = imports[componentName] || { path: 'Import not found', line: -1 };

                    componentUses[componentName] = {
                        component: componentName,
                        fullMatch: use,  // Added this for easier replacement later if needed
                        importPath: importInfo.path,
                        importLine: importInfo.line,
                        useLine: i + 1,
                    };

                    lines[i] = line.replace(use, `<component-use id="${componentName}"></component-use>`);
                }
            });
        }
    }

    return {
        imports,
        componentUses
    };
}