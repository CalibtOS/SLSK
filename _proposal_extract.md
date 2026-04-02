**BUSINESS ANALYSIS & ODOO ERP**

**IMPLEMENTATION PROPOSAL**

**SLSK Ventures GmbH**

Leverkusen, Germany

*Operations Review · Bottleneck Assessment · Odoo ERP Transition
Roadmap*

+-----------------------------------+-----------------------------------+
| **Prepared for:**                 | **Scope:**                        |
|                                   |                                   |
| SLSK Ventures GmbH                | Full Business & Operations        |
|                                   | Analysis                          |
| **Prepared by:**                  |                                   |
|                                   | **Focus:**                        |
| **CalibtOS GmbH**                 |                                   |
|                                   | Odoo ERP Implementation Strategy  |
| Köln, Germany                     |                                   |
|                                   | **Reference:**                    |
| **Date:**                         |                                   |
|                                   | CalibtOS-SLSK-2026-001            |
| March 2026                        |                                   |
+-----------------------------------+-----------------------------------+

# **Table of Contents**

1\. Executive Summary

2\. Company Profile & Verified Data

3\. Amazon Marketplace Footprint

4\. Operations & Supply Chain Analysis

5\. Critical Bottleneck Assessment

6\. SWOT Analysis

7\. Odoo ERP --- Fit Assessment & Module Plan

8\. Implementation Roadmap

9\. Investment & ROI Framework

10\. Risk Register

11\. Strategic Recommendations

12\. Conclusion & Next Steps

13\. Data Sources & Verification Notes

# **1. Executive Summary**

SLSK Ventures GmbH is a multi-brand Amazon FBA operator headquartered in
Leverkusen, Germany. Active on Amazon since August 2018 and incorporated
as a GmbH in November 2020, the company sells across **ten confirmed
Amazon marketplace storefronts** --- Amazon.de, Amazon.fr, Amazon.co.uk,
Amazon.it, Amazon.es, Amazon.nl, Amazon.com.be, Amazon.se, Amazon.ie,
and Amazon.pl --- operating through distinct or shared registered seller
entities per marketplace.

The company\'s brand portfolio spans three product verticals: organic
health foods and gardening (ZenGreens), respiratory safety equipment
(VEVOX), and party entertainment (Wer Lacht Muss Trinken / SLSK Games).
All three brands carry registered German trademarks filed with the DPMA.

