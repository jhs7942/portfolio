import HTMLFlipBook from "react-pageflip";
import { useRef, useState, useEffect, useCallback } from "react";
import FrontCover from "./FrontCover";
import BackCover from "./BackCover";
import Frontispiece from "./Frontispiece";
import {
  AiQuizOpener,
  AiQuizContext,
  AiQuizProblem,
  AiQuizAnalyze,
  AiQuizHypothesis,
  AiQuizActionDesign,
  AiQuizActionRetro,
  AiQuizResultMetrics,
  AiQuizResultReach,
  AiQuizLearnings,
  AiQuizMeta,
} from "./AiQuiz";
import {
  FlowOrigin,
  FlowPivots,
  FlowIssuesTech,
  FlowIssuesPeople,
  FlowFixesStructure,
  FlowFixesEvidence,
} from "./AiQuizFlow";
import {
  TableOfContentsLeft,
  TableOfContentsRight,
} from "./TableOfContents";
import {
  SmartCityOpener,
  SmartCityScope,
  SmartCityTrouble,
  SmartCityRetro,
  GyeongbukOpener,
  GyeongbukScope,
  GyeongbukTrouble,
  GyeongbukRetro,
  KCityOpener,
  KCityScope,
  KCityTrouble,
  KCityRetro,
} from "./SIChapters";
import { CHAPTERS, chapterIndexForPage } from "./chapters";

const Book = () => {
  const bookRef = useRef(null);
  const sessionPage = Number(window.sessionStorage.getItem("page")) || 0;
  const [page, setPage] = useState(sessionPage);

  const movePage = useCallback((command) => {
    const book = bookRef.current?.pageFlip();
    if (!book) return;

    switch (command) {
      case "next":
        book.flipNext();
        break;
      case "prev":
        book.flipPrev();
        break;
    }
  }, []);

  const goToPage = useCallback((targetPage) => {
    const book = bookRef.current?.pageFlip();
    if (!book) return;
    book.flip(targetPage);
  }, []);

  useEffect(() => {
    window.sessionStorage.setItem("page", page);
  }, [page]);

  useEffect(() => {
    const Wheelhandle = (e) => {
      if (e.defaultPrevented) return;
      if (e.deltaY > 0) movePage("next");
      else movePage("prev");
    };

    const KendownHandle = (e) => {
      if (e.defaultPrevented) return;
      switch (e.key) {
        case "ArrowRight":
          movePage("next");
          break;
        case "ArrowLeft":
          movePage("prev");
          break;
      }
    };

    window.addEventListener("wheel", Wheelhandle);
    window.addEventListener("keydown", KendownHandle);

    return () => {
      window.removeEventListener("wheel", Wheelhandle);
      window.removeEventListener("keydown", KendownHandle);
    };
  }, [movePage]);

  const activeChapter = chapterIndexForPage(page);

  return (
    <div className="book-stage">
      <HTMLFlipBook
        ref={bookRef}
        width={540}
        height={740}
        onFlip={(e) => setPage(e.data)}
        showCover={true}
        maxShadowOpacity={0.5}
        drawShadow={true}
        startPage={page}
        showPageCorners={false}
        renderOnlyPageLengthChange={true}
      >
        <FrontCover />
        <Frontispiece />
        <TableOfContentsLeft onJump={goToPage} />
        <TableOfContentsRight onJump={goToPage} />
        <AiQuizOpener />
        <AiQuizContext />
        <AiQuizProblem />
        <AiQuizAnalyze />
        <AiQuizHypothesis />
        <AiQuizActionDesign />
        <AiQuizActionRetro />
        <AiQuizResultMetrics />
        <AiQuizResultReach />
        <AiQuizLearnings />
        <AiQuizMeta />
        <FlowOrigin />
        <FlowPivots />
        <FlowIssuesTech />
        <FlowIssuesPeople />
        <FlowFixesStructure />
        <FlowFixesEvidence />
        <SmartCityOpener />
        <SmartCityScope />
        <SmartCityTrouble />
        <SmartCityRetro />
        <GyeongbukOpener />
        <GyeongbukScope />
        <GyeongbukTrouble />
        <GyeongbukRetro />
        <KCityOpener />
        <KCityScope />
        <KCityTrouble />
        <KCityRetro />
        <BackCover />
      </HTMLFlipBook>

      <nav className="thumb-index" aria-label="챕터 색인">
        <div className="thumb-index-label">색인</div>
        {CHAPTERS.map((ch, i) => (
          <button
            key={ch.id}
            type="button"
            className={`thumb-tab ${i === activeChapter ? "active" : ""}`}
            onClick={() => goToPage(ch.page)}
            title={`${ch.title} (p.${ch.page})`}
          >
            <span className="thumb-roman">{ch.roman}</span>
            <span className="thumb-short">{ch.short}</span>
          </button>
        ))}
      </nav>
    </div>
  );
};

export default Book;
