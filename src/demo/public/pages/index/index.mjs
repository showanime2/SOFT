import { createComponent } from "../../../../soft/components/create.mjs"
import { mountComponent } from "../../../../soft/components/mount/mountComponent.mjs"
import { useMount } from "../../../../soft/components/mount/useMount.mjs"
const Top = await import("../../components/top.mjs")

async function element() {
    return `
        <div class="app">
            ${await useMount(Top, Top.Top)}
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

export const Index = await createComponent(element, style)
mountComponent(Index, ".app")