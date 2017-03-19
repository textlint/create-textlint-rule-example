// MIT © 2017 azu
"use strict";
const vm = require("vm");
const fs = require("fs");
const path = require("path");
const babel = require("babel-core");
const calls = require("./mock-textlint-tester").calls;
const MockTextlintRuleTester = require("./mock-textlint-tester");
/**
 * Helper for unit testing:
 * - load module with mocked dependencies
 * - allow accessing private state of the module
 *
 * @param {string} content
 * @param {Object=} mocks Hash of mocked dependencies
 */
module.exports = function loadModule(content, mocks = {}) {
    const exports = {};
    const context = {
        require: function(name) {
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

    const result = babel.transform(content, {
            "presets": [
                "latest"
            ]
        }
    );
    vm.runInNewContext(result.code, context);
    return calls;
};