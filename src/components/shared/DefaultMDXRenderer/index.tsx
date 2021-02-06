import React from 'react'
import { MDXRenderer } from 'gatsby-plugin-mdx'

const DefaultMDXRenderer = (props) => {
  const components = {
    wrapper: (props) => <main className="markdown-content" {...props} />,
  }

  return <MDXRenderer components={components} {...props} />
}

export default DefaultMDXRenderer
