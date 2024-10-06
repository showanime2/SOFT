/**
 * 
 * @param {Function} callback 
 */
export function onMount(callback) {
    if (typeof window === undefined) return

    callback()
}