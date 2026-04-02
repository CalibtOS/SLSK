---
title: Analytic Accounting
node_id: analytic_acctg
category: accounting
tags: [slsk, odoo, node]
---

# Analytic Accounting

Tags every journal entry for per-marketplace and per-brand P&L — required to deliver the stated ROI promise. REQUIRED SETUP: Two analytic dimensions: Marketplace (DE/FR/UK/IT/ES/NL/BE/SE/IE/PL) and Brand (ZenGreens / VEVOX / SLSK Games). Amazon Connector must auto-tag each settlement entry by source marketplace.

## Connected Nodes

### Outgoing
- [[Odoo Node - Accounting|Accounting]] (`P&L dimensions`)

### Incoming
- [[Odoo Node - Accounting|Accounting]] (`journal tagging`)

## Source
- `slsk_presentation/deck/public/odoo_diagram.html`
