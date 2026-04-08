import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Beginner Guide | YouTube TV Web",
  description:
    "Beginner-friendly guide for creating a YouTube Data API key, protecting it with Vercel domain restrictions, understanding quota, and launching safely.",
};

function Section({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
}) {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.25)] backdrop-blur md:p-8">
      {(eyebrow || title || description) && (
        <div className="mb-6">
          {eyebrow ? (
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-red-300">
              {eyebrow}
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
      )}
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
    <div className="rounded-2xl border border-white/10 bg-black/20 p-5 transition-transform duration-200 hover:-translate-y-0.5 md:p-6">
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

export default function GuidePage() {
  return (
    <main className="min-h-screen bg-[#08090d] text-white">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(220,38,38,0.18),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.08),transparent_18%),linear-gradient(180deg,#09090b_0%,#0d1117_100%)]" />

      <div className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-16">
        <section className="overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-zinc-900 via-black to-zinc-950 shadow-[0_30px_120px_rgba(0,0,0,0.45)]">
          <div className="grid gap-8 p-6 md:grid-cols-[1.4fr_0.9fr] md:p-10 lg:p-12">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-red-300">
                Launch Guide for Beginners
              </p>

              <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
                API 키 만들기부터
                <br className="hidden md:block" />
                보호 설정과 출시 준비까지
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-300 md:text-lg">
                이 페이지는 초보자가 실제로 따라 하면서 바로 출시할 수 있도록 만든
                가이드입니다.
                <br />
                어디 사이트에 들어가야 하는지,
                어느 메뉴를 눌러야 하는지,
                어떤 값을 넣어야 하는지,
                Vercel 도메인 기준으로 어떻게 제한해야 하는지까지
                한 번에 볼 수 있게 정리했습니다.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <span className="rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm text-zinc-200">
                  초보자 기준 설명
                </span>
                <span className="rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm text-zinc-200">
                  Vercel 도메인 기준
                </span>
                <span className="rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm text-zinc-200">
                  출시 직전 체크 포함
                </span>
              </div>
            </div>

            <div className="grid gap-4 self-start">
              <div className="rounded-3xl border border-red-400/20 bg-red-500/10 p-5">
                <p className="text-sm font-semibold text-red-200">가장 먼저 기억할 것</p>
                <div className="mt-4 space-y-3 text-sm leading-7 text-red-50">
                  <p>1. Google Cloud Console에서 프로젝트를 만든다</p>
                  <p>2. YouTube Data API v3를 켠다</p>
                  <p>3. API 키를 만든다</p>
                  <p>4. 내 Vercel 도메인만 허용한다</p>
                  <p>5. YouTube Data API v3만 허용한다</p>
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-5">
                <p className="text-sm font-semibold text-zinc-200">현재 도메인</p>
                <div className="mt-4">
                  <CodePill>https://youtube-tv-seo-site.vercel.app</CodePill>
                </div>
                <p className="mt-4 text-sm leading-7 text-zinc-300">
                  Restriction 설정은 이 주소를 기준으로 넣으면 됩니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-8 grid gap-4 md:grid-cols-3">
          <HighlightCard
            title="기본 일일 할당량"
            value="10,000 units"
            description="초보자는 먼저 하루 총 사용량이 이 숫자 안에서 움직인다고 이해하면 됩니다."
          />
          <HighlightCard
            title="가장 비싼 요청"
            value="search.list = 100"
            description="채널이나 키워드를 검색하는 요청이 가장 큰 비용을 차지합니다."
          />
          <HighlightCard
            title="가벼운 요청"
            value="channels / videos / playlist = 1"
            description="상세 정보 조회는 비교적 부담이 적지만, 많이 반복되면 누적됩니다."
          />
        </section>

        <section className="mt-8 grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
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
                  <>그래서 <strong>제한 설정</strong>이 매우 중요합니다.</>,
                  <>
                    최소한 <strong>웹사이트 제한</strong>과{" "}
                    <strong>API 제한</strong>은 같이 걸어야 합니다.
                  </>,
                  <>
                    키를 너무 넓게 열어두면 다른 곳에서 사용될 위험이 커집니다.
                  </>,
                  <>
                    사용량은 출시 전에 꼭 확인하고, 이상하면 키를 교체하는 것이
                    안전합니다.
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
                "4. API 키 생성",
                "5. Websites 제한 설정",
                "6. API restrictions 설정",
                "7. 앱에서 테스트",
                "8. Quota 확인",
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
            eyebrow="Step by Step"
            title="1. 정말 처음부터: API 키 만드는 법"
            description="아래 순서대로 그대로 따라 하면 됩니다. 초보자는 중간에 건너뛰지 말고, 위에서 아래로 순서대로 진행하세요."
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
                      <strong>NEW PROJECT</strong> 또는 <strong>새 프로젝트</strong>를
                      누릅니다.
                    </>,
                    <>프로젝트 이름을 입력합니다.</>,
                  ]}
                />
                <div className="pt-1">
                  <p className="mb-2 text-sm text-zinc-300">추천 이름</p>
                  <CodePill>YouTube TV Web</CodePill>
                </div>
              </StepCard>

              <StepCard number="3" title="방금 만든 프로젝트 선택 확인">
                <p>
                  다시 상단 프로젝트 선택 영역을 눌러서
                  방금 만든 프로젝트가 현재 선택되어 있는지 확인합니다.
                </p>
                <p>
                  이 부분이 다르면 API도 다른 프로젝트에 만들어질 수 있으니 꼭 확인하세요.
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
                  키가 만들어졌다고 바로 끝난 것이 아닙니다.
                  <strong> 바로 제한 설정</strong>을 해야 합니다.
                </p>
              </StepCard>
            </div>
          </Section>

          <Section
            eyebrow="Security"
            title="2. 초보자용 보안 설정"
            description="브라우저에서 쓰는 API 키는 완전히 숨길 수 없습니다. 그래서 최소한 내 사이트에서만 쓰이게 제한해야 합니다."
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
                    <>Application restrictions는 <strong>Websites</strong>로 설정</>,
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
                <p>웹사이트에서 사용할 키이므로 이 옵션을 선택해야 합니다.</p>
              </StepCard>

              <StepCard number="3" title="Vercel 도메인 기준으로 주소 입력">
                <p>
                  지금은 Vercel 기본 도메인을 그대로 사용할 예정이므로 아래처럼 넣으면 됩니다.
                </p>

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
                    지금은 내 실제 도메인만 넣는 것이 더 안전합니다.
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
            eyebrow="Examples"
            title="3. Restriction examples for beginners"
            description="초보자는 아래 예시를 그대로 보고 넣으면 됩니다. 지금 프로젝트는 Vercel 기본 도메인을 기준으로 맞췄습니다."
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

            <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-5">
              <h3 className="text-lg font-semibold text-white">
                나중에 커스텀 도메인을 붙이면?
              </h3>
              <p className="mt-3 text-sm leading-7 text-zinc-200 md:text-base">
                나중에 자체 도메인을 연결하면 그 도메인도 추가해야 합니다.
              </p>
              <div className="mt-4 space-y-3">
                <CodePill>yourdomain.com</CodePill>
                <CodePill>yourdomain.com/*</CodePill>
              </div>
            </div>
          </Section>

          <Section
            eyebrow="Quota"
            title="4. 할당량(Quota) 초보자 설명"
            description="이 부분은 초보자가 제일 헷갈리는 부분입니다. 그래서 숫자를 아주 단순하게 이해하는 것이 중요합니다."
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
                    <>즉 기본 검색 비용 = 300 units</>,
                    <>10,000 ÷ 300 = 약 33회</>,
                  ]}
                />
                <p>
                  즉, 키워드 3개 세트를 기준으로 보면
                  하루에 대략 33세트 정도 검색 작업이 가능하다고 이해하면 됩니다.
                </p>
              </InfoCard>

              <InfoCard title="채널 몇 개 찾을 수 있나요?">
                <p>이건 딱 한 숫자로 말하기 어렵습니다.</p>
                <BulletList
                  items={[
                    <>검색 1번당 결과를 몇 개 가져오는지</>,
                    <>다음 페이지를 또 불러오는지</>,
                    <>채널 상세 조회를 얼마나 추가하는지</>,
                  ]}
                />
                <p>
                  중요한 것은 추가 페이지를 더 부르면 quota가 또 사용된다는 점입니다.
                </p>
              </InfoCard>
            </div>

            <div className="mt-6 rounded-2xl border border-emerald-400/20 bg-emerald-500/10 p-5">
              <h3 className="text-lg font-semibold text-emerald-200">
                초보자용 현실적 해석
              </h3>
              <p className="mt-3 text-sm leading-7 text-emerald-100 md:text-base">
                지금 앱이 키워드 3개로 채널 후보를 찾는 구조라면,
                먼저 “하루 약 30여 세트 정도의 검색 기준”으로 생각하면 이해하기 쉽습니다.
              </p>
            </div>
          </Section>

          <Section
            eyebrow="Mistakes"
            title="5. 초보자가 가장 많이 하는 실수"
            description="출시 전에 아래 항목은 꼭 확인하세요."
          >
            <div className="grid gap-4 md:grid-cols-2">
              {[
                {
                  title: "실수 1. API를 안 켠 상태에서 키만 만듦",
                  text: "프로젝트를 만들고 YouTube Data API v3를 반드시 Enable 해야 합니다.",
                },
                {
                  title: "실수 2. 제한을 안 걸고 키를 사용함",
                  text: "최소한 Websites 제한과 YouTube Data API v3 제한은 같이 거세요.",
                },
                {
                  title: "실수 3. 너무 넓은 referrer를 넣음",
                  text: "*.vercel.app/* 같이 너무 넓게 넣지 말고, 현재 쓰는 실제 도메인만 넣는 것이 안전합니다.",
                },
                {
                  title: "실수 4. 추가 페이지 비용을 생각 안 함",
                  text: "검색 결과 다음 페이지를 더 불러오면 quota가 또 사용됩니다.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-red-400/20 bg-red-500/10 p-5"
                >
                  <h3 className="text-base font-semibold text-red-200 md:text-lg">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-red-50 md:text-base">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </Section>

          <Section
            eyebrow="Launch Checklist"
            title="6. 출시 전 마지막 체크리스트"
            description="이 부분만 체크해도 초보자가 실수할 가능성이 크게 줄어듭니다."
          >
            <div className="grid gap-3">
              {[
                "Google Cloud 프로젝트가 맞는지 확인",
                "YouTube Data API v3가 Enable 상태인지 확인",
                "API 키가 생성되었는지 확인",
                "Application restrictions가 Websites인지 확인",
                "youtube-tv-seo-site.vercel.app 이 들어가 있는지 확인",
                "youtube-tv-seo-site.vercel.app/* 이 들어가 있는지 확인",
                "API restrictions가 YouTube Data API v3만 허용하는지 확인",
                "앱에서 실제 검색이 되는지 확인",
                "Quotas 페이지에서 사용량이 보이는지 확인",
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
                  <p>1. Google Cloud Console에서 프로젝트를 만듭니다.</p>
                  <p>2. YouTube Data API v3를 켭니다.</p>
                  <p>3. API 키를 만듭니다.</p>
                  <p>4. 내 Vercel 도메인만 허용합니다.</p>
                  <p>5. YouTube Data API v3만 허용합니다.</p>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                <h3 className="text-lg font-semibold text-white">꼭 기억할 숫자</h3>
                <div className="mt-4 space-y-3 text-sm leading-7 text-zinc-200 md:text-base">
                  <p>기본 하루 할당량: 10,000 units</p>
                  <p>search.list: 100 units</p>
                  <p>channels.list: 1 unit</p>
                  <p>videos.list: 1 unit</p>
                  <p>playlistItems.list: 1 unit</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}