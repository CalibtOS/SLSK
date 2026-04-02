---
title: Manufacturing
node_id: manufacturing
category: manufacturing
tags: [slsk, odoo, node]
---

# Manufacturing

Sub-contracting MOs track seed kg consumed, units produced, yield loss per BOM. GAPS: (1) Loss buffer % (5% illustrative) must be validated across ≥3 pilot packing runs before go-live. (2) Per-species weight-per-seed constants must be measured — not estimated. (3) WIP accounting entries (seeds→WIP→finished goods) require explicit GL mapping.

## Connected Nodes

### Outgoing
- [[Odoo Node - Inventory|Inventory]] (`finished goods`)
- [[Odoo Node - Accounting|Accounting]] (`MO cost / WIP`)
- [[Odoo Node - Quality Control|Quality Control]] (`trigger QC`)
- [[Odoo Node - Scrap - Write-offs|Scrap / Write-offs]] (`yield waste`)

### Incoming
- [[Odoo Node - Inventory|Inventory]] (`components`)
- [[Odoo Node - Replenishment|Replenishment]] (`MO trigger`)
- [[Odoo Node - Sub-contracting|Sub-contracting]] (`3PL MO`)
- [[Odoo Node - Bill of Materials|Bill of Materials]] (`recipe`)
- [[Odoo Node - Quality Control|Quality Control]] (`QC checkpoints`)

## Source
- `slsk_presentation/deck/public/odoo_diagram.html`
