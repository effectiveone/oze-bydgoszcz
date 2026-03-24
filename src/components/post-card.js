import React from 'react';
import { Link } from 'gatsby';

const PostCard = ({ title, excerpt, slug, date, tags }) => (
  <article style={{ padding: '2rem 0', borderBottom: '1px solid var(--border)', display: 'grid', gridTemplateColumns: '1fr auto', gap: '1.5rem', alignItems: 'start' }}>
    <div>
      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.4rem' }}>
        {tags && tags[0] && <span style={{ background: 'var(--red-pale)', color: 'var(--red-dark)', fontSize: '0.7rem', fontWeight: 600, padding: '0.15rem 0.5rem', letterSpacing: '0.04em', textTransform: 'uppercase' }}>{tags[0]}</span>}
      </div>
      <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: '1.4rem', fontWeight: 400, marginBottom: '0.5rem', lineHeight: 1.25 }}>
        <Link to={`/blog${slug}`} style={{ color: 'var(--text)', textDecoration: 'none' }}
          onMouseEnter={e => e.target.style.color = 'var(--red)'}
          onMouseLeave={e => e.target.style.color = 'var(--text)'}>{title}</Link>
      </h2>
      {excerpt && <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.65 }}>{excerpt}</p>}
    </div>
    <div style={{ textAlign: 'right', minWidth: 90, paddingTop: '0.3rem' }}>
      <time style={{ display: 'block', fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>{date}</time>
      <Link to={`/blog${slug}`} style={{ color: 'var(--red)', fontSize: '0.82rem', fontWeight: 600, display: 'block', textDecoration: 'none' }}>Czytaj →</Link>
    </div>
  </article>
);

export default PostCard;
