#!/usr/bin/env node
"use strict";
// bin/lorem-ipsum-KR.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../src/index")); // default export 사용
// 명령줄 인자 가져오기 (첫 두 개는 node와 파일 경로)
const args = process.argv.slice(2);
// 기본값 설정
let count = 1;
let units = "sentences"; // 타입을 정확하게 지정
let format = "plain";
// 명령줄 인자 분석
args.forEach((arg, index) => {
    if (arg === "--count" || arg === "-c") {
        count = parseInt(args[index + 1], 10) || 1;
    }
    if (arg === "--units" || arg === "-u") {
        const unitArg = args[index + 1];
        // "words", "sentences", "paragraphs"만 허용
        if (unitArg === "words" ||
            unitArg === "sentences" ||
            unitArg === "paragraphs") {
            units = unitArg;
        }
    }
    if (arg === "--format" || arg === "-f") {
        const formatArg = args[index + 1];
        // "plain" 또는 "html"만 허용
        if (formatArg === "plain" || formatArg === "html") {
            format = formatArg;
        }
    }
});
// loremIpsumKRean 함수 호출하여 텍스트 생성
const output = (0, index_1.default)({
    count,
    units,
    format,
});
console.log(output); // 결과 출력
