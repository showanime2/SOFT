import { CreateComponent } from "../soft/components/create/createComponent.mjs"
import { onMount } from "../soft/components/mount/onMount.mjs"

export function element(data) {
    return `
        <div class="child">
            This is Child
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

// export async function loadData() {
//     const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//     const data = await res.json()

//     return { data }
// }

export function script(element, data) {
    onMount(() => {
        element.addEventListener("click", () => {
            element.classList.toggle("child")
        })
    })
}

export const Child = await CreateComponent(element, style, script)