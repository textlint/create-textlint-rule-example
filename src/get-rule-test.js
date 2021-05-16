// MIT © 2017 azu
"use strict";
import vm from "vm";
import babel from "@babel/core";
import { calls } from "./mock-textlint-tester.js";
import MockTextlintRuleTester from "./mock-textlint-tester.js";
import { createRequire } from "module";
import path from "path";

/**
 * Helper for unit testing:
 * - load module with mocked dependencies
 * - allow accessing private state of the module
 *
 * @param {{content:string, filePath:string}}
 * @param {Object=} mocks Hash of mocked dependencies
 */
export default function loadModule({ content, filePath }, mocks = {}) {
    const exports = {};
    const context = {
        require: function (name) {
            if (mocks[name]) {
                return mocks[name];
            }
            if (name === "textlint-tester") {
                return MockTextlintRuleTester; // tester mock
            }
            // ignore other
            return;
        },
        console: console,
        exports: exports,
        module: {
            exports: exports
        }
    };
    const require = createRequire(import.meta.url);
    const result = babel.transform(content, {
        filename: path.basename(filePath),
        presets: [require.resolve("@babel/preset-env"), require.resolve("@babel/preset-typescript")]
    });
    vm.runInNewContext(result.code, context);
    return calls;
}
