import { forwardRef } from "react";

const FrontCover = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="codex-cover" data-density="hard">
      <div className="codex-cover__leather" />
      <div className="codex-cover__noise" />
      <div className="codex-cover__border" />

      <div className="codex-cover__content">
        <div className="codex-cover__eyebrow">An Interactive Portfolio</div>

        <div className="codex-cover__center">
          <div className="codex-cover__ornament-top">⁂</div>

          <h1 className="codex-cover__title">
            The Codex
            <br />
            <span className="codex-cover__of">of</span> jhs
          </h1>

          <div className="codex-cover__subtitle">
            A Frontend Developer&apos;s Storybook
          </div>

          <WaxSeal />

          <div className="codex-cover__author">Jeong Hyun-seung</div>
        </div>

        <div className="codex-cover__imprint">
          Bound in Pohang
          <br />
          Set in Garamond &amp; Myeongjo
          <br />
          Anno Domini · MMXXVI
        </div>
      </div>
    </div>
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
          <stop offset="0%" stopColor="#a64a3a" />
          <stop offset="55%" stopColor="#7a2e20" />
          <stop offset="100%" stopColor="#3d160e" />
        </radialGradient>
        <filter id="sealShadow" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="1.5" dy="2.5" stdDeviation="2" floodOpacity="0.55" />
        </filter>
      </defs>

      <g filter="url(#sealShadow)">
        {/* drip outline — irregular wax edge */}
        <path
          d="M50 8
             C 62 8, 78 14, 86 28
             C 92 38, 92 52, 88 64
             C 84 76, 70 90, 56 91
             C 42 92, 26 86, 16 74
             C 8 64, 6 50, 12 36
             C 18 22, 36 8, 50 8 Z"
          fill="url(#waxRed)"
          stroke="#3d160e"
          strokeWidth="0.8"
          opacity="0.98"
        />
        {/* monogram J */}
        <text
          x="50"
          y="64"
          textAnchor="middle"
          fontFamily="'Cormorant Garamond', serif"
          fontStyle="italic"
          fontWeight="600"
          fontSize="46"
          fill="#e8d8b0"
          opacity="0.88"
        >
          J
        </text>
        {/* tiny highlight */}
        <ellipse
          cx="36"
          cy="28"
          rx="9"
          ry="5"
          fill="#e8d8b0"
          opacity="0.18"
        />
      </g>
    </svg>
  );
}

export default FrontCover;
