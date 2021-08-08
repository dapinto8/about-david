const path = require('path');

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules']
    }
  });
};

exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const pages = [
    {
      id: 'home_en',
      template: 'home/index.jsx',
      locale: 'en',
      pagePath: '/'
    },
    {
      id: 'home_es',
      template: 'home/index.jsx',
      locale: 'es',
      pagePath: '/es'
    }
  ];

  pages.map(({ id, template, locale, pagePath }) => {
    return createPage({
      path: pagePath,
      component: path.resolve(`./src/templates/${template}`),
      context: {
        id,
        locale
      }
    });
  });
};
