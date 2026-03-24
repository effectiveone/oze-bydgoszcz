import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

const BlogPost = ({ data }) => {
  const post = data.markdownRemark;
  const { title, description, date, author, tags } = post.frontmatter;
  return (
    <Layout>
      <SEO title={title} description={description || post.excerpt} siteName="OZE Bydgoszcz" />
      <div className="container" style={{ padding: '3rem 2rem 5rem' }}>
        <Link to="/blog" style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'block', marginBottom: '2.5rem' }}>← Powrót do artykułów</Link>
        <div style={{ width: 60, height: 4, background: 'var(--red)', marginBottom: '1.25rem', borderRadius: 2 }}></div>
        {tags && <div style={{ marginBottom: '0.5rem' }}>{tags.map(t => <span key={t} style={{ display: 'inline-block', background: 'var(--red-pale)', color: 'var(--red-dark)', fontSize: '0.7rem', fontWeight: 600, padding: '0.15rem 0.5rem', marginRight: '0.4rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>{t}</span>)}</div>}
        <h1 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 400, lineHeight: 1.1, marginBottom: '0.75rem' }}>{title}</h1>
        <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>{date} · {author}</p>
        {description && <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', borderLeft: '4px solid var(--red)', paddingLeft: '1rem', marginBottom: '2.5rem', lineHeight: 1.65 }}>{description}</p>}
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html excerpt
      frontmatter { title description date(formatString: "D MMMM YYYY", locale: "pl") author tags }
    }
  }
`;

export default BlogPost;
