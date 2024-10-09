import { createComponent } from "../../../../soft/components/create.mjs"
import { mountComponent } from "../../../../soft/components/mount/mountComponent.mjs"
import { useMount } from "../../../../soft/components/mount/useMount.mjs"
import { Reviews } from "../../components/reviews.mjs"
import { Top } from "../../components/top.mjs"

function element({ data, props }) {
    return `
        <div class="app">
            ${useMount(Top)}
            ${useMount(Reviews)}
        </div>
    `
}

function style() {
    return /*css*/`
        .app {
            display: flex;
            height: fit-content;
            width: 100vw;
        }
    `
}

function script(element) {

}

export const Index = createComponent(element, style)
mountComponent(Index, ".app")