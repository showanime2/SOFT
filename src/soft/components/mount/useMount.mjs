import { useMountOnSSR } from "../../ssr/useMount.mjs";
import { useMountOnCSR } from "./useComponent.mjs";

export function useMount(component, params) {
    if (typeof window === "undefined") {
        return ""
        return useMountOnSSR(module, params)
    } else {
        component = component()
        return useMountOnCSR(component, params)
    }
}