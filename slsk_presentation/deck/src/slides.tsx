import type { ReactNode } from 'react'

export type SlideComponent = () => JSX.Element

function DeckHeader({ section }: { section: string }) {
  return (
    <header className="z-20 flex shrink-0 items-center justify-between border-b border-outline-variant/30 bg-white px-12 py-5">
      <div className="font-headline text-lg font-black uppercase tracking-widest text-primary">CalibtOS</div>
      <div className="flex items-center gap-4">
        <div className="h-px w-12 bg-outline-variant/40" />
        <span className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant">{section}</span>
      </div>
    </header>
  )
}

function DeckFooter({ num }: { num: string }) {
  return (
    <footer className="z-20 flex shrink-0 items-center justify-between border-t border-outline-variant/30 bg-white px-12 py-4">
      <div className="text-[10px] font-medium uppercase tracking-widest text-on-surface-variant">
        © 2026 <span className="font-bold text-secondary">CalibtOS</span> · Proprietary & confidential · SLSK Ventures
      </div>
      <div className="flex items-center gap-4">
        <span className="font-headline text-sm font-bold tabular-nums text-primary">{num}</span>
        <div className="h-1 w-12 bg-primary" />
      </div>
    </footer>
  )
}

function SlideShell({ children }: { children: ReactNode }) {
  return <div className="slide-shell bg-background font-body text-on-surface antialiased selection:bg-secondary/20">{children}</div>
}

function Slide01() {
  return (
    <SlideShell>
      <DeckHeader section="Section 01 · Strategic overview" />
      <main className="relative z-10 flex min-h-0 flex-1 flex-col items-center justify-center px-16 text-center">
        <div className="pointer-events-none absolute inset-0 z-0">
          <div className="absolute right-0 top-0 h-full w-2/3 translate-x-32 skew-x-[-15deg] bg-surface-container-low" />
          <div className="absolute bottom-0 left-0 h-1/2 w-1/3 bg-secondary/5 blur-[120px]" />
        </div>
        <div className="relative z-10 max-w-5xl">
          <div className="mb-10 inline-flex items-center gap-3 rounded-full border border-outline-variant/20 bg-surface-container-high px-5 py-2 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-secondary" />
            <span className="font-label text-xs font-bold uppercase tracking-[0.25em] text-on-surface-variant">Confidential Presentation</span>
          </div>
          <h1 className="mb-8 font-headline text-6xl font-extrabold leading-[1.1] tracking-tight text-primary md:text-7xl">
            Business Analysis & <br />
            <span className="text-secondary">Odoo ERP</span> Implementation
          </h1>
          <p className="mb-16 max-w-3xl font-body text-xl leading-relaxed text-on-surface-variant md:text-2xl">
            Transitioning SLSK Ventures from <span className="font-semibold text-primary">Founder-Led</span> to{' '}
            <span className="font-semibold text-secondary">Data-Driven</span> Operations.
          </p>
          <div className="flex items-center justify-center gap-12 border-t border-outline-variant/20 pt-12">
            <div className="text-left">
              <span className="mb-1 block font-label text-[10px] uppercase tracking-widest text-secondary">Prepared by</span>
              <span className="block font-headline text-lg font-bold text-primary">CalibtOS GmbH</span>
            </div>
            <div className="h-10 w-px bg-outline-variant/30" />
            <div className="text-left">
              <span className="mb-1 block font-label text-[10px] uppercase tracking-widest text-secondary">Date</span>
              <span className="block font-headline text-lg font-bold text-primary">March 2026</span>
            </div>
            <div className="h-10 w-px bg-outline-variant/30" />
            <div className="text-left">
              <span className="mb-1 block font-label text-[10px] uppercase tracking-widest text-secondary">Client</span>
              <span className="block font-headline text-lg font-bold text-primary">SLSK Ventures</span>
            </div>
          </div>
        </div>
        <div className="absolute -bottom-24 -right-24 h-48 w-48 rounded-full bg-secondary/5 blur-3xl" />
        <div className="absolute left-8 top-1/2 h-40 w-px -translate-y-1/2 bg-outline-variant/20" />
        <div className="absolute right-8 top-1/2 h-40 w-px -translate-y-1/2 bg-outline-variant/20" />
      </main>
      <DeckFooter num="01" />
    </SlideShell>
  )
}

