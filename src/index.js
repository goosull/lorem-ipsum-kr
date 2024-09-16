"use strict";
// src/index.ts
Object.defineProperty(exports, "__esModule", { value: true });
// JSON 데이터를 배열로 변경
// 일반 단어 리스트
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
// 문장을 끝내는 단어 리스트
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
const validateBounds = (lowerBound, upperBound, boundType) => {
    if (lowerBound > upperBound) {
        throw new Error(`${boundType} lowerBound (${lowerBound}) must be less than or equal to upperBound (${upperBound})`);
    }
};
// 기본 옵션을 사용해 Lorem Ipsum 텍스트를 생성하는 함수
const loremIpsumKR = (options = {}) => {
    const { count = 1, units = "sentences", sentenceLowerBound = 5, sentenceUpperBound = 15, paragraphLowerBound = 3, paragraphUpperBound = 7, format = "plain", random = Math.random, suffix = "\n", } = options;
    // 유효하지 않은 units 옵션 처리
    const validUnits = ["words", "sentences", "paragraphs"];
    const finalUnits = validUnits.includes(units) ? units : "sentences";
    let output = "";
    // 랜덤으로 일반 단어를 가져오는 함수
    const getRandomWord = () => {
        return words[Math.floor(random() * words.length)];
    };
    // 랜덤으로 문장 끝 단어를 가져오는 함수
    const getEndingWord = () => {
        return endingWords[Math.floor(random() * endingWords.length)];
    };
    // 문장을 생성하는 함수
    const generateSentence = () => {
        // 문장 생성 전에 단어 수 범위 확인
        validateBounds(sentenceLowerBound, sentenceUpperBound, "Sentence word count");
        const sentenceLength = Math.floor(random() * (sentenceUpperBound - sentenceLowerBound + 1)) +
            sentenceLowerBound;
        let sentence = "";
        // 문장 중간 부분을 생성
        for (let i = 0; i < sentenceLength - 1; i++) {
            sentence += getRandomWord() + " ";
        }
        // 마지막 단어는 문장을 끝내는 단어로 설정
        sentence += getEndingWord();
        return sentence.trim();
    };
    // 문단을 생성하는 함수
    const generateParagraph = () => {
        // 문단 생성 전에 문장 수 범위 확인
        validateBounds(paragraphLowerBound, paragraphUpperBound, "Paragraph sentence count");
        // 정확한 문장 수를 결정
        const sentenceCount = Math.floor(random() * (paragraphUpperBound - paragraphLowerBound + 1)) +
            paragraphLowerBound;
        let paragraph = [];
        // 결정된 문장 수만큼 문장 생성
        for (let i = 0; i < sentenceCount; i++) {
            paragraph.push(generateSentence());
        }
        // 문장들을 공백으로 합치되, 마지막에 추가적인 공백이 없도록 처리
        return paragraph.join(" ");
    };
    if (finalUnits === "words") {
        output = Array.from({ length: count }, getRandomWord).join(" ");
    }
    else if (finalUnits === "sentences") {
        output = Array.from({ length: count }, generateSentence).join(" ");
    }
    else if (finalUnits === "paragraphs") {
        output = Array.from({ length: count }, generateParagraph).join(suffix);
    }
    return format === "html" ? `<p>${output}</p>` : output;
};
exports.default = loremIpsumKR;
