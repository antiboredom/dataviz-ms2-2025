from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch(headless=False)
    page = browser.new_page()
    page.goto(
        "https://www.amazon.com/s?k=doge&crid=3GETJE18B2FUB&sprefix=doge%2Caps%2C107&ref=nb_sb_noss_1"
    )

    while True:
        elements = page.query_selector_all(".s-result-item h2")
        for el in elements:
            content = el.text_content()
            print(content)

        page.get_by_role("button", name="Go to next page, page").click(timeout=10000)

    browser.close()
