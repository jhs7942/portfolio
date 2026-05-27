import { forwardRef } from "react";
import PageBackground from "./PageBackground";
import { ChapterShell } from "./AiQuiz";

/**
 * SI Chapters — Chapter III·IV·V
 *   III. 공주·부여 스마트시티 챌린지
 *    IV. 경상북도 인구·산업 통합 플랫폼
 *     V. K-City Network 해외실증
 *
 * 각 챕터 4페이지: Opener(verso) + 개요·역할(recto) + 트러블슈팅(verso) + 회고(recto)
 *
 * Opener는 verso(왼쪽 페이지)에 배치돼 책을 펼쳤을 때
 * [표제지 verso, 본문 시작 recto] 의 시네마틱한 스프레드를 만든다.
 */

/* ─────────────────────────────────────────────────────────── */
/* Shared — Project Opener (verso)                              */
/* ─────────────────────────────────────────────────────────── */
const ProjectOpener = forwardRef(
  ({ roman, title, subtitle, epigraph, period, role, stack, scope, folio }, ref) => (
    <div ref={ref} className="parchment-page">
      <PageBackground side="verso" />
      <div className="page-content verso chapter-opener project-opener">
        <div className="opener-eyebrow">Chapter {roman}</div>
        <div className="opener-ornament">⁂</div>
        <h1 className="opener-title">{title}</h1>
        <p className="opener-tagline">{subtitle}</p>
        <div className="opener-rule" />
        <div className="opener-epigraph">
          <em>{epigraph}</em>
        </div>
        <div className="opener-meta">
          <div>
            <span className="meta-key">기간</span>
            <span className="meta-val">{period}</span>
          </div>
          <div>
            <span className="meta-key">역할</span>
            <span className="meta-val">{role}</span>
          </div>
          <div>
            <span className="meta-key">스택</span>
            <span className="meta-val">{stack}</span>
          </div>
          <div>
            <span className="meta-key">규모</span>
            <span className="meta-val">{scope}</span>
          </div>
        </div>
        <div className="chapter-folio">{folio}</div>
      </div>
    </div>
  )
);

/* ===========================================================
   Chapter III — 공주·부여 스마트시티 챌린지 (page 21–24)
   =========================================================== */

export const SmartCityOpener = forwardRef((props, ref) => (
  <ProjectOpener
    ref={ref}
      roman="III"
      title="공주·부여 스마트시티"
      subtitle={
        <>
          공주시청·부여군청 관광 웹앱의
          <br />
          결제·지도·로그인 통합 운영
        </>
      }
      epigraph={
        <>
          “이미 만들어진 코드 위에서<br />
          죽은 기능을 다시 살려내는 일”
        </>
      }
      period="2022.04 – 2022.12 (9개월)"
      role="웹·앱 배포 / 결제·로그인·지도 기능"
      stack="전자정부 3.6 · Java · React · PostgreSQL · KG이노시스 · 카카오맵"
      scope="공주시 + 부여군 관광 도메인 통합 플랫폼"
      folio="iv"
    />
));

export const SmartCityScope = forwardRef((props, ref) => (
  <ChapterShell ref={ref} side="recto" folio="v" runningHead="공주·부여 · 개요">
    <h2 className="sec-title">무엇을 만들었는가</h2>
    <p className="sec-lede">
      공주시·부여군의 관광지·주차장·보관함을 통합한 시민 대상 웹·앱. 첫 입사
      해의 SI 프로젝트로, <strong>기획·설계가 아닌 운영·개선</strong>이 일이었다 —
      죽어 있는 기능을 다시 살리고, 동작은 하나 느린 화면을 빠르게 만드는 일.
    </p>

    <h3 className="sec-sub">맡은 일</h3>
    <ul className="sec-list">
      <li>
        <strong>웹·앱 배포</strong> — 내부망 WAS 에 war 압축 풀어 톰캣 경로
        교체. 안드로이드 스튜디오·Xcode 로 앱 빌드 배포.
      </li>
      <li>
        <strong>카카오 로그인 API</strong> — 카카오 비즈니스 등록 → key 발급 →
        OAuth 구현.
      </li>
      <li>
        <strong>주차장 실시간 집계</strong> — 입출차 기록 계산해 면별 점유 표출,{" "}
        <em>일주일 이상 출차 없는 차량</em>은 장기주차로 분리.
      </li>
      <li>
        <strong>KG이노시스 결제</strong> — 보관함 결제 분기(유료/무료) 처리,
        무료는 결제창 우회로 0원 결제 흐름 구현.
      </li>
      <li>
        <strong>카카오맵 성능 개선</strong> + 관리자 통계 페이지(Chart.js) 신설.
      </li>
    </ul>

    <div className="callout">
      <div className="callout-title">SI 의 본질을 처음 본 순간</div>
      <div className="callout-body">
        소스코드를 잘 짜는 것보다 <strong>고객 니즈를 파악하고</strong> 사업을
        진행시키는 일이 본질이라는 걸 처음 체감한 프로젝트. 이후 모든 일에서
        <em>“이 요청 뒤의 진짜 요구는 무엇인가”</em>를 먼저 묻게 되었다.
      </div>
    </div>
  </ChapterShell>
));

