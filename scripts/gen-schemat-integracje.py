#!/usr/bin/env python3
"""Generuje public/images/bpp-integracje.svg — centralny schemat przepływu danych BPP."""
import base64

W, H = 2000, 1800

DARK = "#6B2A0B"       # tekst w kaflach
LABEL = "#B0480C"      # nagłówki sekcji
TITLE = "#7A2E0E"      # tytuł
STROKE = "#E07E2B"     # obramowanie kafli
LINE = "#D2600F"       # strzałki / ramka
FONT = "Arial, Helvetica, sans-serif"

INPUTS = [
    ("Zgłoszenia", "przez formularz"),
    ("PBN", None),
    ("CrossRef", None),
    ("Web of Science", None),
    ("DSpace", None),
]

OUTPUTS = [
    "PBN", "OAI-PMH", "API", "Serwer MCP → model językowy", "DSpace",
    "Raporty dla Uczelni", "Ewaluacja z optymalizacją", "Wizualizacje",
    "Profile naukowców", "Strona WWW instytucji",
]

SEARCH = [
    "Zapytania QL", "Pełny tekst", "Formularz GUI",
    "Przeglądanie", "Język naturalny (LLM)", "Sztuczna inteligencja (MCP)",
]

# --- geometria ---------------------------------------------------------------
IN_X, IN_W, BOX_H, PITCH = 110, 360, 86, 110
IN_Y0 = 408
OUT_X, OUT_W, OUT_PITCH = 1400, 510, 104
OUT_Y0 = 215
HUB_X, HUB_Y, HUB_W, HUB_H = 800, 515, 400, 320
PANEL_X, PANEL_Y, PANEL_W, PANEL_H = 290, 1290, 1420, 330
TILE_W, TILE_GAP = 430, 35
TILE_X0 = PANEL_X + (PANEL_W - (3 * TILE_W + 2 * TILE_GAP)) // 2

o = []
a = o.append


def data_uri(path):
    return "data:image/png;base64," + base64.b64encode(open(path, "rb").read()).decode()


def box(x, y, w, h, lines, *, size=28):
    a(f'<rect x="{x}" y="{y}" width="{w}" height="{h}" rx="16" fill="url(#tile)" stroke="{STROKE}" stroke-width="3"/>')
    cx, cy = x + w / 2, y + h / 2
    if len(lines) == 1:
        a(f'<text x="{cx}" y="{cy}" font-size="{size}" font-weight="bold" fill="{DARK}">{lines[0]}</text>')
    else:
        first = cy - (len(lines) - 1) * size * 0.62
        for i, ln in enumerate(lines):
            a(f'<text x="{cx}" y="{first + i * size * 1.24}" font-size="{size}" font-weight="bold" fill="{DARK}">{ln}</text>')


a(f'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" '
  f'viewBox="0 0 {W} {H}" width="{W}" height="{H}" font-family="{FONT}" '
  f'text-anchor="middle" dominant-baseline="central" role="img">')
a('<defs>')
a('<linearGradient id="tile" x1="0" y1="0" x2="0" y2="1">'
  '<stop offset="0" stop-color="#FEF4E9"/><stop offset="1" stop-color="#FBDDBC"/></linearGradient>')
a(f'<marker id="arrow" viewBox="0 0 12 12" refX="10" refY="6" markerWidth="7" markerHeight="7" orient="auto">'
  f'<path d="M0,0 L12,6 L0,12 Z" fill="{LINE}"/></marker>')
a('<filter id="soft" x="-20%" y="-20%" width="140%" height="140%">'
  '<feDropShadow dx="0" dy="6" stdDeviation="10" flood-color="#C9540A" flood-opacity="0.18"/></filter>')
a('</defs>')

# ramka + tytuł
a(f'<rect x="10" y="10" width="{W - 20}" height="{H - 20}" rx="30" fill="#FDF8F2" stroke="{LINE}" stroke-width="8"/>')
a(f'<text x="{W / 2}" y="86" font-size="44" font-weight="bold" fill="{TITLE}">'
  'BPP — centralny punkt przyjmowania i obróbki publikacji na uczelni</text>')

