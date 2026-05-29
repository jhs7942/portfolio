import { forwardRef } from "react";
import PageBackground from "./PageBackground";
import { bookMeta } from "../data/projectBook";

const Frontispiece = forwardRef((props, ref) => {
  return (
    <section ref={ref} className="parchment-page">
      <PageBackground side="verso" />
      <div className="page-content verso">
        <div className="frontispiece-content">
          <p className="frontispiece-kicker">A project told as a book</p>
          <h1 className="frontispiece-title">{bookMeta.title}</h1>
          <p className="frontispiece-subtitle">{bookMeta.subtitle}</p>

          <dl className="frontispiece-meta">
            <div>
              <dt>Period</dt>
              <dd>{bookMeta.period}</dd>
            </div>
            <div>
              <dt>Role</dt>
              <dd>{bookMeta.role}</dd>
            </div>
            <div>
              <dt>Stack</dt>
              <dd>{bookMeta.stack}</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
});

export default Frontispiece;