Market traction is demonstrably strong. As of March 2026, SLSK holds
**Top 1,000 status on Amazon.de (#516)** with a 4.7-star seller rating
and 1,883 verified reviews. The ZenGreens brand holds the **#1 ranking
in the Garden / Vegetable Seeds category on Amazon.nl** and carries
confirmed EU organic certification (inspection body code LU-BIO-04)
sourcing seeds from Italy.

Despite this commercial success, the business currently operates without
a central ERP system. Inventory, procurement, quality assurance, 3PL
coordination, and financial reconciliation are managed manually across
ten marketplaces and multiple currencies (EUR, GBP, SEK, PLN). This is a
structural ceiling on further growth.

This proposal from CalibtOS GmbH presents our findings following a full
operational analysis of SLSK Ventures GmbH, identifies five critical
bottlenecks, and sets out a phased Odoo Enterprise ERP implementation
plan to address each one systematically across six overlapping
workstreams over approximately four and a half to six months (18--24
weeks), allowing for client validation cycles, formal sign-offs, and
Odoo configuration tailored to SLSK's processes --- subject to data
readiness and workshop availability.

+:---------------:+:---------------:+:--------------:+:--------------:+
| **Est. on       | **DE Seller     | **EU           | **Customer     |
| Amazon**        | Rank**          | Marketplaces** | Reviews**      |
|                 |                 |                |                |
| **2018**        | **Top 1,000     | **10 Active**  | **1,883+**     |
|                 | (#516)**        |                |                |
+-----------------+-----------------+----------------+----------------+

### **Key Metrics at a Glance**

  --------------------- -------------------------------------------------
  **Amazon active       August 2018
  since**               

  **Amazon.de seller    #516 --- Top 1,000 (March 2026)
  rank**                

  **Confirmed EU        10 storefronts
  marketplaces**        

  **Seller rating       4.7 / 5.0
  (DE)**                

  **Review count (DE)** 1,883 verified reviews

  **Registered share    €26,000
  capital**             

  **Balance sheet total \~€600,000 (+30.2% YoY)
  (2023)**              

  **Registered          3 (ZenGreens, VEVOX, SLSK Games)
  trademarks**          
  --------------------- -------------------------------------------------

# **2. Company Profile & Verified Data**

## **2.1 Legal & Corporate Identity**

  --------------------- -------------------------------------------------
  **Legal name**        SLSK Ventures GmbH

  **Legal form**        GmbH (Gesellschaft mit beschränkter Haftung)

  **Registered          Kieselstraße 6, 51371 Leverkusen,
  address**             Nordrhein-Westfalen, Germany

  **Commercial          Amtsgericht Köln, HRB 103562
  register**            

  **EUID**              DER3306.HRB103562

  **French register**   SIREN 914935374 / SIRET 91493537400019
                        (registered France, April 2022)

  **Incorporated**      4 November 2020

  **Amazon Seller ID**  A2ZW5FKPIS8G6R

  **Amazon active       August 2018 (pre-dates GmbH incorporation)
  since**               

  **Share capital**     €26,000 (December 2020)

  **Corporate purpose** E-commerce and wholesale via trading platforms;
                        protective masks, textiles, health/beauty
                        articles

  **Former seller       VEVOX Store
  name**                

  **Managing director** Anno C. B. Skriver (Founder & CEO)

  **Balance sheet       \~€600,000 (+30.2% year-on-year)
  (2023)**              
  --------------------- -------------------------------------------------

## **2.2 Brand Portfolio**

All three brands carry registered German trademarks filed with the DPMA
(Deutsches Patent- und Markenamt) and are commercially active across
multiple Amazon marketplaces.

  --------------- --------------- ------------- -------------------------------
     **Brand**     **Category**    **Trademark  **Key Products (Confirmed Live
                                     Filed**             on Amazon)**

   **ZenGreens**  Organic Health    July 2021   Organic sprout seeds (broccoli,
                    / Gardening                   alfalfa, radish, flax, mung
                                                bean, cress, beetroot), growing
                                                kits, 10/20/25-piece seed sets,
                                                microgreens cultivation towers

     **VEVOX**     Safety & PPE   February 2022  FFP2/FFP3 respiratory masks,
                                                A1/P2 gas filters, P2 particle
                                                  filters, half-masks, safety
                                                  goggles, protective gloves

    **Wer Lacht     Party Games     September     Drinking games, quiz cards,
  Muss Trinken /                      2021        \"Wahrheit oder Trinken,\"
   SLSK Games**                                  \"Fortune\" party game, \"Wer
                                                     von Euch\" card game
  --------------- --------------- ------------- -------------------------------

**Supply chain confirmation:** Amazon product listings for ZenGreens
explicitly state Italy as country of origin across multiple SKUs. The EU
organic inspection body code LU-BIO-04 is confirmed on certified product
listings. This is verified data, not an inference --- directly material
to the supply chain analysis in Section 4.

# **3. Amazon Marketplace Footprint**

Prior analyses cited \"4+ EU marketplaces.\" Independent verification of
live Amazon product pages as of March 2026 confirms **ten active
European marketplace storefronts**. Amazon.ie was launched by Amazon in
2025 and SLSK products are confirmed present, sold via the DE seller
entity. SLSK products are also confirmed on Amazon.pl (Poland) via live
product pages. Amazon.com.tr (Turkey) is the remaining Amazon-operated
storefront in the broader European seller programme; ZenGreens-branded
products sometimes appear there, but this proposal does not list Turkey
until the registered seller entity is confirmed in Seller Central.

  ------------------- ----------- ----------- --------------- ---------------------
    **Marketplace**    **Seller    **Active      **Rank /       **Verification**
                       Entity**     Since**      Status**     

     **Amazon.de**       SLSK     August 2018  #516 --- Top   *✓ SellerRatings.com
                       Ventures                    1,000           (Mar 2026)*
                       GmbH (DE)                              

     **Amazon.fr**       SLSK        2022         #7,219      *✓ SellerRatings.com
                       Ventures                                    (Mar 2026)*
                       GmbH (FR)                              

   **Amazon.co.uk**      SLSK      Confirmed   FBA-fulfilled  *✓ Live product page*
                       Ventures     active         (GBP)      
                       GmbH (UK)                              

     **Amazon.it**       SLSK      Confirmed   FBA-fulfilled  *✓ Live product page*
                       Ventures     active                    
                       GmbH (IT)                              

     **Amazon.es**       SLSK      Confirmed   FBA-fulfilled  *✓ Live product page*
                       Ventures     active                    
                       GmbH (ES)                              

     **Amazon.nl**       SLSK      Confirmed  #1 in Garden /  *✓ Live product page*
                       Ventures     active       Veg Seeds    
                       GmbH (NL)                              

   **Amazon.com.be**     SLSK      Confirmed   FBA-fulfilled  *✓ Live product page*
                       Ventures     active                    
                       GmbH (BE)                              

     **Amazon.se**       SLSK      Confirmed   FBA-fulfilled  *✓ Live product page*
                       Ventures     active         (SEK)      
                       GmbH (SE)                              

     **Amazon.ie**      Via DE      Active     FBA-fulfilled  *✓ Live product page*
                        seller       (2025                    
                        entity      launch)                   

     **Amazon.pl**       SLSK      Confirmed   FBA-fulfilled  *✓ Live product page*
                       Ventures     active         (PLN)      
                       GmbH (PL)                              

   **Amazon.com.tr**      ---         ---     No SLSK entity     ✗ Not confirmed
                                                   found      
  ------------------- ----------- ----------- --------------- ---------------------

**This ten-marketplace footprint** --- with multiple currencies (EUR,
GBP, SEK, PLN), separate VAT registrations per country, and distributed
FBA fulfilment centres --- significantly expands operational complexity
beyond what was previously documented and directly defines the scope of
the Odoo implementation required.

# **4. Operations & Supply Chain Analysis**

## **4.1 Business Model Overview**

SLSK operates a classic Amazon FBA private-label model. Products are
sourced or assembled through third parties, shipped into Amazon\'s EU
fulfilment centres, and distributed via Amazon\'s PAN-EU or EFN
programmes. The company maintains separate seller registrations per
marketplace, consistent with full PAN-EU FBA participation (which
requires VAT registration in each selling country). Amazon handles
storage, picking, packing, last-mile delivery, and customer service.
SLSK\'s internal operations focus on brand development, procurement, and
supply chain management.

## **4.2 ZenGreens Seed Supply Chain**

The seed product line carries the most complex supply chain across all
three brands and warrants detailed analysis.

  --------------- ------------- --------------- ----------------------------------
     **Stage**      **Party**    **Location**        **Current Pain Points**

  **1. Raw seeds  Organic seed       Italy         No procurement tracking; no
   procurement**   supplier(s)    (confirmed)   demand-driven reorder points; lead
                                                times not formally recorded. Seeds
                                                are purchased both by weight (kg)
                                                   AND by individual seed count
                                                 (e.g., 1,000 seeds per variety)
                                                 --- two incompatible procurement
                                                    units exist simultaneously

  **2. Packaging    Packaging    Imported ---       Unpredictable lead times;
   procurement**    supplier    Asia (inferred)   packaging and seeds arrive on
                                                  different schedules, creating
                                                       assembly bottlenecks

  **3. Assembly / 3PL assembler     Germany     No SLA; no fill-weight standards;
     packing**                   (undisclosed)   quality by sense-check only; no
                                                   batch records; no throughput
                                                             metrics

   **4. Pre-FBA   3PL warehouse  Germany / EU   No real-time inventory visibility;
   warehousing**                                no digital integration with sales
                                                             systems

     **5. FBA      Amazon FBA        10 EU         Manual shipment creation; no
      inbound                     fulfilment     automated replenishment triggers
    shipments**                    networks     

   **6. Customer   Amazon FBA    Pan-EU across       VAT compliance across 10
   fulfilment**                 10 marketplaces jurisdictions including GBP (UK),
                                                  SEK (Sweden), and PLN (Poland)
  --------------- ------------- --------------- ----------------------------------

## **4.3 The Seeds Unit-of-Measure Problem**

Seeds introduce a structurally complex inventory challenge not found in
SLSK\'s VEVOX or SLSK Games product lines:

- Level 1 --- Procurement vs. sales unit mismatch: Seeds are purchased
  by weight (kg) from Italian suppliers but sold as discrete consumer
  units. A 200g packet is one sellable unit, but purchasing records are
  in kg. Without a formal conversion mechanism, stock-on-hand figures
  are permanently expressed in the wrong unit of measure.

- Level 2 --- Multi-variant SKU complexity: ZenGreens seeds are sold in
  at least three size variants per species (10g, 200g, 500g --- all
  confirmed live on Amazon). Each variant has a different kg-to-unit
  conversion ratio and each ratio must account for packing loss.

The downstream consequences are significant: overfill and underfill at
the 3PL are undetected; true COGS per unit is unknown; losses are
absorbed invisibly into margins; and EU organic traceability
requirements under Regulation 2018/848 cannot be met without lot/batch
records linked from Italian supplier delivery through to Amazon inbound.

## **4.4 Per-Seed Count Procurement --- The Multi-Dimensional UoM Problem**

Beyond weight-based procurement, ZenGreens seeds are also sourced by
individual seed count --- for example, **1,000 seeds of a given
variety**. This introduces a third unit of measure into an already
complex inventory system, and creates a cascading problem: individual
seed weight varies significantly between species.

  ------------------- ------------------ --------------- -------------------------
   **Seed Species**    **Approx. Weight   **Procurement      **Implication for
                      per 1,000 Seeds**      Unit**             Packaging**

      ***Broccoli     \~3--4 g per 1,000   kg or count   1,000 seeds fills \~3--4g
       (Brassica            seeds                        --- very high seed count
     oleracea)***                                        per gram; tiny packaging
                                                                for 10g SKU

  ***Cress (Lepidium  \~2--3 g per 1,000   kg or count       Even lighter than
      sativum)***           seeds                          broccoli; count-based
                                                             purchasing gives
                                                           different weight each
                                                                   time

      ***Alfalfa       \~2 g per 1,000     kg or count    Very fine seeds; weight
       (Medicago            seeds                          measurement alone is
      sativa)***                                           unreliable for count
                                                                 accuracy

  ***Radish (Raphanus   \~10--12 g per     kg or count     Heavier seeds; a 200g
      sativus)***        1,000 seeds                     packet contains far fewer
                                                          seeds than broccoli by
                                                                   count

  ***Mung Bean (Vigna   \~50--60 g per     kg or count   Much heavier seed; 1,000
      radiata)***        1,000 seeds                      mung beans ≈ entire 50g
                                                               retail packet

    ***Flax (Linum    \~4--5 g per 1,000   kg or count    Medium weight; 200g SKU
   usitatissimum)***        seeds                         contains \~40,000 seeds
                                                               --- count is
                                                         operationally meaningless
                                                                 at scale
  ------------------- ------------------ --------------- -------------------------

**The critical implication:** there is no stable conversion factor
between \"seeds purchased\" and \"grams packed\" that applies across
species. Each species requires its own Bills of Materials with
species-specific weight-per-seed constants, validated by actual weighing
--- not estimated from generic tables. When purchasing invoices arrive
in mixed units (some in kg, some in counts of 1,000), reconciling
purchase cost to COGS per sellable unit currently requires manual
calculation that is neither documented nor verified.

## **4.5 SKU Architecture Disorder**

SLSK currently operates with a fragmented, multi-prefix SKU schema that
has evolved organically across different operational stages. Four
distinct SKU series are in use simultaneously, with no formal master
data architecture governing relationships between them:

  ------------------- -------------------- ---------------- ----------------------
    **SKU Prefix**       **Applies To**      **Example**     **Current Problem**

      **RM00001**     Raw Materials (bulk      *RM00047      Exists in purchasing
                       seeds by species)   (Broccoli seeds,   records only; not
                                              bulk kg)*     linked to any finished
                                                                product BOM or
                                                             production order. No
                                                             UoM standardisation
                                                               across species.

      **PM00001**     Packaging Materials   *PM00012 (200g  Packaging SKUs are not
                                                pouch,      formally linked to the
                                             ZenGreens)*         RM SKUs they
                                                             accompany. Assembly
                                                            coordination relies on
                                                                 memory, not
                                                                system-driven
                                                                  matching.

      **M00001**        Manufacturing /        *M00089       Used ad hoc to track
                       Packing Runs (Work     (ZenGreens    assembly batches. Not
                            Orders)         Broccoli 200g     connected to BOMs,
                                                run)*         yield targets, or
                                                            quality records. Batch
                                                            records exist only if
                                                              manually created.

      **00001 (no     Finished / Sellable       *00234         No prefix makes
       prefix)**            Products          (ZenGreens    automated distinction
                                           Broccoli 200g)*   from other SKU types
                                                               impossible. Same
                                                              number space risks
                                                            collision as catalogue
                                                                    grows.

   **PP123123_SLSK**    Parent Products     *PP000045_SLSK  Parent-child groupings
                        (grouping child       (ZenGreens        are maintained
                           variants)           Broccoli      manually. No system
                                               family)*        enforces variant
                                                            completeness. Adding a
                                                               new size variant
                                                            requires manual update
                                                                  across all
                                                             marketplaces with no
                                                               ERP validation.
  ------------------- -------------------- ---------------- ----------------------

**Compounding effect:** The five-prefix SKU schema means that a single
sellable product (e.g., ZenGreens Broccoli 200g) has up to five separate
identifiers across the operational lifecycle --- RM, PM, M, finished
product, and parent group --- with no system enforcing the links between
them. Reconciling purchase costs to production runs to finished
inventory to Amazon sales requires manual cross-referencing of five
disconnected reference systems. This is the primary reason true COGS per
SKU cannot currently be calculated.

## **4.6 Bill of Materials (RM / PM / M) --- worked example (ZenGreens bio broccoli 200g)**

For master data and manufacturing setup, CalibtOS structures each
product Bill of Materials using three component classes agreed with
SLSK: **RM** (raw material), **PM** (packaging material), and **M**
(manufacturing / operations such as packing). The following example
applies to the ZenGreens organic broccoli sprouting seeds offer listed
on Amazon.de (ASIN B0BNQWZFM2).

  ----------- ------------------------- ---------------------------------
   **Class**      **Component (this                 **Notes**
                     product)**         

    **RM**      200 g broccoli seeds       Bulk organic sprouting seed
                                        content for the finished consumer
                                                      unit

    **PM**             Sachet            Primary consumer packaging for
                                                 the 200 g unit

     **M**             Packing          Assembly / fill / seal operation
                                         at the 3PL (manufacturing step)
  ----------- ------------------------- ---------------------------------

**Composite and bundle products:** any finished good that **contains**
this 200 g broccoli sachet (or an equivalent sellable unit) as a
sub-component --- for example multi-packs, gift sets, or variety kits
--- will list that **entire sub-product as a single BOM line** (one
component referencing the completed sachet SKU), rather than
re-exploding its internal RM/PM/M lines on the parent BOM. Only the base
SKU carries the detailed RM / PM / M breakdown above.

# **5. Critical Bottleneck Assessment**

The following seven bottlenecks were identified through operational
analysis, listed in order of business impact. Bottlenecks 6 and 7 are
newly identified in this updated analysis and reflect the additional
complexity of per-seed count procurement and the fragmented SKU
architecture.

+--------------------+---------------------+--------------------+--------------------+
| **BOTTLENECK 1 --- No ERP: Fully Manual Operations**                               |
+--------------------+---------------------+--------------------+--------------------+
| **Impact:**        | **Critical**        | **Urgency:**       | **Immediate**      |
+--------------------+---------------------+--------------------+--------------------+
| Every operational process --- purchasing, inventory tracking, 3PL coordination,    |
| FBA replenishment, and accounting --- is managed manually or through disconnected  |
| spreadsheets across ten Amazon marketplaces. There is no single source of truth    |
| for inventory levels, outstanding orders, or financial position. Each additional   |
| SKU or market added without ERP support compounds risk exponentially.              |
+------------------------------------------------------------------------------------+

+--------------------+---------------------+--------------------+--------------------+
| **BOTTLENECK 2 --- Quality Control by Intuition, Not Metrics**                     |
+--------------------+---------------------+--------------------+--------------------+
| **Impact:**        | **High**            | **Urgency:**       | **High**           |
+--------------------+---------------------+--------------------+--------------------+
| ZenGreens seed products carry EU organic certification (LU-BIO-04 confirmed on     |
| packaging). EU Regulation 2018/848 requires documented lot/batch traceability      |
| throughout the supply chain. There are no inspection checklists, sampling          |
| protocols, defect rate thresholds, or production batch records currently in place. |
| This creates regulatory and reputational risk across all ten markets.              |
+------------------------------------------------------------------------------------+

+--------------------+---------------------+--------------------+--------------------+
| **BOTTLENECK 3 --- Fragmented Seed Supply Chain (Dual-Source)**                    |
+--------------------+---------------------+--------------------+--------------------+
| **Impact:**        | **High**            | **Urgency:**       | **High**           |
+--------------------+---------------------+--------------------+--------------------+
| Italian organic seeds and imported packaging must converge at the German 3PL       |
| assembler before any sellable unit exists. These two streams have entirely         |
| different lead times, suppliers, logistics routes, and no digital coordination     |
| mechanism. A delay in either stream halts production entirely. Currently,          |
| alignment is managed ad hoc with no safety stock policy or formal lead time buffer |
| strategy.                                                                          |
+------------------------------------------------------------------------------------+

+--------------------+---------------------+--------------------+--------------------+
| **BOTTLENECK 4 --- No 3PL Integration or SLA Framework**                           |
+--------------------+---------------------+--------------------+--------------------+
| **Impact:**        | **Medium-High**     | **Urgency:**       | **High**           |
+--------------------+---------------------+--------------------+--------------------+
| 3PL partners operate without formal SLAs, digital integration, or accountability   |
| metrics. Stock held at 3PL warehouses is not visible in real time. Throughput      |
| rates, error rates, and turnaround times can only be established by manually       |
| contacting the 3PL. As volume scales across ten marketplaces, this dependency is   |
| untenable.                                                                         |
+------------------------------------------------------------------------------------+

+--------------------+---------------------+--------------------+--------------------+
| **BOTTLENECK 5 --- Loss Calculation Is Impossible**                                |
+--------------------+---------------------+--------------------+--------------------+
| **Impact:**        | **Medium-High**     | **Urgency:**       | **Medium**         |
+--------------------+---------------------+--------------------+--------------------+
| Without weight-to-unit conversion tracking, 3PL receiving records, or production   |
| batch data, losses at any stage of the supply chain cannot be quantified. True     |
| gross margin on seed products is unknown. Losses are silently absorbed and margin  |
| improvement cannot be targeted or tracked without this baseline.                   |
+------------------------------------------------------------------------------------+

+--------------------+---------------------+--------------------+--------------------+
| **BOTTLENECK 6 --- Per-Seed Count Procurement Creates an Unresolvable Third UoM**  |
+--------------------+---------------------+--------------------+--------------------+
| **Impact:**        | **High**            | **Urgency:**       | **High**           |
+--------------------+---------------------+--------------------+--------------------+
| Seeds are procured in two fundamentally different units --- weight (kg) and        |
| individual seed count (e.g., 1,000 seeds). Individual seed weight varies by an     |
| order of magnitude between species (broccoli \~3--4g/1,000 seeds vs. mung bean     |
| \~50--60g/1,000 seeds). This means no universal conversion factor exists. Each     |
| species requires a species-specific weight-per-seed constant in its Bill of        |
| Materials. Without this in Odoo, purchasing invoices, warehouse receipts,          |
| production orders, and retail units cannot be reconciled to a common measure ---   |
| making accurate COGS calculation for any count-procured species structurally       |
| impossible under the current manual system.                                        |
+------------------------------------------------------------------------------------+

+--------------------+---------------------+--------------------+--------------------+
| **BOTTLENECK 7 --- Fragmented SKU Architecture --- Five Disconnected Identifier    |
| Systems**                                                                          |
+--------------------+---------------------+--------------------+--------------------+
| **Impact:**        | **High**            | **Urgency:**       | **High**           |
+--------------------+---------------------+--------------------+--------------------+
| Five distinct SKU series (RM00001 for raw materials, PM00001 for packaging, M00001 |
| for manufacturing runs, bare numeric codes for finished products, and              |
| PP123123_SLSK for parent-child groupings) coexist with no ERP system enforcing the |
| links between them. A single sellable product can have up to five separate         |
| identifiers across its lifecycle. Parent-child variant relationships are           |
| maintained manually with no system validation. This makes automated COGS roll-up,  |
| BOM assignment, replenishment triggering, and marketplace variant management       |
| impossible without manual cross-referencing --- and creates a growing data debt    |
| that becomes harder to untangle with every new SKU added.                          |
+------------------------------------------------------------------------------------+

# **6. SWOT Analysis**

+:---------------------------------:+:---------------------------------:+
| **STRENGTHS**                     | **WEAKNESSES**                    |
+-----------------------------------+-----------------------------------+
| • Active on Amazon since August   | • No ERP --- fully manual across  |
| 2018 (7.5+ years)                 | 10 marketplaces                   |
|                                   |                                   |
| • Top 1,000 on Amazon.de (#516,   | • Quality control undocumented    |
| March 2026)                       | and subjective                    |
|                                   |                                   |
| • 4.7-star rating, 1,883+         | • Split supply chain: Italian     |
| verified reviews                  | seeds + imported packaging        |
|                                   |                                   |
| • 10 confirmed active EU          | • No 3PL SLA or accountability    |
| marketplace storefronts           | framework                         |
|                                   |                                   |
| • 3 DPMA-registered trademark     | • Loss / yield calculation        |
| brands                            | currently impossible              |
|                                   |                                   |
| • EU organic certification        | • Triple UoM conflict: kg, units, |
| (LU-BIO-04) confirmed             | and per-seed count all coexist    |
|                                   | without conversion                |
| • #1 in Garden / Veg Seeds on     |                                   |
| Amazon.nl                         | • Five-prefix SKU schema          |
|                                   | (RM/PM/M/product/parent) with no  |
| • French legal entity registered  | ERP enforcement                   |
| (SIREN 914935374)                 |                                   |
|                                   | • Parent-child variant groupings  |
| • Balance sheet growing: \~€600K, | maintained manually --- no system |
| +30.2% YoY (2023)                 | validation                        |
|                                   |                                   |
|                                   | • 10-marketplace VAT and OSS      |
|                                   | compliance managed ad hoc         |
|                                   |                                   |
|                                   | • Small team relative to the      |
|                                   | operational scale                 |
|                                   |                                   |
|                                   | • Rank fluctuation risk across    |
|                                   | all 10 accounts simultaneously    |
+-----------------------------------+-----------------------------------+
| **OPPORTUNITIES**                 | **THREATS**                       |
+-----------------------------------+-----------------------------------+
| • Odoo to unify all 10            | • Amazon algorithm dependency:    |
| marketplaces in one system        | rank drop cascades across all 10  |
|                                   | accounts                          |
| • Automated FBA replenishment     |                                   |
| prevents rank drops               | • Packaging import delays can     |
|                                   | halt all production               |
| • Seed yield tracking: 5--15%     |                                   |
| gross margin recovery             | • Rising FBA fulfilment fees      |
|                                   | across EU marketplaces            |
| • Formal QA to protect organic    |                                   |
| certification and ratings         | • Tightening organic regulation   |
|                                   | under EU Regulation 2018/848      |
| • Lot/batch tracking for EU Reg   |                                   |
| 2018/848 compliance               | • 3PL mishandling with no         |
|                                   | contractual accountability        |
| • Accurate COGS enables informed  |                                   |
| pricing strategy                  | • GBP/EUR and SEK/EUR currency    |
|                                   | risk                              |
| • Structural organic food growth  |                                   |
| trend across all EU markets       | • Increasing competition in       |
|                                   | organic microgreens and sprouting |
| • Odoo B2C webshop as DTC hedge   | niche                             |
| against Amazon dependency         |                                   |
|                                   | • Rising competition in           |
|                                   | PPE/respiratory protection        |
|                                   | category                          |
+-----------------------------------+-----------------------------------+

# **7. Odoo ERP --- Fit Assessment & Module Plan**

## **7.1 Why Odoo for SLSK**

Odoo is a modular, open-source ERP suite purpose-built for the
operational complexity SLSK faces. It provides a native Amazon Connector
supporting multiple seller accounts simultaneously, a robust inventory
engine with multi-warehouse and multi-UoM support, Bills of Materials
for seed assembly tracking, a Quality Control module with configurable
inspection points, and a fully connected accounting module with EU VAT
and OSS compliance frameworks.

For a business operating across ten Amazon marketplaces with a complex
assembly-based seed supply chain and no existing ERP baseline, Odoo
provides the most direct, cost-effective path to full operational
integration at a scale appropriate to SLSK\'s current size.

## **7.2 Module-to-Bottleneck Mapping**

  ------------------- ---------------------------------------- ----------------
    **Odoo Module**                **Capability**               **Bottleneck**

       **Amazon        Sync orders, inventory, and settlement    **BN1, BN5**
      Connector**        reports across all 10 marketplace     
                               accounts in real time           

    **Inventory ---   Virtual warehouse per 3PL and per Amazon   **BN1, BN4**
   Multi-location**   FC (DE, FR, UK, IT, ES, NL, BE, SE, IE,  
                                        PL)                    

    **Inventory ---   Three-dimensional UoM configuration: kg    **BN3, BN5,
  Units of Measure**   (bulk purchase), individual seed count       BN6**
                        (count-purchase), and pcs (sellable    
                          unit) --- with species-specific      
                            conversion constants per BOM       

     **Purchase**        POs to Italian seed suppliers and       **BN3, BN6**
                       packaging suppliers; supports both kg   
                      and per-seed-count purchase orders with  
                        UoM auto-conversion at goods receipt   

  **Manufacturing ---      Species-specific BOMs defining        **BN2, BN5,
       Bills of              weight-per-seed constant,              BN6**
      Materials**      kg-per-finished-unit, and loss buffer;  
                         resolves per-seed count ↔ weight ↔    
                         sellable unit across all three UoM    
                                     dimensions                

  **Manufacturing ---   End-to-end traceability for organic        **BN2**
       Lot/Batch          certification (EU Reg 2018/848)      
      Tracking**                                               

   **Quality (QCP)**   Configurable Quality Control Points at      **BN2**
                        seed receipt, post-assembly, and FBA   
                                      inbound                  

   **Replenishment**   Automated reorder points triggered by     **BN1, BN3**
                        FBA stock levels and sales velocity    

  **Product Variants  Single parent product with size variants     **BN7**
   & Nomenclature**   replaces the PP123123_SLSK parent-child  
                       manual schema; RM/PM/M/finished codes   
                       unified under Odoo product categories   
                           with Internal Reference fields      
                              preserving legacy codes          

    **Accounting**     Amazon settlement reconciliation; COGS      **BN1**
                      per SKU; EUR/GBP/SEK multi-currency; EU  
                                      VAT/OSS                  

  **3PL Integration**   API/EDI or manual receipt workflow;        **BN4**
                        virtual 3PL locations for real-time    
                                  stock visibility             
  ------------------- ---------------------------------------- ----------------

## **7.3 Seeds Unit of Measure Architecture in Odoo**

  --------------------------- ----------------- --------------------------
    **Supply Chain Stage**        **Unit of         **Odoo Location**
                                  Measure**     

         Seed purchase         **kg (weight)**   Purchase Order lines ---
        (weight-based)                               weight-based PO

  Seed purchase (count-based)      **Seeds       Purchase Order lines ---
                                 (individual       count-based PO; Odoo
                                  count)**         converts to kg using
                                                     species-specific
                                                 weight-per-seed constant
                                                     at goods receipt

  Bulk seeds received at 3PL   **kg (weight)**    3PL Virtual Warehouse
            Germany                               location --- all stock
                                                 held in kg regardless of
                                                       purchase UoM

    Bill of Materials (per    **kg per finished Manufacturing module / BOM
       species/variant)            unit +        --- one BOM per species
                               weight-per-seed       per size variant
                                 constant**     

  10g packet (1 unit ≈ 0.0105  **Units (pcs)**   Finished Goods location
           kg + 5%)                             

  200g packet (1 unit ≈ 0.210  **Units (pcs)**   Finished Goods location
           kg + 5%)                             

  500g packet (1 unit ≈ 0.525  **Units (pcs)**   Finished Goods location
           kg + 5%)                             

  Amazon FBA inbound (all 10   **Units (pcs)**   Amazon Virtual Location
         marketplaces)                               per marketplace

         Customer sale         **Units (pcs)**       FBA Sales Orders
  --------------------------- ----------------- --------------------------

**Note:** Loss buffer percentages (5%) are illustrative starting points.
Actual BOM values must be validated across a minimum of three pilot
packing runs with manual weight recording before being finalised in
Odoo. This validation is a mandatory gate in the manufacturing
workstream (Phase 3) of the compressed roadmap.

## **7.4 Quality Control Checkpoints for ZenGreens Seeds**

  ----------------- ------------------ ------------------ ------------------
    **Inspection       **Trigger**       **Check Type**       **Required
       Point**                                                Outcome**

   **Seed delivery  3PL receives bulk  Germination sample **Accept / Reject
  receipt at 3PL**  seeds from Italian test; gross weight  / Quarantine ---
                         supplier       verification; EU     batch record
                                            organic       created in Odoo**
                                          certificate     
                                       (LU-BIO-04) check; 
                                           lot number     
                                           recording      

     **Packaging       3PL receives    Dimensions; print      **Accept /
      delivery      imported packaging      quality;           Reject**
      receipt**                          barcode/FNSKU    
                                          scan; label     
                                            accuracy      

   **Post-assembly  After each packing Fill-weight sample **Pass / Fail ---
   QC (per packing      run at 3PL      (min/max); seal    feeds yield loss
       run)**                           integrity; label    calculation**
                                       verification; unit 
                                         count vs. BOM    

    **FBA inbound   Before dispatch to Unit count; FNSKU   **Ship / Hold**
    preparation**     any of the 10       label scan;     
                    Amazon FC networks  condition check   
  ----------------- ------------------ ------------------ ------------------

# **8. Implementation Roadmap**

A phased approach is recommended to minimise operational disruption
while progressively closing each bottleneck. Workstreams overlap, but
SLSK's multi-marketplace Amazon model, seed manufacturing, and organic
traceability require deliberate validation and confirmation cycles
(workshops, UAT, pilot runs, sign-offs) plus iterations on Odoo
configuration to match actual usage --- so the target calendar length is
about four and a half to six months (18--24 weeks), shorter than a
classic sequential nine- to twelve-month roll-out yet realistic for a
correct first-time fit.

## **8.1 CalibtOS--SLSK collaboration cycle**

CalibtOS delivers this programme in a deliberate three-stage cycle with
SLSK, before and alongside the phased Odoo rollout below:

**1. Requirement analysis** --- Joint workshops and document review to
confirm processes, SKU and BOM rules (including RM / PM / M), 3PL
constraints, marketplace scope, and compliance needs. Outputs are a
signed requirements baseline and prioritised backlog. This stage is
budgeted as 20 hours × €100/hour = €2,000 (requirements engineering
package).

**2. Implementation** --- Odoo configuration, integrations (including
Amazon Connector), master data migration, manufacturing and inventory
setup, and rollout per the phase plan --- with change control against
the agreed requirements.

**3. Testing** --- Structured test cycles (unit, integration, UAT) on
sandbox then production, with multiple confirmation cycles agreed with
SLSK stakeholders; parallel operation where needed to protect Amazon
rankings; formal go-live criteria and handover.

The six-phase Odoo timeline below is the technical backbone executed
within the implementation and testing stages of this cycle.

  ----------------- -------------- ------------------ ------------------------------
      **Phase**      **Timeline**      **Scope**           **Key Deliverables**

     **Phase 1:        Wks 1--5     Odoo deployment,   Odoo 18 Enterprise live; all
    Foundation**                      master data,       10 marketplace accounts
                                   Amazon Connector,  connected via SP-API; product
                                   initial tailoring  catalogue imported; FBA stock
                                                        synced; Chart of Accounts
                                                            configured; first
                                                          configuration review &
                                                             adjustment cycle

     **Phase 2:       Wks 4--11        Warehouse      3PL warehouses as Odoo virtual
  Inventory & 3PL**                 management, 3PL   locations; POs issued through
                                       locations,      Odoo; goods receipt workflow
                                     purchase flows     live; 3PL SLA formalised;
                                                         client validation round

  **Phase 3: Seeds    Wks 9--15    BOM creation, UoM      BOMs for all seed SKUs
   Manufacturing**                 config, production   validated by pilot packing
                                         orders         runs; Manufacturing Orders
                                                      track each 3PL run; loss/yield
                                                      reports operational; sign-off
                                                             after pilot data

     **Phase 4:       Wks 13--18       QCP setup,      All 4 QCPs live; inspection
  Quality Control**                    inspection        checklists digitalised;
                                    workflows, batch    lot/batch tracking active;
                                        tracking      organic certificates stored on
                                                           supplier records; QA
                                                           walkthrough sign-off

     **Phase 5:       Wks 16--21       Settlement       Amazon settlement reports
    Accounting &                    reconciliation,      auto-imported for all 10
    Compliance**                     COGS, VAT/OSS      accounts; COGS per SKU; EU
                                                           VAT/OSS configured;
                                                        GBP/SEK/PLN multi-currency
                                                      live; reconciliation dry-runs

     **Phase 6:       Wks 19--24     Replenishment,     Automated reorder points;
   Optimisation**                     forecasting,       demand forecasting; FBA
                                       automation       low-stock alerts; EDI 3PL
                                                         integration assessment;
                                                           post-go-live tuning
  ----------------- -------------- ------------------ ------------------------------

## **8.2 Phase 1 --- Key Technical Steps**

- Deploy Odoo 18 Enterprise (Online recommended; Odoo.sh if custom
  module development is planned)

- Install modules: Inventory, Purchase, Sales, Accounting, Amazon
  Connector, Quality, Manufacturing, Units of Measure

- Configure multi-currency (EUR, GBP, SEK, PLN), EU VAT, and OSS
  compliance framework from Day 1

- Connect Amazon SP-API credentials for all ten seller accounts (DE, FR,
  UK, IT, ES, NL, BE, SE, IE, PL)

- Import full product catalogue (ASINs and SKUs) from Seller Central
  into Odoo product records

- Set up virtual warehouse locations: 3PL Germany and Amazon FCs for all
  10 marketplaces

- Run a three- to four-week parallel operation before any live cutover
  where complexity warrants it --- Amazon ranking protection is the
  absolute priority; extra week(s) allow for re-validation after
  configuration changes

- Conduct full physical stock count across all 3PL and FBA locations to
  establish master data baseline

## **8.3 Priority Quick Wins (Weeks 1--4, Before Full Go-Live)**

Even before a full Odoo implementation, the following actions reduce
risk immediately:

- Formalise a written 3PL SLA covering inventory reporting frequency,
  packing error rate thresholds, turnaround time from goods-in to
  dispatch, and escalation procedures

- Introduce a structured batch record sheet at the 3PL for each packing
  run: quantity in, quantity out, waste recorded. A simple spreadsheet
  is a material improvement over no records

- Define target fill weights and acceptable weight variances for every
  seed SKU variant (10g, 200g, 500g per species)

- Conduct a full physical stock count across all locations to establish
  the Odoo migration baseline

# **9. Investment & ROI Framework**

## **9.1 Odoo Licensing --- 2025/2026 Pricing**

Odoo Enterprise uses a flat per-user model from version 17/18 onwards.
All applications are included under a single user licence --- there are
no per-module fees.

  ----------------- ------------------- ---------------------------------
     **Edition**      **Cost (EUR)**       **Recommendation for SLSK**

  **Odoo Enterprise   €19.90 / user /         Recommended baseline
   --- Standard**      month (billed    
                     annually) --- all  
                       apps included    

  **Odoo Enterprise   €29.90 / user /        Recommended if 3PL API
    --- Custom**    month --- adds Odoo      integration is planned
                     Studio, External   
                      API, on-premise   
                          option        

       **Odoo       Free (self-hosted)  Not recommended --- lacks Amazon
     Community**                        Connector and advanced accounting
  ----------------- ------------------- ---------------------------------

For a team of 5 users on the Standard plan, annual licensing is
approximately €1,194/year --- significantly lower than SAP, NetSuite, or
Microsoft Dynamics 365 at equivalent operational scope.

## **9.2 CalibtOS Professional Services --- Rate Card**

CalibtOS invoices professional services separately from Odoo licence
fees. Requirements work uses a premium engineering rate; delivery after
sign-off uses the ERP specialist rate, with additional team members at a
lower parallel-delivery rate when the full team is mobilised.

  -------------------- ---------------- ---------------------------------
  **CalibtOS service**     **Rate /                 **Notes**
                          package**     

      Requirements       €100 / hour       *Billed for the structured
      engineering                          requirements package below*
  (discovery, process                   
       & backlog)                       

      Requirements          €2,000       *20 hours × €100/h --- precedes
  engineering package                    build; signed baseline output*
     (fixed scope)                      

   ERP specialist ---     €30 / hour         *Time & materials after
    implementation,                          requirements sign-off*
    config, testing                     

    Each additional       €15 / hour    *Per person-hour when a full team
  CalibtOS team member                    is engaged alongside the ERP
  (parallel delivery)                              specialist*

      **Full team       **€30 + €15 ×     *ERP specialist at €30/h plus
  engagement (typical        n**           €15/h for each other booked
    billing model)**                        member, per actual hours*
  -------------------- ---------------- ---------------------------------

Example: if one ERP specialist delivers 120 hours after requirements,
implementation is 120 × €30 = €3,600 before training. If the ERP
specialist and two other consultants each book the same elapsed week,
that week bills as (ERP hours × €30) + (other hours × €15 each) on
actual timesheets.

## **9.3 Total Cost of Ownership Estimate --- Year 1**

  ---------------------- ----------------- -----------------------------------
     **Cost Element**       **Estimated                 **Notes**
                              Range**      

     Odoo Enterprise          €1,194                *€19.90 × 5 × 12*
    licence (5 users,                      
   Standard, 12 months)                    

       Requirements           €2,000        *20 h × €100/h --- fixed, before
   engineering package                               implementation*

     Implementation &    €6,000 -- €16,000 *Hours × rate card (€30 ERP; +€15/h
         testing                             per additional team member when
   (post--requirements,                      engaged); range reflects 18--24
           T&M)                             week plan with validation cycles,
                                              sign-offs, and customization
                                                       iterations*

   Staff training (2--3  €1,500 -- €3,000    *Structured CalibtOS onboarding
   days per core user)                                 programme*

  **Estimated Total ---    **€10,700 --      *Licence + €2k RE + T&M band +
         Year 1**            €22,200**           training (indicative)*

    Ongoing (Year 2+):   €2,500 -- €5,000  
    Licence + support         / year       
         retainer                          
  ---------------------- ----------------- -----------------------------------

The €2,000 requirements package is mandatory and explicit; it is not
embedded in an undifferentiated day rate. The implementation band is
indicative --- the 18--24 week calendar allows validation gates and Odoo
tailoring without stretching to a multi-quarter programme, while the
higher entry rate for requirements engineering reflects the commercial
value of a signed baseline before build.

## **9.4 Expected ROI Drivers**

  --------------------- ---------------- --------------------------------
     **ROI Driver**       **Estimated             **Mechanism**
                            Impact**     

   **Manual processing   **3--5 hrs/day  Amazon Connector auto-syncs all
  eliminated across 10    recovered**        orders, stock moves, and
     marketplaces**                              settlement data

    **Seed yield loss    **5--15% gross      BOM-based tracking makes
       recovery**            margin        invisible losses visible and
                         improvement**             controllable

  **Stockout prevention  **Ranking and      Automated reorder triggers
   across 10 markets**      revenue      prevent stock events that damage
                          protection**    all 10 rankings simultaneously

     **Quality cost     **Reduced return  Formal QA checkpoints protect
       avoidance**       rate; improved  ratings and review scores across
                           metrics**             all marketplaces

        **Organic         **Regulatory   Lot/batch tracking satisfies EU
      certification           risk       Regulation 2018/848 traceability
      compliance**       elimination**             requirements

     **True COGS and       **Pricing     First-ever per-SKU profitability
      profitability         strategy         reporting across all 10
      visibility**         unlocked**      marketplaces simultaneously
  --------------------- ---------------- --------------------------------

## **9.5 Loss Calculation Framework (Post-Odoo)**

Once Odoo is implemented, the following loss calculation is automated:

  ------------------------------- ---------------------------------------
       **Formula Component**               **Odoo Data Source**

   **Raw seeds purchased (kg)**    Purchase Order receipts → Goods In at
                                               3PL location

     **Expected finished units    BOM definition: kg per unit × expected
          (theoretical)**                          units

      **Actual finished units      Manufacturing Order: confirmed output
            produced**                           quantity

  **Actual seed weight consumed**     Manufacturing Order: components
                                               consumed (kg)

        **Yield loss (kg)**          BOM expected consumption − Actual
                                            consumption = waste

        **Yield loss (%)**           (Waste kg ÷ Total input kg) × 100

   **FBA received vs. shipped**   Amazon Inventory Adjustment Report vs.
                                           Odoo inbound shipment

    **COGS per unit (actual)**    Accounting: seed cost + packaging + 3PL
                                            assembly + FBA fee
  ------------------------------- ---------------------------------------

# **10. Risk Register**

  ---------------------- ----------------- ------------ ----------------------------------
         **Risk**         **Likelihood**    **Impact**            **Mitigation**

   Amazon ranking drop      **Medium**       **High**   Maintain manual FBA restocking in
  during ERP transition                                 parallel during Phase 1--2; do not
                                                        cut over any account until sync is
                                                          fully validated across all 10
                                                                   marketplaces

  Packaging import delay     **High**        **High**    Establish 3--4 week safety stock
      blocking seed                                        of packaging; configure Odoo
        production                                         reorder points with extended
                                                        import lead time buffers from Day
                                                                        1

    3PL resistance to       **Medium**       **High**    Include reporting obligations in
       reporting or                                        revised 3PL SLA before Odoo
       integration                                         go-live; provide structured
                                                           spreadsheet template if API
                                                           integration is not feasible

      Incorrect BOMs        **Medium**      **Medium**   Validate all BOMs across 3 pilot
   distorting yield and                                  packing runs with manual weight
           COGS                                           recording before finalising in
                                                                       Odoo

       EU VAT / OSS         **Medium**       **High**   Engage EU VAT specialist alongside
    compliance failure                                   Odoo Accounting setup; OSS built
                                                        into Chart of Accounts from Day 1;
                                                         specific attention to UK (GBP),
                                                          Sweden (SEK), and Poland (PLN)

  Organic certification       **Low**        **High**    Activate lot/batch tracking for
     traceability gap                                    all seed products from Phase 1;
                                                         store LU-BIO-04 certificates on
                                                         Italian supplier records in Odoo

    Staff resistance /    **Low--Medium**   **Medium**     Budget 2--3 days structured
    insufficient Odoo                                   training per core user; designate
         adoption                                          internal Odoo champion from
                                                                 management team
  ---------------------- ----------------- ------------ ----------------------------------

# **11. Strategic Recommendations**

## **11.1 Immediate Actions --- Next 30 Days (No ERP Required)**

These actions require no ERP system and can be implemented within days,
significantly de-risking the Odoo implementation:

**1. Conduct a full physical stock count** --- across all 3PL warehouses
and Amazon FBA locations. This count becomes the authoritative master
data baseline for Odoo migration.

**2. Formalise a written 3PL SLA** --- covering: inventory reporting
frequency, packing error rate thresholds, turnaround time from goods-in
to dispatch, and escalation procedures.

**3. Define target fill weights** --- and acceptable weight variances
for every seed SKU variant (10g, 200g, 500g per species).

**4. Introduce a structured batch record sheet** --- at the 3PL for each
packing run: quantity in, quantity out, and waste recorded.

**5. Request a formal CalibtOS implementation quote** --- scoped to 10
marketplaces, the seed manufacturing module, and organic certification
traceability.

## **11.2 Short-Term --- Weeks 1--12 (approx. months 1--3)**

- Deploy Odoo Enterprise with Amazon Connector; prioritise inventory
  synchronisation across all ten accounts.

- Configure 3PL warehouses as Odoo virtual locations immediately ---
  stock visibility is achieved even without API integration.

- Issue all future purchase orders to Italian seed suppliers and
  packaging suppliers through Odoo from Day 1.

- Establish FBA reorder points based on sales velocity data extracted
  from Amazon Seller Central reports.

## **11.3 Medium-Term --- Weeks 10--20 (approx. months 3--5)**

- Deploy Manufacturing module with BOMs for all seed SKUs; activate
  yield and loss tracking.

- Implement all four Quality Control Points; replace subjective
  sense-checks with documented, measurable pass/fail criteria.

- Activate lot/batch tracking for all food-grade seed products; link
  organic certificates to Italian supplier records.

- Begin Amazon settlement reconciliation in Odoo Accounting for all ten
  marketplace accounts.

## **11.4 Long-Term --- From week 18 onward (month 5+)**

- Enable demand forecasting using 12+ months of accumulated FBA sales
  data within Odoo.

- Evaluate Odoo Website as a direct-to-consumer channel --- a hedge
  against Amazon platform dependency and fee escalation.

- Pursue EDI integration with key 3PL providers for fully automated
  stock movement workflows.

- Assess further Amazon marketplace expansion (e.g. Amazon.com.tr)
  managed end-to-end within Odoo.

# **12. Conclusion & Next Steps**

SLSK Ventures GmbH has built a credible, commercially validated
multi-brand Amazon FBA operation. The market evidence is unambiguous: a
Top 1,000 ranking on Amazon.de, a #1 category rank on Amazon.nl, EU
organic certification across the ZenGreens range, three registered
trademark brands, and ten confirmed European marketplace storefronts.
The ZenGreens brand occupies a premium, mission-aligned position in the
structurally growing organic food segment, with strong cross-border
customer reviews confirming genuine pan-European demand.

The business has, however, reached the operational ceiling of informal,
founder-led management. Ten marketplaces, a complex dual-source seed
supply chain, no formal quality framework, no loss calculation
capability, and no 3PL integration cannot be sustained through
spreadsheets and experience alone. At this stage, growth amplifies
operational risk rather than reducing it.

The transition to Odoo Enterprise as a central ERP is the
highest-leverage strategic investment available to SLSK at this stage of
its development. A well-executed CalibtOS implementation will unify
inventory across all ten marketplace accounts, automate FBA
replenishment, formalise 3PL relationships, enable accurate yield
tracking and COGS calculation for seed products, satisfy EU organic
traceability requirements, and --- for the first time --- provide
SLSK\'s management with a real-time picture of profitability by brand,
SKU, and market.

  ----------------------------------------------------------------------
   ***SLSK Ventures GmbH is ready to transition from a founder-operated
     FBA business into a professionally run, data-driven multi-brand
      e-commerce company. Odoo is the right ERP for this journey ---
  Calibtos GmbH is the right partner to deliver it. The time to start is
                                 now.***

  ----------------------------------------------------------------------

## **Proposed Next Steps**

**1. Discovery session** --- A structured working session with SLSK
management to confirm operational data, 3PL identity, current SKU
catalogue, and existing stock levels.

**2. Formal scoping** --- CalibtOS will produce a detailed
implementation scope document and time-and-materials estimate covering
all six workstreams over the planned 18--24 week calendar, including
named validation and sign-off milestones.

**3. Odoo instance provisioning** --- Deployment of a sandbox Odoo 18
Enterprise instance for demonstration and early configuration review.

**4. Parallel go-live plan** --- A documented parallel operation plan to
protect all ten Amazon seller accounts throughout the entire transition
period.

# **13. Data Sources & Verification Notes**

All factual claims in this document were independently verified against
publicly accessible sources as of March 2026. Items marked ⚠ as inferred
or unverified should be confirmed with the client before use in formal
contractual or planning documents.

  ----------------------- ---------------------------------- --------------
      **Data Point**                  **Source**               **Status**

    Amazon.de rank #516          *SellerRatings.com*         **✓ Verified**
       (March 2026)                                          

   Amazon.fr rank #7,219         *SellerRatings.com*         **✓ Verified**

  Amazon.de active since         *SellerRatings.com*         **✓ Verified**
        August 2018                                          

  1,883 reviews, 4.7-star        *SellerRatings.com*         **✓ Verified**
        rating (DE)                                          

      10 marketplace        *Live Amazon product pages per   **✓ Verified**
   storefronts confirmed       marketplace (Mar 2026)*       

      Amazon.se: SLSK        *amazon.se product page ASIN    **✓ Verified**
    Ventures GmbH (SE)               B0BNQXV3BR*             

      Amazon.ie: SLSK       *amazon.ie product page (VEVOX   **✓ Verified**
  products via DE entity          ASIN B098TJ4VFN)*          

       Amazon.co.uk:       *amazon.co.uk product page ASIN   **✓ Verified**
  ZenGreens, manufacturer       B0CSDTM3V4 (Mar 2026)*       
    SLSK Ventures GmbH                                       

  #1 in Garden/Veg Seeds     *Amazon.nl ASIN B0FXB449B7*     **✓ Verified**
       on Amazon.nl                                          

   Legal name, address,      *NorthData.com (HRB 103562)*    **✓ Verified**
      register number                                        

   Share capital €26,000           *NorthData.com*           **✓ Verified**

  Anno C. B. Skriver ---           *NorthData.com*           **✓ Verified**
     Managing Director                                       

  French SIREN 914935374           *NorthData.com*           **✓ Verified**
       (April 2022)                                          

  Trademarks: ZenGreens,        *NorthData.com / DPMA*       **✓ Verified**
     VEVOX, SLSK Games                                       

   Balance sheet \~€600K   *Implisense.com (from published   **✓ Verified**
    (2023, +30.2% YoY)                filings)*              

    Italy as country of    *Amazon.de and Amazon.nl product  **✓ Verified**
   origin for ZenGreens               listings*              

        EU organic            *Amazon.co.uk listing ASIN     **✓ Verified**
    certification code               B0DDLJ6X71*             
         LU-BIO-04                                           

      Odoo Enterprise      *odoo.com/pricing (March 2026)*   **✓ Verified**
         Standard:                                           
     €19.90/user/month                                       

  Odoo Enterprise Custom:  *odoo.com/pricing (March 2026)*   **✓ Verified**
     €29.90/user/month                                       

    Former seller name           *SellerRatings.com*         **✓ Verified**
      \"VEVOX Store\"                                        

      Amazon.pl: SLSK     *amazon.pl live product page (Mar  **✓ Verified**
    products confirmed                  2026)*               

     Amazon.com.tr ---        *Public listings may show           **⚠
     seller entity not      ZenGreens; confirm registered     Unverified**
         verified             seller in Seller Central*      

   Full shareholder list       *Gesellschafterliste at            **⚠
                           Amtsgericht Köln --- paid access   Unverified**
                                      required*              

   Additional directors     *NorthData \"N.N.Dewolf\" ---         **⚠
      beyond Skriver       likely Schindewolf; confirm with   Unverified**
                                       client*               

  3PL identity and exact       *Not publicly disclosed*      **⚠ Inferred**
         location                                            

    Packaging supplier      *Inferred as Asia from supply    **⚠ Inferred**
     country of origin        chain lead time structure*     

  Revenue and net profit  *Gated behind paid Bundesanzeiger       **⚠
          figures                      access*                Unverified**
  ----------------------- ---------------------------------- --------------

*This document was prepared by CalibtOS GmbH, Köln, as a confidential
business proposal for SLSK Ventures GmbH. All data marked as verified
was confirmed through independent research of publicly accessible
sources as of March 2026. Data marked as inferred or unverified should
be confirmed with the client before being incorporated into formal
contractual or planning documents.*

© 2026 CalibtOS GmbH · Köln, Germany · Document Ref:
CalibtOS-SLSK-2026-001
