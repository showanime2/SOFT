import { Child } from "../../components/child.mjs"
import { CreateComponent } from "../../soft/components/create/createComponent.mjs"
import { mountComponent } from "../../soft/components/mount/mountComponent.mjs"
import { mountComponentToElement } from "../../soft/components/mount/mountComponentToElement.mjs"
import { onMount } from "../../soft/components/mount/onMount.mjs"

export function app(data) {
    return `
        <div class="main">
            <div class="text">This is test</div>
            <div class="count">0</div>
            <div class="data">${JSON.stringify(data)}</div>
            ${mountComponent(Child)}
        </div>
    `
}

export function style() {
    return /*css*/`
        .main {
            color: white;
        }
    `
}

export async function loadData() {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const data = await res.json()

    return { data }
}

export function script(element, data) {
    onMount(() => {
        element.querySelector(".text").addEventListener("click", () => {
            element.querySelector(".count").textContent = parseInt(element.querySelector(".count").textContent) + 1
        })
    })
}

export const Index = await CreateComponent(app, style, script, loadData)
mountComponentToElement(Index, ".app")