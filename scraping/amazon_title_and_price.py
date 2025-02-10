from playwright.sync_api import sync_playwright
import json

output = []

with sync_playwright() as p:
    browser = p.chromium.launch(headless=False)
    page = browser.new_page()
    page.goto(
        "https://www.amazon.com/s?k=doge&crid=3GETJE18B2FUB&sprefix=doge%2Caps%2C107&ref=nb_sb_noss_1"
    )

    while True:
        page.wait_for_timeout(10000)

        elements = page.query_selector_all(".s-result-item")
        for el in elements:
            title_el = el.query_selector("h2")
            price_el = el.query_selector(".a-price .a-offscreen")

            if price_el and title_el:
                price = price_el.text_content()
                title = title_el.text_content()
                print(price, title)
                output.append({"title": title, "price": price})

        with open("amazon_items.json", "w") as f:
            json.dump(output, f)

        page.get_by_role("button", name="Go to next page, page").click(timeout=10000)

    browser.close()
