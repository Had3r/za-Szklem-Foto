import { graphql, useStaticQuery } from 'gatsby';

export default function useSiteMetadata() {
  const data = useStaticQuery(graphql`
    query getSiteMetadata {
      site {
        siteMetadata {
          title
          description
          shortName
          siteUrl
          mainIcon
          canonical
        }
      }
    }
  `);
  return data.site.siteMetadata;
}
