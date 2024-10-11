import { compileStyle } from "../compiler/css/addComponentIdToStyle.mjs"
import { htmlStringToElement } from "../dom/util.mjs"
import { addComponentIdToElements } from "./id/addIdToElements.mjs"
import { generateComponentId } from "./id/generateId.mjs"

export function createComponent({
    elementFn,
    styleFn,
    scriptFn,
    loadDataFn,
    props,
    componentId
}) {

    if (typeof window === "undefined") return
    if (window.SOFT?.SSR) {
        const prop = window.SOFT.props.filter(prop => {
            return prop.componentId === componentId && !prop.hydrated
        })[0] || {}
        prop.hydrated = true

        let elements = Array.from(document.querySelectorAll(`.${componentId}`))
        let element = elements.filter(element => {
            return !element.hydrated && element.tagName !== "STYLE" && !element.parentElement.classList.contains(componentId)
        })[0]
        element.hydrated = true


        if (prop && scriptFn) {
            scriptFn({ ...prop, element })
        }

        elementFn(prop)
        return
    }

    const id = generateComponentId(7)

    const element = elementFn({ props: props?.props })
    const HTMLElement = htmlStringToElement(element)
    addComponentIdToElements(id, HTMLElement)

    if (scriptFn) {
        scriptFn({ props: props?.props, element: HTMLElement })
    }

    if (loadDataFn) rerenderOnData(id, loadDataFn, elementFn, scriptFn, HTMLElement, props?.props)

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

async function rerenderOnData(id, loadDataFn, elementFn, scriptFn, HTMLElement, props) {
    const data = await loadDataFn()

    const element = elementFn({ data })
    const newElement = htmlStringToElement(element)
    props = props || {}

    addComponentIdToElements(id, newElement)

    HTMLElement.replaceWith(newElement)

    scriptFn({ element: newElement, props, data })
}