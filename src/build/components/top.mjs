export const COMPONENT_ID = "sa-4XX39hP";
import { createComponent } from "../../soft/components/create.mjs"

export async function element() {
    return `
        <div class="top sa-4XX39hP">
            <div class="logo sa-4XX39hP">
                <div class="s sa-4XX39hP">S</div>
                <div class="o sa-4XX39hP">O</div>
                <div class="f sa-4XX39hP">F</div>
                <div class="t sa-4XX39hP">T</div>
            </div>
            <div class="description sa-4XX39hP">A New Way Of Web Apps.</div>
        </div>
    `
}

export function style() {
    return `
        .top.sa-4XX39hP {
            display: flex;
            flex-direction: column;
            height: fit-content;
            width: 100vw;
            margin: 10vw 0;
        }
        
        .logo.sa-4XX39hP {
            display: flex;
            height: fit-content;
            width: fit-content;
            margin: auto;
            font-size: 5vw;
            font-weight: 700;
            letter-spacing: 0.5vw;
        }
        
        .s.sa-4XX39hP {color: red;}
        
        .o.sa-4XX39hP {
            color: pink;
        }
        
        .f.sa-4XX39hP {
            color: lime;
        }
        
        .t.sa-4XX39hP {
            color: deepskyblue;
        }
        
        .description.sa-4XX39hP {
            display: flex;
            height: fit-content;
            width: fit-content;
            margin: 1vw auto;
            color: white;
        }
    `
}

export async function Top() {
    return await createComponent(element, style)
}


export async function SSRElement() {
    return `
        <div class="top sa-4XX39hP">
            <div class="logo sa-4XX39hP">
                <div class="s sa-4XX39hP">S</div>
                <div class="o sa-4XX39hP">O</div>
                <div class="f sa-4XX39hP">F</div>
                <div class="t sa-4XX39hP">T</div>
            </div>
            <div class="description sa-4XX39hP">A New Way Of Web Apps.</div>
        </div>
    `
}

export const COMPONENT_USES = {}

export async function importComponent(path) {
        return await import(path)
    }

