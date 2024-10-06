import { onClientSide } from './client.mjs';
import { onServerSide } from './server.mjs';
import { hydrate } from '../hydration/hydrate.mjs';

export function CreateComponent(element, css, script, loadData) {
    if (typeof window !== 'undefined') {
        if (window.SOFT?.SSR) {
            return hydrate(element, css, script)
        } else {
            return onClientSide(element, css, script, loadData)
        }
    } else {
        return onServerSide(element, css, script, loadData)
    }
}