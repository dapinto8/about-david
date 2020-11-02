import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import Layout from 'components/layout';
import Styles from './styles.scss';

const HomePage = ({ data }) => {

  const { angular, react, vue } = data;

  return (
    <Layout>
      <section styleName="Home">
        <h1>Home</h1>
        <div style={{ maxWidth: '200px' }}>
          <div style={{ overflow: 'hidden' }}>
            <div data-anim="squareReveal" style={{ transform: 'translateY(-100%)' }}>
              <Img fluid={angular.childImageSharp.fluid} />
            </div>
          </div>
          <Img fluid={react.childImageSharp.fluid} />
          <Img fluid={vue.childImageSharp.fluid} />
        </div>
      </section>
    </Layout>
  );
};

export const query = graphql`
  query homeQuery {
    angular: file(relativePath: { eq: "angular-dark.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    react: file(relativePath: { eq: "react-dark.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    vue: file(relativePath: { eq: "vue-dark.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default HomePage;