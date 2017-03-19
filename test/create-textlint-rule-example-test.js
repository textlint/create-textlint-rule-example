// MIT © 2017 azu
"use strict";
const path = require("path");
const createExample = require("../src/create-textlint-rule-example");
const assert = require("assert");
const fs = require("fs");
describe("create-textlint-rule-example", () => {
    it("should return output", () => {
        const content = fs.readFileSync(path.join(__dirname, "fixtures/no-todo/test/no-todo-test.js"), "utf-8");
        const output = createExample(content);
        assert(typeof output === "string");
        assert(output.length > 0);
    });
});