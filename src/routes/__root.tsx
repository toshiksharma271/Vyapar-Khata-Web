import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { SITE } from "@/lib/site";
import appCss from "../styles.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: `${SITE.name} | ${SITE.tagline}` },
      { name: "description", content: SITE.description },
      { name: "theme-color", content: "#2563EB" },
      { name: "application-name", content: SITE.name },
      { name: "author", content: SITE.developer },
      {
        name: "keywords",
        content:
          "Vyapar Khata, GST invoicing, double-entry bookkeeping, billing software India, HSN SAC, accounting app, व्यापार खाता, GST invoice app, Google Drive backup accounting",
      },
      { name: "robots", content: "index,follow" },
    ],
    links: [
      { rel: "icon", type: "image/png", href: "/app-icon.png" },
      { rel: "icon", type: "image/svg+xml", href: "/favicon.png" },
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400&display=swap",
      },
    ],
  }),
  component: () => (
    <html lang="en" className="antialiased" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        <Outlet />
        <Scripts />
      </body>
    </html>
  ),
});
