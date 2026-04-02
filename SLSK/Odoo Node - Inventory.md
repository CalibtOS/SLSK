---
title: Inventory
node_id: inventory
category: inventory
tags: [slsk, odoo, node]
---

# Inventory

Central stock hub: virtual 3PL location, 10 FBA virtual locations, lot/batch tracking, reorder rules. CUSTOMISATION: Species-specific expiry rules on seed lots. Custom adjustment reason codes (FBA damaged, FBA lost, yield waste). Split 3PL virtual location into: raw seeds / packaging / WIP / finished-not-shipped.

## Connected Nodes

### Outgoing
- [[Odoo Node - Manufacturing|Manufacturing]] (`components`)
- [[Odoo Node - Accounting|Accounting]] (`stock valuation`)
- [[Odoo Node - Discuss|Discuss]] (`reorder alerts`)
- [[Odoo Node - Replenishment|Replenishment]] (`stock levels`)

### Incoming
- [[Odoo Node - Amazon Connector|Amazon Connector]] (`stock sync`)
- [[Odoo Node - FBA Inbound|FBA Inbound]] (`FC receipt`)
- [[Odoo Node - Returns - Credit Notes|Returns / Credit Notes]] (`reverse stock`)
- [[Odoo Node - Sales|Sales]] (`delivery order`)
- [[Odoo Node - Purchase|Purchase]] (`goods receipt`)
- [[Odoo Node - Delivery - Carrier|Delivery / Carrier]] (`goods-in confirmed`)
- [[Odoo Node - Landed Costs|Landed Costs]] (`unit cost adjust`)
- [[Odoo Node - Manufacturing|Manufacturing]] (`finished goods`)
- [[Odoo Node - Quality Control|Quality Control]] (`lot / batch track`)

## Source
- `slsk_presentation/deck/public/odoo_diagram.html`
