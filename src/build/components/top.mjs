export const COMPONENT_ID = "sa-WRpyUPO";
import { createComponent } from "../../soft/components/create.mjs"

export async function element() {
    return `
        <div class="top sa-WRpyUPO">
            <div class="logo sa-WRpyUPO">
                <div class="s sa-WRpyUPO">S</div>
                <div class="o sa-WRpyUPO">O</div>
                <div class="f sa-WRpyUPO">F</div>
                <div class="t sa-WRpyUPO">T</div>
            </div>
            <div class="description sa-WRpyUPO">A New Way Of Web Apps.</div>
        </div>
    `
}

export function style() {
    return `
        .top.sa-WRpyUPO {
            display: flex;
            flex-direction: column;
            height: fit-content;
            width: 100vw;
            margin: 10vw 0;
        }
        
        .logo.sa-WRpyUPO {
            display: flex;
            height: fit-content;
            width: fit-content;
            margin: auto;
            font-size: 5vw;
            font-weight: 700;
            letter-spacing: 0.5vw;
        }
        
        .s.sa-WRpyUPO {color: red;}
        
        .o.sa-WRpyUPO {
            color: pink;
        }
        
        .f.sa-WRpyUPO {
            color: lime;
        }
        
        .t.sa-WRpyUPO {
            color: deepskyblue;
        }
        
        .description.sa-WRpyUPO {
            display: flex;
            height: fit-content;
            width: fit-content;
            margin: 1vw auto;
            color: white;
        }
    `
}

export const Top = await createComponent(element, style)
