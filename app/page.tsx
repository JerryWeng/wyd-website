// Icon components (inline SVGs — swap for a library later)
function ClockIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2m6-2a10 10 0 11-20 0 10 10 0 0120 0z" />
    </svg>
  )
}

function ShieldIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  )
}

function BellIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
    </svg>
  )
}

const features = [
  {
    icon: <ClockIcon />,
    title: 'Track your time',
    description:
      'See exactly which websites you visit most and how long you spend on each one, updated in real time.',
  },
  {
    icon: <ShieldIcon />,
    title: 'Block distractions',
    description:
      'Create custom block rules for any site that pulls you off track — no more doom-scrolling.',
  },
  {
    icon: <BellIcon />,
    title: 'Stay in control',
    description:
      'Set daily time limits per site and get notified the moment you exceed them.',
  },
]

const steps = [
  { number: '01', title: 'Install the extension', body: 'Add "What are you doing?" to Chrome in one click from the Chrome Web Store.' },
  { number: '02', title: 'Browse as normal', body: 'The extension quietly runs in the background — no setup, no configuration required.' },
  { number: '03', title: 'Review & block', body: 'Open the dashboard to see your habits, then set blocks for any site you want to limit.' },
]

export default function Home() {
  return (
    <main>
      {/* ── Hero ── */}
      <section className="relative px-6 py-32 md:py-44 md:px-12 text-center overflow-hidden" style={{ background: 'linear-gradient(160deg, #f5f3ff 0%, #ffffff 60%)' }}>
        {/* Subtle background blob */}
        <div
          className="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full opacity-20 blur-3xl pointer-events-none"
          style={{ backgroundColor: '#4f46e5' }}
        />
        <div className="relative max-w-3xl mx-auto">
          <span
            className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest mb-6 text-white"
            style={{ backgroundColor: '#4f46e5' }}
          >
            Chrome Extension
          </span>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight tracking-tight mb-6">
            Know exactly what<br />you&apos;re doing online.
          </h1>
          <p className="text-lg md:text-xl text-gray-500 max-w-xl mx-auto mb-10 leading-relaxed">
            Track every site you visit, spot your worst habits, and block the distractions that cost you the most time.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#"
              className="px-7 py-3.5 rounded-full text-white text-sm font-semibold shadow-md hover:opacity-90 transition-opacity"
              style={{ backgroundColor: '#4f46e5' }}
            >
              Add to Chrome — it&apos;s free
            </a>
            <a
              href="#features"
              className="px-7 py-3.5 rounded-full text-sm font-semibold border border-gray-200 text-gray-700 hover:border-indigo-300 hover:text-indigo-700 transition-colors"
            >
              See features
            </a>
          </div>
        </div>
      </section>

      {/* ── Feature cards ── */}
      <section id="features" className="px-6 py-24 md:px-12 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything you need to take back your focus
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              Simple, powerful tools that work quietly in the background until you need them.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-gray-100 p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 text-white"
                  style={{ backgroundColor: '#4f46e5' }}
                >
                  {f.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Demo A — Tracking dashboard ── */}
      <section className="px-6 py-24 md:px-12" style={{ backgroundColor: '#f9f8ff' }}>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest mb-3 block" style={{ color: '#4f46e5' }}>
              Time tracking
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5 leading-snug">
              A clear picture of where your time actually goes
            </h2>
            <p className="text-gray-500 leading-relaxed mb-6">
              The dashboard gives you a real-time breakdown of every site you visit — sorted by time spent, with daily and weekly trends so you can spot patterns.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              {['Per-site time breakdown', 'Daily & weekly history', 'Top sites at a glance'].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: '#4f46e5' }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          {/* Media placeholder */}
          <div className="rounded-2xl border-2 border-dashed border-indigo-200 bg-white aspect-video flex flex-col items-center justify-center gap-2 text-indigo-300 text-sm font-medium">
            <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3 3h18M3 3v18M3 3l18 18" />
            </svg>
            Screenshot / Video
          </div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section className="px-6 py-24 md:px-12 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How it works</h2>
            <p className="text-gray-500 text-lg max-w-md mx-auto">Up and running in under a minute.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((s) => (
              <div key={s.number} className="flex flex-col gap-4">
                <span
                  className="text-5xl font-black leading-none"
                  style={{ color: '#ede9fe' }}
                >
                  {s.number}
                </span>
                <h3 className="text-lg font-semibold text-gray-900">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Demo B — Blocking ── */}
      <section className="px-6 py-24 md:px-12" style={{ backgroundColor: '#f9f8ff' }}>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Media placeholder — left side */}
          <div className="rounded-2xl border-2 border-dashed border-indigo-200 bg-white aspect-video flex flex-col items-center justify-center gap-2 text-indigo-300 text-sm font-medium order-2 md:order-1">
            <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3 3h18M3 3v18M3 3l18 18" />
            </svg>
            Screenshot / Video
          </div>
          <div className="order-1 md:order-2">
            <span className="text-xs font-bold uppercase tracking-widest mb-3 block" style={{ color: '#4f46e5' }}>
              Custom blocking
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5 leading-snug">
              Block any site with one rule
            </h2>
            <p className="text-gray-500 leading-relaxed mb-6">
              Add any domain to your blocklist and the extension handles the rest. Set time windows, daily limits, or block sites outright — entirely up to you.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              {['Block by domain or keyword', 'Schedule blocks by time of day', 'Override with a timer for exceptions'].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: '#4f46e5' }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section
        className="px-6 py-28 md:px-12 text-center"
        style={{ backgroundColor: '#1e1b4b' }}
      >
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
            Ready to find out what you&apos;re actually doing?
          </h2>
          <p className="text-indigo-300 text-lg mb-10 leading-relaxed">
            Join thousands of people who&apos;ve taken back control of their online time.
          </p>
          <a
            href="#"
            className="inline-block px-8 py-4 rounded-full text-white text-base font-semibold hover:opacity-90 transition-opacity shadow-lg"
            style={{ backgroundColor: '#4f46e5' }}
          >
            Add to Chrome — it&apos;s free
          </a>
        </div>
      </section>
    </main>
  )
}