# --- wejście ---
a(f'<text x="{IN_X + IN_W / 2}" y="370" font-size="26" font-weight="bold" fill="{LABEL}" letter-spacing="6">WEJŚCIE</text>')
in_targets = [580, 628, 675, 722, 770]
for i, (l1, l2) in enumerate(INPUTS):
    y = IN_Y0 + i * PITCH
    box(IN_X, y, IN_W, BOX_H, [l1] if l2 is None else [l1, l2])
    sy, ty = y + BOX_H / 2, in_targets[i]
    a(f'<path d="M{IN_X + IN_W},{sy} C{IN_X + IN_W + 160},{sy} {HUB_X - 190},{ty} {HUB_X - 22},{ty}" '
      f'fill="none" stroke="{LINE}" stroke-width="4" marker-end="url(#arrow)"/>')

# --- wyjście ---
a(f'<text x="{OUT_X + OUT_W / 2}" y="172" font-size="26" font-weight="bold" fill="{LABEL}" letter-spacing="6">WYJŚCIE</text>')
out_sources = [548 + i * 28 for i in range(len(OUTPUTS))]
for i, name in enumerate(OUTPUTS):
    y = OUT_Y0 + i * OUT_PITCH
    box(OUT_X, y, OUT_W, BOX_H, [name])
    sy, ty = out_sources[i], y + BOX_H / 2
    a(f'<path d="M{HUB_X + HUB_W},{sy} C{HUB_X + HUB_W + 150},{sy} {OUT_X - 170},{ty} {OUT_X - 22},{ty}" '
      f'fill="none" stroke="{LINE}" stroke-width="4" marker-end="url(#arrow)"/>')

# --- hub ---
a(f'<g filter="url(#soft)"><rect x="{HUB_X}" y="{HUB_Y}" width="{HUB_W}" height="{HUB_H}" rx="30" '
  f'fill="#FFFFFF" stroke="{LINE}" stroke-width="6"/></g>')
a(f'<image x="{HUB_X + 35}" y="{HUB_Y + 30}" width="330" height="112" '
  f'xlink:href="{data_uri("public/images/logo-bpp.png")}"/>')
a(f'<line x1="{HUB_X + 45}" y1="{HUB_Y + 168}" x2="{HUB_X + HUB_W - 45}" y2="{HUB_Y + 168}" stroke="{STROKE}" stroke-width="3"/>')
a(f'<text x="{HUB_X + HUB_W / 2}" y="{HUB_Y + 205}" font-size="25" font-weight="bold" fill="{LABEL}" letter-spacing="2">CENTRALNY HUB</text>')
a(f'<text x="{HUB_X + HUB_W / 2}" y="{HUB_Y + 240}" font-size="25" font-weight="bold" fill="{LABEL}" letter-spacing="2">INFORMACJI NAUKOWEJ</text>')
a(f'<text x="{HUB_X + HUB_W / 2}" y="{HUB_Y + 280}" font-size="21" fill="#8A5A3A">przyjmowanie · obróbka · redystrybucja</text>')

# --- wyszukiwanie ---
a(f'<path d="M{HUB_X + HUB_W / 2},{HUB_Y + HUB_H} L{HUB_X + HUB_W / 2},{PANEL_Y - 22}" '
  f'fill="none" stroke="{LINE}" stroke-width="5" marker-end="url(#arrow)"/>')
a(f'<rect x="{PANEL_X}" y="{PANEL_Y}" width="{PANEL_W}" height="{PANEL_H}" rx="26" fill="#FEFAF5" stroke="{LINE}" stroke-width="5"/>')
a(f'<text x="{PANEL_X + PANEL_W / 2}" y="{PANEL_Y + 52}" font-size="26" font-weight="bold" fill="{LABEL}" letter-spacing="6">WYSZUKIWANIE</text>')
for i, name in enumerate(SEARCH):
    x = TILE_X0 + (i % 3) * (TILE_W + TILE_GAP)
    y = PANEL_Y + 95 + (i // 3) * (BOX_H + 28)
    box(x, y, TILE_W, BOX_H, [name], size=27)

# --- stopka ---
a(f'<text x="1900" y="1656" font-size="26" fill="#8A5A3A" text-anchor="end">otwarte oprogramowanie</text>')
a(f'<text x="1900" y="1692" font-size="26" fill="#8A5A3A" text-anchor="end">wsparcie komercyjne przez iplweb.pl</text>')
a(f'<image x="1700" y="1712" width="200" height="54" xlink:href="{data_uri("public/images/logo-iplweb.png")}"/>')
a('</svg>')

open("public/images/bpp-integracje.svg", "w", encoding="utf-8").write("\n".join(o) + "\n")
print("ok", len("\n".join(o)))
