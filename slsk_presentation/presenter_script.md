# Presenter Script — SLSK Ventures / CalibtOS
> **Format:** Each slide has a short speaking block. Bold text = emphasis points to land clearly.  
> **Estimated total time:** 15–20 minutes with deeper dives on slides 5 & 6.  
> **Procurement Intelligence section** at the bottom — pull up during Q&A or as a standalone talking point if the topic comes up.

---

## Slide 01 — Title

> "Good [morning/afternoon]. This is CalibtOS's business analysis and Odoo ERP implementation proposal for SLSK Ventures. Our goal today is simple: show you exactly where the operational ceiling is, why you've already hit it, and the concrete path from **founder-led, spreadsheet-driven operations** to a **data-driven, scalable company**. Let's get into it."

---

## Slide 02 — Market Traction

> "SLSK has built real momentum — **ranked #516 on Amazon.de**, active across **10 European marketplaces**, and over **1,800 verified reviews**. That's impressive scale. But the problem is that growth has outpaced the infrastructure supporting it.
>
> Without a central ERP, pan-European operations hit a hard ceiling. Inbound logistics, cross-market supply visibility, and 3PL control are all flagged as critical. The bottleneck isn't the market — the market is there. The bottleneck is internal."

---

## Slide 03 — Operational Bottlenecks

> "We identified **7 structural bottlenecks** across the operation — and there's an implicit eighth one we'll come back to: **purchase quantity decisions**. Right now there's no systematic way to answer 'how much do I order and when' given the variables at play. We'll get into that specifically later.
>
> For now:
>
> Spreadsheet-heavy procurement. No standardized QC — it's running on intuition right now, not data. Zero end-to-end supply chain visibility. No SLA tracking with 3PL partners, which means billing leakage you can't even measure. COGS can't be audited at batch level because wastage isn't tracked. There's a **triple unit-of-measure conflict** — kilograms, seed counts, and consumer units — causing reconciliation mismatches on every single order. And the SKU architecture is creating reporting paralysis.
>
> Fixing these seven things is where the **5 to 15% gross margin recovery** comes from. That's not a projection — that's a conservative floor based on what we see across similar implementations."

---

## Slide 04 — Solution: Odoo 18

> "The answer is **Odoo 18 Enterprise** — a single operational control layer. It consolidates every data stream — Amazon SP-API, 3PL networks, inventory, manufacturing, accounting, quality control — into one governed system.
>
> No more fragmented tools. No more manual reconciliation between systems that don't talk to each other. Everything flows through one hub."

---

## Slide 05 — Implementation Roadmap (Deep Dive)

