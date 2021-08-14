import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../../components/layouts/layout';
import Seo from '../../components/seo';
import Works from '../../components/works';

const Home = ({ data }) => {
  const works = data.works.nodes.map(node => node);

  return (
    <Layout>
      <Seo title="Home" />
      <div className="h-screen">
        <Works works={works} />
      </div>
    </Layout>
  );
};

export const PageQuery = graphql`
  query Works($locale: String) {
    works: allContentfulWorks(filter: { node_locale: { eq: $locale } }) {
      nodes {
        id
        node_locale
        name
        url
        position
        description {
          description
        }
        image {
          gatsbyImageData(layout: FULL_WIDTH, formats: WEBP, quality: 100)
        }
      }
    }
  }
`;

export default Home;
