import { createComponent } from "../../../soft/components/create.mjs"
import { useMount } from "../../../soft/components/mount/useMount.mjs"
import { Card } from "./card.mjs"

function element() {
    return `
        <div class="card-wrapper">
            ${useMount(Card)}
        </div>
    `
}

function style() {
    return /*css*/`
        
    `
}

export function Reviews() {
    return createComponent(element, style)
}