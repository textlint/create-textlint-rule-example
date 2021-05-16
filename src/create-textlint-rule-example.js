// MIT © 2017 azu
"use strict";
import unique from "lodash.uniq"
import getRuleTest from "./get-rule-test.js";

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
export default function (content, options = {}) {
    const prependValidExample = options.prependValidExample || defaultOptions.prependValidExample;
    const prependInValidExample = options.prependInValidExample || defaultOptions.prependInValidExample;
    const exampleSeparator = (options.exampleSeparator || defaultOptions.exampleSeparator).replace(/\\n/g, "\n");
    const { ruleName, valid, invalid } = getRuleTest(content);
    const plainValid = valid.filter(text => typeof text === "string");
    const plainInvalid = invalid.filter(test => {
        return test.options === undefined && test.ext === undefined;
    });

    const validExample = `
\`\`\`
${unique(plainValid).join(exampleSeparator)}
\`\`\`
`;
    const invalidExample = `
\`\`\`
${unique(plainInvalid.map(test => test.text)).join(exampleSeparator)}
\`\`\`
`;

    return `${prependValidExample}
${validExample}
${prependInValidExample}
${invalidExample}`
}
