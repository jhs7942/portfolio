# react-pageflip 페이지가 flip 중 잘못된 위치(y=820)에 그려지는 문제

## 학습 환경
- 날짜: 2026-05-25 / 관련 프로젝트: portfolio (인터랙티브 책 형태 포트폴리오) / 기술·버전: React 19.2.6, react-pageflip 2.0.3, Vite 8.0.12, Tailwind v4

---

## 배경

`react-pageflip` (StPageFlip 래퍼) 으로 책 UI 를 만드는 중 페이지를 넘길 때마다 다음과 같은 시각적 깨짐 현상이 발생했다.

- 회전 중인 페이지의 우측 영역이 검정으로 비어 보임
- 우측 하단에 다음 페이지의 일부가 어긋난 사각형으로 노출
- Cover → Frontispiece 전환에서 Frontispiece 콘텐츠 ("The Codex of jhs") 가 viewport 하단에 위치
- 마우스 휠, 키보드 화살표, 클릭 — **모든 페이지 넘김 이벤트**에서 동일 증상

여러 가설을 세웠지만 모두 빗나갔다.

- ❌ wheel 이벤트 폭주 → flip 중 라이브러리 상태 꼬임
- ❌ `renderOnlyPageLengthChange` 미설정 → 리렌더 중 `updateFromHtml` 호출
- ❌ CSS 3D transform + `overflow: hidden` 충돌 (preserve-3d 평탄화)
- ❌ 페이지 수 홀수 → showCover 와 spread 짝 불일치
- ❌ `showPageCorners` 의 코너 폴드 프리뷰
- ❌ Frontispiece 를 `data-density="hard"` 로 강제

소스 추적만으로는 추론이 빗나갔다. **Playwright 로 실제 DOM 의 inline cssText 와 computedStyle 을 측정**하고 나서야 진짜 원인이 드러났다.

---

## 핵심 개념

### 1. StPageFlip 의 페이지 그리기 패턴

`HTMLPage.draw()` 메소드는 매 애니메이션 프레임마다 `style.cssText` 를 **전체 치환** 한다. `drawHard()` 가 만드는 cssText:

```js
const commonStyle = `
    display: block;
    z-index: ${this.element.style.zIndex};
    left: 0;
    top: 0;
    width: ${pageWidth}px;
    height: ${pageHeight}px;
`;
// drawHard() 가 여기에 transform, transform-origin, backface-visibility, clip-path 추가
this.element.style.cssText = newStyle;
```

여기에 **`position: absolute` 가 빠져 있다**. 라이브러리는 페이지가 absolute positioning 일 거라고 가정하지만, 그 positioning 을 inline 으로 직접 적용하지 않는다.

### 2. 라이브러리는 자체 CSS 의 `.stf__item` 에 의존한다

`node_modules/page-flip/src/Style/stPageFlip.css`:

```css
.stf__item {
  display: none;
  position: absolute;
  transform-style: preserve-3d;
}
```

라이브러리는 모든 페이지 element 에 `.stf__item` 클래스를 추가하고, 위 CSS 의 `position: absolute` 가 적용되리라 전제한다.

### 3. CSS 캐스케이드의 함정

사용자 CSS 가 라이브러리 CSS 보다 **나중에** 로드되면 (Vite 의 일반적 import 순서: `node_modules` → 사용자 코드), 같은 specificity 의 클래스 선언이 겹치면 **나중 선언이 승리**한다.

| CSS | 적용 결과 |
|---|---|
| `.stf__item { position: absolute }` (라이브러리, 먼저 로드) | 후순위 선언에 의해 덮어쓰임 |
| `.parchment-page { position: relative }` (사용자, 나중 로드) | **최종 적용** |

### 4. 두 동작이 결합되면

flip 애니메이션 동안 `drawHard()` 가 `cssText` 를 덮어쓰면 inline `position` 이 사라진다. 그러면 CSS 캐스케이드가 다시 적용되어 `position: relative` 가 살아난다. relative 는 document flow 를 유지하므로, **여러 페이지가 모두 `top:0; left:0` 인 상태로 normal flow 에 배치** 되어 세로로 쌓인다.

| 페이지 인덱스 | 의도된 위치 (absolute) | 실제 위치 (relative + document flow) |
|---|---|---|
| 0 (Cover) | y=0 | y=0 |
| 1 (Frontispiece) | y=0 (Cover 와 같은 절대 좌표) | y=740 (Cover 바로 아래) |
| 2 | y=0 | y=1480 |

`simpleDraw()` 가 호출된 후엔 inline cssText 에 `position: absolute` 가 명시되지 않아도 클래스 `--simple` 이 라이브러리 CSS 의 다른 규칙을 활성화해서 OK. 문제는 hard flip 의 `drawHard()` 경로에서만 발생한다.

---

## 실제 적용

### 수정 전

`src/index.css`:

```css
.parchment-page {
  position: relative;   /* ← 라이브러리의 .stf__item position:absolute 를 덮어씀 */
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: var(--parchment);
  color: var(--ink);
}

.codex-cover {
  position: relative;   /* ← 동일한 문제 */
  width: 100%;
  height: 100%;
  /* ... */
}
```

### 수정 후

