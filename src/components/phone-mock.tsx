import {
  BarChart3,
  BatteryFull,
  Check,
  ChevronDown,
  ChevronRight,
  Cloud,
  Home,
  Package,
  Plus,
  SignalHigh,
  UserCircle,
  Users,
  Wifi,
} from "lucide-react";
import { useState } from "react";

type AppTab = "Home" | "Parties" | "Reports" | "Profile";

const tabs: Array<{ name: AppTab; icon: typeof Home }> = [
  { name: "Home", icon: Home },
  { name: "Parties", icon: Users },
  { name: "Reports", icon: BarChart3 },
  { name: "Profile", icon: UserCircle },
];

export function PhoneMock() {
  const [activeTab, setActiveTab] = useState<AppTab>("Home");
  const [firmOpen, setFirmOpen] = useState(false);
  const [synced, setSynced] = useState(true);
  const [notice, setNotice] = useState("");

  const showNotice = (message: string) => {
    setNotice(message);
    window.setTimeout(() => setNotice(""), 2200);
  };

  return (
    <div className="relative mx-auto w-full max-w-[300px] min-w-0 lg:mr-10">
      {/* Side buttons */}
      <div className="absolute -left-[3px] top-24 hidden h-9 w-[3px] rounded-l-sm bg-[#3d433e] sm:block" />
      <div className="absolute -right-[3px] top-28 hidden h-16 w-[3px] rounded-r-sm bg-[#3d433e] sm:block" />

      {/* Device frame */}
      <div className="rounded-[3rem] border border-white/25 bg-[linear-gradient(140deg,#4a504c_0%,#1a1d1b_18%,#080908_50%,#33382f_100%)] p-[10px] shadow-[0_36px_80px_-24px_rgba(0,0,0,.9)]">
        <div className="relative flex aspect-[9/19.5] min-w-0 flex-col overflow-hidden rounded-[2.4rem] border border-black/70 bg-[#f8f7f2] shadow-[inset_0_0_0_1px_rgba(255,255,255,.3)]">
          {/* Dynamic island */}
          <div className="absolute left-1/2 top-2.5 z-20 h-6 w-24 -translate-x-1/2 rounded-full bg-[#0c0d0c]" />

          {/* Status bar */}
          <div className="flex shrink-0 items-center justify-between px-6 pb-1 pt-3.5 text-[#1c2624]">
            <span className="text-[11px] font-semibold tabular-nums">9:41</span>
            <div className="flex items-center gap-1.5">
              <SignalHigh className="size-3" strokeWidth={2.2} />
              <Wifi className="size-3" strokeWidth={2.2} />
              <BatteryFull className="size-4" strokeWidth={2} />
            </div>
          </div>

          {/* App header */}
          <div className="relative shrink-0 bg-[#146b61] px-4 pb-3.5 pt-2.5 text-white">
            <div className="flex min-w-0 items-center justify-between gap-2">
              <button
                onClick={() => setFirmOpen((open) => !open)}
                className="flex min-w-0 items-center gap-2 rounded-full bg-white/10 py-1.5 pl-1.5 pr-2.5 text-left transition-colors hover:bg-white/20"
              >
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-[#d7f0e6] text-[10px] font-bold text-[#146b61]">
                  VK
                </span>
                <span className="truncate text-[13px] font-semibold">Sharma Traders</span>
                <ChevronDown
                  className={`size-3.5 shrink-0 text-white/60 transition-transform ${firmOpen ? "rotate-180" : ""}`}
                />
              </button>
              <button
                aria-label="Sync cloud data"
                onClick={() => {
                  setSynced(false);
                  showNotice("Syncing your ledger…");
                  window.setTimeout(() => {
                    setSynced(true);
                    showNotice("Cloud backup up to date");
                  }, 1000);
                }}
                className="shrink-0 rounded-full p-2 hover:bg-white/15"
              >
                <Cloud className={`size-[18px] ${synced ? "text-emerald-200" : "animate-pulse text-amber-200"}`} />
              </button>
            </div>

            {firmOpen && <FirmMenu onClose={() => setFirmOpen(false)} />}
          </div>

          {/* Scrollable content */}
          <div className="min-h-0 min-w-0 flex-1 overflow-y-auto p-3.5 [scrollbar-width:none] sm:p-4">
            {activeTab === "Home" && <HomePanel onParties={() => setActiveTab("Parties")} onNotice={showNotice} />}
            {activeTab === "Parties" && <PartiesPanel onNotice={showNotice} />}
            {activeTab === "Reports" && <ReportsPanel onNotice={showNotice} />}
            {activeTab === "Profile" && <ProfilePanel />}
          </div>

          {notice && (
            <div className="absolute bottom-[76px] left-1/2 z-30 flex -translate-x-1/2 items-center gap-1.5 whitespace-nowrap rounded-full bg-[#1c2624] px-3.5 py-2 text-[11px] font-medium text-white shadow-xl">
              <Check className="size-3.5 text-emerald-300" />
              {notice}
            </div>
          )}

          {/* Tab bar */}
          <div className="grid shrink-0 grid-cols-4 border-t border-[#e8e7e1] bg-white px-2 pb-1.5 pt-2">
            {tabs.map(({ name, icon: Icon }) => (
              <button
                key={name}
                onClick={() => setActiveTab(name)}
                className={`flex flex-col items-center gap-1 rounded-lg py-1 text-[10px] font-semibold transition-colors ${
                  activeTab === name ? "text-[#146b61]" : "text-[#9a9f9a]"
                }`}
              >
                <Icon className="size-[18px]" strokeWidth={activeTab === name ? 2.4 : 1.8} />
                {name}
              </button>
            ))}
          </div>
          <div className="mx-auto mb-1.5 h-1 w-28 shrink-0 rounded-full bg-[#1c2624]/15" />
        </div>
      </div>

      <div className="absolute -right-3 top-24 hidden rounded-full border border-[#e8e7e1] bg-white px-3 py-2 text-[11px] font-semibold text-[#1c2624] shadow-lg sm:block">
        Interactive demo — try the tabs
      </div>
    </div>
  );
}

function FirmMenu({ onClose }: { onClose: () => void }) {
  return (
    <div className="absolute left-3 right-3 top-full z-20 mt-2 rounded-2xl border border-black/5 bg-white p-2.5 text-[#25302e] shadow-2xl">
      <p className="px-2 pt-1 text-[10px] font-semibold text-[#9a9f9a]">Switch firm</p>
      <button
        onClick={onClose}
        className="mt-1.5 flex w-full items-center justify-between rounded-xl bg-[#e6f3ee] px-3 py-2.5 text-left text-[13px] font-semibold text-[#146b61]"
      >
        <span>Sharma Traders</span>
        <Check className="size-4" />
      </button>
      <button
        onClick={onClose}
        className="mt-1 w-full rounded-xl px-3 py-2.5 text-left text-[13px] font-medium text-[#8a8f8a] hover:bg-[#f5f3ee]"
      >
        + Create new firm
      </button>
    </div>
  );
}

function HomePanel({ onParties, onNotice }: { onParties: () => void; onNotice: (message: string) => void }) {
  return (
    <>
      <div className="grid grid-cols-2 gap-2.5">
        <Summary label="To receive" value="₹48,200" tone="receivable" />
        <Summary label="To pay" value="₹12,450" tone="payable" />
      </div>

      <button
        onClick={() => onNotice("Opening Product Master…")}
        className="mt-3.5 flex w-full items-center gap-3 rounded-xl border border-[#e2ded2] bg-[#fffdf9] p-3 text-left transition-colors hover:border-[#146b61]/40"
      >
        <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-[#e6f3ee] text-[#146b61]">
          <Package className="size-4" />
        </div>
        <div className="min-w-0">
          <p className="text-[13px] font-semibold text-[#25302e]">Product Master</p>
          <p className="mt-0.5 truncate text-[11px] text-[#8c918e]">Manage stock, prices & items</p>
        </div>
        <ChevronRight className="ml-auto size-4 shrink-0 text-[#b7bcb8]" />
      </button>

      <div className="mt-4 flex items-center justify-between border-b border-[#eceae3] pb-2">
        <p className="text-[13px] font-semibold text-[#25302e]">Customer balances</p>
        <button onClick={onParties} className="text-[11px] font-semibold text-[#146b61]">
          View all
        </button>
      </div>
      <div className="divide-y divide-[#eeeeea]">
        <Balance name="Mehta Kirana" detail="98765 43210" amount="₹8,400" positive />
        <Balance name="Ravi Transport" detail="Recent payment" amount="₹3,200" />
      </div>
    </>
  );
}

function PartiesPanel({ onNotice }: { onNotice: (message: string) => void }) {
  return (
    <>
      <PanelHeading
        title="Customers"
        subtitle="Manage your business parties"
        action="Add party"
        onAction={() => onNotice("Party form ready")}
      />
      <div className="mt-3.5 space-y-2">
        <Balance name="Mehta Kirana" detail="98765 43210" amount="₹8,400" positive />
        <Balance name="Sharma Electricals" detail="98290 11442" amount="₹5,650" positive />
        <Balance name="Ravi Transport" detail="Payment due" amount="₹3,200" />
      </div>
    </>
  );
}

function ReportsPanel({ onNotice }: { onNotice: (message: string) => void }) {
  return (
    <>
      <PanelHeading
        title="Reports"
        subtitle="Books a CA can read"
        action="30 Jun 2026"
        onAction={() => onNotice("Choose a reporting period")}
        variant="neutral"
      />
      <div className="mt-3.5 grid grid-cols-2 gap-2">
        <Report name="Cash book" value="₹82,450" />
        <Report name="Trading account" value="₹4.82L" />
        <Report name="Profit & loss" value="₹1.09L" />
        <Report name="Balance sheet" value="Ready" />
      </div>
      <div className="mt-3 rounded-xl bg-[#e6f3ee] p-3">
        <p className="text-[11px] font-semibold text-[#43826b]">GST payable</p>
        <p className="mt-1 text-xl font-bold text-[#146b61]">₹47,880</p>
      </div>
    </>
  );
}

function ProfilePanel() {
  return (
    <>
      <p className="text-base font-bold text-[#202c2a]">Profile</p>
      <p className="mt-0.5 text-[11px] text-[#8a918d]">Your account and firm settings</p>
      <div className="mt-5 flex items-center gap-3 rounded-2xl bg-[#e6f3ee] p-3">
        <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#146b61] text-sm font-bold text-white">
          TS
        </span>
        <div className="min-w-0">
          <p className="truncate text-[13px] font-semibold text-[#25302e]">Toshik Sharma</p>
          <p className="truncate text-[11px] text-[#658077]">Sharma Traders</p>
        </div>
      </div>
      <div className="mt-3 space-y-2">
        <Report name="Plan" value="Free plan" />
        <Report name="Accounts" value="24 ledgers" />
        <Report name="Backup" value="Google Drive" />
      </div>
    </>
  );
}

function PanelHeading({
  title,
  subtitle,
  action,
  onAction,
  variant = "primary",
}: {
  title: string;
  subtitle: string;
  action: string;
  onAction: () => void;
  variant?: "primary" | "neutral";
}) {
  return (
    <div className="flex items-start justify-between gap-3">
      <div className="min-w-0">
        <p className="text-base font-bold text-[#202c2a]">{title}</p>
        <p className="mt-0.5 text-[11px] text-[#8a918d]">{subtitle}</p>
      </div>
      <button
        onClick={onAction}
        className={
          variant === "primary"
            ? "flex shrink-0 items-center gap-1 rounded-lg bg-[#146b61] px-2.5 py-2 text-[11px] font-semibold text-white hover:bg-[#0f5049]"
            : "shrink-0 rounded-lg border border-[#dcdad2] px-2.5 py-2 text-[11px] font-semibold text-[#5b615c] hover:border-[#146b61]/40"
        }
      >
        {variant === "primary" && <Plus className="size-3" />}
        {action}
      </button>
    </div>
  );
}

function Summary({ label, value, tone }: { label: string; value: string; tone: "receivable" | "payable" }) {
  const isReceivable = tone === "receivable";
  return (
    <div className={`rounded-xl p-3 ${isReceivable ? "bg-[#e6f3ee]" : "bg-[#fdf1e2]"}`}>
      <p className="text-[11px] font-medium text-[#77827b]">{label}</p>
      <p className={`mt-1 text-lg font-bold ${isReceivable ? "text-[#146b61]" : "text-[#a16615]"}`}>{value}</p>
    </div>
  );
}

function Balance({
  name,
  detail,
  amount,
  positive = false,
}: {
  name: string;
  detail: string;
  amount: string;
  positive?: boolean;
}) {
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .join("");

  return (
    <div className="flex items-center gap-3 py-2.5">
      <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#e6f3ee] text-[10px] font-bold text-[#146b61]">
        {initials}
      </span>
      <div className="min-w-0 flex-1">
        <p className="truncate text-[13px] font-semibold text-[#2b3432]">{name}</p>
        <p className="truncate text-[11px] text-[#929895]">{detail}</p>
      </div>
      <p className={`shrink-0 text-[13px] font-bold ${positive ? "text-[#1a8a62]" : "text-[#a16615]"}`}>
        {positive ? "+" : "-"}
        {amount}
      </p>
    </div>
  );
}

function Report({ name, value }: { name: string; value: string }) {
  return (
    <div className="rounded-xl border border-[#e7e9e7] bg-white p-3">
      <p className="text-[11px] font-medium text-[#8a918d]">{name}</p>
      <p className="mt-1 text-sm font-bold text-[#25302e]">{value}</p>
    </div>
  );
}