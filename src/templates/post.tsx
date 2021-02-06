import { graphql } from 'gatsby'
import React from 'react'
import Layout from 'components/shared/Layout'
import SEO from 'components/shared/SEO'
import Img from 'gatsby-image'
import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader'
import DefaultMDXRenderer from 'components/shared/DefaultMDXRenderer'
deckDeckGoHighlightElement()

const PostTemplate = (props) => {
  const { location, data } = props

  const {
    mdx: post,
    site: { siteMetadata },
  } = data

  const metaTagDescription = post.frontmatter.description
    ? `${post.frontmatter.description} | ${post.excerpt}`
    : post.excerpt

  return (
    <>
      <SEO
        thumbnailUrl={post.frontmatter.thumbnailUrl ? post.frontmatter.thumbnailUrl.childImageSharp.fluid.src: ''}
        title={post.frontmatter.title}
        description={metaTagDescription}
        article
      />

      <Layout location={location}>
        {post.frontmatter.thumbnailUrl && <div className="md:-mx-0 h-56 md:h-80 xl:h-96">
          <Img
            fluid={post.frontmatter.thumbnailUrl.childImageSharp.fluid}
            alt={post.frontmatter.title}
            className="w-full h-full"
          />
        </div>}

        <div className="wrapper">
          <header className="pb-12 pt-8 md:pt-16">
            <div className="mb-1 md:mb-2">
              <span className="bg-primary bg-opacity-50 px-1.5 text-sm md:text-base">
                {post.frontmatter.category}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold">
              {post.frontmatter.title}
            </h1>
            {post.frontmatter.description && (
              <p className="text-gray-500 mt-3 text-sm md:text-base">
                {post.frontmatter.description}
              </p>
            )}

            <div className="text-gray-500 flex items-center text-sm mt-6">
              <img
                className="rounded-full w-6 h-6 mr-3"
                src={siteMetadata.profileUrl}
                alt={siteMetadata.author}
              />
              <div>
                {siteMetadata.author}
                <span className="mx-1.5">·</span>
                {post.frontmatter.createdAt}
              </div>
            </div>
          </header>

          <div>
            <DefaultMDXRenderer>{post.body}</DefaultMDXRenderer>
          </div>

          <hr className="mt-10 mb-4" />

          <div className="flex mt-4 flex-wrap justify-end">
            {post.frontmatter.tags.map((tag) => (
              <div
                key={tag}
                className="text-primary-darken-50 text-xs border border-primary-darken rounded-lg px-2 mb-2 ml-2 bg-white"
              >
                {tag.replace(/-/g, ' ')}
              </div>
            ))}
          </div>
        </div>
      </Layout>
    </>
  )
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    site {
      siteMetadata {
        siteUrl
        author
        profileUrl
        thumbnailUrl
      }
    }

    mdx(frontmatter: { path: { eq: $path } }) {
      body
      frontmatter {
        createdAt(formatString: "YYYY.MM.DD")
        path
        title
        tags
        category
        description
        thumbnailUrl {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      excerpt(pruneLength: 70, truncate: true)
    }
  }
`

export default PostTemplate
