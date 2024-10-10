import { createComponent } from "../../../soft/components/create.mjs"
import { useMount } from "../../../soft/components/mount/useMount.mjs"
import { Card } from "./card.mjs"

function element({ props, data }) {
    return `
        <div class="card-wrapper">
            ${useMount(Card, { props })}
        </div>
    `
}

function style() {
    return /*css*/`
        .card-wrapper {
            display: flex;
            height: fit-content;
            width: 100vw;
        }
    `
}

export function Reviews(props) {
    return createComponent(element, style, undefined, props)
}