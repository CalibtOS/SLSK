---
title: Accounting
node_id: accounting
category: accounting
tags: [slsk, odoo, node]
---

# Accounting

Settlement reconciliation; COGS per SKU; EU VAT/OSS; multi-currency EUR/GBP/SEK/PLN. CRITICAL GAPS: (1) SKR03 vs. SKR04 COA must be chosen before go-live. (2) French entity (SIREN 914935374) type — branch vs. subsidiary — must be resolved. (3) §15a UStG VAT reversal on yield waste. (4) FX revaluation at each month-end.

## Connected Nodes

### Outgoing
- [[Odoo Node - Analytic Accounting|Analytic Accounting]] (`journal tagging`)
- [[Odoo Node - Tax Reporting|Tax Reporting]] (`VAT data`)
- [[Odoo Node - Discuss|Discuss]] (`finance alerts`)

### Incoming
- [[Odoo Node - Amazon Connector|Amazon Connector]] (`settlements`)
- [[Odoo Node - Returns - Credit Notes|Returns / Credit Notes]] (`credit note`)
- [[Odoo Node - Sales|Sales]] (`invoice`)
- [[Odoo Node - Purchase|Purchase]] (`vendor bill`)
- [[Odoo Node - Landed Costs|Landed Costs]] (`journal entry`)
- [[Odoo Node - Inventory|Inventory]] (`stock valuation`)
- [[Odoo Node - Manufacturing|Manufacturing]] (`MO cost / WIP`)
- [[Odoo Node - Scrap - Write-offs|Scrap / Write-offs]] (`write-off entry`)
- [[Odoo Node - Contacts|Contacts]] (`invoice partner`)
- [[Odoo Node - Analytic Accounting|Analytic Accounting]] (`P&L dimensions`)
- [[Odoo Node - Bank Reconciliation|Bank Reconciliation]] (`matched entries`)

## Source
- `slsk_presentation/deck/public/odoo_diagram.html`
