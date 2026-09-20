import { createFileRoute } from "@tanstack/react-router";
import {
  BookOpen,
  Building2,
  Cloud,
  FileSpreadsheet,
  Moon,
  Package,
  Users,
} from "lucide-react";
import { useState } from "react";
import { PhoneMock } from "@/components/phone-mock";
import { PlayStoreButton } from "@/components/play-store-button";
import { ScrollJourney } from "@/components/scroll-journey";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/")({ component: Home });

const FAQ = [
  {
    q: "What is Vyapar Khata?",
    a: "Vyapar Khata is an Android double-entry ledger. You keep firms, parties, products, GST, cash book, trading account, P&L and balance sheet on your phone. Tagline: Smart Ledger. Simple Business.",
  },
  {
    q: "Does it support GST, HSN and e-way bills?",
    a: "Yes. Products store HSN and GST rate. Entries can carry bill number, taxable value, tax breakdown, e-way bill number, vehicle number and transport distance.",
  },
  {
    q: "Which reports can I export?",
    a: "Cash book, non-cash day book, product day book, trial balance, trading account, profit & loss, and balance sheet. Reports can be shared as PDF.",
  },
  {
    q: "How is data backed up?",
    a: "Sign in with Google. Cloud backup goes to your Google Drive. The home screen shows whether the ledger is synced. One account stays active on a single device.",
  },
  {
    q: "Is it free?",
    a: "The app is free to start. Premium is ₹299 / month or ₹999 / year (Google Play). From 1 Jan 2027, new dated entries require Premium; until then basic use stays open.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: SITE.name,
      alternateName: SITE.hindiName,
      operatingSystem: "Android",
      applicationCategory: "BusinessApplication",
      softwareVersion: SITE.version,
      description: SITE.description,
      downloadUrl: SITE.playStoreUrl,
      installUrl: SITE.playStoreUrl,
      inLanguage: ["en-IN", "hi-IN"],
      offers: [
        { "@type": "Offer", name: "Free", price: "0", priceCurrency: "INR" },
        { "@type": "Offer", name: "Premium monthly", price: "299", priceCurrency: "INR" },
        { "@type": "Offer", name: "Premium yearly", price: "999", priceCurrency: "INR" },
      ],
      author: { "@type": "Person", name: SITE.developer },
    },
    {
      "@type": "FAQPage",
      mainEntity: FAQ.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    },
  ],
};

function Home() {
  return (
    <div className="min-h-dvh overflow-hidden bg-bg text-fg">
      <ScrollJourney />
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      <SiteHeader />
      <main>
        <Hero />
        <TrustBar />
        <Features />
        <Reports />
        <Audience />
        <Pricing />
        <Faq />
        <FinalCta />
      </main>
      <SiteFooter />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#23302b] text-white">
      <div className="absolute inset-0 -z-20 bg-[url('/hero-desk.jpg')] bg-cover bg-center opacity-35" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(20,35,31,.97)_0%,rgba(20,35,31,.88)_43%,rgba(20,35,31,.38)_100%)]" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[0.78fr_1.22fr] lg:py-24">
      <div className="max-w-xl">
        <div className="mb-6 flex items-center gap-3">
          <img
            src="/app-icon.png"
            alt="Vyapar Khata app icon"
            width={56}
            height={56}
            className="size-14 rounded-2xl shadow-lg outline outline-1 -outline-offset-1 outline-white/20"
          />
          <div><p className="text-sm font-semibold text-white">{SITE.name}</p><p className="text-xs text-white/60">{SITE.hindiName} · Built for Indian businesses</p></div>
        </div>
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-[#b9dfcf]">Your business, beautifully accounted for</p>
        <h1 className="max-w-xl text-4xl font-extrabold leading-[1.04] tracking-tight sm:text-6xl">
          The khata that keeps up with your business.
        </h1>
        <p className="mt-6 max-w-lg text-base leading-relaxed text-white/72 sm:text-lg">
          A calm, capable double-entry ledger for parties, stock, GST, cash book and reports. See what is due, what is paid, and what your business is really making.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <PlayStoreButton size="lg" />
          <a
            href="#features"
            className="inline-flex h-12 items-center rounded-md px-4 text-sm font-semibold text-white underline-offset-4 hover:underline"
          >
            Explore the workflow ↓
          </a>
        </div>
        <p className="mt-5 text-sm text-white/50">Android · v{SITE.version} · Made By Toshik Sharma</p>
      </div>
      <PhoneMock />
      </div>
    </section>
  );
}

