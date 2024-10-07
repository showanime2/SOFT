export function generateComponentId(length) {
    const alphanumericSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let componentId = 'sa-';

    for (let i = 0; i < length; i++) {
        componentId += alphanumericSet.charAt(Math.floor(Math.random() * alphanumericSet.length));
    }

    return componentId;
}