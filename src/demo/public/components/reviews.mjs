import { createComponent } from "../../../soft/components/create.mjs"
import { useMount } from "../../../soft/components/mount/useMount.mjs"
const Card = await import("./card.mjs")

async function element() {
    return `
        <div class="card-wrapper">
            ${await useMount(Card, Card.Card, '1')}
        </div>
    `
}

function style() {
    return /*css*/`
        
    `
}

export async function Reviews() {
    return await createComponent(element, style)
}