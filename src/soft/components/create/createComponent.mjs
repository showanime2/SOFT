export async function CreateComponent(element, css, script, loadData) {
    if (typeof window !== 'undefined') {
        if (window.SOFT?.SSR) {
            try {
                const module = await import('../hydration/hydrate.mjs');
                return module.hydrate(element, css, script)
            } catch (error) {
                console.error("Error loading the module:", error);
            }
        } else {
            try {
                const module = await import('./client.mjs');
                return module.onClientSide(element, css, script, loadData)
            } catch (error) {
                console.error("Error loading the module:", error);
            }
        }
    } else {
        try {
            const module = await import('./server.mjs');
            return module.onServerSide(element, css, script, loadData)
        } catch (error) {
            console.error("Error loading the module:", error);
        }
    }
}