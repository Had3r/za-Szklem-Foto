import React from 'react';
import useHeroSliderData from '../graphql/useHeroSliderData';
import MultipleCarousel from './MultipleCarousel';
import BackgroundImage from 'gatsby-background-image-es5';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import {
  Section,
  Wrapper,
  TextContent,
  HeadingPrimary,
  Paragraph,
  ScrollDown,
} from './Hero.styles';

export const Hero = () => {
  const heroData = useHeroSliderData();
  return (
    <Section>
      <MultipleCarousel appendDots autoplaySpeed={4500} arrType="hero">
        {heroData.map(singleItem => {
          const { image, headingPrimary, headingSecondary: paragraphText, id } = singleItem.node;
          return (
            <div key={id}>
              <Wrapper>
                <TextContent>
                  <HeadingPrimary>{headingPrimary}</HeadingPrimary>
                  <Paragraph>{paragraphText}</Paragraph>
                </TextContent>
              </Wrapper>
              <BackgroundImage className="background" preserveStackingContext fluid={image.fluid} />
            </div>
          );
        })}
      </MultipleCarousel>
      <AnchorLink to="/#about-me">
        <ScrollDown>
          <span />
        </ScrollDown>
      </AnchorLink>
    </Section>
  );
};
