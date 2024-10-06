import { CreateComponent } from "../soft/components/create/createComponent.mjs"
import { onMount } from "../soft/components/mount/onMount.mjs"

export function element(data) {
    console.log(data)
    return `
        <div class="child">
            This is Child:
             ${JSON.stringify(data)}
        </div>
    `
}

export function style() {
    return /*css*/`
        .child {
            color: red;
        }
    `
}

export async function loadData() {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/2')
    const data = await res.json()

    return { data }
}

export function script(element, data) {
    onMount(() => {
        element.addEventListener("click", () => {
            element.classList.toggle("child")
        })
    })
}

export function Child() {
    return CreateComponent(element, style, script, loadData)
}