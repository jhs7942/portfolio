import { forwardRef } from "react";
import PageBackground from "./PageBackground";
import { ChapterShell } from "./AiQuiz";

/**
 * AI Quiz · Chapter II — 사고의 흐름 (Thought Flow)
 *
 * Chapter I 이 분석 retrospective (Context → Learnings) 였다면,
 * Chapter II 는 시간 순서로 다시 읽는 narrative track.
 *
 *   계획 계기 (Origin)  →  주요 이슈 (Issues)  →  트러블슈팅 (Fixes)
 *
 * 페이지 순서 (Ch.I 마지막 xi · recto 다음):
 *  12. Chapter II opener + 계기 I · 발단      (verso · xii)
 *  13. 계기 II · 두 번의 방향 전환             (recto · xiii)
 *  14. 주요 이슈 · 기술적 마찰                 (verso · xiv)
 *  15. 주요 이슈 · 사람·측정의 마찰             (recto · xv)
 *  16. 트러블슈팅 · 구조로 회피                 (verso · xvi)
 *  17. 트러블슈팅 · 측정·근거로 결정            (recto · xvii)
 */

/* ─────────────────────────────────────────────────────────── */
/* 12. Chapter II opener + 계기 I · 발단                       */
/* ─────────────────────────────────────────────────────────── */
export const FlowOrigin = forwardRef((props, ref) => (
  <ChapterShell
    ref={ref} side="verso" folio="xii" runningHead="Chapter II · 사고의 흐름">
      <div className="ch2-opener">
        <div className="ch2-eyebrow">Chapter II</div>
        <h2 className="ch2-title">사고의 흐름</h2>
        <p className="ch2-subtitle">
          계획 계기 · 주요 이슈 · 트러블슈팅, 시간 순서로 다시 읽기
        </p>
        <div className="ch2-rule" />
      </div>

      <h3 className="sec-sub">계기 · 발단</h3>

      <div className="flow-step">
        <div className="flow-step-mark">01</div>
        <div className="flow-step-body">
          <div className="flow-step-head">운명적 비대칭</div>
          <p>
            6회차 시점, 본인은 과락 0/5 로 여유. 그러나 동료 중에는{" "}
            <strong>4/5 누적</strong> — 다음 1회 실수가 곧 퇴소.
          </p>
        </div>
      </div>

      <div className="flow-step">
        <div className="flow-step-mark">02</div>
        <div className="flow-step-body">
          <div className="flow-step-head">기존 도구의 비효율 관찰</div>
          <p>
            NotebookLM — 1 사이클 <strong>10분</strong>, 데스크탑 전용. 친구들은
            결과 PDF 를 단체방에 공유 — 인터랙티브 풀이·채점 불가. 모두가 같은
            일을 반복 제작.
          </p>
        </div>
      </div>

      <div className="flow-step">
        <div className="flow-step-mark">03</div>
        <div className="flow-step-body">
          <div className="flow-step-head">집합재 가설의 등장</div>
          <p>
            <em>“한 번 만들면 1,000명이 쓴다.”</em> 본인용이 아니라{" "}
            <strong>학과 공통 인프라</strong>로 설계. 진짜 동기는 과락 위기
            친구를 돕는 것.
          </p>
        </div>
      </div>
  </ChapterShell>
));

/* ─────────────────────────────────────────────────────────── */
/* 13. 계기 II · 두 번의 방향 전환                              */
/* ─────────────────────────────────────────────────────────── */
export const FlowPivots = forwardRef((props, ref) => (
  <ChapterShell
    ref={ref} side="recto" folio="xiii" runningHead="계기 · 방향 전환">
      <h2 className="sec-title">두 번의 방향 전환</h2>

      <div className="pivot-block">
        <div className="pivot-time">Pivot I — 시간 0h</div>
        <p>
          처음 떠올린 답은 <strong>Next.js + LLM API 동적 생성.</strong>{" "}
          구상 단계 검토에서 막힘 — LLM 은 싸피 교재를 모른다. 시험 범위
          적합도를 구조적으로 보장할 수 없음.
        </p>
        <p className="pivot-arrow">
          → v1 기각. <strong>v2: Vite + 정적 JSON + 인간 검수</strong>로 전환.
        </p>
      </div>

      <div className="pivot-block">
        <div className="pivot-time">Pivot II — 프로젝트 종료 후</div>
        <p>
          싸피 강사의 한 문장:
        </p>
        <p className="quote">
          “단순 기능 구현은 포트폴리오에 쓸 수 없다.”
        </p>
        <p>
          이 한 문장이 프로젝트의 <em>의미</em>를 다시 정의했다.
        </p>
        <p className="pivot-arrow">
          → <strong>“무엇을 만들었는가”에서 “어떤 판단을 내렸는가”</strong>로
          포트폴리오 자체를 재작성. 이 책의 챕터 구성이 그 결과.
        </p>
      </div>

      <p className="sec-note">
        두 pivot 모두 <em>외부 신호</em>가 트리거 — 자기 검증만으로는 도달하지
        못했을 결정들. 사고의 흐름은 닫힌 회로가 아니다.
      </p>
  </ChapterShell>
));

