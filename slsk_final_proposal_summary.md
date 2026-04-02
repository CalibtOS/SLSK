# SLSK Ventures GmbH — Proposal Summary

**Full document:** `slsk_final_proposal.md` (CalibtOS-SLSK-2026-001, March 2026)

**Parties:** Prepared for SLSK Ventures GmbH (Leverkusen) by CalibtOS GmbH (Köln).

**Scope:** Business and operations analysis, bottleneck assessment, and Odoo Enterprise ERP implementation strategy for a multi-brand Amazon FBA operator.

---

## Executive snapshot

SLSK is a **multi-brand Amazon FBA business** (active on Amazon since August 2018; GmbH since November 2020) with **10 confirmed EU marketplace storefronts**, strong DE performance (Top 1,000, #516; 4.7★, 1,883+ reviews), and three DPMA-registered brands: **ZenGreens** (organic seeds/gardening), **VEVOX** (PPE), and **Wer Lacht Muss Trinken / SLSK Games** (party games).

**Core problem:** No central ERP. Inventory, procurement, QA, 3PL, and finance are manual across many currencies and VAT jurisdictions—this caps scalable growth.

**Proposed response:** Phased **Odoo Enterprise** rollout over **18–24 weeks** (about 4.5–6 months), six overlapping phases, with explicit validation gates.

---

## Company & footprint (high level)

| Topic | Summary |
|--------|---------|
| Legal | SLSK Ventures GmbH, Leverkusen; HRB 103562; share capital €26k; ~€600k balance sheet (2023, +30.2% YoY) |
| Marketplaces | DE, FR, UK, IT, ES, NL, BE, SE, IE, PL confirmed; TR not confirmed as registered seller entity |
| Currencies | EUR, GBP, SEK, PLN among others |
| ZenGreens | Italy-origin seeds; EU organic LU-BIO-04; #1 Garden/Veg Seeds on Amazon.nl (verified in full doc) |

---

## Operations & supply chain (ZenGreens focus)

- Classic **FBA private-label** model; PAN-EU/EFN-style complexity.
- Seed line is hardest: **Italian organic seeds** + **packaging** (imported; Asia inferred) converging at a **German 3PL** with weak digital ties.
- **Unit-of-measure mess:** procurement in **kg** and **per-seed count** (e.g. 1,000 seeds), sales in consumer units; species differ hugely in seeds-per-gram → no universal conversion without **species-specific BOM constants**.
- **SKU chaos:** five parallel identifier families (RM, PM, M, bare finished SKUs, PP…_SLSK parents) not enforced by one system → **true COGS per SKU is not calculable** today.

---

## Seven critical bottlenecks

1. **No ERP** — manual/disconnected processes; no single source of truth (critical / immediate).
2. **QC by intuition** — EU Reg 2018/848 traceability risk for organic seeds (high / high).
3. **Fragmented dual-source supply** — seeds vs packaging lead times misaligned (high / high).
4. **No 3PL integration or SLA** — limited visibility and accountability (medium-high / high).
5. **Loss calculation impossible** — no reliable yield/loss or gross margin on seeds (medium-high / medium).
6. **Per-seed count procurement** — third UoM dimension; needs per-species BOM logic (high / high).
7. **Fragmented SKU architecture** — five disconnected ID systems (high / high).

---

## SWOT (compressed)

- **Strengths:** Long Amazon tenure, strong DE/NL signals, trademarks, organic cert, 10 EU stores, growing balance sheet.
- **Weaknesses:** No ERP, weak QA documentation, complex UoM/SKU/VAT reality, small team vs scale.
- **Opportunities:** Odoo unification, replenishment automation, margin recovery via yield tracking, compliance, optional DTC (Odoo Website).
- **Threats:** Amazon rank volatility across accounts, packaging delays, fees, regulation, FX, competition.

---

## Odoo — fit & modules

**Rationale:** Modular ERP with **Amazon Connector**, multi-warehouse, multi-UoM, **BOM/Manufacturing**, **Quality (QCP)**, **lot/batch**, and **accounting** suited to EU VAT/OSS and multi-currency.

**Module mapping (examples):** Amazon Connector, Inventory (multi-location, UoM), Purchase, Manufacturing (BOM + batches), Quality, Replenishment, product variants/nomenclature, Accounting, 3PL workflows (virtual locations; API/EDI where possible).

**Seed UoM approach (concept):** Normalize to **kg at 3PL** where practical; use **species-specific** conversions for count-based POs; BOMs per species/size variant; illustrative loss buffers validated via **pilot packing runs** before locking config.

**QC checkpoints (four):** seed receipt at 3PL, packaging receipt, post-assembly per run, FBA inbound prep.

---

## Implementation roadmap (phases)

| Phase | Weeks (indicative) | Focus |
|--------|-------------------|--------|
| 1 Foundation | 1–5 | Odoo 18 Enterprise, master data, Amazon SP-API all 10 accounts, COA, initial sync |
| 2 Inventory & 3PL | 4–11 | Virtual 3PL/FC locations, POs, receipts, SLA |
| 3 Seeds manufacturing | 9–15 | BOMs, UoM, MOs, yield/loss |
| 4 Quality | 13–18 | QCPs, digital checklists, lot/batch |
| 5 Accounting | 16–21 | Settlements, COGS, VAT/OSS, multi-currency |
| 6 Optimisation | 19–24 | Reorder/forecast, alerts, 3PL integration assessment |

**CalibtOS collaboration:** (1) Requirements — **€2,000** fixed package (20 h × €100/h); (2) Implementation; (3) Testing/UAT with parallel operation where needed to protect rankings.

**Early quick wins (no ERP):** written **3PL SLA**, **batch record sheet** at 3PL, **target fill weights** per variant, **full stock count** for migration baseline.

---

## Investment & ROI (indicative)

- **Odoo Enterprise Standard:** ~€19.90/user/month (annual); **Custom** ~€29.90 if Studio/API/on-prem needed.
- **Year 1 TCO (indicative):** ~**€10,700–€22,200** (5 users licence + €2k requirements + T&M implementation band €6k–€16k + training €1.5k–€3k).
- **Post–requirements rates:** ERP specialist **€30/h**; additional team **€15/h** each when engaged.
- **ROI levers:** 3–5 hrs/day less manual work; **5–15%** gross margin upside from yield visibility; stockout/rank protection; compliance; true COGS for pricing.

---

## Risk register (headlines)

Ranking risk during cutover → parallel ops and validated sync. Packaging delays → safety stock and reorder buffers. 3PL adoption → SLA + templates. Wrong BOMs → pilot runs before freeze. VAT/OSS → specialist + Day-1 OSS setup. Organic traceability → lots from Phase 1. Adoption → training + internal champion.

---

## Strategic recommendations

**Next 30 days (no ERP):** full physical count; 3PL SLA; fill-weight standards; batch records at 3PL; request formal CalibtOS quote.

**Short / medium / long term:** deploy Odoo + Connector; 3PL as virtual locations; POs in Odoo; manufacturing + QC + lots; settlement reconciliation; then forecasting, optional DTC, EDI, further marketplaces.

**Proposed next steps with CalibtOS:** discovery session; detailed scope + T&M estimate; Odoo 18 sandbox; documented parallel go-live plan for all ten accounts.

---

## Conclusion (one line)

SLSK has outgrown spreadsheet-led operations; **Odoo Enterprise** is positioned as the main lever to unify ten marketplaces, fix seed UoM/BOM/SKU discipline, support organic traceability, and expose real profitability by SKU and market.

---

## Data note

The full proposal’s **Section 13** lists verified vs inferred/unverified items (e.g. Amazon.com.tr seller entity, 3PL identity, packaging origin inference, gated financials). Use the long document for citations and evidence tables.
