import { graphql, useStaticQuery } from 'gatsby';

export default function usePrivacyPolicy() {
  const data = useStaticQuery(graphql`
    {
      contentfulPrivacyPolicy {
        privacyPolicy {
          json
        }
      }
    }
  `);
  return data.contentfulPrivacyPolicy.privacyPolicy;
}
