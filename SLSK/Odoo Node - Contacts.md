---
title: Contacts
node_id: contacts
category: core
tags: [slsk, odoo, node]
---

# Contacts

res.partner master shared by all modules. CUSTOMISATION: Add fields for EU organic cert code per supplier (LU-BIO-04), 3PL SLA parameters, Amazon seller account ID, and country-of-origin per supplier — essential now that seeds come from multiple EU countries.

## Connected Nodes

### Outgoing
- [[Odoo Node - Accounting|Accounting]] (`invoice partner`)

### Incoming
- [[Odoo Node - Amazon Connector|Amazon Connector]] (`customer master`)
- [[Odoo Node - Purchase|Purchase]] (`vendor master`)

## Source
- `slsk_presentation/deck/public/odoo_diagram.html`
