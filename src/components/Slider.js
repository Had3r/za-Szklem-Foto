import React from 'react';

import useTestimonial from '../graphql/useTestimonial';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { nanoid } from 'nanoid';
import Img from 'gatsby-image';

export default () => {
  const testimonialData = useTestimonial();
  return (
    <article>
      {/* {testimonialData.map(({ node }) => (
        <div key={nanoid()}>
          <div>{node.personsName}</div>
          <div className="">{documentToReactComponents(node.customerOpinion.json)}</div>
          <div className="">
            <Img fluid={node.authorPhoto.fluid} />
          </div>
        </div>
      ))} */}
    </article>
  );
};
