import { useMountOnSSR } from "../../ssr/useMount.mjs";
import { useMountOnCSR } from "./useComponent.mjs";

export async function useMount(module, component) {
    if (typeof window === "undefined") {
        return await useMountOnSSR(module)
    } else {
        return useMountOnCSR(component)
    }
}