/**
 * Chapter index — 책 안에서 챕터 시작 페이지를 한 곳에서 관리.
 *
 * 페이지 순서 (HTMLFlipBook child 인덱스 기준, showCover=true):
 *   0  FrontCover
 *   1  Frontispiece (verso)
 *   2  TableOfContentsLeft  (recto)
 *   3  TableOfContentsRight (verso)
 *   4  AiQuizOpener         (recto)  ← Chapter I·II AI Quiz 시작
 *  21  SmartCityOpener      (verso)  ← Chapter III 공주부여
 *  25  GyeongbukOpener      (verso)  ← Chapter IV 경상북도
 *  29  KCityOpener          (verso)  ← Chapter V K-City Network
 *  33  BackCover
 */

export const CHAPTERS = [
  {
    id: "ai-quiz",
    roman: "I·II",
    short: "AI Quiz",
    title: "AI Quiz",
    subtitle: "시험 범위 고정 제약을 역이용한 학습 플랫폼",
    period: "2026 · MVP 4h + 2주 개선",
    page: 4,
    endPage: 20,
  },
  {
    id: "smart-city",
    roman: "III",
    short: "공주·부여",
    title: "공주·부여 스마트시티 챌린지",
    subtitle: "관광 웹앱의 결제·지도·로그인 통합 운영",
    period: "2022.04 – 2022.12",
    page: 21,
    endPage: 24,
  },
  {
    id: "gyeongbuk",
    roman: "IV",
    short: "경상북도",
    title: "경상북도 인구·산업 통합 플랫폼",
    subtitle: "수십만 건 인구 이동 데이터의 지도·차트화",
    period: "2022.12 – 2023.08",
    page: 25,
    endPage: 28,
  },
  {
    id: "k-city",
    roman: "V",
    short: "K-City",
    title: "K-City Network 해외실증",
    subtitle: "태국 경찰청 CCTV·드론 관제 — 거절을 문서로 푼 협업",
    period: "2022.08 – 2023.07",
    page: 29,
    endPage: 32,
  },
];

export function chapterIndexForPage(page) {
  let active = 0;
  for (let i = 0; i < CHAPTERS.length; i++) {
    if (page >= CHAPTERS[i].page) active = i;
  }
  return active;
}
