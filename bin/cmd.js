#!/usr/bin/env node
const create = require("../lib/create-textlint-rule-example");
const concat = require('concat-stream');
const fs = require('fs');
const file = process.argv[2];
const input = file && file !== '-'
    ? fs.createReadStream(process.argv[2])
    : process.stdin;
input.pipe(concat(function(buf) {
    console.log(create(buf.toString('utf8')));
}));
