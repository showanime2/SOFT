export const COMPONENT_ID = "sa-dFcDksQ";
import { createComponent } from "../../soft/components/create.mjs"
import { useMount } from "../../soft/components/mount/useMount.mjs"
const Card = await import("./card.mjs")

export async function element() {
    return `
        <div class="card-wrapper sa-dFcDksQ">
            ${await useMount(Card, Card.Card, '1')}
        </div>
    `
}

export function style() {
    return `.sa-dFcDksQ.sa-dFcDksQ
.sa-dFcDksQ .sa-dFcDksQ .sa-dFcDksQ .sa-dFcDksQ .sa-dFcDksQ .sa-dFcDksQ .sa-dFcDksQ .sa-dFcDksQ .sa-dFcDksQ.sa-dFcDksQ
.sa-dFcDksQ .sa-dFcDksQ .sa-dFcDksQ .sa-dFcDksQ `
}

export async function Reviews() {
    return await createComponent(element, style)
}


export async function SSRElement() {
    return `
        <div class="card-wrapper sa-dFcDksQ">
            ${await useMount(Card, Card.Card, '1')}
        </div>
    `
}

export const COMPONENT_USES = {}

export async function importComponent(path) {
        return await import(path)
    }

