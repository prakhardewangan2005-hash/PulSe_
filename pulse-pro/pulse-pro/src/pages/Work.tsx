import { Link } from "wouter";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export default function Work() {
  return (
    <>
      <Nav mode="case" />

      {/* HERO */}
      <section id="overview" className="relative pt-40 sm:pt-52 pb-24 overflow-hidden">
        <div className="halo" />
        <div className="grid-lines" />
        <div className="relative mx-auto max-w-6xl px-6">
          <Reveal>
            <p className="eyebrow">Case study · Pulse · 2024–2025</p>
            <h1 className="display text-[56px] sm:text-[88px] lg:text-[112px] mt-6 text-balance">
              The focus tool<br />that <em>disappears.</em>
            </h1>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-10 text-[#b6b6bb] text-xl leading-relaxed max-w-2xl text-pretty">
              18 months. 34 subjects. 7 prototypes killed. One question: what does ambient intelligence look like when it never asks for your attention?
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div className="mt-16 grid sm:grid-cols-4 gap-6 max-w-3xl">
              {[["Role","Lead Product Designer"],["Timeline","Jan 2024 – Jun 2025"],["Team","7 eng · 3 design · 1 PM"],["Status","Shipped · June 2025"]].map(([k,v]) => (
                <div key={k}>
                  <div className="eyebrow">{k}</div>
                  <div className="mt-2 text-[14px] text-[#eaeaea]">{v}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="relative py-28 sm:py-36 rule">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid lg:grid-cols-12 gap-12">
            <Reveal className="lg:col-span-4">
              <p className="eyebrow">00 · Overview</p>
              <h2 className="display text-[40px] sm:text-[56px] mt-4 text-balance">What I did and didn&apos;t do.</h2>
            </Reveal>
            <Reveal delay={140} className="lg:col-span-8">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="rounded-2xl p-8" style={{ background: "linear-gradient(180deg,rgba(24,24,27,0.85),rgba(14,14,16,0.85))", border: "1px solid rgba(255,255,255,0.08)" }}>
                  <div className="eyebrow">What I owned</div>
                  <ul className="mt-5 space-y-3 text-[14.5px] text-[#b6b6bb]">
                    {[["Product strategy","The thesis, the principles, what not to build"],["Interaction model","Single-surface orb, the explainer, mode inference"],["Research synthesis","34-subject diary study, pattern extraction, archetypes"],["Sonic direction","Brief, composer selection, iteration review"],["Design reviews","Weekly with 3 designers, 7 engineers, PM"],["Ethics coordination","Commissioned external review in week one"]].map(([k,v]) => (
                      <li key={k}><div className="text-[#eaeaea]">{k}</div><div className="text-[#8a8a90] text-[13px]">{v}</div></li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-2xl p-8" style={{ background: "linear-gradient(180deg,rgba(24,24,27,0.85),rgba(14,14,16,0.85))", border: "1px solid rgba(255,255,255,0.08)" }}>
                  <div className="eyebrow">What the team owned</div>
                  <ul className="mt-5 space-y-3 text-[14.5px] text-[#b6b6bb]">
                    {[["On-device ML model","7-person engineering, led by Priya Shah"],["Visual system craft","Designer Nadia Akita, iconography + motion"],["Research subject recruit","UCL Interaction Centre partnership"],["Sonic composition","Composer Mikael Hansson, 11 compositions"],["Ethics framework","External advisor Dr. Laila Roshani"],["Pricing strategy","PM Teodor Lindqvist, with founder input"]].map(([k,v]) => (
                      <li key={k}><div className="text-[#eaeaea]">{k}</div><div className="text-[#8a8a90] text-[13px]">{v}</div></li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mt-8 rounded-2xl p-6" style={{ background: "linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0.005))", border: "1px dashed rgba(255,255,255,0.12)" }}>
                <div className="eyebrow">The blurry middle</div>
                <p className="mt-3 text-[14px] text-[#b6b6bb] leading-relaxed">The explainer layer emerged from a three-hour whiteboard session between me, Priya (eng lead), and Laila (ethicist). I wrote the spec. Priya pushed back on what was technically honest. Laila insisted the defaults be inverted. The final form was none of ours individually.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section id="problem" className="relative py-28 sm:py-36 rule">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid lg:grid-cols-12 gap-12">
            <Reveal className="lg:col-span-4">
              <p className="eyebrow">01 · The problem</p>
              <h2 className="display text-[40px] sm:text-[56px] mt-4 text-balance">Focus tools hate their users.</h2>
            </Reveal>
            <Reveal delay={140} className="lg:col-span-8">
              <div className="prose-body drop">
                <p><strong>The category was broken before we arrived.</strong> Six weeks shadowing 34 knowledge workers — engineers, designers, writers, researchers — watching how they actually used existing focus tools. Most were abandoned within eleven days.</p>
                <p>The pattern was consistent. Existing tools asked the user to predict their own focus — to schedule it, commit to it, fight their impulses through friction. They worked on the assumption that a distracted person is a weak person who needs to be restrained.</p>
                <p>But the people we watched weren&apos;t weak. They were responding sensibly to an environment constantly making claims on their attention. The tool meant to help was <strong>another thing making claims on their attention</strong>.</p>
                <p>The reframe: anything that requires a decision to focus is already interrupting focus. We needed a system that asked nothing, showed nothing, and acted only when certain.</p>
              </div>
            </Reveal>
          </div>

          <Reveal>
            <div className="mt-24 grid md:grid-cols-3 gap-5">
              {[["Observed · 01","The timer trap","Pomodoro sessions abandoned mid-flow because a 25-minute timer ended just as the person got productive. Measured in 27 of 34 subjects."],["Observed · 02","The blocklist paradox","Every time someone added Twitter to a blocklist, they developed a new habit of browsing it on their phone within 48 hours. The friction moved, it didn't disappear."],["Observed · 03","The meeting residue","The most destructive moment wasn't the meeting — it was the 20 minutes after, spent re-assembling attention no tool recognized."]].map(([eyebrow, heading, body]) => (
                <div key={eyebrow} className="tenet">
                  <div className="eyebrow">{eyebrow}</div>
                  <div className="display text-[26px] mt-5 leading-tight">{heading}</div>
                  <p className="mt-4 text-[14.5px] text-[#b6b6bb] leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* RESEARCH */}
      <section className="relative py-28 sm:py-36 rule">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid lg:grid-cols-12 gap-12">
            <Reveal className="lg:col-span-4">
              <p className="eyebrow">02 · Research</p>
              <h2 className="display text-[40px] sm:text-[56px] mt-4">Fourteen weeks. One thesis.</h2>
              <p className="mt-6 text-[#b6b6bb] text-[15.5px] leading-relaxed">Mixed-method study. Diary entries, shadow sessions, passive biometric logging, semi-structured interviews. Pre-registered hypotheses with UCL Interaction Centre.</p>
            </Reveal>
            <Reveal delay={140} className="lg:col-span-8">
              <div className="grid sm:grid-cols-2 gap-5">
                {[["34","","Diary subjects","Six-week diary study. 1,820 focus entries. Four behavioral archetypes surfaced."],["91","%","Never chose a mode","Of users given a mode picker, 91% used only the default. Manual mode-switching was a myth."],["4.2","×","Stronger predictor","HRV coherence predicted deep-work sessions 4.2× more reliably than self-reported focus."],["11","d","Avg abandonment","Traditional focus apps uninstalled within 11 days. The threshold: &lsquo;I notice it exists.&rsquo;"]].map(([num,unit,label,body]) => (
                  <div key={label} className="stat-card">
                    <div className="flex items-baseline gap-3">
                      <div className="metric metal-text">{num}{unit ? <span className="text-[32px] text-[#8a8a90]">{unit}</span> : null}</div>
                      <div className="text-[13px] text-[#8a8a90] font-mono">{label}</div>
                    </div>
                    <p className="mt-5 text-[14.5px] text-[#b6b6bb] leading-relaxed" dangerouslySetInnerHTML={{ __html: body }} />
                  </div>
                ))}
              </div>

              <div className="mt-10 stat-card">
                <div className="flex items-center justify-between">
                  <div><div className="eyebrow">Predictor accuracy</div><div className="display text-[22px] mt-2">HRV beats self-report by 4.2×</div></div>
                  <div className="text-right text-[12px] font-mono text-[#8a8a90]">n = 1,820 sessions</div>
                </div>
                <div className="bar-chart mt-8">
                  <div className="bar baseline" style={{ height: "18%" }} /><div className="bar baseline" style={{ height: "24%" }} /><div className="bar baseline" style={{ height: "22%" }} />
                  <div className="bar" style={{ height: "78%" }} /><div className="bar" style={{ height: "84%" }} /><div className="bar" style={{ height: "92%" }} />
                </div>
                <div className="mt-4 flex justify-between text-[11px] font-mono text-[#8a8a90]">
                  <span>Self-report</span><span className="text-[#7cc3ff]">HRV coherence</span>
                </div>
              </div>

              <div className="mt-10 rounded-2xl p-8" style={{ background: "linear-gradient(180deg,rgba(124,195,255,0.08),rgba(124,195,255,0.01))", border: "1px solid rgba(124,195,255,0.22)" }}>
                <div className="eyebrow text-[#7cc3ff]">The insight that reframed the project</div>
                <p className="mt-4 pullquote text-balance">
                  A focus tool is successful{" "}
                  <span className="metal-text" style={{ fontFamily: "inherit" }}>to the degree it disappears.</span>{" "}
                  Every interaction it requires is a tax on the thing it claims to protect.
                </p>
                <p className="mt-6 text-[13px] text-[#b6b6bb] leading-relaxed">We printed this on a 2m banner. Any feature that violated it died in review — nine did.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section id="principles" className="relative py-28 sm:py-36 rule">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="max-w-3xl">
              <p className="eyebrow">03 · Design principles</p>
              <h2 className="display text-[44px] sm:text-[64px] mt-4 text-balance">Five tenets we refused to break.</h2>
              <p className="mt-6 text-[#b6b6bb] text-lg leading-relaxed max-w-xl">Written on the studio wall. Every design review returned to them. Several features died against them. Not aspirations — filters.</p>
            </div>
          </Reveal>

          <div className="mt-20 grid md:grid-cols-2 gap-5">
            {[["01","Sense before acting.","The system must be more confident than the user would be. Ambiguity defaults to silence. p(intervention helpful) > 0.82 before any action fires."],["02","Act quietly, or not at all.","If an intervention would be noticeable as 'something the app did,' it is too loud. Dim, not darken. Delay, not block."],["03","Explain everything, on request.","Every intervention can be rewound and inspected. Three signals — exactly three — are always available."],["04","Nothing leaves the machine.","On-device. Append-only local ledger. Zero telemetry. Third-party audited."]].map(([num, heading, body], idx) => (
              <Reveal key={num} delay={idx * 80}>
                <div className="tenet">
                  <div className="flex items-start gap-6">
                    <div className="num">{num}</div>
                    <div className="pt-3">
                      <div className="display text-[28px]">{heading}</div>
                      <p className="mt-4 text-[15px] text-[#b6b6bb] leading-relaxed">{body}</p>
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
                    <p className="mt-4 text-[15px] text-[#b6b6bb] leading-relaxed max-w-2xl">When the context that justified the intervention ends, the intervention ends with it. No lingering states, no &ldquo;are you still focusing?&rdquo; prompts. The system exits without asking to be thanked. Measured: median exit-to-interaction was 0.3 seconds.</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* KEY DECISIONS */}
      <section id="decisions" className="relative py-28 sm:py-36 rule">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="max-w-3xl">
              <p className="eyebrow">04 · Key decisions</p>
              <h2 className="display text-[44px] sm:text-[64px] mt-4">Three choices <em>that made it.</em></h2>
              <p className="mt-6 text-[#b6b6bb] text-lg leading-relaxed">A case study is only honest when it shows the decisions that could have gone the other way.</p>
            </div>
          </Reveal>

          {[{
            date: "Decision 01 · March 2025",
            title: "From slider to silence.",
            summary: "We removed the focus slider entirely. The single scariest thing we shipped.",
            tradeoff: "We lost the feeling of control to gain actual adoption. Power users complained. We let them.",
            detail: "We had a focus-intensity slider for 11 months. Every user research session showed people fiddling with it — but no correlation between slider position and measured focus-depth. The slider was giving people the feeling of control without the substance. Removing it was internally contentious. Three engineers pushed back. One designer quit the sprint in protest. We shipped without it. The next cohort's 30-day retention was 18 points higher.",
          },{
            date: "Decision 02 · July 2024",
            title: "The explainer layer.",
            summary: "Every intervention shows exactly three signals that triggered it. Non-negotiable.",
            tradeoff: "Added 4 weeks of engineering work. Almost shipped without it twice. Kept it both times.",
            detail: "Early in the ethics review, Dr. Roshani asked: 'If the system dims your notifications, do you have the right to know why?' We said yes immediately. But implementing it well — three signals, honest language, always accessible — cost us four weeks. It was nearly cut twice under schedule pressure. The qualitative data from beta was unambiguous: the explainer was cited by 28 of 34 users as the primary reason they trusted the system.",
          },{
            date: "Decision 03 · November 2024",
            title: "Sonic language over visual.",
            summary: "The primary feedback channel became sound, not screen. A 14-month bet.",
            tradeoff: "Required a full composer engagement. Delayed shipping by 6 weeks. Net result: the most praised detail in user research.",
            detail: "The original feedback model used subtle screen shifts. After three rounds of testing, we discovered the interventions were being ignored — people had learned to filter visual peripheral signals. The insight came from a user: 'If it makes a sound I can&apos;t not hear it.' We commissioned 11 sonic compositions from Mikael Hansson: one per system state transition. User recall of system interventions improved from 34% to 91%.",
          }].map((d) => (
            <Reveal key={d.date}>
              <div className="decision mt-10 p-10">
                <div className="grid lg:grid-cols-12 gap-10">
                  <div className="lg:col-span-4">
                    <div className="eyebrow">{d.date}</div>
                    <h3 className="display text-[34px] mt-4">{d.title}</h3>
                    <p className="mt-5 text-[15px] text-[#b6b6bb] leading-relaxed">{d.summary}</p>
                    <div className="mt-8 pt-6" style={{ borderTop: "1px dashed rgba(255,255,255,0.12)" }}>
                      <div className="eyebrow">Trade-off accepted</div>
                      <p className="mt-3 text-[13px] text-[#b6b6bb] leading-relaxed">{d.tradeoff}</p>
                    </div>
                  </div>
                  <div className="lg:col-span-8">
                    <div className="rounded-2xl p-8 h-full" style={{ background: "linear-gradient(180deg,rgba(24,24,27,0.6),rgba(14,14,16,0.6))", border: "1px solid rgba(255,255,255,0.07)" }}>
                      <p className="text-[16px] text-[#b6b6bb] leading-relaxed">{d.detail}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* OUTCOMES */}
      <section id="outcomes" className="relative py-28 sm:py-40 rule">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="max-w-3xl">
              <p className="eyebrow">08 · Outcomes</p>
              <h2 className="display text-[44px] sm:text-[72px] mt-4">What the silence <em>measured.</em></h2>
              <p className="mt-6 text-[#b6b6bb] text-lg leading-relaxed max-w-2xl">All metrics are behavioral, not self-reported.</p>
            </div>
          </Reveal>

          <Reveal>
            <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
              {[["Focus gain","+41","%","Avg focus-depth per user, 60 days in. Measured via typing cadence + HRV coherence, not self-report.",false],["Meeting debt","−62","%","Post-meeting recovery friction, 14k sessions. Time-to-re-engagement dropped from 19 min to 7 min.",false],["Retention · D30","94","%","8× category baseline of 11.8%. Matched-cohort analysis vs 5 comparable focus apps.",true],["Data leaving device","0"," b","Third-party audited quarterly. Trail of Bits Q1 and Q3 2025. Reports public.",false]].map(([label,num,unit,body,highlight]) => {
                const h = Boolean(highlight);
                return (
                  <div key={label as string} className="rounded-2xl p-8 flex flex-col justify-between min-h-[300px]" style={{
                    background: h ? "linear-gradient(180deg,rgba(124,195,255,0.12),rgba(124,195,255,0.02))" : "linear-gradient(180deg,rgba(24,24,27,0.8),rgba(14,14,16,0.8))",
                    border: h ? "1px solid rgba(124,195,255,0.28)" : "1px solid rgba(255,255,255,0.07)",
                    boxShadow: h ? "0 30px 80px -30px rgba(124,195,255,0.2)" : undefined,
                  }}>
                    <div>
                      <div className={`eyebrow ${h ? "text-[#7cc3ff]" : ""}`}>{label as string}</div>
                      <div className="metric metal-text mt-6">{num as string}<span className="text-[40px] text-[#8a8a90]">{unit as string}</span></div>
                    </div>
                    <p className="mt-7 text-[13px] text-[#b6b6bb] leading-relaxed">{body as string}</p>
                  </div>
                );
              })}
            </div>
          </Reveal>

          <Reveal>
            <div className="mt-24 grid lg:grid-cols-12 gap-10">
              <div className="lg:col-span-5">
                <div className="eyebrow">Verbatim · qualitative</div>
                <h3 className="display text-[32px] mt-3">The most-quoted <em>sentence</em> in our research.</h3>
              </div>
              <div className="lg:col-span-7">
                <blockquote className="pullquote text-balance">
                  &ldquo;I forgot it was running — and then I realized I&apos;d been writing{" "}
                  <span className="metal-text" style={{ fontFamily: "inherit" }}>for two hours.</span>&rdquo;
                </blockquote>
                <div className="mt-6 text-[13px] font-mono text-[#8a8a90]">
                  — Repeated, verbatim or nearly so, by 19 of 34 users in follow-up interviews.
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* INTERVIEW PREP */}
      <section className="relative py-28 sm:py-36 rule">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="max-w-3xl">
              <p className="eyebrow">09 · If you were going to challenge me</p>
              <h2 className="display text-[40px] sm:text-[56px] mt-4 text-balance">The hard questions, <em>pre-answered.</em></h2>
            </div>
          </Reveal>
          <Reveal>
            <div className="mt-16 space-y-5">
              {[
                ["Isn't +41% focus-gain just a placebo-compatible metric?","Possibly partially, yes. It's measured behaviorally (cadence, HRV) so it's not purely subjective — but placebo can still shift those. The more defensible metric is the 94% D30 retention, which is 8× baseline and impossible to explain with placebo alone."],
                ["Why should I believe 'zero data leaves the device' if I can't verify it myself?","The Trail of Bits audits are public. The binary is reproducible-build verified. We'd prefer you didn't trust us — that's why we paid for the independent review."],
                ["How is this not anti-agency paternalism?","It's a fair critique. The defense: Pulse never restricts. It dims, delays, and suggests. Any intervention is reversible in one tap. Paternalism requires restriction. We don't restrict."],
                ["How did you prevent the model from reinforcing bias?","The honest answer: the current training data skews toward knowledge workers at English-speaking companies. We know this. We disclose it."],
                ["What would you cut if you had to ship in 3 months instead of 18?","The sonic language (ship with silence). Shared deep windows (v1 is solo). The consent ledger UI. I would not cut: the explainer, the diary research, or principle #2."],
              ].map(([q, a], i) => (
                <div key={i} className="rounded-2xl p-8" style={{ background: "linear-gradient(180deg,rgba(24,24,27,0.7),rgba(14,14,16,0.7))", border: "1px solid rgba(255,255,255,0.08)" }}>
                  <div className="flex items-start gap-5">
                    <span className="font-mono text-[11px] tracking-[0.22em] uppercase text-[#8a8a90] shrink-0 mt-1">Q{String(i+1).padStart(2,"0")}</span>
                    <div className="flex-1">
                      <div className="display text-[22px] leading-[1.3]">&ldquo;{q}&rdquo;</div>
                      <p className="mt-5 text-[15px] text-[#b6b6bb] leading-relaxed">{a}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* REFLECTIONS */}
      <section className="relative py-28 sm:py-36 rule">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid lg:grid-cols-12 gap-12">
            <Reveal className="lg:col-span-4">
              <p className="eyebrow">10 · Reflections</p>
              <h2 className="display text-[40px] sm:text-[56px] mt-4">What I would do <em>again.</em><br /><span className="metal-text">And what I wouldn&apos;t.</span></h2>
            </Reveal>
            <Reveal delay={140} className="lg:col-span-8">
              <div className="prose-body">
                <p><strong>I would run the ethics review in week one, every time.</strong> The explainer layer existed because an ethicist made us answer a question we&apos;d been avoiding. It should not have taken a specialist to surface it.</p>
                <p><strong>I would not try to soften the kill.</strong> We spent three weeks trying to save the slider. Features don&apos;t die gracefully; they die when you remove them. The version that shipped was better because we accepted that sooner.</p>
                <p><strong>I would trust the sound designer earlier.</strong> The sonic language is the single most-praised detail in user feedback, and it took us longest to commission.</p>
                <p><strong>I would be less proud of the 0.</strong> The &ldquo;zero bytes leaving the device&rdquo; metric is an engineering achievement, but it slightly misrepresents the real ethical work — which is the consent ledger and the explainer.</p>
                <p><strong>I would not have assumed retention would come from features.</strong> The thing that kept users wasn&apos;t any one feature; it was that Pulse never made them feel watched.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* NEXT */}
      <section className="relative py-32 sm:py-40 rule overflow-hidden">
        <div className="halo" style={{ inset: "auto -10% -30% -10%", height: 700, transform: "scaleY(-1)" }} />
        <div className="relative mx-auto max-w-5xl px-6">
          <div className="grid sm:grid-cols-2 gap-6">
            <Link href="/" className="group rounded-3xl p-10 flex flex-col justify-between min-h-[240px] transition" style={{ background: "linear-gradient(180deg,rgba(24,24,27,0.9),rgba(14,14,16,0.9))", border: "1px solid rgba(255,255,255,0.08)" }}>
              <div>
                <div className="eyebrow">The product</div>
                <div className="display text-[36px] mt-5">Back to Pulse.</div>
              </div>
              <div className="mt-10 flex items-center justify-between text-[13px] font-mono text-[#8a8a90] group-hover:text-[#eaeaea] transition">
                <span className="magnetic">See the shipped product</span>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                  <path d="M3 10.5L10.5 3M10.5 3H5M10.5 3V8.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                </svg>
              </div>
            </Link>
            <div className="group rounded-3xl p-10 flex flex-col justify-between min-h-[240px]" style={{ background: "linear-gradient(180deg,rgba(24,24,27,0.9),rgba(14,14,16,0.9))", border: "1px solid rgba(255,255,255,0.08)" }}>
              <div>
                <div className="eyebrow">Next study</div>
                <div className="display text-[36px] mt-5">A camera for your writing.</div>
              </div>
              <div className="mt-10 flex items-center justify-between text-[13px] font-mono text-[#8a8a90]">
                <span className="magnetic">Drafted · publishing June 2026</span>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                  <path d="M3 10.5L10.5 3M10.5 3H5M10.5 3V8.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
