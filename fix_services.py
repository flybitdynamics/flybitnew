import re

with open('services_extracted.html', 'r', encoding='utf-8') as f:
    html = f.read()

html = html.replace('class="', 'className="')
# Fix showSrv
html = re.sub(r'onclick="showSrv\(\'(.*?)\',this\)"', r'onClick={() => setActiveTab(\'\1\')}', html)
# Fix openModal to use backticks
html = re.sub(r'onclick="openModal\(\'(.*?)\',\'(.*?)\'\)"', r'onClick={() => openModal(`\1`, `\2`)}', html)
style_repl = 'style={{ textAlign: "center", marginBottom: "1.5rem", fontSize: ".78rem", color: "var(--text-muted)", letterSpacing: ".1em" }}'
html = re.sub(r'style="[^"]*"', style_repl, html)
html = re.sub(r'(<img[^>]*?)(?<!/)>', r'\1 />', html)

# Conditionally render srv-panel
html = html.replace('<div className="srv-panel active" id="srv-social">', '{activeTab === "social" && <div className="srv-panel active" id="srv-social">')
html = html.replace('<div className="srv-panel" id="srv-corporate">', '{activeTab === "corporate" && <div className="srv-panel" id="srv-corporate">')
html = html.replace('<div className="srv-panel" id="srv-government">', '{activeTab === "government" && <div className="srv-panel" id="srv-government">')
html = html.replace('<div className="srv-panel" id="srv-spiritual">', '{activeTab === "spiritual" && <div className="srv-panel" id="srv-spiritual">')
html = html.replace('<div className="srv-panel" id="srv-sports">', '{activeTab === "sports" && <div className="srv-panel" id="srv-sports">')

# Close the conditionals
html = html.replace('    </div>\n  </div>\n', '    </div>\n  </div>}\n')


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
