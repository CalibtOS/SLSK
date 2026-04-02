---
title: FBA Inbound
node_id: fba_inbound
category: sales
tags: [slsk, odoo, node]
---

# FBA Inbound

Creates and tracks FBA Inbound Shipment Plans for all 10 Amazon FCs. GAP: Standard Connector creates basic plans only. Custom logic needed to auto-detect Amazon FC split assignments, generate PRE labels, and reconcile Amazon-received qty vs. shipped qty to auto-trigger discrepancy claims.

## Connected Nodes

### Outgoing
- [[Odoo Node - Inventory|Inventory]] (`FC receipt`)

### Incoming
- [[Odoo Node - Amazon Connector|Amazon Connector]] (`inbound plans`)

## Source
- `slsk_presentation/deck/public/odoo_diagram.html`
