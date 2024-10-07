function generateRandomString(length) {
    const alphanumericSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let randomString = '';

    for (let i = 0; i < length; i++) {
        randomString += alphanumericSet.charAt(Math.floor(Math.random() * alphanumericSet.length));
    }

    return randomString;
}

export function compileStyle(css, componentId) {
    const selectors = getFirstLevelSelectors(css)
    const compiledStyle = addSuffixToKeywords(css, selectors, `.${componentId}`)
    return compiledStyle
}

function getFirstLevelSelectors(css) {
    css = css.substring(1, css.length - 1)

    const cssSelectorFilters = ["@", "{", "}", "%"]

    const randomString = generateRandomString(10);

    const removeContentRegex = /\{[^}]*\}/g;
    const result = css.replace(removeContentRegex, `${randomString}`);
    const selectors = result.split(randomString).flatMap(selector => {
        if (selector.includes(",")) {
            return selector.split(",").map(item => item.trim());
        } else {
            return selector.trim();
        }
    }).filter(selector => selector && !cssSelectorFilters.some(filter => selector.includes(filter)))
    const firstLevelSelectors = selectors.map(selector => selector.split(/[\s:]/)[0])
    const uniqueSelectors = Array.from(new Set(firstLevelSelectors));

    return uniqueSelectors;
}

function addSuffixToKeywords(text, keywords, suffix) {
    if (typeof text !== 'string' || !Array.isArray(keywords) || typeof suffix !== 'string') {
        throw new Error('Invalid input types');
    }

    const escapedKeywords = keywords.map(keyword => keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
    const regexPattern = new RegExp(`(${escapedKeywords.join('|')})(?=\\s|\\{|:)`, 'g');

    const result = text.replace(regexPattern, `$1${suffix}`);

    return result;
}