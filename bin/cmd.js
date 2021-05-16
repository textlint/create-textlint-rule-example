#!/usr/bin/env node
import meow from "meow";
import concat from "concat-stream";
import create from "../src/create-textlint-rule-example.js";
import fs from "fs";

const cli = meow(
    `
    Usage
      $ create-textlint-rule-example <file-path>

    Options
      --separator separator between each examples
`,
    {
        importMeta: import.meta
    }
);
const filePath = process.argv[2];
const input = filePath && filePath !== "-" ? fs.createReadStream(process.argv[2]) : process.stdin;
input.pipe(
    concat(function (buf) {
        const content = buf.toString("utf8");
        console.log(
            create(
                { content, filePath },
                {
                    exampleSeparator: cli.flags.separator
                }
            )
        );
    })
);
