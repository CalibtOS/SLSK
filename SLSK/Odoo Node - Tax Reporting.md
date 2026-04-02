---
title: Tax Reporting
node_id: tax_reporting
category: accounting
tags: [slsk, odoo, node]
---

# Tax Reporting

OSS quarterly return, German VAT Voranmeldung, EC Sales List. GAPS: (1) PAN-EU FBA: fiscal position must use fulfillment-origin location (which FC shipped), not just customer country — standard Odoo does not do this automatically. (2) UK: Amazon remits VAT on orders <£135 (Marketplace Facilitator) — Odoo must mark these as zero-rated export.

## Connected Nodes

### Outgoing
- None

### Incoming
- [[Odoo Node - Accounting|Accounting]] (`VAT data`)

## Source
- `slsk_presentation/deck/public/odoo_diagram.html`
