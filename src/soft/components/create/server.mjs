import { createStyleElementString } from "../css/createStyleElementString.mjs"

export async function onServerSide(element, css, script, loadData) {
    const data = loadData instanceof Function ? await loadData() : undefined
    const htmlElement = element(data)
    const styleElementString = createStyleElementString(css())

    return {
        element: htmlElement,
        css: styleElementString
    }
}

