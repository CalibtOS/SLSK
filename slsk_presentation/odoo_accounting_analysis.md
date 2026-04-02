# Odoo Module & Accounting Analysis — SLSK Ventures GmbH
**Ref:** CalibtOS-SLSK-2026-001 | **Date:** 2026-04-02

---

## Module Overview & Customization Requirements

### Modules Planned (per Section 7 of the proposal)

| Module | Standard vs. Custom | Customization Needed |
|---|---|---|
| **Amazon Connector** | Standard (Enterprise only) | Connect all 10 SP-API accounts; map settlement transaction types to GL accounts |
| **Inventory (multi-location, UoM)** | Standard + config | 3 UoM dimensions (kg, seed count, pcs); virtual 3PL + 10 Amazon FC locations; species-specific conversion constants |
| **Purchase** | Standard + config | Dual UoM purchase orders (kg-based and count-based); auto-conversion to kg at goods receipt |
| **Manufacturing (BOM + Lot/Batch)** | Standard + config | Per-species, per-size BOMs; loss buffers validated by pilot runs; MOs track 3PL packing runs |
| **Quality (QCP)** | Standard + config | 4 custom checkpoints: seed receipt, packaging receipt, post-assembly, FBA inbound |
| **Replenishment** | Standard + config | Reorder points based on FBA velocity; lead time buffers for Asian packaging |
| **Product Variants & Nomenclature** | Standard + config | Unify 5 SKU families (RM/PM/M/bare/PP_SLSK) under Odoo parent/variant + Internal Reference fields |
| **Accounting** | Standard + heavy config | See full breakdown below |

---

## Accounting — Full Edge Case Analysis

### What IS Handled (per the proposal)

**1. Amazon Settlement Reconciliation**
The Amazon Connector auto-imports settlement reports for all 10 accounts into Odoo. Settlement reports become the primary revenue recognition mechanism — each settlement period (bi-weekly) generates journal entries.

**2. Multi-currency**
EUR, GBP (UK), SEK (Sweden), PLN (Poland) explicitly scoped. Odoo's multi-currency engine handles exchange rate differences on each journal entry.

**3. EU VAT / OSS**
- OSS built into the Chart of Accounts from Day 1 (Phase 1)
- Separate VAT registrations per country acknowledged
- EU VAT specialist recommended as a parallel workstream alongside Odoo setup
- Risk register flags UK, Sweden, Poland specifically

**4. COGS per SKU**
The loss calculation framework (Section 9.5) maps the full COGS chain:
`seed cost + packaging cost + 3PL assembly fee + FBA fee = COGS per unit`
Driven by BOM costing → Manufacturing Orders → Accounting journal entries.

**5. Stock Valuation Journal Entries**
Standard Odoo: inventory moves (goods receipt, production consumption, FBA dispatch) auto-generate journal entries via AVCO or FIFO costing methods.

**6. Vendor Bills from Suppliers**
Italian seed supplier POs and Asian packaging POs flow through to vendor bills → Accounts Payable via the standard Purchase → Accounting flow.

---

### What is NOT Handled / Significant Gaps

#### 1. Amazon Settlement Transaction Type Mapping (Critical Gap)
Amazon settlement CSVs contain 50+ distinct transaction types (`FBAPerUnitFulfillmentFee`, `FBAStorageFee`, `VariableClosingFee`, `FBAInboundTransportationFee`, `Promotion`, `A-to-z Guarantee Refund Claim`, `Chargeback Refund`, etc.).

The proposal only says "settlement reports auto-imported." It does not define which GL account each transaction type maps to. Without a full mapping table, journal entries will be meaningless or require manual correction every 14 days across 10 accounts.

**Status: Unhandled — needs explicit GL mapping during Phase 5 config.**

---

#### 2. Contracts — Completely Absent from Scope
The proposal does not mention contracts anywhere. Three relevant scenarios:

