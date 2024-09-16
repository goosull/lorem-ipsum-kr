#!/usr/bin/env node
// bin/lorem-ipsum-kr.ts

import loremIpsumKR from "../src/index"; // Using the default export

// Retrieve command-line arguments (the first two arguments are node and the file path)
const args: string[] = process.argv.slice(2);

// Default settings
let count = 1;
let units: "words" | "sentences" | "paragraphs" = "sentences"; // Explicitly specify the type
let format: "plain" | "html" = "plain";

// Parse command-line arguments
args.forEach((arg: string, index: number) => {
  if (arg === "--count" || arg === "-c") {
    count = parseInt(args[index + 1], 10) || 1; // Set count, default to 1 if parsing fails
  }
  if (arg === "--units" || arg === "-u") {
    const unitArg = args[index + 1];
    // Only allow "words", "sentences", or "paragraphs"
    if (
      unitArg === "words" ||
      unitArg === "sentences" ||
      unitArg === "paragraphs"
    ) {
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
const output = loremIpsumKR({
  count,
  units,
  format,
});

console.log(output); // Output the result
