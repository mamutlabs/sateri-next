import React from 'react';
// SEOContent.jsx — long-form SEO body for a programmatic landing page.
const SEOContent = ({ paragraphs }) => (
  <section style={{ padding: '96px 24px', background: '#f4f7f6' }}>
    <div style={{ maxWidth: 760, margin: '0 auto' }}>
      {paragraphs.map((p, i) => {
        if (p.startsWith('### ')) {
          return <h3 key={i} style={{
            fontFamily: '"Playfair Display", serif', fontSize: 30, fontWeight: 700,
            color: '#122c26', marginTop: 48, marginBottom: 24
          }}>{p.replace('### ', '')}</h3>;
        }
        const parts = p.split(/\*\*(.*?)\*\*/g);
        return (
          <p key={i} style={{
            fontFamily: 'Inter', color: '#414846', lineHeight: 1.7, marginBottom: 24, fontSize: 18
          }}>
            {parts.map((part, idx) => idx % 2 === 1
              ? <strong key={idx} style={{ fontWeight: 600, color: '#1a1c1c' }}>{part}</strong>
              : part)}
          </p>
        );
      })}
    </div>
  </section>
);



export default SEOContent;
