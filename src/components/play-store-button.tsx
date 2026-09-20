import { SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

export function PlayStoreButton({
  className,
  size = "md",
}: {
  className?: string;
  size?: "md" | "lg";
}) {
  return (
    <a
      href={SITE.playStoreUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Get Vyapar Khata on Google Play"
      className={cn(
        "inline-flex items-center gap-3 rounded-xl bg-ink text-paper transition-[transform,opacity] duration-150 ease-out hover:opacity-90 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40",
        size === "lg" ? "h-14 pl-4 pr-5" : "h-12 pl-3.5 pr-4",
        className,
      )}
    >
      <PlayTriangle className={size === "lg" ? "size-8" : "size-7"} />
      <span className="flex flex-col items-start leading-none">
        <span className="text-[10px] font-medium tracking-wide text-paper/70">GET IT ON</span>
        <span className={cn("font-semibold", size === "lg" ? "text-lg" : "text-base")}>
          Google Play
        </span>
      </span>
    </a>
  );
}

function PlayTriangle({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        d="M3.6 2.2c-.4.2-.6.7-.6 1.3v16.9c0 .6.2 1.1.6 1.3l9.4-9.8L3.6 2.2Z"
        fill="#EA4335"
      />
      <path d="m14.1 12.8 2.7-1.6-9.8-5.7 7.1 7.3Z" fill="#FBBC04" />
      <path d="M16.8 12.8 14.1 11.3 6.9 18.8l9.9-6Z" fill="#34A853" />
      <path
        d="M20.6 10.9c.8.5.8 1.7 0 2.2l-3.8 2.2-2.7-1.6 2.7-1.5 3.8-1.3Z"
        fill="#4285F4"
      />
    </svg>
  );
}
