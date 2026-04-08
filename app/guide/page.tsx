import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Guide | YouTube TV Web",
  description:
    "Complete beginner guide for YouTube TV Web: API key setup, restrictions, quota, channel naming, keyword setup, playlist flow, and playback guide.",
};

function Section({
  badge,
  title,
  description,
  children,
}: {
  badge?: string;
  title: string;
  description?: string;
  children: ReactNode;
}) {
  return (
    <section className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6 shadow-[0_20px_70px_rgba(0,0,0,0.28)] backdrop-blur md:p-8">
      <div className="mb-6">
        {badge ? (
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-red-300">
            {badge}
          </p>
        ) : null}

        <h2 className="mt-2 text-2xl font-bold tracking-tight text-white md:text-3xl">
          {title}
        </h2>

        {description ? (
          <p className="mt-3 max-w-3xl text-sm leading-7 text-zinc-300 md:text-base">
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
    <div className="rounded-2xl border border-white/10 bg-black/20 p-5 md:p-6">
      <div className="flex items-start gap-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-red-400/30 bg-red-500/15 text-sm font-bold text-red-200">
          {number}
        </div>

        <div className="min-w-0">
          <h3 className="text-lg font-semibold text-white md:text-xl">{title}</h3>
          <div className="mt-3 space-y-3 text-sm leading-7 text-zinc-200 md:text-base">
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
    <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
      <h3 className="text-base font-semibold text-white md:text-lg">{title}</h3>
      <div className="mt-3 space-y-3 text-sm leading-7 text-zinc-200 md:text-base">
        {children}
      </div>
    </div>
  );
}

function HighlightCard({
  title,
  value,
  description,
}: {
  title: string;
  value: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.03] p-5">
      <p className="text-sm font-medium text-zinc-300">{title}</p>
      <p className="mt-3 text-2xl font-bold tracking-tight text-white md:text-3xl">
        {value}
      </p>
      <p className="mt-3 text-sm leading-7 text-zinc-300">{description}</p>
    </div>
  );
}

function CodePill({ children }: { children: ReactNode }) {
  return (
    <code className="break-all rounded-xl border border-white/10 bg-black/40 px-3 py-1.5 text-[13px] text-red-300 md:text-sm">
      {children}
    </code>
  );
}

function BulletList({ items }: { items: ReactNode[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item, index) => (
        <li key={index} className="flex gap-3">
          <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-red-300" />
          <span className="text-sm leading-7 text-zinc-200 md:text-base">{item}</span>
        </li>
      ))}
    </ul>
  );
}

function TopLinkButton({
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
      className={
        primary
          ? "inline-flex items-center justify-center rounded-full border border-red-400/30 bg-red-500/15 px-5 py-3 text-sm font-medium text-red-100 transition hover:bg-red-500/25"
          : "inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.05] px-5 py-3 text-sm font-medium text-zinc-200 transition hover:bg-white/[0.08]"
      }
    >
      {label}
    </Link>
  );
}

