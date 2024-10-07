import { addComponentIdToElementsOnSSR } from "../../components/id/addIdToElementsOnSSR.mjs";
import { generateComponentId } from "../../components/id/generateId.mjs";
import { compileStyle } from "../css/addComponentIdToStyle.mjs";
import { modifyImportRoutes } from "../imports/modifyImportRoutes.mjs";
import { addElementReference } from "./addElementReference.mjs";
import { extractElement } from "./extractElement.mjs";
import { extractFunctionBlock } from "./extractFunctionBlock.mjs";
import { modifyFunction } from "./modifyFunctions.mjs";
import { replaceElement } from "./replaceElement.mjs";

export function compileComponent(fileContents) {
    const lines = fileContents.split('\n').map(line => line + '\n');

    const componentId = generateComponentId(7)

    modifyImportRoutes(lines)

    lines.unshift(`const COMPONENT_ID = "${componentId}";\n\n`)
    addElementReference(lines, componentId)

    modifyFunction(lines)

    const elementBlock = extractFunctionBlock(lines, "element");
    const element = extractElement(elementBlock);

    const compiledElement = addComponentIdToElementsOnSSR(element.element, componentId);
    fileContents = replaceElement(lines, element.start, element.end, compiledElement);

    const styleBlock = extractFunctionBlock(lines, "style");
    const style = extractElement(styleBlock);
    const compiledCSS = compileStyle(style.element, componentId)
    fileContents = replaceElement(lines, style.start, style.end, compiledCSS)

    return fileContents
}