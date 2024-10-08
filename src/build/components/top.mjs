export const COMPONENT_ID = "sa-2roQBt4";
import { createComponent } from "../../soft/components/create.mjs"

export function element() {
    return `
        <div class="top sa-2roQBt4">
                <div class="logo sa-2roQBt4">
                    <div class="s sa-2roQBt4">S</div>
                    <div class="o sa-2roQBt4">O</div>
                    <div class="f sa-2roQBt4">F</div>
                    <div class="t sa-2roQBt4">T</div>
                </div>
                <div class="description sa-2roQBt4">A New Way Of Web Apps.</div>
            </div>
    `
}

export function style() {
    return `
        .top.sa-2roQBt4 {
            display: flex;
            flex-direction: column;
            height: fit-content;
            width: 100vw;
            margin: 10vw 0;
        }
        
        .logo.sa-2roQBt4 {
            display: flex;
            height: fit-content;
            width: fit-content;
            margin: auto;
            font-size: 5vw;
            font-weight: 700;
            letter-spacing: 0.5vw;
        }
        
        .s.sa-2roQBt4 {color: red;}
        
        .o.sa-2roQBt4 {
            color: pink;
        }
        
        .f.sa-2roQBt4 {
            color: lime;
        }
        
        .t.sa-2roQBt4 {
            color: deepskyblue;
        }
        
        .description.sa-2roQBt4 {
            display: flex;
            height: fit-content;
            width: fit-content;
            margin: 1vw auto;
            color: white;
        }
    `
}

export const Top = createComponent(element, style)
