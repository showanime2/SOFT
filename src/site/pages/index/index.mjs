import { mountComponent } from "../../../soft/components/mount/mountComponent.mjs";
import { Top } from "../../components/top.mjs";

function element() {
    return `
        <div class="main">
            ${mountComponent(Top)}
        </div>
    `
}

export const Index = await CreateComponent(element, style, script, loadData)
mountComponentToElement(Index, ".app")