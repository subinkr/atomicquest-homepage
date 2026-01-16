import { useEffect, useMemo, useState } from 'react'

import './App.css'

type Feature = {
  title: string
  desc: string
}

type Faq = {
  q: string
  a: string
}

const features: Feature[] = [
  {
    title: '목표를 작은 퀘스트로 쪼개기',
    desc: '큰 목표를 “능력(Ability) → 활동(Activity)” 구조로 나눠, 오늘 할 일만 남깁니다.',
  },
  {
    title: '반복과 알림으로 지속하기',
    desc: '매일/평일/주말/커스텀 반복과 알림으로, 의지보다 시스템에 기대게 합니다.',
  },
  {
    title: '매일 체크로 피드백 받기',
    desc: '오늘의 활동을 선택하고 성공/실패를 기록해 흐름을 놓치지 않습니다.',
  },
  {
    title: '퍼펙트 데이 & 레벨업',
    desc: '선택한 활동을 모두 완료하면 “Perfect Day”가 쌓이고, 꾸준함이 레벨로 환산됩니다.',
  },
]

const howItWorks = [
  {
    step: '1',
    title: '목표를 정한다',
    desc: '“3개월 안에 영어로 발표하기”처럼 한 문장으로 선언합니다.',
  },
  {
    step: '2',
    title: '능력을 정의한다',
    desc: '목표를 이루는 데 필요한 역량을 묶어서 정리합니다. (예: 듣기/말하기/발음)',
  },
  {
    step: '3',
    title: '활동을 설정한다',
    desc: '각 능력별로 실행 가능한 활동을 추가하고 시간/반복 패턴을 지정합니다.',
  },
  {
    step: '4',
    title: '오늘을 체크한다',
    desc: '오늘의 활동을 선택해 체크하고, 퍼펙트 데이를 쌓아 장기적인 성장을 만듭니다.',
  },
]

const faqs: Faq[] = [
  {
    q: 'AtomicQuest는 어떤 서비스인가요?',
    a: '목표를 능력과 활동으로 나누고, 반복/알림/체크로 “지속 가능한 실행”을 돕는 습관형 퀘스트 앱입니다.',
  },
  {
    q: '매일 같은 루틴이 아니어도 쓸 수 있나요?',
    a: '네. 기본 스케줄을 만들고, 그날그날 활동을 추가/제외하며 유연하게 운영할 수 있습니다.',
  },
  {
    q: '알림은 어떤 방식으로 오나요?',
    a: '설정한 시간과 반복 패턴(매일/평일/주말/커스텀)에 맞춰 로컬 알림으로 리마인드합니다.',
  },
]

function LogoMark() {
  return (
    <div className="logoMark" aria-hidden="true">
      <span className="logoDot" />
      <span className="logoText">AtomicQuest</span>
    </div>
  )
}

function SectionTitle({ eyebrow, title, desc }: { eyebrow: string; title: string; desc?: string }) {
  return (
    <div className="sectionTitle">
      <div className="eyebrow">{eyebrow}</div>
      <h2>{title}</h2>
      {desc ? <p className="sectionDesc">{desc}</p> : null}
    </div>
  )
}

function usePathname() {
  const [pathname, setPathname] = useState(() => window.location.pathname)

  useEffect(() => {
    const onPopState = () => setPathname(window.location.pathname)
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])

  return pathname
}

function NavLink({
  href,
  children,
  className,
}: {
  href: string
  children: React.ReactNode
  className?: string
}) {
  const onClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (e.defaultPrevented) return
    if (e.button !== 0) return
    if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) return
    if (href.startsWith('#')) return
    if (!href.startsWith('/')) return

    e.preventDefault()
    window.history.pushState(null, '', href)
    window.dispatchEvent(new PopStateEvent('popstate'))
  }

  return (
    <a href={href} onClick={onClick} className={className}>
      {children}
    </a>
  )
}

