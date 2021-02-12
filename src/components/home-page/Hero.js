import React from 'react';
import { useHeroData } from '../../graphql/useHeroSliderData';
import MultipleCarousel from '../MultipleCarousel';
import BackgroundImage from 'gatsby-background-image-es5';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import { Section, Wrapper, TextContent, Heading, Paragraph, ScrollDown } from './Hero.styles';

export const Hero = () => {
  const heroData = useHeroData();
  console.log(heroData);
  return (
    <Section data-test="component-hero">
      <MultipleCarousel
        data-test="carousel-display"
        appendDots
        autoplaySpeed={600000}
        arrType="hero">
        {heroData.map(singleItem => {
          const { image, textPrimary, textSecondary, textTertiary, id } = singleItem.node;
          return (
            <div key={id}>
              <Wrapper>
                <TextContent>
                  <Heading>{textPrimary}</Heading>
                  <Paragraph>{textSecondary}</Paragraph>
                  <Paragraph>{textTertiary}</Paragraph>
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