```css
/* 양피지 페이지의 루트 컨테이너
   주의: position 을 절대로 지정하지 말 것.
   react-pageflip 의 .stf__item { position: absolute } 가 적용되어야 한다.
   여기에 position: relative 를 두면 flip 애니메이션 중에 페이지가 document flow 로 떨어진다. */
.parchment-page {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: var(--parchment);
  color: var(--ink);
}

.codex-cover {
  /* position 을 지정하지 말 것 — react-pageflip 의 .stf__item position:absolute 가 적용되어야 함. */
  width: 100%;
  height: 100%;
  /* ... */
}
```

`position: relative` 두 줄을 삭제하는 것이 전부였다.

### Playwright 로 검증

수정 전후를 mid-flip (wheel 이벤트 발사 후 300~400ms) 시점에 측정:

| | 수정 전 | 수정 후 |
|---|---|---|
| Frontispiece `getComputedStyle().position` | `"relative"` | `"absolute"` |
| Frontispiece `getBoundingClientRect().y` | `820` (책 하단 밑) | `-54` (Cover 와 동일 위치, 3D 회전 bbox 확장) |
| 모든 활성 페이지 y 좌표 | 일부 820 | 전부 80 (책 상단) |
| `style.cssText.includes('position')` | `false` | `false` (변화 없음 — 라이브러리가 inline 으로 안 넣음) |

inline cssText 에는 여전히 `position` 이 없지만, 우리 CSS 의 `position: relative` 가 사라졌으므로 라이브러리 CSS 의 `position: absolute` 가 정상 적용된다.

---

## 주의사항

### 1. 라이브러리가 자체 CSS 에 의존하는 패턴은 흔하다

라이브러리는 자기 CSS 가 사용자 CSS 보다 우선이라고 가정하는 경우가 많다. 사용자 CSS 가 같은 selector specificity 로 후순위에 정의되면 라이브러리 내부 동작이 깨질 수 있다. 특히 `position`, `display`, `transform` 같은 레이아웃 속성은 라이브러리의 정상 동작에 필수적인 경우가 많아 주의.

### 2. `style.cssText = ...` 는 모든 inline 스타일을 치환한다

라이브러리가 매 프레임 cssText 를 덮어쓰는 패턴을 쓰면, 사용자가 inline 스타일로 추가 속성을 넣어도 다음 프레임에 다 날아간다. 무엇이 inline 으로 들어가고 무엇이 CSS 클래스로 들어가는지 확인이 중요하다.

### 3. CSS 측정은 항상 두 가지 다 보기

- `element.style.cssText` (inline 스타일만)
- `getComputedStyle(element).position` (최종 적용된 값)

inline 이 없어도 컴퓨티드 값이 다를 수 있다. 캐스케이드가 적용된 결과를 봐야 진짜 그려지는 모습을 알 수 있다.

### 4. 라이브러리 소스만 읽고 추론하지 말 것

이번엔 라이브러리 소스를 정확히 인용해 가며 여러 가설을 세웠지만 다 빗나갔다. **DOM 의 실제 동작을 측정**해야 한다. Playwright + `evaluate` + `getBoundingClientRect` + `getComputedStyle` 조합으로 수 분 만에 진짜 원인이 잡혔다.

### 5. flip 애니메이션 도중 페이지 컴포넌트는 React 가 다시 호출하지 않는다

검증해 본 사실:
- `onFlip` 이벤트는 애니메이션 **완료 후** 발화 (`updatePageIndex` 가 `animateFlippingTo` 콜백 안에서 호출됨)
- 따라서 mid-flip 중에 Book.jsx 의 리렌더는 일어나지 않음
- 페이지 컴포넌트 함수 본체는 mid-flip 중에 호출되지 않음
- 라이브러리가 매 프레임 하는 일은 **DOM 의 inline style 갱신**일 뿐 React 의 reconciliation 과는 별개

따라서 "flip 중 페이지가 재렌더링되어서 깨진다" 라는 가설은 React 관점에서 틀린 것. 라이브러리의 CSS 갱신이 사용자 CSS 와 충돌하는 것이 진짜 원인이었다.

---

## 참고 자료

- [Nodlik/react-pageflip GitHub](https://github.com/Nodlik/react-pageflip) — React 래퍼
- [Nodlik/StPageFlip GitHub](https://github.com/Nodlik/StPageFlip) — 실제 페이지 그리기 엔진
- [StPageFlip — HTMLPage.ts 소스](https://github.com/Nodlik/StPageFlip/blob/master/src/Page/HTMLPage.ts) — `draw()`, `drawHard()`, `drawSoft()` 의 cssText 패턴
- [StPageFlip — stPageFlip.css](https://github.com/Nodlik/StPageFlip/blob/master/src/Style/stPageFlip.css) — `.stf__item { position: absolute }` 정의
- [StPageFlip — Render/HTMLRender.ts](https://github.com/Nodlik/StPageFlip/blob/master/src/Render/HTMLRender.ts) — `drawFrame()` 의 매 프레임 렌더 루프
- [MDN — CSSStyleDeclaration.cssText](https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration/cssText) — 전체 치환 동작 명세
- [MDN — Specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity) — 캐스케이드 규칙