function Slide02() {
  return (
    <SlideShell>
      <DeckHeader section="Section 02 · Market traction" />
      <main className="flex min-h-0 flex-1 flex-col justify-between px-12 py-5">
        <section className="mb-4 shrink-0">
          <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-secondary">Phase 1 · Market context</p>
          <h2 className="max-w-4xl font-headline text-5xl font-extrabold leading-tight tracking-tight text-primary">
            Market Traction Snapshot: <span className="text-secondary">Growth Outpacing Manual Operations.</span>
          </h2>
          <div className="mt-3 h-0.5 w-16 bg-secondary" />
        </section>
        <div className="grid min-h-0 flex-1 grid-cols-12 items-start gap-6">
          <div className="col-span-8 grid grid-cols-3 gap-4">
            <div className="flex flex-col justify-between rounded-xl border border-outline-variant/30 bg-white p-5 shadow-sm">
              <div className="mb-3 flex items-center justify-between">
                <span className="material-symbols-outlined text-xl text-secondary">trending_up</span>
                <span className="rounded bg-secondary-container px-2 py-0.5 text-[9px] font-bold uppercase text-secondary">Growth</span>
              </div>
              <div>
                <div className="font-headline text-4xl font-extrabold text-primary">#516</div>
                <div className="mt-1 text-[10px] font-semibold uppercase tracking-widest text-on-surface-variant">Amazon.de Rank</div>
              </div>
            </div>
            <div className="flex flex-col justify-between rounded-xl border border-outline-variant/30 bg-white p-5 shadow-sm">
              <div className="mb-3 flex items-center justify-between">
                <span className="material-symbols-outlined text-xl text-primary">language</span>
                <span className="rounded bg-primary-container/10 px-2 py-0.5 text-[9px] font-bold uppercase text-primary">EU Reach</span>
              </div>
              <div>
                <div className="font-headline text-4xl font-extrabold text-primary">10</div>
                <div className="mt-1 text-[10px] font-semibold uppercase tracking-widest text-on-surface-variant">Active Marketplaces</div>
              </div>
            </div>
            <div className="flex flex-col justify-between rounded-xl border border-outline-variant/30 bg-white p-5 shadow-sm">
              <div className="mb-3 flex items-center justify-between">
                <span className="material-symbols-outlined text-xl text-secondary">verified</span>
                <span className="rounded bg-secondary/10 px-2 py-0.5 text-[9px] font-bold uppercase text-secondary">Trust</span>
              </div>
              <div>
                <div className="font-headline text-4xl font-extrabold text-primary">1,883+</div>
                <div className="mt-1 text-[10px] font-semibold uppercase tracking-widest text-on-surface-variant">Amazon.de Reviews</div>
              </div>
            </div>
            <div className="col-span-3 mt-2">
              <p className="text-sm font-light leading-relaxed text-on-surface-variant">
                SLSK has achieved remarkable scale across the European landscape. However, the absence of a central ERP creates a profound
                structural bottleneck for pan-European operations. Scalability now depends on digital infrastructure rather than headcount.
              </p>
            </div>
          </div>
          <div className="col-span-4 h-full">
            <div className="relative flex h-full flex-col justify-center overflow-hidden rounded-lg border-l-8 border-secondary bg-primary p-6">
              <span className="material-symbols-outlined pointer-events-none absolute -bottom-8 -right-8 text-[160px] text-white/5">warning</span>
              <h3 className="relative z-10 mb-3 flex items-center gap-2 font-headline text-lg font-extrabold text-white">
                <span className="material-symbols-outlined text-xl text-secondary">emergency_home</span>
                Structural Challenges Review
              </h3>
              <p className="relative z-10 text-sm font-medium leading-relaxed text-on-primary-container/80">
                The primary bottleneck is fragmented logistics and supply chain coordination across suppliers, 3PL, and Amazon flows without one
                integrated control layer.
              </p>
              <div className="relative z-10 mt-4 space-y-3 border-t border-white/10 pt-4">
                <div>
                  <div className="mb-1.5 flex items-center justify-between">
                    <span className="text-[9px] font-bold uppercase text-on-primary-container/60">Inbound Logistics Coordination</span>
                    <span className="text-[10px] font-bold text-secondary">Critical</span>
                  </div>
                  <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                    <div className="h-full w-[88%] bg-secondary" />
                  </div>
                </div>
                <div>
                  <div className="mb-1.5 flex items-center justify-between">
                    <span className="text-[9px] font-bold uppercase text-on-primary-container/60">Cross-Market Supply Visibility</span>
                    <span className="text-[10px] font-bold text-secondary">High</span>
                  </div>
                  <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                    <div className="h-full w-[80%] bg-secondary" />
                  </div>
                </div>
                <div>
                  <div className="mb-1.5 flex items-center justify-between">
                    <span className="text-[9px] font-bold uppercase text-on-primary-container/60">3PL Execution & SLA Control</span>
                    <span className="text-[10px] font-bold text-secondary">High</span>
                  </div>
                  <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                    <div className="h-full w-[76%] bg-secondary" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <DeckFooter num="02" />
    </SlideShell>
  )
}

function Slide03() {
  return (
    <SlideShell>
      <DeckHeader section="Section 03 · Operational bottlenecks" />
      <main className="flex min-h-0 flex-1 flex-col px-12 py-6">
        <div className="mb-5 shrink-0">
          <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-secondary">Phase 2 · Strategic analysis</p>
          <h1 className="font-headline text-5xl font-extrabold leading-tight tracking-tight text-primary">
            The Manual Ceiling: <span className="text-secondary">Critical Bottlenecks</span>
          </h1>
          <div className="mt-3 h-0.5 w-16 bg-secondary" />
        </div>
        <div className="grid min-h-0 flex-1 grid-cols-4 grid-rows-2 gap-4">
          <div className="rounded-lg border border-outline-variant/30 border-l-4 border-l-primary bg-white p-5 shadow-sm">
            <div className="mb-3 flex items-center gap-3">
              <span className="flex h-7 w-7 items-center justify-center rounded bg-primary text-sm font-bold text-white">01</span>
              <h3 className="font-headline text-base font-extrabold uppercase tracking-tight text-primary">Manual Ops</h3>
            </div>
            <p className="text-sm leading-relaxed text-on-surface-variant">
              Spreadsheet-heavy workflows in procurement and logistics create elevated manual error risk.
            </p>
          </div>
          <div className="rounded-lg border border-outline-variant/30 border-l-4 border-l-primary bg-white p-5 shadow-sm">
            <div className="mb-3 flex items-center gap-3">
              <span className="flex h-7 w-7 items-center justify-center rounded bg-primary text-sm font-bold text-white">02</span>
              <h3 className="font-headline text-base font-extrabold uppercase tracking-tight text-primary">Quality Control</h3>
            </div>
            <p className="text-sm leading-relaxed text-on-surface-variant">
              Reliance on intuitive expertise over standardized data. High brand consistency risk.
            </p>
          </div>
          <div className="rounded-lg border border-outline-variant/30 border-l-4 border-l-primary bg-white p-5 shadow-sm">
            <div className="mb-3 flex items-center gap-3">
              <span className="flex h-7 w-7 items-center justify-center rounded bg-primary text-sm font-bold text-white">03</span>
              <h3 className="font-headline text-base font-extrabold uppercase tracking-tight text-primary">Supply Chain</h3>
            </div>
            <p className="text-sm leading-relaxed text-on-surface-variant">
              Disjointed communication nodes. Zero end-to-end visibility on material transit.
            </p>
          </div>
          <div className="relative overflow-hidden rounded-lg border border-primary bg-primary p-5 text-white shadow-sm">
            <div className="mb-3 flex items-center gap-3">
              <span className="flex h-7 w-7 items-center justify-center rounded bg-secondary text-sm font-bold text-white">04</span>
              <h3 className="font-headline text-base font-extrabold uppercase tracking-tight">3PL Integration</h3>
            </div>
            <p className="text-sm leading-relaxed opacity-80">No real-time SLA tracking for logistics partners. Unverified billing leakage.</p>
          </div>
          <div className="rounded-lg border border-outline-variant/30 border-l-4 border-l-primary bg-white p-5 shadow-sm">
            <div className="mb-3 flex items-center gap-3">
              <span className="flex h-7 w-7 items-center justify-center rounded bg-primary text-sm font-bold text-white">05</span>
              <h3 className="font-headline text-base font-extrabold uppercase leading-tight text-primary">Loss Calculation</h3>
            </div>
            <p className="text-sm leading-relaxed text-on-surface-variant">COGS cannot be audited at batch level due to untracked wastage nodes.</p>
          </div>
          <div className="rounded-lg border border-outline-variant/30 border-l-4 border-l-primary bg-white p-5 shadow-sm">
            <div className="mb-3 flex items-center gap-3">
              <span className="flex h-7 w-7 items-center justify-center rounded bg-primary text-sm font-bold text-white">06</span>
              <h3 className="font-headline text-base font-extrabold uppercase tracking-tight text-primary">Triple UoM Conflict</h3>
            </div>
            <p className="text-sm leading-relaxed text-on-surface-variant">
              Metric discrepancy (kg vs. Seed vs. Units) causing reconciliation mismatches.
            </p>
          </div>
          <div className="rounded-lg border border-outline-variant/30 border-l-4 border-l-primary bg-white p-5 shadow-sm">
            <div className="mb-3 flex items-center gap-3">
              <span className="flex h-7 w-7 items-center justify-center rounded bg-primary text-sm font-bold text-white">07</span>
              <h3 className="font-headline text-base font-extrabold uppercase leading-tight text-primary">SKU Architecture</h3>
            </div>
            <p className="text-sm leading-relaxed text-on-surface-variant">
              Redundant creation & lack of hierarchy leading to systemic reporting paralysis.
            </p>
          </div>
          <div className="flex flex-col justify-center bg-secondary p-5 text-white shadow-lg">
            <h4 className="mb-2 text-xs font-bold uppercase tracking-widest opacity-70">CalibtOS Finding</h4>
            <div className="flex items-baseline gap-2">
              <span className="font-headline text-5xl font-black">7</span>
              <span className="text-xs font-bold uppercase tracking-wider opacity-70">Critical Bottlenecks</span>
            </div>
            <div className="mt-4 border-t border-white/20 pt-4">
              <div className="font-headline text-3xl font-black text-white">5–15%</div>
              <div className="text-xs font-bold uppercase tracking-widest opacity-70">Estimated Gross Margin Recovery</div>
            </div>
          </div>
        </div>
      </main>
      <DeckFooter num="03" />
    </SlideShell>
  )
}

