import { forwardRef } from "react";
import PageBackground from "./PageBackground";

/**
 * AI Quiz 챕터 — Codex of jhs · Volume One, Chapter I
 *
 * 양피지 페이지 11장으로 구성된 단일 프로젝트 챕터.
 * portfolio-v2.md 의 7개 섹션(Context → Learnings)을 책 흐름으로 재배치.
 *
 * 페이지 순서 (Frontispiece 다음에 이어짐):
 *   1. Chapter opener     (recto)
 *   2. Context            (verso)
 *   3. Problem            (recto)
 *   4. Analyze            (verso)
 *   5. Hypothesis         (recto)
 *   6. Action · 설계        (verso)
 *   7. Action · 회고        (recto)
 *   8. Result · 지표        (verso)
 *   9. Result · 확산        (recto)
 *  10. Learnings          (verso)
 *  11. Meta 회고           (recto)
 */

export const ChapterShell = forwardRef(
  ({ side, folio, runningHead, children }, ref) => (
    <div ref={ref} className="parchment-page">
      <PageBackground side={side} />
      <div className={`page-content ${side} chapter-page`}>
        {runningHead ? (
          <div className="chapter-runhead">{runningHead}</div>
        ) : null}
        <div className="chapter-body">{children}</div>
        {folio ? <div className="chapter-folio">{folio}</div> : null}
      </div>
    </div>
  )
);

/* ─────────────────────────────────────────────────────────── */
/* 1. Chapter opener                                            */
/* ─────────────────────────────────────────────────────────── */
export const AiQuizOpener = forwardRef((props, ref) => (
  <div ref={ref} className="parchment-page">
    <PageBackground side="recto" />
    <div className="page-content recto chapter-opener">
      <div className="opener-eyebrow">Chapter I</div>
      <div className="opener-ornament">⁂</div>
      <h1 className="opener-title">
        AI Quiz
        <span className="opener-mark">·</span>
      </h1>
      <p className="opener-tagline">
        시험 범위 고정이라는 제약을
        <br />
        역이용한 교재 기반 학습 퀴즈 플랫폼
      </p>
      <div className="opener-rule" />
      <div className="opener-epigraph">
        <em>
          “과락 4개 누적된 동료들에게는
          <br />
          퀴즈 도구 품질이 곧 퇴소 리스크였다.”
        </em>
      </div>
      <div className="opener-meta">
        <div>
          <span className="meta-key">기간</span>
          <span className="meta-val">MVP 4시간 + 2주 간격 개선</span>
        </div>
        <div>
          <span className="meta-key">역할</span>
          <span className="meta-val">코드·기술결정 1인 / 콘텐츠 2명</span>
        </div>
        <div>
          <span className="meta-key">스택</span>
          <span className="meta-val">
            React 19 · Vite · TS · Zustand · Supabase · Vercel
          </span>
        </div>
        <div>
          <span className="meta-key">성과</span>
          <span className="meta-val">풀린 퀴즈 92,329건 · 세션 6,343건</span>
        </div>
      </div>
      <div className="chapter-folio">i</div>
    </div>
  </div>
));

/* ─────────────────────────────────────────────────────────── */
/* 2. Context                                                   */
/* ─────────────────────────────────────────────────────────── */
export const AiQuizContext = forwardRef((props, ref) => (
  <ChapterShell
    ref={ref} side="verso" folio="ii" runningHead="Context">
      <h2 className="sec-title">Context</h2>
      <p className="sec-lede">
        SSAFY 마이스터고 트랙 — <strong>12회 시험 중 5회 과락 누적 시 강제 퇴소.</strong>{" "}
        본인은 6회차 시점 0/5로 여유 있었으나, AI 이론을 커리어 자산으로 두기 위해{" "}
        <em>“통과”가 아닌 “제대로 학습할 도구”</em>가 필요했다.
      </p>

      <dl className="sec-defs">
        <div>
          <dt>시간</dt>
          <dd>시험까지 2일, MVP 데드라인 4시간.</dd>
        </div>
        <div>
          <dt>자원</dt>
          <dd>코드 1인 + 콘텐츠 2명.</dd>
        </div>
        <div>
          <dt>도구 숙련도</dt>
          <dd>
            Vite·Supabase 첫 사용, Claude Code 1개월. 4시간 완성은{" "}
            <em>“AI 도구가 숙련도 공백을 메운다”</em>는 가설에 건 도박.
          </dd>
        </div>
        <div>
          <dt>사용자 가설</dt>
          <dd>
            재학생 약 1,000명이 각자 NotebookLM으로 퀴즈를 만들던 상황 — 한 번
            만들면 1,000명 전체가 쓰는 <strong>집합재 가설</strong>이 동기.
          </dd>
        </div>
        <div>
          <dt>도메인</dt>
          <dd>
            AI 과목은 개념 + 수식·코드 혼합. 하나의 개념이 한·영으로 공존(과적합 /
            Overfitting) → 주관식 유연 채점의 필수 조건.
          </dd>
        </div>
      </dl>
  </ChapterShell>
));

