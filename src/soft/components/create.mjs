import { compileStyle } from "../compiler/css/addComponentIdToStyle.mjs"
import { htmlStringToElement } from "../dom/util.mjs"
import { addComponentIdToElements } from "./id/addIdToElements.mjs"
import { generateComponentId } from "./id/generateId.mjs"

export function createComponent(elementFn, styleFn) {
    if (typeof window === "undefined") return
    if (window.SOFT?.SSR) return

    const id = generateComponentId(7)

    const element = elementFn({})
    const HTMLElement = htmlStringToElement(element)
    addComponentIdToElements(id, HTMLElement)

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