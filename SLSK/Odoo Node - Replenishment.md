---
title: Replenishment
node_id: replenishment
category: inventory
tags: [slsk, odoo, node]
---

# Replenishment

Min/max and MTO reorder rules for all 10 FBA virtual locations plus 3PL safety stock. CUSTOMISATION: Dynamic safety-stock multiplier from FBA sales velocity (fed by Amazon Connector). Lead-time tiers: EU seeds ~14d, Asian packaging ~60d, 3PL assembly ~5d. MTO rules trigger sub-contracting MOs, not just POs.

## Connected Nodes

### Outgoing
- [[Odoo Node - Purchase|Purchase]] (`demand PO`)
- [[Odoo Node - Manufacturing|Manufacturing]] (`MO trigger`)

### Incoming
- [[Odoo Node - Amazon Connector|Amazon Connector]] (`velocity data`)
- [[Odoo Node - Inventory|Inventory]] (`stock levels`)

## Source
- `slsk_presentation/deck/public/odoo_diagram.html`
