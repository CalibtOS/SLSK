---
title: Purchase
node_id: purchase
category: purchase
tags: [slsk, odoo, node]
---

# Purchase

Demand-driven POs to EU seed suppliers and Asian packaging suppliers. CUSTOMISATION: Dual-UoM PO lines (kg and per-seed-count on the same PO). Validation rule: block count-based PO lines for any species without a validated weight-per-seed constant in its BOM. Multi-supplier routing rules per species.

## Connected Nodes

### Outgoing
- [[Odoo Node - Inventory|Inventory]] (`goods receipt`)
- [[Odoo Node - Accounting|Accounting]] (`vendor bill`)
- [[Odoo Node - Contacts|Contacts]] (`vendor master`)
- [[Odoo Node - Landed Costs|Landed Costs]] (`freight / duty`)
- [[Odoo Node - Discuss|Discuss]] (`PO approvals`)

### Incoming
- [[Odoo Node - Suppliers EU Seeds + Packaging|Suppliers EU Seeds + Packaging]] (`PO / delivery`)
- [[Odoo Node - Delivery - Carrier|Delivery / Carrier]] (`ETA update`)
- [[Odoo Node - Replenishment|Replenishment]] (`demand PO`)

## Source
- `slsk_presentation/deck/public/odoo_diagram.html`
