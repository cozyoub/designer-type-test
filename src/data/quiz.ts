export type DesignerTypeId = 'explorer' | 'artisan' | 'architect';

export type DesignerType = {
  id: DesignerTypeId;
  emoji: string;
  image: string;
  name: string;
  summary: string;
  description: string;
  keywords: string[];
};

export type Question = {
  title: string;
  options: [QuestionOption, QuestionOption];
};

type QuestionOption = {
  label: string;
  type: DesignerTypeId;
};

export const START_IMAGE = '/images/start.jpg';

export const DESIGNER_TYPES: Record<DesignerTypeId, DesignerType> = {
  explorer: {
    id: 'explorer',
    emoji: '🔍',
    image: '/images/explorer.jpg',
    name: '탐험가형 디자이너',
    summary: '"왜?"라는 질문으로 문제의 본질을 찾아내요',
    description:
      '화면을 그리기 전에 사용자와 데이터를 먼저 들여다보는 사람이에요. 모두가 해결책을 이야기할 때 진짜 문제가 무엇인지 다시 묻고, 팀이 같은 방향을 보도록 만들어요.',
    keywords: ['리서치', '문제 정의', '인사이트'],
  },
  artisan: {
    id: 'artisan',
    emoji: '🎨',
    image: '/images/solver.jpg',
    name: '감각파형 디자이너',
    summary: '1px의 차이로 완성도를 끌어올려요',
    description:
      '여백, 정렬, 움직임 하나하나에서 차이를 만드는 사람이에요. 남들이 지나치는 디테일을 다듬어 사용자가 "뭔가 좋다"고 느끼는 순간을 만들어요.',
    keywords: ['비주얼', '디테일', '인터랙션'],
  },
  architect: {
    id: 'architect',
    emoji: '🧩',
    image: '/images/architect.jpg',
    name: '설계자형 디자이너',
    summary: '흩어진 조각을 단단한 시스템으로 엮어요',
    description:
      '한 화면보다 전체 구조를 먼저 그리는 사람이에요. 규칙과 컴포넌트를 정리해 팀 모두가 더 빠르고 일관되게 만들 수 있는 기반을 다져요.',
    keywords: ['디자인 시스템', '구조', '일관성'],
  },
};

export const QUESTIONS: Question[] = [
  {
    title: '새 프로젝트를 시작할 때\n가장 먼저 하는 일은?',
    options: [
      { label: '사용자 인터뷰와 데이터부터 살펴본다', type: 'explorer' },
      { label: '레퍼런스를 모아 무드보드를 만든다', type: 'artisan' },
    ],
  },
  {
    title: '동료의 피그마 파일을 열었을 때\n더 신경 쓰이는 건?',
    options: [
      { label: '1px 어긋난 정렬과 어색한 여백', type: 'artisan' },
      { label: '이름 규칙 없이 흩어진 컴포넌트', type: 'architect' },
    ],
  },
  {
    title: '"버튼 하나만 추가해 주세요"\n라는 요청을 받으면?',
    options: [
      { label: '기존 버튼 컴포넌트로 해결되는지 본다', type: 'architect' },
      { label: '그 버튼이 왜 필요한지 먼저 묻는다', type: 'explorer' },
    ],
  },
  {
    title: '가장 뿌듯한 칭찬은?',
    options: [
      { label: '"덕분에 문제가 뭔지 명확해졌어요"', type: 'explorer' },
      { label: '"와, 화면이 정말 예뻐요"', type: 'artisan' },
    ],
  },
  {
    title: '마감 하루 전,\n시간이 조금 남았다면?',
    options: [
      { label: '마이크로 인터랙션을 하나 더 다듬는다', type: 'artisan' },
      { label: '다음 사람을 위해 가이드 문서를 정리한다', type: 'architect' },
    ],
  },
];

/**
 * 가장 많이 고른 유형을 결과로 정한다.
 * 동점이면 동점 유형 중 가장 나중에 고른 답의 유형을 고른다.
 */
export const getResultType = (answers: DesignerTypeId[]): DesignerTypeId => {
  const scores: Record<DesignerTypeId, number> = { explorer: 0, artisan: 0, architect: 0 };
  answers.forEach((type) => {
    scores[type] += 1;
  });

  const maxScore = Math.max(...Object.values(scores));
  const tied = answers.filter((type) => scores[type] === maxScore);

  return tied[tied.length - 1];
};