/* ─────────────────────────────────────────────────────────── */
/* 3. Problem                                                   */
/* ─────────────────────────────────────────────────────────── */
export const AiQuizProblem = forwardRef((props, ref) => (
  <ChapterShell
    ref={ref} side="recto" folio="iii" runningHead="Problem">
      <h2 className="sec-title">Problem</h2>

      <h3 className="sec-sub">기존 경로의 구조적 한계</h3>
      <p>
        싸피 강사가 권장한 NotebookLM 자체 제작은 1 사이클(업로드→생성→풀이)에{" "}
        <strong>평균 10분</strong> + 데스크탑 전용. 지하철·자투리 시간은
        포기해야 한다.
      </p>

      <h3 className="sec-sub">집합재로서의 비효율</h3>
      <p>
        친구들은 만든 퀴즈를 PDF로 단체방에 공유 — 인터랙티브 풀이·채점 불가 +
        각자 중복 제작으로 집합적 시간 낭비.
      </p>

      <h3 className="sec-sub">비용의 비대칭성과 진짜 동기</h3>
      <p>
        본인 목표는 “과락 면하기”라는 낮은 기준. 그러나 과락 4개 이상 누적된
        동료들에게는 도구 품질이 곧 퇴소 리스크였다. Problem 의 진짜 정의는{" "}
        <strong>개인 효용이 아니라 “과락 위기 친구 돕기”</strong>{" "}
        — 커뮤니티 기여로 재정의되었다.
      </p>
  </ChapterShell>
));

/* ─────────────────────────────────────────────────────────── */
/* 4. Analyze                                                   */
/* ─────────────────────────────────────────────────────────── */
export const AiQuizAnalyze = forwardRef((props, ref) => (
  <ChapterShell
    ref={ref} side="verso" folio="iv" runningHead="Analyze">
      <h2 className="sec-title">Analyze</h2>

      <table className="sec-table">
        <thead>
          <tr>
            <th>선택지</th>
            <th>판단</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <strong>A.</strong> LLM API 동적 생성
              <div className="td-sub">시험 범위 적합도 보장 불가</div>
            </td>
            <td className="td-verdict">기각</td>
          </tr>
          <tr className="row-pick">
            <td>
              <strong>B.</strong> 교재 기반 정적 JSON
              <div className="td-sub">생성형 AI 초안 + 인간 검수</div>
            </td>
            <td className="td-verdict pick">채택</td>
          </tr>
          <tr>
            <td>
              <strong>C.</strong> 순수 수동 작성
              <div className="td-sub">시간 효율 낮음</div>
            </td>
            <td className="td-verdict">기각</td>
          </tr>
        </tbody>
      </table>

      <p className="sec-note">
        <strong>핵심 기준</strong> — “시험 범위가 싸피 내부 교재로 고정”되어
        있다는 제약이 결정적. LLM 동적 생성은 범위 적합도를 구조적으로 보장할
        수 없다.
      </p>

      <h3 className="sec-sub">실측 근거</h3>
      <ul className="sec-list">
        <li>
          v1 LLM 샘플 검수: <strong>30 中 1 오류</strong> — 품질은 낮지 않았으나{" "}
          <em>“범위 이탈”</em> 타입이라 교재 기반의 우위 확인.
        </li>
        <li>
          하이브리드로 팀 2명이 1차 시험용 <strong>930문제</strong> 생성·검수에
          약 2시간, 2차 시험용 180 추가.
        </li>
      </ul>
  </ChapterShell>
));

