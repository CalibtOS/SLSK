---
title: Units of Measure
node_id: uom
category: manufacturing
tags: [slsk, odoo, node]
---

# Units of Measure

3D UoM: kg (bulk purchase) ↔ individual seed count (count POs) ↔ consumer pcs (sales). CRITICAL GAP: Odoo standard UoM cannot store per-product conversion factors — a custom field on product.template is required for the species-specific weight-per-seed constant that drives correct conversion at PO receipt and MO consumption.

## Connected Nodes

### Outgoing
- [[Odoo Node - Bill of Materials|Bill of Materials]] (`conversions`)

### Incoming
- None

## Source
- `slsk_presentation/deck/public/odoo_diagram.html`
