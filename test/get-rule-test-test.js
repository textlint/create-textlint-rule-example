// MIT © 2017 azu
"use strict";
const path = require("path");
const getRuleTest = require("../src/get-rule-test");
const assert = require("assert");
const fs = require("fs");
describe("get-rule-data", () => {
    it("should return {valid,invalid,ruleName}", () => {
        const content = fs.readFileSync(path.join(__dirname, "fixtures/no-todo/test/no-todo-test.js"), "utf-8");
        const calls = getRuleTest(content);
        assert(typeof calls.ruleName === "string");
        assert(Array.isArray(calls.valid));
        assert(Array.isArray(calls.invalid));
    });
});