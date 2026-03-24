module.exports = {
  siteMetadata: {
    title: 'OZE Bydgoszcz',
    description: 'Portal o odnawialnych źródłach energii w Bydgoszczy i Kujawach',
    siteUrl: 'https://oze-bydgoszcz.pages.dev',
    author: 'Redakcja OZE Bydgoszcz',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    { resolve: 'gatsby-source-filesystem', options: { name: 'blog', path: `${__dirname}/content/blog` } },
    { resolve: 'gatsby-transformer-remark', options: { plugins: [] } },
  ],
};
