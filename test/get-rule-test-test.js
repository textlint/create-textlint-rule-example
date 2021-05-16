// MIT © 2017 azu
"use strict";
import url from "url";
import getRuleTest from "../src/get-rule-test.js";
import assert from "assert";
import fs from "fs";

describe("get-rule-data", () => {
    it("should return {valid,invalid,ruleName}", () => {
        const content = fs.readFileSync(
            url.fileURLToPath(new URL("fixtures/no-todo/test/no-todo-test.js", import.meta.url)),
            "utf-8"
        );
        const calls = getRuleTest(content);
        assert(typeof calls.ruleName === "string");
        assert(Array.isArray(calls.valid));
        assert(Array.isArray(calls.invalid));
    });
});
