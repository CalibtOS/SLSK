---
title: Sales
node_id: sales
category: sales
tags: [slsk, odoo, node]
---

# Sales

Processes inbound Amazon orders; triggers delivery orders and customer invoices. GAP: Fiscal position auto-selection must distinguish OSS-eligible cross-border sales from locally-taxed sales when FBA inventory is stored in the destination country (PAN-EU FBA complexity).

## Connected Nodes

### Outgoing
- [[Odoo Node - Inventory|Inventory]] (`delivery order`)
- [[Odoo Node - Accounting|Accounting]] (`invoice`)

### Incoming
- [[Odoo Node - Amazon Connector|Amazon Connector]] (`orders`)

## Source
- `slsk_presentation/deck/public/odoo_diagram.html`
