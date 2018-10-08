const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    graphql(`
    {
      allDatoCmsArticle {
        edges {
          node {
            slug
          }
        }
      }
    }
    `).then(result => {
        result.data.allDatoCmsArticle.edges.map(({ node: post }) => {
          createPage({
            path: `blog/${post.slug}`,
            component: path.resolve(`./src/templates/post.js`),
            context: {
              slug: post.slug,
            },
          })
        })
        resolve()
      })
  })
}