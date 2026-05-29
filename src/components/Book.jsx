import HTMLFlipBook from "react-pageflip";
import { useEffect, useMemo, useRef, useState } from "react";
import FrontCover from "./FrontCover";
import BackCover from "./BackCover";
import Frontispiece from "./Frontispiece";
import { ContentsPage, ProjectPage } from "./ProjectPage";
import { pages, tableOfContents } from "../data/projectBook";

const STORAGE_KEY = "ai-quiz-casebook-page";

const Book = () => {
  const bookRef = useRef(null);
  const initialPage = Number(window.sessionStorage.getItem(STORAGE_KEY)) || 0;
  const [page, setPage] = useState(initialPage);

  const totalPages = useMemo(() => pages.length + 3, []);
  const currentSpread = Math.min(page + 1, totalPages);

  const movePage = (direction) => {
    const book = bookRef.current?.pageFlip();
    if (!book) return;

    if (direction === "next") {
      book.flipNext();
      return;
    }

    book.flipPrev();
  };

  useEffect(() => {
    window.sessionStorage.setItem(STORAGE_KEY, page);
  }, [page]);

  useEffect(() => {
    const handleWheel = (event) => {
      if (Math.abs(event.deltaY) < 24) return;
      movePage(event.deltaY > 0 ? "next" : "prev");
    };

    const handleKeyDown = (event) => {
      if (event.key === "ArrowRight") movePage("next");
      if (event.key === "ArrowLeft") movePage("prev");
    };

    window.addEventListener("wheel", handleWheel, { passive: true });
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="book-stage">
      <div className="book-wrap">
        <HTMLFlipBook
          ref={bookRef}
          width={520}
          height={720}
          size="stretch"
          minWidth={310}
          maxWidth={520}
          minHeight={430}
          maxHeight={720}
          onFlip={(event) => setPage(event.data)}
          showCover
          maxShadowOpacity={0.45}
          drawShadow
          startPage={initialPage}
          showPageCorners={false}
          mobileScrollSupport
          usePortrait
          renderOnlyPageLengthChange
        >
          <FrontCover />
          <Frontispiece />
          <ContentsPage entries={tableOfContents} />
          {pages.map((projectPage, index) => (
            <ProjectPage
              key={projectPage.title}
              page={projectPage}
              pageNumber={index + 1}
              side={index % 2 === 0 ? "verso" : "recto"}
            />
          ))}
          <BackCover />
        </HTMLFlipBook>
      </div>

      <nav className="book-controls" aria-label="Book navigation">
        <button type="button" onClick={() => movePage("prev")} aria-label="Previous page">
          <span aria-hidden="true">‹</span>
        </button>
        <p>
          <strong>{currentSpread}</strong>
          <span>/</span>
          {totalPages}
        </p>
        <button type="button" onClick={() => movePage("next")} aria-label="Next page">
          <span aria-hidden="true">›</span>
        </button>
      </nav>
    </div>
  );
};

export default Book;
