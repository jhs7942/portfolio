import { forwardRef } from "react";
import PageBackground from "./PageBackground";

const Pages = forwardRef(({ side = "recto", children }, ref) => {
  return (
    <section ref={ref} className="parchment-page">
      <PageBackground side={side} />
      <div className={`page-content ${side}`}>{children}</div>
    </section>
  );
});

export default Pages;
