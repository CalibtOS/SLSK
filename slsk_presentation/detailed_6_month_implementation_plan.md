# SLSK Odoo ERP Implementation Plan (Detailed, Step-by-Step)

## Is 6 months valid for this scope?

Short answer: **yes, 6 months is valid** for SLSK's current scope, and it is the safer target versus a compressed timeline.

- **Why 6 months is reasonable**
  - Multi-market Amazon operations (10 marketplaces) with cross-border tax complexity.
  - Logistics-first bottlenecks (supplier -> 3PL -> FBA) that require process redesign, not only configuration.
  - Manufacturing + quality controls need pilot validation before freeze (especially UoM and yield assumptions).
  - Finance needs settlement-to-GL mapping and reconciliation controls to avoid reporting/regulatory errors.
- **When 6 months is too much**
  - If scope is reduced to minimum viable flows only (no advanced quality metrics, no deep analytics, limited automation).
- **When 6 months is too little**
  - If data is unclean, 3PL is unresponsive, or legal/accounting decisions are delayed (VAT/fiscal design, chart structure).

**Recommendation:** plan for **24 weeks (6 months)** with phase gates. If delivery is smooth, pull-forward to ~20-22 weeks.

---

## Planning assumptions

- Core team available weekly: sponsor, operations lead, finance lead, QA lead, and implementation lead.
- Decisions are made within 2-3 business days.
- Historical data is available for migration and validation.
- 3PL and accountant/tax advisor participate in required workshops.

---

## Delivery model and governance

### Cadence

- Weekly execution sync (60-90 min).
- Weekly decision board (30 min).
- End-of-phase gate review with sign-off.

### Environments

- `DEV`: build and initial test.
- `UAT`: business validation.
- `PROD`: go-live and hypercare.

### Change control

- Every customization requires:
  - Business requirement note.
  - Data impact note.
  - Test case and acceptance criteria.
  - Approval from process owner.

---

## Phase 1 (Weeks 1-5): Foundation and Master Data Control

### Objective

Create clean, governed data and baseline controls before process automation.

### Modules to start

- `Contacts`
- `Documents`
- `Inventory` (base structure only)
- `Accounting` (initial structure only)

### Step-by-step

1. **Kickoff + scope lock**
  - Confirm in-scope brands, marketplaces, currencies, entities, and warehouses/locations.
  - Output: signed scope baseline document.
2. **Master data inventory**
  - Extract current product, supplier, partner, and bank records.
  - Classify data quality issues (duplicates, missing fields, conflicting naming).
  - Output: data quality report + cleanup backlog.
3. **Data model design**
  - Define mandatory fields for suppliers, products, and logistics partners.
  - Define product hierarchy and internal reference conventions.
  - Output: data dictionary and field standards.
4. **Contacts setup**
  - Create partner categories (supplier, 3PL, carrier, bank, marketplace actor).
  - Add governance fields (cert body, country-of-origin, seller account IDs).
  - Output: standardized partner master.
5. **Documents setup**
  - Configure document categories (organic cert, phytosanitary, SLA, lot evidence).
  - Define attachment requirements per process object (supplier, lot, PO, MO).
  - Output: mandatory document policy + folder/type structure.
6. **Inventory baseline**
  - Create location architecture (raw, packaging, WIP, finished, FBA virtuals).
  - Define lot tracking policy.
  - Output: approved location map.
7. **Accounting baseline**
  - Establish journal structure and currency setup.
  - Confirm chart strategy and reporting dimensions baseline.
  - Output: initial accounting skeleton for later detail.
8. **Gate review**
  - Verify data readiness criteria met.
  - Output: Phase 1 sign-off.

### Customizations to create in this phase

- Partner custom fields:
  - Organic cert code.
  - Cert authority.
  - Supplier origin country matrix.
  - 3PL SLA classification fields.
- Product governance fields:
  - SKU family/group.
  - Dual-UoM policy flag.
- Validation rules:
  - Block save when mandatory compliance fields are missing for regulated materials.

---

## Phase 2 (Weeks 4-9): Logistics and Supply Chain Control Layer

### Objective

Stabilize procurement, inbound logistics, and replenishment visibility.

### Modules

- `Purchase`
- `Delivery / Carrier`
- `Landed Costs`
- `Inventory`
- `Replenishment`

