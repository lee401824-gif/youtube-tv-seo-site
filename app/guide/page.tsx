import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Guide | YouTube TV Web",
  description:
    "Complete beginner guide for YouTube TV Web: API key setup, channel naming, keyword setup, playback flow, and launch checklist.",
};

function Section({
  label,
  title,
  description,
  children,
}: {
  label?: string;
  title: string;
  description?: string;
  children: ReactNode;
}) {
  return (
    <section
      style={{
        border: "1px solid rgba(255,255,255,0.10)",
        background: "rgba(255,255,255,0.04)",
        borderRadius: 28,
        padding: 24,
        boxShadow: "0 20px 60px rgba(0,0,0,0.25)",
        backdropFilter: "blur(10px)",
      }}
    >
      <div style={{ marginBottom: 24 }}>
        {label ? (
          <p
            style={{
              margin: 0,
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#fca5a5",
            }}
          >
            {label}
          </p>
        ) : null}

        <h2
          style={{
            marginTop: 10,
            marginBottom: 0,
            fontSize: 32,
            lineHeight: 1.2,
            fontWeight: 800,
            color: "#ffffff",
          }}
        >
          {title}
        </h2>

        {description ? (
          <p
            style={{
              marginTop: 14,
              marginBottom: 0,
              maxWidth: 900,
              fontSize: 16,
              lineHeight: 1.8,
              color: "#d4d4d8",
            }}
          >
            {description}
          </p>
        ) : null}
      </div>

      {children}
    </section>
  );
}

