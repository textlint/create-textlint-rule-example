// MIT © 2017 azu
"use strict";
import assert from "assert";
import fs from "fs";
import createExample from "../src/create-textlint-rule-example.js";
import url from "url";

describe("create-textlint-rule-example", () => {
    it("should return output", () => {
        const filePath = url.fileURLToPath(new URL("fixtures/no-todo/test/no-todo-test.js", import.meta.url));
        const content = fs.readFileSync(filePath, "utf-8");
        const output = createExample({
            content,
            filePath
        });
        assert(typeof output === "string");
        assert(output.length > 0);
    });
});