### Step-by-step

1. **Process blueprint workshops**
  - Map as-is and to-be flows for seeds, packaging, and inbound handling.
  - Output: approved process swimlanes.
2. **Purchase configuration**
  - Configure vendor terms, incoterms, lead times, and approval thresholds.
  - Output: operational PO workflow.
3. **Carrier and delivery integration**
  - Configure carrier records and tracking fields.
  - Build ETA capture and exception statuses.
  - Output: shipment visibility baseline.
4. **Landed cost allocation**
  - Configure cost buckets (freight, duty, insurance, handling).
  - Define allocation rules by product type/origin.
  - Output: repeatable landed cost posting process.
5. **Replenishment design**
  - Define min/max, safety stock logic, and MTO boundaries.
  - Assign lead-time classes by supply lane.
  - Output: replenishment policy matrix.
6. **Exception management**
  - Create exception queue for late/partial receipts and missing docs.
  - Output: operational risk board with owners and SLA.
7. **Gate review**
  - Demonstrate end-to-end inbound scenario.
  - Output: Phase 2 sign-off.

### Customizations to create in this phase

- Dual-UoM procurement controls:
  - Line-level validation for count-based vs weight-based purchases.
  - Species-specific conversion guardrails.
- ETA and logistics exception fields:
  - promised date, revised date, exception reason, escalation owner.
- Replenishment helper automation:
  - dynamic safety-stock multiplier input model.

---

## Phase 3 (Weeks 9-14): Manufacturing and 3PL Operationalization

### Objective

Implement subcontracting and manufacturing traceability with controlled assumptions.

### Modules

- `Sub-contracting`
- `Manufacturing`
- `Bill of Materials`
- `Units of Measure`

### Step-by-step

1. **3PL operating model confirmation**
  - Define handoff rules, event timestamps, and accountability.
  - Output: 3PL process contract map.
2. **BoM structure setup**
  - Create BoMs by species/size with versioning policy.
  - Output: controlled BoM catalog.
3. **UoM logic setup**
  - Configure approved UoM categories and conversion governance.
  - Output: accepted UoM model.
4. **Subcontracting workflow**
  - Configure component issue to 3PL and finished receipt back to stock.
  - Output: executable subcontracting MO lifecycle.
5. **Pilot-run validation**
  - Run at least 3 controlled pilots per key species.
  - Capture actual consumption, variance, and loss buffer evidence.
  - Output: validated production parameters.
6. **WIP accounting mapping**
  - Define posting logic for raw -> WIP -> finished transitions.
  - Output: manufacturing accounting map.
7. **Gate review**
  - Approve only validated BoMs and conversion constants.
  - Output: Phase 3 sign-off.

### Customizations to create in this phase

- Species-specific `weight-per-seed` constant storage.
- BoM validation gate:
  - prevent production release if pilot validation missing.
- 3PL batch-reference and traceability fields.
- Variance capture fields for actual vs planned yield.

---

## Phase 4 (Weeks 13-17): Quality and Controlled Exception Handling

### Objective

Move from ad hoc checks to measurable quality control and disposition.

### Modules

- `Quality Control`
- `Scrap / Write-offs`
- (integration with `Manufacturing` and `Inventory`)

### Step-by-step

1. **Quality checkpoint design**
  - Define checkpoints: inbound seed, packaging, post-assembly, pre-FBA.
  - Output: quality plan matrix.
2. **Criteria and tolerances**
  - Define measurable thresholds (germination, fill weight, defect rate).
  - Output: threshold catalog.
3. **Inspection workflow build**
  - Configure pass/fail + numeric capture + evidence attachment.
  - Output: traceable quality execution flow.
4. **Disposition logic**
  - Configure rework/accept/reject/scrap routing rules.
  - Output: standardized disposition decision tree.
5. **Escalation workflow**
  - Configure failure escalation to 3PL + internal ownership.
  - Include AI pre-validation for SLA-related checks, then human approval for failed/pre-failed cases.
  - Output: auditable escalation protocol.
6. **Scrap accounting linkage**
  - Map scrap reasons to dedicated financial treatment.
  - Output: governed write-off framework.
7. **Gate review**
  - Execute test scenarios for all quality outcomes.
  - Output: Phase 4 sign-off.

