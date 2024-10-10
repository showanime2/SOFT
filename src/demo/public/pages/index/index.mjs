import { createComponent } from "../../../../soft/components/create.mjs"
import { mountComponent } from "../../../../soft/components/mount/mountComponent.mjs"
import { useMount } from "../../../../soft/components/mount/useMount.mjs"
import { Reviews } from "../../components/reviews.mjs"
import { Top } from "../../components/top.mjs"

async function loadData() {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const data = await res.json()
    return data
}

function element({ data, props }) {
    return `
        <div class="app">
            ${useMount(Top)}
            ${useMount(Reviews, { props: data })}
        </div>
    `
}

function style() {
    return /*css*/`
        .app {
            display: flex;
            flex-direction: column;
            height: fit-content;
            width: 100vw;
        }
    `
}

function script(element) {

}

export const Index = createComponent(element, style, loadData)
mountComponent(Index, ".app")