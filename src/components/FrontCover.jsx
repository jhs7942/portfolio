import { forwardRef } from "react";
import { bookMeta } from "../data/projectBook";

const FrontCover = forwardRef((props, ref) => {
  return (
    <section ref={ref} className="codex-cover" data-density="hard">
      <div className="codex-cover__leather" />
      <div className="codex-cover__grain" />
      <div className="codex-cover__border" />

      <div className="codex-cover__content">
        <p className="codex-cover__eyebrow">Portfolio Casebook</p>

        <div className="codex-cover__center">
          <p className="codex-cover__folio">Vol. I</p>
          <h1 className="codex-cover__title">
            {bookMeta.title}
            <span>{bookMeta.subtitle}</span>
          </h1>
          <WaxSeal />
          <p className="codex-cover__author">Jeong Hyun-seung</p>
        </div>

        <p className="codex-cover__imprint">
          Constraint Driven Product Story
          <br />
          SSAFY Project Portfolio 2026
        </p>
      </div>
    </section>
  );
});

function WaxSeal() {
  return (
    <svg
      className="codex-cover__seal"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="waxRed" cx="35%" cy="32%" r="68%">
          <stop offset="0%" stopColor="#d15a45" />
          <stop offset="56%" stopColor="#8f2f24" />
          <stop offset="100%" stopColor="#43130f" />
        </radialGradient>
        <filter id="sealShadow" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="1.5" dy="2.5" stdDeviation="2" floodOpacity="0.5" />
        </filter>
      </defs>
      <g filter="url(#sealShadow)">
        <path
          d="M50 8 C63 8 78 15 87 29 C94 41 92 55 86 68 C80 81 67 91 52 92 C37 93 23 86 14 74 C6 63 7 48 12 35 C18 21 35 8 50 8Z"
          fill="url(#waxRed)"
          stroke="#3b120e"
          strokeWidth="0.8"
        />
        <text
          x="50"
          y="61"
          textAnchor="middle"
          fontFamily="Georgia, 'Times New Roman', serif"
          fontWeight="700"
          fontSize="34"
          fill="#f3e6c8"
        >
          AI
        </text>
        <ellipse cx="35" cy="27" rx="9" ry="5" fill="#f4d4bd" opacity="0.2" />
      </g>
    </svg>
  );
}

export default FrontCover;