function StepCard({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <div
      style={{
        border: "1px solid rgba(255,255,255,0.10)",
        background: "rgba(0,0,0,0.20)",
        borderRadius: 22,
        padding: 20,
      }}
    >
      <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
        <div
          style={{
            width: 40,
            height: 40,
            flexShrink: 0,
            borderRadius: 999,
            border: "1px solid rgba(248,113,113,0.35)",
            background: "rgba(239,68,68,0.15)",
            color: "#fecaca",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 14,
            fontWeight: 700,
          }}
        >
          {number}
        </div>

        <div style={{ minWidth: 0 }}>
          <h3
            style={{
              margin: 0,
              fontSize: 22,
              lineHeight: 1.3,
              fontWeight: 700,
              color: "#ffffff",
            }}
          >
            {title}
          </h3>

          <div
            style={{
              marginTop: 12,
              display: "grid",
              gap: 10,
              fontSize: 16,
              lineHeight: 1.8,
              color: "#e5e7eb",
            }}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

function InfoCard({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div
      style={{
        border: "1px solid rgba(255,255,255,0.10)",
        background: "rgba(0,0,0,0.20)",
        borderRadius: 22,
        padding: 20,
      }}
    >
      <h3
        style={{
          margin: 0,
          fontSize: 20,
          fontWeight: 700,
          color: "#ffffff",
        }}
      >
        {title}
      </h3>

      <div
        style={{
          marginTop: 12,
          display: "grid",
          gap: 10,
          fontSize: 16,
          lineHeight: 1.8,
          color: "#e5e7eb",
        }}
      >
        {children}
      </div>
    </div>
  );
}

function StatCard({
  title,
  value,
  description,
}: {
  title: string;
  value: string;
  description: string;
}) {
  return (
    <div
      style={{
        border: "1px solid rgba(255,255,255,0.10)",
        background:
          "linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.03))",
        borderRadius: 22,
        padding: 20,
      }}
    >
      <p
        style={{
          margin: 0,
          fontSize: 14,
          color: "#d4d4d8",
          fontWeight: 500,
        }}
      >
        {title}
      </p>

      <p
        style={{
          marginTop: 12,
          marginBottom: 0,
          fontSize: 34,
          lineHeight: 1.15,
          fontWeight: 800,
          color: "#ffffff",
        }}
      >
        {value}
      </p>

      <p
        style={{
          marginTop: 12,
          marginBottom: 0,
          fontSize: 15,
          lineHeight: 1.8,
          color: "#d4d4d8",
        }}
      >
        {description}
      </p>
    </div>
  );
}

function CodeBox({ children }: { children: ReactNode }) {
  return (
    <code
      style={{
        display: "inline-block",
        border: "1px solid rgba(255,255,255,0.10)",
        background: "rgba(0,0,0,0.35)",
        borderRadius: 12,
        padding: "8px 12px",
        color: "#fca5a5",
        fontSize: 14,
        wordBreak: "break-all",
      }}
    >
      {children}
    </code>
  );
}

function BulletList({ items }: { items: ReactNode[] }) {
  return (
    <ul
      style={{
        listStyle: "none",
        padding: 0,
        margin: 0,
        display: "grid",
        gap: 10,
      }}
    >
      {items.map((item, index) => (
        <li
          key={index}
          style={{
            display: "flex",
            gap: 12,
            alignItems: "flex-start",
            color: "#e5e7eb",
            fontSize: 16,
            lineHeight: 1.8,
          }}
        >
          <span
            style={{
              width: 8,
              height: 8,
              marginTop: 12,
              borderRadius: 999,
              background: "#fca5a5",
              flexShrink: 0,
            }}
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function TopButton({
  href,
  label,
  primary = false,
}: {
  href: string;
  label: string;
  primary?: boolean;
}) {
  return (
    <Link
      href={href}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: 46,
        padding: "0 18px",
        borderRadius: 999,
        textDecoration: "none",
        fontSize: 14,
        fontWeight: 700,
        border: primary
          ? "1px solid rgba(248,113,113,0.35)"
          : "1px solid rgba(255,255,255,0.10)",
        background: primary ? "rgba(239,68,68,0.16)" : "rgba(255,255,255,0.05)",
        color: primary ? "#ffe4e6" : "#f4f4f5",
        boxShadow: primary
          ? "0 8px 24px rgba(239,68,68,0.15)"
          : "0 8px 24px rgba(0,0,0,0.18)",
      }}
    >
      {label}
    </Link>
  );
}

function ChecklistItem({
  number,
  text,
}: {
  number: number;
  text: string;
}) {
  return (
    <div
      style={{
        display: "flex",
        gap: 16,
        alignItems: "flex-start",
        border: "1px solid rgba(255,255,255,0.10)",
        background: "rgba(0,0,0,0.20)",
        borderRadius: 18,
        padding: 16,
      }}
    >
      <div
        style={{
          width: 32,
          height: 32,
          flexShrink: 0,
          borderRadius: 999,
          border: "1px solid rgba(255,255,255,0.10)",
          background: "rgba(255,255,255,0.06)",
          color: "#ffffff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 14,
          fontWeight: 700,
        }}
      >
        {number}
      </div>

      <p
        style={{
          margin: 0,
          paddingTop: 2,
          fontSize: 16,
          lineHeight: 1.8,
          color: "#e5e7eb",
        }}
      >
        {text}
      </p>
    </div>
  );
}

export default function GuidePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        color: "#ffffff",
        background:
          "radial-gradient(circle at top, rgba(220,38,38,0.16), transparent 28%), radial-gradient(circle at 85% 20%, rgba(255,255,255,0.08), transparent 18%), linear-gradient(180deg, #09090b 0%, #0b1120 100%)",
      }}
    >
      <div
        style={{
          maxWidth: 1180,
          margin: "0 auto",
          padding: "40px 16px 80px",
        }}
      >
        <section
          style={{
            overflow: "hidden",
            borderRadius: 34,
            border: "1px solid rgba(255,255,255,0.10)",
            background:
              "linear-gradient(135deg, rgba(24,24,27,0.96), rgba(0,0,0,0.98))",
            boxShadow: "0 30px 120px rgba(0,0,0,0.45)",
            padding: 32,
          }}
        >
          <div
            style={{
              display: "grid",
              gap: 24,
            }}
          >
            <div>
              <p
                style={{
                  margin: 0,
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: "0.28em",
                  textTransform: "uppercase",
                  color: "#fca5a5",
                }}
              >
                Complete Beginner Guide
              </p>

              <h1
                style={{
                  marginTop: 18,
                  marginBottom: 0,
                  fontSize: "clamp(38px, 7vw, 72px)",
                  lineHeight: 1.05,
                  fontWeight: 900,
                  letterSpacing: "-0.03em",
                  color: "#ffffff",
                }}
              >
                처음 시작하는 사람도
                <br />
                바로 따라할 수 있는 전체 가이드
              </h1>

              <p
                style={{
                  marginTop: 24,
                  marginBottom: 0,
                  maxWidth: 840,
                  fontSize: 18,
                  lineHeight: 1.9,
                  color: "#d4d4d8",
                }}
              >
                이 페이지는 단순한 설명문이 아니라,
                <strong style={{ color: "#ffffff" }}>
                  {" "}
                  실제 출시 직전까지 따라가는 사용 가이드
                </strong>
                입니다.
                <br />
                API 키 만들기, 보호 설정, 채널 이름 정하기, 키워드 정하기,
                앱 안의 재생 흐름 이해, 자동 재생과 루프 확인까지
                초보자 기준으로 한 번에 정리했습니다.
              </p>

              <div
                style={{
                  marginTop: 28,
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 12,
                }}
              >
                <TopButton href="/" label="Home" />
                <TopButton href="/features" label="Features" />
                <TopButton href="/faq" label="FAQ" />
                <TopButton href="/app" label="Open App" primary />
              </div>
            </div>

            <div
              style={{
                display: "grid",
                gap: 16,
                gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                marginTop: 8,
              }}
            >
              <div
                style={{
                  border: "1px solid rgba(248,113,113,0.25)",
                  background: "rgba(239,68,68,0.10)",
                  borderRadius: 24,
                  padding: 20,
                }}
              >
                <p
                  style={{
                    margin: 0,
                    fontSize: 14,
                    fontWeight: 700,
                    color: "#fecaca",
                  }}
                >
                  가장 먼저 기억할 것
                </p>

                <div
                  style={{
                    marginTop: 14,
                    display: "grid",
                    gap: 10,
                    fontSize: 16,
                    lineHeight: 1.8,
                    color: "#fff1f2",
                  }}
                >
                  <p style={{ margin: 0 }}>1. Google Cloud Console에서 프로젝트를 만듭니다.</p>
                  <p style={{ margin: 0 }}>2. YouTube Data API v3를 켭니다.</p>
                  <p style={{ margin: 0 }}>3. API 키를 만들고 제한을 겁니다.</p>
                  <p style={{ margin: 0 }}>4. 채널 이름과 키워드를 정리합니다.</p>
                  <p style={{ margin: 0 }}>5. 앱에서 채널 생성 후 재생을 확인합니다.</p>
                </div>
              </div>

              <div
                style={{
                  border: "1px solid rgba(255,255,255,0.10)",
                  background: "rgba(255,255,255,0.05)",
                  borderRadius: 24,
                  padding: 20,
                }}
              >
                <p
                  style={{
                    margin: 0,
                    fontSize: 14,
                    fontWeight: 700,
                    color: "#e4e4e7",
                  }}
                >
                  현재 기준 도메인
                </p>

                <div style={{ marginTop: 14 }}>
                  <CodeBox>https://youtube-tv-seo-site.vercel.app</CodeBox>
                </div>

                <p
                  style={{
                    marginTop: 14,
                    marginBottom: 0,
                    fontSize: 15,
                    lineHeight: 1.8,
                    color: "#d4d4d8",
                  }}
                >
                  Restriction 설정은 이 도메인을 기준으로 입력하면 됩니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          style={{
            marginTop: 24,
            display: "grid",
            gap: 16,
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          }}
        >
          <StatCard
            title="기본 일일 할당량"
            value="10,000 units"
            description="초보자는 먼저 하루 총 사용량이 이 범위 안에서 움직인다고 이해하면 됩니다."
          />
          <StatCard
            title="검색 비용"
            value="search.list = 100"
            description="키워드 검색과 채널 검색은 가장 큰 비용을 차지합니다."
          />
          <StatCard
            title="상세 조회 비용"
            value="1 unit"
            description="channels.list, videos.list, playlistItems.list는 비교적 가볍습니다."
          />
        </section>

        <section
          style={{
            marginTop: 24,
            display: "grid",
            gap: 16,
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          }}
        >
          <div
            style={{
              border: "1px solid rgba(251,191,36,0.22)",
              background: "rgba(245,158,11,0.10)",
              borderRadius: 26,
              padding: 24,
            }}
          >
            <p
              style={{
                margin: 0,
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "#fde68a",
              }}
            >
              Before You Start
            </p>

            <h2
              style={{
                marginTop: 12,
                marginBottom: 0,
                fontSize: 30,
                fontWeight: 800,
                lineHeight: 1.2,
                color: "#ffffff",
              }}
            >
              먼저 꼭 알아두세요
            </h2>

            <div style={{ marginTop: 18 }}>
              <BulletList
                items={[
                  <>이 앱은 브라우저에서 YouTube API 키를 사용합니다.</>,
                  <>
                    그래서 <strong>Websites 제한</strong>과{" "}
                    <strong>API 제한</strong>이 중요합니다.
                  </>,
                  <>
                    채널 이름과 키워드를 어떻게 정하느냐에 따라 검색 품질이 달라집니다.
                  </>,
                  <>
                    앱 안의 재생 흐름과 유튜브 자체 재생목록은 같은 개념이 아닐 수 있습니다.
                  </>,
                ]}
              />
            </div>
          </div>

          <div
            style={{
              border: "1px solid rgba(255,255,255,0.10)",
              background: "rgba(255,255,255,0.04)",
              borderRadius: 26,
              padding: 24,
            }}
          >
            <p
              style={{
                margin: 0,
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "#d4d4d8",
              }}
            >
              Quick Start
            </p>

            <h2
              style={{
                marginTop: 12,
                marginBottom: 0,
                fontSize: 30,
                fontWeight: 800,
                lineHeight: 1.2,
                color: "#ffffff",
              }}
            >
              초보자용 전체 순서
            </h2>

            <div
              style={{
                marginTop: 18,
                display: "grid",
                gap: 12,
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              }}
            >
              {[
                "1. Google Cloud Console 접속",
                "2. 새 프로젝트 만들기",
                "3. YouTube Data API v3 활성화",
                "4. API 키 생성 + 제한 설정",
                "5. 채널 이름 정리",
                "6. 키워드 정리",
                "7. 앱에서 채널 생성",
                "8. 재생목록/자동재생 확인",
              ].map((item) => (
                <div
                  key={item}
                  style={{
                    border: "1px solid rgba(255,255,255,0.10)",
                    background: "rgba(0,0,0,0.20)",
                    borderRadius: 16,
                    padding: "14px 16px",
                    fontSize: 15,
                    lineHeight: 1.7,
                    color: "#e4e4e7",
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <div style={{ marginTop: 24, display: "grid", gap: 24 }}>
          <Section
            label="API Setup"
            title="1. 정말 처음부터: API 키 만드는 법"
            description="아래 순서대로 위에서 아래로 차근차근 따라 하면 됩니다."
          >
            <div style={{ display: "grid", gap: 16 }}>
              <StepCard number="1" title="Google Cloud Console로 들어가기">
                <p style={{ margin: 0 }}>아래 사이트로 들어갑니다.</p>
                <div>
                  <CodeBox>https://console.cloud.google.com/</CodeBox>
                </div>
                <p style={{ margin: 0 }}>구글 계정으로 로그인합니다.</p>
              </StepCard>

              <StepCard number="2" title="새 프로젝트 만들기">
                <BulletList
                  items={[
                    <>상단의 프로젝트 선택 부분을 클릭합니다.</>,
                    <>
                      <strong>NEW PROJECT</strong> 또는 <strong>새 프로젝트</strong>를 누릅니다.
                    </>,
                    <>프로젝트 이름을 입력합니다.</>,
                  ]}
                />
                <div>
                  <p style={{ margin: "8px 0 8px", fontSize: 14, color: "#d4d4d8" }}>
                    추천 프로젝트 이름
                  </p>
                  <CodeBox>YouTube TV Web</CodeBox>
                </div>
              </StepCard>

              <StepCard number="3" title="방금 만든 프로젝트 선택 확인">
                <p style={{ margin: 0 }}>
                  다시 상단 프로젝트 선택 영역을 눌러서 방금 만든 프로젝트가 선택되어 있는지 확인합니다.
                </p>
              </StepCard>

              <StepCard number="4" title="YouTube Data API v3 켜기">
                <BulletList
                  items={[
                    <>왼쪽 위 메뉴를 엽니다.</>,
                    <>
                      <strong>APIs &amp; Services</strong>를 누릅니다.
                    </>,
                    <>
                      <strong>Library</strong>를 누릅니다.
                    </>,
                    <>
                      검색창에 <strong>YouTube Data API v3</strong>를 입력합니다.
                    </>,
                    <>
                      검색 결과에서 <strong>YouTube Data API v3</strong>를 클릭합니다.
                    </>,
                    <>
                      <strong>Enable</strong> 버튼을 누릅니다.
                    </>,
                  ]}
                />
              </StepCard>

              <StepCard number="5" title="API 키 만들기">
                <BulletList
                  items={[
                    <>
                      <strong>APIs &amp; Services</strong>로 갑니다.
                    </>,
                    <>
                      <strong>Credentials</strong>를 누릅니다.
                    </>,
                    <>
                      <strong>Create Credentials</strong>를 누릅니다.
                    </>,
                    <>
                      <strong>API key</strong>를 선택합니다.
                    </>,
                  ]}
                />
                <p style={{ margin: 0 }}>
                  키를 만들었다고 끝난 것이 아닙니다. <strong>바로 제한 설정</strong>을 해야 합니다.
                </p>
              </StepCard>
            </div>
          </Section>

          <Section
            label="Naming"
            title="2. 채널 이름은 어떻게 정하면 좋은가요?"
            description="채널 이름은 나중에 다시 봐도 무슨 채널인지 바로 알 수 있게 짧고 분명하게 만드는 것이 좋습니다."
          >
            <div
              style={{
                display: "grid",
                gap: 16,
                gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              }}
            >
              <InfoCard title="좋은 채널 이름 예시">
                <BulletList
                  items={[
                    <>K-Pop Mix</>,
                    <>News Korea</>,
                    <>English Study</>,
                    <>Kids Songs</>,
                    <>Calm Piano</>,
                  ]}
                />
              </InfoCard>

              <InfoCard title="좋지 않은 채널 이름 예시">
                <BulletList
                  items={[
                    <>이거저거 다 넣은 테스트 채널 이름 1번</>,
                    <>내가 나중에 다시 보려고 그냥 대충 만든 채널</>,
                    <>music news study kids all</>,
                  ]}
                />
              </InfoCard>
            </div>
          </Section>

          <Section
            label="Keywords"
            title="3. 키워드는 어떻게 정하면 좋은가요?"
            description="키워드는 검색 결과 품질에 직접 영향을 줍니다. 서로 같은 방향의 단어 2~3개를 묶는 것이 이해하기 쉽습니다."
          >
            <div
              style={{
                display: "grid",
                gap: 16,
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              }}
            >
              <InfoCard title="좋은 키워드 설정 방법">
                <BulletList
                  items={[
                    <>너무 넓은 단어 1개보다 의미가 분명한 단어를 고릅니다.</>,
                    <>서로 같은 방향의 키워드 2~3개를 묶습니다.</>,
                    <>채널 이름과 키워드의 주제를 맞춥니다.</>,
                    <>결과가 이상하면 키워드를 더 구체적으로 바꿉니다.</>,
                  ]}
                />
              </InfoCard>

              <InfoCard title="예시">
                <p style={{ margin: 0 }}>
                  <strong>English Study</strong> → english / listening / conversation
                </p>
                <p style={{ margin: 0 }}>
                  <strong>Calm Piano</strong> → piano / relax / calm music
                </p>
                <p style={{ margin: 0 }}>
                  <strong>Kids Songs</strong> → kids / songs / nursery rhyme
                </p>
              </InfoCard>
            </div>
          </Section>

          <Section
            label="Security"
            title="4. 초보자용 보안 설정"
            description="브라우저에서 쓰는 키는 완전히 숨길 수 없기 때문에, 내 사이트에서만 동작하도록 제한하는 것이 중요합니다."
          >
            <div style={{ display: "grid", gap: 16 }}>
              <StepCard number="1" title="Application restrictions 설정">
                <p style={{ margin: 0 }}>
                  <strong>Application restrictions</strong> 영역에서{" "}
                  <strong>Websites</strong>를 선택합니다.
                </p>
              </StepCard>

              <StepCard number="2" title="Vercel 도메인 기준으로 주소 입력">
                <div
                  style={{
                    display: "grid",
                    gap: 12,
                    border: "1px solid rgba(255,255,255,0.10)",
                    background: "rgba(0,0,0,0.20)",
                    borderRadius: 16,
                    padding: 16,
                  }}
                >
                  <div>
                    <p style={{ margin: "0 0 8px", fontSize: 14, color: "#d4d4d8" }}>
                      추천 입력값 1
                    </p>
                    <CodeBox>youtube-tv-seo-site.vercel.app</CodeBox>
                  </div>

                  <div>
                    <p style={{ margin: "0 0 8px", fontSize: 14, color: "#d4d4d8" }}>
                      추천 입력값 2
                    </p>
                    <CodeBox>youtube-tv-seo-site.vercel.app/*</CodeBox>
                  </div>
                </div>
              </StepCard>

              <StepCard number="3" title="API restrictions 설정">
                <BulletList
                  items={[
                    <>
                      같은 화면 아래쪽의 <strong>API restrictions</strong> 영역으로 내려갑니다.
                    </>,
                    <>
                      <strong>Restrict key</strong>를 선택합니다.
                    </>,
                    <>
                      목록에서 <strong>YouTube Data API v3</strong>만 체크합니다.
                    </>,
                    <>
                      <strong>Save</strong>를 누릅니다.
                    </>,
                  ]}
                />
              </StepCard>
            </div>
          </Section>

          <Section
            label="Playback Flow"
            title="5. 앱 안에서 재생목록과 재생은 어떻게 이해하면 되나요?"
            description="초보자는 유튜브 자체 재생목록과 앱 안의 재생 흐름을 구분해서 이해하는 것이 가장 안전합니다."
          >
            <div
              style={{
                display: "grid",
                gap: 16,
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              }}
            >
              <InfoCard title="이 앱 안에서의 재생 흐름">
                <BulletList
                  items={[
                    <>사용자가 채널을 선택합니다.</>,
                    <>앱이 해당 채널에 맞는 영상 목록을 불러옵니다.</>,
                    <>그 목록이 앱 안에서 재생 순서처럼 사용됩니다.</>,
                    <>영상이 끝나면 다음 영상으로 자동 이동할 수 있습니다.</>,
                    <>마지막 영상까지 가면 처음으로 돌아가 루프될 수 있습니다.</>,
                  ]}
                />
              </InfoCard>

              <InfoCard title="초보자용 실제 사용 순서">
                <BulletList
                  items={[
                    <>앱을 엽니다.</>,
                    <>API 키를 입력합니다.</>,
                    <>채널 이름과 키워드를 설정합니다.</>,
                    <>채널을 생성하거나 선택합니다.</>,
                    <>재생을 시작하고 자동재생 / 루프 / 이어보기를 확인합니다.</>,
                  ]}
                />
              </InfoCard>
            </div>
          </Section>

          <Section
            label="Checklist"
            title="6. 출시 전 마지막 체크리스트"
            description="초보자는 아래 항목을 하나씩 확인하면 실수가 크게 줄어듭니다."
          >
            <div style={{ display: "grid", gap: 12 }}>
              {[
                "Google Cloud 프로젝트가 맞는지 확인",
                "YouTube Data API v3가 Enable 상태인지 확인",
                "API 키가 생성되었는지 확인",
                "Websites 제한이 설정되어 있는지 확인",
                "youtube-tv-seo-site.vercel.app 이 들어가 있는지 확인",
                "youtube-tv-seo-site.vercel.app/* 이 들어가 있는지 확인",
                "API restrictions가 YouTube Data API v3만 허용하는지 확인",
                "채널 이름이 짧고 명확한지 확인",
                "키워드 2~3개가 같은 주제로 정리되었는지 확인",
                "앱에서 실제 재생, 자동재생, 루프, 이어보기가 동작하는지 확인",
              ].map((item, index) => (
                <ChecklistItem key={item} number={index + 1} text={item} />
              ))}
            </div>
          </Section>

          <section
            style={{
              border: "1px solid rgba(255,255,255,0.10)",
              background:
                "linear-gradient(135deg, rgba(239,68,68,0.10), rgba(255,255,255,0.04))",
              borderRadius: 32,
              padding: 24,
              boxShadow: "0 20px 60px rgba(0,0,0,0.25)",
            }}
          >
            <p
              style={{
                margin: 0,
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "#fca5a5",
              }}
            >
              Final Summary
            </p>

            <h2
              style={{
                marginTop: 12,
                marginBottom: 0,
                fontSize: 32,
                lineHeight: 1.2,
                fontWeight: 800,
                color: "#ffffff",
              }}
            >
              한 줄 정리
            </h2>

            <div
              style={{
                marginTop: 20,
                display: "grid",
                gap: 16,
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              }}
            >
              <div
                style={{
                  border: "1px solid rgba(255,255,255,0.10)",
                  background: "rgba(0,0,0,0.20)",
                  borderRadius: 22,
                  padding: 20,
                }}
              >
                <h3
                  style={{
                    margin: 0,
                    fontSize: 20,
                    fontWeight: 700,
                    color: "#ffffff",
                  }}
                >
                  핵심 순서
                </h3>

                <div
                  style={{
                    marginTop: 14,
                    display: "grid",
                    gap: 10,
                    fontSize: 16,
                    lineHeight: 1.8,
                    color: "#e5e7eb",
                  }}
                >
                  <p style={{ margin: 0 }}>1. 프로젝트를 만듭니다.</p>
                  <p style={{ margin: 0 }}>2. YouTube Data API v3를 켭니다.</p>
                  <p style={{ margin: 0 }}>3. API 키를 만들고 제한을 겁니다.</p>
                  <p style={{ margin: 0 }}>4. 채널 이름과 키워드를 정리합니다.</p>
                  <p style={{ margin: 0 }}>5. 앱에서 채널을 만들고 재생을 확인합니다.</p>
                </div>
              </div>

              <div
                style={{
                  border: "1px solid rgba(255,255,255,0.10)",
                  background: "rgba(0,0,0,0.20)",
                  borderRadius: 22,
                  padding: 20,
                }}
              >
                <h3
                  style={{
                    margin: 0,
                    fontSize: 20,
                    fontWeight: 700,
                    color: "#ffffff",
                  }}
                >
                  꼭 기억할 기준
                </h3>

                <div
                  style={{
                    marginTop: 14,
                    display: "grid",
                    gap: 10,
                    fontSize: 16,
                    lineHeight: 1.8,
                    color: "#e5e7eb",
                  }}
                >
                  <p style={{ margin: 0 }}>채널 이름은 짧고 분명하게</p>
                  <p style={{ margin: 0 }}>키워드는 같은 주제 2~3개</p>
                  <p style={{ margin: 0 }}>Websites 제한은 내 도메인만</p>
                  <p style={{ margin: 0 }}>API 제한은 YouTube Data API v3만</p>
                  <p style={{ margin: 0 }}>자동재생 / 루프 / 이어보기까지 확인</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}