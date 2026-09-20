import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: `Privacy policy | ${SITE.name}` },
      {
        name: "description",
        content: `How ${SITE.name} handles your accounting data, Google Sign-In, and Drive backups.`,
      },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <div className="min-h-dvh bg-bg text-fg">
      <SiteHeader />
      <main className="mx-auto max-w-2xl px-4 py-12 sm:px-6 sm:py-16">
        <p className="text-sm text-muted">
          <Link to="/" className="hover:text-fg">
            Home
          </Link>
          <span className="mx-2">/</span>
          Privacy
        </p>
        <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-ink">
          Privacy policy
        </h1>
        <p className="mt-2 text-sm text-subtle">Last updated 30 July 2026</p>
        <div className="mt-8 space-y-6 text-sm leading-relaxed text-muted">
          <p>
            {SITE.name} is an Android accounting app. This page summarises how we handle information,
            based on the Play Store data-safety declaration.
          </p>
          <section>
            <h2 className="font-display text-xl font-semibold text-ink">What we collect</h2>
            <p className="mt-2">
              The app may collect personal information, photos and videos, and related accounting
              records you enter (parties, invoices, ledgers). Authentication uses Google Sign-In.
              Backups may be stored in your Google Drive.
            </p>
          </section>
          <section>
            <h2 className="font-display text-xl font-semibold text-ink">Sharing</h2>
            <p className="mt-2">
              No data is shared with third parties according to the current Play Store listing. Data
              is encrypted in transit. You can request that data be deleted.
            </p>
          </section>
          <section>
            <h2 className="font-display text-xl font-semibold text-ink">Contact</h2>
            <p className="mt-2">
              Email{" "}
              <a className="text-fg underline-offset-2 hover:underline" href={`mailto:${SITE.supportEmail}`}>
                {SITE.supportEmail}
              </a>
              . Developer: {SITE.developer}, {SITE.address}.
            </p>
          </section>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
