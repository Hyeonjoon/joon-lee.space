exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
      alias: {
        '@': path.resolve(__dirname),
      },
    },
  })
}

const path = require('path')

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const blogPostTemplate = path.resolve(`src/templates/post.tsx`)

  const result = await graphql(`
    {
      allMdx(
        sort: { order: DESC, fields: [frontmatter___createdAt] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  result.data.allMdx.edges.forEach(({ node }) => {
    const { path } = node.frontmatter

    let template
    if (path.includes('/writing/')) {
      template = blogPostTemplate
    } 

    createPage({
      path: node.frontmatter.path,
      component: template,
      context: {},
    })
  })
}