function Slide04() {
  return (
    <SlideShell>
      <DeckHeader section="Section 04 · Solution architecture" />
      <main className="grid min-h-0 flex-1 grid-cols-12 gap-0">
        <div className="col-span-5 flex flex-col justify-center border-r border-outline-variant/20 bg-white p-12 lg:p-14">
          <div className="mb-6 shrink-0">
            <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-secondary">Phase 3 · Architecture</p>
            <h1 className="mb-3 font-headline text-5xl font-extrabold leading-[1.1] tracking-tight text-primary">
              The Solution: <br />
              <span className="text-secondary">Odoo 18 Enterprise</span>
            </h1>
            <div className="mb-4 h-0.5 w-16 bg-secondary" />
            <p className="font-body text-lg font-medium text-on-surface-variant">A Unified Operational Control Layer for SLSK</p>
          </div>
          <div className="max-w-md space-y-6">
            <div className="group flex items-start gap-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">01</div>
              <div>
                <h4 className="mb-1 text-sm font-bold uppercase tracking-tight text-primary">Integrated Data Orchestration</h4>
                <p className="text-sm leading-relaxed text-on-surface-variant">
                  Consolidating external and internal streams into one governed workflow layer for decisions, controls, and traceability.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-secondary text-sm font-bold text-white">02</div>
              <div>
                <h4 className="mb-1 text-sm font-bold uppercase tracking-tight text-primary">Global Connectivity</h4>
                <p className="text-sm leading-relaxed text-on-surface-variant">
                  Native integration with Amazon SP-API and 3PL networks for real-time visibility.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="gradient-mesh relative col-span-7 flex items-center justify-center p-12">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
              backgroundSize: '30px 30px',
            }}
          />
          <div className="relative flex h-full w-full items-center justify-center">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="absolute h-4/5 w-4/5 rounded-full border border-white/10" />
              <div className="absolute h-3/5 w-3/5 rounded-full border border-white/5" />
            </div>
            <div className="group relative z-20 rounded-3xl bg-white p-10 text-center shadow-[0_0_50px_rgba(0,0,0,0.3)] transition-transform duration-500 hover:scale-105">
              <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-2xl bg-primary">
                <span className="material-symbols-outlined text-4xl text-white" style={{ fontVariationSettings: "'FILL' 1" }}>
                  hub
                </span>
              </div>
              <h3 className="font-headline text-3xl font-black uppercase tracking-tighter text-primary">Odoo 18</h3>
              <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.2em] text-outline">Core Nexus</p>
            </div>
            <div className="absolute left-1/2 top-[10%] flex -translate-x-1/2 flex-col items-center">
              <div className="mb-2 flex h-14 w-14 items-center justify-center rounded-xl border border-white/20 bg-white/10 backdrop-blur-md">
                <span className="material-symbols-outlined text-white">shopping_cart</span>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-white">Amazon Connector</span>
            </div>
            <div className="absolute right-[5%] top-1/2 flex -translate-y-1/2 flex-col items-center">
              <div className="mb-2 flex h-14 w-14 items-center justify-center rounded-xl border border-white/20 bg-white/10 backdrop-blur-md">
                <span className="material-symbols-outlined text-white">warehouse</span>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-white">Inventory</span>
            </div>
            <div className="absolute bottom-[10%] right-[15%] flex flex-col items-center">
              <div className="mb-2 flex h-14 w-14 items-center justify-center rounded-xl border border-white/20 bg-white/10 backdrop-blur-md">
                <span className="material-symbols-outlined text-white">precision_manufacturing</span>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-white">Manufacturing</span>
            </div>
            <div className="absolute bottom-[10%] left-[15%] flex flex-col items-center">
              <div className="mb-2 flex h-14 w-14 items-center justify-center rounded-xl border border-white/20 bg-white/10 backdrop-blur-md">
                <span className="material-symbols-outlined text-white">account_balance</span>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-white">Accounting</span>
            </div>
            <div className="absolute left-[5%] top-1/2 flex -translate-y-1/2 flex-col items-center">
              <div className="mb-2 flex h-14 w-14 items-center justify-center rounded-xl border border-white/20 bg-white/10 backdrop-blur-md">
                <span className="material-symbols-outlined text-white">verified</span>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-white">Quality Control</span>
            </div>
          </div>
        </div>
      </main>
      <DeckFooter num="04" />
    </SlideShell>
  )
}

