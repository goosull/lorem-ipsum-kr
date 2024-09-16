#!/usr/bin/env node
// bin/lorem-ipsum-KR.ts

import loremIpsumKR from "../src/index"; // default export 사용

// 명령줄 인자 가져오기 (첫 두 개는 node와 파일 경로)
const args: string[] = process.argv.slice(2);

// 기본값 설정
let count = 1;
let units: "words" | "sentences" | "paragraphs" = "sentences"; // 타입을 정확하게 지정
let format: "plain" | "html" = "plain";

// 명령줄 인자 분석
args.forEach((arg: string, index: number) => {
  if (arg === "--count" || arg === "-c") {
    count = parseInt(args[index + 1], 10) || 1;
  }
  if (arg === "--units" || arg === "-u") {
    const unitArg = args[index + 1];
    // "words", "sentences", "paragraphs"만 허용
    if (
      unitArg === "words" ||
      unitArg === "sentences" ||
      unitArg === "paragraphs"
    ) {
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
const output = loremIpsumKR({
  count,
  units,
  format,
});

console.log(output); // 결과 출력
