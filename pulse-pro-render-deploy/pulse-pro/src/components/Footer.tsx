import { Link } from "wouter";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <div className="flex items-center gap-2">
              <Logo />
              <span className="text-[15px]">Pulse</span>
            </div>
            <p className="mt-5 text-[14px] text-[#b6b6bb] max-w-sm leading-relaxed">
              Pulse Editorial. Built for midnight. A context-aware focus system designed for makers, builders, and those who demand a non-hassled deep focus.
            </p>
          </div>

          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-6 text-[13px]">
            <div>
              <div className="eyebrow mb-4">Product</div>
              <ul className="space-y-2 text-[#b6b6bb]">
                <li><a href="#how" className="hover:text-[#eaeaea] transition">How it works</a></li>
                <li><a href="#modes" className="hover:text-[#eaeaea] transition">Modes</a></li>
                <li><a href="#system" className="hover:text-[#eaeaea] transition">System</a></li>
                <li><a href="#pricing" className="hover:text-[#eaeaea] transition">Pricing</a></li>
              </ul>
            </div>
            <div>
              <div className="eyebrow mb-4">Company</div>
              <ul className="space-y-2 text-[#b6b6bb]">
                <li><Link href="/work" className="hover:text-[#eaeaea] transition">Case study</Link></li>
                <li><a href="#" className="hover:text-[#eaeaea] transition">About</a></li>
                <li><a href="#" className="hover:text-[#eaeaea] transition">Changelog</a></li>
                <li><a href="#" className="hover:text-[#eaeaea] transition">Status</a></li>
              </ul>
            </div>
            <div>
              <div className="eyebrow mb-4">Legal</div>
              <ul className="space-y-2 text-[#b6b6bb]">
                <li><a href="#" className="hover:text-[#eaeaea] transition">Privacy</a></li>
                <li><a href="#" className="hover:text-[#eaeaea] transition">Terms</a></li>
                <li><a href="#" className="hover:text-[#eaeaea] transition">Security</a></li>
              </ul>
            </div>
            <div>
              <div className="eyebrow mb-4">Connect</div>
              <ul className="space-y-2 text-[#b6b6bb]">
                <li><a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#eaeaea] transition">GitHub</a></li>
                <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#eaeaea] transition">Twitter</a></li>
                <li><a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#eaeaea] transition">LinkedIn</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-wrap items-center justify-between gap-4 text-[12px] font-mono text-[#8a8a90]">
          <span>© 2026 Pulse · All rights reserved</span>
          <span>Designed in dark. Audited in light.</span>
        </div>
      </div>
    </footer>
  );
}