### Customizations to create in this phase

- Numeric QC fields and computed compliance status.
- SLA breach candidate detector (pre-validation signal).
- Human-review queue for failed pre-validations.
- Reason-code governance for scrap and non-conformance.

---

## Phase 5 (Weeks 16-21): Finance, Compliance, and Reporting Control

### Objective

Ensure financial truthfulness and regulatory-safe reporting.

### Modules

- `Accounting`
- `Analytic Accounting`
- `Bank Reconciliation`
- `Tax Reporting`

### Step-by-step

1. **Accounting policy workshop**
  - Confirm chart usage, dimensions, and reporting outputs.
  - Output: signed accounting policy note.
2. **Settlement mapping design**
  - Build transaction-type to GL mapping library.
  - Output: mapping matrix with owner and review cadence.
3. **Analytic dimensions setup**
  - Configure marketplace and brand dimensions.
  - Output: multidimensional P&L readiness.
4. **Bank reconciliation flow**
  - Configure currency-specific bank journals and matching logic.
  - Output: repeatable payout reconciliation.
5. **Tax configuration**
  - Configure VAT/OSS logic and fiscal positions.
  - Output: compliant reporting baseline.
6. **Close process rehearsal**
  - Run month-end simulation.
  - Output: close checklist and issue log.
7. **Gate review**
  - Validate trial balance, reconciliation, and tax outputs.
  - Output: Phase 5 sign-off.

### Customizations to create in this phase

- Settlement mapping rule engine inputs (classification table).
- Analytic auto-tagging rules for source marketplace and brand.
- Exception flags for unmatched payouts and reconciliation drift.
- VAT decision support matrix outputs for audit.

---

## Phase 6 (Weeks 19-24): Channel Hardening, Cutover, and Hypercare

### Objective

Stabilize end-to-end operations and transition safely to production.

### Modules

- `Amazon Connector`
- `Sales`
- `FBA Inbound`
- `Returns / Credit Notes`
- Final integration validation across all earlier modules

### Step-by-step

1. **Integration contract test**
  - Validate order, inventory, return, and settlement events.
  - Output: integration test report.
2. **Cutover design**
  - Define freeze window, data load sequence, rollback steps.
  - Output: cutover runbook.
3. **UAT by role**
  - Execute scenario packs for ops, finance, quality, and management.
  - Output: signed UAT evidence.
4. **Go-live readiness checkpoint**
  - Confirm open issues, severity, and owners.
  - Output: go/no-go decision pack.
5. **Go-live execution**
  - Run cutover sequence and monitor early transactions.
  - Output: production activation report.
6. **Hypercare (2-4 weeks)**
  - Daily triage, KPI monitoring, defect fixes, process tuning.
  - Output: stabilization report and handover.

### Customizations to create in this phase

- Monitoring dashboard for sync health and exception rates.
- Alerting thresholds for order mismatch, stock divergence, payout variance.
- Operational runbooks and SOP templates.
- Controlled feature toggles for incremental automation activation.

---

## Cross-phase non-module work (must be done throughout)

1. **Data governance**
  - Owners, quality rules, and lifecycle policy per critical dataset.
2. **Role-based training**
  - Role playbooks, SOPs, and certification checkpoints.
3. **Risk and dependency management**
  - RAID log (Risks, Assumptions, Issues, Dependencies) updated weekly.
4. **Documentation and audit trail**
  - Keep decision records, test evidence, and change approvals centralized.
5. **Performance and adoption KPIs**
  - Define baseline and target metrics before go-live.

---

## Exit criteria by end of month 6

- End-to-end operational flow working from procurement to accounting close.
- Quality checkpoints measurable and auditable.
- Settlement reconciliation stable and repeatable.
- VAT/OSS reporting process validated.
- 3PL SLA governance embedded with escalation and review logic.
- Team can operate without implementation-team daily intervention.

---

## Suggested immediate next actions (this week)

1. Approve this phase-gated plan and assign phase owners.
2. Book Phase 1 workshops (data, compliance, and process blueprint).
3. Produce current-state data extract for partner/product/inventory.
4. Draft the first customization backlog using sections above.
5. Fix go-live target at **Week 24**, with an optional acceleration check at Week 12.

