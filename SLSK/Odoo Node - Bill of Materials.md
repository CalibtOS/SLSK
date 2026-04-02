---
title: Bill of Materials
node_id: bom
category: manufacturing
tags: [slsk, odoo, node]
---

# Bill of Materials

RM (seed kg) + PM (packaging) + M (3PL labour) per SKU; 3 size variants per species (10g, 200g, 500g). CUSTOMISATION: Per-BOM weight-per-seed constant field (validated by pilot runs). BOM version control — lock historical MOs against retroactive recalculation when loss buffer changes after pilot data.

## Connected Nodes

### Outgoing
- [[Odoo Node - Manufacturing|Manufacturing]] (`recipe`)

### Incoming
- [[Odoo Node - Units of Measure|Units of Measure]] (`conversions`)

## Source
- `slsk_presentation/deck/public/odoo_diagram.html`
