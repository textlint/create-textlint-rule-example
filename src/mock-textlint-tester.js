// MIT © 2017 azu
"use strict";
const clone = require('clone');
const calls = {};
module.exports = class MockTextlintRuleTester {
    run(ruleName, rule, { valid, invalid }) {
        calls.ruleName = ruleName;
        calls.valid = clone(valid);
        calls.invalid = clone(invalid);
    }
};
module.exports.calls = calls;