export const SmartCityTrouble = forwardRef((props, ref) => (
  <ChapterShell ref={ref} side="verso" folio="vi" runningHead="공주·부여 · 트러블슈팅">
    <h2 className="sec-title">막힌 곳들</h2>

    <div className="log-entry">
      <div className="log-id">CASE-01</div>
      <div className="log-head">카카오 비즈니스 등록 거절</div>
      <div className="log-body">
        기존 구현이 작동하지 않던 카카오 로그인. 비즈니스 등록 절차가 승인되지
        않아 key 발급 불가. → 카카오측과 <strong>지속 소통</strong>으로 거절
        사유 해소 → 키 발급 → 로그인 복구.
      </div>
    </div>

    <div className="log-entry">
      <div className="log-id">CASE-02</div>
      <div className="log-head">안드로이드 스튜디오 소스 유실</div>
      <div className="log-body">
        앱 배포 단계에서 안드로이드 프로젝트 소스 자체가 사라진 상황. 기존
        웹앱을 기반으로 Android Studio 프로젝트를{" "}
        <strong>처음부터 재구성</strong>해 배포 라인을 복구.
      </div>
    </div>

    <div className="log-entry">
      <div className="log-id">CASE-03</div>
      <div className="log-head">카카오맵 마커 성능</div>
      <div className="log-body">
        3종 마커가 <em>하나의 객체로 묶여</em> 내려오는 구조 — 체크박스 클릭 시
        다른 범례까지 같이 변경되고, 마커 렌더가 느림. → 쿼리·객체를{" "}
        <strong>범례별로 분리</strong>해 독립 조회·렌더, 응답성과 정확도 동시
        확보.
      </div>
    </div>
  </ChapterShell>
));

export const SmartCityRetro = forwardRef((props, ref) => (
  <ChapterShell ref={ref} side="recto" folio="vii" runningHead="공주·부여 · 회고">
    <h2 className="sec-title">남은 것</h2>

    <p className="sec-lede">
      신규 개발이 아니라 <em>유지보수와 복구</em>가 일이었다는 점이 오히려
      값졌다. 잘 짠 코드를 쓰는 법이 아니라{" "}
      <strong>잘못 짜인 코드 위에서 살아남는 법</strong>을 배웠다.
    </p>

    <h3 className="sec-sub">이식 가능한 원리</h3>
    <ul className="sec-list">
      <li>
        <strong>거절의 이유부터 분석한다</strong> — 카카오 비즈니스 거절 사유
        해소 경험은 K-City 의 태국 협업 사건에서 그대로 재활용됨{" "}
        <em>(→ Chapter V)</em>.
      </li>
      <li>
        <strong>분리하면 성능과 정확도가 같이 오른다</strong> — 마커 분리는
        이후 경상북도 폴리곤 분리(독도/울릉도) 사고로 이어짐{" "}
        <em>(→ Chapter IV)</em>.
      </li>
      <li>
        <strong>유실은 복구 가능하다</strong> — 소스가 없어도 동작 결과물로부터
        역으로 짠다는 자신감.
      </li>
    </ul>

    <div className="chapter-end">
      <div className="end-ornament">❦</div>
      <div className="end-text">end of chapter III</div>
    </div>
  </ChapterShell>
));

