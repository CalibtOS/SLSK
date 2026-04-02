# Odoo Module Gap Analysis — SLSK Ventures GmbH
**Ref:** CalibtOS-SLSK-2026-001 | **Date:** 2026-04-02  
**Source:** `odoo_diagram.html` current architecture vs. full operational requirements

---

## Current Architecture Inventory

### Modules Present (15 nodes)

| ID | Module | Category |
|---|---|---|
| amazon_ext | Amazon 10 EU Marketplaces | External |
| suppliers_ext | Suppliers (Seeds + Packaging) | External |
| amazon_connector | Amazon Connector | Sales & Amazon |
| sales | Sales | Sales & Amazon |
| contacts | Contacts | Core / Base |
| discuss | Discuss | Core / Base |
| purchase | Purchase | Purchase |
| landed_costs | Landed Costs | Inventory & Warehouse |
| inventory | Inventory | Inventory & Warehouse |
| accounting | Accounting | Accounting & Finance |
| manufacturing | Manufacturing | Manufacturing & Quality |
| quality | Quality Control | Manufacturing & Quality |
| bom | Bill of Materials | Manufacturing & Quality |
| uom | Units of Measure | Manufacturing & Quality |
| workcenters | Work Centers (3PL) | Manufacturing & Quality |

### Connections Present (27 arrows)

`amazon_ext→amazon_connector`, `suppliers_ext→purchase`, `amazon_connector→sales`, `amazon_connector→inventory`, `amazon_connector→accounting`, `sales→inventory`, `sales→accounting`, `purchase→inventory`, `purchase→accounting`, `inventory→purchase`, `inventory→manufacturing`, `manufacturing→inventory`, `inventory→accounting`, `bom→manufacturing`, `uom→bom`, `workcenters→manufacturing`, `quality→manufacturing`, `quality→inventory`, `amazon_connector→contacts`, `purchase→contacts`, `contacts→accounting`, `purchase→landed_costs`, `landed_costs→inventory`, `landed_costs→accounting`, `quality→discuss`, `inventory→discuss`, `purchase→discuss`

---

## Gap Analysis: Missing Modules

---

### 1. Sub-contracting (CRITICAL — Architectural Flaw in Current Design)

**What it is:** An Odoo Manufacturing route that models an external party receiving raw materials and returning finished goods.

**Why it's critical for SLSK:** The 3PL packing model is textbook sub-contracting:
- SLSK owns seeds and packaging (raw materials)
- 3PL receives them, assembles, and returns finished consumer packs
- SLSK does no in-house production

**Current approach (Work Centers) vs. correct approach:**

| Aspect | Current: Work Centers | Correct: Sub-contracting |
|---|---|---|
| Inventory ownership | Odoo thinks materials stay on-site | Materials move OUT to 3PL, finished goods move IN |
| Stock moves generated | Internal transfer only | Two external stock moves: resupply TO 3PL + receipt FROM 3PL |
| COGS accuracy | Labour cost only | Seed cost + packaging + 3PL service fee all in one MO |
| 3PL stock visibility | None (3PL is just a capacity node) | Odoo tracks what is physically at the 3PL at any time |
| Vendor bill linkage | No automatic link | Sub-contractor bill auto-generates from MO completion |

**Missing connections this creates:**
- `purchase → 3pl_ext` (resupply: seeds + packaging sent to 3PL)
- `3pl_ext → manufacturing` (sub-contracting MO)
- `manufacturing → accounting` (service fee → vendor bill)

**Impact if not fixed:** Stock-on-hand figures for seeds and packaging at the 3PL will be wrong, COGS calculations will miss the 3PL assembly cost, and the accounting entries will not reflect the real flow of materials.

---

### 2. Delivery / Carrier Tracking (HIGH — User-Identified Gap)

**What it is:** Odoo's `delivery` module + carrier integration (DHL, DPD, UPS, TNT, etc.) for tracking physical shipments end-to-end.

**Why it's needed for SLSK:**

