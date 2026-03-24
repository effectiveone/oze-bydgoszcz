import React from 'react';
import { Link } from 'gatsby';
const NotFound = () => (
  <div style={{ textAlign: 'center', padding: '6rem 2rem' }}>
    <h1 style={{ fontFamily: "'DM Serif Display', serif", fontSize: '4rem', color: '#dc2626', fontWeight: 400 }}>404</h1>
    <p style={{ marginTop: '1rem' }}><Link to="/">← Wróć na stronę główną</Link></p>
  </div>
);
export default NotFound;
