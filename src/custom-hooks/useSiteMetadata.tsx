import { useStaticQuery, graphql } from 'gatsby'

interface SiteMetadataI {
  author: string
  description: string
  favicon: string
  title: string
}

export const useSiteMetadata = (): SiteMetadataI => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            author
            description
            favicon
            title
          }
        }
      }
    `
  )
  return site.siteMetadata
}