> "This is the 18 to 24-week rollout. Six sequential phases, each building on the last. Let me walk you through what actually happens in each one — because the sequencing here is deliberate, not arbitrary.
>
> **Phase 1 — Foundation (Weeks 1–5):** This is the most critical phase and the one most implementations get wrong by rushing. We're establishing the master data hub — that means cleaning and importing every SKU, fixing the UoM architecture so kg, seed counts, and consumer units coexist correctly in a single system, and setting up supplier records with the fields SLSK actually needs: EU organic certification codes, country of origin per supplier, and the species-specific weight-per-seed constants that everything downstream depends on. We also set up the cloud instance, user roles, and the API gateway to any legacy data sources. If this phase is sloppy, every phase after it inherits the mess.
>
> **Phase 2 — Inventory & Logistics (Weeks 4–9):** This overlaps slightly with Foundation on purpose — once master data is stable, we stand up the warehouse structure. That means a virtual 3PL location in Odoo, 10 separate FBA virtual locations for each marketplace, and lot/batch tracking on every seed product. This is also when the **Amazon Connector** goes live — SP-API linked to all 10 accounts simultaneously for order sync, inventory sync, and settlement import. We also configure carrier integrations for EU parcels and handle the ETA fields that drive dynamic replenishment lead times.
>
> This phase also includes the **Procurement Intelligence foundation** — the direct answer to 'how much do we buy and when.' The short version: SLSK operates with 10–15 concurrent factors affecting any purchase decision, and new ones keep appearing. A fixed rules engine breaks the moment a new factor is discovered. So instead of hardcoding rules, we build a **Factor Registry** — a structured table where each factor has a name, weight, and data source. Adding a new factor means adding a row, not writing code. That registry computes a nightly Procurement Score per product variant which drives a suggested order quantity the buyer reviews. See the *Procurement Intelligence* section at the bottom for the full architecture. Phase 2 builds the registry and activates the top known factors. Phase 6 replaces the linear scoring model with an ML model trained on Odoo's growing dataset.
>
> **Phase 3 — Manufacturing (Weeks 9–14):** This is where the 3PL assembly model gets formalized in Odoo using the **sub-contracting architecture** — the correct model for external assembly. Seeds and packaging flow out to the 3PL, finished packs flow back in as finished goods. Critically, this phase includes the **pilot packing runs** — we need at least 3 real runs to validate the loss buffer percentage per species before locking it into the Bills of Materials. You cannot skip this. Estimating that number leads to COGS errors that compound every month.
>
> **Phase 4 — Quality Control (Weeks 13–17):** This overlaps with Manufacturing — that's intentional and it's the **critical path** we flagged. QC checkpoints go live at four points: seed receipt at the 3PL, packaging receipt, post-assembly inspection, and FBA inbound prep. We're not using binary pass/fail here — we're tracking numeric germination percentage and fill weight per batch, with auto-escalation to the 3PL supervisor and SLSK management on any failure. The defect-rate trend dashboard per supplier goes live in this phase too.
>
> **Phase 5 — Finance (Weeks 16–21):** Tax reporting and ledger sync. This covers the EU VAT and OSS quarterly return setup, the German VAT Voranmeldung, bank reconciliation across EUR, GBP, SEK, and PLN, and analytic accounting tags so every journal entry is labelled by both **marketplace** and **brand**. That's how you get a per-brand, per-market P&L out of Odoo. One important decision needs to happen before this phase: whether to use SKR03 or SKR04 as the chart of accounts. That has to be confirmed with the accountant — it can't be changed after go-live.
>
> **Phase 6 — AI Optimization & Go-Live Audit (Weeks 19–24):** The final sprint. Analytics dashboards, forecasting models built on the Odoo dataset, parallel-run validation against current spreadsheets, and the formal go-live audit. Week 24 is full transition — the spreadsheets get retired."

---

## Slide 06 — Odoo Module Architecture (Deep Dive)

> "This diagram shows every module in the proposed SLSK Odoo instance and how they connect. Let me walk through the layers.
>
> **The top layer — External Systems:** Amazon comes in on the left — all 10 EU storefronts: DE, FR, UK, IT, ES, NL, BE, SE, IE, and PL. The Amazon Connector is the SP-API bridge that handles order sync, inventory sync, settlement import, and FBA inbound plan creation across all 10 accounts simultaneously. One important gap here: Amazon sends over 50 settlement transaction types — referral fees, FBA storage fees, A-to-Z claims, promotions — and each one needs to be mapped to a GL account. That mapping work is part of Phase 5. On the other side, **Suppliers** feed into Purchase — EU seed suppliers from Italy, Netherlands, Germany, Poland, and Asian packaging suppliers each have different lead times and UoM conventions that Odoo needs to know.
>
> **The middle layer — Inventory as the hub:** Inventory is the central node everything flows through. It's not just a stock count — it's the single source of truth for 3PL stock, FBA virtual stock across 10 markets, raw materials, WIP, and finished goods, all with lot and batch tracking. The **Replenishment** module sits next to it and uses Amazon sales velocity data from the Connector to drive dynamic safety stock calculations — different lead time tiers: 14 days for EU seeds, 60 days for Asian packaging, 5 days for 3PL assembly.
>
> **The manufacturing cluster:** The key architectural decision here is **Sub-contracting** — not a work centre model. Because assembly happens at an external 3PL, Odoo models it as: components flow out to the sub-contractor, finished goods flow back in. Each sub-contracting MO auto-generates a service-fee PO to the 3PL. The **Quality** module sits alongside Manufacturing and triggers its 4 checkpoints at each stage.
>
> **The bottom layer — Finance:** Accounting handles settlement reconciliation, COGS per SKU, EU VAT and OSS, and multi-currency across 4 currencies. **Analytic Accounting** is what makes the P&L useful — it tags every journal entry with two dimensions: marketplace and brand. That's how you answer 'which brand made money in France last quarter.' Tax Reporting handles OSS, German VAT filings, and the PAN-EU FBA fiscal position logic — which FC physically shipped the order drives the VAT treatment, not just the customer's country. That's a custom configuration, not standard Odoo.
>
> The diagram is interactive — hover over any module to see its description and the specific customization gaps that apply to SLSK."

