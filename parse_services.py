import re

html_file = "/Users/diya/Desktop/Flybit Dynamics/flybit-about (1).html"
with open(html_file, 'r', encoding='utf-8') as f:
    content = f.read()

# find <section id="services"> to </section>
match = re.search(r'(<section id="services">.*?</section>)', content, re.DOTALL | re.IGNORECASE)
if match:
    with open('services_extracted.html', 'w', encoding='utf-8') as f:
        f.write(match.group(1))
    print("Extracted to services_extracted.html")
else:
    print("Section not found.")
