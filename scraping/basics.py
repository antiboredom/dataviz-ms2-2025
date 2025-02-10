import requests
from bs4 import BeautifulSoup

response = requests.get("https://www.foxnews.com/")
soup = BeautifulSoup(response.text, "html.parser")
elements = soup.select(".article .title")
for el in elements:
    content = el.text.strip()
    print(content)
