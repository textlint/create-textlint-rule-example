// MIT © 2017 azu
"use strict";
import url from "url";
import getRuleTest from "../src/get-rule-test.js";
import assert from "assert";
import fs from "fs";

describe("get-rule-data", () => {
    it("should return {valid,invalid,ruleName}", () => {
        const filePath = url.fileURLToPath(new URL("fixtures/no-todo/test/no-todo-test.js", import.meta.url));
        const content = fs.readFileSync(filePath, "utf-8");
        const calls = getRuleTest({ content, filePath });
        assert(typeof calls.ruleName === "string");
        assert(Array.isArray(calls.valid));
        assert(Array.isArray(calls.invalid));
    });
});
