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
            fontSize: 44,
            lineHeight: 1.08,
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
              marginTop: 18,
              marginBottom: 0,
              fontSize: 18,
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
          fontSize: 24,
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
          fontSize: 17,
          lineHeight: 1.85,
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
          fontSize: 15,
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
          fontSize: 36,
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
          fontSize: 16,
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
              fontSize: 24,
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
              fontSize: 17,
              lineHeight: 1.85,
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
            fontSize: 17,
            lineHeight: 1.85,
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
        fontSize: 15,
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
          fontSize: 17,
          lineHeight: 1.85,
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
                maxWidth: 1120,
                fontSize: "clamp(44px, 6vw, 76px)",
                lineHeight: 1.02,
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
                marginTop: 30,
                marginBottom: 0,
                maxWidth: 1040,
                fontSize: 20,
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
                marginTop: 40,
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
              title="Daily default quota"
              value="10,000 units"
              description="Beginners should first understand that daily API usage moves inside this total budget."
            />
            <StatCard
              title="Largest search cost"
              value="search.list = 100"
              description="Keyword and channel discovery requests usually consume the biggest part of quota."
            />
            <StatCard
              title="Detail lookup cost"
              value="1 unit"
              description="channels.list, videos.list, and playlistItems.list are much lighter requests."
            />
          </Grid>
        </section>

        <Section
          title="Channel naming guide"
          description="A channel name should stay short and clear so you can understand it again later at a glance."
        >
          <Grid>
            <Card title="Good channel name examples">
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

            <Card title="Names to avoid">
              <BulletList
                items={[
                  <>A long test channel name with too many mixed ideas</>,
                  <>Something vague that only made sense for one quick test</>,
                  <>music news study kids all</>,
                ]}
              />
            </Card>
          </Grid>
        </Section>

        <Section
          title="Keyword setup guide"
          description="Keywords directly affect search quality. For beginners, the safest choice is using two or three keywords that point in the same direction."
        >
          <Grid>
            <Card title="Good keyword rules">
              <BulletList
                items={[
                  <>Choose meaningful words instead of one very broad word.</>,
                  <>Group two or three keywords that match the same topic.</>,
                  <>Keep the channel name and keywords aligned.</>,
                  <>If the results feel noisy, make the keywords more specific.</>,
                ]}
              />
            </Card>

            <Card title="Examples">
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
          description="Follow the steps in order from top to bottom without skipping."
        >
          <div style={{ display: "grid", gap: 24 }}>
            <StepCard number="1" title="Open Google Cloud Console">
              <p style={{ margin: 0 }}>Go to the website below.</p>
              <div>
                <CodeBox>https://console.cloud.google.com/</CodeBox>
              </div>
              <p style={{ margin: 0 }}>Sign in with your Google account.</p>
            </StepCard>

            <StepCard number="2" title="Create a new project">
              <BulletList
                items={[
                  <>Click the project selector at the top.</>,
                  <>
                    Choose <strong>NEW PROJECT</strong>.
                  </>,
                  <>Enter a project name.</>,
                ]}
              />
              <div>
                <p
                  style={{
                    margin: "6px 0 10px",
                    fontSize: 15,
                    color: "#cbd5e1",
                  }}
                >
                  Recommended project name
                </p>
                <CodeBox>YouTube TV Web</CodeBox>
              </div>
            </StepCard>

            <StepCard number="3" title="Enable YouTube Data API v3">
              <BulletList
                items={[
                  <>Open the top-left menu.</>,
                  <>
                    Select <strong>APIs &amp; Services</strong>.
                  </>,
                  <>
                    Select <strong>Library</strong>.
                  </>,
                  <>
                    Search for <strong>YouTube Data API v3</strong>.
                  </>,
                  <>
                    Open <strong>YouTube Data API v3</strong>.
                  </>,
                  <>
                    Click <strong>Enable</strong>.
                  </>,
                ]}
              />
            </StepCard>

            <StepCard number="4" title="Create the API key">
              <BulletList
                items={[
                  <>
                    Open <strong>APIs &amp; Services</strong>.
                  </>,
                  <>
                    Click <strong>Credentials</strong>.
                  </>,
                  <>
                    Click <strong>Create Credentials</strong>.
                  </>,
                  <>
                    Choose <strong>API key</strong>.
                  </>,
                ]}
              />
              <p style={{ margin: 0 }}>
                Creating the key is not the last step.
                <strong> You must add restrictions right after that.</strong>
              </p>
            </StepCard>
          </div>
        </Section>

        <Section
          title="Restriction examples for beginners"
          description="If you will keep using the current Vercel domain, you can use the following values."
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
          description="Beginners should treat the in-app playback flow and YouTube's own playlist system as different ideas unless the app explicitly supports account playlists."
        >
          <Grid>
            <Card title="In-app playback flow">
              <BulletList
                items={[
                  <>Select a channel inside the app.</>,
                  <>The app loads a matching list of videos for that channel.</>,
                  <>That list becomes the playback order inside the app.</>,
                  <>When one video ends, the app can continue to the next one automatically.</>,
                  <>After the last video, playback can loop back to the start.</>,
                ]}
              />
            </Card>

            <Card title="Real beginner usage flow">
              <BulletList
                items={[
                  <>Open the app.</>,
                  <>Enter the API key.</>,
                  <>Set the channel name and keywords.</>,
                  <>Create or select the channel.</>,
                  <>Start playback and verify autoplay, loop, and resume behavior.</>,
                ]}
              />
            </Card>
          </Grid>
        </Section>

        <Section
          title="Launch checklist"
          description="Checking these items one by one will reduce beginner mistakes before release."
        >
          <div style={{ display: "grid", gap: 16 }}>
            {[
              "Confirm the correct Google Cloud project is selected.",
              "Confirm YouTube Data API v3 is enabled.",
              "Confirm the API key was created.",
              "Confirm website restrictions are enabled.",
              "Confirm youtube-tv-seo-site.vercel.app is listed.",
              "Confirm youtube-tv-seo-site.vercel.app/* is listed.",
              "Confirm API restrictions allow only YouTube Data API v3.",
              "Confirm channel names are short and clear.",
              "Confirm keyword sets stay focused on one topic.",
              "Confirm playback, autoplay, loop, and resume work correctly in the app.",
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
                fontSize: 44,
                lineHeight: 1.08,
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
              <Card title="Core order">
                <p style={{ margin: 0 }}>1. Create the project.</p>
                <p style={{ margin: 0 }}>2. Enable YouTube Data API v3.</p>
                <p style={{ margin: 0 }}>3. Create the API key and restrict it.</p>
                <p style={{ margin: 0 }}>4. Set channel names and keywords.</p>
                <p style={{ margin: 0 }}>5. Create a channel in the app and test playback.</p>
              </Card>

              <Card title="What to remember">
                <p style={{ margin: 0 }}>Keep channel names short and clear.</p>
                <p style={{ margin: 0 }}>Use two or three related keywords.</p>
                <p style={{ margin: 0 }}>Restrict the key to your domain only.</p>
                <p style={{ margin: 0 }}>Allow only YouTube Data API v3.</p>
                <p style={{ margin: 0 }}>Verify autoplay, loop, and resume before release.</p>
              </Card>
            </div>
          </div>
        </section>
      </Container>
    </main>
  );
}