import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import PostCard from '../components/post-card';
import SEO from '../components/seo';

const BlogPage = ({ data }) => {
  const posts = data?.allMarkdownRemark?.nodes || [];
  return (
    <Layout>
      <SEO title="Artykuły" description="Artykuły o OZE w Bydgoszczy i Kujawach" siteName="OZE Bydgoszcz" />
      <div className="container" style={{ padding: '3rem 2rem 4rem' }}>
        <h1 style={{ fontFamily: "'DM Serif Display', serif", fontSize: '2.5rem', fontWeight: 400, marginBottom: '0.25rem' }}>Artykuły</h1>
        <p style={{ color: 'var(--text-muted)', marginBottom: '0.5rem', fontSize: '0.9rem' }}>{posts.length} artykułów o OZE w Kujawach</p>
        <div style={{ borderTop: '4px solid var(--text)', marginBottom: '0.5rem' }}></div>
        {posts.length > 0
          ? posts.map(p => <PostCard key={p.fields.slug} title={p.frontmatter.title} excerpt={p.excerpt} slug={p.fields.slug} date={p.frontmatter.date} tags={p.frontmatter.tags} />)
          : <p style={{ color: 'var(--text-muted)', padding: '3rem 0' }}>Artykuły pojawią się wkrótce.</p>}
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

export default BlogPage;
