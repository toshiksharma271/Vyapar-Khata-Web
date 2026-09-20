import { Link } from "@tanstack/react-router";
import { Logo } from "@/components/logo";
import { SITE } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#173d38] text-white">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-14 sm:px-6 md:grid-cols-[1.5fr_0.8fr_0.9fr]">
        <div>
          <Logo />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/60">
            A calm, capable ledger for Indian businesses. Track parties, stock, GST and reports without losing the thread of your day.
          </p>
          <a
            href={SITE.playStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center rounded-xl bg-[#b9dfcf] px-4 py-3 text-sm font-bold text-[#173d38] transition-transform hover:-translate-y-0.5"
          >
            Get the app on Google Play →
          </a>
        </div>
        <div>
          <p className="text-sm font-bold text-[#b9dfcf]">Explore</p>
          <ul className="mt-4 space-y-3 text-sm text-white/60">
            <li><a href="#features" className="hover:text-white">Features</a></li>
            <li><a href="#reports" className="hover:text-white">Reports</a></li>
            <li><a href="#pricing" className="hover:text-white">Pricing</a></li>
            <li><a href="#faq" className="hover:text-white">Questions</a></li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-bold text-[#b9dfcf]">Support</p>
          <ul className="mt-4 space-y-3 text-sm text-white/60">
            <li><a href={`mailto:${SITE.supportEmail}`} className="hover:text-white">{SITE.supportEmail}</a></li>
            <li><Link to="/privacy" className="hover:text-white">Privacy policy</Link></li>
            <li>Made by Toshik Sharma</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <span>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</span>
          <span>{SITE.tagline}</span>
        </p>
      </div>
    </footer>
  );
}
