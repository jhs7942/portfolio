import Page from "./Pages";

export function ContentsPage({ entries }) {
  return (
    <Page side="recto">
      <article className="book-page book-page--contents">
        <p className="page-kicker">Contents</p>
        <h2>목차</h2>
        <ol className="toc-list">
          {entries.map((entry, index) => (
            <li key={entry}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{entry}</strong>
            </li>
          ))}
        </ol>
        <p className="page-note">
          원고의 핵심을 프로젝트 사례집 형식으로 압축했습니다. 각 장은
          맥락, 판단, 결과, 회고가 한 흐름으로 이어지도록 구성했습니다.
        </p>
      </article>
    </Page>
  );
}

export function ProjectPage({ page, pageNumber, side }) {
  return (
    <Page side={side}>
      <article className="book-page">
        <header className="page-header">
          <p className="page-kicker">{page.chapter}</p>
          <h2>{page.title}</h2>
          <p className="page-lead">{page.lead}</p>
        </header>

        {page.quote && <blockquote>{page.quote}</blockquote>}

        {page.stats && (
          <div className="stat-grid">
            {page.stats.map(([label, value]) => (
              <div className="stat-item" key={label}>
                <span>{label}</span>
                <strong>{value}</strong>
              </div>
            ))}
          </div>
        )}

        {page.table && (
          <table className="case-table">
            <thead>
              <tr>
                {page.table.columns.map((column) => (
                  <th key={column}>{column}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {page.table.rows.map((row) => (
                <tr key={row.join("-")}>
                  {row.map((cell) => (
                    <td key={cell}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {page.sections?.map((section) => (
          <section className="page-section" key={section.heading}>
            <h3>{section.heading}</h3>
            <p>{section.body}</p>
          </section>
        ))}

        {page.bullets && (
          <ul className="page-bullets">
            {page.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        )}

        {page.callout && <p className="page-callout">{page.callout}</p>}

        <footer className="page-footer">
          <span>AI Quiz Casebook</span>
          <span>{String(pageNumber).padStart(2, "0")}</span>
        </footer>
      </article>
    </Page>
  );
}
