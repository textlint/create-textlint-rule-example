#!/usr/bin/env node
import { parseArgs } from "node:util";
import { createRequire } from "node:module";
import { text } from "node:stream/consumers";
import create from "../src/create-textlint-rule-example.js";
import fs from "fs";

const require = createRequire(import.meta.url);
const pkg = require("../package.json");

const helpText = `
    Usage
      $ create-textlint-rule-example <file-path>

    Options
      --separator separator between each examples
      --help      Show this help
      --version   Show version
`;

const { values, positionals } = parseArgs({
    options: {
        separator: {
            type: "string"
        },
        help: {
            type: "boolean"
        },
        version: {
            type: "boolean"
        }
    },
    allowPositionals: true
});

if (values.help) {
    console.log(helpText);
    process.exit(0);
}

if (values.version) {
    console.log(pkg.version);
    process.exit(0);
}

const filePath = positionals[0];
const input = filePath && filePath !== "-" ? fs.createReadStream(filePath) : process.stdin;
const content = await text(input);
console.log(
    create(
        { content, filePath },
        {
            exampleSeparator: values.separator
        }
    )
);
