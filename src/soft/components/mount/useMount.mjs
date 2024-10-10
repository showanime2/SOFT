import { useMountOnSSR } from "../../ssr/useMount.mjs";
import { useMountOnCSR } from "./useComponent.mjs";

export function useMount(component, props) {
    if (typeof window === "undefined") {
        return ""
        return useMountOnSSR(module, props)
    } else {
        component = component(props)
        return useMountOnCSR(component, props)
    }
}