---

## Slide 07 — Procurement Intelligence (Summary)

> "Before we get into financials, a quick look at one of the more complex operational problems we're solving: **how much do you buy, and when.**
>
> The short answer is that there's no single right formula — there are 10 to 15 concurrent factors, and that list keeps growing. So instead of hardcoding rules, we built a **Factor Registry** — a table where each factor is a row with a weight. Add a new factor: add a row.
>
> The weights operate at three levels. Global importance, category modifier — because seasonality matters very differently for exotic trending seeds versus year-round herbs — and critically, a **period modifier**. The weight set for January is not the same as the weight set for July. In January, seasonality dominates. In July, supplier reliability and shelf life take over. Each of the five procurement periods has its own completely independent weight distribution, with smooth two-week transitions between them.
>
> In Phase 2, we bootstrap the weights from a team ranking session validated against your Seller Central export history — no Odoo data needed. In Phase 6, after a full 12-month cycle, a regression on approved and overridden suggestions recalibrates those weights with real data. The system gets more accurate every year."

---

## Slide 08 — Investment & ROI

> "Total Year 1 investment sits between **€10.7k and €22.2k**. That's not a wide range — the implementation band reflects scope confirmation in the discovery phase.
>
> It breaks down into four components: Odoo Enterprise licensing at €1,194 for 5 users; a fixed €2,000 requirements phase covering discovery and the signed baseline document; implementation at €6k to €16k time-and-materials over the 18–24 weeks; and €1,500 to €3,000 for structured user onboarding.
>
> The return side: **3 to 5 hours per day** recovered through automated reporting and reconciliation. **5 to 15% gross margin recovery** through yield tracking, waste classification, and COGS accuracy. And the risk mitigation value of stockout prevention and billing error reduction across 10 markets — which right now has no baseline because there's no system to measure against."

---

## Slide 09 — Next Steps (Updated: 3PL SLA Strategy)

> "Four immediate actions before we start.
>
> **First: Full physical stock count.** We need a verified baseline across all warehouses before we import anything into Odoo. You can't migrate from chaos — you clean it first.
>
> **Second: 3PL SLA — and this one needs a realistic conversation.** We heard from SLSK that most 3PL partners are established, traditional companies with no structured systems and no interest in signing formal SLA documents. That's a common reality — and it doesn't block us.
>
> Our approach is different: instead of asking them to sign something upfront, we **build the SLA tracking inside Odoo on our side first**. We add SLA parameter fields directly to the 3PL contact record — expected turnaround time, batch completion window, damage threshold. Every sub-contracting MO logs a dispatch date and expected completion date. Every return or damage event gets a reason code tied to a specific GL account. After 60 to 90 days of real data, **you have your own SLA baseline — one they can't dispute because it's built from their actual delivery history.**
>
> At that point you go back to them not with a contract but with a report: 'Here's what you delivered versus what we agreed informally. Here's where the gaps are.' That's a much easier conversation than asking them to sign a document they've never seen before. And if they still won't engage, you now have the data to evaluate whether it's time to switch.
>
> **Third: CalibtOS Discovery Session.** This is the highlighted action — a deep-dive into your multi-brand workflow requirements across ZenGreens, VEVOX, and SLSK Games. Each brand has different margin profiles and potentially different handling rules.
>
> **Fourth: Odoo Sandbox.** We provision a testing environment so you can see the system before anything goes live."

---

## Slide 10 — Future Work

> "Beyond go-live, three strategic doors open up.
>
> **DTC Expansion:** A branded webshop on Odoo as a direct-to-consumer channel — eliminating Amazon referral fees and giving SLSK direct customer ownership. The data infrastructure is already there once Odoo is live.
>
> **AI-Driven Forecasting:** This is the payoff for the procurement intelligence work we set up in Phase 2. Once you have 12+ months of clean Odoo data across all 10 markets — variant-level sales, seasonal patterns, set demand curves, BSR trends — you can run a proper predictive model. It learns which seeds go viral in which markets at which time of year. It learns that 'black tomato' demand in Germany always spikes in February but 'cherry tomato' spikes in April. It knows that when a seed set trends on social media, the component seeds need to be pre-ordered 60 days ahead because of Asian packaging lead times. Right now none of that is knowable because the data doesn't exist in structured form. After 12 months in Odoo, it does.
>
> **EDI & Market Diversification:** Zero-touch logistics via automated EDI with 3PL partners — removing the last human friction from the fulfillment cycle. And seamless expansion to Amazon Turkey and beyond, using Odoo as the single source of truth across every new channel."

