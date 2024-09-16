"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("./index"));
// 기본 1 문장 생성 테스트
const output1 = (0, index_1.default)();
const sentences1 = output1.split(".").filter(Boolean);
if (sentences1.length === 1) {
    console.log("Test 1: Pass (기본 1 문장 생성)");
}
else {
    console.error(`Test 1: Fail (Expected 1 sentence, but got ${sentences1.length}): ${output1}`);
}
// 문장 단어 수 제한 테스트
const output2 = (0, index_1.default)({
    count: 1,
    units: "sentences",
    sentenceLowerBound: 5,
    sentenceUpperBound: 7,
});
const words2 = output2.split(" ").filter(Boolean);
if (words2.length >= 5 && words2.length <= 7) {
    console.log("Test 2: Pass (문장에 5~7개의 단어 생성)");
}
else {
    console.error(`Test 2: Fail (Expected 5~7 words in a sentence, but got ${words2.length}): ${output2}`);
}
// 2개의 문단 생성 테스트 (각 문단의 문장 수는 3~5 사이)
const output3 = (0, index_1.default)({
    count: 2,
    units: "paragraphs",
    sentenceLowerBound: 5,
    sentenceUpperBound: 7,
    paragraphLowerBound: 3,
    paragraphUpperBound: 5,
});
const paragraphs3 = output3.split("\n");
if (paragraphs3.length === 2) {
    console.log("Test 3: Pass (2개의 문단 생성)");
}
else {
    console.error(`Test 3: Fail (Expected 2 paragraphs, but got ${paragraphs3.length}): ${output3}`);
}
paragraphs3.forEach((paragraph, index) => {
    const sentenceCount = paragraph.split(".").filter(Boolean).length;
    if (sentenceCount >= 3 && sentenceCount <= 5) {
        console.log(`Test 3-${index + 1}: Pass (문단 ${index + 1}: ${sentenceCount}개의 문장)`);
    }
    else {
        console.error(`Test 3-${index + 1}: Fail (문단 ${index + 1}에 ${sentenceCount}개의 문장이 있습니다. 예상 범위는 3 ~ 5입니다.): ${paragraph}`);
    }
});
// HTML 형식 출력 테스트
const output4 = (0, index_1.default)({
    count: 1,
    units: "paragraphs",
    format: "html",
});
if (output4.startsWith("<p>") && output4.endsWith("</p>")) {
    console.log("Test 4: Pass (HTML 형식 출력)");
}
else {
    console.error(`Test 4: Fail (Expected HTML format but got ${output4})`);
}
// 잘못된 범위 처리 테스트 (상한 < 하한)
try {
    const output5 = (0, index_1.default)({
        count: 1,
        units: "sentences",
        sentenceLowerBound: 10,
        sentenceUpperBound: 5, // 잘못된 범위
    });
    console.error(`Test 5: Fail (Expected an error for invalid sentence bounds) ${output5}`);
}
catch (error) {
    console.log("Test 5: Pass (Caught error for invalid sentence bounds)");
}
// 랜덤 함수 고정 테스트
const output6 = (0, index_1.default)({
    count: 1,
    units: "sentences",
    random: () => 0.5, // 고정된 랜덤 값
});
const fixedWords = output6.split(" ").filter(Boolean);
if (fixedWords.length === 10) {
    console.log("Test 6: Pass (랜덤 함수 고정된 결과 확인)");
}
else {
    console.error(`Test 6: Fail (Expected 10 words, but got ${fixedWords.length})`);
}
// 단어 단위 생성 테스트
const output7 = (0, index_1.default)({
    count: 5,
    units: "words",
});
const words7 = output7.split(" ").filter(Boolean);
if (words7.length === 5) {
    console.log("Test 7: Pass (5개의 단어 생성)");
}
else {
    console.error(`Test 7: Fail (Expected 5 words, but got ${words7.length}): ${output7}`);
}
