---
title: Amazon Connector
node_id: amazon_connector
category: sales
tags: [slsk, odoo, node]
---

# Amazon Connector

SP-API bridge: order sync, inventory sync, settlement import, FBA inbound plan creation — all 10 accounts. GAP: Settlement transaction-type→GL mapping required (50+ types: referral fees, FBA storage, A-to-Z claims, promotions). UK Marketplace Facilitator post-Brexit fiscal position also needed.

## Connected Nodes

### Outgoing
- [[Odoo Node - Sales|Sales]] (`orders`)
- [[Odoo Node - Inventory|Inventory]] (`stock sync`)
- [[Odoo Node - Accounting|Accounting]] (`settlements`)
- [[Odoo Node - FBA Inbound|FBA Inbound]] (`inbound plans`)
- [[Odoo Node - Returns - Credit Notes|Returns / Credit Notes]] (`return events`)
- [[Odoo Node - Replenishment|Replenishment]] (`velocity data`)
- [[Odoo Node - Bank Reconciliation|Bank Reconciliation]] (`expected payouts`)
- [[Odoo Node - Contacts|Contacts]] (`customer master`)

### Incoming
- [[Odoo Node - Amazon 10 EU Marketplaces|Amazon 10 EU Marketplaces]] (`SP-API`)

## Source
- `slsk_presentation/deck/public/odoo_diagram.html`