function LandingPage() {
  return (
    <div className="page">
      <header className="header">
        <div className="container headerInner">
          <NavLink className="brand" href="#top">
            <LogoMark />
          </NavLink>
          <nav className="nav" aria-label="주요 메뉴">
            <a href="#features">기능</a>
            <a href="#how">사용 흐름</a>
            <a href="#faq">FAQ</a>
          </nav>
          <div className="headerCta">
            <a className="btn btnGhost" href="#cta">
              시작하기
            </a>
          </div>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="container heroInner">
            <div className="heroCopy">
              <div className="pill">목표를 퀘스트로 바꾸는 실행 시스템</div>
              <h1>
                꾸준함이 어려울 때,
                <br />
                목표를 <span className="accent">작게</span> 만들고
                <br />
                오늘을 <span className="accent">완료</span>하세요.
              </h1>
              <p className="heroLead">
                AtomicQuest는 목표를 능력(Ability)과 활동(Activity)으로 쪼개고,
                반복·알림·체크로 “지속 가능한 실행”을 돕는 퀘스트 앱입니다.
              </p>
              <div className="heroActions">
                <a className="btn btnPrimary" href="#cta">
                  지금 시작하기
                </a>
                <a className="btn btnSecondary" href="#features">
                  기능 보기
                </a>
              </div>
              <div className="heroMeta">
                <div className="metaItem">
                  <div className="metaTitle">핵심 개념</div>
                  <div className="metaValue">Goal · Ability · Activity</div>
                </div>
                <div className="metaItem">
                  <div className="metaTitle">지속 장치</div>
                  <div className="metaValue">Repeat · Notification · Check</div>
                </div>
                <div className="metaItem">
                  <div className="metaTitle">성장 지표</div>
                  <div className="metaValue">Perfect Day · Level</div>
                </div>
              </div>
            </div>
            <div className="heroVisual" aria-hidden="true">
              <div className="mockCard">
                <div className="mockHeader">
                  <div className="mockBadge">오늘의 퀘스트</div>
                  <div className="mockDate">Tue</div>
                </div>
                <div className="mockGoal">목표: 영어로 발표하기</div>
                <div className="mockList">
                  <div className="mockRow">
                    <span className="mockCheck" />
                    <div className="mockText">
                      <div className="mockTitle">발음</div>
                      <div className="mockDesc">Shadowing 10분</div>
                    </div>
                    <div className="mockTime">07:30</div>
                  </div>
                  <div className="mockRow">
                    <span className="mockCheck" />
                    <div className="mockText">
                      <div className="mockTitle">말하기</div>
                      <div className="mockDesc">1분 스피치 녹음</div>
                    </div>
                    <div className="mockTime">21:00</div>
                  </div>
                  <div className="mockRow">
                    <span className="mockCheck" />
                    <div className="mockText">
                      <div className="mockTitle">듣기</div>
                      <div className="mockDesc">뉴스 1개 듣기</div>
                    </div>
                    <div className="mockTime">Any</div>
                  </div>
                </div>
                <div className="mockFooter">
                  <div className="mockHint">모두 완료하면 Perfect Day</div>
                  <div className="mockChip">Level 1</div>
                </div>
              </div>
              <div className="glow" />
            </div>
          </div>
        </section>

        <section id="features" className="section">
          <div className="container">
            <SectionTitle
              eyebrow="FEATURES"
              title="목표를 실행으로 연결하는 핵심 기능"
              desc="AtomicQuest는 목표를 ‘구조화’하고, 매일의 ‘실행’을 자동화합니다."
            />

            <div className="grid grid2">
              {features.map((f) => (
                <article key={f.title} className="card">
                  <h3>{f.title}</h3>
                  <p>{f.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="how" className="section alt">
          <div className="container">
            <SectionTitle
              eyebrow="HOW IT WORKS"
              title="4단계로 만드는 나만의 퀘스트"
              desc="큰 목표를 오늘 할 수 있는 단위로 쪼개고, 꾸준함을 시스템화합니다."
            />

            <ol className="steps">
              {howItWorks.map((s) => (
                <li key={s.step} className="step">
                  <div className="stepNo" aria-hidden="true">
                    {s.step}
                  </div>
                  <div className="stepBody">
                    <div className="stepTitle">{s.title}</div>
                    <div className="stepDesc">{s.desc}</div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="faq" className="section">
          <div className="container">
            <SectionTitle eyebrow="FAQ" title="자주 묻는 질문" />
            <div className="faq">
              {faqs.map((f) => (
                <details key={f.q} className="faqItem">
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="cta" className="section cta">
          <div className="container ctaInner">
            <div>
              <h2>오늘의 작은 완료가, 결국 큰 목표를 만듭니다.</h2>
              <p>
                AtomicQuest로 목표를 퀘스트로 만들고,
                반복·알림·체크로 “지속 가능한 실행”을 시작해보세요.
              </p>
            </div>
            <div className="ctaActions">
              <a className="btn btnPrimary" href="#top">
                랜딩 상단으로
              </a>
              <a className="btn btnSecondary" href="../atomicquest" target="_blank" rel="noreferrer">
                앱 코드 보기
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footerInner">
          <div className="footerLeft">
            <LogoMark />
            <div className="footerNote">AtomicQuest · Goal → Ability → Activity</div>
          </div>
          <div className="footerRight">
            <a href="#features">기능</a>
            <a href="#how">사용 흐름</a>
            <a href="#faq">FAQ</a>
            <NavLink href="/privacy">개인정보처리방침</NavLink>
          </div>
        </div>
      </footer>
    </div>
  )
}

function PrivacyPage() {
  const updatedAt = useMemo(() => new Date().toISOString().slice(0, 10), [])

  return (
    <div className="page">
      <header className="header">
        <div className="container headerInner">
          <NavLink className="brand" href="/">
            <LogoMark />
          </NavLink>
          <div className="headerCta">
            <NavLink className="btn btnGhost" href="/">
              홈으로
            </NavLink>
          </div>
        </div>
      </header>

      <main>
        <section className="section">
          <div className="container">
            <SectionTitle eyebrow="PRIVACY" title="개인정보처리방침" desc={`최종 업데이트: ${updatedAt}`} />

            <div className="legal">
              <p>
                AtomicQuest는 서비스 제공을 위해 필요한 최소한의 정보만을 사용합니다. 현재 버전의 앱은 별도의 회원가입
                및 서버 계정을 요구하지 않으며, 개인정보를 수집/전송하지 않습니다.
              </p>

              <h3>1. 수집하는 개인정보</h3>
              <p>AtomicQuest는 개인정보를 수집하지 않습니다.</p>

              <h3>2. 앱 내 저장되는 정보</h3>
              <p>
                사용자가 입력한 목표, 능력, 활동, 체크 기록 등은 기기 내 저장소(로컬)에만 저장될 수 있습니다. 해당 정보는
                앱 기능 제공을 위한 목적이며, 원칙적으로 외부 서버로 전송되지 않습니다.
              </p>

              <h3>3. 알림 권한</h3>
              <p>
                AtomicQuest는 사용자가 설정한 시간에 리마인드를 제공하기 위해 기기의 알림 권한을 사용할 수 있습니다.
                알림 내용은 사용자 설정(활동명 등)을 기반으로 생성될 수 있으며, 외부로 전송되지 않습니다.
              </p>

              <h3>4. 제3자 제공 및 처리 위탁</h3>
              <p>AtomicQuest는 개인정보를 제3자에게 제공하거나 위탁하지 않습니다.</p>

              <h3>5. 문의</h3>
              <p>
                본 방침에 대한 문의는 아래로 연락해 주세요.
                <br />
                이메일: support@atomic.quest
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footerInner">
          <div className="footerLeft">
            <LogoMark />
            <div className="footerNote">AtomicQuest</div>
          </div>
          <div className="footerRight">
            <NavLink href="/">홈</NavLink>
          </div>
        </div>
      </footer>
    </div>
  )
}

function App() {
  const pathname = usePathname()
  const route = pathname.replace(/\/$/, '') || '/'

  return route === '/privacy' ? <PrivacyPage /> : <LandingPage />
}

export default App
