import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const FIGMA_URL =
  "https://www.figma.com/proto/viW83K4WLdDSGYd3CtV2Lj/Pulse-%E2%80%94-Context-Aware-Focus-System--Community-?node-id=0-1&t=Vrh6xUQsbhw82D9z-1";

export default function Home() {
  return (
    <>
      <Nav mode="product" />

      <section className="hero">
        <div className="status-pill">
          <span className="status-dot" />
          <span>Now sensing · cognitive context v2.4</span>
        </div>

        <p className="eyebrow">A context-aware focus system</p>

        <h1 className="headline">
          Focus,
          <br />
          <span className="metal">aware of you.</span>
        </h1>

        <p className="subtitle">
          Pulse listens to your calendar, rhythm, and environment — then quietly reshapes what you see, hear, and notice. No blocklists. No timers. Just presence, when you need it.
        </p>

        <div className="problem-block">
          <p className="eyebrow">The problem</p>
          <p className="problem-statement">
            Existing focus tools ask distracted people to predict their own attention.
            <br />
            <span className="dim">
              We asked what a system would look like if it never interrupted to help.
            </span>
          </p>

          <div className="cta-row">
            <Link to="/work" className="btn-violet">
              View Full Case Study
              <span aria-hidden>↗</span>
            </Link>
            <a
              href={FIGMA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-violet"
            >
              Open in Figma
              <span aria-hidden>↗</span>
            </a>
          </div>

          <p className="caption">
            18-month study <span className="divider-dot"></span> 34 subjects{" "}
            <span className="divider-dot"></span> 7 prototypes killed
          </p>
        </div>

        <div className="container">
          <div className="stack-3d">
            <div className="stack-panel p1">
              <div className="panel-chrome">
                <span className="panel-chrome-dot"></span>
                <span className="panel-chrome-dot"></span>
                <span className="panel-chrome-dot"></span>
                <span className="panel-chrome-title">FOCUS · 14:22</span>
              </div>
              <div className="panel-body">
                <div className="panel-label">STATE · DEEP WORK</div>
                <div className="panel-big">0.84</div>
                <div className="panel-bar">
                  <div className="panel-bar-fill" style={{ width: "84%" }} />
                </div>
              </div>
            </div>

            <div className="stack-panel p2">
              <div className="panel-chrome">
                <span className="panel-chrome-dot"></span>
                <span className="panel-chrome-dot"></span>
                <span className="panel-chrome-dot"></span>
                <span className="panel-chrome-title">HRV · 7.2 STABLE</span>
              </div>
              <div className="panel-body">
                <div className="panel-label">TYPING CADENCE</div>
                <div className="panel-big">74 wpm</div>
                <div className="panel-bar">
                  <div className="panel-bar-fill" style={{ width: "72%" }} />
                </div>
              </div>
            </div>

            <div className="stack-panel p3">
              <div className="panel-chrome">
                <span className="panel-chrome-dot"></span>
                <span className="panel-chrome-dot"></span>
                <span className="panel-chrome-dot"></span>
                <span className="panel-chrome-title">14 SIGNALS ACTIVE</span>
              </div>
              <div className="panel-body">
                <div className="panel-label">NEXT SURFACE · 4 MIN</div>
                <div className="panel-big">3 active</div>
                <div className="panel-bar">
                  <div className="panel-bar-fill" style={{ width: "42%" }} />
                </div>
              </div>
            </div>
          </div>

          <div className="stats">
            {[
              ["Detected signals", "14"],
              ["Avg. focus gain", "+41%"],
              ["Interventions / day", "3—6"],
              ["Background CPU", "0.9%"],
            ].map(([label, value]) => (
              <div key={label}>
                <div className="stat-label">{label}</div>
                <div className="stat-value metal">{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="how">
        <div className="container">
          <p className="section-eyebrow">Sensing layer · 01</p>
          <h2 className="section-title">It reads fourteen signals, then fades into the background.</h2>
          <p className="section-body">
            Calendar density, typing cadence, ambient noise, heart variability, window focus, even the language you&apos;re writing in. Pulse fuses them into a single score — focus depth — and acts only when it&apos;s certain.
          </p>

          <div className="card-grid">
            {[
              ["01 / Ambient", "Ambient awareness", "Recognizes open-plan noise, side conversations, and dropped-in messages — dampens what breaks flow."],
              ["02 / Temporal", "Your chronotype, respected.", "Pulse learns the hours when your prose flows, when your code compiles cleanly. It stops scheduling deep work against biology."],
              ["03 / Biometric", "HRV, not heart rate.", "Reads variability to catch stress spikes the moment they appear — before you notice the tightness in your shoulders."],
              ["04 / Calendar", "Meeting debt, paid.", "Detects recovery windows after long calls. Delays Slack, mutes email, holds the door."],
              ["05 / Behavioral", "Typing cadence.", "Faster fingers with fewer backspaces? You're in flow. Pulse protects it — silently."],
              ["06 / Audio", "Sound that doesn't sound.", "Low-frequency textural shifts, tuned to be noticed only if you're already listening."],
            ].map(([label, title, body]) => (
              <article key={label} className="card">
                <div>
                  <div className="card-label">{label}</div>
                  <h3 className="card-title">{title}</h3>
                  <p className="card-text">{body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
