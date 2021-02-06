import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { useLocation } from '@reach/router'
import { useStaticQuery, graphql } from 'gatsby'

const SEO = ({ title, description, thumbnailUrl, article }) => {
  const { pathname } = useLocation()
  const {
    site: { siteMetadata },
  } = useStaticQuery(query)

  const seo = {
    title: title ? `${title} | ${siteMetadata.title}` : siteMetadata.title,
    description: description ?? siteMetadata.description,
    image: `${siteMetadata.siteUrl}${
      thumbnailUrl ?? siteMetadata.thumbnailUrl
    }`,
    url: `${siteMetadata.siteUrl}${pathname}`,
    article,
  }

  return (
    <Helmet>
      <title>{seo.title}</title>

      {seo.url && <link rel="canonical" href={seo.url} />}
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />


      {seo.url && <meta property="og:url" content={seo.url} />}

      {(article ? true : null) && <meta property="og:type" content="article" />}

      {seo.title && <meta property="og:title" content={seo.title} />}

      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}

      {seo.image && <meta property="og:image" content={seo.image} />}

      <meta name="twitter:card" content="summary_large_image" />

      {seo.title && <meta name="twitter:title" content={seo.title} />}

      {seo.description && (
        <meta name="twitter:description" content={seo.description} />
      )}

      {seo.image && <meta name="twitter:image" content={seo.image} />}
    </Helmet>
  )
}

export default SEO

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  thumbnailUrl: PropTypes.string,
  article: PropTypes.bool,
}

SEO.defaultProps = {
  title: null,
  description: null,
  thumbnailUrl: null,
  article: false,
}

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        title
        description
        siteUrl
        thumbnailUrl
      }
    }
  }
`