/* ─────────────────────────────────────────────────────────── */
/* 5. Hypothesis                                                */
/* ─────────────────────────────────────────────────────────── */
export const AiQuizHypothesis = forwardRef((props, ref) => (
  <ChapterShell
    ref={ref} side="recto" folio="v" runningHead="Hypothesis">
      <h2 className="sec-title">Hypothesis</h2>

      <ol className="sec-ol">
        <li>
          <strong>속도</strong> — 퀴즈 로드 &lt; 1초
        </li>
        <li>
          <strong>비용</strong> — 사용자별 추가 비용 0원
        </li>
        <li>
          <strong>가용성</strong> — DB 장애 시에도 퀴즈 풀기 유지
        </li>
        <li>
          <strong>적합도</strong> — 교재 기반이므로 실제 출제 범위와 높은 겹침률
        </li>
      </ol>

      <h3 className="sec-sub">검증 방법 — 사후 관찰만</h3>
      <p>
        4시간 데드라인에서 측정 인프라 구축은 오버헤드라 판단. 대신 롤백 비용이
        낮은 구조(정적 JSON + Vercel 재배포)로{" "}
        <em>“가설 실패 → 빠른 교정”</em>을 설계적으로 확보.
      </p>

      <div className="callout">
        <div className="callout-title">의도적으로 세우지 않은 가설</div>
        <div className="callout-body">
          <strong>주관식 채점 정답률.</strong> 객관식 우선 설계의 스코프 분리
          판단 — Result 단계에서 <em>숨겨진 반증</em>의 진원지가 된다.
        </div>
      </div>
  </ChapterShell>
));

/* ─────────────────────────────────────────────────────────── */
/* 6. Action · 설계                                              */
/* ─────────────────────────────────────────────────────────── */
export const AiQuizActionDesign = forwardRef((props, ref) => (
  <ChapterShell
    ref={ref} side="verso" folio="vi" runningHead="Action · 설계">
      <h2 className="sec-title">Action</h2>

      <p className="sec-lede">
        v1(Next.js + LLM API) 구상 단계 기각 → v2(Vite + 정적 JSON) 구축.
        Supabase 는 분석·로깅 전용으로 축소, 모든 DB 호출 <em>silent fail.</em>
      </p>

      <h3 className="sec-sub">트레이드오프</h3>
      <ul className="sec-list">
        <li>
          <strong>포기</strong> — 실시간 콘텐츠 업데이트, 관리자 대시보드,
          문제당 정답률 표시
        </li>
        <li>
          <strong>기술 부채</strong> — 주관식 “괄호 패턴 확장” 규칙 (정답률 40.7%)
        </li>
        <li>
          <strong>보안 타협</strong> — RLS 전면 비활성화
        </li>
      </ul>

      <h3 className="sec-sub">설계 성격 — 사전 설계 + 학습 혼합</h3>
      <p>
        <em>사전 설계형:</em> silent fail 원칙(“DB 죽어도 퀴즈는 돈다”)은 초기
        설계부터 명시.
        <br />
        <em>학습형:</em> RLS 전면 비활성화는 401 에러 후의 대응. 4개 대안 검토
        후 “anon key + PII 없음 + 공개 데이터” Context 에서 RLS 본래 목적
        부적용을 근거로 채택.
      </p>

      <div className="callout">
        <div className="callout-title">시간 배분 — 4시간의 진짜 병목</div>
        <div className="callout-body">
          구현이 아니라 팀원과의 <strong>요구사항 협의</strong>가 가장 오래
          걸렸다. 핵심 시간 자원은 <em>“무엇을 안 할지 정하는 과정”.</em>
        </div>
      </div>
  </ChapterShell>
));

