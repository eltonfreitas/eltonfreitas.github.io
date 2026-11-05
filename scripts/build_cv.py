"""Print cv/en.html and cv/pt.html to files/CV_Elton_Freitas_EN.pdf and _PT.pdf.

Needs a local server at the project root:  python3 -m http.server 8765
then:  python3 scripts/build_cv.py
"""
from pathlib import Path
from playwright.sync_api import sync_playwright

ROOT = Path(__file__).resolve().parent.parent
BASE = "http://127.0.0.1:8765/cv/"

with sync_playwright() as p:
    browser = p.chromium.launch()
    for lang in ("en", "pt"):
        page = browser.new_page()
        page.goto(BASE + f"{lang}.html", wait_until="networkidle")
        page.evaluate("document.fonts.ready")
        out = ROOT / "files" / f"CV_Elton_Freitas_{lang.upper()}.pdf"
        page.pdf(path=str(out), format="A4", print_background=True, prefer_css_page_size=True)
        print("wrote", out.name)
    browser.close()
