# SLSK Presentation — Context Export
**Date:** 2026-03-29 | **Ref:** CalibtOS-SLSK-2026-001

---

## What Was Built

A complete 8-slide presentation for **CalibtOS GmbH → SLSK Ventures GmbH** Odoo ERP proposal.

**Files:**
- `D:\Repos\slsk_presentation\index.html` — Combined navigable deck (← → arrows, dot nav, `F` = fullscreen)
- `D:\Repos\slsk_presentation\slides\slide01–08.html` — Individual validated slides
- `D:\Repos\slsk_final_proposal.md` — Source document (read-only, do not modify)

---

## Slides & Designs

| # | File | Title | Design Notes |
|---|---|---|---|
| 1 | slide01.html | Title Slide | Dark navy hero gradient, CalibtOS branding |
| 2 | slide02.html | Market Traction | White bg, 3 metric cards (#516, 10 markets, 1,883+), dark callout box |
| 3 | slide03.html | Critical Bottlenecks | Light grey bg, 4×2 grid of 7 bottleneck cards |
| 4 | slide04.html | Odoo Solution | Split layout, dark right panel with orbital node diagram |
| 5 | slide05.html | Implementation Roadmap | White bg, 6-phase Gantt-style timeline (18–24 weeks) |
| 6 | slide06.html | Investment & ROI | Light bg with dot grid, investment breakdown table |
| 7 | slide07.html | Next Steps | Light bg, 4 step cards + dark CTA banner |
| 8 | slide08.html | Future Work & Long-Term | Light bg, bento grid: DTC, AI forecasting, EDI, diversification |

---

## Data Corrections Already Applied

| Slide | Original (wrong) | Corrected to |
|---|---|---|
| 02 | "Nexus Enterprise Framework" footer | "CalibtOS — Ref: CalibtOS-SLSK-2026-001" |
| 03 | "SLSK Project **2024**" | 2026 |
| 03 | Fabricated **"14.2% Margin Erosion"** + **"$1.2M Annual Loss"** | "7 Critical Bottlenecks" + "5–15% Gross Margin Recovery Possible" |
| 03 | "SECTION 02 / SLIDE 04" | "SECTION 03 / SLIDE 03" |
| 05 | **"NexusEnterprise"** branding | CalibtOS |
| 05 | "Target **Q4 2024** Launch" | "Target Live by Week 24" |
| 05 | "© 2024 NEXUS ENTERPRISE / SEC-CODE: SL-7724" | "© 2026 CalibtOS GmbH / REF: CalibtOS-SLSK-2026-001" |
| 06 | **"NEXUSENTERPRISE"** branding | CalibtOS |
| 06 | Licensing: **€4,200–€8,500** | **€1,194** (5 users × €19.90/mo × 12) |
| 06 | Requirements: **€1,500–€3,000** | **€2,000 fixed** (20h × €100/h) |
| 06 | Implementation: **€3,500–€7,500** | **€6,000–€16,000** |
| 06 | Training upper end: **€3,200** | **€3,000** |
| 06 | "© 2024 SLSK / NEXUS" | "© 2026 CalibtOS GmbH" |
| 07 | **"Nexus Enterprise"** throughout | CalibtOS / CalibtOS GmbH · Köln, Germany |
| 08 | "Strategic Roadmap **2024**" | 2026 |
| 08 | "**Q3 2024 — Q2 2025**" | "Post Go-Live (Month 5+)" |
| 08 | "Nexus Enterprise / Digital Transformation Suite" | "CalibtOS GmbH / Odoo ERP Implementation Partner" |

---

## Remaining Task — PPTX Export

**Goal:** Create `slsk_presentation.pptx` from the 8 slides with exact same design and **no grey outer backgrounds**.

### Steps

1. `pip install python-pptx pillow`
2. Screenshot each slide at **1280×720** using Chrome headless with body background overridden to transparent
3. Pack screenshots into a **16:9 PPTX** (10" × 5.625") using python-pptx
4. Output: `D:\Repos\slsk_presentation\slsk_presentation.pptx`

### Chrome Headless Screenshot Command (per slide)

```bash
"C:\Program Files\Google\Chrome\Application\chrome.exe" ^
  --headless --disable-gpu --screenshot="slide01.png" ^
  --window-size=1280,720 --hide-scrollbars ^
  --force-device-scale-factor=1 ^
  "file:///D:/Repos/slsk_presentation/slides/slide01_clean.html"
```

### Body Backgrounds to Strip (per slide)

Each slide has an outer body background that must be set to `transparent` or `white` before screenshotting so only the `.slide-container` renders. The original body background colors are:

| Slides | Body background-color |
|---|---|
| 01, 05 | `#d1d5db` / `#E2E8F0` |
| 02, 03, 04 | `#001629` |
| 06 | `#0A2540` |
| 07, 08 | `#e2e8f0` / `#f8f9fa` |

### Suggested Python Script

```python
import glob
from pptx import Presentation
from pptx.util import Inches, Pt
from pptx.enum.text import PP_ALIGN
from PIL import Image

SLIDE_W = Inches(10)
SLIDE_H = Inches(5.625)

prs = Presentation()
prs.slide_width = SLIDE_W
prs.slide_height = SLIDE_H

images = sorted(glob.glob("screenshots/slide*.png"))  # slide01.png … slide08.png

blank_layout = prs.slide_layouts[6]  # blank layout

for img_path in images:
    slide = prs.slides.add_slide(blank_layout)
    slide.shapes.add_picture(img_path, 0, 0, SLIDE_W, SLIDE_H)

prs.save("slsk_presentation.pptx")
print("Done.")
```

### Full Automation Script (screenshot + pptx)

```python
import os, subprocess, glob, re
from pathlib import Path
from pptx import Presentation
from pptx.util import Inches
from PIL import Image

SLIDES_DIR = Path(r"D:\Repos\slsk_presentation\slides")
OUT_DIR    = Path(r"D:\Repos\slsk_presentation\screenshots")
PPTX_OUT   = Path(r"D:\Repos\slsk_presentation\slsk_presentation.pptx")
CHROME     = r"C:\Program Files\Google\Chrome\Application\chrome.exe"

OUT_DIR.mkdir(exist_ok=True)

# Body bg override injected into a temp clean copy of each slide
STYLE_INJECT = "<style>body{background:white!important;margin:0;overflow:hidden;display:flex;align-items:center;justify-content:center;}</style>"

slide_files = sorted(SLIDES_DIR.glob("slide0*.html"))

for html_path in slide_files:
    clean_path = OUT_DIR / html_path.name
    content = html_path.read_text(encoding="utf-8")
    # Inject override style before </head>
    content = content.replace("</head>", STYLE_INJECT + "</head>", 1)
    clean_path.write_text(content, encoding="utf-8")

    png_path = OUT_DIR / (html_path.stem + ".png")
    subprocess.run([
        CHROME,
        "--headless", "--disable-gpu",
        f"--screenshot={png_path}",
        "--window-size=1280,720",
        "--hide-scrollbars",
        "--force-device-scale-factor=1",
        clean_path.as_uri()
    ], check=True)
    print(f"Screenshot: {png_path}")

# Build PPTX
prs = Presentation()
prs.slide_width  = Inches(10)
prs.slide_height = Inches(5.625)
blank = prs.slide_layouts[6]

for png in sorted(OUT_DIR.glob("slide*.png")):
    slide = prs.slides.add_slide(blank)
    slide.shapes.add_picture(str(png), 0, 0, Inches(10), Inches(5.625))

prs.save(str(PPTX_OUT))
print(f"Saved: {PPTX_OUT}")
```

---

## Key Proposal Facts (for validation)

| Metric | Value | Source |
|---|---|---|
| Amazon.de rank | #516 — Top 1,000 (Mar 2026) | SellerRatings.com |
| Active marketplaces | 10 (DE, FR, UK, IT, ES, NL, BE, SE, IE, PL) | Live Amazon pages |
| Seller rating | 4.7 / 5.0 | SellerRatings.com |
| Verified reviews (DE) | 1,883+ | SellerRatings.com |
| Balance sheet (2023) | ~€600,000 (+30.2% YoY) | Implisense.com |
| Share capital | €26,000 | NorthData.com |
| Trademarks | 3 (ZenGreens, VEVOX, SLSK Games) | DPMA |
| EU organic cert | LU-BIO-04 | Amazon.co.uk listing |
| Odoo licence (5 users, Standard, 12mo) | €1,194 | odoo.com/pricing |
| Requirements package | €2,000 fixed (20h × €100/h) | Proposal §9.2 |
| Implementation (T&M) | €6,000–€16,000 | Proposal §9.3 |
| Training | €1,500–€3,000 | Proposal §9.3 |
| **Total Year 1** | **€10,700–€22,200** | Proposal §9.3 |
| ROI: time saved | 3–5 hrs/day | Proposal §9.4 |
| ROI: margin recovery | 5–15% | Proposal §9.4 |
| Implementation timeline | 18–24 weeks (6 phases) | Proposal §8 |

---

## Stitch Project Reference

- **Project ID:** `4819612432306737871`
- **Platform:** Google Stitch (MCP tool: `mcp__stitch__get_screen`)
- Screen IDs are in the original session if re-fetching HTML is needed