| Shipment Type | Current State | With Delivery Module |
|---|---|---|
| Seeds from Italy → German 3PL | Invisible between PO and goods receipt | Carrier booking, tracking number, ETA visible in Odoo |
| Packaging from Asia → German 3PL | Invisible; lead times only estimated | Container number, port of entry, customs status tracked |
| 3PL → Amazon FBA inbound | Manual shipment creation in Seller Central | FBA shipping plan created/tracked in Odoo |
| Amazon → Customer | Amazon handles; not SLSK's problem | N/A (Amazon manages last-mile) |

**Missing connections:**
- `suppliers_ext → shipment_tracker` (carrier booking at origin)
- `shipment_tracker → purchase` (ETA feeds expected delivery date on PO)
- `shipment_tracker → inventory` (goods-in confirmation triggers receipt)
- `shipment_tracker → amazon_connector` (FBA inbound plan creation)

**Key benefit:** Seeds from Italy have variable germination windows — knowing the precise ETA enables the 3PL to schedule packing runs and prevents the packaging/seeds arrival timing mismatch (Bottleneck 3 in the proposal).

---

### 3. Analytic Accounting (HIGH — Required for Core ROI Promise)

**What it is:** Odoo's analytic accounts (cost centres) that tag every journal entry with one or more dimensions.

**Why it's critical:** The proposal explicitly promises "per-SKU profitability reporting across all 10 marketplaces." This is impossible without analytic accounting. Standard Odoo accounting only shows consolidated P&L. Analytic accounts are the layer that produces:
- Revenue by marketplace (DE, FR, UK, IT, ES, NL, BE, SE, IE, PL)
- Revenue by brand (ZenGreens, VEVOX, SLSK Games)
- COGS by product line

**Required analytic structure:**
```
Dimension 1 — Marketplace:  DE / FR / UK / IT / ES / NL / BE / SE / IE / PL
Dimension 2 — Brand:        ZenGreens / VEVOX / SLSK Games
Dimension 3 — Cost type:    Seeds / Packaging / 3PL Assembly / FBA Fees / Storage
```

**Missing connections:**
- `accounting → analytic_accounting` (tag-driven split of all journal entries)
- `amazon_connector → analytic_accounting` (settlement entries tagged by marketplace)
- `manufacturing → analytic_accounting` (COGS tagged by brand/SKU)

---

### 4. Replenishment (MEDIUM — Present as Connection, Missing as Explicit Module)

**What it is:** Odoo's dedicated replenishment planning layer (min/max rules, make-to-order, orderpoint automation).

**Why it needs to be explicit:** The current diagram shows `inventory → purchase` as a "reorder trigger" dashed arrow. This undersells the complexity. Replenishment for SLSK must handle:
- 10 separate FBA virtual locations, each with independent min/max rules
- Sales velocity-based dynamic reorder quantities
- Different lead times per supplier (Italy: 2–3 weeks, Asia: 8–12 weeks)
- MO triggers (replenishment triggers a sub-contracting MO, not just a PO)
- Safety stock buffers for ranking protection

**Missing connections:**
- `replenishment → purchase` (demand-driven POs)
- `replenishment → manufacturing` (make-to-stock MO triggers)
- `amazon_connector → replenishment` (FBA velocity data feeds forecasts)

---

### 5. Bank Reconciliation / Bank Feeds (MEDIUM)

**What it is:** Odoo's bank statement import and automatic reconciliation against open payables/receivables.

**Why it's needed:** Amazon pays out bi-weekly per marketplace. SLSK receives:
- EUR settlements to German IBAN
- GBP settlements to UK bank account
- SEK settlements (likely to EU SEPA account or Swedish account)
- PLN settlements (Polish account or SEPA EUR conversion)

Each bank payout needs to be matched against the Odoo settlement record created by the Amazon Connector. Without this module explicitly in scope, someone reconciles manually — every 14 days, for 10 accounts, in 4 currencies.

**Missing connections:**
- `bank_ext → bank_reconciliation` (bank feed import)
- `bank_reconciliation → accounting` (matched entries posted)
- `amazon_connector → bank_reconciliation` (expected payout amounts to match against)

