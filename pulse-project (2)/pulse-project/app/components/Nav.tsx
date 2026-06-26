"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Logo from "./Logo";

type Props = { mode?: "product" | "case" };

/**
 * Nav uses React.createElement for all <a> tags to avoid a paste-corruption
 * bug where literal <a ...> opening tags can be stripped by chat tooling.
 */
function NavA({
  href,
  external = false,
  className = "",
  children,
}: {
  href: string;
  external?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  const props: Record<string, unknown> = { href, className };
  if (external) {
    props.target = "_blank";
    props.rel = "noopener noreferrer";
  }
  return React.createElement("a", props, children);
}

function ContactRow({
  href,
  title,
  subtitle,
  icon,
}: {
  href: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
}) {
  return React.createElement(
    "a",
    {
      href,
      target: "_blank",
      rel: "noopener noreferrer",
      className:
        "flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white/5 transition",
    },
    <>
      <span className="chip" style={{ width: 36, height: 36, borderRadius: 10 }}>
        {icon}
      </span>
      <span className="flex-1">
        <span className="block text-[13px] text-bone">{title}</span>
        <span className="block text-[11px] font-mono text-silver-500">
          {subtitle}
        </span>
      </span>
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        className="text-silver-500"
        aria-hidden
      >
        <path
          d="M3 9L9 3M9 3H4.5M9 3V7.5"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinecap="round"
        />
      </svg>
    </>
  );
}

export default function Nav({ mode = "product" }: Props) {
  const [contactOpen, setContactOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (!wrapRef.current) return;
      if (!wrapRef.current.contains(e.target as Node)) {
        setContactOpen(false);
      }
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setContactOpen(false);
    }
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  const productLinks = (
    <>
      <NavA href="#how" className="hover:text-bone transition">How it works</NavA>
      <NavA href="#modes" className="hover:text-bone transition">Modes</NavA>
      <NavA href="#system" className="hover:text-bone transition">System</NavA>
      <NavA href="#pricing" className="hover:text-bone transition">Pricing</NavA>
    </>
  );

  const caseLinks = (
    <>
      <NavA href="#overview" className="hover:text-bone transition">Overview</NavA>
      <NavA href="#problem" className="hover:text-bone transition">Problem</NavA>
      <NavA href="#principles" className="hover:text-bone transition">Principles</NavA>
      <NavA href="#decisions" className="hover:text-bone transition">Decisions</NavA>
      <NavA href="#outcomes" className="hover:text-bone transition">Outcomes</NavA>
    </>
  );

  return (
    <header className="fixed top-6 left-0 right-0 z-50 px-4">
      <div className="mx-auto max-w-6xl">
        <div className="nav-chip rounded-full flex items-center justify-between pl-4 pr-2 py-2 shadow-pill">
          <div className="flex items-center gap-2.5">
            <Link href="/" className="flex items-center gap-2">
              <Logo />
              <span className="text-[14px] font-medium tracking-tight">Pulse</span>
            </Link>
            <span className="hidden sm:inline font-mono text-[10px] text-silver-500 tracking-[0.18em] uppercase px-2 py-0.5 rounded-full border border-white/10">
              v2.4
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-7 text-[13px] text-silver-300">
            {mode === "product" ? productLinks : caseLinks}
            {mode === "product" ? (
              <Link href="/work" className="hover:text-bone transition">Case study</Link>
            ) : (
              <Link href="/" className="hover:text-bone transition magnetic">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
                  <path d="M7.5 3L4.5 6L7.5 9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Back to product
              </Link>
            )}
          </nav>

          <div ref={wrapRef} className="relative">
            <button
              onClick={() => setContactOpen((v) => !v)}
              className="btn-metal rounded-full px-4 py-2 text-[13px] font-medium tracking-tight inline-flex items-center gap-1.5"
              aria-expanded={contactOpen}
              aria-haspopup="true"
            >
              Contact
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                className={`transition-transform ${contactOpen ? "rotate-180" : ""}`}
                aria-hidden
              >
                <path d="M2.5 4L5 6.5L7.5 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {contactOpen && (
              <div
                className="absolute right-0 mt-3 w-[280px] rounded-2xl p-2"
                style={{
                  background: "linear-gradient(180deg, rgba(22,22,24,0.95), rgba(12,12,14,0.95))",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  backdropFilter: "blur(24px) saturate(180%)",
                  WebkitBackdropFilter: "blur(24px) saturate(180%)",
                  boxShadow: "0 30px 60px -20px rgba(0,0,0,0.9), 0 0 0 1px rgba(255,255,255,0.04)",
                }}
              >
                <div className="px-3 pt-2 pb-3">
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-silver-500">
                    Reach out
                  </p>
                  <p className="text-[13px] mt-1">Prakhar Dewangan</p>
                </div>

                <ContactRow
                  href="https://www.instagram.com/prakhar_2145"
                  title="Instagram"
                  subtitle="@prakhar_2145"
                  icon={
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
                      <rect x="3" y="3" width="18" height="18" rx="5" stroke="url(#ig-grad)" strokeWidth="1.6" />
                      <circle cx="12" cy="12" r="4" stroke="url(#ig-grad)" strokeWidth="1.6" />
                      <circle cx="17.5" cy="6.5" r="1.2" fill="url(#ig-grad)" />
                      <defs>
                        <linearGradient id="ig-grad" x1="3" y1="3" x2="21" y2="21" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#feda75" />
                          <stop offset="0.3" stopColor="#fa7e1e" />
                          <stop offset="0.6" stopColor="#d62976" />
                          <stop offset="1" stopColor="#962fbf" />
                        </linearGradient>
                      </defs>
                    </svg>
                  }
                />

                <ContactRow
                  href="tel:+916266753762"
                  title="Phone"
                  subtitle="+91 6266753762"
                  icon={
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
                      <path
                        d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z"
                        stroke="#7cc3ff"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  }
                />

                <ContactRow
                  href="https://www.linkedin.com/in/prakhar-dewangan-64839a351"
                  title="LinkedIn"
                  subtitle="prakhar-dewangan"
                  icon={
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="#0a66c2" aria-hidden>
                      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.95v5.66H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
                    </svg>
                  }
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
