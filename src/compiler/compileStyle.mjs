function generateRandomString(length) {
    const alphanumericSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let randomString = '';

    for (let i = 0; i < length; i++) {
        randomString += alphanumericSet.charAt(Math.floor(Math.random() * alphanumericSet.length));
    }

    return randomString;
}

/**
 * Compiles the CSS by adding the component ID as a suffix to all selectors.
 * 
 * @param {string} css - The CSS string to be compiled.
 * @param {string} componentId - The component ID to be added to the selectors.
 * @returns {string} - The compiled CSS with the component ID appended to the selectors.
 */
export function compileStyle(css, componentId) {
    const selectors = getFirstLevelSelectors(css)
    const compiledStyle = addSuffixToKeywords(css, selectors, `.${componentId}`)
    return compiledStyle
}

/**
 * Extracts and returns the first-level CSS selectors from a given CSS string.
 * This function identifies selectors that are not nested within other selectors.
 * 
 * @param {string} css - The CSS string from which to extract first-level selectors.
 * @returns {string[]} - An array of first-level CSS selectors.
 */
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

/**
 * Replaces occurrences of specific keywords in a string with the keyword followed by a specified string.
 * 
 * @param {string} text - The input text in which to search for keywords.
 * @param {string[]} keywords - An array of keywords to search for in the text.
 * @param {string} suffix - The string to append after each keyword.
 * @returns {string} - The modified text with keywords followed by the suffix.
 */
function addSuffixToKeywords(text, keywords, suffix) {
    if (typeof text !== 'string' || !Array.isArray(keywords) || typeof suffix !== 'string') {
        throw new Error('Invalid input types');
    }

    const escapedKeywords = keywords.map(keyword => keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
    const regexPattern = new RegExp(`(${escapedKeywords.join('|')})(?=\\s|\\{|:)`, 'g');

    const result = text.replace(regexPattern, `$1${suffix}`);

    return result;
}