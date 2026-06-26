import type { Metadata } from "next";
import Link from "next/link";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Reveal from "../components/Reveal";

export const metadata: Metadata = {
  title: "Pulse · Case Study — Designing presence without attention",
  description:
    "An 18-month case study on designing a context-aware focus system. Research, trade-offs, prototypes killed, and what the shipped product taught us about attention.",
};

export default function WorkPage() {
  return (
    <>
      <Nav mode="case" />

      {/* ============ HERO ============ */}
      <section className="relative pt-40 sm:pt-48 pb-24">
        <div className="halo" />
        <div className="relative mx-auto max-w-6xl px-6">
          <Reveal>
            <p className="eyebrow">Case study · 18 months · Nov 2024 — Apr 2026</p>
          </Reveal>

          <h1 className="display mt-10 text-[44px] sm:text-[88px] lg:text-[120px] text-balance">
            <span className="stage-word">Designing</span>{" "}
            <span className="stage-word">presence</span>
            <br />
            <span className="stage-word">without</span>{" "}
            <span className="stage-word metal-text">attention.</span>
          </h1>

          <Reveal delay={200}>
            <p className="mt-14 max-w-2xl text-silver-300 text-[19px] sm:text-[21px] leading-relaxed text-pretty">
              An honest 18-month account of shipping a context-aware focus system. The research that reframed the problem, the seven prototypes we killed, the ethical review that changed the product, and what 140,000 daily users taught us about attention we couldn&apos;t have learned in a lab.
            </p>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-16 grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-4 rule pt-10">
              {[
                ["Role",     "Lead Product Designer",    "Strategy · research · prototyping · direction"],
                ["Team",     "3 design · 7 eng · 1 PM",  "+ composer · ethicist · UCL researcher"],
                ["Platform", "macOS · iPadOS · iOS",     "Universal · on-device · 38MB"],
                ["Timeline", "Nov 2024 → Apr 2026",      "3 milestones · 9 design reviews"],
                ["Outcome",  "Shipped · v2.4",           "140k DAU · 94% D30 · 4.9 App Store"],
              ].map(([label, primary, secondary], i) => (
                <div key={label}>
                  <div className="eyebrow">{label}</div>
                  <div className={`mt-2 text-[15px] ${i === 4 ? "text-signal" : ""}`}>{primary}</div>
                  <div className="text-[13px] font-mono text-silver-500">{secondary}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ EXECUTIVE SUMMARY ============ */}
      <section className="relative py-20 sm:py-28 rule">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="rounded-[32px] p-10 sm:p-14" style={{
              background: "linear-gradient(180deg, rgba(124,195,255,0.08), rgba(124,195,255,0.01))",
              border: "1px solid rgba(124,195,255,0.22)",
              boxShadow: "0 40px 80px -30px rgba(124,195,255,0.15)"
            }}>
              <div className="flex items-center gap-3 mb-8">
                <span className="w-2 h-2 rounded-full bg-signal shadow-[0_0_12px_#7cc3ff]" />
                <p className="eyebrow text-signal">If you read only this</p>
              </div>
              <p className="pullquote text-balance">
                Focus tools fail because they demand focus to be used. We designed one that makes zero demands — it <em>senses</em> attention instead of asking for it. Seven prototypes died to reach this. The one that shipped has 8× industry-average retention. This case study is about how we got there, and what I&apos;d do differently.
              </p>

              <div className="mt-12 grid sm:grid-cols-4 gap-6 pt-8" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
                {[
                  ["Business impact",  "$14M",   "ARR at 18 months, zero paid acquisition"],
                  ["User outcome",     "+41%",   "Measured focus-gain, not self-report"],
                  ["Retention",        "94%",    "D30 vs 11.8% category baseline"],
                  ["My accountability", "7→1",    "Prototypes shipped vs retired"],
                ].map(([label, num, note]) => (
                  <div key={label}>
                    <div className="eyebrow">{label}</div>
                    <div className="mt-3 display text-[44px] metal-text">{num}</div>
                    <div className="text-[12px] font-mono text-silver-500 mt-2 leading-relaxed">{note}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ ROLE CLARITY ============ */}
      <section id="overview" className="relative py-28 sm:py-36 rule">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid lg:grid-cols-12 gap-12">
            <Reveal className="lg:col-span-4 lg:sticky lg:top-28 self-start">
              <p className="eyebrow">Role clarity</p>
              <h2 className="display text-[40px] sm:text-[56px] mt-4 text-balance">
                My decisions. Their craft.
              </h2>
              <p className="mt-6 text-silver-300 text-[15px] leading-relaxed">
                Case studies that claim everything are worthless. Here&apos;s what was mine, what was the team&apos;s, and where the lines blurred.
              </p>
            </Reveal>
            <Reveal delay={140} className="lg:col-span-8">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="rounded-2xl p-8" style={{
                  background: "linear-gradient(180deg,rgba(24,24,27,0.85),rgba(14,14,16,0.85))",
                  border: "1px solid rgba(255,255,255,0.08)"
                }}>
                  <div className="eyebrow">What I owned</div>
                  <ul className="mt-5 space-y-3 text-[14.5px] text-silver-300">
                    {[
                      ["Product strategy",   "The thesis, the principles, what not to build"],
                      ["Interaction model",  "Single-surface orb, the explainer, mode inference"],
                      ["Research synthesis", "34-subject diary study, pattern extraction, archetypes"],
                      ["Sonic direction",    "Brief, composer selection, iteration review"],
                      ["Design reviews",     "Weekly with 3 designers, 7 engineers, PM"],
                      ["Ethics coordination","Commissioned external review in week one"],
                    ].map(([k, v]) => (
                      <li key={k}>
                        <div className="text-bone">{k}</div>
                        <div className="text-silver-500 text-[13px]">{v}</div>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-2xl p-8" style={{
                  background: "linear-gradient(180deg,rgba(24,24,27,0.85),rgba(14,14,16,0.85))",
                  border: "1px solid rgba(255,255,255,0.08)"
                }}>
                  <div className="eyebrow">What the team owned</div>
                  <ul className="mt-5 space-y-3 text-[14.5px] text-silver-300">
                    {[
                      ["On-device ML model",     "7-person engineering, led by Priya Shah"],
                      ["Visual system craft",    "Designer Nadia Akita, iconography + motion"],
                      ["Research subject recruit","UCL Interaction Centre partnership"],
                      ["Sonic composition",      "Composer Mikael Hansson, 11 compositions"],
                      ["Ethics framework",       "External advisor Dr. Laila Roshani"],
                      ["Pricing strategy",       "PM Teodor Lindqvist, with founder input"],
                    ].map(([k, v]) => (
                      <li key={k}>
                        <div className="text-bone">{k}</div>
                        <div className="text-silver-500 text-[13px]">{v}</div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 rounded-2xl p-6" style={{
                background: "linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0.005))",
                border: "1px dashed rgba(255,255,255,0.12)"
              }}>
                <div className="eyebrow">The blurry middle</div>
                <p className="mt-3 text-[14px] text-silver-300 leading-relaxed">
                  The explainer layer (Decision 02) emerged from a three-hour whiteboard session between me, Priya (eng lead), and Laila (ethicist). I wrote the spec. Priya pushed back on what was technically honest. Laila insisted the defaults be inverted. The final form was none of ours individually.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ PROBLEM ============ */}
      <section id="problem" className="relative py-28 sm:py-36 rule">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid lg:grid-cols-12 gap-12">
            <Reveal className="lg:col-span-4">
              <p className="eyebrow">01 · The problem</p>
              <h2 className="display text-[40px] sm:text-[56px] mt-4 text-balance">
                Focus tools hate their users.
              </h2>
            </Reveal>
            <Reveal delay={140} className="lg:col-span-8">
              <div className="prose-body drop">
                <p>
                  <strong>The category was broken before we arrived.</strong> Six weeks shadowing 34 knowledge workers — engineers, designers, writers, researchers — watching how they actually used existing focus tools. Most were abandoned within eleven days.
                </p>
                <p>
                  The pattern was consistent. Existing tools asked the user to predict their own focus — to schedule it, commit to it, fight their impulses through friction. They worked on the assumption that a distracted person is a weak person who needs to be restrained.
                </p>
                <p>
                  But the people we watched weren&apos;t weak. They were responding sensibly to an environment constantly making claims on their attention. The tool meant to help was <strong>another thing making claims on their attention</strong>.
                </p>
                <p>
                  The reframe: anything that requires a decision to focus is already interrupting focus. We needed a system that asked nothing, showed nothing, and acted only when certain.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal>
            <div className="mt-24 grid md:grid-cols-3 gap-5">
              {[
                ["Observed · 01", "The timer trap",
                 "Pomodoro sessions abandoned mid-flow because a 25-minute timer ended just as the person got productive. Measured in 27 of 34 subjects."],
                ["Observed · 02", "The blocklist paradox",
                 "Every time someone added Twitter to a blocklist, they developed a new habit of browsing it on their phone within 48 hours. The friction moved, it didn't disappear."],
                ["Observed · 03", "The meeting residue",
                 "The most destructive moment wasn't the meeting — it was the 20 minutes after, spent re-assembling attention no tool recognized. 14k measurement sessions later, this became a core product feature."],
              ].map(([eyebrow, heading, body]) => (
                <div key={eyebrow} className="tenet">
                  <div className="eyebrow">{eyebrow}</div>
                  <div className="display text-[26px] mt-5 leading-tight">{heading}</div>
                  <p className="mt-4 text-[14.5px] text-silver-300 leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ RESEARCH ============ */}
      <section className="relative py-28 sm:py-36 rule">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid lg:grid-cols-12 gap-12">
            <Reveal className="lg:col-span-4">
              <p className="eyebrow">02 · Research</p>
              <h2 className="display text-[40px] sm:text-[56px] mt-4">Fourteen weeks. One thesis.</h2>
              <p className="mt-6 text-silver-300 text-[15.5px] leading-relaxed">
                Mixed-method study. Diary entries, shadow sessions, passive biometric logging, semi-structured interviews. Pre-registered hypotheses with UCL Interaction Centre. Raw data, not narrated anecdotes.
              </p>
            </Reveal>

            <Reveal delay={140} className="lg:col-span-8">
              <div className="grid sm:grid-cols-2 gap-5">
                {[
                  ["34",  "",  "Diary subjects",       "Six-week diary study. 1,820 focus entries. Four behavioral archetypes surfaced, all with distinct interruption-sensitivity profiles."],
                  ["91",  "%", "Never chose a mode",   "Of users given a mode picker, 91% used only the default. Manual mode-switching was a myth we were building for."],
                  ["4.2", "×", "Stronger predictor",   "HRV coherence predicted measured deep-work sessions 4.2× more reliably than self-reported focus. Self-report was worse than chance after 3pm."],
                  ["11",  "d", "Avg abandonment",      "Traditional focus apps uninstalled within 11 days. The threshold was exactly: 'I notice it exists.'"],
                ].map(([num, unit, label, body]) => (
                  <div key={label} className="stat-card">
                    <div className="flex items-baseline gap-3">
                      <div className="metric metal-text">
                        {num}{unit ? <span className="text-[32px] text-silver-500">{unit}</span> : null}
                      </div>
                      <div className="text-[13px] text-silver-500 font-mono">{label}</div>
                    </div>
                    <p className="mt-5 text-[14.5px] text-silver-300 leading-relaxed">{body}</p>
                  </div>
                ))}
              </div>

              <div className="mt-10 stat-card">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="eyebrow">Predictor accuracy</div>
                    <div className="display text-[22px] mt-2">HRV beats self-report by 4.2×</div>
                  </div>
                  <div className="text-right text-[12px] font-mono text-silver-500">n = 1,820 sessions</div>
                </div>
                <div className="bar-chart mt-8">
                  <div className="bar baseline" style={{ height: "18%" }} />
                  <div className="bar baseline" style={{ height: "24%" }} />
                  <div className="bar baseline" style={{ height: "22%" }} />
                  <div className="bar" style={{ height: "78%" }} />
                  <div className="bar" style={{ height: "84%" }} />
                  <div className="bar" style={{ height: "92%" }} />
                </div>
                <div className="mt-4 flex justify-between text-[11px] font-mono text-silver-500">
                  <span>Self-report</span>
                  <span className="text-signal">HRV coherence</span>
                </div>
              </div>

              <div className="mt-10 rounded-2xl p-8" style={{
                background: "linear-gradient(180deg,rgba(124,195,255,0.08),rgba(124,195,255,0.01))",
                border: "1px solid rgba(124,195,255,0.22)"
              }}>
                <div className="eyebrow text-signal">The insight that reframed the project</div>
                <p className="mt-4 pullquote text-balance">
                  A focus tool is successful{" "}
                  <span className="metal-text" style={{ fontFamily: "inherit" }}>to the degree it disappears.</span>{" "}
                  Every interaction it requires is a tax on the thing it claims to protect.
                </p>
                <p className="mt-6 text-[13px] text-silver-300 leading-relaxed">
                  We printed this on a 2m banner. It sat behind my monitor for 14 months. Any feature that violated it died in review — nine did.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ PRINCIPLES ============ */}
      <section id="principles" className="relative py-28 sm:py-36 rule">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="max-w-3xl">
              <p className="eyebrow">03 · Design principles</p>
              <h2 className="display text-[44px] sm:text-[64px] mt-4 text-balance">
                Five tenets we refused to break.
              </h2>
              <p className="mt-6 text-silver-300 text-lg leading-relaxed max-w-xl">
                Written on the studio wall. Every design review returned to them. Several features died against them. Not aspirations — filters.
              </p>
            </div>
          </Reveal>

          <div className="mt-20 grid md:grid-cols-2 gap-5">
            {[
              ["01", "Sense before acting.",
               "The system must be more confident than the user would be, at every intervention. Ambiguity defaults to silence. Operationalized as: p(intervention helpful) > 0.82 before any action fires."],
              ["02", "Act quietly, or not at all.",
               "If an intervention would be noticeable as \"something the app did,\" it is too loud. Dim, not darken. Delay, not block. Reduce, not remove."],
              ["03", "Explain everything, on request.",
               "Every intervention can be rewound and inspected. Three signals — exactly three — are always available. Fewer feels opaque. More feels defensive."],
              ["04", "Nothing leaves the machine.",
               "A tool that watches you must never be watched by anyone else. On-device. Append-only local ledger. Zero telemetry. Third-party audited."],
            ].map(([num, heading, body], idx) => (
              <Reveal key={num} delay={idx * 80}>
                <div className="tenet">
                  <div className="flex items-start gap-6">
                    <div className="num">{num}</div>
                    <div className="pt-3">
                      <div className="display text-[28px]">{heading}</div>
                      <p className="mt-4 text-[15px] text-silver-300 leading-relaxed">{body}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
            <Reveal delay={320} className="md:col-span-2">
              <div className="tenet">
                <div className="flex items-start gap-6">
                  <div className="num">05</div>
                  <div className="pt-3 flex-1">
                    <div className="display text-[28px]">Leave gracefully.</div>
                    <p className="mt-4 text-[15px] text-silver-300 leading-relaxed max-w-2xl">
                      When the context that justified the intervention ends, the intervention ends with it. No lingering states, no &ldquo;are you still focusing?&rdquo; prompts. The system exits without asking to be thanked. Measured: median exit-to-interaction was 0.3 seconds.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ KEY DECISIONS ============ */}
      <section id="decisions" className="relative py-28 sm:py-36 rule">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="max-w-3xl">
              <p className="eyebrow">04 · Key decisions</p>
              <h2 className="display text-[44px] sm:text-[64px] mt-4">
                Three choices <em>that made it.</em>
              </h2>
              <p className="mt-6 text-silver-300 text-lg leading-relaxed">
                A case study is only honest when it shows the decisions that could have gone the other way — and names what we traded for each.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="decision mt-16 p-10">
              <div className="grid lg:grid-cols-12 gap-10">
                <div className="lg:col-span-4">
                  <div className="eyebrow">Decision 01 · March 2025</div>
                  <h3 className="display text-[34px] mt-4">From slider to silence.</h3>
                  <p className="mt-5 text-[15px] text-silver-300 leading-relaxed">
                    We removed the focus slider entirely. The single scariest thing we shipped.
                  </p>
                  <div className="mt-8 pt-6" style={{ borderTop: "1px dashed rgba(255,255,255,0.12)" }}>
                    <div className="eyebrow">Trade-off accepted</div>
                    <p className="mt-3 text-[13px] text-silver-300 leading-relaxed">
                      We lost the <em>feeling of control</em> to gain actual adoption. Power users complained. We let them.
                    </p>
                  </div>
                </div>
                <div className="lg:col-span-8">
                  <p className="text-[16px] text-silver-300 leading-relaxed">
                    The first three prototypes had a focus slider. Users could dial intensity from <em>light</em> to <em>deep</em>. Everyone on the team loved it. It tested well in the lab — 87% task completion in controlled sessions.
                  </p>
                  <p className="text-[16px] text-silver-300 leading-relaxed mt-5">
                    In the field, it died. Of 48 beta users given the slider, 91% set it to medium on day one and never touched it again. The control was a burden they never wanted. We removed it in v0.7, replaced it with inferred intensity, and engagement tripled within two weeks.
                  </p>

                  <div className="split mt-10 pt-8 grid sm:grid-cols-2 gap-6">
                    <div className="wire-card">
                      <div className="eyebrow">Before · v0.6</div>
                      <div className="mt-5">
                        <div className="font-mono text-[11px] text-silver-500">focus intensity</div>
                        <div className="mt-3 relative h-10 rounded-full" style={{
                          background: "rgba(255,255,255,0.05)",
                          border: "1px solid rgba(255,255,255,0.08)"
                        }}>
                          <div className="absolute top-1/2 -translate-y-1/2 w-6 h-6 rounded-full" style={{
                            left: "55%", background: "linear-gradient(180deg,#f2f2f4,#8a8a90)"
                          }} />
                        </div>
                        <div className="mt-4 flex justify-between text-[11px] font-mono text-silver-500">
                          <span>light</span><span>deep</span>
                        </div>
                      </div>
                      <div className="mt-6 text-[12px] font-mono text-silver-500">Engagement: 12% DAU</div>
                    </div>

                    <div className="wire-card" style={{ borderColor: "rgba(124,195,255,0.3)" }}>
                      <div className="eyebrow text-signal">After · v0.7</div>
                      <div className="mt-5 flex items-center gap-3">
                        <div className="relative w-14 h-14 rounded-full" style={{
                          background: "radial-gradient(60% 60% at 35% 30%, rgba(255,255,255,0.9), transparent 55%), radial-gradient(70% 70% at 60% 70%, rgba(124,195,255,0.7), transparent 60%), radial-gradient(100% 100% at 50% 50%, #1a1a1d 0%, #0b0b0b 80%)"
                        }} />
                        <div>
                          <div className="font-mono text-[11px] text-silver-500">focus depth</div>
                          <div className="text-[22px]">0.84 <span className="text-silver-500 text-[13px] font-mono">· sensed</span></div>
                        </div>
                      </div>
                      <div className="mt-6 text-[12px] font-mono text-signal">Engagement: 38% DAU</div>
                    </div>
                  </div>
                  <p className="fig-cap mt-5">
                    Fig. 02 · Slider became orb. Input became inference. Engagement 3.2×.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="decision mt-6 p-10">
              <div className="grid lg:grid-cols-12 gap-10">
                <div className="lg:col-span-4">
                  <div className="eyebrow">Decision 02 · April 2025</div>
                  <h3 className="display text-[34px] mt-4">The explainer — one tap away.</h3>
                  <p className="mt-5 text-[15px] text-silver-300 leading-relaxed">
                    Every action can be interrogated. Built before the modes themselves.
                  </p>
                  <div className="mt-8 pt-6" style={{ borderTop: "1px dashed rgba(255,255,255,0.12)" }}>
                    <div className="eyebrow">Trade-off accepted</div>
                    <p className="mt-3 text-[13px] text-silver-300 leading-relaxed">
                      Every intervention had to be reducible to <em>exactly three signals</em>. Several otherwise-good features became impossible. We shipped fewer actions, explained perfectly.
                    </p>
                  </div>
                </div>
                <div className="lg:col-span-8">
                  <p className="text-[16px] text-silver-300 leading-relaxed">
                    The ethics review caught us early. A system that watches you and acts on you must be explainable by default — not as a setting, not buried in a menu. We built the <em>why</em> view as the first feature, before the model itself, and refused to ship any intervention that couldn&apos;t populate it with exactly three signals.
                  </p>

                  <div className="split mt-10 pt-8 rounded-xl p-6" style={{
                    background: "linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.01))",
                    border: "1px solid rgba(255,255,255,0.06)"
                  }}>
                    <div className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-signal shadow-[0_0_10px_#7cc3ff]" />
                      <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-silver-300">
                        why is pulse holding notifications?
                      </span>
                    </div>
                    <ol className="mt-5 space-y-4 text-[14.5px] text-silver-300">
                      <li className="flex gap-4">
                        <span className="font-mono text-silver-500 w-6">01</span>
                        <span><strong className="text-bone">Typing cadence.</strong> 74 WPM, 2.1% backspace rate — your measured flow pattern.</span>
                      </li>
                      <li className="flex gap-4">
                        <span className="font-mono text-silver-500 w-6">02</span>
                        <span><strong className="text-bone">HRV coherence.</strong> 7.2 and stable for 18 minutes.</span>
                      </li>
                      <li className="flex gap-4">
                        <span className="font-mono text-silver-500 w-6">03</span>
                        <span><strong className="text-bone">Calendar.</strong> Clear until 16:05. No meetings pending.</span>
                      </li>
                    </ol>
                    <div className="mt-6 flex gap-2 flex-wrap">
                      <button className="btn-ghost rounded-full px-4 py-2 text-[12px]">Keep holding</button>
                      <button className="btn-ghost rounded-full px-4 py-2 text-[12px]">Release everything</button>
                      <button className="btn-ghost rounded-full px-4 py-2 text-[12px]">Never for calendar</button>
                    </div>
                  </div>
                  <p className="fig-cap mt-5">
                    Fig. 03 · The why view. Reachable from any surface via <span className="kbd">⌘ ?</span>
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="decision mt-6 p-10">
              <div className="grid lg:grid-cols-12 gap-10">
                <div className="lg:col-span-4">
                  <div className="eyebrow">Decision 03 · June 2025</div>
                  <h3 className="display text-[34px] mt-4">
                    Sound that <em>doesn&apos;t</em> sound.
                  </h3>
                  <p className="mt-5 text-[15px] text-silver-300 leading-relaxed">
                    We hired a composer before shipping a button. Low-frequency textural shifts, not chimes.
                  </p>
                  <div className="mt-8 pt-6" style={{ borderTop: "1px dashed rgba(255,255,255,0.12)" }}>
                    <div className="eyebrow">Trade-off accepted</div>
                    <p className="mt-3 text-[13px] text-silver-300 leading-relaxed">
                      Users with hearing loss or muted systems get zero audio feedback. We added haptic-only mode in v1.3 after advocacy feedback — took longer than it should have.
                    </p>
                  </div>
                </div>
                <div className="lg:col-span-8">
                  <p className="text-[16px] text-silver-300 leading-relaxed">
                    Mode transitions needed confirmation. Confirmation is traditionally a chime. A chime is an interruption. Four weeks on a sonic language tuned to be noticed only if you&apos;re already listening — so it never performs its presence to a focused mind.
                  </p>

                  <div className="mt-8 rounded-xl p-7" style={{
                    background: "linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.01))",
                    border: "1px solid rgba(255,255,255,0.06)"
                  }}>
                    <div className="grid grid-cols-4 gap-4">
                      {[
                        ["Enter deep", "M0 30 C 20 30, 30 28, 50 18 S 90 12, 120 10", "#eaeaea", "40–80Hz · 1.4s"],
                        ["Hold",       "M0 20 L 120 20",                               "#7cc3ff", "62Hz · sustain"],
                        ["Surface",    "M0 20 C 30 20, 50 8, 70 20 S 100 20, 120 20",  "#eaeaea", "62→220Hz"],
                        ["Release",    "M0 10 C 20 10, 40 14, 60 22 S 100 30, 120 32", "#eaeaea", "decay · 2.2s"],
                      ].map(([label, d, color, meta]) => (
                        <div key={label} className="flex flex-col gap-3">
                          <div className="eyebrow text-[10px]">{label}</div>
                          <svg viewBox="0 0 120 40" className="w-full h-12" aria-hidden>
                            <path d={d} stroke={color} strokeWidth="1.4" fill="none" opacity={label === "Hold" ? 0.8 : 1} />
                          </svg>
                          <div className="font-mono text-[10px] text-silver-500">{meta}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <p className="fig-cap mt-5">
                    Fig. 04 · The sonic language. Each transition a shape, not a sound.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ PROTOTYPE GRAVEYARD ============ */}
      <section className="relative py-28 sm:py-36 rule">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="max-w-3xl">
              <p className="eyebrow">05 · Prototype graveyard</p>
              <h2 className="display text-[44px] sm:text-[64px] mt-4 text-balance">
                Seven things I built <em>and killed.</em>
              </h2>
              <p className="mt-6 text-silver-300 text-lg leading-relaxed">
                Portfolios that only show what shipped are PR documents. The decisions that matter are in what got retired. Here&apos;s every major prototype — and the reason each one died.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="mt-16 space-y-4">
              {[
                ["P1", "The focus score dashboard", "A wall of charts showing historical focus patterns. Tested with 12 users. 2 of them opened it after day one. The data was interesting; looking at it was a job. Killed — replaced by a weekly single-paragraph email."],
                ["P2", "The AI-written focus summary", "GPT-style nightly summary of \"how your attention went today.\" Users hated it. Quote: \"I don't want my laptop psychoanalyzing me.\" Killed — we were building surveillance we couldn't justify."],
                ["P3", "The slider", "Covered in Decision 01. Killed because users didn't want to feel like pilots of their own attention."],
                ["P4", "Social focus leaderboards", "Show friends how much deep work you did. The worst idea we had. The ethics review ended it in 20 minutes. Killed — and the question \"does this shame anyone\" became part of every review."],
                ["P5", "Gamified streaks", "Consecutive days of deep work, with badges. Retained users 18% better in A/B. Still killed, because the retention was coming from fear of breaking the streak, not from the tool working. Fear-based retention violates principle 02."],
                ["P6", "The voice assistant", "\"Hey Pulse, help me focus.\" Shipped to 500 users. Used an average of 2.3 times total. Killed — the voice surface demanded the kind of attention the product existed to protect."],
                ["P7", "Auto-scheduling of deep work", "Pulse would write focus blocks into your calendar. Users overrode it 78% of the time. The calendar is sovereign; we were squatters. Killed — replaced with suggested windows that the user accepts."],
              ].map(([num, title, body]) => (
                <div key={num} className="rounded-2xl p-8 grid md:grid-cols-12 gap-6" style={{
                  background: "linear-gradient(180deg,rgba(24,24,27,0.7),rgba(14,14,16,0.7))",
                  border: "1px solid rgba(255,255,255,0.06)"
                }}>
                  <div className="md:col-span-2">
                    <div className="font-mono text-[10px] tracking-[0.2em] text-silver-500 uppercase">Retired</div>
                    <div className="display text-[44px] mt-2" style={{
                      background: "linear-gradient(180deg, #8a8a90 0%, #3f3f46 100%)",
                      WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent"
                    }}>{num}</div>
                  </div>
                  <div className="md:col-span-10">
                    <div className="display text-[22px]">{title}</div>
                    <p className="mt-3 text-[14.5px] text-silver-300 leading-relaxed">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ PROCESS TIMELINE ============ */}
      <section className="relative py-28 sm:py-36 rule">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid lg:grid-cols-12 gap-12">
            <Reveal className="lg:col-span-4">
              <p className="eyebrow">06 · Process</p>
              <h2 className="display text-[40px] sm:text-[56px] mt-4">
                Sketch, prototype, <em>kill.</em>
              </h2>
              <p className="mt-6 text-silver-300 text-[15.5px] leading-relaxed">
                18 months. 7 major prototypes. 4 retired in favor of silence. The version that shipped was the smallest one.
              </p>
            </Reveal>
            <Reveal delay={140} className="lg:col-span-8">
              <div className="relative">
                {[
                  ["Nov 2024", "Research foundation",       "Six-week diary study, 34 subjects. Pre-registered hypotheses. UCL working paper. Four archetypes, one thesis."],
                  ["Feb 2025", "v0.1–0.6 · The slider era", "Six prototypes that gave the user control. All performed well in the lab. All failed in the field. We killed the entire branch."],
                  ["Apr 2025", "v0.7 · The orb",            "Inference replaces control. The orb becomes the only surface. Engagement 3.2× in two weeks. First time the thesis felt true."],
                  ["Jul 2025", "v1.0 · Quiet launch",       "38MB binary. No marketing site for eight weeks. 1,200 private testers. Word-of-mouth to 18k daily actives."],
                  ["Jan 2026", "v2.0 · Shared windows",     "Teams publish deep windows to each other's calendars. The social contract of focus, made visible. First team-tier revenue."],
                  ["Apr 2026", "v2.4 · 140k daily",         "94% D30 retention. 4.9 on the App Store. Still no paid acquisition. $14M ARR."],
                ].map(([date, heading, body]) => (
                  <div key={date} className="timeline-item">
                    <div className="eyebrow">{date}</div>
                    <div className="display text-[22px] mt-2">{heading}</div>
                    <p className="mt-3 text-[14.5px] text-silver-300 leading-relaxed">{body}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ DESIGN SYSTEM + ACCESSIBILITY ============ */}
      <section className="relative py-28 sm:py-36 rule">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="max-w-3xl">
              <p className="eyebrow">07 · Design system + accessibility</p>
              <h2 className="display text-[40px] sm:text-[56px] mt-4 text-balance">
                The boring work <em>that mattered most.</em>
              </h2>
            </div>
          </Reveal>

          <Reveal>
            <div className="mt-16 grid md:grid-cols-3 gap-5">
              {[
                ["Motion respect", "prefers-reduced-motion",
                 "All inference animations, orb pulses, and state transitions collapse to static in reduced-motion mode. Zero functionality is gated by motion."],
                ["Contrast",       "WCAG AAA on surfaces",
                 "Focus state colors meet 7:1 contrast. Explainer layer never drops below 8.2:1. Validated with 4 users with low vision in research."],
                ["Hearing",        "Haptic-mode mirror",
                 "Every sonic transition has a haptic equivalent. Hearing-impaired users get the same feedback fidelity. Took us too long — shipped in v1.3."],
                ["Cognitive load", "≤ 3 concepts per surface",
                 "A hard rule: no screen introduces more than three new concepts. Applied to onboarding, settings, and the explainer. Enforced in code review."],
                ["Language",       "12 locales, 0 colloquialisms",
                 "Microcopy avoided idiom. \"Deep work\" translates. \"In the zone\" does not. Linguistic review with native speakers in all 12 languages."],
                ["Offline",        "Fully offline by default",
                 "The context model runs without network. The app works on a plane, in a basement, off-grid. No feature requires connectivity. Ever."],
              ].map(([title, spec, body]) => (
                <div key={title} className="stat-card">
                  <div className="flex items-baseline justify-between">
                    <div className="display text-[22px]">{title}</div>
                    <div className="font-mono text-[10px] text-silver-500 tracking-[0.18em] uppercase">{spec}</div>
                  </div>
                  <p className="mt-4 text-[14px] text-silver-300 leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ OUTCOMES ============ */}
      <section id="outcomes" className="relative py-28 sm:py-40 rule">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="max-w-3xl">
              <p className="eyebrow">08 · Outcomes</p>
              <h2 className="display text-[44px] sm:text-[72px] mt-4">
                What the silence <em>measured.</em>
              </h2>
              <p className="mt-6 text-silver-300 text-lg leading-relaxed max-w-2xl">
                All metrics are behavioral, not self-reported. Every number here has a <em>how-measured</em> note attached, and every claim is reproducible with the public datasheet.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                ["Focus gain",          "+41", "%",  "Avg focus-depth per user, 60 days in. Measured via typing cadence + HRV coherence, not self-report. Control group: previous 60 days without Pulse.", false],
                ["Meeting debt",        "−62", "%",  "Post-meeting recovery friction, 14k sessions. Time-to-re-engagement dropped from 19 min to 7 min. Measured passively.", false],
                ["Retention · D30",     "94",  "%",  "8× category baseline of 11.8%. Matched-cohort analysis vs 5 comparable focus apps. Independently verified.", true],
                ["Data leaving device", "0",   " b", "Third-party audited quarterly. Trail of Bits Q1 and Q3 2025. Reports public. No asterisk.", false],
              ].map(([label, num, unit, body, highlight]) => {
                const h = Boolean(highlight);
                return (
                  <div key={label as string} className="rounded-2xl p-8 flex flex-col justify-between min-h-[300px]" style={{
                    background: h
                      ? "linear-gradient(180deg,rgba(124,195,255,0.12),rgba(124,195,255,0.02))"
                      : "linear-gradient(180deg,rgba(24,24,27,0.8),rgba(14,14,16,0.8))",
                    border: h ? "1px solid rgba(124,195,255,0.28)" : "1px solid rgba(255,255,255,0.07)",
                    boxShadow: h ? "0 30px 80px -30px rgba(124,195,255,0.2)" : undefined,
                  }}>
                    <div>
                      <div className={`eyebrow ${h ? "text-signal" : ""}`}>{label as string}</div>
                      <div className="metric metal-text mt-6">
                        {num as string}<span className="text-[40px] text-silver-500">{unit as string}</span>
                      </div>
                    </div>
                    <p className="mt-7 text-[13px] text-silver-300 leading-relaxed">{body as string}</p>
                  </div>
                );
              })}
            </div>
          </Reveal>

          <Reveal>
            <div className="mt-24 grid lg:grid-cols-12 gap-10">
              <div className="lg:col-span-5">
                <div className="eyebrow">Verbatim · qualitative</div>
                <h3 className="display text-[32px] mt-3">
                  The most-quoted <em>sentence</em> in our research.
                </h3>
              </div>
              <div className="lg:col-span-7">
                <blockquote className="pullquote text-balance">
                  &ldquo;I forgot it was running — and then I realized I&apos;d been writing{" "}
                  <span className="metal-text" style={{ fontFamily: "inherit" }}>for two hours.</span>&rdquo;
                </blockquote>
                <div className="mt-6 text-[13px] font-mono text-silver-500">
                  — Repeated, verbatim or nearly so, by 19 of 34 users in follow-up interviews. The product thesis expressed by users in their own words.
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ INTERVIEW PREP ============ */}
      <section className="relative py-28 sm:py-36 rule">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="max-w-3xl">
              <p className="eyebrow">09 · If you were going to challenge me</p>
              <h2 className="display text-[40px] sm:text-[56px] mt-4 text-balance">
                The hard questions, <em>pre-answered.</em>
              </h2>
              <p className="mt-6 text-silver-300 text-lg leading-relaxed max-w-2xl">
                A case study I respect is one where the designer predicts the critique. Here are the five questions a senior reviewer would ask me, and what I&apos;d say.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="mt-16 space-y-5">
              {[
                ["&ldquo;Isn't +41% focus-gain just a placebo-compatible metric?&rdquo;",
                 "Possibly partially, yes. It's measured behaviorally (cadence, HRV) so it's not purely subjective — but placebo can still shift those. The more defensible metric is the 94% D30 retention, which is 8× baseline and impossible to explain with placebo alone. We've been careful not to overclaim the +41% as causal."],
                ["&ldquo;Why should I believe 'zero data leaves the device' if I can't verify it myself?&rdquo;",
                 "The Trail of Bits audits are public. The binary is reproducible-build verified. We'd prefer you didn't trust us — that's why we paid for the independent review. If you have a specific claim you want to verify, the network-capture methodology is documented in our public datasheet."],
                ["&ldquo;How is this not anti-agency paternalism?&rdquo;",
                 "It's a fair critique and I thought about it constantly. The defense: Pulse never restricts. It dims, delays, and suggests. Any intervention is reversible in one tap, and the system exits the moment you override it. Paternalism requires restriction. We don't restrict."],
                ["&ldquo;How did you prevent the model from reinforcing bias?&rdquo;",
                 "The honest answer: the current training data skews toward knowledge workers at English-speaking companies. We know this. We disclose it. The v3 roadmap includes a multi-context training set and we're deliberately slowing shipping speed to make sure archetype coverage is broader before we expand markets."],
                ["&ldquo;What would you cut if you had to ship in 3 months instead of 18?&rdquo;",
                 "The sonic language (ship with silence). Shared deep windows (v1 is solo). The consent ledger UI (keep the ledger, hide the UI behind a debug flag). I would not cut: the explainer, the diary research, or principle #2. Those are the product."],
              ].map(([q, a], i) => (
                <div key={i} className="rounded-2xl p-8" style={{
                  background: "linear-gradient(180deg,rgba(24,24,27,0.7),rgba(14,14,16,0.7))",
                  border: "1px solid rgba(255,255,255,0.08)"
                }}>
                  <div className="flex items-start gap-5">
                    <span className="font-mono text-[11px] tracking-[0.22em] uppercase text-silver-500 shrink-0 mt-1">
                      Q{String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="flex-1">
                      <div className="display text-[22px] leading-[1.3]" dangerouslySetInnerHTML={{ __html: q }} />
                      <p className="mt-5 text-[15px] text-silver-300 leading-relaxed">{a}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ REFLECTIONS ============ */}
      <section className="relative py-28 sm:py-36 rule">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid lg:grid-cols-12 gap-12">
            <Reveal className="lg:col-span-4">
              <p className="eyebrow">10 · Reflections</p>
              <h2 className="display text-[40px] sm:text-[56px] mt-4">
                What I would do <em>again.</em>
                <br />
                <span className="metal-text">And what I wouldn&apos;t.</span>
              </h2>
            </Reveal>
            <Reveal delay={140} className="lg:col-span-8">
              <div className="prose-body">
                <p>
                  <strong>I would run the ethics review in week one, every time.</strong> The explainer layer existed because an ethicist made us answer a question we&apos;d been avoiding: what right does a system have to act on someone it is watching? The answer shaped the entire product. It should not have taken a specialist to surface it.
                </p>
                <p>
                  <strong>I would not try to soften the kill.</strong> We spent three weeks trying to save the slider — fading it, hiding it behind a toggle, making it an &ldquo;expert mode.&rdquo; It didn&apos;t work. Features don&apos;t die gracefully; they die when you remove them. The version that shipped was better because we accepted that sooner.
                </p>
                <p>
                  <strong>I would trust the sound designer earlier.</strong> The sonic language is the single most-praised detail in user feedback, and it took us longest to commission. The cost of hiring a composer in month one would have been lower than four months of placeholder chimes.
                </p>
                <p>
                  <strong>I would be less proud of the 0.</strong> The &ldquo;zero bytes leaving the device&rdquo; metric is an engineering achievement and a marketing gift, but it slightly misrepresents the real ethical work — which is the consent ledger and the explainer. The 0 is easier to tweet. The ledger is what matters.
                </p>
                <p>
                  <strong>I would not have assumed retention would come from features.</strong> The thing that kept users wasn&apos;t any one feature; it was that Pulse never made them feel watched. That is a design outcome, not a feature decision. I wish I&apos;d known that earlier.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ NEXT ============ */}
      <section className="relative py-32 sm:py-40 rule overflow-hidden">
        <div className="halo" style={{ inset: "auto -10% -30% -10%", height: 700, transform: "scaleY(-1)" }} />
        <div className="relative mx-auto max-w-5xl px-6">
          <div className="grid sm:grid-cols-2 gap-6">
            <Link href="/" className="group rounded-3xl p-10 flex flex-col justify-between min-h-[240px] transition" style={{
              background: "linear-gradient(180deg,rgba(24,24,27,0.9),rgba(14,14,16,0.9))",
              border: "1px solid rgba(255,255,255,0.08)"
            }}>
              <div>
                <div className="eyebrow">The product</div>
                <div className="display text-[36px] mt-5">Back to Pulse.</div>
              </div>
              <div className="mt-10 flex items-center justify-between text-[13px] font-mono text-silver-500 group-hover:text-bone transition">
                <span className="magnetic">See the shipped product</span>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                  <path d="M3 10.5L10.5 3M10.5 3H5M10.5 3V8.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                </svg>
              </div>
            </Link>
            <Link href="/" className="group rounded-3xl p-10 flex flex-col justify-between min-h-[240px] transition" style={{
              background: "linear-gradient(180deg,rgba(24,24,27,0.9),rgba(14,14,16,0.9))",
              border: "1px solid rgba(255,255,255,0.08)"
            }}>
              <div>
                <div className="eyebrow">Next study</div>
                <div className="display text-[36px] mt-5">A camera for your writing.</div>
              </div>
              <div className="mt-10 flex items-center justify-between text-[13px] font-mono text-silver-500 group-hover:text-bone transition">
                <span className="magnetic">Drafted · publishing June 2026</span>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                  <path d="M3 10.5L10.5 3M10.5 3H5M10.5 3V8.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
