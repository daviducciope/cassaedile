from pathlib import Path
from playwright.sync_api import sync_playwright


ROOT = Path(__file__).resolve().parents[1]
HTML = ROOT / "presentazione" / "cassa-edile-presentazione.html"
PDF = ROOT / "presentazione" / "cassa-edile-presentazione.pdf"


def main() -> None:
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page(viewport={"width": 1920, "height": 1080})
        page.goto(HTML.as_uri(), wait_until="networkidle")
        page.pdf(
            path=str(PDF),
            width="13.333in",
            height="7.5in",
            print_background=True,
            prefer_css_page_size=True,
        )
        browser.close()


if __name__ == "__main__":
    main()
