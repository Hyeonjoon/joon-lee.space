import { Link } from 'gatsby'
import React from 'react'
import Img from 'gatsby-image'

const PostListItem = ({ post }) => {
  return (
    <li>
      <Link to={post.frontmatter.path}>
        <div className="p-4 md:p-0 md:py-8">
          <div className="mb-1 md:mb-2">
            <span className="bg-primary bg-opacity-50 px-1.5 text-sm md:text-base">
              {post.frontmatter.category}
            </span>
          </div>
          <div className="grid grid-cols-12">
            <h1 className="text-lg md:text-2xl col-span-12 md:col-span-9 mb-2">
              {post.frontmatter.title}
            </h1>
            <div className="col-span-9 md:row-start-2 text-sm md:text-base flex flex-col justify-center md:py-2">
              <p className="overflow-ellipsis break-words overflow-hidden h-10 md:h-12 text-gray-400">
                {post.frontmatter.description && (
                  <>
                    <span className="text-gray-600">
                      {post.frontmatter.description}
                    </span>{' '}
                    |{' '}
                  </>
                )}
                {post.excerpt}
              </p>
              <div className="flex mt-2 md:mt-4 text-gray-500">
                <span>{post.frontmatter.createdAt}</span>
              </div>
            </div>
            {post.frontmatter.thumbnailUrl && <div className="col-span-3 justify-self-stretch self-stretch md:col-start-10 md:row-start-1 md:row-end-3 ml-2 md:ml-6">
              <Img
                fluid={post.frontmatter.thumbnailUrl.childImageSharp.fluid}
                alt={post.frontmatter.title}
                className="w-full h-full"
              />
            </div>}
          </div>
        </div>
      </Link>
    </li>
  )
}

export default PostListItem
