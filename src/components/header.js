import React from 'react';
import { Link } from 'gatsby';
import '../styles/global.css';

const Header = () => (
  <header style={{ borderBottom: '1px solid var(--border)', background: 'var(--bg)', padding: '1.25rem 0' }}>
    <div className="container--wide" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <div style={{ width: 4, height: '2.5rem', background: 'var(--red)', borderRadius: 2 }}></div>
          <div>
            <span style={{ display: 'block', fontFamily: "'DM Serif Display', serif", fontSize: '1.4rem', color: 'var(--text)' }}>OZE Bydgoszcz</span>
            <span style={{ display: 'block', fontSize: '0.68rem', color: 'var(--text-muted)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Kujawy i Pomorze</span>
          </div>
        </div>
      </Link>
      <nav style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
        <Link to="/" style={{ color: 'var(--text)', fontSize: '0.9rem', textDecoration: 'none', fontWeight: 500 }}>Strona główna</Link>
        <Link to="/blog" style={{ color: 'var(--text)', fontSize: '0.9rem', textDecoration: 'none', fontWeight: 500 }}>Artykuły</Link>
        <a href="https://ecoaudyt.app" target="_blank" rel="noopener noreferrer"
          style={{ color: 'var(--red)', fontSize: '0.9rem', fontWeight: 600, textDecoration: 'none', borderBottom: '2px solid var(--red)', paddingBottom: '1px' }}>
          ecoaudyt.app →
        </a>
      </nav>
    </div>
  </header>
);

export default Header;
