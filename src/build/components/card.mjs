export const COMPONENT_ID = "sa-d518L3g";
import { createComponent } from "../../soft/components/create.mjs"

export function element({ props }) {
    return `
        <a class="card sa-d518L3g" href="/${props?.id}">
            <div class="top sa-d518L3g">
                <img class="profile-photo sa-d518L3g" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNupCwfSPATZwd25fjrcT3hjsB24vwpVSS2g&amp;s" alt="pfp">
            </div>
            <div class="description sa-d518L3g">${props?.title}</div>
        </a>
    `
}

export function style() {
    return `        
        .card.sa-d518L3g {
            display: flex;
            flex-direction: column;
            height: 25vw;
            width: 25vw;
            padding: 1vw;
            margin: 0.5vw;
            background: white;
            border-radius: 1vw;
        }
        
        .top.sa-d518L3g {
            display: flex;
            height: 5vw;
            width: 5vw;
        }
        
        .profile-photo.sa-d518L3g {
            height: 5vw;
            width: 5vw;
            border-radius: 1vw;
        }
        
        .description.sa-d518L3g {
            display: flex;
            height: fit-content;
            width: fit-content;
            margin: 1vw 0 0 0;
            color: black;
            font-size: 2vw;
        }
    `
}

export function script({ props, data, element }) {
    element.addEventListener("mouseenter", () => {
        element.style.backgroundColor = "red"
    })

    element.addEventListener("mouseleave", () => {
        element.style.backgroundColor = "white"
    })
}

export function Card(props) {
    return createComponent({
        elementFn: element,
        styleFn: style,
        scriptFn: script,
        props,
        componentId: COMPONENT_ID
    })
}


export function SSRElement({ props }) {
    return `
        <a class="card sa-d518L3g" href="/${props?.id}">
            <div class="top sa-d518L3g">
                <img class="profile-photo sa-d518L3g" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNupCwfSPATZwd25fjrcT3hjsB24vwpVSS2g&amp;s" alt="pfp">
            </div>
            <div class="description sa-d518L3g">${props?.title}</div>
        </a>
    `
}

export const COMPONENT_USES = {}

export async function importComponent(path) {
        return await import(path)
    }

