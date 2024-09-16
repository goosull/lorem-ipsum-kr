#!/usr/bin/env node
"use strict";
// bin/lorem-ipsum-kr.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../src/index")); // Using the default export
// Retrieve command-line arguments (the first two arguments are node and the file path)
const args = process.argv.slice(2);
// Default settings
let count = 1;
let units = "sentences"; // Explicitly specify the type
let format = "plain";
// Parse command-line arguments
args.forEach((arg, index) => {
    if (arg === "--count" || arg === "-c") {
        count = parseInt(args[index + 1], 10) || 1; // Set count, default to 1 if parsing fails
    }
    if (arg === "--units" || arg === "-u") {
        const unitArg = args[index + 1];
        // Only allow "words", "sentences", or "paragraphs"
        if (unitArg === "words" ||
            unitArg === "sentences" ||
            unitArg === "paragraphs") {
            units = unitArg; // Set the unit type
        }
    }
    if (arg === "--format" || arg === "-f") {
        const formatArg = args[index + 1];
        // Only allow "plain" or "html"
        if (formatArg === "plain" || formatArg === "html") {
            format = formatArg; // Set the output format
        }
    }
});
// Call the loremIpsumKR function to generate the text
const output = (0, index_1.default)({
    count,
    units,
    format,
});
console.log(output); // Output the result
