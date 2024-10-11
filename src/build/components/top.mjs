export const COMPONENT_ID = "sa-p4gze5d";
import { createComponent } from "../../soft/components/create.mjs"

export function element() {
    return `
        <div class="top sa-p4gze5d">
            <div class="logo sa-p4gze5d">
                <div class="s sa-p4gze5d">S</div>
                <div class="o sa-p4gze5d">O</div>
                <div class="f sa-p4gze5d">F</div>
                <div class="t sa-p4gze5d">T</div>
            </div>
            <div class="description sa-p4gze5d">A New Way Of Web Apps.</div>
        </div>
    `
}

export function style() {
    return `
        .top.sa-p4gze5d {
            display: flex;
            flex-direction: column;
            height: fit-content;
            width: 100vw;
            margin: 10vw 0;
        }
        
        .logo.sa-p4gze5d {
            display: flex;
            height: fit-content;
            width: fit-content;
            margin: auto;
            font-size: 5vw;
            font-weight: 700;
            letter-spacing: 0.5vw;
        }
        
        .s.sa-p4gze5d {color: red;}
        
        .o.sa-p4gze5d {
            color: pink;
        }
        
        .f.sa-p4gze5d {
            color: lime;
        }
        
        .t.sa-p4gze5d {
            color: deepskyblue;
        }
        
        .description.sa-p4gze5d {
            display: flex;
            height: fit-content;
            width: fit-content;
            margin: 1vw auto;
            color: white;
        }
    `
}

export function Top(props) {
    return createComponent({
        elementFn: element,
        styleFn: style,
        props,
        componentId: COMPONENT_ID
    })
}


export function SSRElement() {
    return `
        <div class="top sa-p4gze5d">
            <div class="logo sa-p4gze5d">
                <div class="s sa-p4gze5d">S</div>
                <div class="o sa-p4gze5d">O</div>
                <div class="f sa-p4gze5d">F</div>
                <div class="t sa-p4gze5d">T</div>
            </div>
            <div class="description sa-p4gze5d">A New Way Of Web Apps.</div>
        </div>
    `
}

export const COMPONENT_USES = {}

export async function importComponent(path) {
        return await import(path)
    }

