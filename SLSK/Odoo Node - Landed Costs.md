---
title: Landed Costs
node_id: landed_costs
category: inventory
tags: [slsk, odoo, node]
---

# Landed Costs

Allocates import freight, customs duty and insurance to each SKU unit cost. IMPROVEMENT: Split by cost type (sea freight / air freight / customs duty / insurance) as separate lines for accurate COGS breakdown. Auto-apply rule for all non-EU purchase receipts (Asian packaging only).

## Connected Nodes

### Outgoing
- [[Odoo Node - Inventory|Inventory]] (`unit cost adjust`)
- [[Odoo Node - Accounting|Accounting]] (`journal entry`)

### Incoming
- [[Odoo Node - Purchase|Purchase]] (`freight / duty`)

## Source
- `slsk_presentation/deck/public/odoo_diagram.html`