/* ─────────────────────────────────────────────────────────── */
/* 14. 주요 이슈 · 기술적 마찰                                  */
/* ─────────────────────────────────────────────────────────── */
export const FlowIssuesTech = forwardRef((props, ref) => (
  <ChapterShell
    ref={ref} side="verso" folio="xiv" runningHead="주요 이슈 · 기술">
      <h2 className="sec-title">주요 이슈 · 기술적 마찰</h2>

      <div className="log-entry">
        <div className="log-id">ISSUE-01</div>
        <div className="log-head">LLM 범위 적합도 불보장</div>
        <div className="log-body">
          v1 LLM 샘플 30개 中 1개가 시험 범위 밖. 품질은 낮지 않았으나{" "}
          <em>‘범위 이탈’ 타입</em> — 교재 기반 우위 확인.
        </div>
      </div>

      <div className="log-entry">
        <div className="log-id">ISSUE-02</div>
        <div className="log-head">PWA 빌드 실패</div>
        <div className="log-body">
          Vite 8 peer dependency 충돌. 4시간 MVP 안에서 우회로 탐색 불가.
        </div>
      </div>

      <div className="log-entry">
        <div className="log-id">ISSUE-03</div>
        <div className="log-head">중도 이탈 데이터 손실</div>
        <div className="log-body">
          “결과 확인 시에만 DB 적재”라는 가장 단순한 전략. 실제로는 사용자가
          도중에 떠나면 학습 신호가 통째로 소실.
        </div>
      </div>

      <div className="log-entry">
        <div className="log-id">ISSUE-04</div>
        <div className="log-head">Supabase RLS 401</div>
        <div className="log-body">
          DB 호출이 401 로 막힘. 원인은 RLS 정책 부재 + anon key. 하나의 결정
          앞에서 <strong>4가지 대응 경로</strong>가 갈라짐.
        </div>
      </div>
  </ChapterShell>
));

/* ─────────────────────────────────────────────────────────── */
/* 15. 주요 이슈 · 사람·측정의 마찰                              */
/* ─────────────────────────────────────────────────────────── */
export const FlowIssuesPeople = forwardRef((props, ref) => (
  <ChapterShell
    ref={ref} side="recto" folio="xv" runningHead="주요 이슈 · 사람·측정">
      <h2 className="sec-title">주요 이슈 · 사람·측정의 마찰</h2>

      <div className="log-entry">
        <div className="log-id">ISSUE-05</div>
        <div className="log-head">주관식 정답률 40.7%</div>
        <div className="log-body">
          객관식 82.5% 대비 절반. <strong>가설을 세우지 않은 영역</strong>이
          사후에야 반증으로 드러남 — “무엇을 측정하지 않았는가”가 가장 큰
          위험.
        </div>
      </div>

      <div className="log-entry">
        <div className="log-id">ISSUE-06</div>
        <div className="log-head">팀원 소외감</div>
        <div className="log-body">
          업무 분배 비가시성 — 콘텐츠 팀원 2명이 진로 고민까지. 프로젝트 중에는
          깨닫지 못함. 회고에서야 드러남. 후속 <em>how_many</em> 에서 같은
          패턴이 반복되며 신규 팀원 2명 이탈.
        </div>
      </div>

      <div className="log-entry">
        <div className="log-id">ISSUE-07</div>
        <div className="log-head">스코프 판단의 조기 종결</div>
        <div className="log-body">
          “오답노트는 로그인이 필요하다 → 미구현.” 사용자 피드백 한 줄이 가정을
          뒤집음:
          <span className="quote-inline">
            “로컬스토리지로 가능합니다.”
          </span>
          판단의 속도가 깊이를 압도한 사례.
        </div>
      </div>
  </ChapterShell>
));

