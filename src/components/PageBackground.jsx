/**
 * 양피지 페이지의 3-layer 배경 스택.
 * 모든 양피지 페이지(Frontispiece, Dedication, TOC, Chapter 등)에서 공용으로 사용.
 *
 * side: "verso"(좌측) | "recto"(우측) — gutter 그라데이션 방향 결정
 */
function PageBackground({ side = "recto" }) {
  return (
    <>
      <div className={`parchment-bg ${side}`} />
      <div className="parchment-noise" />
      <div className="page-edge-shadow" />
    </>
  );
}

export default PageBackground;
