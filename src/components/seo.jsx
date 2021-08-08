import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const Seo = ({ title, description = '', image = null, lang = 'en', meta = [] }) => {
  const { site: { siteMetadata } } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            siteUrl
            description
            author
          }
        }
      }
    `
  );

  const metaDescription = description || siteMetadata.description;
  const metaImage = image || 'images/icon.png';
  const schemaMarkup = null;
  const schema = null;

  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={title}
      titleTemplate={`%s | ${siteMetadata.title}`}
      meta={[
        { name: `description`, content: metaDescription },
        { name: `og:url`, content: siteMetadata.siteUrl },
        { property: `og:title`, content: title },
        { property: `og:description`, content: metaDescription },
        { property: `og:image`, content: metaImage },
        { property: `og:type`, content: `website` },
        { name: `twitter:card`, content: `summary` },
        { name: `twitter:creator`, content: siteMetadata.author },
        { name: `twitter:title`, content: title },
        { name: `twitter:description`, content: metaDescription },
        { name: `twitter:image`, content: metaImage }
      ].concat(meta)}
    >
      {schemaMarkup && <script type="application/ld+json">{schema.json}</script>}
    </Helmet>
  );
}

export default Seo;