---

## Slide 11 — Closing

> "That's the full picture. The market traction is real. The pain is documented. The solution is proven. The only variable is timing — and every month without a central system is a month of margin leakage, manual errors, and missed visibility.
>
> We're ready to start the discovery session whenever you are. What questions do you have?"


---

*Script version: v1.8 — Procurement Intelligence TL;DR summary added (2026-04-09)*

---

## Procurement Intelligence — TL;DR

### The problem
Purchase decisions are driven by **10–15 concurrent factors** that keep growing. No spreadsheet or static rules engine can hold all of them. A new factor appearing means a new row in a table, not a code change.

---

### The architecture (3 sentences)
A **Factor Registry** stores every factor with a name, weight, and data source. Each night it computes a **Procurement Score** per product variant, which surfaces as a suggested order quantity for the buyer to approve or override. Overrides are logged, reviewed, and fed back to improve the model.

---

### Weights operate at 3 levels
`Global factor weight × Category modifier × Period modifier`

- **Category** — seasonality matters more for spring planting seeds than year-round herbs
- **Period** — the weight set for Jan–Mar is completely independent from Jun–Aug; same factors, entirely different distribution

**5 periods:** Planning Season (Jan–Mar) · Planting Peak (Apr–May) · Growing Season (Jun–Aug) · Autumn/Early Gifting (Sep–Oct) · Christmas Gifting (Nov–Dec)

**Total weight cells:** 15 factors × 5 categories × 5 periods = **375**

Transitions between periods use a 2-week linear interpolation — no overnight score jumps.

---

### Each factor type updates differently

| Class | Examples | Value source | Weight update |
|---|---|---|---|
| **Live Feed** | Virality (BSR), FBA storage | Daily from SP-API | Monthly regression vs. demand lag |
| **Rolling Window** | Seasonality, variant share | Monthly from sales history | Annual STL variance decomposition |
| **Event-Triggered** | Supplier reliability, competitor OOS | On each event (late PO, QC fail) | Quarterly stockout correlation |
| **Calendar** | Promotions, marketplace events | Manual entry ≥8 weeks ahead | Phase 6 only (needs 2+ years) |

**Virality weight specifically:** `β` from regressing demand lift 14 days after a BSR signal — per category, per period. A #5k→#500 rank move and a #500→#50 move both get z-scored against category peers, so the signal is relative, not absolute.

**Seasonality weight specifically:** `Var(seasonal component) / Var(total demand)` from STL decomposition. A seed with 70% seasonal variance gets weight 0.70 automatically — no manual input.

**Supplier reliability value:** Exponential moving average. On-time delivery drifts toward 1.0 slowly; a late PO drops it immediately. Weight scales with lead time — same delay hits packaging (60-day lead) far harder than EU seeds (14-day lead).

---

### Cold start — no Odoo history needed to begin

| Factor | Initialization source |
|---|---|
| Seasonality | Amazon Seller Central export — 24 months of order history |
| BSR / virality | One-time Keepa pull + SP-API live from day one |
| Variant popularity | Seller Central export — variant share of species sales |
| Supplier reliability | Neutral 0.85; SLSK seeds known bad suppliers manually |
| FBA storage limits | SP-API live immediately |
| Promotions | Manual entry; zero until campaign is scheduled |
| Weights (Phase 2) | Team ranking session → rank-decay formula → sensitivity check vs. historical data |
| Weights (Phase 6) | Regression on 12 months of approved/overridden Odoo suggestions, per period per category |

---

### What changes Phase 2 → Phase 6

- **Phase 2:** Linear scoring model, expert weights, top factors active, 375 cells maintained by team
- **Phase 6:** ML model trained on 12+ months of real decisions; weights auto-recalibrated annually; virality becomes predictive (flags products before BSR confirms); override history feeds the model automatically
