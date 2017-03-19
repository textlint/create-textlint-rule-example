#!/usr/bin/env node

const meow = require('meow');
const cli = meow(`
    Usage
      $ create-textlint-rule-example <file-path>

    Options
      --separator separator between each examples
`);
const create = require("../lib/create-textlint-rule-example");
const concat = require('concat-stream');
const fs = require('fs');
const file = process.argv[2];
const input = file && file !== '-'
    ? fs.createReadStream(process.argv[2])
    : process.stdin;
input.pipe(concat(function(buf) {
    console.log(create(buf.toString('utf8'), {
        exampleSeparator: cli.flags.separator
    }));
}));