export default function GuidePage() {
  return (
    <main className="min-h-screen bg-[#08090d] text-white">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(220,38,38,0.18),transparent_28%),radial-gradient(circle_at_85%_20%,rgba(255,255,255,0.08),transparent_18%),linear-gradient(180deg,#09090b_0%,#0d1117_100%)]" />

      <div className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-16">
        <section className="overflow-hidden rounded-[34px] border border-white/10 bg-gradient-to-br from-zinc-900 via-black to-zinc-950 shadow-[0_30px_120px_rgba(0,0,0,0.45)]">
          <div className="grid gap-8 p-6 md:grid-cols-[1.25fr_0.85fr] md:p-10 lg:p-12">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-red-300">
                Complete Beginner Guide
              </p>

              <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
                처음 시작하는 사람도
                <br className="hidden md:block" />
                바로 따라할 수 있는 전체 가이드
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-300 md:text-lg">
                이 페이지는 단순한 API 설명 페이지가 아니라,
                <strong> 실제 출시 직전까지 따라가는 전체 사용 가이드</strong>
                입니다.
                <br />
                API 키 만들기, 보호 설정, 할당량 이해뿐 아니라
                채널 이름 정하기, 키워드 정하기,
                재생목록 흐름 이해,
                자동 재생과 루프 동작까지 한 번에 정리했습니다.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <TopLinkButton href="/" label="Home" />
                <TopLinkButton href="/features" label="Features" />
                <TopLinkButton href="/faq" label="FAQ" />
                <TopLinkButton href="/app" label="Open App" primary />
              </div>
            </div>

            <div className="grid gap-4 self-start">
              <div className="rounded-3xl border border-red-400/20 bg-red-500/10 p-5">
                <p className="text-sm font-semibold text-red-200">가장 먼저 기억할 것</p>
                <div className="mt-4 space-y-3 text-sm leading-7 text-red-50">
                  <p>1. Google Cloud Console에서 프로젝트를 만듭니다.</p>
                  <p>2. YouTube Data API v3를 켭니다.</p>
                  <p>3. API 키를 만든 뒤 제한을 겁니다.</p>
                  <p>4. 채널 이름과 키워드를 정리합니다.</p>
                  <p>5. 앱에서 채널 생성 후 재생을 확인합니다.</p>
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-5">
                <p className="text-sm font-semibold text-zinc-200">현재 기준 도메인</p>
                <div className="mt-4">
                  <CodePill>https://youtube-tv-seo-site.vercel.app</CodePill>
                </div>
                <p className="mt-4 text-sm leading-7 text-zinc-300">
                  Restriction 설정은 이 도메인을 기준으로 하면 됩니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-8 grid gap-4 md:grid-cols-3">
          <HighlightCard
            title="기본 일일 할당량"
            value="10,000 units"
            description="초보자는 먼저 하루 총량이 이 범위 안에서 움직인다고 이해하면 됩니다."
          />
          <HighlightCard
            title="검색 비용"
            value="search.list = 100"
            description="키워드 검색과 채널 검색은 가장 큰 비용을 차지합니다."
          />
          <HighlightCard
            title="상세 조회 비용"
            value="1 unit"
            description="channels.list, videos.list, playlistItems.list는 비교적 가볍습니다."
          />
        </section>

        <section className="mt-8 grid gap-4 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-3xl border border-amber-400/20 bg-amber-500/10 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-200">
              Before You Start
            </p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-white">
              먼저 꼭 알아두세요
            </h2>
            <div className="mt-5">
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
                    앱 안의 재생목록 흐름과 유튜브 자체 재생목록은 같은 개념이 아닐 수 있습니다.
                  </>,
                  <>
                    지금 가이드는 초보자가 실제 사용 흐름까지 이해할 수 있게 만드는 것이 목표입니다.
                  </>,
                ]}
              />
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-300">
              Quick Start
            </p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-white">
              초보자용 전체 순서
            </h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
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
                  className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-zinc-200"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="mt-8 space-y-8">
          <Section
            badge="API Setup"
            title="1. 정말 처음부터: API 키 만드는 법"
            description="아래 순서대로 위에서 아래로 차근차근 따라 하면 됩니다."
          >
            <div className="grid gap-4">
              <StepCard number="1" title="Google Cloud Console로 들어가기">
                <p>아래 사이트로 들어갑니다.</p>
                <CodePill>https://console.cloud.google.com/</CodePill>
                <p>구글 계정으로 로그인합니다.</p>
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
                <div className="pt-1">
                  <p className="mb-2 text-sm text-zinc-300">추천 프로젝트 이름</p>
                  <CodePill>YouTube TV Web</CodePill>
                </div>
              </StepCard>

              <StepCard number="3" title="방금 만든 프로젝트 선택 확인">
                <p>
                  다시 상단 프로젝트 선택 영역을 눌러서
                  방금 만든 프로젝트가 선택되어 있는지 확인합니다.
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
                      검색창에 <CodePill>YouTube Data API v3</CodePill>를 입력합니다.
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
                <p>
                  키를 만들었다고 끝난 것이 아닙니다.
                  <strong> 바로 제한 설정</strong>을 해야 합니다.
                </p>
              </StepCard>
            </div>
          </Section>

          <Section
            badge="Security"
            title="2. 초보자용 보안 설정"
            description="브라우저에서 쓰는 키는 완전히 숨길 수 없기 때문에, 내 사이트에서만 동작하도록 제한하는 것이 중요합니다."
          >
            <div className="grid gap-4 lg:grid-cols-2">
              <InfoCard title="왜 제한 설정이 중요한가요?">
                <BulletList
                  items={[
                    <>웹앱은 브라우저에서 실행되므로 키가 완전 비밀은 아닙니다.</>,
                    <>그래서 내 사이트에서만 쓰이게 막아야 합니다.</>,
                    <>또 YouTube Data API v3만 사용하도록 제한해야 합니다.</>,
                  ]}
                />
              </InfoCard>

              <InfoCard title="초보자용 핵심 규칙">
                <BulletList
                  items={[
                    <>Application restrictions는 <strong>Websites</strong></>,
                    <>Website restrictions에는 내 실제 Vercel 주소만 입력</>,
                    <>API restrictions는 <strong>YouTube Data API v3</strong>만 허용</>,
                  ]}
                />
              </InfoCard>
            </div>

            <div className="mt-6 grid gap-4">
              <StepCard number="1" title="Credentials 페이지에서 방금 만든 키 클릭">
                <p>
                  다시 <strong>APIs &amp; Services → Credentials</strong>로 이동합니다.
                </p>
                <p>방금 만든 API 키 항목을 클릭합니다.</p>
              </StepCard>

              <StepCard number="2" title="Application restrictions 설정">
                <p>
                  <strong>Application restrictions</strong> 영역에서{" "}
                  <strong>Websites</strong>를 선택합니다.
                </p>
              </StepCard>

              <StepCard number="3" title="Vercel 도메인 기준으로 주소 입력">
                <p>지금 프로젝트 기준 추천 입력값은 아래와 같습니다.</p>

                <div className="mt-2 grid gap-3 rounded-2xl border border-white/10 bg-black/20 p-4">
                  <div>
                    <p className="mb-2 text-sm font-medium text-zinc-300">추천 입력값 1</p>
                    <CodePill>youtube-tv-seo-site.vercel.app</CodePill>
                  </div>
                  <div>
                    <p className="mb-2 text-sm font-medium text-zinc-300">추천 입력값 2</p>
                    <CodePill>youtube-tv-seo-site.vercel.app/*</CodePill>
                  </div>
                </div>

                <div className="mt-4 rounded-2xl border border-red-400/20 bg-red-500/10 p-4">
                  <p className="text-sm font-semibold text-red-200">주의</p>
                  <p className="mt-2 text-sm leading-7 text-red-100 md:text-base">
                    <CodePill>*.vercel.app/*</CodePill> 처럼 너무 넓게 넣지 마세요.
                    현재 사용하는 실제 도메인만 넣는 것이 더 안전합니다.
                  </p>
                </div>
              </StepCard>

              <StepCard number="4" title="API restrictions 설정">
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
            badge="Naming"
            title="3. 채널 이름은 어떻게 정하면 좋은가요?"
            description="초보자는 채널 이름을 너무 길게 쓰거나, 목적이 섞여 있는 이름을 만들기 쉽습니다. 채널 이름은 나중에 채널을 구분하기 쉽게 짧고 명확하게 만드는 것이 좋습니다."
          >
            <div className="grid gap-4 lg:grid-cols-2">
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

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <HighlightCard
                title="짧게"
                value="2~4 단어"
                description="너무 길면 한눈에 보기가 어렵습니다."
              />
              <HighlightCard
                title="주제 중심"
                value="한 가지 성격"
                description="음악, 뉴스, 공부처럼 목적이 섞이지 않게 합니다."
              />
              <HighlightCard
                title="나중에도 이해 가능"
                value="직관적"
                description="며칠 뒤 다시 봐도 무슨 채널인지 바로 알 수 있어야 합니다."
              />
            </div>
          </Section>

          <Section
            badge="Keywords"
            title="4. 키워드는 어떻게 정하면 좋은가요?"
            description="키워드는 검색 결과 품질에 직접 영향을 줍니다. 초보자는 넓은 단어만 쓰기 쉬운데, 너무 넓으면 결과가 흐려질 수 있습니다."
          >
            <div className="grid gap-4 lg:grid-cols-2">
              <InfoCard title="좋은 키워드 설정 방법">
                <BulletList
                  items={[
                    <>너무 넓은 단어 1개보다, 의미가 분명한 단어를 고릅니다.</>,
                    <>서로 같은 방향의 키워드 2~3개를 묶습니다.</>,
                    <>채널 이름과 키워드의 주제를 맞추는 것이 좋습니다.</>,
                    <>테스트하면서 결과가 너무 이상하면 키워드를 더 구체적으로 바꿉니다.</>,
                  ]}
                />
              </InfoCard>

              <InfoCard title="예시">
                <div className="space-y-3">
                  <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                    <p className="font-medium text-white">예시 1. 공부용 영어 채널</p>
                    <p className="mt-2 text-zinc-300">
                      채널 이름: <strong>English Study</strong>
                    </p>
                    <p className="mt-1 text-zinc-300">
                      키워드: <strong>english</strong>, <strong>listening</strong>,{" "}
                      <strong>conversation</strong>
                    </p>
                  </div>

                  <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                    <p className="font-medium text-white">예시 2. 차분한 음악 채널</p>
                    <p className="mt-2 text-zinc-300">
                      채널 이름: <strong>Calm Piano</strong>
                    </p>
                    <p className="mt-1 text-zinc-300">
                      키워드: <strong>piano</strong>, <strong>relax</strong>,{" "}
                      <strong>calm music</strong>
                    </p>
                  </div>

                  <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                    <p className="font-medium text-white">예시 3. 어린이 노래 채널</p>
                    <p className="mt-2 text-zinc-300">
                      채널 이름: <strong>Kids Songs</strong>
                    </p>
                    <p className="mt-1 text-zinc-300">
                      키워드: <strong>kids</strong>, <strong>songs</strong>,{" "}
                      <strong>nursery rhyme</strong>
                    </p>
                  </div>
                </div>
              </InfoCard>
            </div>

            <div className="mt-6 rounded-2xl border border-amber-400/20 bg-amber-500/10 p-5">
              <h3 className="text-lg font-semibold text-amber-200">
                초보자용 쉬운 기준
              </h3>
              <p className="mt-3 text-sm leading-7 text-amber-100 md:text-base">
                키워드 3개를 넣는다면,
                <strong> 서로 같은 분위기의 단어 3개</strong>를 넣는다고 생각하면 쉽습니다.
                완전히 다른 방향의 단어를 섞으면 결과가 어색해질 수 있습니다.
              </p>
            </div>
          </Section>

          <Section
            badge="Playlist Flow"
            title="5. 재생목록은 어떻게 이해하면 되나요?"
            description="이 부분은 초보자가 가장 헷갈리는 부분입니다. 유튜브 자체 재생목록과 앱 안에서 만들어지는 재생 흐름은 다를 수 있습니다."
          >
            <div className="grid gap-4 lg:grid-cols-2">
              <InfoCard title="이 앱 안에서의 재생목록 흐름">
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

              <InfoCard title="유튜브 자체 재생목록과의 차이">
                <BulletList
                  items={[
                    <>유튜브 앱이나 유튜브 웹사이트에서 직접 만든 재생목록이 있을 수 있습니다.</>,
                    <>하지만 현재 앱 기능이 그 재생목록을 직접 가져오도록 구현되어 있지 않다면, 같은 개념으로 보면 안 됩니다.</>,
                    <>즉, 초보자는 먼저 “이 앱 안에서 재생되는 목록 흐름”으로 이해하는 것이 가장 안전합니다.</>,
                  ]}
                />
              </InfoCard>
            </div>

            <div className="mt-6 rounded-2xl border border-red-400/20 bg-red-500/10 p-5">
              <h3 className="text-lg font-semibold text-red-200">중요한 주의</h3>
              <p className="mt-3 text-sm leading-7 text-red-100 md:text-base">
                현재 앱이 <strong>유튜브 계정의 개인 재생목록을 직접 불러오는 기능</strong>
                으로 구현되어 있는지 확인되지 않았다면,
                가이드에서는 그 기능이 있는 것처럼 쓰면 안 됩니다.
                그래서 이 페이지는 먼저
                <strong> 앱 안의 재생 흐름</strong> 기준으로 설명하는 것이 안전합니다.
              </p>
            </div>
          </Section>

          <Section
            badge="Playback"
            title="6. 앱에서 실제 재생은 어떻게 진행되나요?"
            description="초보자는 앱을 열고 나서 무엇을 눌러야 하는지, 어떤 순서로 영상이 넘어가는지를 알아야 합니다."
          >
            <div className="grid gap-4">
              <StepCard number="1" title="앱 열기">
                <p>
                  상단의 <strong>Open App</strong> 버튼을 누르거나,
                  직접 <CodePill>/app</CodePill> 페이지로 들어갑니다.
                </p>
              </StepCard>

              <StepCard number="2" title="API 키 입력">
                <p>
                  앱에서 API 키 입력 영역이 보이면,
                  Google Cloud Console에서 만든 키를 입력합니다.
                </p>
                <p>
                  이 키는 YouTube Data API v3가 켜져 있어야 하고,
                  제한 설정도 끝난 상태여야 합니다.
                </p>
              </StepCard>

              <StepCard number="3" title="채널 이름과 키워드 설정">
                <p>
                  채널 이름은 내가 나중에 다시 봤을 때 바로 이해할 수 있게 적습니다.
                </p>
                <p>
                  키워드는 서로 같은 성격의 단어 2~3개로 맞추는 것이 좋습니다.
                </p>
              </StepCard>

              <StepCard number="4" title="채널 생성 또는 선택">
                <p>
                  앱에서 채널을 생성하거나 기존 채널을 선택하면,
                  그 채널 기준으로 재생할 영상 목록이 준비됩니다.
                </p>
              </StepCard>

              <StepCard number="5" title="재생 시작">
                <p>
                  첫 영상이 재생되면,
                  앱은 채널 기반 TV처럼 다음 영상으로 자연스럽게 이어서 재생할 수 있습니다.
                </p>
              </StepCard>

              <StepCard number="6" title="자동 재생 / 루프 / 이어보기 확인">
                <BulletList
                  items={[
                    <>영상이 끝난 뒤 다음 영상으로 넘어가는지 확인합니다.</>,
                    <>마지막 영상 이후 처음으로 돌아가는지 확인합니다.</>,
                    <>다시 들어왔을 때 이어보기가 유지되는지 확인합니다.</>,
                  ]}
                />
              </StepCard>
            </div>
          </Section>

          <Section
            badge="Quota"
            title="7. 할당량(Quota) 초보자 설명"
            description="이 부분은 숫자를 단순하게 이해하면 됩니다."
          >
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              <HighlightCard
                title="하루 총량"
                value="10,000"
                description="기본적으로 하루에 쓸 수 있는 전체 단위입니다."
              />
              <HighlightCard
                title="키워드 검색"
                value="100"
                description="search.list 한 번 호출 시 드는 대표 비용입니다."
              />
              <HighlightCard
                title="채널 상세"
                value="1"
                description="channels.list 같은 상세 조회는 비용이 낮습니다."
              />
              <HighlightCard
                title="영상 / 목록 조회"
                value="1"
                description="videos.list, playlistItems.list도 비교적 가볍습니다."
              />
            </div>

            <div className="mt-6 grid gap-4 lg:grid-cols-2">
              <InfoCard title="키워드 3개 기준 계산">
                <BulletList
                  items={[
                    <>키워드 1개 검색 = search.list 1번</>,
                    <>키워드 3개 검색 = search.list 3번</>,
                    <>기본 검색 비용 = 300 units</>,
                    <>10,000 ÷ 300 = 약 33회</>,
                  ]}
                />
                <p>
                  즉, 키워드 3개 세트를 기준으로 보면
                  하루에 대략 33세트 정도 검색 작업이 가능하다고 이해하면 됩니다.
                </p>
              </InfoCard>

              <InfoCard title="채널 수는 왜 딱 잘라 말하기 어려운가요?">
                <BulletList
                  items={[
                    <>검색 1번당 가져오는 결과 수가 다를 수 있습니다.</>,
                    <>다음 페이지를 추가로 불러오면 비용이 더 듭니다.</>,
                    <>채널 상세 조회를 얼마나 하느냐에 따라 달라집니다.</>,
                  ]}
                />
              </InfoCard>
            </div>
          </Section>

          <Section
            badge="Examples"
            title="8. Restriction examples for beginners"
            description="초보자는 아래 예시를 그대로 보고 입력하면 됩니다."
          >
            <div className="grid gap-4 lg:grid-cols-3">
              <InfoCard title="Application restrictions">
                <CodePill>Websites</CodePill>
              </InfoCard>

              <InfoCard title="Website restrictions">
                <div className="space-y-3">
                  <CodePill>youtube-tv-seo-site.vercel.app</CodePill>
                  <CodePill>youtube-tv-seo-site.vercel.app/*</CodePill>
                </div>
              </InfoCard>

              <InfoCard title="API restrictions">
                <CodePill>YouTube Data API v3</CodePill>
              </InfoCard>
            </div>
          </Section>

          <Section
            badge="Checklist"
            title="9. 출시 전 마지막 체크리스트"
            description="초보자는 이 부분을 하나씩 확인하면 실수가 크게 줄어듭니다."
          >
            <div className="grid gap-3">
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
                <div
                  key={item}
                  className="flex items-start gap-4 rounded-2xl border border-white/10 bg-black/20 px-4 py-4"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-sm font-semibold text-white">
                    {index + 1}
                  </div>
                  <p className="pt-0.5 text-sm leading-7 text-zinc-200 md:text-base">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </Section>

          <section className="rounded-[32px] border border-white/10 bg-gradient-to-br from-red-500/10 via-white/[0.04] to-white/[0.03] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.25)] md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-red-300">
              Final Summary
            </p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-white md:text-3xl">
              한 줄 정리
            </h2>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                <h3 className="text-lg font-semibold text-white">핵심 순서</h3>
                <div className="mt-4 space-y-3 text-sm leading-7 text-zinc-200 md:text-base">
                  <p>1. 프로젝트를 만듭니다.</p>
                  <p>2. YouTube Data API v3를 켭니다.</p>
                  <p>3. API 키를 만들고 제한을 겁니다.</p>
                  <p>4. 채널 이름과 키워드를 정리합니다.</p>
                  <p>5. 앱에서 채널을 만들고 재생을 확인합니다.</p>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                <h3 className="text-lg font-semibold text-white">꼭 기억할 기준</h3>
                <div className="mt-4 space-y-3 text-sm leading-7 text-zinc-200 md:text-base">
                  <p>채널 이름은 짧고 분명하게</p>
                  <p>키워드는 같은 주제 2~3개</p>
                  <p>Websites 제한은 내 도메인만</p>
                  <p>API 제한은 YouTube Data API v3만</p>
                  <p>재생은 자동재생 / 루프 / 이어보기까지 확인</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}