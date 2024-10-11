import { createComponent } from "../../../soft/components/create.mjs"
import { useMount } from "../../../soft/components/mount/useMount.mjs"
import { Card } from "./card.mjs"

function element({ props, data }) {
    let cards = ""
    for (let i = 0; i < 10; i++) {
        cards += `${useMount(Card, { props, data })}`
    }

    return `
        <div class="card-wrapper">
            ${useMount(Card, { props, data })}
            ${useMount(Card, { props: {...props, title: "something"}, data })}
            ${cards}
        </div>
    `
}

function style() {
    return /*css*/`
        .card-wrapper {
            display: flex;
            flex-wrap: wrap;
            height: fit-content;
            width: 100vw;
        }
    `
}

export function Reviews(props) {
    return createComponent({
        elementFn: element,
        styleFn: style,
        props,
        componentId: COMPONENT_ID
    })
}