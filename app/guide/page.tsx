import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Guide | YouTube TV Web",
  description:
    "Beginner guide for YouTube TV Web: API key setup, channel naming, keyword setup, playback flow, and launch checklist.",
};

function Container({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        maxWidth: 1440,
        margin: "0 auto",
        paddingLeft: 24,
        paddingRight: 24,
      }}
    >
      {children}
    </div>
  );
}

function NavLink({
  href,
  label,
  active = false,
}: {
  href: string;
  label: string;
  active?: boolean;
}) {
  return (
    <Link
      href={href}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: 48,
        padding: "0 18px",
        borderRadius: 14,
        textDecoration: "none",
        fontSize: 18,
        fontWeight: 700,
        color: "#e5e7eb",
        background: active ? "rgba(59,130,246,0.18)" : "transparent",
      }}
    >
      {label}
    </Link>
  );
}

function PrimaryButton({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  return (
    <Link
      href={href}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: 60,
        padding: "0 30px",
        borderRadius: 20,
        textDecoration: "none",
        fontSize: 18,
        fontWeight: 700,
        color: "#0b1220",
        background: "#60a5fa",
        boxShadow: "0 8px 24px rgba(96,165,250,0.20)",
      }}
    >
      {label}
    </Link>
  );
}

function SecondaryButton({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  return (
    <Link
      href={href}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: 60,
        padding: "0 30px",
        borderRadius: 20,
        textDecoration: "none",
        fontSize: 18,
        fontWeight: 700,
        color: "#ffffff",
        border: "1px solid rgba(255,255,255,0.10)",
        background: "rgba(255,255,255,0.02)",
      }}
    >
      {label}
    </Link>
  );
}

function Section({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: ReactNode;
}) {
  return (
    <section
      style={{
        paddingTop: 56,
      }}
    >
      <div style={{ maxWidth: 980 }}>
        <h2
          style={{
            margin: 0,
            fontSize: 56,
            lineHeight: 1.05,
            fontWeight: 900,
            letterSpacing: "-0.03em",
            color: "#f3f4f6",
          }}
        >
          {title}
        </h2>

        {description ? (
          <p
            style={{
              marginTop: 20,
              marginBottom: 0,
              fontSize: 20,
              lineHeight: 1.8,
              color: "#cbd5e1",
            }}
          >
            {description}
          </p>
        ) : null}
      </div>

      <div style={{ marginTop: 28 }}>{children}</div>
    </section>
  );
}

function Grid({
  children,
  min = 320,
}: {
  children: ReactNode;
  min?: number;
}) {
  return (
    <div
      style={{
        display: "grid",
        gap: 24,
        gridTemplateColumns: `repeat(auto-fit, minmax(${min}px, 1fr))`,
      }}
    >
      {children}
    </div>
  );
}