---

### 6. Amazon FBA Inbound Shipments (MEDIUM)

**What it is:** A distinct sub-workflow of the Amazon Connector for creating and tracking FBA Inbound Shipment Plans.

**Why it needs to be separate from general stock sync:** Creating an FBA inbound shipment in Seller Central involves:
1. Creating a shipment plan (which FCs Amazon assigns, quantities per FC)
2. Printing FBA labels and PRE labels
3. Booking a carrier and creating a tracking number
4. Amazon receiving the shipment at the FC
5. Amazon confirming the received quantity (which may differ from shipped)

Steps 4–5 feed back into Odoo as inventory reconciliation. If Amazon receives 490 units but SLSK shipped 500, the 10-unit discrepancy needs a stock adjustment and an Amazon claim. This is currently invisible in the diagram.

**Missing connections:**
- `inventory → fba_inbound` (pick + pack at 3PL triggers shipment plan)
- `fba_inbound → amazon_connector` (shipment plan submitted to Seller Central)
- `fba_inbound → shipment_tracker` (carrier tracking attached)
- `amazon_connector → inventory` should split into: "stock sync" (normal) + "FBA discrepancy adjustment" (exception)

---

### 7. Scrap / Inventory Adjustments (MEDIUM)

**What it is:** Odoo's Scrap feature, which removes stock from a location and creates a configurable accounting write-off entry.

**Why it's needed:** SLSK has multiple sources of inventory loss that need accounting treatment:
1. **Yield waste** — seed weight lost during packing (BOM expected vs. actual)
2. **3PL damage** — packaging damaged in storage
3. **FBA damage** — Amazon damages goods in FC (generates Amazon inventory adjustment report)
4. **Expired stock** — organic seeds have shelf life; unsaleable stock needs write-off
5. **FBA lost inventory** — Amazon loses stock (should trigger Amazon reimbursement claim)

Each write-off type needs a different expense account and potentially different VAT treatment (§ 15a UStG for input VAT reversal on destroyed goods).

**Missing connections:**
- `manufacturing → scrap` (yield waste from MO)
- `amazon_connector → scrap` (FBA inventory adjustments)
- `scrap → accounting` (write-off journal entry)
- `quality → scrap` (rejected goods at QC checkpoint)

---

### 8. Returns / Credit Notes (LOW-MEDIUM)

**What it is:** Reverse delivery + credit note workflow for customer returns processed through Amazon.

**Why it matters:** Amazon FBA returns:
- Amazon processes the refund and deducts from settlement
- Returned items go back to Amazon FC (unfulfillable or resellable)
- Odoo needs a credit note against the original invoice and a reverse stock move
- If items are returned as unfulfillable (damaged), they become scrap with write-off

**Missing connections:**
- `amazon_connector → returns` (return notification from settlement)
- `returns → inventory` (reverse stock move)
- `returns → accounting` (credit note)
- `returns → scrap` (if unfulfillable)

---

### 9. Tax Reporting — OSS / EC Sales List (LOW-MEDIUM)

**What it is:** Odoo's Tax Report engine generating OSS quarterly returns, EC Sales List (Zusammenfassende Meldung), and country-specific VAT filings.

**Why it needs to be explicit:** For 10 EU marketplaces + UK, the compliance output is:
- **EU OSS return** — quarterly, one filing for all cross-border EU B2C sales
- **German VAT return (Umsatzsteuervoranmeldung)** — monthly/quarterly
- **UK VAT return** — quarterly (if SLSK remains UK VAT-registered post-Marketplace Facilitator threshold review)
- **EC Sales List** — if intra-community B2B sales exist (e.g. seed supplier invoices with reverse charge)
- **French TVA return** — separate if French entity is a distinct company

This is not automatic — it requires fiscal position configuration, tax mapping validation, and a periodic filing workflow.

**Missing connections:**
- `accounting → tax_reporting` (data source for filings)
- `tax_reporting` — output node (export to ELSTER, OSS portal)

---

### 10. Documents (LOW)

**What it is:** Odoo's document management module for storing and linking files to records.

