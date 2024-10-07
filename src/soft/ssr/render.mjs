import { JSDOM } from "jsdom";

export async function renderComponent(component, html) {
    console.log(html)
    const dom = new JSDOM(html);
    const document = dom.window.document;

    const app = document.querySelector(".app")
    const styleElementsString = extractStyleElements(component)
    document.head.innerHTML += styleElementsString

    app.outerHTML = component.element
    
    document.body.innerHTML += `
        <script>
            window.SOFT = {}
            window.SOFT.SSR = true
        </script>
    `

    const modifiedHtml = dom.serialize();
    return modifiedHtml
}

function extractStyleElements(component) {
    const styleElementRegex = /<style\b[^>]*>([\s\S]*?)<\/style>/gi;

    const matches = component.element.match(styleElementRegex);
    
    let styleElementsString = component.css || ""
    styleElementsString = styleElementsString + matches.join("")
    
    return styleElementsString
}