function Card({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div
      style={{
        borderRadius: 28,
        border: "1px solid rgba(255,255,255,0.08)",
        background:
          "linear-gradient(180deg, rgba(16,24,40,0.88), rgba(8,15,30,0.92))",
        padding: 28,
        boxShadow: "0 12px 36px rgba(0,0,0,0.20)",
      }}
    >
      <h3
        style={{
          margin: 0,
          fontSize: 28,
          lineHeight: 1.2,
          fontWeight: 800,
          color: "#f8fafc",
        }}
      >
        {title}
      </h3>

      <div
        style={{
          marginTop: 18,
          display: "grid",
          gap: 12,
          fontSize: 18,
          lineHeight: 1.9,
          color: "#dbe4f0",
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
        borderRadius: 28,
        border: "1px solid rgba(255,255,255,0.08)",
        background:
          "linear-gradient(180deg, rgba(17,28,53,0.90), rgba(8,15,30,0.95))",
        padding: 28,
      }}
    >
      <p
        style={{
          margin: 0,
          fontSize: 16,
          fontWeight: 600,
          color: "#cbd5e1",
        }}
      >
        {title}
      </p>

      <p
        style={{
          marginTop: 16,
          marginBottom: 0,
          fontSize: 42,
          lineHeight: 1.1,
          fontWeight: 900,
          color: "#f8fafc",
          letterSpacing: "-0.03em",
        }}
      >
        {value}
      </p>

      <p
        style={{
          marginTop: 16,
          marginBottom: 0,
          fontSize: 17,
          lineHeight: 1.8,
          color: "#cbd5e1",
        }}
      >
        {description}
      </p>
    </div>
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
        borderRadius: 28,
        border: "1px solid rgba(255,255,255,0.08)",
        background:
          "linear-gradient(180deg, rgba(16,24,40,0.88), rgba(8,15,30,0.92))",
        padding: 28,
      }}
    >
      <div
        style={{
          display: "flex",
          gap: 18,
          alignItems: "flex-start",
        }}
      >
        <div
          style={{
            width: 48,
            height: 48,
            flexShrink: 0,
            borderRadius: 999,
            background: "rgba(96,165,250,0.16)",
            border: "1px solid rgba(96,165,250,0.30)",
            color: "#bfdbfe",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 18,
            fontWeight: 800,
          }}
        >
          {number}
        </div>

        <div style={{ minWidth: 0 }}>
          <h3
            style={{
              margin: 0,
              fontSize: 28,
              lineHeight: 1.2,
              fontWeight: 800,
              color: "#f8fafc",
            }}
          >
            {title}
          </h3>

          <div
            style={{
              marginTop: 16,
              display: "grid",
              gap: 12,
              fontSize: 18,
              lineHeight: 1.9,
              color: "#dbe4f0",
            }}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
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
            fontSize: 18,
            lineHeight: 1.9,
            color: "#dbe4f0",
          }}
        >
          <span
            style={{
              width: 8,
              height: 8,
              marginTop: 14,
              borderRadius: 999,
              background: "#60a5fa",
              flexShrink: 0,
            }}
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function CodeBox({ children }: { children: ReactNode }) {
  return (
    <code
      style={{
        display: "inline-block",
        borderRadius: 16,
        border: "1px solid rgba(255,255,255,0.08)",
        background: "rgba(2,6,23,0.85)",
        padding: "10px 14px",
        fontSize: 16,
        color: "#93c5fd",
        wordBreak: "break-all",
      }}
    >
      {children}
    </code>
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
        borderRadius: 22,
        border: "1px solid rgba(255,255,255,0.08)",
        background:
          "linear-gradient(180deg, rgba(16,24,40,0.88), rgba(8,15,30,0.92))",
        padding: 20,
      }}
    >
      <div
        style={{
          width: 36,
          height: 36,
          flexShrink: 0,
          borderRadius: 999,
          background: "rgba(96,165,250,0.16)",
          border: "1px solid rgba(96,165,250,0.30)",
          color: "#bfdbfe",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 16,
          fontWeight: 800,
        }}
      >
        {number}
      </div>

      <p
        style={{
          margin: 0,
          paddingTop: 2,
          fontSize: 18,
          lineHeight: 1.9,
          color: "#dbe4f0",
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
        background:
          "linear-gradient(90deg, rgba(30,58,100,0.50) 0%, rgba(2,6,23,0.96) 22%, rgba(2,6,23,0.98) 78%, rgba(30,58,100,0.32) 100%)",
        color: "#ffffff",
      }}
    >
      <header
        style={{
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          background: "rgba(2,6,23,0.96)",
        }}
      >
        <Container>
          <div
            style={{
              minHeight: 92,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 20,
              flexWrap: "wrap",
            }}
          >
            <Link
              href="/"
              style={{
                textDecoration: "none",
                color: "#f3f4f6",
                fontSize: 26,
                fontWeight: 900,
                letterSpacing: "-0.02em",
              }}
            >
              YouTube TV Web
            </Link>

            <nav
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                flexWrap: "wrap",
              }}
            >
              <NavLink href="/" label="Home" />
              <NavLink href="/features" label="Features" />
              <NavLink href="/guide" label="Guide" active />
              <NavLink href="/faq" label="FAQ" />
              <NavLink href="/app" label="App" />
            </nav>
          </div>
        </Container>
      </header>

      <section
        style={{
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <Container>
          <div
            style={{
              paddingTop: 96,
              paddingBottom: 96,
            }}
          >
            <p
              style={{
                margin: 0,
                fontSize: 18,
                fontWeight: 800,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "#60a5fa",
              }}
            >
              GUIDE
            </p>

            <h1
              style={{
                marginTop: 28,
                marginBottom: 0,
                maxWidth: 1200,
                fontSize: "clamp(54px, 8vw, 104px)",
                lineHeight: 0.96,
                fontWeight: 900,
                letterSpacing: "-0.05em",
                color: "#f3f4f6",
              }}
            >
              Beginner guide for
              <br />
              YouTube TV Web
            </h1>

            <p
              style={{
                marginTop: 34,
                marginBottom: 0,
                maxWidth: 1100,
                fontSize: 22,
                lineHeight: 1.8,
                color: "#cbd5e1",
              }}
            >
              This page explains the real beginner flow step by step:
              API key setup, safe restriction settings, channel naming,
              keyword selection, playback flow, autoplay behavior,
              and launch checklist.
            </p>

            <div
              style={{
                marginTop: 42,
                display: "flex",
                flexWrap: "wrap",
                gap: 18,
              }}
            >
              <SecondaryButton href="/" label="Back Home" />
              <PrimaryButton href="/app" label="Open App Area" />
            </div>
          </div>
        </Container>
      </section>

      <Container>
        <section
          style={{
            paddingTop: 56,
          }}
        >
          <Grid min={260}>
            <StatCard
              title="기본 일일 할당량"
              value="10,000 units"
              description="초보자는 먼저 하루 총량이 이 범위 안에서 움직인다고 이해하면 됩니다."
            />
            <StatCard
              title="가장 큰 검색 비용"
              value="search.list = 100"
              description="키워드 검색과 채널 검색은 가장 큰 비용을 차지합니다."
            />
            <StatCard
              title="상세 조회 비용"
              value="1 unit"
              description="channels.list, videos.list, playlistItems.list는 비교적 가볍습니다."
            />
          </Grid>
        </section>

        <Section
          title="Channel naming guide"
          description="채널 이름은 나중에 다시 봐도 무슨 채널인지 바로 알 수 있게 짧고 분명하게 만드는 것이 좋습니다."
        >
          <Grid>
            <Card title="좋은 채널 이름 예시">
              <BulletList
                items={[
                  <>K-Pop Mix</>,
                  <>News Korea</>,
                  <>English Study</>,
                  <>Kids Songs</>,
                  <>Calm Piano</>,
                ]}
              />
            </Card>

            <Card title="좋지 않은 채널 이름 예시">
              <BulletList
                items={[
                  <>이거저거 다 넣은 테스트 채널 이름 1번</>,
                  <>내가 나중에 다시 보려고 그냥 대충 만든 채널</>,
                  <>music news study kids all</>,
                ]}
              />
            </Card>
          </Grid>
        </Section>

        <Section
          title="Keyword setup guide"
          description="키워드는 검색 결과 품질에 직접 영향을 줍니다. 서로 같은 방향의 단어 2~3개를 묶는 것이 초보자에게 가장 이해하기 쉽습니다."
        >
          <Grid>
            <Card title="좋은 키워드 설정 방법">
              <BulletList
                items={[
                  <>너무 넓은 단어 1개보다 의미가 분명한 단어를 고릅니다.</>,
                  <>서로 같은 방향의 키워드 2~3개를 묶습니다.</>,
                  <>채널 이름과 키워드의 주제를 맞춥니다.</>,
                  <>결과가 이상하면 키워드를 더 구체적으로 바꿉니다.</>,
                ]}
              />
            </Card>

            <Card title="예시">
              <p style={{ margin: 0 }}>
                <strong>English Study</strong> → english / listening / conversation
              </p>
              <p style={{ margin: 0 }}>
                <strong>Calm Piano</strong> → piano / relax / calm music
              </p>
              <p style={{ margin: 0 }}>
                <strong>Kids Songs</strong> → kids / songs / nursery rhyme
              </p>
            </Card>
          </Grid>
        </Section>

        <Section
          title="API key setup for beginners"
          description="초보자는 아래 순서대로 위에서 아래로 그대로 따라 하면 됩니다."
        >
          <div style={{ display: "grid", gap: 24 }}>
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
                <p
                  style={{
                    margin: "6px 0 10px",
                    fontSize: 16,
                    color: "#cbd5e1",
                  }}
                >
                  추천 프로젝트 이름
                </p>
                <CodeBox>YouTube TV Web</CodeBox>
              </div>
            </StepCard>

            <StepCard number="3" title="YouTube Data API v3 켜기">
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

            <StepCard number="4" title="API 키 만들기">
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
                키를 만들었다고 끝난 것이 아닙니다.
                <strong> 바로 제한 설정</strong>을 해야 합니다.
              </p>
            </StepCard>
          </div>
        </Section>

        <Section
          title="Restriction examples for beginners"
          description="현재 Vercel 기본 도메인을 그대로 사용할 예정이라면 아래 기준으로 입력하면 됩니다."
        >
          <Grid>
            <Card title="Application restrictions">
              <CodeBox>Websites</CodeBox>
            </Card>

            <Card title="Website restrictions">
              <div style={{ display: "grid", gap: 12 }}>
                <CodeBox>youtube-tv-seo-site.vercel.app</CodeBox>
                <CodeBox>youtube-tv-seo-site.vercel.app/*</CodeBox>
              </div>
            </Card>

            <Card title="API restrictions">
              <CodeBox>YouTube Data API v3</CodeBox>
            </Card>
          </Grid>
        </Section>

        <Section
          title="Playback and playlist flow"
          description="초보자는 유튜브 자체 재생목록과 앱 안의 재생 흐름을 구분해서 이해하는 것이 가장 안전합니다."
        >
          <Grid>
            <Card title="이 앱 안에서의 재생 흐름">
              <BulletList
                items={[
                  <>사용자가 채널을 선택합니다.</>,
                  <>앱이 해당 채널에 맞는 영상 목록을 불러옵니다.</>,
                  <>그 목록이 앱 안에서 재생 순서처럼 사용됩니다.</>,
                  <>영상이 끝나면 다음 영상으로 자동 이동할 수 있습니다.</>,
                  <>마지막 영상까지 가면 처음으로 돌아가 루프될 수 있습니다.</>,
                ]}
              />
            </Card>

            <Card title="초보자용 실제 사용 순서">
              <BulletList
                items={[
                  <>앱을 엽니다.</>,
                  <>API 키를 입력합니다.</>,
                  <>채널 이름과 키워드를 설정합니다.</>,
                  <>채널을 생성하거나 선택합니다.</>,
                  <>재생을 시작하고 자동재생 / 루프 / 이어보기를 확인합니다.</>,
                ]}
              />
            </Card>
          </Grid>
        </Section>

        <Section
          title="Launch checklist"
          description="출시 전에 아래 항목을 하나씩 확인하면 초보자 실수를 크게 줄일 수 있습니다."
        >
          <div style={{ display: "grid", gap: 16 }}>
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
            paddingTop: 56,
            paddingBottom: 80,
          }}
        >
          <div
            style={{
              borderRadius: 32,
              border: "1px solid rgba(255,255,255,0.08)",
              background:
                "linear-gradient(180deg, rgba(17,28,53,0.90), rgba(8,15,30,0.95))",
              padding: 32,
            }}
          >
            <h2
              style={{
                margin: 0,
                fontSize: 56,
                lineHeight: 1.05,
                fontWeight: 900,
                letterSpacing: "-0.03em",
                color: "#f3f4f6",
              }}
            >
              Quick summary
            </h2>

            <div
              style={{
                marginTop: 24,
                display: "grid",
                gap: 24,
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              }}
            >
              <Card title="핵심 순서">
                <p style={{ margin: 0 }}>1. 프로젝트를 만듭니다.</p>
                <p style={{ margin: 0 }}>2. YouTube Data API v3를 켭니다.</p>
                <p style={{ margin: 0 }}>3. API 키를 만들고 제한을 겁니다.</p>
                <p style={{ margin: 0 }}>4. 채널 이름과 키워드를 정리합니다.</p>
                <p style={{ margin: 0 }}>5. 앱에서 채널을 만들고 재생을 확인합니다.</p>
              </Card>

              <Card title="꼭 기억할 기준">
                <p style={{ margin: 0 }}>채널 이름은 짧고 분명하게</p>
                <p style={{ margin: 0 }}>키워드는 같은 주제 2~3개</p>
                <p style={{ margin: 0 }}>Websites 제한은 내 도메인만</p>
                <p style={{ margin: 0 }}>API 제한은 YouTube Data API v3만</p>
                <p style={{ margin: 0 }}>자동재생 / 루프 / 이어보기까지 확인</p>
              </Card>
            </div>
          </div>
        </section>
      </Container>
    </main>
  );
}