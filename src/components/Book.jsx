import HTMLFlipBook from "react-pageflip";
import Page from "./Pages";
import { useRef, useState, useEffect } from "react";
import FrontCover from "./FrontCover";
import BackCover from "./BackCover";
import Frontispiece from "./Frontispiece";

const Book = (props) => {
  const bookRef = useRef(null);
  const sessionPage = Number(window.sessionStorage.getItem("page")) || 0;
  const [page, setPage] = useState(sessionPage);

  const movePage = (command) => {
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
  };

  useEffect(() => {
    window.sessionStorage.setItem("page", page);
  }, [page]);

  useEffect(() => {
    console.log("시작 페이지", page);

    const Wheelhandle = (e) => {
      if (e.defaultPrevented) {
        return; // 이미 이벤트가 실행되는 중이라면 아무 동작도 하지 않습니다.
      }
      if (e.deltaY > 0) {
        movePage("next");
      } else {
        movePage("prev");
      }
    };

    const KendownHandle = (e) => {
      if (e.defaultPrevented) {
        return; // 이미 이벤트가 실행되는 중이라면 아무 동작도 하지 않습니다.
      }
      switch (e.key) {
        case "ArrowRight":
          movePage("next");
          break;
        case "ArrowLeft":
          movePage("prev");
          break;
      }
    };

    // 컴포넌트 마운트 시 전역 이벤트 리스터 등록
    window.addEventListener("wheel", Wheelhandle);
    window.addEventListener("keydown", KendownHandle);

    return () => {
      window.removeEventListener("wheel", Wheelhandle);
      window.removeEventListener("keydown", KendownHandle);
    };
  }, []);

  return (
    <HTMLFlipBook
      ref={bookRef}
      width={540}
      height={740}
      onFlip={(e) => setPage(e.data)}
      showCover={true}
      maxShadowOpacity={0.5}
      drawShadow={true}
      startPage={page}
    >
      <FrontCover />
      <Frontispiece />
      <Page className="demoPage">Page 2</Page>
      <Page className="demoPage">Page 3</Page>
      <Page className="demoPage">Page 4</Page>
      <Page className="demoPage">Page 5</Page>
      <Page className="demoPage">Page 6</Page>
      <Page className="demoPage">Page 7</Page>
      <Page className="demoPage">Page 8</Page>
      <Page className="demoPage">Page 9</Page>
      <Page className="demoPage">Page 10</Page>
      <Page className="demoPage">Page 11</Page>
      <Page className="demoPage">Page 12</Page>
      <Page className="demoPage">Page 13</Page>
      <Page className="demoPage">Page 14</Page>
      <Page className="demoPage">Page 15</Page>
      <BackCover className="demoPage">Page 16</BackCover>
    </HTMLFlipBook>
  );
};

export default Book;