**Why it matters for SLSK:** Organic certification compliance (EU Reg 2018/848) requires documentary evidence at every lot/batch level:
- Italian supplier's EU organic certificate (LU-BIO-04) — must be linked to the supplier record AND to each lot received
- Phytosanitary certificates per seed shipment
- 3PL batch records (fill weights, QC pass/fail results)
- FBA inbound packing lists (proof of what was sent vs. received)

Without document storage integrated into Odoo, these live on email/Dropbox and break the traceability chain that QC module entries are supposed to support.

**Missing connections:**
- `quality → documents` (batch records stored against QC results)
- `purchase → documents` (supplier certificates attached to PO)
- `inventory → documents` (lot/batch level document links)

---

## Gap Analysis: Missing Connections (Within Existing Modules)

| Missing Connection | Direction | Label | Why It's Needed |
|---|---|---|---|
| `uom → purchase` | solid | UoM conversion | Dual-UoM POs (kg and seed-count) require UoM at Purchase level, not only at BoM |
| `uom → inventory` | solid | stock UoM | All stock is held in kg at 3PL; UoM governs the display and conversion |
| `uom → sales` | solid | order UoM | Sales lines are in pcs; UoM converts to kg for stock deduction |
| `manufacturing → quality` | dashed | trigger QC | Manufacturing triggers QC checks at defined steps; arrow direction should be bidirectional or added |
| `manufacturing → accounting` | solid | WIP / labour cost | MO completion posts manufacturing cost entries (seeds consumed + 3PL service) to accounting |
| `accounting → discuss` | dashed | settlement alerts | VAT filing reminders, settlement anomalies, overdue vendor bills trigger Discuss notifications |
| `workcenters → quality` | dashed | error rate metrics | 3PL error rates measured at Work Centers feed Quality reporting and SLA tracking |
| `amazon_connector → replenishment` | dashed | velocity data | FBA sales velocity from all 10 accounts should drive dynamic reorder quantities |

---

## Architectural Issues in the Current Diagram

### Issue 1: Work Centers vs. Sub-contracting (Critical)

The 3PL is modelled as an internal Work Center. This is architecturally incorrect for SLSK's model. The correct Odoo module is **Sub-contracting** (a manufacturing route type). Work Centers represent in-house capacity (machines, operators). Sub-contracting represents external parties who receive components and return finished goods.

**Consequence of the current design:** Odoo will not generate the two stock moves that actually happen (components OUT to 3PL, finished goods IN from 3PL). The inventory position of materials physically at the 3PL will not be tracked correctly.

**Recommended fix:** Replace `workcenters` node with `subcontracting` and add `3pl_ext` as an external entity receiving components and returning finished goods.

### Issue 2: UoM Node Placement (Medium)

UoM is placed in the Manufacturing & Quality cluster and only connected to BoM. In reality, UoM is a cross-cutting core module used by:
- **Purchase**: dual-UoM POs (kg and seed-count)
- **Inventory**: kg stock management at 3PL
- **Sales**: pcs order lines
- **Manufacturing / BoM**: species-specific conversion constants

The current placement implies UoM only matters during manufacturing — it actually governs the entire procure-to-sell flow.

**Recommended fix:** Move UoM to Core / Base cluster and add connections to Purchase, Inventory, and Sales.

### Issue 3: Amazon Connector Over-compression (Medium)

The Amazon Connector handles at least four distinct data flows:
1. **Order sync** → Sales
2. **Inventory sync** ↔ Inventory
3. **Settlement import** → Accounting
4. **FBA Inbound Shipment Plans** → Inventory / Delivery

These are separate Odoo processes with different configurations and failure modes. Compressing them into one node with three output arrows hides operational complexity and makes it harder to identify where failures occur.

**Recommended fix:** Consider splitting into `amazon_connector` (core SP-API bridge) and `amazon_fba_ops` (FBA inbound + inventory management sub-module).

### Issue 4: Accounting Node Under-specified (Medium)

