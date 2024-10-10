import { compileStyle } from "../compiler/css/addComponentIdToStyle.mjs"
import { htmlStringToElement } from "../dom/util.mjs"
import { addComponentIdToElements } from "./id/addIdToElements.mjs"
import { generateComponentId } from "./id/generateId.mjs"

export function createComponent(elementFn, styleFn, loadDataFn, props) {
    if (typeof window === "undefined") return
    if (window.SOFT?.SSR) return

    const id = generateComponentId(7)

    const element = elementFn({ props: props?.props })
    const HTMLElement = htmlStringToElement(element)
    addComponentIdToElements(id, HTMLElement)

    if (loadDataFn) rerenderOnData(id, loadDataFn, elementFn, HTMLElement)

    const styleElement = document.createElement("style")
    styleElement.id = id

    if (styleFn) {
        const css = styleFn()
        const compiledCSS = compileStyle(css, id)
        styleElement.textContent = compiledCSS
    }

    return {
        element: HTMLElement,
        styleElement,
    }
}

async function rerenderOnData(id, loadDataFn, elementFn, HTMLElement) {
    const data = await loadDataFn()
    console.log(data)
    const element = elementFn({ data })
    const newElement = htmlStringToElement(element)
    addComponentIdToElements(id, newElement)
    HTMLElement.replaceWith(newElement)
}