/* ===========================================================
   Chapter IV — 경상북도 인구·산업 통합 플랫폼 (page 25–28)
   =========================================================== */

export const GyeongbukOpener = forwardRef((props, ref) => (
  <ProjectOpener
    ref={ref}
      roman="IV"
      title="경상북도 인구·산업"
      subtitle={
        <>
          줄어드는 지역의 인구 흐름을
          <br />
          지도와 차트로 본 행정 플랫폼
        </>
      }
      epigraph={
        <>
          “수십만 건의 인구 이동 데이터를<br />
          한 장의 화살표로 압축한다.”
        </>
      }
      period="2022.12 – 2023.08 (9개월)"
      role="UI/UX · 지도·차트 · 성능 최적화"
      stack="React · PostgreSQL · OpenLayers · Echarts · QGIS · Recoil"
      scope="경상북도 23개 시·군 인구·산업 통계"
      folio="viii"
    />
));

export const GyeongbukScope = forwardRef((props, ref) => (
  <ChapterShell ref={ref} side="recto" folio="ix" runningHead="경상북도 · 개요">
    <h2 className="sec-title">무엇을 만들었는가</h2>
    <p className="sec-lede">
      경상북도 내 23개 시·군의 인구 이동·산업 통계를 한 화면에서 비교·탐색할 수
      있게 만든 행정용 사이트. 데이터는{" "}
      <strong>수십만 건의 인구 이동 레코드</strong>로, 이를 가공해 지도와 차트
      위에 얹는 게 핵심.
    </p>

    <h3 className="sec-sub">맡은 일</h3>
    <ul className="sec-list">
      <li>
        <strong>QGIS 로 GIS 데이터 가공</strong> — SHP 좌표계를 4326 → 5186 로
        변환, 팝업·화살표 위치용 중심점 좌표 추출, 레이어 속성(경위도·지역명)
        가공.
      </li>
      <li>
        <strong>OpenLayers 지도</strong> — 지역별 색 표출 + 클릭 시 인구이동
        데이터를 <em>화살표</em>로 시각화.
      </li>
      <li>
        <strong>양방향 state</strong> — 상단 드롭박스 ↔ 지도 클릭 이벤트가 같은
        state 의 지역 값을 변경하도록 동기화.
      </li>
      <li>
        <strong>Echarts 차트 + API 협의</strong> — 객체 배열을 보내야 하는
        차트라 쿼리스트링이 안 됨 → 백엔드와 협의해 GET → POST body 방식으로
        변경.
      </li>
      <li>
        <strong>성능 최적화</strong> — 불필요한 <code>useEffect</code> 의존성
        제거, <code>useState</code> 최소화, Recoil+useState 의 중복 API 호출
        제거.
      </li>
    </ul>
  </ChapterShell>
));

export const GyeongbukTrouble = forwardRef((props, ref) => (
  <ChapterShell ref={ref} side="verso" folio="x" runningHead="경상북도 · 트러블슈팅">
    <h2 className="sec-title">막힌 곳들</h2>

    <div className="log-entry">
      <div className="log-id">CASE-01</div>
      <div className="log-head">Echart 미지원 범례</div>
      <div className="log-body">
        Echart 가 제공하지 않는 형태의 테이블 범례가 요구됨. 차트 객체에는
        데이터를 표출하지 않고 <strong>범례만 렌더하는 별도 컴포넌트</strong>를
        만들어 테이블 상단에 배치 — 시각적으로 한 묶음처럼 보이게 시뮬레이션.
      </div>
    </div>

    <div className="log-entry">
      <div className="log-id">CASE-02</div>
      <div className="log-head">울릉도/독도 라벨 중복</div>
      <div className="log-body">
        <strong>multipolygon 객체</strong>에 style 을 주면 울릉도·독도 두
        면적에 모두 “울릉도” 라벨이 표출. → multipolygon 을 polygon 배열로
        쪼개 <em>면적이 가장 큰 polygon 에만</em> 라벨 style 추가.
      </div>
    </div>

    <div className="log-entry">
      <div className="log-id">CASE-03</div>
      <div className="log-head">복수 검색 조건 차트</div>
      <div className="log-body">
        하나의 차트에 여러 검색 조건을 동시에 누적·비교 표출. 페이지 상단의
        기간 변경이 등록된 모든 범례에 동기화되고, 하단 범례 목록 클릭 시
        삭제까지 가능해야 함. → Echart 의 표준 기능을 응용해 별도 컨트롤러로
        조합.
      </div>
    </div>
  </ChapterShell>
));

