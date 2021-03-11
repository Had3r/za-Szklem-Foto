import React from 'react';
import { useHeroData } from '../../graphql/useHeroSliderData';
import MultipleCarousel from '../MultipleCarousel';
import BackgroundImage from 'gatsby-background-image-es5';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import {
  Section,
  Wrapper,
  TextContent,
  Heading,
  Paragraph,
  ScrollDown,
  Slide,
} from './Hero.styles';

export const Hero = () => {
  const heroData = useHeroData().sort((a, b) => a.node.order - b.node.order);
  return (
    <Section data-test="component-hero">
      <MultipleCarousel data-test="carousel-display" appendDots autoplaySpeed={7000} arrType="hero">
        {heroData.map(singleItem => {
          const { image, textPrimary, textSecondary, textTertiary, id } = singleItem.node;
          return (
            <Slide key={id}>
              <Wrapper>
                <TextContent>
                  <Heading>{textPrimary}</Heading>
                  <Paragraph>{textSecondary}</Paragraph>
                  <Paragraph>{textTertiary}</Paragraph>
                </TextContent>
              </Wrapper>
              <BackgroundImage className="background" preserveStackingContext fluid={image.fluid} />
            </Slide>
          );
        })}
      </MultipleCarousel>
      <AnchorLink to="/#about-me">
        <ScrollDown aria-label="Scroll Down">
          <span />
        </ScrollDown>
      </AnchorLink>
    </Section>
  );
};
