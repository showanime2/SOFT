import { createComponent } from "../../../soft/components/create.mjs"

function element({ props }) {
    return `
        <a class="card" href="/${props?.id}">
            <div class="top">
                <img class="profile-photo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNupCwfSPATZwd25fjrcT3hjsB24vwpVSS2g&s" alt="pfp"/>
            </div>
            <div class="description">${props?.title}</div>
        </a>
    `
}

function style() {
    return /*css*/`        
        .card {
            display: flex;
            flex-direction: column;
            height: 25vw;
            width: 25vw;
            padding: 1vw;
            margin: 0.5vw;
            background: white;
            border-radius: 1vw;
        }
        
        .top {
            display: flex;
            height: 5vw;
            width: 5vw;
        }
        
        .profile-photo {
            height: 5vw;
            width: 5vw;
            border-radius: 1vw;
        }
        
        .description {
            display: flex;
            height: fit-content;
            width: fit-content;
            margin: 1vw 0 0 0;
            color: black;
            font-size: 2vw;
        }
    `
}

function script({ props, data, element }) {
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