function Slide05() {
  return (
    <SlideShell>
      <DeckHeader section="Section 05 · Implementation roadmap" />
      <div className="flex min-h-0 flex-1 flex-col justify-start gap-[clamp(0.35rem,0.5vmin+0.2rem,0.75rem)] overflow-hidden px-[clamp(1.5rem,4vw,3rem)] py-[clamp(0.35rem,0.6vmin+0.15rem,0.65rem)]">
        <div className="shrink-0">
          <div className="mb-1 flex items-center gap-2">
            <div className="h-0.5 w-6 shrink-0 bg-secondary" />
            <span className="text-[clamp(0.5625rem,0.35vmin+0.45rem,0.75rem)] font-bold uppercase tracking-[0.2em] text-secondary">
              Phase 4 · Strategic rollout
            </span>
          </div>
          <h1 className="slide05-hero-title font-headline font-extrabold tracking-tight text-primary">
            Implementation Roadmap <span className="font-normal text-on-surface-variant">(18–24 weeks)</span>
          </h1>
          <div className="slide05-rule h-0.5 bg-secondary" />
        </div>
        <div className="slide05-data-scale flex min-h-0 flex-1 flex-col">
          <div className="min-h-0 flex-1 overflow-y-auto pr-0.5">
          <div className="relative mb-[0.65em] shrink-0">
            <div
              className="pointer-events-none absolute inset-0 z-0 grid grid-cols-6 divide-x-2 divide-outline-variant"
              aria-hidden
            >
              {[0, 1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="min-h-full" />
              ))}
            </div>
            <div className="relative z-[1]">
              <div className="mb-[0.4em] grid shrink-0 grid-cols-6 gap-0 border-b-2 border-outline-variant pb-[0.35em]">
                {['Month 1', 'Month 2', 'Month 3', 'Month 4', 'Month 5', 'Month 6'].map((m) => (
                  <div
                    key={m}
                    className="py-[0.35em] ps-[0.45em] pe-[0.35em] text-[0.88em] font-bold uppercase tracking-widest text-on-surface-variant first:ps-[0.15em] first:pe-[0.35em]"
                  >
                    {m}
                  </div>
                ))}
              </div>
              <div className="space-y-[0.45em]">
            <div className="grid min-h-0 grid-cols-24 gap-0">
              <div className="col-span-5 col-start-1 min-w-0">
                <div className="rounded border-l-[0.28em] border-secondary bg-primary px-[0.55em] py-[0.5em] text-white shadow-sm">
                  <div className="mb-0 flex items-center justify-between gap-[0.35em]">
                    <span className="shrink-0 text-[0.74em] font-bold uppercase tracking-wider opacity-60">P01</span>
                    <span className="shrink-0 rounded bg-white/10 px-[0.35em] font-mono text-[0.74em]">W1–5</span>
                  </div>
                  <h3 className="font-headline text-[1em] font-bold leading-snug">Foundation</h3>
                  <p className="text-[0.74em] leading-snug text-slate-300">Master data & cloud core.</p>
                </div>
              </div>
            </div>
            <div className="grid min-h-0 grid-cols-24 gap-0">
              <div className="col-span-6 col-start-4 min-w-0">
                <div className="rounded border border-outline-variant/40 border-l-[0.28em] border-secondary bg-surface px-[0.55em] py-[0.5em] shadow-sm">
                  <div className="mb-0 flex items-center justify-between gap-[0.35em]">
                    <span className="shrink-0 text-[0.74em] font-bold uppercase tracking-wider text-on-surface-variant">P02</span>
                    <span className="shrink-0 rounded bg-slate-200 px-[0.35em] font-mono text-[0.74em] text-on-surface-variant">W4–9</span>
                  </div>
                  <h3 className="font-headline text-[1em] font-bold leading-snug text-primary">Inventory & logistics</h3>
                  <p className="text-[0.74em] leading-snug text-on-surface-variant">Warehouses & channel API sync.</p>
                </div>
              </div>
            </div>
            <div className="grid min-h-0 grid-cols-24 gap-0">
              <div className="col-span-6 col-start-9 min-w-0">
                <div className="rounded border-l-[0.28em] border-secondary bg-primary px-[0.55em] py-[0.5em] text-white shadow-sm">
                  <div className="mb-0 flex items-center justify-between gap-[0.35em]">
                    <span className="shrink-0 text-[0.74em] font-bold uppercase tracking-wider opacity-60">P03</span>
                    <span className="shrink-0 rounded bg-white/10 px-[0.35em] font-mono text-[0.74em]">W9–14</span>
                  </div>
                  <h3 className="font-headline text-[1em] font-bold leading-snug">Manufacturing</h3>
                  <p className="text-[0.74em] leading-snug text-slate-300">MRP process design and control.</p>
                </div>
              </div>
            </div>
            <div className="grid min-h-0 grid-cols-24 gap-0">
              <div className="col-span-5 col-start-[13] min-w-0">
                <div className="rounded border border-outline-variant/40 border-l-[0.28em] border-secondary bg-surface px-[0.55em] py-[0.5em] shadow-sm">
                  <div className="mb-0 flex items-center justify-between gap-[0.35em]">
                    <span className="shrink-0 text-[0.74em] font-bold uppercase tracking-wider text-on-surface-variant">P04</span>
                    <span className="shrink-0 rounded bg-slate-200 px-[0.35em] font-mono text-[0.74em] text-on-surface-variant">W13–17</span>
                  </div>
                  <h3 className="font-headline text-[1em] font-bold leading-snug text-primary">Quality control</h3>
                  <p className="text-[0.74em] leading-snug text-on-surface-variant">Compliance & QC automation.</p>
                </div>
              </div>
            </div>
            <div className="grid min-h-0 grid-cols-24 gap-0">
              <div className="col-span-6 col-start-[16] min-w-0">
                <div className="rounded border-l-[0.28em] border-secondary bg-primary px-[0.55em] py-[0.5em] text-white shadow-sm">
                  <div className="mb-0 flex items-center justify-between gap-[0.35em]">
                    <span className="shrink-0 text-[0.74em] font-bold uppercase tracking-wider opacity-60">P05</span>
                    <span className="shrink-0 rounded bg-white/10 px-[0.35em] font-mono text-[0.74em]">W16–21</span>
                  </div>
                  <h3 className="font-headline text-[1em] font-bold leading-snug">Finance</h3>
                  <p className="text-[0.74em] leading-snug text-slate-300">Tax reporting & ledger sync.</p>
                </div>
              </div>
            </div>
            <div className="grid min-h-0 grid-cols-24 gap-0">
              <div className="col-span-6 col-start-[19] min-w-0">
                <div className="rounded border-l-[0.28em] border-primary bg-secondary px-[0.55em] py-[0.5em] text-white shadow-sm">
                  <div className="mb-0 flex items-center justify-between gap-[0.35em]">
                    <span className="shrink-0 text-[0.74em] font-bold uppercase tracking-wider opacity-90">P06</span>
                    <span className="shrink-0 rounded bg-black/10 px-[0.35em] font-mono text-[0.74em]">W19–24</span>
                  </div>
                  <h3 className="font-headline text-[1em] font-bold leading-snug">AI optimization</h3>
                  <p className="text-[0.74em] leading-snug text-white/90">Analytics & go-live audit.</p>
                </div>
              </div>
            </div>
              </div>
            </div>
          </div>
          </div>
          <div className="mt-auto shrink-0 bg-background pt-[clamp(0.45rem,0.55vmin+0.25rem,0.75rem)]">
            <div className="grid grid-cols-3 gap-[0.75em]">
            <div className="min-w-0 rounded-lg border border-outline-variant/30 bg-white p-[0.9em] shadow-sm">
              <div className="mb-[0.35em] flex items-center gap-[0.45em]">
                <span className="material-symbols-outlined shrink-0 text-[1.15em] leading-none text-secondary">settings_input_component</span>
                <h4 className="font-headline text-[0.82em] font-bold uppercase leading-tight tracking-wider text-primary">Foundation</h4>
              </div>
              <p className="text-[0.82em] leading-snug text-on-surface-variant">
                5-week foundation: <strong>master data hub</strong>, security, API gateway to legacy.
              </p>
            </div>
            <div className="min-w-0 rounded-lg border border-outline-variant/30 bg-white p-[0.9em] shadow-sm">
              <div className="mb-[0.35em] flex items-center gap-[0.45em]">
                <span className="material-symbols-outlined shrink-0 text-[1.15em] leading-none text-secondary">warning</span>
                <h4 className="font-headline text-[0.82em] font-bold uppercase leading-tight tracking-wider text-primary">Critical path</h4>
              </div>
              <p className="text-[0.82em] leading-snug text-on-surface-variant">
                Manufacturing & Quality Control overlap (weeks 13–17). <strong>Parallel runs</strong> required.
              </p>
            </div>
            <div className="flex min-w-0 shrink-0 flex-col items-center justify-center rounded-lg border border-outline-variant/20 bg-primary p-[0.9em] text-center">
              <div className="mb-[0.35em] rounded-full bg-secondary/20 p-[0.35em]">
                <span className="material-symbols-outlined text-[1.4em] leading-none text-secondary">verified</span>
              </div>
              <h4 className="font-headline text-[1.05em] font-bold leading-tight text-white">Full transition</h4>
              <p className="mt-[0.25em] text-[0.75em] text-white/70">Week 24 target</p>
              <div className="mt-[0.35em] rounded border border-secondary/40 bg-white/10 px-[0.45em] py-[0.2em] text-[0.68em] font-bold uppercase tracking-tight text-secondary">
                Ready
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
      <DeckFooter num="05" />
    </SlideShell>
  )
}

