import { forwardRef } from "react";
import PageBackground from "./PageBackground";
import { CHAPTERS } from "./chapters";

/**
 * Table of Contents — 2-page spread (TocLeft recto + TocRight verso 사이에 끼이는 게 아니라
 * 책 첫 spread에 [Frontispiece verso, TocLeft recto] 로 보이고
 * 두 번째 spread에 [TocRight verso, AiQuizOpener recto] 로 보임.
 *
 * 두 페이지 모두 챕터 항목을 분할해 표시:
 *   TocLeft  : 챕터 I·II (AI Quiz)
 *   TocRight : 챕터 III·IV·V (SI 프로젝트)
 *
 * 각 항목은 buttons — 클릭 시 onJump(pageIndex) 호출.
 */

function TocItem({ ch, onJump }) {
  return (
    <button
      type="button"
      className="toc-item"
      onClick={() => onJump(ch.page)}
    >
      <span className="toc-roman">{ch.roman}</span>
      <span className="toc-text">
        <span className="toc-title">{ch.title}</span>
        <span className="toc-sub">{ch.subtitle}</span>
        <span className="toc-period">{ch.period}</span>
      </span>
      <span className="toc-dots" aria-hidden="true" />
      <span className="toc-page">{ch.page}</span>
    </button>
  );
}

export const TableOfContentsLeft = forwardRef((props, ref) => (
  <div ref={ref} className="parchment-page">
    <PageBackground side="recto" />
    <div className="page-content recto chapter-page">
      <div className="toc-eyebrow">— Table of Contents —</div>
      <h2 className="toc-title-head">Contents</h2>
      <div className="toc-rule" />

      <div className="toc-section">
        <div className="toc-section-head">Part One · 4시간 MVP</div>
        <TocItem ch={CHAPTERS[0]} onJump={props.onJump} />
      </div>

      <div className="toc-spillover">
        <div className="toc-spillover-mark">⁂</div>
        <p>
          이 책의 첫 부분은 <em>4시간이라는 제약을 무기로 바꾼 한 번의 도박</em>을
          다룬다. 두 번째 부분은 그보다 앞서 있었던{" "}
          <em>SI 현장에서의 세 사업</em> — 같은 사람의 다른 트랙.
        </p>
      </div>

      <div className="chapter-folio">ii</div>
    </div>
  </div>
));

export const TableOfContentsRight = forwardRef((props, ref) => (
  <div ref={ref} className="parchment-page">
    <PageBackground side="verso" />
    <div className="page-content verso chapter-page">
      <div className="toc-eyebrow">— Table of Contents (cont.) —</div>
      <div className="toc-rule" />

      <div className="toc-section">
        <div className="toc-section-head">Part Two · SI 현장 (제타럭스시스템)</div>
        <TocItem ch={CHAPTERS[1]} onJump={props.onJump} />
        <TocItem ch={CHAPTERS[2]} onJump={props.onJump} />
        <TocItem ch={CHAPTERS[3]} onJump={props.onJump} />
      </div>

      <div className="toc-spillover">
        <div className="toc-spillover-mark">❦</div>
        <p>
          각 챕터 제목을 클릭하면 해당 챕터로 즉시 넘어간다. 책 우측 가장자리의{" "}
          <em>thumb-index</em> 도 같은 역할을 한다.
        </p>
      </div>

      <div className="chapter-folio">iii</div>
    </div>
  </div>
));
