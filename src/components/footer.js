import React from 'react';
import { Link } from 'gatsby';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer style={{ borderTop: '4px solid var(--red)', background: 'var(--bg-alt)', padding: '3rem 0 1.5rem', marginTop: '5rem' }}>
      <div className="container--wide" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: '2rem', marginBottom: '2rem' }}>
        <div>
          <h3 style={{ fontFamily: "'DM Serif Display', serif", fontSize: '1.3rem', marginBottom: '0.75rem', color: 'var(--text)', borderBottom: 'none' }}>OZE Bydgoszcz</h3>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>Portal o czystej energii w Bydgoszczy, Toruniu i na Kujawach.</p>
        </div>
        <div>
          <h4 style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>Serwis</h4>
          <Link to="/" style={{ display: 'block', color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '0.4rem', textDecoration: 'none' }}>Strona główna</Link>
          <Link to="/blog" style={{ display: 'block', color: 'var(--text-muted)', fontSize: '0.9rem', textDecoration: 'none' }}>Artykuły</Link>
        </div>
        <div>
          <h4 style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>Polecamy</h4>
          <a href="https://ecoaudyt.app" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--red)', fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none' }}>→ ecoaudyt.app</a>
        </div>
      </div>
      <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1rem', textAlign: 'center' }}>
        <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>© {year} OZE Bydgoszcz</p>
      </div>
    </footer>
  );
};

export default Footer;
