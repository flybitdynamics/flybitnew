import re
import os

with open('../flybit-about (1).html', 'r', encoding='utf-8') as f:
    html = f.read()

sections = [
    ('portfolio', r'<section id="work".*?</section>'),
    ('fleet', r'<section id="fleet".*?</section>'),
    ('process', r'<section id="process".*?</section>'),
    ('faq', r'<section id="faq".*?</section>'),
    ('addons', r'<section id="addons".*?</section>'),
    ('why_choose_us', r'<section id="why".*?</section>'),
    ('mission_band', r'<section class="mission-band".*?</section>'),
    ('contact', r'<section id="contact".*?</section>')
]

def style_to_react(match):
    style_str = match.group(1)
    # Simple conversion: "max-width:420px;" -> "{ maxWidth: '420px' }"
    # "text-align:center;margin-bottom:1.5rem" -> "{ textAlign: 'center', marginBottom: '1.5rem' }"
    styles = []
    for prop in style_str.split(';'):
        if not prop.strip(): continue
        if ':' not in prop: continue
        key, val = prop.split(':', 1)
        key = key.strip()
        val = val.strip()
        # camelCase
        parts = key.split('-')
        key = parts[0] + ''.join(p.capitalize() for p in parts[1:])
        styles.append(f"{key}: '{val}'")
    return "style={{" + ", ".join(styles) + "}}"

for name, pattern in sections:
    match = re.search(pattern, html, re.DOTALL)
    if not match:
        print(f"Skipping {name}, not found.")
        continue
    
    content = match.group(0)
    content = content.replace('class="', 'className="')
    content = content.replace('<br>', '<br />')
    content = re.sub(r'(<img[^>]*?)(?<!/)>', r'\1 />', content)
    content = re.sub(r'(<input[^>]*?)(?<!/)>', r'\1 />', content)
    
    # Fix openModal
    content = re.sub(r'onclick="openModal\(\'(.*?)\',\'(.*?)\'\)"', r'onClick={() => openModal(`\1`, `\2`)}', content)
    # Fix toggleFaq
    content = re.sub(r'onclick="toggleFaq\(this\)"', r'onClick={(e) => toggleFaq(e.currentTarget)}', content)
    
    content = re.sub(r'style="(.*?)"', style_to_react, content)
    
    # For mission_band, there is an style string: style={{backgroundImage: 'url(...)', backgroundSize: 'cover', backgroundPosition: 'center'}}
    # If the original was inline style, it will be handled. Wait, it had background-image: url(...)
    
    # Create component
    comp_name = "".join(x.capitalize() for x in name.split('_'))
    
    react_code = f"""'use client';
import React, {{ useEffect }} from 'react';

export default function {comp_name}() {{

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

  const toggleFaq = (el: HTMLElement) => {{
    const body = el.nextElementSibling as HTMLElement;
    if (el.classList.contains('active')) {{
      el.classList.remove('active');
      body.style.maxHeight = '0';
    }} else {{
      el.classList.add('active');
      body.style.maxHeight = body.scrollHeight + 'px';
    }}
  }};

  return (
    {content}
  );
}}
"""
    with open(f'src/components/about/{comp_name}.tsx', 'w', encoding='utf-8') as f:
        f.write(react_code)
    print(f"Created {comp_name}.tsx")
