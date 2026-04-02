---
title: Delivery / Carrier
node_id: delivery
category: inventory
tags: [slsk, odoo, node]
---

# Delivery / Carrier

Tracks physical shipments: EU seeds→3PL, Asian packaging→3PL, 3PL→FBA inbound. GAP: Carrier API integration (DHL/DPD for EU parcels; freight forwarder for sea containers) must be configured or entered manually. Custom ETA field on each PO line drives dynamic replenishment lead times.

## Connected Nodes

### Outgoing
- [[Odoo Node - Inventory|Inventory]] (`goods-in confirmed`)
- [[Odoo Node - Purchase|Purchase]] (`ETA update`)

### Incoming
- [[Odoo Node - Suppliers EU Seeds + Packaging|Suppliers EU Seeds + Packaging]] (`carrier booking`)

## Source
- `slsk_presentation/deck/public/odoo_diagram.html`
