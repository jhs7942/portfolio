import { forwardRef } from "react";

/**
 * 뒷표지 — FrontCover와 같은 가죽 재질을 공유하되,
 * 책의 종착점답게 sparse하고 dignified한 구성.
 *
 * 공유 클래스: .codex-cover, .codex-cover__leather/noise/border/content
 * 뒷표지 전용: .codex-cover--back (border-radius 반전 + 가죽 광원 위치 반전)
 */
const BackCover = forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className="codex-cover codex-cover--back"
      data-density="hard"
    >
      <div className="codex-cover__leather" />
      <div className="codex-cover__noise" />
      <div className="codex-cover__border" />

      <div className="codex-cover__content">
        <div className="codex-back__top">⁂</div>

        <div className="codex-back__center">
          <div className="codex-back__ornament">❦</div>
          <div className="codex-back__rule" />
          <div className="codex-back__epitaph">the end of the codex</div>
        </div>

        <div className="codex-back__colophon">
          Thank you for reading.
          <span className="mark">codex press · mmxxvi</span>
        </div>
      </div>
    </div>
  );
});

export default BackCover;