/* ─────────────────────────────────────────────────────────── */
/* 7. Action · 회고                                              */
/* ─────────────────────────────────────────────────────────── */
export const AiQuizActionRetro = forwardRef((props, ref) => (
  <ChapterShell
    ref={ref} side="recto" folio="vii" runningHead="Action · 회고">
      <h2 className="sec-title">자기 회고 · 스코프 판단의 오류</h2>

      <table className="sec-table">
        <thead>
          <tr>
            <th>항목</th>
            <th>원래 판단</th>
            <th>실제</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>오답노트</td>
            <td>“로그인 없이 불가”</td>
            <td>로컬스토리지로 가능했음</td>
          </tr>
          <tr>
            <td>Linear</td>
            <td>“4h MVP엔 오버헤드”</td>
            <td>업무 분배 불균형 → 소외감</td>
          </tr>
        </tbody>
      </table>

      <h3 className="sec-sub">가장 뼈아픈 스토리 — 팀원 소외감의 반복</h3>
      <p>
        콘텐츠 팀원 2명이 업무 분배 불균형으로 소외감, 진로 고민까지 갔으나 즉시
        대응 실패. 후속 <em>how_many</em> 프로젝트에서 같은 패턴 반복 — 신규
        팀원 2명이 테스크 분배 부재로 이탈.
      </p>
      <p className="quote">
        “이탈한 팀원이 다른 프로젝트에서 활약하는 모습을 보며,
        <br />
        내가 사람을 잃게 만들었다는 미안함을 체감했다.”
      </p>
      <p>
        — Linear 도입의 감정적·구조적 계기.
      </p>

      <h3 className="sec-sub">결정적 외부 피드백 2건</h3>
      <ul className="sec-list">
        <li>
          <strong>사용자:</strong> “로그인 없이도 로컬스토리지 활용 가능” → 오답
          노트 Anti-scope 회고의 근거.
        </li>
        <li>
          <strong>싸피 강사:</strong> “단순 기능 구현은 포트폴리오에 쓸 수 없다”
          → 프로젝트 방향을 <em>“무엇을 만들었는가”에서 “어떤 판단을 내렸는가”</em>로 전환.
        </li>
      </ul>
  </ChapterShell>
));

/* ─────────────────────────────────────────────────────────── */
/* 8. Result · 지표                                              */
/* ─────────────────────────────────────────────────────────── */
export const AiQuizResultMetrics = forwardRef((props, ref) => (
  <ChapterShell
    ref={ref} side="verso" folio="viii" runningHead="Result · 지표">
      <h2 className="sec-title">Result</h2>

      <table className="sec-table sec-table--metrics">
        <thead>
          <tr>
            <th>지표</th>
            <th>실측</th>
            <th>판정</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>로드 시간 (&lt; 1s)</td>
            <td>즉시</td>
            <td className="td-verdict pick">확증</td>
          </tr>
          <tr>
            <td>추가 비용 (0원)</td>
            <td>0원</td>
            <td className="td-verdict pick">확증</td>
          </tr>
          <tr>
            <td>DB 장애 가용성</td>
            <td>운영 중 무중단</td>
            <td className="td-verdict pick">확증</td>
          </tr>
          <tr>
            <td>시험 범위 적합도</td>
            <td>체감 95%</td>
            <td className="td-verdict pick">확증</td>
          </tr>
          <tr className="row-counter">
            <td>주관식 정답률</td>
            <td>40.7% (vs 객 82.5%)</td>
            <td className="td-verdict fail">반증</td>
          </tr>
        </tbody>
      </table>

      <h3 className="sec-sub">실사용 데이터</h3>
      <ul className="sec-list sec-list--tight">
        <li>
          <strong>총 풀린 퀴즈</strong> 92,329건 (1차 73,848 · 2차 18,481)
        </li>
        <li>
          <strong>총 세션</strong> 6,343건 (1차 4,795 · 2차 1,548)
        </li>
        <li>
          <strong>피드백</strong> 135건 · 반영률 ~90%
        </li>
        <li>
          <strong>콘텐츠</strong> 1,160문제 · 12 카테고리
        </li>
      </ul>
  </ChapterShell>
));

