import { forwardRef } from "react";

const BackCover = forwardRef((props, ref) => {
  return (
    <section
      ref={ref}
      className="codex-cover codex-cover--back"
      data-density="hard"
    >
      <div className="codex-cover__leather" />
      <div className="codex-cover__grain" />
      <div className="codex-cover__border" />

      <div className="codex-cover__content codex-back">
        <p className="codex-back__top">Endnotes</p>
        <div className="codex-back__center">
          <p className="codex-back__mark">JHS</p>
          <p>
            제약은 선택을 좁히고,
            <br />
            선택은 제품의 모양을 만든다.
          </p>
        </div>
        <p className="codex-back__colophon">Portfolio Casebook, 2026</p>
      </div>
    </section>
  );
});

export default BackCover;
