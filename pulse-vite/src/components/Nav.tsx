import { Link } from "react-router-dom";

export default function Nav({ mode = "product" }: { mode?: "product" | "case" }) {
  return (
    <div className="nav-wrap">
      <nav className="nav">
        <Link to="/" className="nav-brand">
          <svg width="20" height="20" viewBox="0 0 22 22" fill="none">
            <defs>
              <linearGradient id="logo-g" x1="0" y1="0" x2="22" y2="22" gradientUnits="userSpaceOnUse">
                <stop stopColor="#eaeaea" />
                <stop offset="1" stopColor="#7cc3ff" />
              </linearGradient>
            </defs>
            <circle cx="11" cy="11" r="9.5" stroke="url(#logo-g)" strokeWidth="1.4" />
            <circle cx="11" cy="11" r="3" fill="url(#logo-g)" />
          </svg>
          <span>Pulse</span>
          <span className="nav-version">v2.4</span>
        </Link>

        <div className="nav-links">
          {mode === "product" ? (
            <>
              <a href="#how">How it works</a>
              <a href="#modes">Modes</a>
              <a href="#pricing">Pricing</a>
              <Link to="/work">Case study</Link>
            </>
          ) : (
            <Link to="/">← Back to product</Link>
          )}
        </div>

        <a
          href="https://www.linkedin.com/in/prakhar-dewangan-64839a351"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-cta"
        >
          Contact
        </a>
      </nav>
    </div>
  );
}
