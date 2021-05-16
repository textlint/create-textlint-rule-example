// MIT © 2017 azu
"use strict";
import assert from "assert";
import fs from "fs";
import createExample from "../src/create-textlint-rule-example.js";
import url from "url";
describe("create-textlint-rule-example", () => {
    it("should return output", () => {
        const content = fs.readFileSync(
            url.fileURLToPath(new URL("fixtures/no-todo/test/no-todo-test.js", import.meta.url)),
            "utf-8"
        );
        const output = createExample(content);
        assert(typeof output === "string");
        assert(output.length > 0);
    });
});
