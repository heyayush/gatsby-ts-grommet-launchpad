import React, { FC } from 'react'
import { Helmet } from 'react-helmet'
import { withPrefix } from 'gatsby'
import { useSiteMetadata } from '../../custom-hooks/useSiteMetadata'

const Head: FC = () => {
  const siteMetadata = useSiteMetadata()
  const { title, description, author, favicon } = siteMetadata

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={description} />
      <meta name="author" content={author} />
      <link rel="shortcut icon" type="image/jpg" href={withPrefix(favicon)} />
    </Helmet>
  )
}
export default Head
