import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import PostCard from '../components/post-card';
import SEO from '../components/seo';

const IndexPage = ({ data }) => {
  const posts = data?.allMarkdownRemark?.nodes || [];
  return (
    <Layout>
      <SEO title="Strona główna" description="OZE Bydgoszcz — energia odnawialna w Bydgoszczy i Kujawach" siteName="OZE Bydgoszcz" />

      <div style={{ borderBottom: '1px solid var(--border)', padding: '5rem 0' }}>
        <div className="container">
          <div style={{ width: 60, height: 4, background: 'var(--red)', marginBottom: '1.5rem', borderRadius: 2 }}></div>
          <h1 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 400, lineHeight: 1.05, marginBottom: '1.5rem', color: 'var(--text)' }}>
            Energia odnawialna<br/>w Bydgoszczy<br/>i na Kujawach
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', maxWidth: '480px', marginBottom: '2rem', lineHeight: 1.75 }}>
            Niezależne informacje o fotowoltaice, pompach ciepła i zielonej energii w regionie kujawsko-pomorskim.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
            <Link to="/blog" style={{ background: 'var(--red)', color: '#fff', padding: '0.75rem 2rem', fontWeight: 500, textDecoration: 'none', display: 'inline-block' }}>Czytaj artykuły</Link>
            <a href="https://ecoaudyt.app" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)', fontSize: '0.9rem', textDecoration: 'none' }}>ecoaudyt.app ↗</a>
          </div>
        </div>
      </div>

      <div className="container" style={{ padding: '3rem 2rem 4rem' }}>
        {posts.length > 0 ? (
          <>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.5rem' }}>
              <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: '1.8rem', fontWeight: 400 }}>Najnowsze artykuły</h2>
              <Link to="/blog" style={{ color: 'var(--red)', fontSize: '0.9rem', fontWeight: 500 }}>Wszystkie →</Link>
            </div>
            <div style={{ borderTop: '4px solid var(--text)', marginBottom: '0.5rem' }}></div>
            {posts.slice(0, 8).map(p => <PostCard key={p.fields.slug} title={p.frontmatter.title} excerpt={p.excerpt} slug={p.fields.slug} date={p.frontmatter.date} tags={p.frontmatter.tags} />)}
          </>
        ) : (
          <div style={{ padding: '5rem 0' }}>
            <div style={{ width: 60, height: 4, background: 'var(--red)', marginBottom: '1.5rem' }}></div>
            <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: '2rem', fontWeight: 400 }}>Artykuły wkrótce</h2>
            <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem' }}>Przygotowujemy treści o OZE w Bydgoszczy.</p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      nodes { fields { slug } excerpt(pruneLength: 160) frontmatter { title date(formatString: "D MMMM YYYY", locale: "pl") tags } }
    }
  }
`;

export default IndexPage;
