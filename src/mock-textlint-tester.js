// MIT © 2017 azu
"use strict";
import clone from "clone";

const calls = {};
export default class MockTextlintRuleTester {
    run(ruleName, rule, {valid, invalid}) {
        calls.ruleName = ruleName;
        calls.valid = clone(valid);
        calls.invalid = clone(invalid);
    }
}
export {calls}
