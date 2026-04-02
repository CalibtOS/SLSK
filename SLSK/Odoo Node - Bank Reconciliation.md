---
title: Bank Reconciliation
node_id: bank_reconcil
category: accounting
tags: [slsk, odoo, node]
---

# Bank Reconciliation

Matches Amazon bi-weekly settlement payouts to bank credits in 4 currencies. SETUP: One Odoo bank journal per currency (EUR, GBP, SEK, PLN). FX revaluation wizard at month-end for unrealized gains/losses on open positions. Bank feed via Odoo bank sync or CSV import per account.

## Connected Nodes

### Outgoing
- [[Odoo Node - Accounting|Accounting]] (`matched entries`)

### Incoming
- [[Odoo Node - Amazon Connector|Amazon Connector]] (`expected payouts`)
- [[Odoo Node - Bank Accounts EUR · GBP · SEK · PLN|Bank Accounts EUR · GBP · SEK · PLN]] (`bank feed`)

## Source
- `slsk_presentation/deck/public/odoo_diagram.html`
