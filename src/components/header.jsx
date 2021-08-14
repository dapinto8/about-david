import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      icon: file(relativePath: { eq: "dp_gray.png" }) {
        childImageSharp {
          gatsbyImageData(width: 60)
        }
      }
    }
  `);

  const icon = getImage(data.icon);

  return (
    <header className="absolute top-0 left-0 right-0 flex justify-between items-center p-6">
      <div className="flex items-center">
        <div className="w-12">
          <GatsbyImage image={icon} alt="David Pinto Logo" />
        </div>
        <p className="ml-2 text-lg font-bold uppercase cursor-pointer">
          <span className="text-primary hover:text-gray">David </span>
          <span className="hover:text-primary">Pinto</span>
        </p>
      </div>
      <div className="cursor-pointer text-primary hover:text-white">
        <div className="w-6 h-0.75 mb-1 rounded-full bg-current"></div>
        <div className="w-4 h-0.75 ml-auto rounded-full bg-current"></div>
      </div>
    </header>
  );
};

export default Header;
