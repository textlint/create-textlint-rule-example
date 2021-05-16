#!/usr/bin/env node
import meow from "meow";
import concat from "concat-stream";
import create from "../src/create-textlint-rule-example.js";

const cli = meow(`
    Usage
      $ create-textlint-rule-example <file-path>

    Options
      --separator separator between each examples
`);
const fs = require("fs");
const file = process.argv[2];
const input = file && file !== "-" ? fs.createReadStream(process.argv[2]) : process.stdin;
input.pipe(
    concat(function (buf) {
        console.log(
            create(buf.toString("utf8"), {
                exampleSeparator: cli.flags.separator
            })
        );
    })
);