/** Resolve next to the app document so Vite does not fall back to index.html (which would re-mount the deck on slide 1). */
function odooDiagramSrc(): string {
  if (typeof window !== 'undefined' && window.location?.href) {
    return new URL('odoo_diagram.html', window.location.href).href
  }
  const base = import.meta.env.BASE
  const prefix = base.endsWith('/') ? base : `${base}/`
  return `${prefix}odoo_diagram.html`
}

function SlideOdooDiagram() {
  return (
    <SlideShell>
      <DeckHeader section="Section 06 · Odoo module architecture" />
      <iframe
        title="SLSK Ventures — Odoo ERP architecture diagram"
        src={odooDiagramSrc()}
        className="h-full min-h-0 w-full flex-1 border-0 bg-[#080D1A]"
      />
      <DeckFooter num="06" />
    </SlideShell>
  )
}

function SlideProcurement() {
  const periods = [
    { months: 'Jan–Mar', label: 'Planning Season',       dominant: 'Seasonality · Promotions · Set demand',          dot: 'bg-blue-400' },
    { months: 'Apr–May', label: 'Planting Peak',         dominant: 'Virality · FBA storage limits · Lead time',      dot: 'bg-secondary' },
    { months: 'Jun–Aug', label: 'Growing Season',        dominant: 'Supplier reliability · Shelf life caps',         dot: 'bg-emerald-500' },
    { months: 'Sep–Oct', label: 'Autumn / Early Gifting',dominant: 'Set demand · New SKU launches',                  dot: 'bg-amber-500' },
    { months: 'Nov–Dec', label: 'Christmas Gifting',     dominant: 'Set demand · Virality · Marketing calendar',     dot: 'bg-primary' },
  ]

  return (
    <SlideShell>
      <DeckHeader section="Section 07 · Procurement intelligence" />
      <main className="flex min-h-0 flex-1 flex-col px-12 py-5">
        <div className="mb-4 shrink-0">
          <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-secondary">Dynamic factor framework</p>
          <h1 className="font-headline text-4xl font-extrabold leading-tight tracking-tight text-primary">
            Procurement Intelligence: <span className="text-secondary">How Much to Buy, When</span>
          </h1>
          <div className="mt-2 h-0.5 w-16 bg-secondary" />
        </div>

        <div className="grid min-h-0 flex-1 grid-cols-12 gap-5">
          {/* Left column */}
          <div className="col-span-5 flex flex-col gap-4">
            {/* Three-level weight architecture */}
            <div className="rounded-xl border border-outline-variant/30 bg-white p-5 shadow-sm">
              <h3 className="mb-3 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Weight Architecture — 3 Levels</h3>
              <div className="space-y-1">
                {[
                  { n: '01', color: 'bg-primary', title: 'Global Factor Weight', sub: 'Base importance across all seeds' },
                  { n: '02', color: 'bg-secondary', title: 'Category Modifier', sub: 'Spring planting ≠ herbs ≠ exotic' },
                  { n: '03', color: 'bg-secondary', title: 'Period Modifier', sub: 'Jan–Mar weight set ≠ Jun–Aug weight set' },
                ].map((item, i) => (
                  <div key={i}>
                    <div className="flex items-center gap-3">
                      <div className={`flex h-6 w-6 shrink-0 items-center justify-center rounded ${item.color} text-[10px] font-bold text-white`}>{item.n}</div>
                      <div>
                        <div className="text-sm font-bold text-primary">{item.title}</div>
                        <div className="text-[11px] text-on-surface-variant">{item.sub}</div>
                      </div>
                    </div>
                    {i < 2 && <div className="ml-3 h-3 w-px bg-outline-variant/40" />}
                  </div>
                ))}
              </div>
              <div className="mt-4 rounded-lg bg-surface-container-low px-4 py-2.5">
                <p className="font-mono text-[11px] text-on-surface-variant">Score = Σ factor[i] × weight[cat][period]</p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-4 gap-2">
              {[
                { val: '10–15', label: 'Factors' },
                { val: '5',     label: 'Categories' },
                { val: '5',     label: 'Periods' },
                { val: '375',   label: 'Weight cells' },
              ].map((s) => (
                <div key={s.label} className="rounded-lg border border-outline-variant/30 bg-white p-2.5 text-center shadow-sm">
                  <div className="font-headline text-xl font-extrabold text-secondary">{s.val}</div>
                  <div className="text-[8px] font-bold uppercase tracking-wider text-on-surface-variant">{s.label}</div>
                </div>
              ))}
            </div>

            {/* Phase evolution */}
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-outline-variant/30 bg-white p-4 shadow-sm">
                <span className="mb-2 inline-block rounded bg-primary px-2 py-0.5 text-[9px] font-bold uppercase text-white">Phase 2</span>
                <h4 className="mb-1 text-sm font-bold text-primary">Expert-bootstrapped</h4>
                <p className="text-[10px] leading-relaxed text-on-surface-variant">Team ranking session → rank-decay formula → validated against Seller Central history.</p>
              </div>
              <div className="rounded-xl border border-secondary/30 bg-white p-4 shadow-sm ring-1 ring-secondary/10">
                <span className="mb-2 inline-block rounded bg-secondary px-2 py-0.5 text-[9px] font-bold uppercase text-white">Phase 6</span>
                <h4 className="mb-1 text-sm font-bold text-primary">Data-corrected</h4>
                <p className="text-[10px] leading-relaxed text-on-surface-variant">Regression on 12 months of approved / overridden suggestions. Recalibrated annually.</p>
              </div>
            </div>
          </div>

          {/* Right column — periods + update classes */}
          <div className="col-span-7 flex flex-col gap-4">
            {/* Periods — compact */}
            <div className="rounded-xl border border-outline-variant/30 bg-white p-4 shadow-sm">
              <h3 className="mb-3 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
                5 Procurement Periods — independent weight set each, 2-week smooth transition
              </h3>
              <div className="space-y-1.5">
                {periods.map((p) => (
                  <div key={p.months} className="flex items-center gap-3 rounded-md px-3 py-1.5 hover:bg-surface-container-low/60">
                    <div className={`h-2 w-2 shrink-0 rounded-full ${p.dot}`} />
                    <span className="w-14 shrink-0 font-mono text-[10px] text-on-surface-variant">{p.months}</span>
                    <span className="w-28 shrink-0 text-xs font-bold text-primary">{p.label}</span>
                    <span className="text-[10px] text-on-surface-variant">{p.dominant}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Factor update classes */}
            <div className="rounded-xl border border-outline-variant/30 bg-white p-4 shadow-sm">
              <h3 className="mb-3 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
                Factor Update Classes — each type has different value &amp; weight mechanics
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {[
                  {
                    tag: 'Live Feed',
                    tagColor: 'bg-blue-500',
                    examples: 'Virality (BSR), FBA storage',
                    value: 'Daily from SP-API',
                    weight: 'Monthly — lag correlation against demand',
                  },
                  {
                    tag: 'Rolling Window',
                    tagColor: 'bg-emerald-500',
                    examples: 'Seasonality, variant share',
                    value: 'Monthly rolling recalculation',
                    weight: 'Annual — STL variance decomposition',
                  },
                  {
                    tag: 'Event-Triggered',
                    tagColor: 'bg-amber-500',
                    examples: 'Supplier reliability, competitor OOS',
                    value: 'On each business event (PO delay, QC fail)',
                    weight: 'Quarterly — stockout correlation',
                  },
                  {
                    tag: 'Calendar',
                    tagColor: 'bg-primary',
                    examples: 'Promotions, marketplace events',
                    value: 'Manual entry by team ≥8 weeks ahead',
                    weight: 'Phase 6 only (needs 2+ years of events)',
                  },
                ].map((c) => (
                  <div key={c.tag} className="rounded-lg border border-outline-variant/20 bg-surface-container-low/40 p-3">
                    <div className="mb-1.5 flex items-center gap-2">
                      <span className={`rounded px-1.5 py-0.5 text-[8px] font-bold uppercase tracking-wide text-white ${c.tagColor}`}>{c.tag}</span>
                    </div>
                    <p className="mb-1 text-[10px] font-semibold text-primary">{c.examples}</p>
                    <p className="text-[9px] text-on-surface-variant"><span className="font-semibold">Value:</span> {c.value}</p>
                    <p className="text-[9px] text-on-surface-variant"><span className="font-semibold">Weight:</span> {c.weight}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <DeckFooter num="07" />
    </SlideShell>
  )
}

function Slide06() {
  return (
    <SlideShell>
      <div className="relative flex min-h-0 flex-1 flex-col">
        <div className="pointer-events-none absolute inset-0 grid-bg opacity-30" />
        <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-secondary/5 blur-3xl" />
        <DeckHeader section="Section 08 · Investment & ROI" />
        <main className="relative z-10 flex min-h-0 flex-1 flex-col px-12 pb-4 pt-5">
          <div className="mb-4 flex shrink-0 items-end justify-between gap-6">
            <div>
              <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-secondary">Phase 5 · Commercials</p>
              <h1 className="mb-2 font-headline text-4xl font-extrabold leading-tight tracking-tight text-primary">Investment & financial ROI</h1>
              <div className="mb-2 h-0.5 w-16 bg-secondary" />
              <p className="text-sm font-medium text-on-surface-variant">Strategic valuation and implementation cost breakdown.</p>
            </div>
            <div className="relative min-w-[260px] shrink-0 overflow-hidden rounded-xl border border-outline-variant/20 bg-primary p-5 text-white shadow-lg">
              <div className="relative z-10">
                <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.2em] text-secondary">Total year 1 investment</p>
                <div className="font-headline text-3xl font-extrabold">€10.7k – €22.2k</div>
                <p className="mt-1 font-mono text-[9px] text-white/50">ESTIMATED TOTAL COST OF OWNERSHIP</p>
              </div>
              <span className="material-symbols-outlined absolute -bottom-3 -right-3 text-7xl text-white/5">payments</span>
            </div>
          </div>
          <div className="grid min-h-0 flex-1 grid-cols-12 gap-4">
            <div className="col-span-4 flex flex-col gap-3">
              <h3 className="mb-0 text-[9px] font-black uppercase tracking-widest text-on-surface-variant/40">Primary Value Drivers</h3>
              <div className="flex items-start gap-3 rounded-xl border border-outline-variant/30 bg-white p-4 shadow-sm">
                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-secondary/10 text-secondary">
                  <span className="material-symbols-outlined text-lg">bolt</span>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-primary">Efficiency Gain</h4>
                  <div className="my-0.5 text-xl font-extrabold text-secondary">3–5 hrs/day</div>
                  <p className="text-[10px] leading-tight text-on-surface-variant">Saved via automated reporting.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-xl border border-outline-variant/30 bg-white p-4 shadow-sm">
                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-600">
                  <span className="material-symbols-outlined text-lg">trending_up</span>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-primary">Margin Recovery</h4>
                  <div className="my-0.5 text-xl font-extrabold text-emerald-600">5–15%</div>
                  <p className="text-[10px] leading-tight text-on-surface-variant">Precision yield and waste tracking (estimated range).</p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-xl border border-outline-variant/30 bg-white p-4 shadow-sm">
                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-primary/5 text-primary">
                  <span className="material-symbols-outlined text-lg">shield_with_heart</span>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-primary">Risk Mitigation</h4>
                  <ul className="mt-1 space-y-0.5 text-[10px] font-medium text-on-surface-variant">
                    <li className="flex items-center gap-1.5">
                      <span className="h-1 w-1 rounded-full bg-secondary" />
                      Stockout prevention
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="h-1 w-1 rounded-full bg-secondary" />
                      Error-rate reduction
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-span-8">
              <div className="flex h-full flex-col overflow-hidden rounded-xl border border-outline-variant/30 bg-white shadow-sm">
                <div className="flex items-center justify-between border-b border-outline-variant/30 bg-background px-6 py-3">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-primary">Component Breakdown</h3>
                  <span className="font-mono text-[9px] text-on-surface-variant/60">CURRENCY: EUR (€)</span>
                </div>
                <div className="min-h-0 flex-1 overflow-hidden">
                  <table className="w-full border-collapse text-left">
                    <thead>
                      <tr className="border-b border-outline-variant/30 text-[9px] font-black uppercase tracking-widest text-on-surface-variant/50">
                        <th className="px-6 py-2.5">Component</th>
                        <th className="px-6 py-2.5">Description</th>
                        <th className="px-6 py-2.5 text-right">Range</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-outline-variant/20">
                      {[
                        ['Odoo Licensing', 'Odoo Enterprise — 5 users, 12 months', '€1,194'],
                        ['Requirements', 'Discovery, process analysis & signed baseline (20 hrs × €100/h)', '€2,000 (fixed)'],
                        ['Implementation', 'Config, migration, testing & validation cycles (T&M, 18–24 wks)', '€6,000 – €16,000'],
                        ['Training', '2–3 days structured onboarding per core user', '€1,500 – €3,000'],
                      ].map(([c, d, r]) => (
                        <tr key={c} className="transition-colors hover:bg-background">
                          <td className="px-6 py-3.5 text-sm font-bold text-primary">{c}</td>
                          <td className="px-6 py-3.5 text-xs text-on-surface-variant">{d}</td>
                          <td className="px-6 py-3.5 text-right font-mono text-sm font-bold text-secondary">{r}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="border-t border-outline-variant/30 bg-background px-6 py-3">
                  <div className="flex items-center gap-2 text-on-surface-variant">
                    <span className="material-symbols-outlined text-sm">info</span>
                    <p className="text-[9px] font-medium italic leading-relaxed">
                      Estimates are based on initial SLSK scope and standard enterprise deployment parameters.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <footer className="relative z-10 mt-auto flex shrink-0 items-center justify-between border-t border-outline-variant/30 bg-white px-12 py-4">
          <div className="text-[10px] font-medium uppercase tracking-widest text-on-surface-variant">
            © 2026 <span className="font-bold text-secondary">CalibtOS</span> · Proprietary & confidential · SLSK Ventures
          </div>
          <div className="flex items-center gap-4">
            <span className="font-headline text-sm font-bold tabular-nums text-primary">08</span>
            <div className="h-1 w-12 bg-primary" />
          </div>
        </footer>
      </div>
    </SlideShell>
  )
}

function Slide07() {
  return (
    <SlideShell>
      <DeckHeader section="Section 09 · Next steps" />
      <div className="-mt-2 flex min-h-0 flex-1 flex-col justify-center px-12 pb-4 pt-0 selection:bg-secondary-container selection:text-on-secondary-container">
        <div className="mb-8 max-w-4xl shrink-0">
          <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-secondary">Phase 6 · Alignment</p>
          <h2 className="mb-4 font-headline text-5xl font-extrabold leading-tight tracking-tight text-primary">
            Closing the gap to <span className="text-secondary">operational excellence</span>
          </h2>
          <div className="mb-4 h-0.5 w-16 bg-secondary" />
          <p className="max-w-2xl border-l-4 border-secondary/30 pl-5 font-body text-lg leading-relaxed text-on-surface-variant">
            SLSK is ready to transition into a <span className="font-semibold text-primary">data-driven</span> multi-brand company.
          </p>
        </div>
        <div className="mb-8 grid grid-cols-4 gap-5">
          <div className="group rounded-xl border border-outline-variant/30 bg-white p-5 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <span className="font-headline text-3xl font-black text-secondary/20">01</span>
              <span className="material-symbols-outlined text-secondary opacity-50">inventory_2</span>
            </div>
            <h3 className="mb-2 font-headline text-base font-bold leading-tight text-primary">Full Physical Stock Count</h3>
            <p className="text-xs leading-relaxed text-on-surface-variant">Validate baseline inventory accuracy across all warehouses.</p>
          </div>
          <div className="group rounded-xl border border-outline-variant/30 bg-white p-5 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <span className="font-headline text-3xl font-black text-secondary/20">02</span>
              <span className="material-symbols-outlined text-secondary opacity-50">gavel</span>
            </div>
            <h3 className="mb-2 font-headline text-base font-bold leading-tight text-primary">Formalise 3PL SLA</h3>
            <p className="text-xs leading-relaxed text-on-surface-variant">
              Run AI analysis for pre-validation and route failed checks to human review before finalizing the SLA document.
            </p>
          </div>
          <div className="group rounded-xl border-2 border-secondary/40 bg-white p-5 shadow-sm ring-1 ring-secondary/10">
            <div className="mb-4 flex items-center justify-between">
              <span className="font-headline text-3xl font-black text-secondary">03</span>
              <span className="material-symbols-outlined text-secondary">handshake</span>
            </div>
            <h3 className="mb-2 font-headline text-base font-bold leading-tight text-primary">CalibtOS Discovery</h3>
            <p className="text-xs font-medium leading-relaxed text-on-surface-variant">Deep-dive into specific multi-brand workflow requirements.</p>
          </div>
          <div className="group rounded-xl border border-outline-variant/30 bg-white p-5 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <span className="font-headline text-3xl font-black text-secondary/20">04</span>
              <span className="material-symbols-outlined text-secondary opacity-50">terminal</span>
            </div>
            <h3 className="mb-2 font-headline text-base font-bold leading-tight text-primary">Odoo Sandbox Provision</h3>
            <p className="text-xs leading-relaxed text-on-surface-variant">Setup testing environment for ERP system transformation.</p>
          </div>
        </div>
        <div className="relative flex items-center justify-between overflow-hidden rounded-xl bg-primary p-8">
          <div className="absolute -bottom-12 -right-12 h-64 w-64 rounded-full bg-secondary/10 blur-3xl" />
          <div className="relative z-10">
            <p className="mb-2 font-headline text-[10px] font-bold uppercase tracking-widest text-tertiary-fixed">Immediate Action Required</p>
            <h4 className="font-headline text-xl font-bold text-white">Initiate Implementation Program</h4>
          </div>
          <button
            type="button"
            className="relative z-10 flex items-center gap-3 rounded-md bg-secondary px-8 py-4 font-headline text-xs font-extrabold uppercase tracking-widest text-white shadow-lg transition-all duration-300 hover:bg-secondary/90"
          >
            Schedule Discovery Session
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </button>
        </div>
      </div>
      <footer className="mt-auto flex shrink-0 items-center justify-between border-t border-outline-variant/30 bg-white px-12 py-4">
        <div className="text-[10px] font-medium uppercase tracking-widest text-on-surface-variant">
          © 2026 <span className="font-bold text-secondary">CalibtOS</span> · Proprietary & confidential · SLSK Ventures
        </div>
        <div className="flex items-center gap-4">
          <span className="font-headline text-sm font-bold tabular-nums text-primary">09</span>
          <div className="h-1 w-12 bg-primary" />
        </div>
      </footer>
    </SlideShell>
  )
}

function Slide08() {
  return (
    <SlideShell>
      <div className="relative flex min-h-0 flex-1 flex-col">
        <DeckHeader section="Section 10 · Future work" />
        <main className="flex min-h-0 flex-1 flex-col px-12 pb-4 pt-5">
          <div className="mb-4 shrink-0">
            <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-secondary">Post go-live · Horizon</p>
            <h1 className="font-headline text-4xl font-extrabold leading-tight tracking-tight text-primary">
              Future work: <span className="text-secondary">long-term strategic benefits</span>
            </h1>
            <div className="mt-3 h-0.5 w-16 bg-secondary" />
          </div>
          <div className="grid min-h-0 flex-1 grid-cols-12 gap-6">
            <div className="group col-span-4 flex flex-col justify-between rounded-xl border border-outline-variant/30 bg-white p-7 shadow-sm transition-shadow hover:shadow-md">
              <div>
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-container">
                  <span className="material-symbols-outlined text-white">shopping_cart</span>
                </div>
                <h3 className="mb-4 font-headline text-2xl font-bold text-primary">DTC Expansion</h3>
                <p className="mb-6 font-body leading-relaxed text-on-surface-variant">
                  Launch a high-performance branded webshop on Odoo as a strategic hedge against Amazon dependency.
                </p>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-sm font-medium text-primary">
                  <span className="material-symbols-outlined text-sm text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>
                    check_circle
                  </span>
                  Eliminate Platform Fees
                </li>
                <li className="flex items-center gap-2 text-sm font-medium text-primary">
                  <span className="material-symbols-outlined text-sm text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>
                    check_circle
                  </span>
                  Direct Customer Ownership
                </li>
              </ul>
            </div>
            <div className="col-span-8 grid grid-rows-2 gap-6">
              <div className="relative flex items-center justify-between overflow-hidden rounded-xl bg-primary-container p-8">
                <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-1/3 opacity-10">
                  <span className="material-symbols-outlined text-[120px]">psychology</span>
                </div>
                <div className="relative z-10 max-w-lg">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="material-symbols-outlined text-tertiary-fixed">auto_awesome</span>
                    <h3 className="font-headline text-2xl font-bold text-white">AI-Driven Forecasting</h3>
                  </div>
                  <p className="font-body text-lg leading-relaxed text-on-primary-container">
                    Leveraging deep historical Odoo datasets to optimize inventory levels and marketing spend across 10 global markets, ensuring
                    capital efficiency and growth.
                  </p>
                </div>
                <div className="glass-callout relative z-10 rounded-xl border border-white/10 p-6">
                  <p className="font-headline text-3xl font-extrabold text-tertiary-fixed">10</p>
                  <p className="font-label text-xs uppercase tracking-widest text-white/60">Active Markets</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="rounded-xl border border-outline-variant/30 border-l-4 border-secondary bg-white p-6 shadow-sm">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="material-symbols-outlined text-secondary">settings_input_component</span>
                    <h3 className="font-headline text-xl font-bold text-primary">EDI & Logistics</h3>
                  </div>
                  <p className="font-body text-sm leading-relaxed text-on-surface-variant">
                    Zero-touch logistics via fully automated EDI links with 3PL partners, removing human friction from the fulfillment cycle.
                  </p>
                </div>
                <div className="rounded-xl border border-outline-variant/30 border-l-4 border-l-primary bg-white p-6 shadow-sm">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary">language</span>
                    <h3 className="font-headline text-xl font-bold text-primary">Market Diversification</h3>
                  </div>
                  <p className="font-body text-sm leading-relaxed text-on-surface-variant">
                    Seamless expansion to Amazon.com.tr and beyond, utilizing Odoo&apos;s multi-channel core as the single source of truth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
        <footer className="mt-auto flex shrink-0 items-center justify-between border-t border-outline-variant/30 bg-white px-12 py-4">
          <div className="text-[10px] font-medium uppercase tracking-widest text-on-surface-variant">
            © 2026 <span className="font-bold text-secondary">CalibtOS</span> · Proprietary & confidential · SLSK Ventures
          </div>
          <div className="flex items-center gap-4">
            <span className="font-headline text-sm font-bold tabular-nums text-primary">10</span>
            <div className="h-1 w-12 bg-primary" />
          </div>
        </footer>
        <div className="pointer-events-none absolute -bottom-16 -right-16 h-32 w-32 rounded-full bg-secondary/5 blur-3xl" />
      </div>
    </SlideShell>
  )
}

function Slide09() {
  return (
    <SlideShell>
      <DeckHeader section="Section 11 · Closing" />
      <main className="relative flex min-h-0 flex-1 flex-col items-center justify-center px-12 text-center">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-1/2 h-[min(70vh,32rem)] w-[min(90vw,48rem)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-secondary/5 blur-[100px]" />
          <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
        </div>
        <div className="relative z-10 max-w-3xl">
          <p className="mb-4 font-label text-[10px] font-bold uppercase tracking-[0.25em] text-secondary">SLSK Ventures · CalibtOS</p>
          <h1 className="mb-6 font-headline text-5xl font-extrabold tracking-tight text-primary md:text-6xl lg:text-7xl">
            Thank you
          </h1>
          <div className="mx-auto mb-10 h-1 w-20 bg-secondary" />
          <div className="flex flex-col items-center gap-4">
            <span className="material-symbols-outlined text-5xl text-secondary/80 md:text-6xl">forum</span>
            <h2 className="font-headline text-3xl font-bold text-primary md:text-4xl">Questions?</h2>
            <p className="max-w-xl text-lg leading-relaxed text-on-surface-variant md:text-xl">
              We&apos;re happy to discuss next steps, scope, or timing for your Odoo journey.
            </p>
          </div>
        </div>
      </main>
      <DeckFooter num="11" />
    </SlideShell>
  )
}

export const SLIDES: SlideComponent[] = [
  Slide01,
  Slide02,
  Slide03,
  Slide04,
  Slide05,
  SlideOdooDiagram,
  SlideProcurement,
  Slide06,
  Slide07,
  Slide08,
  Slide09,
]

