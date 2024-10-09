import { useMountOnSSR } from "../../ssr/useMount.mjs";
import { useMountOnCSR } from "./useComponent.mjs";

export function useMount(module, component, params) {
    if (typeof window === "undefined") {
        return ""
        return useMountOnSSR(module, params)
    } else {
        return useMountOnCSR(component, params)
    }
}