import { useState } from "react";

type Mode = {
  key: string;
  label: string;
  description: string;
  status: string;
  meta: string;
};

const MODES: Mode[] = [
  {
    key: "deep",
    label: "Deep Work",
    description: "Notifications held. Calendar paused. Anything that costs more than three seconds to recover from is dimmed.",
    status: "Active · 84% focus depth",
    meta: "Will exit at 16:05",
  },
  {
    key: "creative",
    label: "Creative Drift",
    description: "Lateral connections rewarded. Search history surfaced. New tabs allowed to wander.",
    status: "Standby · awaiting low-load signal",
    meta: "Last engaged · 2 days ago",
  },
  {
    key: "meeting",
    label: "Meeting Ready",
    description: "Camera-aware focus. Notes surface 2 minutes before each call. Mic and lighting checked silently.",
    status: "Standby · next event 14:30",
    meta: "3 calls today",
  },
  {
    key: "recover",
    label: "Recover",
    description: "Post-meeting decompression. Slack delayed. Email muted. Breath cadence visible.",
    status: "Standby · awaiting trigger",
    meta: "Avg. 11 min after long calls",
  },
];

export default function ModeSwitcher() {
  const [active, setActive] = useState("deep");
  const current = MODES.find((m) => m.key === active) ?? MODES[0];

  return (
    <div>
      <div className="max-w-3xl">
        <p className="eyebrow">Response modes · 02</p>
        <h2 className="display text-[44px] sm:text-[72px] mt-5 text-balance">
          Four modes. <em>One mind.</em>
        </h2>
        <p className="mt-7 text-[#b6b6bb] text-lg leading-relaxed max-w-xl text-pretty">
          Pulse infers which mode you&apos;re in, then quietly reshapes the system around it.
          Switch manually if you want — most people stop after week one.
        </p>
      </div>

      <div className="mt-16 grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-5 space-y-3">
          {MODES.map((m) => {
            const isActive = active === m.key;
            return (
              <button
                key={m.key}
                onClick={() => setActive(m.key)}
                className="w-full text-left rounded-2xl p-5 flex items-center gap-4 transition-all"
                style={{
                  background: isActive
                    ? "linear-gradient(180deg,rgba(124,195,255,0.12),rgba(124,195,255,0.02))"
                    : "linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.01))",
                  border: isActive
                    ? "1px solid rgba(124,195,255,0.32)"
                    : "1px solid rgba(255,255,255,0.07)",
                  boxShadow: isActive ? "0 20px 60px -30px rgba(124,195,255,0.35)" : undefined,
                }}
              >
                <span className={`mode-dot ${isActive ? "active" : ""}`} />
                <div className="flex-1">
                  <div className={`text-[16px] ${isActive ? "text-[#eaeaea]" : "text-[#b6b6bb]"}`}>{m.label}</div>
                  <div className="text-[12px] font-mono text-[#8a8a90]">{m.meta}</div>
                </div>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className={isActive ? "text-[#7cc3ff]" : "text-[#8a8a90]"} aria-hidden>
                  <path d="M3 10.5L10.5 3M10.5 3H5M10.5 3V8.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                </svg>
              </button>
            );
          })}
        </div>

        <div className="lg:col-span-7">
          <div className="rounded-3xl p-10 min-h-[480px] flex flex-col justify-between relative overflow-hidden"
            style={{
              background: "linear-gradient(180deg,rgba(24,24,27,0.85),rgba(14,14,16,0.85))",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <div className="halo" style={{ inset: "-50% -10% auto -10%", opacity: 0.5 }} />
            <div className="relative">
              <div className="flex items-center gap-2">
                <span className="mode-dot active" />
                <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#7cc3ff]">{current.label}</span>
              </div>
              <p className="display text-[32px] sm:text-[44px] mt-8 leading-[1.05] text-balance">{current.description}</p>
            </div>
            <div className="relative mt-12 pt-8 border-t border-white/5 flex flex-wrap justify-between gap-4">
              <div>
                <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#8a8a90]">System status</div>
                <div className="mt-2 text-[14px]">{current.status}</div>
              </div>
              <div className="text-right">
                <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#8a8a90]">Detail</div>
                <div className="mt-2 text-[14px] text-[#b6b6bb]">{current.meta}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
