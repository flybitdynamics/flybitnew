import re

with open('../clients_extracted.html', 'r', encoding='utf-8') as f:
    html = f.read()

html = html.replace('class="', 'className="')
# Fix br tags
html = html.replace('<br>', '<br />')
# Fix openModal to use backticks
html = re.sub(r'onclick="openModal\(\'(.*?)\',\'(.*?)\'\)"', r'onClick={() => openModal(`\1`, `\2`)}', html)

component = f"""'use client';
import React, {{ useEffect }} from 'react';

export default function Clients() {{

  useEffect(() => {{
    const observer = new IntersectionObserver((entries) => {{
      entries.forEach((entry) => {{
        if (entry.isIntersecting) {{
          entry.target.classList.add('visible');
        }}
      }});
    }}, {{ threshold: 0.1 }});

    const elements = document.querySelectorAll('.fu');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }}, []);

  const openModal = (title: string, desc: string) => {{
     console.log("Open modal:", title, desc);
  }};

  return (
    {html}
  );
}}
"""

with open('src/components/about/Clients.tsx', 'w', encoding='utf-8') as f:
    f.write(component)

print("Created Clients.tsx")
