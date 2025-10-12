// MIT © 2017 azu
"use strict";
const calls = {};
export default class MockTextlintRuleTester {
    run(ruleName, rule, { valid, invalid }) {
        calls.ruleName = ruleName;
        calls.valid = structuredClone(valid);
        calls.invalid = structuredClone(invalid);
    }
}
export { calls };