export const GyeongbukRetro = forwardRef((props, ref) => (
  <ChapterShell ref={ref} side="recto" folio="xi" runningHead="경상북도 · 회고">
    <h2 className="sec-title">남은 것</h2>

    <p className="sec-lede">
      <strong>지도와 차트는 데이터의 모양을 그대로 보여주지 않는다 — 가공해야
      비로소 보인다.</strong>
    </p>

    <h3 className="sec-sub">이식 가능한 원리</h3>
    <ul className="sec-list">
      <li>
        <strong>표준 라이브러리의 한계는 “조합”으로 넘는다</strong> — Echart 가
        지원 안 하는 범례·다중 조건 차트도 표준 기능을 분해/재조합하면 만들 수
        있다.
      </li>
      <li>
        <strong>가장 큰 단위가 가장 작은 결정을 좌우한다</strong> — multipolygon
        라벨 중복은 결국 “어느 polygon 이 대표인가”의 정의 문제.
      </li>
      <li>
        <strong>API 형식은 데이터 모양이 정한다</strong> — 객체 배열을 보낼
        수 없으면 GET 을 고수하지 말고 POST 로 바꾼다. 결정 기준은 관습이
        아니라 데이터.
      </li>
    </ul>

    <div className="chapter-end">
      <div className="end-ornament">❦</div>
      <div className="end-text">end of chapter IV</div>
    </div>
  </ChapterShell>
));

/* ===========================================================
   Chapter V — K-City Network 해외실증 (page 29–32)
   =========================================================== */

export const KCityOpener = forwardRef((props, ref) => (
  <ProjectOpener
    ref={ref}
      roman="V"
      title="K-City Network"
      subtitle={
        <>
          태국 경찰청 CCTV·드론 관제 —
          <br />
          거절을 문서로 푼 협업의 기록
        </>
      }
      epigraph={
        <>
          “협업은 상대가 납득할 근거를<br />
          제공하는 것에서 시작된다.”
        </>
      }
      period="2022.08 – 2023.07 (11개월)"
      role="화면단 구현 · 쿼리 · 태국 현지 서버 배포"
      stack="React · PostgreSQL · 미디어 서버 · 프록시"
      scope="태국 경찰청 + 한국 발주 · 영문 협업"
      folio="xii"
    />
));

export const KCityScope = forwardRef((props, ref) => (
  <ChapterShell ref={ref} side="recto" folio="xiii" runningHead="K-City · 개요">
    <h2 className="sec-title">무엇을 만들었는가</h2>
    <p className="sec-lede">
      태국 경찰청과 연계한 <strong>CCTV·드론 관제 플랫폼</strong>. 한국에서
      개발한 시스템을 태국 현지 서버에 배포하고, 현지 CCTV·드론 영상이 관제
      대시보드까지 흘러 들어오게 만드는 게 목표.
    </p>

    <h3 className="sec-sub">맡은 일</h3>
    <ul className="sec-list">
      <li>
        <strong>화면단 구현</strong> — 관제 대시보드 UI, 영상 그리드, 알림
        패널.
      </li>
      <li>
        <strong>쿼리 생성</strong> — 다국가 데이터를 다루는 백엔드 쿼리 설계.
      </li>
      <li>
        <strong>현지 서버 배포</strong> — 한국 빌드를 태국 IDC 의 서버에 배포,
        프록시·미디어 서버 구성 검증.
      </li>
    </ul>

    <div className="callout">
      <div className="callout-title">배포는 성공, 영상은 도달하지 않음</div>
      <div className="callout-body">
        매뉴얼대로 배포는 무사히 완료. 그러나 테스트 단계에서 CCTV·드론 영상이
        관제 서버에 <strong>전혀 도달하지 않음</strong>. 네트워크 구조를 봐야
        원인을 짚을 수 있었으나 — <em>경찰청 보안 정책</em>으로 공유 불가.
      </div>
    </div>
  </ChapterShell>
));