/* ─────────────────────────────────────────────────────────── */
/* 9. Result · 확산                                              */
/* ─────────────────────────────────────────────────────────── */
export const AiQuizResultReach = forwardRef((props, ref) => (
  <ChapterShell
    ref={ref} side="recto" folio="ix" runningHead="Result · 확산">
      <h2 className="sec-title">기획 의도를 초과한 도달</h2>

      <dl className="sec-defs">
        <div>
          <dt>개인 학습</dt>
          <dd>
            AI 시험 <strong>62점</strong> (과락 60점 턱걸이). 시험 전날
            dogfooding. 지하철 자투리 시간 활용에 압도적 효용 체감.
          </dd>
        </div>
        <div>
          <dt>지리적 확산</dt>
          <dd>
            1 캠퍼스(서울 15기 1,000명) 기획 → 부산·광주 등 지역 캠퍼스로 유기적
            확산. 부산 지역대표가 <em>추가 광고 제안</em>.
          </dd>
        </div>
        <div>
          <dt>타깃 외 수혜자</dt>
          <dd>
            <strong>AI 비전공 배경 학생</strong>들이 특히 큰 도움을 받았다는
            증언 확보.
          </dd>
        </div>
        <div>
          <dt>내부 인지도</dt>
          <dd>강사진 사이에서 이슈화, 싸피 내 모르는 사람이 없는 수준.</dd>
        </div>
      </dl>

      <p className="sec-note">
        4축 사전 가설은 모두 확증, 가설 미수립 주관식은 반증(40.7%). 정량 지표를
        넘어선 <strong>지리적·인구학적 확산</strong>이 집합재 가설의 예상 외
        검증 — <em>“학과 공통 인프라”라는 기획 프레임이 실제 인프라로 작동.</em>
      </p>
  </ChapterShell>
));

/* ─────────────────────────────────────────────────────────── */
/* 10. Learnings                                                */
/* ─────────────────────────────────────────────────────────── */
export const AiQuizLearnings = forwardRef((props, ref) => (
  <ChapterShell
    ref={ref} side="verso" folio="x" runningHead="Learnings">
      <h2 className="sec-title">Learnings</h2>

      <h3 className="sec-sub">다른 상황에 이식 중인 3가지 원리</h3>

      <ol className="learnings-ol">
        <li>
          <div className="learn-head">제약이 기술 선택을 강제한다</div>
          <div className="learn-body">
            4시간·토큰 한도가 Vite·JSON 을 고르게 했다. 제약이 많을수록{" "}
            <em>“덜 하는 것”</em>이 승리 전략.
          </div>
        </li>
        <li>
          <div className="learn-head">아키텍처가 가용성을 결정한다</div>
          <div className="learn-body">
            재시도·미들웨어가 아니라 <em>“JSON=필수, DB=선택”</em> 이라는 구조
            자체가 silent fail 을 가능케 한다. 설계 초기에 “무엇이 죽어도
            무엇이 살아야 하는가”를 먼저 그리는 습관.
          </div>
        </li>
        <li>
          <div className="learn-head">협업 인프라 부재 = 사람을 잃는 비용</div>
          <div className="learn-body">
            두 번의 팀원 이탈로 <em>“협업 도구는 속도의 반대가 아니라
            속도의 전제”</em> 라는 인식 전환. 프로젝트 첫 30분을 팀 구조 설정에
            투자하는 것이 기본값.
          </div>
        </li>
      </ol>
  </ChapterShell>
));

/* ─────────────────────────────────────────────────────────── */
/* 11. Meta 회고                                                */
/* ─────────────────────────────────────────────────────────── */
export const AiQuizMeta = forwardRef((props, ref) => (
  <ChapterShell
    ref={ref} side="recto" folio="xi" runningHead="Meta">
      <h2 className="sec-title">이 포트폴리오 자체의 재작성</h2>

      <p className="sec-lede">
        싸피 강사의 한 문장 —{" "}
        <em>“단순 기능 구현은 포트폴리오에 쓸 수 없다.”</em>{" "}
        이 문서가 다시 쓰인 동기다.
      </p>

      <p>
        이 챕터는 기능 목록이 아니라 세 축으로 읽혀야 한다.
      </p>

      <ol className="sec-ol">
        <li>제약 하의 기술 선택</li>
        <li>측정 없는 최적화의 실패</li>
        <li>협업 인프라 부재의 대가</li>
      </ol>

      <h3 className="sec-sub">남은 한계</h3>
      <ul className="sec-list">
        <li>주관식 정답률 40.7% → 파인튜닝 로드맵</li>
        <li>난이도 필드와 실측 정답률 불일치 → 재보정 미완</li>
        <li>PWA 는 Anti-scope 확정 (반응형 웹 대체)</li>
      </ul>

      <div className="chapter-end">
        <div className="end-ornament">❦</div>
        <div className="end-text">end of chapter I</div>
      </div>
  </ChapterShell>
));
