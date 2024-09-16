# lorem-ipsum-kor

`lorem-ipsum-kor` is a Lorem Ipsum text generator for the Korean language. This library generates placeholder text in Korean and is useful for web development, design, and publishing.

## Installation

To install the library, use npm:

```
npm install lorem-ipsum-kor
```

## Usage

The library can be used in Node.js to generate Korean Lorem Ipsum text in units of words, sentences, or paragraphs.

### Node.js Example

```js
const loremIpsumKorean = require("lorem-ipsum-kor");

const text = loremIpsumKorean({
  count: 5, // Number of units to generate
  units: "sentences", // 'words', 'sentences', or 'paragraphs'
});

console.log(text);
```

### CLI Usage

You can also generate Lorem Ipsum text from the command line:

```bash
lorem-ipsum-kor --count 5 --units words
```

#### CLI Options

- `--count, -c`: Number of units to generate (default: 1)
- `--units, -u`: Type of units: `words`, `sentences`, or `paragraphs` (default: `sentences`)
- `--format, -f`: Output format: `plain` or `html` (default: `plain`)

#### CLI Example

```bash
lorem-ipsum-kor --count 3 --units paragraphs --format html
```

## API Options

The `loremIpsumKorean` function provides various options to fine-tune the generated text.

```js
const loremIpsumKorean = require("lorem-ipsum-kor");

const options = {
  count: 3, // Number of units (words, sentences, or paragraphs)
  units: "paragraphs", // 'words', 'sentences', or 'paragraphs'
  sentenceLowerBound: 5, // Minimum number of words per sentence
  sentenceUpperBound: 15, // Maximum number of words per sentence
  paragraphLowerBound: 3, // Minimum number of sentences per paragraph
  paragraphUpperBound: 7, // Maximum number of sentences per paragraph
  format: "plain", // 'plain' or 'html'
  random: Math.random, // Custom random function (default: Math.random)
  suffix: "\n", // String separator between paragraphs (default: newline)
};

const text = loremIpsumKorean(options);
console.log(text);
```

### Option Details

- **`count`**: Number of units to generate (default: 1).
- **`units`**: Type of units to generate (`words`, `sentences`, or `paragraphs`, default: `sentences`).
- **`sentenceLowerBound`**: Minimum number of words in a sentence.
- **`sentenceUpperBound`**: Maximum number of words in a sentence.
- **`paragraphLowerBound`**: Minimum number of sentences in a paragraph.
- **`paragraphUpperBound`**: Maximum number of sentences in a paragraph.
- **`format`**: Output format, either `plain` or `html` (default: `plain`).
- **`random`**: Custom random function (default: `Math.random`).
- **`suffix`**: String separator between paragraphs (default: newline `\n`).

## Contribution

If you'd like to contribute to this project, feel free to fork the repository, make your changes, and submit a pull request.

[GitHub Repository](https://github.com/goosull/lorem-ipsum-kr)

## License

This software is licensed under the MIT License

Copyright (c) 2024 goosull

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
