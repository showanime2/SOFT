import { JSDOM } from "jsdom";

export async function renderComponent(component, html) {
    const dom = new JSDOM(html);
    const document = dom.window.document;

    const app = document.querySelector(".app")
    app.outerHTML = component.element
    document.head.innerHTML += component.css

    document.body.innerHTML += `
        <script>
            window.SOFT = {}
            window.SOFT.SSR = true
        </script>
    `

    const modifiedHtml = dom.serialize();
    return modifiedHtml
}