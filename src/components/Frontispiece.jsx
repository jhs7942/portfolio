import { forwardRef } from "react";
import PageBackground from "./PageBackground";

/**
 * 속표지 — 표지를 펼쳤을 때 좌측에 보이는 첫 양피지 페이지.
 * 책의 제목·부제·임프린트를 한 번 더 보여주는 인쇄물 관행.
 */
const Frontispiece = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="parchment-page">
      <PageBackground side="verso" />

      <div className="page-content verso">
        <div className="frontispiece-content">
          <div className="frontispiece-ornament-top">⁂</div>

          <h1 className="frontispiece-title">
            The Codex
            <br />
            <span className="of">of</span> jhs
          </h1>

          <div className="frontispiece-sub">
            A Frontend Developer&apos;s Storybook
          </div>

          <div className="frontispiece-rule" />

          <div className="frontispiece-imprint">
            Volume One
            <br />
            First Edition · Bound by Hand
            <br />
            Pohang · Anno Domini{" "}
            <span className="imprint-roman">MMXXVI</span>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Frontispiece;
