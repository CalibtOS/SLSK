---
title: Returns / Credit Notes
node_id: returns
category: sales
tags: [slsk, odoo, node]
---

# Returns / Credit Notes

Amazon FBA customer return flow: credit note + reverse stock move + unfulfillable write-off. GAP: Standard Odoo requires manual creation of return delivery + credit note per event. Custom automation from Amazon return notification (via Connector) to create both records — reducing manual work across 10 marketplaces.

## Connected Nodes

### Outgoing
- [[Odoo Node - Inventory|Inventory]] (`reverse stock`)
- [[Odoo Node - Accounting|Accounting]] (`credit note`)
- [[Odoo Node - Scrap - Write-offs|Scrap / Write-offs]] (`unfulfillable`)

### Incoming
- [[Odoo Node - Amazon Connector|Amazon Connector]] (`return events`)

## Source
- `slsk_presentation/deck/public/odoo_diagram.html`
