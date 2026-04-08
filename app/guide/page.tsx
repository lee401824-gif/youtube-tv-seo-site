import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Beginner Guide | YouTube TV Web",
  description:
    "Step-by-step beginner guide for creating a YouTube Data API key, protecting it with Vercel domain restrictions, understanding quota, and launching the app safely.",
};

function Box({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-sm md:p-8">
      <h2 className="text-2xl font-bold tracking-tight text-white md:text-3xl">
        {title}
      </h2>
      <div className="mt-4 space-y-4 text-sm leading-7 text-zinc-200 md:text-base">
        {children}
      </div>
    </section>
  );
}

function Step({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border border-white/10 bg-black/20 p-5">
      <div className="flex items-center gap-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-500/20 text-sm font-bold text-red-300">
          {number}
        </div>
        <h3 className="text-lg font-semibold text-white">{title}</h3>
      </div>
      <div className="mt-3 space-y-3 text-zinc-200">{children}</div>
    </div>
  );
}

function Code({ children }: { children: React.ReactNode }) {
  return (
    <code className="break-all rounded-md bg-black/40 px-2 py-1 text-red-300">
      {children}
    </code>
  );
}

export default function GuidePage() {
  return (
    <main className="min-h-screen bg-[#0b0b0f] text-white">
      <div className="mx-auto max-w-5xl px-4 py-12 md:px-6 md:py-16">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-zinc-900 to-black p-8 shadow-lg md:p-12">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-red-300">
            Beginner Guide
          </p>

          <h1 className="mt-4 text-4xl font-extrabold tracking-tight md:text-5xl">
            YouTube API 키 만들기부터
            <br className="hidden md:block" />
            보호 설정, 할당량 이해, 출시 준비까지
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-8 text-zinc-300 md:text-lg">
            이 페이지는 컴퓨터 초보자도 그대로 따라 할 수 있도록 만든 실제
            출시용 가이드입니다.
            <br />
            어디 사이트로 들어가야 하는지, 어떤 메뉴를 눌러야 하는지,
            API 키를 어떻게 보호해야 하는지, 하루 할당량이 어느 정도인지까지
            처음부터 끝까지 아주 차근차근 설명합니다.
          </p>
        </div>

        <div className="mt-8 rounded-2xl border border-amber-400/30 bg-amber-500/10 p-6">
          <h2 className="text-xl font-bold text-amber-200">먼저 꼭 알아두세요</h2>

          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-amber-100 md:text-base">
            <li>이 앱은 브라우저(웹)에서 YouTube Data API 키를 사용합니다.</li>
            <li>그래서 API 키 제한 설정이 매우 중요합니다.</li>
            <li>
              Google Cloud에서는 웹사이트 제한(HTTP referrers)과 API 제한을
              함께 거는 것이 안전합니다.
            </li>
            <li>
              사용하지 않는 키는 삭제하고, 필요하면 새 키로 교체하는 것이
              좋습니다.
            </li>
          </ul>

          <p className="mt-4 text-sm leading-7 text-zinc-200 md:text-base">
            초보자 기준으로 가장 중요한 숫자는 이것입니다.
            YouTube Data API 프로젝트의 기본 일일 할당량은 보통{" "}
            <strong>10,000 units/day</strong>이며,{" "}
            <strong>search.list</strong>는 <strong>100 units</strong>,{" "}
            <strong>channels.list</strong>, <strong>playlistItems.list</strong>,{" "}
            <strong>videos.list</strong>는 각각 <strong>1 unit</strong>
            입니다.
          </p>
        </div>

        <div className="mt-10 space-y-8">
          <Box title="A. 준비물">
            <ul className="list-disc space-y-2 pl-5">
              <li>구글 계정 1개</li>
              <li>Vercel에 배포된 SEO 사이트</li>
              <li>
                현재 사용할 도메인:
                <br />
                <Code>https://youtube-tv-seo-site.vercel.app</Code>
              </li>
              <li>크롬 또는 엣지 브라우저</li>
            </ul>
          </Box>

          <Box title="B. 초보자용 전체 순서 한눈에 보기">
            <ol className="list-decimal space-y-2 pl-5">
              <li>Google Cloud Console에 들어갑니다</li>
              <li>새 프로젝트를 만듭니다</li>
              <li>YouTube Data API v3를 켭니다</li>
              <li>API 키를 만듭니다</li>
              <li>웹사이트 제한(HTTP referrers)을 설정합니다</li>
              <li>API 제한에서 YouTube Data API v3만 허용합니다</li>
              <li>앱에 키를 넣고 테스트합니다</li>
              <li>할당량 사용량을 확인합니다</li>
              <li>정상 작동하면 출시합니다</li>
            </ol>
          </Box>

          <Box title="C. 정말 처음부터: API 키 만드는 법">
            <Step number="1" title="Google Cloud Console로 들어가기">
              <p>아래 사이트로 들어갑니다.</p>
              <p>
                <Code>https://console.cloud.google.com/</Code>
              </p>
              <p>구글 계정으로 로그인합니다.</p>
            </Step>

            <Step number="2" title="새 프로젝트 만들기">
              <p>
                화면 맨 위쪽에 프로젝트 선택 영역이 있습니다.
              </p>

              <ol className="list-decimal space-y-2 pl-5">
                <li>상단의 프로젝트 선택 부분을 클릭합니다.</li>
                <li>
                  <strong>NEW PROJECT</strong> 또는 <strong>새 프로젝트</strong>
                  를 누릅니다.
                </li>
                <li>프로젝트 이름을 입력합니다.</li>
              </ol>

              <p>초보자용 추천 이름:</p>
              <p>
                <Code>YouTube TV Web</Code>
              </p>

              <p>
                이름을 썼으면 <strong>Create</strong> 또는{" "}
                <strong>만들기</strong>를 누릅니다.
              </p>
            </Step>

            <Step number="3" title="방금 만든 프로젝트를 선택하기">
              <p>
                다시 상단 프로젝트 선택 부분을 눌러서 방금 만든 프로젝트가
                선택되어 있는지 확인합니다.
              </p>

              <p>
                이 부분이 다른 프로젝트로 되어 있으면 API를 켜도 엉뚱한 곳에
                만들어질 수 있으니 꼭 확인해야 합니다.
              </p>
            </Step>

            <Step number="4" title="YouTube Data API v3 켜기">
              <ol className="list-decimal space-y-2 pl-5">
                <li>왼쪽 위 메뉴를 엽니다.</li>
                <li>
                  <strong>APIs &amp; Services</strong>를 누릅니다.
                </li>
                <li>
                  <strong>Library</strong>를 누릅니다.
                </li>
                <li>
                  검색창에 <Code>YouTube Data API v3</Code>를 입력합니다.
                </li>
                <li>
                  검색 결과에서 <strong>YouTube Data API v3</strong>를
                  클릭합니다.
                </li>
                <li>
                  <strong>Enable</strong> 버튼을 누릅니다.
                </li>
              </ol>

              <p>
                이 API를 켜야만 앱이 유튜브 채널, 영상, 플레이리스트를 가져올
                수 있습니다.
              </p>
            </Step>

            <Step number="5" title="API 키 만들기">
              <ol className="list-decimal space-y-2 pl-5">
                <li>
                  왼쪽 메뉴에서 <strong>APIs &amp; Services</strong>로 갑니다.
                </li>
                <li>
                  <strong>Credentials</strong>를 누릅니다.
                </li>
                <li>
                  상단의 <strong>Create Credentials</strong>를 누릅니다.
                </li>
                <li>
                  <strong>API key</strong>를 선택합니다.
                </li>
              </ol>

              <p>그러면 긴 영어/숫자 조합의 키가 생성됩니다.</p>
              <p>
                하지만 아직 끝이 아닙니다. <strong>바로 제한 설정</strong>을
                해야 합니다.
              </p>
            </Step>
          </Box>

          <Box title="D. 초보자용 보안 설정: API 키 보호하기">
            <Step number="1" title="왜 보호 설정이 필요한가요?">
              <p>
                웹앱은 브라우저에서 동작하기 때문에 API 키를 완전히 비밀처럼
                숨길 수는 없습니다.
              </p>

              <p>
                그래서 어떤 웹사이트에서만 사용할 수 있는지와 어떤 API만
                사용할 수 있는지를 제한해야 합니다.
              </p>
            </Step>

            <Step number="2" title="Credentials 페이지에서 방금 만든 키 클릭">
              <p>
                다시 <strong>APIs &amp; Services → Credentials</strong>로
                갑니다.
              </p>
              <p>방금 만든 API 키 항목을 클릭합니다.</p>
            </Step>

            <Step number="3" title="Application restrictions 설정">
              <p>
                <strong>Application restrictions</strong> 영역에서{" "}
                <strong>Websites</strong>를 선택합니다.
              </p>

              <p>
                웹사이트에서 쓰는 키이기 때문에 이 옵션을 선택해야 합니다.
              </p>
            </Step>

            <Step number="4" title="Vercel 도메인 기준으로 허용할 주소 입력">
              <p>
                지금 프로젝트는 Vercel 기본 도메인을 그대로 사용할 예정이므로
                아래 값을 넣는 것이 가장 안전합니다.
              </p>

              <div className="space-y-3 rounded-xl border border-white/10 bg-black/30 p-4">
                <p className="font-semibold text-white">추천 입력값 1</p>
                <p>
                  <Code>youtube-tv-seo-site.vercel.app</Code>
                </p>

                <p className="font-semibold text-white">추천 입력값 2</p>
                <p>
                  <Code>youtube-tv-seo-site.vercel.app/*</Code>
                </p>
              </div>

              <p>
                이 프로젝트는 Flutter 앱도 같은 도메인의{" "}
                <Code>/tv-app/</Code> 아래에서 열리므로 위 두 줄이면 기본 구조에
                맞습니다.
              </p>

              <div className="rounded-xl border border-red-400/20 bg-red-500/10 p-4">
                <p className="font-semibold text-red-200">초보자용 주의</p>
                <p className="mt-2 text-sm leading-7 text-red-100 md:text-base">
                  <Code>*.vercel.app/*</Code> 같이 너무 넓게 잡지 마세요.
                  지금은 내 실제 도메인만 넣는 것이 더 안전합니다.
                </p>
              </div>
            </Step>

            <Step number="5" title="API restrictions 설정">
              <p>
                같은 화면 아래쪽의 <strong>API restrictions</strong> 영역으로
                내려갑니다.
              </p>

              <ol className="list-decimal space-y-2 pl-5">
                <li>
                  <strong>Restrict key</strong>를 선택합니다.
                </li>
                <li>
                  목록에서 <strong>YouTube Data API v3</strong>만 체크합니다.
                </li>
                <li>
                  <strong>Save</strong>를 누릅니다.
                </li>
              </ol>

              <p>
                이렇게 하면 이 키는 YouTube Data API v3에만 쓰이게 됩니다.
              </p>
            </Step>
          </Box>

          <Box title="E. Restriction examples for beginners">
            <div className="rounded-xl border border-white/10 bg-black/30 p-5">
              <p className="font-semibold text-white">
                이 프로젝트에서 그대로 써도 되는 초보자용 예시
              </p>

              <div className="mt-4 space-y-3">
                <div>
                  <p className="text-sm font-medium text-zinc-300">
                    Application restrictions
                  </p>
                  <p className="mt-1">
                    <Code>Websites</Code>
                  </p>
                </div>

                <div>
                  <p className="text-sm font-medium text-zinc-300">
                    Website restrictions
                  </p>
                  <p className="mt-1">
                    <Code>youtube-tv-seo-site.vercel.app</Code>
                  </p>
                  <p className="mt-1">
                    <Code>youtube-tv-seo-site.vercel.app/*</Code>
                  </p>
                </div>

                <div>
                  <p className="text-sm font-medium text-zinc-300">
                    API restrictions
                  </p>
                  <p className="mt-1">
                    <Code>YouTube Data API v3</Code>
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-white/10 bg-black/20 p-5">
              <p className="font-semibold text-white">
                나중에 커스텀 도메인을 붙이면?
              </p>

              <p className="mt-3">
                예를 들어 나중에 자체 도메인을 연결하면 그 도메인도 추가해야
                합니다.
              </p>

              <p className="mt-2">예:</p>

              <p className="mt-2">
                <Code>yourdomain.com</Code>
              </p>

              <p className="mt-2">
                <Code>yourdomain.com/*</Code>
              </p>

              <p className="mt-2">
                기존 Vercel 주소와 새 도메인을 함께 넣고, 완전히 이전이 끝난 뒤
                불필요한 주소는 지우는 것이 좋습니다.
              </p>
            </div>
          </Box>

          <Box title="F. 할당량(Quota) 초보자 설명">
            <Step number="1" title="기본 할당량이 뭔가요?">
              <p>
                YouTube Data API 프로젝트는 기본적으로 하루{" "}
                <strong>10,000 units</strong>의 할당량이 주어집니다.
              </p>
            </Step>

            <Step number="2" title="한 번 검색하면 얼마나 쓰나요?">
              <p>
                가장 중요한 것은 <strong>search.list = 100 units</strong>
                입니다.
              </p>

              <p>
                반면 <strong>channels.list</strong>,{" "}
                <strong>playlistItems.list</strong>,{" "}
                <strong>videos.list</strong>는 각각{" "}
                <strong>1 unit</strong>입니다.
              </p>
            </Step>

            <Step number="3" title="키워드 3개 기준으로 하루에 얼마나 가능한가요?">
              <p>
                이 부분은 앱이 실제로 어떤 순서로 호출하는지에 따라 조금
                달라집니다.
              </p>

              <p>
                하지만 초보자가 이해하기 쉽게 가장 현실적인 계산 예시를
                드리겠습니다.
              </p>

              <div className="space-y-3 rounded-xl border border-white/10 bg-black/30 p-4">
                <p className="font-semibold text-white">가정</p>
                <ul className="list-disc space-y-2 pl-5">
                  <li>키워드 1개 검색 = search.list 1번</li>
                  <li>키워드 3개 검색 = search.list 3번</li>
                  <li>기본 검색 비용 = 300 units</li>
                </ul>
              </div>

              <div className="space-y-3 rounded-xl border border-white/10 bg-black/30 p-4">
                <p className="font-semibold text-white">계산</p>
                <p>하루 기본 할당량 10,000 ÷ 300 = 약 33회</p>
                <p>
                  즉, 키워드 3개를 묶어서 채널 찾기 작업을 한다면 아주 단순
                  계산으로는 하루 약 33세트 정도 가능합니다.
                </p>
              </div>

              <p>
                여기에 채널 상세 조회, 플레이리스트 조회, 영상 조회 같은 1
                unit짜리 호출이 조금 더 붙을 수 있지만 가장 큰 비용은 대개{" "}
                <strong>search.list</strong>입니다.
              </p>
            </Step>

            <Step number="4" title="채널 몇 개나 찾을 수 있나요?">
              <p>이것은 딱 잘라 한 숫자로 말하기 어렵습니다.</p>

              <p>이유는 아래 때문입니다.</p>

              <ul className="list-disc space-y-2 pl-5">
                <li>검색 1번당 몇 개 결과를 가져오는지</li>
                <li>추가 페이지를 더 불러오는지</li>
                <li>각 채널의 상세 정보를 더 조회하는지</li>
              </ul>

              <p>
                중요한 점은 추가 페이지를 가져오면 그때마다 quota가 더
                사용된다는 것입니다.
              </p>

              <div className="rounded-xl border border-emerald-400/20 bg-emerald-500/10 p-4">
                <p className="font-semibold text-emerald-200">
                  초보자용 현실적 해석
                </p>
                <p className="mt-2 text-sm leading-7 text-emerald-100 md:text-base">
                  지금 앱이 키워드 3개로 채널 후보를 찾는 구조라면, 하루 10,000
                  quota에서 검색 자체는 대략 30여 세트 정도가 가장 먼저 기준이
                  됩니다.
                </p>
              </div>
            </Step>

            <Step number="5" title="할당량 확인은 어디서 하나요?">
              <ol className="list-decimal space-y-2 pl-5">
                <li>Google Cloud Console로 갑니다.</li>
                <li>
                  <strong>APIs &amp; Services</strong>를 누릅니다.
                </li>
                <li>
                  <strong>Quotas</strong>를 누릅니다.
                </li>
              </ol>

              <p>여기서 사용량을 볼 수 있습니다.</p>
            </Step>
          </Box>

          <Box title="G. 초보자가 가장 많이 하는 실수">
            <div className="space-y-4">
              <div className="rounded-xl border border-red-400/20 bg-red-500/10 p-4">
                <p className="font-semibold text-red-200">
                  실수 1. API를 안 켠 상태에서 키만 만듦
                </p>
                <p className="mt-2 text-red-100">
                  프로젝트를 만들고 <strong>YouTube Data API v3</strong>를
                  반드시 Enable 해야 합니다.
                </p>
              </div>

              <div className="rounded-xl border border-red-400/20 bg-red-500/10 p-4">
                <p className="font-semibold text-red-200">
                  실수 2. 제한을 안 걸고 키를 사용함
                </p>
                <p className="mt-2 text-red-100">
                  최소한 <strong>Websites 제한</strong>과{" "}
                  <strong>YouTube Data API v3 제한</strong>은 같이 거세요.
                </p>
              </div>

              <div className="rounded-xl border border-red-400/20 bg-red-500/10 p-4">
                <p className="font-semibold text-red-200">
                  실수 3. 너무 넓은 referrer를 넣음
                </p>
                <p className="mt-2 text-red-100">
                  <Code>*.vercel.app/*</Code> 같이 너무 넓게 넣지 말고, 현재
                  쓰는 실제 도메인만 넣는 것이 안전합니다.
                </p>
              </div>

              <div className="rounded-xl border border-red-400/20 bg-red-500/10 p-4">
                <p className="font-semibold text-red-200">
                  실수 4. 추가 페이지 비용을 생각 안 함
                </p>
                <p className="mt-2 text-red-100">
                  검색 결과를 다음 페이지로 더 가져오면 quota가 또 사용됩니다.
                </p>
              </div>

              <div className="rounded-xl border border-red-400/20 bg-red-500/10 p-4">
                <p className="font-semibold text-red-200">
                  실수 5. GitHub에 키를 그대로 올림
                </p>
                <p className="mt-2 text-red-100">
                  API 키를 공개 저장소에 그대로 올리지 않는 것이 좋습니다.
                </p>
              </div>
            </div>
          </Box>

          <Box title="H. 출시 전 마지막 체크리스트">
            <ol className="list-decimal space-y-3 pl-5">
              <li>Google Cloud 프로젝트가 맞는지 확인</li>
              <li>YouTube Data API v3가 Enable 상태인지 확인</li>
              <li>API 키가 생성되었는지 확인</li>
              <li>Application restrictions가 Websites로 되어 있는지 확인</li>
              <li>
                아래 2개가 들어가 있는지 확인
                <div className="mt-2 space-y-2">
                  <p>
                    <Code>youtube-tv-seo-site.vercel.app</Code>
                  </p>
                  <p>
                    <Code>youtube-tv-seo-site.vercel.app/*</Code>
                  </p>
                </div>
              </li>
              <li>
                API restrictions가 YouTube Data API v3만 허용하는지 확인
              </li>
              <li>앱에서 실제 검색이 되는지 확인</li>
              <li>Quotas 페이지에서 사용량이 정상적으로 보이는지 확인</li>
            </ol>
          </Box>

          <Box title="I. 한 줄 정리">
            <p>초보자 기준으로 가장 중요한 것은 이것입니다.</p>

            <div className="rounded-xl border border-white/10 bg-black/30 p-5">
              <ol className="list-decimal space-y-3 pl-5">
                <li>Google Cloud Console에서 프로젝트를 만든다</li>
                <li>YouTube Data API v3를 Enable 한다</li>
                <li>API key를 만든다</li>
                <li>Websites 제한에 내 Vercel 도메인만 넣는다</li>
                <li>
                  API restrictions에서 YouTube Data API v3만 허용한다
                </li>
                <li>
                  Quota는 기본 10,000/day이며 search.list는 100 units라는 것을
                  기억한다
                </li>
              </ol>
            </div>
          </Box>
        </div>
      </div>
    </main>
  );
}