/* ─────────────────────────────────────────────────────────── */
/* 16. 트러블슈팅 · 구조로 회피                                  */
/* ─────────────────────────────────────────────────────────── */
export const FlowFixesStructure = forwardRef((props, ref) => (
  <ChapterShell
    ref={ref} side="verso" folio="xvi" runningHead="트러블슈팅 · 구조">
      <h2 className="sec-title">트러블슈팅 · 구조로 회피</h2>

      <p className="sec-lede">
        가장 빠른 해는 “이 문제를 풀지 않는다”라는 결정. 구조를 바꾸면 문제가
        애초에 생기지 않는다.
      </p>

      <div className="log-entry fix">
        <div className="log-id fix">FIX-01</div>
        <div className="log-head">문제 정의에서 해결</div>
        <div className="log-body">
          <span className="fix-target">↳ ISSUE-01</span>
          LLM 범위 보장 불가 → 동적 생성 자체를 포기. v1 구상 단계 기각, v2
          정적 JSON 채택.
        </div>
      </div>

      <div className="log-entry fix">
        <div className="log-id fix">FIX-02</div>
        <div className="log-head">PWA → 반응형 웹</div>
        <div className="log-body">
          <span className="fix-target">↳ ISSUE-02</span>
          Vite peer dep 충돌을 디버깅할 4시간이 없다. PWA 를 <em>Anti-scope</em> 로
          확정, 반응형 웹으로 대체. <strong>포기하는 것도 설계.</strong>
        </div>
      </div>

      <div className="log-entry fix">
        <div className="log-id fix">FIX-03</div>
        <div className="log-head">silent fail 원칙</div>
        <div className="log-body">
          <span className="fix-target">↳ 가용성 가설 보호</span>
          모든 Supabase 호출은 실패해도 무시. <em>“JSON = 필수, DB = 선택”</em>{" "}
          이라는 구조 자체가 가용성을 보장. 재시도·미들웨어가 아니라 의존성
          그래프로 해결.
        </div>
      </div>
  </ChapterShell>
));

/* ─────────────────────────────────────────────────────────── */
/* 17. 트러블슈팅 · 측정·근거로 결정                             */
/* ─────────────────────────────────────────────────────────── */
export const FlowFixesEvidence = forwardRef((props, ref) => (
  <ChapterShell
    ref={ref} side="recto" folio="xvii" runningHead="트러블슈팅 · 측정">
      <h2 className="sec-title">트러블슈팅 · 측정·근거로 결정</h2>

      <div className="log-entry fix">
        <div className="log-id fix">FIX-04</div>
        <div className="log-head">RLS 4-대안 검토 후 전면 비활성화</div>
        <div className="log-body">
          <span className="fix-target">↳ ISSUE-04</span>
          SELECT 정책 / <code>return=minimal</code> / 클라이언트 UUID / 전면
          비활성화 4개를 비교. 근거:{" "}
          <strong>anon key + PII 없음 + 공개 데이터</strong> = RLS 본래 목적
          부적용. → 전면 비활성화. <em>“보안 타협”이 아니라 “맥락 적합”.</em>
        </div>
      </div>

      <div className="log-entry fix">
        <div className="log-id fix">FIX-05</div>
        <div className="log-head">적재 이중화</div>
        <div className="log-body">
          <span className="fix-target">↳ ISSUE-03</span>
          단순 적재의 손실을 막으려 <strong>문제마다 + 완료 시 이중 적재</strong>.
          복잡도는 올리고, 학습 데이터의 완결성을 확보.
        </div>
      </div>

      <div className="log-entry fix">
        <div className="log-id fix">FIX-06</div>
        <div className="log-head">배치 저장 검토 후 롤백</div>
        <div className="log-body">
          <span className="fix-target">↳ 성급한 최적화 회피</span>
          실측: 사용자 1인당 초당 1회 미만, 한도의 <strong>10% 미만</strong>.
          도입했다가 4커밋을 롤백. 이후 규칙:{" "}
          <em>“최적화는 한도의 30%를 넘기 전엔 도입 보류.”</em>
        </div>
      </div>

      <div className="chapter-end">
        <div className="end-ornament">❦</div>
        <div className="end-text">end of chapter II</div>
      </div>
  </ChapterShell>
));