- **3PL service contract**: Once formalised (recommended as a pre-Odoo quick win), if it includes SLA penalties, minimum volume commitments, or prepayment terms, these need to be tracked. Odoo has no native service contract management — a custom module or external tracker is needed.
- **Italian seed supplier framework agreement**: If seeds are purchased under a recurring supply contract with fixed pricing or advance payments, this is relevant to accrual accounting. Currently treated as spot POs.
- **Customer contracts / subscriptions**: Not applicable — Amazon handles all B2C relationships. No Subscriptions module needed.

**Status: Unhandled — no contract management in scope at all.**

---

#### 3. Tax Write-offs — Multiple Unaddressed Scenarios

**a) Bad debt from Amazon A-to-Z claims and chargebacks**
Amazon deducts A-to-Z guarantee refunds and chargeback reversals from settlement payouts. If revenue was recognized on sale, the reversal needs a credit note + bad debt journal entry (debit Bad Debt Expense, credit Revenue or AR). This flow is not addressed.

**b) Input VAT reclaim reversal on seed yield waste**
Under German VAT law (§ 15a UStG), if input VAT was claimed on goods subsequently destroyed or wasted, the VAT reclaim may need to be partially reversed. Yield losses from seed packing runs (documented via MOs) trigger this. The 5% illustrative loss buffer could represent a material VAT exposure across a year's production volume.

**Status: Unhandled — EU VAT specialist input required.**

**c) UK marketplace — Marketplace Facilitator rules (post-Brexit)**
Since January 2021, Amazon UK is the deemed seller for UK VAT on orders under £135 — Amazon collects and remits UK VAT directly, not SLSK. Settlement accounting for UK should show revenue net of VAT (Amazon handles it), but Odoo's standard fiscal positions don't natively distinguish "Amazon already paid this VAT on my behalf" from standard zero-rated exports. Misconfiguration risks over-reporting UK VAT liability.

**Status: Unhandled — specific UK fiscal position configuration needed in Phase 5.**

**d) OSS vs. locally-registered VAT (PAN-EU FBA)**
This is the most complex tax edge case. With PAN-EU FBA, Amazon physically moves inventory between fulfilment centres across Germany, France, Poland, Italy, etc. The EU OSS scheme only covers cross-border B2C sales. When goods are stored locally (e.g. in France) and sold to a French customer, that is a domestic French VAT transaction — not eligible for OSS. Odoo's fiscal positions need to differentiate:

- DE stock → FR customer = OSS eligible
- FR stock → FR customer = French domestic VAT (separate registration required)

This requires the Amazon Connector to pass the FBA fulfilment centre origin location to Odoo to determine the correct fiscal position. Standard Odoo does not do this automatically.

**Status: Partially handled (VAT specialist flagged) but mechanism is unspecified.**

---

#### 4. Ledger / Chart of Accounts — Specifics Missing

**a) German localization (SKR03 vs. SKR04)**
The proposal says "Chart of Accounts configured" but doesn't specify which Odoo COA template. For a German GmbH, the statutory COA should follow SKR03 (standard) or SKR04 (industry-specific). Using Odoo's generic COA creates problems for Jahresabschluss and DATEV export to the Steuerberater. This is a Day 1 decision affecting the entire accounting structure.

**Status: Unhandled — must be decided in Phase 1.**

**b) Multi-company / French entity**
SLSK has a French SIREN registration (April 2022). The proposal does not address whether this is a branch, a separate legal entity, or just a VAT registration. If it is a separate Odoo company, intercompany transactions (inventory transfers, service charges) need intercompany journal entries. If it is only a VAT registration on the German entity, no structural Odoo change is needed — but FR fiscal positions must handle it correctly.

**Status: Unhandled — entity structure must be confirmed before Phase 1 COA config.**

**c) Marketplace P&L segmentation**
The proposal promises "per-SKU profitability reporting across all 10 marketplaces" but Odoo's standard accounting doesn't automatically segment P&L by marketplace. This requires either:
- Analytic accounts per marketplace (Odoo Analytic Accounting module)
- The Amazon Connector tagging each journal entry with the source marketplace