The current Accounting node description focuses on inputs. The output side (what Accounting produces) is missing:
- Tax returns (OSS, German VAT, UK VAT)
- Bank reconciliation
- Analytic P&L per marketplace/brand
- Aged payables (Italian supplier payment terms)
- Management reporting

### Issue 5: No External Nodes for Bank and Tax Authorities (Low)

The diagram has `amazon_ext` and `suppliers_ext` as external nodes but is missing:
- `bank_ext` — the banks receiving Amazon payouts in 4 currencies
- `tax_authorities` — ELSTER (German tax), OSS portal (EU), HMRC (UK)

These are real integration points, not just internal flows.

---

## Summary: Modules to Add

| Module | Priority | Category | Reason |
|---|---|---|---|
| **Sub-contracting** | Critical | Manufacturing & Quality | Correct modelling of 3PL assembly — replaces Work Centers as primary 3PL interface |
| **Delivery / Carrier Tracking** | High | Inventory & Warehouse | Track Italy→3PL, Asia→3PL, 3PL→FBA shipments in transit |
| **Analytic Accounting** | High | Accounting & Finance | Required for per-marketplace + per-brand P&L (core ROI promise) |
| **Replenishment** | Medium | Inventory & Warehouse | Explicit node for min/max rules, velocity-based reorder, MO triggers |
| **Bank Reconciliation** | Medium | Accounting & Finance | Multi-currency settlement payouts from 10 accounts matched to bank |
| **Amazon FBA Inbound** | Medium | Sales & Amazon | Create/track FBA shipping plans; reconcile Amazon received vs. shipped |
| **Scrap / Write-offs** | Medium | Inventory & Warehouse | Yield waste, FBA adjustments, damaged/expired stock with accounting entries |
| **Returns / Credit Notes** | Low-Medium | Sales & Amazon | Amazon FBA return workflow → reverse stock + credit note |
| **Tax Reporting** | Low-Medium | Accounting & Finance | OSS quarterly return, German VAT, EC Sales List output |
| **Documents** | Low | Core / Base | Organic certificates, batch records, packing lists linked to Odoo records |

---

## Summary: Connections to Add

| From | To | Style | Label |
|---|---|---|---|
| uom | purchase | solid | UoM conversion |
| uom | inventory | solid | stock UoM |
| uom | sales | solid | order UoM |
| manufacturing | quality | dashed | trigger checkpoint |
| manufacturing | accounting | solid | WIP / MO cost |
| accounting | discuss | dashed | settlement / VAT alerts |
| workcenters → (replace with subcontracting) | | | |
| suppliers_ext | delivery | dashed | carrier booking |
| delivery | inventory | solid | goods-in confirmation |
| delivery | purchase | dashed | ETA update |
| delivery | amazon_connector | dashed | FBA inbound plan |
| amazon_connector | replenishment | dashed | velocity data |
| replenishment | manufacturing | dashed | MO trigger |
| manufacturing | scrap | solid | yield waste |
| amazon_connector | scrap | dashed | FBA adjustment |
| scrap | accounting | solid | write-off entry |
| quality | scrap | solid | rejected goods |

---

## Priority Order for Implementation

1. **Fix Sub-contracting** — before any Manufacturing phase work (Phase 3); wrong module here invalidates all inventory and COGS accuracy
2. **Add Delivery / Carrier Tracking** — Phase 2 (Inventory & 3PL); needed from first live PO
3. **Add Analytic Accounting** — Phase 5 (Accounting); must be configured before first settlement import or all journal entries will need retroactive re-tagging
4. **Add Replenishment as explicit module** — Phase 6 (Optimisation); but rules should be pre-configured in Phase 2
5. **Add Bank Reconciliation** — Phase 5; required for month-end close
6. **Add Scrap workflow** — Phase 3 (Manufacturing); yield waste accounting starts with first MO
7. **Add FBA Inbound / Returns / Tax Reporting / Documents** — Phase 5–6

---

*Analysis based on: `odoo_diagram.html` current architecture + `slsk_final_proposal.md` (CalibtOS-SLSK-2026-001)*  
*Prepared: 2026-04-02*
