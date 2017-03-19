// MIT © 2017 azu
"use strict";
const getRuleTest = require("./get-rule-test");
const union = require("lodash.union");
const defaultOptions = {
    prependValidExample: "**OK**:",
    prependInValidExample: "**NG**:",
    // separator between each examples
    exampleSeparator: "\n"
};
/**
 * Create example text from `content`
 * @param {string} content
 * @param {Object} options
 * @returns {string}
 */
module.exports = function(content, options = {}) {
    const prependValidExample = options.prependValidExample || defaultOptions.prependValidExample;
    const prependInValidExample = options.prependInValidExample || defaultOptions.prependInValidExample;
    const exampleSeparator = options.exampleSeparator || defaultOptions.exampleSeparator;
    const { ruleName, valid, invalid } = getRuleTest(content);
    const plainValid = valid.filter(text => typeof text === "string");
    const plainInvalid = invalid.filter(test => {
        return test.options === undefined && test.ext === undefined;
    });

    const validExample = `
\`\`\`
${union(plainValid).join(exampleSeparator)}
\`\`\`
`;
    const invalidExample = `
\`\`\`
${union(plainInvalid.map(test => test.text)).join(exampleSeparator)}
\`\`\`
`;

    return `${prependValidExample}
${validExample}
${prependInValidExample}
${invalidExample}`
};