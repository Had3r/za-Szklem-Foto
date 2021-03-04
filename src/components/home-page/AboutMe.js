import React from 'react';
import { Link } from 'gatsby';
import OptimizedImage from '../OptimizedImage';

import { Section, TextPart, ImagePart, Frame, Paragraph } from './AboutMe.styles';

export const AboutMe = () => {
  return (
    <Section id="about-me">
      <TextPart>
        <h3>o mnie</h3>
        <h2>Profesjonalne zdjęcia i doskonałe wrażenia z sesji.</h2>
        <Paragraph>
          Uchwycę najlepszą wersję Ciebie i sprawię, że poczujesz się wspaniale. Fotografuję ludzi,
          których kochasz najbardziej i którzy są dla Ciebie najcenniejsi: rodzinę, dzieci,
          bliskich. Utrwalam wyjątkowe wydarzenia i ważne momenty w Twoim życiu. Tworzę wspomnienia,
          które trwają wiecznie. Robiąc to, sprawię, że się uśmiechniesz i zapewnię Ci zabawne i
          podnoszące na duchu doświadczenie.
        </Paragraph>
        <Link to="/oferta" className="link link-primary">
          Sprawdź ofertę
        </Link>
      </TextPart>
      <ImagePart>
        <Frame>
          <OptimizedImage className="img" src="/aboutMe.jpg" />
        </Frame>
      </ImagePart>
    </Section>
  );
};
