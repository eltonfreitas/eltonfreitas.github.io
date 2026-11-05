"""Update data/metrics.json from the public Google Scholar profile.

Google Scholar has no official API. This script reads the public profile page,
parses the citation table and the per-paper counts, and writes them to
data/metrics.json. If the page cannot be read or parsed (Scholar sometimes
blocks automated requests), the script exits without touching the file, so the
site keeps showing the last good values.

Run locally:  python3 scripts/update_scholar.py
"""

from __future__ import annotations

import html
import json
import re
import sys
import unicodedata
import urllib.request
from datetime import datetime, timezone
from pathlib import Path

USER = "5jq6W3AAAAAJ"
URL = f"https://scholar.google.com/citations?user={USER}&hl=en&cstart=0&pagesize=100"
OUT = Path(__file__).resolve().parent.parent / "data" / "metrics.json"

# Title prefixes (normalised, as Scholar writes them) mapped to the DOI used on the site.
PAPERS = {
    "economic complexity and local employment multipliers": "10.1016/j.strueco.2025.11.005",
    "economic complexity and deforestation in the brazilian amazon": "10.1016/j.worlddev.2024.106804",
    "related industries, economic complexity, and regional diversification": "10.1016/j.pirs.2024.100011",
    "complexity-based diversification strategies": "10.1080/17421772.2024.2384744",
    "determinants of tourist employment in brazilian microregions": "10.1111/jors.12723",
    "relatedness and regional economic complexity": "10.1108/econ-11-2023-0185",
    "smart diversification strategies differentiated": "10.18356/16840348-2024-143-7",
    "economic complexity and employment in brazilian states": "10.18356/16840348-2023-139-9",
    "the great divide: economic complexity and development paths": "10.18356/d06fff2f-en",
    "the economic commission for latin america and the caribbean (eclac) was right": "10.1093/cje/bex057",
}


def norm(text: str) -> str:
    text = unicodedata.normalize("NFKD", html.unescape(text))
    text = "".join(c for c in text if not unicodedata.combining(c))
    return re.sub(r"\s+", " ", text).strip().lower()


def fetch() -> str:
    req = urllib.request.Request(
        URL,
        headers={
            "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 14_0) AppleWebKit/537.36 "
            "(KHTML, like Gecko) Chrome/124.0 Safari/537.36",
            "Accept-Language": "en-US,en;q=0.9",
        },
    )
    with urllib.request.urlopen(req, timeout=30) as resp:
        return resp.read().decode("utf-8", errors="ignore")


def parse(page: str) -> dict:
    stats = [int(x) for x in re.findall(r'class="gsc_rsb_std">(\d+)<', page)]
    if len(stats) != 6:
        raise ValueError(f"expected 6 numbers in the citation table, found {len(stats)}")
    works = re.findall(
        r'class="gsc_a_at">([^<]+)</a>.*?class="gsc_a_ac gs_ibl"[^>]*>(\d*)<', page, flags=re.S
    )
    if not works:
        raise ValueError("no works found on the profile page")

    papers: dict[str, int] = {}
    for title, cites in works:
        t = norm(title)
        for prefix, doi in PAPERS.items():
            if t.startswith(prefix):
                # Scholar may list the same paper twice (preprint and article); keep the larger count.
                papers[doi] = max(papers.get(doi, 0), int(cites or 0))

    return {
        "source": f"https://scholar.google.com/citations?user={USER}",
        "updated": datetime.now(timezone.utc).strftime("%Y-%m-%d"),
        "citations": stats[0],
        "h_index": stats[2],
        "i10_index": stats[4],
        "since_2021": {"citations": stats[1], "h_index": stats[3], "i10_index": stats[5]},
        "papers": papers,
    }


def main() -> int:
    try:
        data = parse(fetch())
    except Exception as exc:  # network error, block page, or layout change
        print(f"Scholar not updated, keeping previous values: {exc}", file=sys.stderr)
        return 0

    old = json.loads(OUT.read_text()) if OUT.exists() else {}
    unchanged = {k: v for k, v in data.items() if k != "updated"} == {
        k: v for k, v in old.items() if k != "updated"
    }
    if unchanged:
        print("Scholar metrics unchanged.")
        return 0

    OUT.parent.mkdir(parents=True, exist_ok=True)
    OUT.write_text(json.dumps(data, indent=2, ensure_ascii=False) + "\n")
    print(f"Updated {OUT.name}: {data['citations']} citations, h-index {data['h_index']}, "
          f"i10-index {data['i10_index']}, {len(data['papers'])} papers matched.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