export const KCityTrouble = forwardRef((props, ref) => (
  <ChapterShell ref={ref} side="verso" folio="xiv" runningHead="K-City · 트러블슈팅">
    <h2 className="sec-title">거절을 문서로 푼 협업</h2>

    <div className="flow-step">
      <div className="flow-step-mark">01</div>
      <div className="flow-step-body">
        <div className="flow-step-head">거절의 이유부터 분석</div>
        <p>
          “보안 정책이라 안 된다”의 진짜 의미는 — <em>책임 소재가 불분명한
          요청에는 응답할 수 없다</em>. 거절은 거절이 아니라 <strong>책임을
          담보해 달라는 신호</strong>로 다시 읽었다.
        </p>
      </div>
    </div>

    <div className="flow-step">
      <div className="flow-step-mark">02</div>
      <div className="flow-step-body">
        <div className="flow-step-head">영문 요청 문서 작성</div>
        <p>
          (1) 동작하지 않는 기능, (2) 해결에 필요한 정보, (3) 그 정보가 필요한
          이유 — 세 단계로 영문 정리. 단순 요청이 아니라{" "}
          <strong>요청의 책임 근거</strong>를 함께 제공.
        </p>
      </div>
    </div>

    <div className="flow-step">
      <div className="flow-step-mark">03</div>
      <div className="flow-step-body">
        <div className="flow-step-head">IP 대역 공유 → 원인 발견</div>
        <p>
          현지 개발자가 IP 대역·네트워크 구조를 예외적으로 공유. 분석 결과 —{" "}
          <strong>프록시 IP 대역이 현지 네트워크와 일치하지 않음</strong>.
          미디어 서버 라우팅이 끊겨 있던 것.
        </p>
      </div>
    </div>

    <div className="flow-step">
      <div className="flow-step-mark">04</div>
      <div className="flow-step-body">
        <div className="flow-step-head">수정 → CCTV·드론 영상 도달</div>
        <p>
          프록시 IP 대역 재설정 → 미디어 서버 통해 영상 정상 송출. 관제
          플랫폼에서 실시간 영상 확인 완료.
        </p>
      </div>
    </div>
  </ChapterShell>
));

export const KCityRetro = forwardRef((props, ref) => (
  <ChapterShell ref={ref} side="recto" folio="xv" runningHead="K-City · 회고">
    <h2 className="sec-title">남은 것</h2>

    <p className="quote">
      “협업은 상대가 납득하고 움직일 수 있는 근거를
      <br />
      제공하는 것에서 시작된다.”
    </p>

    <p>
      서버 개발자로서 기획자·테스터·프론트엔드·다른 모듈 담당자와 끊임없이
      협의해야 하는 자리에서, <em>“왜 이 API 스펙이 필요한가”·“왜 이 데이터
      구조가 더 적합한가”</em>를 상대의 입장에서 정리해 전달하는 일은 곧
      서비스의 안정성과 완성도로 이어진다.
    </p>

    <h3 className="sec-sub">이식 가능한 원리</h3>
    <ul className="sec-list">
      <li>
        <strong>거절은 신호다</strong> — “안 된다”의 표면을 뚫고 “왜 안
        되는가”의 책임 구조를 읽는다. 공주·부여 카카오 비즈니스 사례의 확장형.
      </li>
      <li>
        <strong>문서는 권한 이전 장치다</strong> — 책임 근거를 담은 문서는
        상대가 예외를 만들 수 있는 명분이 된다.
      </li>
      <li>
        <strong>경계의 디버깅</strong> — 시스템이 한국·태국 두 네트워크에
        걸쳐 있을 때 버그는 항상 <em>경계</em>(프록시·IP 대역)에서 발생한다.
      </li>
    </ul>

    <div className="chapter-end">
      <div className="end-ornament">❦</div>
      <div className="end-text">finis</div>
    </div>
  </ChapterShell>
));