function TrustBar() {
  const items = [
    "Double-entry ledger",
    "Parties & firms",
    "Product master + HSN",
    "GST & e-way bill",
    "Google Drive backup",
    "Dark mode",
  ];
  return (
    <section className="border-y border-white/10 bg-[#e5ded2]">
      <ul className="mx-auto flex max-w-6xl flex-wrap gap-x-8 gap-y-3 px-4 py-5 text-sm font-medium text-muted sm:px-6">
        {items.map((item) => (
          <li key={item} className="flex items-center gap-2">
            <span className="size-1.5 rounded-full bg-primary" />
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}

const FEATURES = [
  {
    icon: BookOpen,
    title: "True double-entry",
    eyebrow: "Every rupee has a place",
    body: "Record sales, payments and transfers with confidence. Vyapar Khata keeps cash, goods and GST connected in one clear ledger.",
    points: ["Debit and credit stay balanced", "Cash, goods and GST accounts", "Bill numbers and notes"],
    metric: "₹82,450",
    metricLabel: "Cash balance",
  },
  {
    icon: Users,
    title: "Parties, not just names",
    eyebrow: "Know who owes what",
    body: "Keep every customer and supplier in one place. Open a party ledger, check the balance, and follow up before money gets forgotten.",
    points: ["To receive and to pay at a glance", "Customer balances by amount", "Phone and name search"],
    metric: "24",
    metricLabel: "Active parties",
  },
  {
    icon: Package,
    title: "Product Master",
    eyebrow: "Stock that stays in sync",
    body: "Know what you have, what it cost, and what to charge. Product Master brings stock, HSN, GST and pricing into every bill.",
    points: ["Purchase and selling prices", "HSN and GST on every item", "Closing stock in reports"],
    metric: "128",
    metricLabel: "Items in stock",
  },
  {
    icon: Building2,
    title: "Multiple firms",
    eyebrow: "One app, every business",
    body: "Run separate books for each firm without mixing entries. Switch from the header and keep every GSTIN, party and report in its own place.",
    points: ["Separate books for each firm", "GSTIN and business details", "Create a new firm in seconds"],
    metric: "03",
    metricLabel: "Firms ready",
  },
  {
    icon: Cloud,
    title: "Google Drive backup",
    eyebrow: "Your books, backed up",
    body: "Sign in with Google and keep a cloud copy in Drive. The Home screen tells you when your latest changes are safely backed up.",
    points: ["One-tap cloud sync", "Backup status on Home", "Restore when you change phones"],
    metric: "100%",
    metricLabel: "Backup status",
  },
  {
    icon: Moon,
    title: "Light and dark",
    eyebrow: "Comfortable day or night",
    body: "Choose the look that works for you. Light, dark or system mode keeps long bookkeeping sessions easy on the eyes.",
    points: ["System, light and dark modes", "Readable reports at night", "A calm, consistent interface"],
    metric: "24/7",
    metricLabel: "Ready when you are",
  },
];

function Features() {
  const [selected, setSelected] = useState(0);
  const feature = FEATURES[selected];
  const Icon = feature.icon;

  return (
    <section id="features" className="scroll-mt-20 bg-[#e9e2d7] px-4 py-20 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">Made for the way business moves</p>
          <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight text-ink sm:text-5xl">
            Everything your khata needs. Nothing your day does not.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            Tap through the everyday tools that keep your business clear, current and ready for the next decision.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-stretch">
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
            {FEATURES.map((item, index) => {
              const FeatureIcon = item.icon;
              const active = index === selected;
              return (
                <button
                  key={item.title}
                  onClick={() => setSelected(index)}
                  className={`group flex items-center gap-4 rounded-2xl border p-4 text-left transition-all duration-200 ${
                    active
                      ? "border-primary bg-[#176b62] text-white shadow-[0_14px_30px_-18px_rgba(23,107,98,.8)]"
                      : "border-[#d9d1c5] bg-[#fffdf9]/70 text-ink hover:-translate-y-0.5 hover:border-primary/40 hover:bg-[#fffdf9]"
                  }`}
                >
                  <span className={`flex size-11 shrink-0 items-center justify-center rounded-xl ${active ? "bg-white/15" : "bg-primary-light text-primary"}`}>
                    <FeatureIcon className="size-5" strokeWidth={1.8} />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className={`block text-sm font-bold ${active ? "text-white" : "text-ink"}`}>{item.title}</span>
                    <span className={`mt-1 block text-xs ${active ? "text-white/65" : "text-muted"}`}>{item.eyebrow}</span>
                  </span>
                  <span className={`text-lg transition-transform ${active ? "translate-x-0 text-white" : "-translate-x-1 text-subtle group-hover:translate-x-0"}`}>→</span>
                </button>
              );
            })}
          </div>

          <div className="relative overflow-hidden rounded-[2rem] bg-[#173d38] p-6 text-white shadow-[0_24px_50px_-28px_rgba(23,61,56,.9)] sm:p-9">
            <div className="absolute -right-20 -top-20 size-64 rounded-full border border-white/10" />
            <div className="absolute -bottom-32 -left-20 size-72 rounded-full border border-white/10" />
            <div className="relative flex h-full flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-4">
                  <span className="flex size-12 items-center justify-center rounded-2xl bg-[#b9dfcf]/15 text-[#b9dfcf]"><Icon className="size-6" strokeWidth={1.7} /></span>
                  <span className="rounded-full border border-white/15 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-white/55">{String(selected + 1).padStart(2, "0")} / 06</span>
                </div>
                <p className="mt-10 text-sm font-bold uppercase tracking-[0.16em] text-[#b9dfcf]">{feature.eyebrow}</p>
                <h3 className="mt-3 max-w-lg text-3xl font-bold tracking-tight sm:text-4xl">{feature.title}</h3>
                <p className="mt-5 max-w-lg text-sm leading-relaxed text-white/70 sm:text-base">{feature.body}</p>
                <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                  {feature.points.map((point) => <li key={point} className="flex items-start gap-2 text-sm text-white/85"><span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-[#b9dfcf]" />{point}</li>)}
                </ul>
              </div>
              <div className="mt-10 flex items-end justify-between gap-6 border-t border-white/15 pt-5">
                <div><p className="text-3xl font-bold tabular-nums">{feature.metric}</p><p className="mt-1 text-xs text-white/55">{feature.metricLabel}</p></div>
                <p className="max-w-[180px] text-right text-xs leading-relaxed text-white/45">Built to feel simple on the first tap and dependable after a thousand entries.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Reports() {
  const [selectedReport, setSelectedReport] = useState("Cash book");
  const reports = [
    { name: "Cash book", value: "₹82,450", label: "Closing balance", tone: "green" },
    { name: "Product day book", value: "128 items", label: "Stock movement", tone: "purple" },
    { name: "Trading account", value: "₹4.82L", label: "Gross sales", tone: "amber" },
    { name: "Profit & loss", value: "₹1.09L", label: "Net profit", tone: "green" },
    { name: "Balance sheet", value: "₹6.48L", label: "Total assets", tone: "blue" },
  ];
  const activeReport = reports.find((report) => report.name === selectedReport) ?? reports[0];

  return (
    <section id="reports" className="scroll-mt-20 bg-[#173d38] text-white">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#b9dfcf]">Reports that answer questions</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-5xl">From today&apos;s cash to the bigger picture.</h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/65 sm:text-lg">
            Choose a report, set a date, and see the story behind your numbers. Clear enough for you, complete enough for your CA.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="flex flex-wrap content-start gap-2 lg:flex-col">
            {reports.map((report) => (
              <button
                key={report.name}
                onClick={() => setSelectedReport(report.name)}
                className={`flex items-center justify-between rounded-xl border px-4 py-3 text-left text-sm font-semibold transition-all lg:w-full ${
                  selectedReport === report.name
                    ? "border-[#b9dfcf] bg-[#b9dfcf] text-[#173d38]"
                    : "border-white/15 bg-white/5 text-white/75 hover:border-white/35 hover:bg-white/10"
                }`}
              >
                {report.name}
                <span className="text-lg">→</span>
              </button>
            ))}
          </div>

          <div className="rounded-[2rem] bg-[#fffdf9] p-5 text-ink shadow-[0_25px_60px_-35px_rgba(0,0,0,.8)] sm:p-8">
            <div className="flex flex-wrap items-start justify-between gap-4 border-b border-border pb-5">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary">{activeReport.name}</p>
                <p className="mt-2 text-sm text-muted">Sharma Traders · Up to 30 Jun 2026</p>
              </div>
              <button className="inline-flex items-center gap-2 rounded-lg border border-border px-3 py-2 text-xs font-bold text-fg hover:border-primary/40">
                <FileSpreadsheet className="size-4 text-primary" /> Share PDF
              </button>
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-[1.1fr_0.9fr]">
              <div className={`rounded-2xl p-5 ${activeReport.tone === "green" ? "bg-[#e6f3ee]" : activeReport.tone === "amber" ? "bg-[#fdf1e2]" : activeReport.tone === "purple" ? "bg-[#eee9f8]" : "bg-[#e8eff8]"}`}>
                <p className="text-xs font-semibold text-muted">{activeReport.label}</p>
                <p className="mt-2 text-3xl font-extrabold tracking-tight text-ink">{activeReport.value}</p>
                <p className="mt-2 text-xs font-medium text-muted">Compared with last period <span className="font-bold text-green">+12.8%</span></p>
              </div>
              <div className="rounded-2xl border border-border p-5">
                <p className="text-xs font-semibold text-muted">GST payable</p>
                <p className="mt-2 text-2xl font-extrabold text-ink">₹47,880</p>
                <p className="mt-2 text-xs text-muted">Input and output tax included</p>
              </div>
            </div>
            <div className="mt-6 overflow-hidden rounded-xl border border-border">
              <div className="grid grid-cols-[1fr_auto] bg-[#f3efe8] px-4 py-2 text-[10px] font-bold uppercase tracking-wider text-muted"><span>Recent entry</span><span>Amount</span></div>
              {["Sharma Electricals · Sale #1042", "Mehta Kirana · Payment received", "Cash · Purchase #118"].map((entry, index) => (
                <div key={entry} className="grid grid-cols-[1fr_auto] border-t border-border px-4 py-3 text-xs"><span className="text-fg">{entry}</span><span className={`font-bold ${index === 1 ? "text-green" : "text-ink"}`}>{index === 1 ? "+₹12,508" : index === 0 ? "₹8,400" : "₹4,250"}</span></div>
              ))}
            </div>
            <p className="mt-4 text-xs text-subtle">Live totals come from the entries in your firm.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Audience() {
  const [selectedRole, setSelectedRole] = useState(0);
  const roles = [
    { title: "Shop owners", icon: Package, body: "Keep purchases, sales, stock and customer dues together while you run the counter.", tag: "Sell with clarity" },
    { title: "Service businesses", icon: Users, body: "Track clients, invoices and payments without turning every follow-up into a spreadsheet hunt.", tag: "Get paid on time" },
    { title: "Small manufacturers", icon: Building2, body: "Follow goods, costs and parties across the business, from purchase to closing stock.", tag: "See the full picture" },
    { title: "Independent professionals", icon: BookOpen, body: "Keep a clean record of income, expenses and outstanding work while staying focused on clients.", tag: "Work, then reconcile" },
    { title: "CAs and bookkeepers", icon: FileSpreadsheet, body: "Give every firm a readable trail of entries, reports and balances ready for review.", tag: "Close books faster" },
  ];
  const role = roles[selectedRole];
  const RoleIcon = role.icon;

  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
      <div className="max-w-2xl">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">Built around real work</p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-5xl">A better day for every kind of business.</h2>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">Whether you sell products, time or expertise, your books should help you move forward instead of slowing you down.</p>
      </div>
      <div className="mt-12 grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
          {roles.map((item, index) => {
            const ItemIcon = item.icon;
            const active = selectedRole === index;
            return <button key={item.title} onClick={() => setSelectedRole(index)} className={`flex items-center gap-3 rounded-xl border p-4 text-left transition-all ${active ? "border-primary bg-primary text-white shadow-[var(--shadow-card)]" : "border-border bg-paper/60 text-fg hover:border-primary/40 hover:bg-paper"}`}><span className={`flex size-9 shrink-0 items-center justify-center rounded-lg ${active ? "bg-white/15" : "bg-primary-light text-primary"}`}><ItemIcon className="size-4" /></span><span className="flex-1 text-sm font-bold">{item.title}</span><span className="text-lg">→</span></button>;
          })}
        </div>
        <div className="relative overflow-hidden rounded-[2rem] bg-[#e8f3ed] p-7 sm:p-9">
          <div className="absolute -right-16 -top-16 size-48 rounded-full border border-primary/10" />
          <div className="relative">
            <span className="flex size-14 items-center justify-center rounded-2xl bg-primary text-white shadow-lg"><RoleIcon className="size-7" strokeWidth={1.7} /></span>
            <p className="mt-9 text-sm font-bold uppercase tracking-[0.16em] text-primary">{role.tag}</p>
            <h3 className="mt-3 text-3xl font-bold tracking-tight text-ink">For {role.title.toLowerCase()}.</h3>
            <p className="mt-4 max-w-md text-base leading-relaxed text-muted">{role.body}</p>
            <div className="mt-8 flex items-center gap-3 border-t border-primary/15 pt-5 text-sm font-semibold text-primary"><span className="flex size-7 items-center justify-center rounded-full bg-white">✓</span> One calm place for the numbers that matter</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  const [billing, setBilling] = useState<"monthly" | "yearly">("yearly");
  const yearly = billing === "yearly";

  return (
    <section id="pricing" className="scroll-mt-20 bg-[#23302b] text-white">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#b9dfcf]">Simple plans for serious books</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-5xl">Start free. Upgrade when you are ready.</h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/65 sm:text-lg">Get the complete day-to-day ledger first. Premium is there when your growing business needs uninterrupted entries and more room to work.</p>
          </div>
          <div className="flex self-start rounded-full border border-white/15 bg-white/10 p-1 text-sm font-semibold lg:self-auto">
            <button onClick={() => setBilling("monthly")} className={`rounded-full px-4 py-2 transition-colors ${!yearly ? "bg-white text-[#23302b]" : "text-white/65 hover:text-white"}`}>Monthly</button>
            <button onClick={() => setBilling("yearly")} className={`rounded-full px-4 py-2 transition-colors ${yearly ? "bg-[#b9dfcf] text-[#23302b]" : "text-white/65 hover:text-white"}`}>Yearly · save more</button>
          </div>
        </div>
        <div className="mt-12 grid gap-4 lg:grid-cols-2">
          <article className="rounded-[1.75rem] bg-[#fffdf9] p-7 text-fg sm:p-8">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-primary">Free</p>
            <h3 className="mt-3 text-2xl font-bold text-ink">Everything to get started</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">A complete khata for building the habit and keeping your daily books in order.</p>
            <p className="mt-7 text-4xl font-extrabold text-ink">₹0 <span className="text-base font-medium text-muted">forever</span></p>
            <ul className="mt-7 grid gap-3 text-sm text-fg sm:grid-cols-2">{["Double-entry ledger", "Parties and balances", "Product Master", "GST-ready entries", "Reports and PDF sharing", "Google Drive backup"].map((item) => <li key={item} className="flex gap-2"><span className="text-primary">✓</span>{item}</li>)}</ul>
          </article>
          <article className="relative overflow-hidden rounded-[1.75rem] border border-[#b9dfcf]/50 bg-[#176b62] p-7 text-white shadow-[0_25px_55px_-30px_rgba(23,107,98,.9)] sm:p-8">
            <span className="absolute right-6 top-6 rounded-full bg-[#b9dfcf] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#173d38]">Best value</span>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#b9dfcf]">Premium</p>
            <h3 className="mt-3 text-2xl font-bold">More room as you grow</h3>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-white/65">Keep your books moving without waiting for the next billing cycle.</p>
            <p className="mt-7 text-4xl font-extrabold">{yearly ? "₹999" : "₹299"} <span className="text-base font-medium text-white/65">/ {yearly ? "year" : "month"}</span></p>
            {yearly && <p className="mt-1 text-sm font-semibold text-[#b9dfcf]">That is ₹83 per month</p>}
            <ul className="mt-7 grid gap-3 text-sm text-white/90 sm:grid-cols-2">{["Everything in Free", "Uninterrupted entries", "Restore on another phone", "Priority for growing firms"].map((item) => <li key={item} className="flex gap-2"><span className="text-[#b9dfcf]">✓</span>{item}</li>)}</ul>
            <div className="mt-8 border-t border-white/15 pt-5 text-xs text-white/55">Available through Google Play on Android.</div>
          </article>
        </div>
      </div>
    </section>
  );
}

function Faq() {
  const [openQuestion, setOpenQuestion] = useState(0);

  return (
    <section id="faq" className="scroll-mt-20 bg-[#e9e2d7] px-4 py-20 sm:px-6 sm:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.75fr_1.25fr]">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">A little clarity</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-5xl">Questions, answered simply.</h2>
          <p className="mt-5 max-w-sm text-base leading-relaxed text-muted">Still deciding? Here are the things business owners usually ask before moving their books to Vyapar Khata.</p>
          <a href={`mailto:${SITE.supportEmail}`} className="mt-7 inline-flex text-sm font-bold text-primary underline-offset-4 hover:underline">Ask us a question →</a>
        </div>
        <div className="rounded-[1.5rem] border border-border bg-[#fffdf9] px-5 shadow-[var(--shadow-card)] sm:px-7">
          {FAQ.map((item, index) => {
            const open = openQuestion === index;
            return <div key={item.q} className="border-b border-border last:border-b-0"><button onClick={() => setOpenQuestion(open ? -1 : index)} className="flex w-full items-center justify-between gap-5 py-5 text-left text-sm font-bold text-fg sm:text-base"><span>{item.q}</span><span className={`flex size-7 shrink-0 items-center justify-center rounded-full ${open ? "bg-primary text-white" : "bg-primary-light text-primary"}`}>{open ? "−" : "+"}</span></button>{open && <p className="-mt-1 pb-5 pr-10 text-sm leading-relaxed text-muted">{item.a}</p>}</div>;
          })}
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="border-t border-border bg-primary-light">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-4 py-16 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div className="flex items-center gap-4">
          <img
            src="/app-icon.png"
            alt=""
            width={64}
            height={64}
            className="size-16 rounded-2xl outline outline-1 -outline-offset-1 outline-ink/10"
          />
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-ink">Download Vyapar Khata</h2>
            <p className="mt-1 max-w-md text-sm leading-relaxed text-muted">{SITE.tagline}</p>
          </div>
        </div>
        <PlayStoreButton size="lg" />
      </div>
    </section>
  );
}
