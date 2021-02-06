import React from 'react'
import Layout from 'components/shared/Layout'
import { graphql } from 'gatsby'
import PostListItem from 'components/post/PostListItem'
import SEO from 'components/shared/SEO'

const IndexPage = ({ location, data }) => {
  const {
    allMdx: { nodes: posts },
  } = data

  const title = 'Writing'
  const description = 'Sample'

  return (
    <>
      <SEO />

      <SEO title={title} description={description} article />
      <Layout location={location}>
        <div className="wrapper">
          <header className="py-14">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{title}</h1>
            <p className="text-gray-500 text-sm md:text-base">{description}</p>
          </header>

          <ul className="divide-y divide-gray-100 -m-4 md:-m-0">
            {posts &&
              posts.map((post) => <PostListItem key={post.id} post={post} />)}
          </ul>
        </div>
      </Layout>
    </>
  )
}

export const query = graphql`
  query AllWritingg {
    allMdx(
      filter: { frontmatter: { path: { regex: "^/writing/" } } }
      sort: { order: DESC, fields: frontmatter___createdAt }
    ) {
      nodes {
        frontmatter {
          createdAt(formatString: "YYYY-MM-DD hh:mm")
          title
          thumbnailUrl {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
          tags
          description
          category
          path
        }
        id
        excerpt(pruneLength: 200, truncate: true)
        rawBody
      }
    }
  }
`

export default IndexPage
