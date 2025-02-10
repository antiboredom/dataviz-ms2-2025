from playwright.sync_api import sync_playwright
import requests


def download_file(url, local_filename=None):
    if not local_filename:
        local_filename = url.split("/")[-1]

    with requests.get(url, stream=True) as r:
        r.raise_for_status()
        with open(local_filename, "wb") as f:
            for chunk in r.iter_content(chunk_size=8192):
                f.write(chunk)
    return local_filename


with sync_playwright() as p:
    browser = p.chromium.launch(headless=False)
    page = browser.new_page()
    page.goto(
        "https://www.dvidshub.net/search/?filter%5Btype%5D=image&view=grid&sort=publishdate"
    )
    image_tags = page.query_selector_all("img")
    for index, img in enumerate(image_tags):
        src = img.get_attribute("src")
        if src:
            if not src.startswith("https://"):
                src = "https://www.dvidshub.net" + src
            localname = str(index) + ".jpg"
            download_file(src, localname)

    browser.close()
