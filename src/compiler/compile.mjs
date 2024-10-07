import { JSDOM } from "jsdom";
import { extractElementFunction, extractScriptFunction, extractStyleFunction } from "./extractFunctionBlocks.mjs";
import { extractElement } from "./extractElement.mjs";
import { compileStyle } from "./compileStyle.mjs";
import { replaceElement } from "./replaceElement.mjs";
import { modifyScript } from "./modifyScript.mjs";

export function compile(fileContents) {
    const lines = fileContents.split("\n").map(line => line + "\n")

    const uniqueId = generateUniqueId();
    lines.unshift(`const COMPONENT_ID = "${uniqueId}";\n\n`);
    fileContents = fileContents.replace('function script(element', `function script(element = document.querySelector(".${uniqueId}")`);

    const elementBlock = extractElementFunction(lines);
    const element = extractElement(elementBlock);
    const transformedElement = addComponentIdToElements(element.element, uniqueId);
    replaceElement(lines, element.start, element.end, transformedElement);

    const styleBlock = extractStyleFunction(lines);
    const style = extractElement(styleBlock);
    const compiledStyle = compileStyle(style.element, uniqueId)
    replaceElement(lines, style.start, style.end, compiledStyle)

    const scriptBlock = extractScriptFunction(lines);
    modifyScript(lines, scriptBlock)

    addClearFunction(lines)

    fileContents = lines.join("")

    return fileContents
}


function generateUniqueId() {
    const alphanumericSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let uniqueId = 'sa-';

    for (let i = 0; i < 9; i++) {
        uniqueId += alphanumericSet.charAt(Math.floor(Math.random() * alphanumericSet.length));
    }

    return uniqueId;
}

function addComponentIdToElements(element, componentId) {
    const jsdom = new JSDOM(element);
    const allElements = jsdom.window.document.body.querySelectorAll("*");

    for (let i = 0; i < allElements.length; i++) {
        allElements[i].classList.add(componentId);
    }

    return jsdom.window.document.body.innerHTML;
}

function addClearFunction(lines) {
    return lines.push(`
function clear() {
    document.querySelector(\`.${'${COMPONENT_ID}'}\`).remove();
    document.querySelector(\`style#${'${COMPONENT_ID}'}\`).remove();
}`);
}