// src/index.ts

// JSON array of common Korean words for generating Lorem Ipsum text
const words = [
  "계절이",
  "지나가는",
  "하늘에는",
  "가을로",
  "가득",
  "차",
  "나는",
  "아무",
  "걱정도",
  "없이",
  "가을",
  "속의",
  "별들을",
  "다",
  "헤일",
  "가슴속에",
  "하나둘",
  "새겨지는",
  "별을",
  "이제",
  "못",
  "헤는",
  "것은",
  "쉬이",
  "아침이",
  "오는",
  "까닭이요,",
  "내일",
  "밤이",
  "남은",
  "아직",
  "나의",
  "청춘이",
  "다하지",
  "않은",
  "추억과",
  "사랑과",
  "쓸쓸함과",
  "동경과",
  "시와",
  "어머니,",
  "아름다운",
  "말",
  "한마디씩",
  "불러",
  "소학교",
  "때",
  "책상을",
  "같이",
  "했던",
  "아이들의",
  "이름과,",
  "패,",
  "경,",
  "옥,",
  "이국",
  "소녀들의",
  "벌써",
  "아기",
  "어머니",
  "된",
  "계집애들의",
  "가난한",
  "이웃",
  "사람들의",
  "비둘기,",
  "강아지,",
  "토끼,",
  "노새,",
  "노루,",
  "프랑시스",
  "잠,",
  "라이너",
  "마리아",
  "릴케,",
  "이런",
  "시인의",
  "이름을",
  "이네들은",
  "너무나",
  "멀리",
  "별이",
  "아스라이",
  "무엇인지",
  "그리워",
  "이",
  "많은",
  "별빛이",
  "내린",
  "언덕",
  "위에",
  "내",
  "이름자를",
  "써",
  "보고",
  "흙으로",
  "덮어",
  "딴은",
  "밤을",
  "새워",
  "우는",
  "벌레는",
  "부끄러운",
  "이름을",
  "슬퍼하는",
  "겨울이",
  "지나고",
  "별에도",
  "봄이",
  "오면",
  "무덤",
  "파란",
  "잔디가",
  "피어나듯이,",
  "묻힌",
  "자랑처럼",
  "풀이",
  "무성할",
];

// List of words used to end sentences
const endingWords = [
  "있습니다.",
  "것입니다.",
  "까닭입니다.",
  "거외다.",
  "아닙니다.",
  "합니다.",
  "됩니다.",
  "수 있습니다.",
];

/**
 * Function to validate that a lower bound is not greater than an upper bound.
 * Throws an error if the validation fails.
 *
 * @param {number} lowerBound - The minimum bound.
 * @param {number} upperBound - The maximum bound.
 * @param {string} boundType - A description of the bounds being validated.
 */
const validateBounds = (
  lowerBound: number,
  upperBound: number,
  boundType: string
) => {
  if (lowerBound > upperBound) {
    throw new Error(
      `${boundType} lowerBound (${lowerBound}) must be less than or equal to upperBound (${upperBound})`
    );
  }
};

/**
 * Interface defining options for the Lorem Ipsum text generator.
 *
 * @property {number} [count=1] - The number of units to generate.
 * @property {"words" | "sentences" | "paragraphs"} [units="sentences"] - The type of unit to generate.
 * @property {number} [sentenceLowerBound=5] - The minimum number of words per sentence.
 * @property {number} [sentenceUpperBound=15] - The maximum number of words per sentence.
 * @property {number} [paragraphLowerBound=3] - The minimum number of sentences per paragraph.
 * @property {number} [paragraphUpperBound=7] - The maximum number of sentences per paragraph.
 * @property {"plain" | "html"} [format="plain"] - The format of the output.
 * @property {function} [random=Math.random] - A custom random function.
 * @property {string} [suffix="\n"] - The suffix to use between paragraphs.
 */
