import { forwardRef } from "react";
import PageBackground from "./PageBackground";

/**
 * 빈 양피지 페이지 (placeholder).
 * 실제 콘텐츠가 채워지기 전까지 사용되는 blank parchment.
 *
 * @param {"verso"|"recto"} side - 책등 기준 좌/우. 기본값 "recto".
 *   verso/recto는 parchment-bg의 그라데이션 방향에만 영향을 줌
 *   (책등 쪽이 살짝 더 어두워지는 효과).
 */
const Pages = forwardRef(({ side = "recto" }, ref) => {
  return (
    <div ref={ref} className="parchment-page">
      <PageBackground side={side} />
    </div>
  );
});

export default Pages;
