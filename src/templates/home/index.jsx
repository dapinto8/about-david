import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../../components/layouts/Layout';
import Seo from '../../components/Seo';
import Works from '../../components/Works';
import Skills from '../../components/Skills';

const Home = ({ data }) => {
  const works = data.works.nodes.map(node => node);
  const skills = data.skills.nodes.map(node => node);

  return (
    <Layout>
      <Seo title="Home" />
      <section className="min-h-screen pt-24">
        <section className="lg:absolute right-0 bottom-0 w-full h-80 md:h-96 lg:w-5/12 lg:h-2/3">
          <Works works={works} />
        </section>
        <section className="lg:w-6/12">
          <Skills skills={skills} />
        </section>
      </section>
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
    skills: allContentfulSkills(filter: { node_locale: { eq: $locale } }) {
      nodes {
        id
        node_locale
        name
        level
        type
        order
        image {
          gatsbyImageData(width: 150, formats: WEBP, quality: 100)
        }
      }
    }
  }
`;

export default Home;