interface LoremIpsumOptions {
  count?: number;
  units?: "words" | "sentences" | "paragraphs";
  sentenceLowerBound?: number;
  sentenceUpperBound?: number;
  paragraphLowerBound?: number;
  paragraphUpperBound?: number;
  format?: "plain" | "html";
  random?: () => number;
  suffix?: string;
}

/**
 * Main function to generate Lorem Ipsum text in Korean.
 *
 * @param {LoremIpsumOptions} options - The options for the text generator.
 * @returns {string} - The generated Lorem Ipsum text.
 */
const loremIpsumKR = (options: LoremIpsumOptions = {}) => {
  const {
    count = 1, // Default number of units
    units = "sentences", // Default unit type
    sentenceLowerBound = 5, // Default minimum number of words per sentence
    sentenceUpperBound = 15, // Default maximum number of words per sentence
    paragraphLowerBound = 3, // Default minimum number of sentences per paragraph
    paragraphUpperBound = 7, // Default maximum number of sentences per paragraph
    format = "plain", // Default output format
    random = Math.random, // Default random function
    suffix = "\n", // Default paragraph suffix
  } = options;

  // Ensure units is a valid option
  const validUnits = ["words", "sentences", "paragraphs"];
  const finalUnits = validUnits.includes(units) ? units : "sentences";

  let output = "";

  /**
   * Function to randomly select a word from the `words` array.
   *
   * @returns {string} - A random word from the list.
   */
  const getRandomWord = (): string => {
    return words[Math.floor(random() * words.length)];
  };

  /**
   * Function to randomly select a sentence-ending word from the `endingWords` array.
   *
   * @returns {string} - A random sentence-ending word.
   */
  const getEndingWord = (): string => {
    return endingWords[Math.floor(random() * endingWords.length)];
  };

  /**
   * Function to generate a single sentence.
   *
   * @returns {string} - A generated sentence.
   */
  const generateSentence = (): string => {
    // Validate sentence word count bounds
    validateBounds(
      sentenceLowerBound,
      sentenceUpperBound,
      "Sentence word count"
    );

    // Randomly determine sentence length
    const sentenceLength =
      Math.floor(random() * (sentenceUpperBound - sentenceLowerBound + 1)) +
      sentenceLowerBound;

    let sentence = "";

    // Generate sentence by concatenating random words
    for (let i = 0; i < sentenceLength - 1; i++) {
      sentence += getRandomWord() + " ";
    }

    // End the sentence with a randomly chosen ending word
    sentence += getEndingWord();
    return sentence.trim();
  };

  /**
   * Function to generate a paragraph consisting of multiple sentences.
   *
   * @returns {string} - A generated paragraph.
   */
  const generateParagraph = (): string => {
    // Validate paragraph sentence count bounds
    validateBounds(
      paragraphLowerBound,
      paragraphUpperBound,
      "Paragraph sentence count"
    );

    // Randomly determine the number of sentences in the paragraph
    const sentenceCount =
      Math.floor(random() * (paragraphUpperBound - paragraphLowerBound + 1)) +
      paragraphLowerBound;

    let paragraph: string[] = [];

    // Generate the paragraph by concatenating generated sentences
    for (let i = 0; i < sentenceCount; i++) {
      paragraph.push(generateSentence());
    }

    // Join sentences with spaces
    return paragraph.join(" ");
  };

  // Generate output based on the specified units
  if (finalUnits === "words") {
    // Generate words
    output = Array.from({ length: count }, getRandomWord).join(" ");
  } else if (finalUnits === "sentences") {
    // Generate sentences
    output = Array.from({ length: count }, generateSentence).join(" ");
  } else if (finalUnits === "paragraphs") {
    // Generate paragraphs
    output = Array.from({ length: count }, generateParagraph).join(suffix);
  }

  // Return formatted output (either plain text or HTML)
  return format === "html" ? `<p>${output}</p>` : output;
};

export default loremIpsumKR;