Neither is explicitly scoped in the proposal. Analytic Accounting is a separate configuration workstream.

**Status: Unhandled — contradicts the stated ROI promise; needs Analytic Accounting activation and connector tagging in Phase 5.**

---

#### 5. FX Revaluation of Open Positions
Between Amazon settlement (when GBP/SEK/PLN revenue is recognized) and bank receipt, exchange rates move. Unrealized FX gains/losses on open receivable positions need periodic revaluation entries (standard Odoo feature — the `account.move` FX revaluation wizard). For a business with 4 currencies this can be material.

**Status: Partially handled — multi-currency is scoped; the revaluation workflow is not explicitly planned.**

---

#### 6. Landed Costs — Asian Packaging Import Duties
The BOM COGS formula (`seed cost + packaging + 3PL + FBA fee`) does not include import duties or customs clearance fees on packaging imported from Asia. Odoo has a Landed Costs module that allocates import costs across purchase receipts.

**Status: Unhandled — Landed Costs module needs activation and configuration for packaging POs.**

---

#### 7. Amazon Settlement Timing vs. Accrual Accounting
Amazon pays out every 14 days. If an accounting period ends mid-settlement-period, accrued revenue (earned but not yet settled) needs an accrual journal entry. Not addressed in the proposal. Minor for cash-basis reporting but relevant for accurate monthly P&L.

**Status: Unhandled — acknowledge in Phase 5 scope.**

---

## Summary Table

| Accounting Area | Status | Priority |
|---|---|---|
| Amazon settlement reconciliation (10 accounts) | **Handled** | — |
| Multi-currency (EUR/GBP/SEK/PLN) | **Handled** | — |
| EU VAT / OSS | **Handled (partially)** | VAT specialist required; mechanism unspecified |
| COGS per SKU via BOM costing | **Handled** | — |
| Stock valuation journal entries | **Handled** | — |
| Vendor bills (seeds + packaging) | **Handled** | — |
| Amazon settlement GL mapping (50+ transaction types) | **GAP** | Critical |
| Contracts (3PL, supplier) | **GAP** | Medium |
| A-to-Z / chargeback bad debt write-off | **GAP** | High |
| Input VAT reversal on yield waste (§ 15a UStG) | **GAP** | High |
| UK Marketplace Facilitator VAT (post-Brexit) | **GAP** | Critical |
| PAN-EU FBA: OSS vs. local VAT routing | **GAP** | Critical |
| German COA localization (SKR03/SKR04) | **GAP** | Critical — Phase 1 decision |
| French entity / multi-company structure | **GAP** | High — Phase 1 decision |
| Marketplace P&L segmentation (Analytic Accounting) | **GAP** | High |
| FX revaluation (unrealized gains/losses) | **Partial** | Medium |
| Landed costs for packaging imports | **GAP** | Medium |
| Settlement timing accruals | **GAP** | Low |

---

## Recommended Additional Actions for Phase 5

1. **Produce a full Amazon settlement transaction-type → GL account mapping table** before any live reconciliation runs.
2. **Decide SKR03 vs. SKR04 in Phase 1** — this cannot be changed after data entry begins without a full COA migration.
3. **Confirm French entity type** (branch vs. separate company) with SLSK management and legal counsel before Phase 1.
4. **Engage EU VAT specialist** to cover: UK Marketplace Facilitator config, PAN-EU FBA OSS routing, and § 15a yield waste reversal.
5. **Activate Analytic Accounting** and configure per-marketplace analytic accounts to deliver on the promised per-marketplace profitability reporting.
6. **Activate Landed Costs module** and add import duties to all packaging PO receipts.
7. **Define bad debt flow** for A-to-Z claims: credit note template + bad debt expense account.

---

*Analysis based on: `slsk_final_proposal.md` (CalibtOS-SLSK-2026-001) and `odoo_diagram_prompt.md`.*
*Prepared: 2026-04-02*
