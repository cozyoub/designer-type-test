# designer-type-test

원티드 디자인시스템 강의 실습 프로젝트입니다.

5개의 질문에 답하면 세 가지 디자이너 유형(탐험가형, 감각파형, 설계자형) 중 하나를 알려주는 테스트예요.
화면은 원티드의 웹용 Montage 디자인 시스템(`@montage-ui/core`, `@montage-ui/icon`) 컴포넌트로 만들었습니다.

## 실행

```bash
npm install
npm run dev
```

## 구조

- `src/data/quiz.ts` — 질문, 유형 설명, 결과 계산 규칙
- `src/screens/` — 시작, 질문, 결과 화면
- `src/components/` — 이미지 자리, 하단 버튼 영역
