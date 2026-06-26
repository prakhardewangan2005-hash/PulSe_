import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function Work() {
  return (
    <>
      <Nav mode="case" />

      <section className="case-hero">
        <div className="container">
          <p className="eyebrow">Case study · 18 months · Nov 2024 — Apr 2026</p>

          <h1 className="headline" style={{ fontSize: "clamp(44px, 9vw, 120px)", margin: "32px 0" }}>
            Designing presence
            <br />
            <span className="metal">without attention.</span>
          </h1>

          <p className="subtitle" style={{ maxWidth: 720, textAlign: "left", margin: 0 }}>
            An honest 18-month account of shipping a context-aware focus system. The research that reframed the problem, the seven prototypes we killed, the ethical review that changed the product, and what 140,000 daily users taught us about attention.
          </p>

          <div className="case-meta">
            {[
              ["Role", "Lead Product Designer", "Strategy · research · prototyping"],
              ["Team", "3 design · 7 eng · 1 PM", "+ composer · ethicist · UCL researcher"],
              ["Platform", "macOS · iPadOS · iOS", "Universal · on-device · 38MB"],
              ["Timeline", "Nov 2024 → Apr 2026", "3 milestones · 9 design reviews"],
              ["Outcome", "Shipped · v2.4", "140k DAU · 94% D30 · 4.9 App Store"],
            ].map(([label, primary, secondary], i) => (
              <div key={label}>
                <div className="eyebrow">{label}</div>
                <div style={{ marginTop: 8, fontSize: 14, color: i === 4 ? "var(--signal)" : "inherit" }}>{primary}</div>
                <div style={{ fontSize: 12, fontFamily: "var(--font-mono)", color: "var(--silver-500)", marginTop: 4 }}>{secondary}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-divider">
        <div className="container">
          <div className="exec-summary">
            <p className="eyebrow" style={{ color: "var(--signal)" }}>If you read only this</p>
            <p className="pullquote" style={{ marginTop: 24 }}>
              Focus tools fail because they demand focus to be used. We designed one that makes zero demands — it senses attention instead of asking for it. Seven prototypes died to reach this. The one that shipped has 8× industry-average retention.
            </p>

            <div className="metric-row">
              {[
                ["Business impact", "$14M", "ARR at 18 months, zero paid acquisition"],
                ["User outcome", "+41%", "Measured focus-gain, not self-report"],
                ["Retention", "94%", "D30 vs 11.8% category baseline"],
                ["Accountability", "7→1", "Prototypes shipped vs retired"],
              ].map(([label, num, note]) => (
                <div key={label}>
                  <div className="eyebrow">{label}</div>
                  <div className="metric-big metal">{num}</div>
                  <div className="metric-note">{note}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-divider">
        <div className="container">
          <p className="section-eyebrow">01 · The problem</p>
          <h2 className="section-title">Focus tools hate their users.</h2>
          <p className="section-body" style={{ marginBottom: 24 }}>
            <strong style={{ color: "white" }}>The category was broken before we arrived.</strong> Six weeks shadowing 34 knowledge workers — engineers, designers, writers, researchers. Most focus apps were abandoned within eleven days.
          </p>
          <p className="section-body" style={{ marginBottom: 24 }}>
            Existing tools asked the user to predict their own focus — to schedule it, commit to it, fight their impulses through friction. They assumed a distracted person is a weak person who needs to be restrained.
          </p>
          <p className="section-body">
            The reframe: anything that requires a decision to focus is already interrupting focus. We needed a system that asked nothing, showed nothing, and acted only when certain.
          </p>
        </div>
      </section>

      <section className="section-divider">
        <div className="container">
          <p className="section-eyebrow">02 · Design principles</p>
          <h2 className="section-title">Five tenets we refused to break.</h2>

          <div style={{ marginTop: 48 }}>
            {[
              ["01", "Sense before acting.", "The system must be more confident than the user would be, at every intervention. Ambiguity defaults to silence. Operationalized as: p(intervention helpful) > 0.82 before any action fires."],
              ["02", "Act quietly, or not at all.", "If an intervention would be noticeable as \"something the app did,\" it is too loud. Dim, not darken. Delay, not block. Reduce, not remove."],
              ["03", "Explain everything, on request.", "Every intervention can be rewound and inspected. Three signals — exactly three — are always available."],
              ["04", "Nothing leaves the machine.", "On-device. Append-only local ledger. Zero telemetry. Third-party audited."],
              ["05", "Leave gracefully.", "When the context ends, the intervention ends with it. No lingering states. Median exit-to-interaction: 0.3 seconds."],
            ].map(([num, title, body]) => (
              <div key={num} className="tenet">
                <div className="tenet-num">{num}</div>
                <div className="tenet-title">{title}</div>
                <p className="tenet-body">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-divider">
        <div className="container">
          <p className="section-eyebrow">03 · Prototype graveyard</p>
          <h2 className="section-title">Seven things I built and killed.</h2>
          <p className="section-body" style={{ marginBottom: 48 }}>
            Portfolios that only show what shipped are PR documents. The decisions that matter are in what got retired.
          </p>

          <div>
            {[
              ["P1", "The focus score dashboard", "A wall of charts showing historical focus patterns. 2 of 12 users opened it after day one. Killed — replaced by a weekly single-paragraph email."],
              ["P2", "The AI-written focus summary", "Nightly summary of \"how your attention went today.\" Users hated it. Killed — we were building surveillance we couldn't justify."],
              ["P3", "The slider", "Users didn't want to feel like pilots of their own attention. Killed in v0.7."],
              ["P4", "Social focus leaderboards", "The ethics review ended it in 20 minutes. Killed."],
              ["P5", "Gamified streaks", "Retained users 18% better in A/B. Still killed — fear-based retention violates principle 02."],
              ["P6", "The voice assistant", "Used 2.3 times total on average. Voice demanded the kind of attention the product existed to protect. Killed."],
              ["P7", "Auto-scheduling deep work", "Users overrode 78% of the time. The calendar is sovereign; we were squatters. Killed."],
            ].map(([num, title, body]) => (
              <div key={num} className="qa-card">
                <div className="qa-label" style={{ color: "var(--silver-500)" }}>Retired · {num}</div>
                <div className="qa-question">{title}</div>
                <p className="qa-answer">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-divider">
        <div className="container">
          <p className="section-eyebrow">04 · Outcomes</p>
          <h2 className="section-title">What the silence measured.</h2>

          <div style={{ marginTop: 48, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20 }}>
            {[
              ["Focus gain", "+41%", "Avg focus-depth, 60 days in. Behavioral, not self-report."],
              ["Meeting debt", "−62%", "Post-meeting recovery, 14k sessions."],
              ["Retention · D30", "94%", "8× category baseline of 11.8%."],
              ["Data leaving device", "0b", "Trail of Bits audited Q1 and Q3 2025."],
            ].map(([label, num, note]) => (
              <div key={label} className="qa-card">
                <div className="eyebrow">{label}</div>
                <div className="metric-big metal" style={{ fontSize: 56 }}>{num}</div>
                <p className="metric-note">{note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-divider">
        <div className="container">
          <p className="section-eyebrow">05 · If you were going to challenge me</p>
          <h2 className="section-title">The hard questions, pre-answered.</h2>

          <div style={{ marginTop: 48 }}>
            {[
              ["Isn't +41% focus-gain just a placebo-compatible metric?", "Possibly partially, yes. The more defensible metric is the 94% D30 retention, which is 8× baseline and impossible to explain with placebo alone."],
              ["Why should I believe 'zero data leaves the device' if I can't verify it myself?", "The Trail of Bits audits are public. The binary is reproducible-build verified. We'd prefer you didn't trust us — that's why we paid for independent review."],
              ["How is this not anti-agency paternalism?", "Pulse never restricts. It dims, delays, and suggests. Any intervention is reversible in one tap. Paternalism requires restriction. We don't restrict."],
              ["How did you prevent the model from reinforcing bias?", "The training data skews toward English-speaking knowledge workers. We disclose it. v3 includes a multi-context training set."],
              ["What would you cut if you had to ship in 3 months?", "The sonic language. Shared deep windows. The consent ledger UI. I would not cut: the explainer, the diary research, or principle #2."],
            ].map(([q, a], i) => (
              <div key={i} className="qa-card">
                <div className="qa-label">Q{String(i + 1).padStart(2, "0")}</div>
                <div className="qa-question">"{q}"</div>
                <p className="qa-answer">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-divider">
        <div className="container" style={{ textAlign: "center" }}>
          <Link to="/" className="btn-violet">
            ← Back to product
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
