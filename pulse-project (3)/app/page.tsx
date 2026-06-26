import Link from "next/link";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Reveal from "./components/Reveal";
import Card3D from "./components/Card3D";
import ModeSwitcher from "./components/ModeSwitcher";

export default function Page() {
  return (
    <>
      <Nav mode="product" />

      {/* =========================================================
          01 · HERO
          ========================================================= */}
      <section className="relative pt-40 sm:pt-48 pb-28 sm:pb-36 overflow-hidden">
        <div className="halo" />
        <div className="grid-lines" />

        <div className="relative mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="flex justify-center mb-10">
              <div className="inline-flex items-center gap-2.5 nav-chip rounded-full pl-1.5 pr-3.5 py-1.5 shadow-pill">
                <span className="relative flex w-5 h-5 items-center justify-center">
                  <span className="absolute inset-0 rounded-full bg-signal/30 animate-ping" />
                  <span className="w-2 h-2 rounded-full bg-signal" />
                </span>
                <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-silver-300">
                  Now sensing <span className="divider-dot" /> cognitive context v2.4
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={60}>
            <p className="eyebrow text-center">A context-aware focus system</p>
          </Reveal>

          <h1 className="display text-center text-[56px] sm:text-[96px] lg:text-[136px] mt-6 text-balance">
            <span className="stage-word">Focus,</span>
            <br />
            <span className="stage-word metal-text">aware</span>{" "}
            <span className="stage-word"><em>of</em></span>{" "}
            <span className="stage-word metal-text">you.</span>
          </h1>

          <Reveal delay={800}>
            <p className="mt-10 text-center max-w-2xl mx-auto text-silver-300 text-lg sm:text-xl leading-relaxed text-pretty">
              Pulse listens to your calendar, rhythm, and environment — then quietly reshapes what you see, hear, and notice. No blocklists. No timers. Just presence, when you need it.
            </p>
          </Reveal>

          {/* Problem statement + CTAs */}
          <Reveal delay={900}>
            <div className="mt-14 flex flex-col items-center gap-5 max-w-2xl mx-auto text-center">
              <p className="font-mono text-[11px] tracking-[0.22em] uppercase text-silver-500">
                The problem
              </p>
              <p className="display text-[22px] sm:text-[28px] leading-[1.25] text-balance text-bone">
                Existing focus tools ask distracted people to <em>predict</em> their own attention.
                <br />
                <span className="text-silver-300">We asked what a system would look like if it never interrupted to help.</span>
              </p>

              {/* CTA row — two glossy violet buttons */}
              <div className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/work"
                  className="group relative inline-flex items-center gap-3 rounded-full px-10 py-5 text-[15px] font-semibold tracking-wide text-white overflow-hidden transition-transform duration-500 hover:-translate-y-1"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.04) 10%, transparent 35%), linear-gradient(130deg, transparent 35%, rgba(255,255,255,0.10) 48%, rgba(210,180,255,0.18) 50%, rgba(255,255,255,0.06) 53%, transparent 68%), linear-gradient(165deg, #6b36d4 0%, #4a22a8 35%, #3a1680 70%, #2a1066 100%)",
                    border: "1px solid rgba(225, 200, 255, 0.4)",
                    boxShadow:
                      "0 2px 0 rgba(255,255,255,0.3) inset, 0 1px 0 rgba(255,255,255,0.55) inset, 0 -1px 0 rgba(0,0,0,0.35) inset, 0 0 0 1px rgba(230,215,255,0.08) inset, 0 0 40px rgba(140,90,230,0.35), 0 20px 50px -15px rgba(0,0,0,0.9), 0 30px 70px -20px rgba(125,79,224,0.55)",
                    letterSpacing: "0.05em",
                  }}
                >
                  <span
                    aria-hidden
                    className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background:
                        "linear-gradient(115deg, transparent 35%, rgba(255,255,255,0.15) 48%, rgba(220,195,255,0.35) 50%, rgba(255,255,255,0.1) 52%, transparent 65%)",
                      animation: "shine 1.4s ease-in-out infinite",
                    }}
                  />
                  <span className="relative z-10 uppercase">View Full Case Study</span>
                  <svg
                    width="16" height="16" viewBox="0 0 16 16" fill="none"
                    className="relative z-10 transition-transform duration-500 group-hover:translate-x-1"
                    aria-hidden
                  >
                    <path d="M4 12L12 4M12 4H6M12 4V10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>

                {/* Open in Figma — UPDATED to new community prototype URL */}
                <a
                  href="https://www.figma.com/proto/viW83K4WLdDSGYd3CtV2Lj/Pulse-%E2%80%94-Context-Aware-Focus-System--Community-?node-id=0-1&t=Vrh6xUQsbhw82D9z-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center gap-3 rounded-full px-10 py-5 text-[15px] font-semibold tracking-wide text-white overflow-hidden transition-transform duration-500 hover:-translate-y-1"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.04) 10%, transparent 35%), linear-gradient(130deg, transparent 35%, rgba(255,255,255,0.10) 48%, rgba(210,180,255,0.18) 50%, rgba(255,255,255,0.06) 53%, transparent 68%), linear-gradient(165deg, #6b36d4 0%, #4a22a8 35%, #3a1680 70%, #2a1066 100%)",
                    border: "1px solid rgba(225, 200, 255, 0.4)",
                    boxShadow:
                      "0 2px 0 rgba(255,255,255,0.3) inset, 0 1px 0 rgba(255,255,255,0.55) inset, 0 -1px 0 rgba(0,0,0,0.35) inset, 0 0 0 1px rgba(230,215,255,0.08) inset, 0 0 40px rgba(140,90,230,0.35), 0 20px 50px -15px rgba(0,0,0,0.9), 0 30px 70px -20px rgba(125,79,224,0.55)",
                    letterSpacing: "0.05em",
                  }}
                >
                  <span
                    aria-hidden
                    className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background:
                        "linear-gradient(115deg, transparent 35%, rgba(255,255,255,0.15) 48%, rgba(220,195,255,0.35) 50%, rgba(255,255,255,0.1) 52%, transparent 65%)",
                      animation: "shine 1.4s ease-in-out infinite",
                    }}
                  />
                  <svg
                    width="14" height="20" viewBox="0 0 14 20" fill="none"
                    className="relative z-10"
                    aria-hidden
                  >
                    <path d="M3.5 20a3.5 3.5 0 1 0 0-7H7v3.5A3.5 3.5 0 0 1 3.5 20z" fill="#E64A19"/>
                    <path d="M0 10a3.5 3.5 0 0 1 3.5-3.5H7V13H3.5A3.5 3.5 0 0 1 0 10z" fill="#7B1FA2"/>
                    <path d="M0 3.5A3.5 3.5 0 0 1 3.5 0H7v7H3.5A3.5 3.5 0 0 1 0 3.5z" fill="#1976D2"/>
                    <path d="M7 0h3.5a3.5 3.5 0 1 1 0 7H7V0z" fill="#388E3C"/>
                    <path d="M14 10a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" fill="#F57C00"/>
                  </svg>
                  <span className="relative z-10 uppercase">Open in Figma</span>
                  <svg
                    width="16" height="16" viewBox="0 0 16 16" fill="none"
                    className="relative z-10 transition-transform duration-500 group-hover:translate-x-1"
                    aria-hidden
                  >
                    <path d="M4 12L12 4M12 4H6M12 4V10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>

              <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-silver-500 mt-2">
                18-month study <span className="divider-dot" /> 34 subjects <span className="divider-dot" /> 7 prototypes killed
              </p>
            </div>
          </Reveal>

          {/* 3D stacked panels */}
          <Reveal delay={1000}>
            <div className="mt-20 sm:mt-24">
              <div className="stack-3d">
                <div className="stack-panel p1">
                  <div className="panel-chrome">
                    <span className="panel-chrome-dot" />
                    <span className="panel-chrome-dot" />
                    <span className="panel-chrome-dot" />
                    <span className="panel-chrome-title">FOCUS · 14:22</span>
                  </div>
                  <div className="panel-body">
                    <span className="panel-label">STATE · DEEP WORK</span>
                    <span className="panel-big">0.84</span>
                    <div className="panel-bar">
                      <div className="panel-bar-fill" style={{ width: "84%" }} />
                    </div>
                  </div>
                </div>

                <div className="stack-panel p2">
                  <div className="panel-chrome">
                    <span className="panel-chrome-dot" />
                    <span className="panel-chrome-dot" />
                    <span className="panel-chrome-dot" />
                    <span className="panel-chrome-title">HRV · 7.2 STABLE</span>
                  </div>
                  <div className="panel-body">
                    <span className="panel-label">TYPING CADENCE</span>
                    <span className="panel-big">74 wpm</span>
                    <div className="panel-bar">
                      <div className="panel-bar-fill" style={{ width: "72%" }} />
                    </div>
                  </div>
                </div>

                <div className="stack-panel p3">
                  <div className="panel-chrome">
                    <span className="panel-chrome-dot" />
                    <span className="panel-chrome-dot" />
                    <span className="panel-chrome-dot" />
                    <span className="panel-chrome-title">14 SIGNALS ACTIVE</span>
                  </div>
                  <div className="panel-body">
                    <span className="panel-label">NEXT SURFACE · 4 MIN</span>
                    <span className="panel-big">3 active</span>
                    <div className="panel-bar">
                      <div className="panel-bar-fill" style={{ width: "42%" }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={1100}>
            <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                ["Detected signals", "14", "."],
                ["Avg. focus gain", "+41", "%"],
                ["Interventions / day", "3", "—6"],
                ["Background CPU", "0.9", "%"],
              ].map(([label, value, suffix]) => (
                <div key={label}>
                  <div className="font-mono text-[11px] tracking-[0.2em] text-silver-500 uppercase">
                    {label}
                  </div>
                  <div className="mt-3 display text-4xl metal-text">
                    {value}
                    <em>{suffix}</em>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* =========================================================
          02 · MARQUEE
          ========================================================= */}
      <section className="relative py-10 border-y border-white/5 overflow-hidden">
        <div className="marquee font-mono text-[12px] tracking-[0.2em] uppercase text-silver-500">
          {[0, 1].map((i) => (
            <div key={i} className="flex items-center gap-16 pr-16" aria-hidden={i === 1}>
              <span>Trusted by makers at</span>
              {["Figma", "Linear", "Vercel", "Arc", "Notion", "Ramp", "Raycast", "Framer", "Stripe", "Retool"].map(
                (name, j) => (
                  <span key={`${i}-${j}`} className="flex items-center gap-16">
                    <span className="text-bone/80">{name}</span>
                    <span>·</span>
                  </span>
                )
              )}
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================
          03 · SIGNAL CARD DECK
          ========================================================= */}
      <section id="how" className="relative py-32 sm:py-40">
        <div className="halo" style={{ opacity: 0.5, inset: "-10% -10% auto -10%", height: 600 }} />
        <div className="relative mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="max-w-3xl">
              <p className="eyebrow">Sensing layer · 01</p>
              <h2 className="display text-[44px] sm:text-[72px] mt-5 text-balance">
                It reads <em>fourteen</em> signals,
                <br />
                <span className="metal-text">then fades into the background.</span>
              </h2>
              <p className="mt-7 text-silver-300 text-lg leading-relaxed max-w-xl text-pretty">
                Calendar density, typing cadence, ambient noise, heart variability, window focus, even the language you&apos;re writing in. Pulse fuses them into a single score — <span className="text-bone">focus depth</span> — and acts only when it&apos;s certain.
              </p>
            </div>
          </Reveal>

          <div className="deck mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card3D className="p-8 min-h-[320px] flex flex-col justify-between">
              <div className="lift">
                <div className="flex items-start justify-between">
                  <div className="chip">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
                      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" stroke="#eaeaea" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </div>
                  <span className="font-mono text-[10px] tracking-[0.2em] text-silver-500 uppercase">01 / Ambient</span>
                </div>
                <h3 className="display text-[28px] mt-8">Ambient <em>awareness</em></h3>
                <p className="mt-3 text-silver-300 text-[15px] leading-relaxed">
                  Recognizes open-plan noise, side conversations, and dropped-in messages — dampens what breaks flow.
                </p>
              </div>
              <div className="lift mt-8 flex items-center justify-between text-[12px] font-mono text-silver-500">
                <span>42 dB · café pattern</span>
                <div className="wave"><span /><span /><span /><span /><span /><span /><span /></div>
              </div>
            </Card3D>

            <Card3D className="p-8 min-h-[320px] flex flex-col justify-between lg:row-span-2 lg:min-h-[660px]">
              <div className="lift">
                <div className="flex items-start justify-between">
                  <div className="chip">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
                      <circle cx="12" cy="12" r="9" stroke="#eaeaea" strokeWidth="1.5" />
                      <path d="M12 7v5l3 2" stroke="#eaeaea" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </div>
                  <span className="font-mono text-[10px] tracking-[0.2em] text-silver-500 uppercase">02 / Temporal</span>
                </div>
                <h3 className="display text-[40px] sm:text-[52px] mt-10 leading-[0.92]">
                  Your <em>chronotype,</em><br /> respected.
                </h3>
                <p className="mt-4 text-silver-300 text-[15.5px] leading-relaxed max-w-md">
                  Pulse learns the hours when your prose flows, when your code compiles cleanly, when your mind drifts. It stops scheduling deep work against biology.
                </p>

                <div className="mt-10 rounded-2xl p-5" style={{
                  background: "linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.01))",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}>
                  <div className="flex items-center justify-between text-[11px] font-mono text-silver-500">
                    <span>FOCUS DEPTH · 24H</span>
                    <span>Peak <span className="text-signal">10:42</span></span>
                  </div>
                  <svg viewBox="0 0 300 80" className="mt-3 w-full h-16" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="grad-hero-chart" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0%" stopColor="#7cc3ff" stopOpacity="0.45" />
                        <stop offset="100%" stopColor="#7cc3ff" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path d="M0 65 C 25 55, 40 25, 60 22 S 100 58, 130 50 S 170 8, 200 14 S 240 55, 270 48 S 295 30, 300 32 L 300 80 L 0 80 Z" fill="url(#grad-hero-chart)" />
                    <path d="M0 65 C 25 55, 40 25, 60 22 S 100 58, 130 50 S 170 8, 200 14 S 240 55, 270 48 S 295 30, 300 32" stroke="#eaeaea" strokeWidth="1.2" fill="none" />
                    <circle cx="200" cy="14" r="3" fill="#7cc3ff" stroke="#fff" strokeWidth="0.8" />
                  </svg>
                  <div className="mt-2 flex justify-between text-[10px] font-mono text-silver-500">
                    <span>06</span><span>10</span><span>14</span><span>18</span><span>22</span>
                  </div>
                </div>
              </div>

              <div className="lift mt-8 flex items-center justify-between border-t border-white/5 pt-5">
                <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-silver-500">Next deep window</span>
                <span className="font-mono text-[12px] text-bone">Today · 14:20 → 16:05</span>
              </div>
            </Card3D>

            <Card3D className="p-8 min-h-[320px] flex flex-col justify-between">
              <div className="lift">
                <div className="flex items-start justify-between">
                  <div className="chip">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
                      <path d="M12 3v3M12 18v3M3 12h3M18 12h3" stroke="#eaeaea" strokeWidth="1.5" strokeLinecap="round" />
                      <circle cx="12" cy="12" r="5" stroke="#eaeaea" strokeWidth="1.5" />
                      <circle cx="12" cy="12" r="1.5" fill="#7cc3ff" />
                    </svg>
                  </div>
                  <span className="font-mono text-[10px] tracking-[0.2em] text-silver-500 uppercase">03 / Biometric</span>
                </div>
                <h3 className="display text-[28px] mt-8">HRV, <em>not</em> heart rate.</h3>
                <p className="mt-3 text-silver-300 text-[15px] leading-relaxed">
                  Reads variability to catch stress spikes the moment they appear — before you notice the tightness in your shoulders.
                </p>
              </div>
              <div className="lift mt-8 flex items-center gap-3 text-[12px] font-mono text-silver-500">
                <span className="mode-dot active" />
                <span>Coherence · 7.2</span>
                <span className="ml-auto text-signal">stable</span>
              </div>
            </Card3D>

            <Card3D className="p-8 min-h-[320px] flex flex-col justify-between">
              <div className="lift">
                <div className="flex items-start justify-between">
                  <div className="chip">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
                      <rect x="3" y="4" width="18" height="16" rx="2" stroke="#eaeaea" strokeWidth="1.5" />
                      <path d="M8 2v4M16 2v4M3 10h18" stroke="#eaeaea" strokeWidth="1.5" />
                    </svg>
                  </div>
                  <span className="font-mono text-[10px] tracking-[0.2em] text-silver-500 uppercase">04 / Calendar</span>
                </div>
                <h3 className="display text-[28px] mt-8">Meeting <em>debt,</em> paid.</h3>
                <p className="mt-3 text-silver-300 text-[15px] leading-relaxed">
                  Detects recovery windows after long calls. Delays Slack, mutes email, holds the door.
                </p>
              </div>
              <div className="lift mt-8 flex items-center gap-3 text-[12px] font-mono text-silver-500">
                <span>Buffer</span>
                <div className="flex-1 h-1.5 rounded-full bg-white/5 overflow-hidden">
                  <div className="h-full rounded-full" style={{ width: "72%", background: "linear-gradient(90deg,#7cc3ff,#eaeaea)" }} />
                </div>
                <span>12 min</span>
              </div>
            </Card3D>

            <Card3D className="p-8 min-h-[320px] flex flex-col justify-between">
              <div className="lift">
                <div className="flex items-start justify-between">
                  <div className="chip">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
                      <path d="M4 17l5-5 4 4 7-8" stroke="#eaeaea" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span className="font-mono text-[10px] tracking-[0.2em] text-silver-500 uppercase">05 / Behavioral</span>
                </div>
                <h3 className="display text-[28px] mt-8">Typing <em>cadence.</em></h3>
                <p className="mt-3 text-silver-300 text-[15px] leading-relaxed">
                  Faster fingers with fewer backspaces? You&apos;re in flow. Pulse protects it — silently.
                </p>
              </div>
              <div className="lift mt-8 font-mono text-[12px] text-silver-500 flex justify-between">
                <span>WPM · 74</span>
                <span>Correction · 2.1%</span>
              </div>
            </Card3D>
          </div>

          <Reveal>
            <p className="mt-12 text-center font-mono text-[11px] tracking-[0.2em] uppercase text-silver-500">
              Tap any card to inspect · <span className="kbd">↵</span> focuses · <span className="kbd">⌘</span> drills in
            </p>
          </Reveal>
        </div>
      </section>

      {/* =========================================================
          04 · MODES
          ========================================================= */}
      <section id="modes" className="relative py-32 sm:py-40 border-t border-white/5">
        <div className="relative mx-auto max-w-6xl px-6">
          <Reveal><ModeSwitcher /></Reveal>
        </div>
      </section>

      {/* =========================================================
          05 · SYSTEM
          ========================================================= */}
      <section id="system" className="relative py-32 sm:py-40 border-t border-white/5">
        <div className="relative mx-auto max-w-6xl px-6">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            <Reveal className="lg:col-span-5">
              <p className="eyebrow">Architecture · 03</p>
              <h2 className="display text-[44px] sm:text-[64px] mt-4 text-balance">
                On-device.<br />
                <em>By design.</em>
              </h2>
              <p className="mt-6 text-silver-300 text-lg leading-relaxed text-pretty">
                Signals never leave your machine. The model is 38MB, compiled to the Neural Engine, and audited quarterly by third parties.
              </p>
              <ul className="mt-8 space-y-4 text-[14.5px]">
                {[
                  ["Zero telemetry.", "No pattern, timestamp, or state leaves your device."],
                  ["Explainable.", "Every intervention shows the three signals that triggered it."],
                  ["Revocable.", "Any sensor, any signal, disabled in a single click."],
                ].map(([title, body]) => (
                  <li key={title} className="flex gap-3">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-signal shrink-0 shadow-[0_0_10px_#7cc3ff]" />
                    <span className="text-silver-300">
                      <span className="text-bone">{title}</span> {body}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={160} className="lg:col-span-7">
              <div className="space-y-3">
                {[
                  ["04", "Response", "surface", "screen · audio · notifications · os", "11 hooks", false],
                  ["03", "Policy", "layer", "user-editable rules · explainer", "open", false],
                  ["02", "Context", "model", "on-device · 38mb · neural engine", "core", true],
                  ["01", "Signal", "bus", "sensors · apps · calendar · hrv", "14 streams", false],
                  ["00", "Consent", "ledger", "append-only · local · yours", "sealed", false],
                ].map(([num, title, emphasis, subtitle, aside, active]) => {
                  const isActive = Boolean(active);
                  return (
                    <div key={num as string} className="rounded-2xl p-5 flex items-center gap-5" style={{
                      background: isActive ? "linear-gradient(180deg,rgba(124,195,255,0.12),rgba(124,195,255,0.02))" : "linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.01))",
                      border: isActive ? "1px solid rgba(124,195,255,0.28)" : "1px solid rgba(255,255,255,0.08)",
                      boxShadow: isActive ? "0 20px 60px -30px rgba(124,195,255,0.3)" : undefined,
                    }}>
                      <span className="font-mono text-[10px] text-silver-500 tracking-[0.2em] w-12">{num as string}</span>
                      <div className="flex-1">
                        <div className="display text-[22px]">
                          {title as string} <em>{emphasis as string}</em>
                        </div>
                        <div className="text-[13px] text-silver-500 font-mono">{subtitle as string}</div>
                      </div>
                      <div className={`font-mono text-[11px] ${isActive ? "text-signal" : "text-silver-500"}`}>
                        {aside as string}
                      </div>
                    </div>
                  );
                })}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* =========================================================
          06 · QUOTE
          ========================================================= */}
      <section className="relative py-32 sm:py-44 border-t border-white/5 overflow-hidden">
        <div className="halo" style={{ opacity: 0.5 }} />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <Reveal>
            <span className="display text-[80px] text-silver-700 block leading-none">&ldquo;</span>
            <blockquote className="display text-[32px] sm:text-[48px] mt-2 leading-[1.05] text-balance">
              It&apos;s the <em>first</em> piece of software that has ever made me feel like the computer is <span className="metal-text">on my side.</span>
            </blockquote>
            <div className="mt-12 flex items-center justify-center gap-4">
              <span className="w-10 h-10 rounded-full" style={{ background: "radial-gradient(60% 60% at 30% 30%, #e5e5ea, #5a5a60)" }} />
              <div className="text-left">
                <div className="text-[14px]">Maya Reyes</div>
                <div className="text-[12px] font-mono text-silver-500 tracking-wide">Principal Engineer · writing at 10:42am</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* =========================================================
          07 · PRICING
          ========================================================= */}
      <section id="pricing" className="relative py-32 sm:py-40 border-t border-white/5">
        <div className="relative mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="max-w-2xl">
              <p className="eyebrow">Pricing · 04</p>
              <h2 className="display text-[44px] sm:text-[64px] mt-4 text-balance">
                One price.<br /><em>Quiet</em> forever.
              </h2>
              <p className="mt-6 text-silver-300 text-lg leading-relaxed">
                No tiers for the parts that matter. The context engine is the same on every plan.
              </p>
            </div>
          </Reveal>

          <div className="deck mt-16 grid md:grid-cols-3 gap-6">
            <Card3D className="p-8 flex flex-col">
              <div className="lift">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-silver-500">Solo</span>
                  <span className="font-mono text-[11px] text-silver-500">01</span>
                </div>
                <div className="mt-8 display text-[56px] metal-text">
                  $9<em className="text-silver-500 text-[20px] not-italic">/mo</em>
                </div>
                <p className="mt-3 text-silver-300 text-[14px] leading-relaxed">
                  For one mind, one machine. All 14 signals, all four modes.
                </p>
                <ul className="mt-8 space-y-3 text-[14px] text-silver-300">
                  {["On-device context model", "macOS, iPadOS, iOS", "Personal timeline export"].map((l) => (
                    <li key={l} className="flex gap-3">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-silver-500" />
                      {l}
                    </li>
                  ))}
                </ul>
              </div>
            </Card3D>

            <Card3D className="p-8 flex flex-col relative">
              <span className="tier-glow" />
              <div className="lift">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-signal">Studio</span>
                  <span className="font-mono text-[11px] text-silver-500">02 · most chosen</span>
                </div>
                <div className="mt-8 display text-[56px] metal-text">
                  $19<em className="text-silver-500 text-[20px] not-italic">/mo</em>
                </div>
                <p className="mt-3 text-silver-300 text-[14px] leading-relaxed">
                  For a small team that defends each other&apos;s calendars.
                </p>
                <ul className="mt-8 space-y-3 text-[14px] text-silver-300">
                  {["Everything in Solo", "Shared deep-work windows", "Meeting debt analytics", "Slack · Linear · Figma hooks"].map((l) => (
                    <li key={l} className="flex gap-3">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-signal shadow-[0_0_8px_#7cc3ff]" />
                      {l}
                    </li>
                  ))}
                </ul>
              </div>
            </Card3D>

            <Card3D className="p-8 flex flex-col">
              <div className="lift">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-silver-500">Atelier</span>
                  <span className="font-mono text-[11px] text-silver-500">03</span>
                </div>
                <div className="mt-8 display text-[56px] metal-text">Custom</div>
                <p className="mt-3 text-silver-300 text-[14px] leading-relaxed">
                  Deployed on your fleet. Private audits. Fleet-wide context policies.
                </p>
                <ul className="mt-8 space-y-3 text-[14px] text-silver-300">
                  {["SSO · SCIM · MDM", "On-prem context model", "Quarterly red-team audits"].map((l) => (
                    <li key={l} className="flex gap-3">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-silver-500" />
                      {l}
                    </li>
                  ))}
                </ul>
              </div>
            </Card3D>
          </div>
        </div>
      </section>

      {/* =========================================================
          08 · CLOSER
          ========================================================= */}
      <section id="download" className="relative py-32 sm:py-44 border-t border-white/5 overflow-hidden">
        <div className="halo" style={{ inset: "auto -10% -30% -10%", height: 800, transform: "scaleY(-1)" }} />
        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <Reveal><p className="eyebrow">Ready when you are</p></Reveal>
          <Reveal delay={120}>
            <h2 className="display text-[56px] sm:text-[104px] mt-6 text-balance">
              Put the <em>pulse</em><br />
              <span className="metal-text">in your day.</span>
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-10 text-silver-300 text-lg max-w-xl mx-auto text-pretty">
              38MB. Installs in nine seconds. Works without an account. Uninstalls leaving nothing behind.
            </p>
          </Reveal>
          <Reveal delay={360}>
            <p className="mt-10 font-mono text-[11px] tracking-[0.2em] uppercase text-silver-500">
              Universal binary <span className="divider-dot" /> 38MB <span className="divider-dot" /> no account required <span className="divider-dot" /> notarized
            </p>
          </Reveal>
        </div>
      </section>

      <Footer />
    </>
  );
}
