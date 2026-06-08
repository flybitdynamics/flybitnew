import re

with open('services_extracted.html', 'r', encoding='utf-8') as f:
    html = f.read()

html = html.replace('class="', 'className="')
html = re.sub(r'onclick="showSrv\(\'(.*?)\',this\)"', r'onClick={() => setActiveTab(\'\1\')}', html)
html = re.sub(r'onclick="openModal\((.*?)\)"', r'onClick={() => openModal(\1)}', html)
style_repl = 'style={{ textAlign: "center", marginBottom: "1.5rem", fontSize: ".78rem", color: "var(--text-muted)", letterSpacing: ".1em" }}'
html = re.sub(r'style="[^"]*"', style_repl, html)
html = re.sub(r'(<img[^>]*?)(?<!/)>', r'\1 />', html)
# fix some unclosed elements if any, br and input are not in this section probably.

# We also need to conditionally render the grids based on activeTab.
# The HTML has: <div class="srv-grid" id="social" style="display:grid;">
# Let's replace the ids with className conditional
html = re.sub(r'<div className="srv-grid" id="(.*?)"[^>]*>', r'{activeTab === "\1" && <div className="srv-grid" id="\1">', html)
# And close the conditional
html = html.replace('</div>\n    <div className="srv-grid"', '</div>}\n    {activeTab === "" && <div className="srv-grid"')
# We'll fix the closing brackets manually or just do it in script:
html = re.sub(r'</div>\n    \{activeTab === "" && <div', r'</div>}\n    {activeTab === "" && <div', html)
# This is tricky with regex. Let's just output it and fix the React structure with standard tools if needed.

component = f"""'use client';
import React, {{ useState, useEffect, useRef }} from 'react';

export default function ServicesDetailed() {{
  const [activeTab, setActiveTab] = useState('social');
  
  const sectionRef = useRef<HTMLElement>(null);

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

with open('src/components/about/ServicesDetailed.tsx', 'w', encoding='utf-8') as f:
    f.write(component)

print("Created ServicesDetailed.tsx")
