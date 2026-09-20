import { Link } from "@tanstack/react-router";
import { SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      to="/"
      className={cn("inline-flex items-center gap-2.5 text-fg", className)}
      aria-label={`${SITE.name} home`}
    >
      <img
        src="/app-icon.png"
        alt=""
        width={36}
        height={36}
        className="size-9 rounded-lg outline outline-1 -outline-offset-1 outline-ink/10"
      />
      <span className="flex flex-col leading-none">
        <span className="text-base font-semibold tracking-tight">{SITE.name}</span>
        <span className="mt-0.5 text-xs font-medium text-muted">{SITE.tagline}</span>
      </span>
    </Link>
  );
}
