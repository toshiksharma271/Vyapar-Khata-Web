import { SITE } from "@/lib/site";
import { Logo } from "@/components/logo";
import { PlayStoreButton } from "@/components/play-store-button";

const NAV = [
  { href: "#features", label: "Features" },
  { href: "#reports", label: "Reports" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-bg/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Logo />
        <nav className="hidden items-center gap-6 md:flex" aria-label="Page">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted transition-colors duration-150 hover:text-fg"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <PlayStoreButton className="hidden sm:inline-flex" />
        <a
          href={SITE.playStoreUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-11 items-center rounded-md bg-primary px-4 text-sm font-medium text-primary-fg sm:hidden"
        >
          Download
        </a>
      </div>
    </header>
  );
}
