---
title: Scrap / Write-offs
node_id: scrap
category: inventory
tags: [slsk, odoo, node]
---

# Scrap / Write-offs

Inventory write-offs for: yield waste, 3PL or FBA damage, expired seed lots. CUSTOMISATION: Custom scrap reason codes mapped to separate GL accounts — yield waste→COGS, FBA damage→Amazon reimbursement receivable, expiry→stock obsolescence expense. §15a UStG VAT reversal trigger on destroyed-goods orders.

## Connected Nodes

### Outgoing
- [[Odoo Node - Accounting|Accounting]] (`write-off entry`)

### Incoming
- [[Odoo Node - Returns - Credit Notes|Returns / Credit Notes]] (`unfulfillable`)
- [[Odoo Node - Manufacturing|Manufacturing]] (`yield waste`)
- [[Odoo Node - Quality Control|Quality Control]] (`rejected goods`)

## Source
- `slsk_presentation/deck/public/odoo_diagram.html`
