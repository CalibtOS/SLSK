---
title: Quality Control
node_id: quality
category: manufacturing
tags: [slsk, odoo, node]
---

# Quality Control

4 QC checkpoints: seed receipt, packaging receipt, post-assembly, FBA inbound prep. CUSTOMISATION: Numeric fields for germination % and fill weight on QCP (not just pass/fail binary). Auto-escalation email to 3PL supervisor + SLSK management on failure. Defect-rate trend dashboard per EU supplier per species.

## Connected Nodes

### Outgoing
- [[Odoo Node - Manufacturing|Manufacturing]] (`QC checkpoints`)
- [[Odoo Node - Inventory|Inventory]] (`lot / batch track`)
- [[Odoo Node - Scrap - Write-offs|Scrap / Write-offs]] (`rejected goods`)
- [[Odoo Node - Discuss|Discuss]] (`QC alerts`)

### Incoming
- [[Odoo Node - Manufacturing|Manufacturing]] (`trigger QC`)

## Source
- `slsk_presentation/deck/public/odoo_diagram.html`
