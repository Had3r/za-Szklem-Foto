import styled from 'styled-components';
import tw from 'twin.macro';

export const Header = styled.header`
  ${tw`mx-auto relative`};
  ${props => (props.mobileWrapper ? tw`mx-4 -mt-20 md:mt-0 md:mx-0` : '')};
  background: ${props => (props.mobileBg ? props.mobileBg : '#fff')};

  @media screen and (min-width: 768px) {
    background: ${props => (props.desktopBg ? props.desktopBg : '#fff')};
  }

  a {
    ${tw`md:hidden`}
  }
`;

export const Wrapper = styled.div`
  ${tw`container pb-12 pt-4 md:pt-10 px-4`};
`;

export const Heading = styled.h2`
  ${tw`text-center`};
`;

export const Paragraph = styled.p`
  ${tw`text-center`}
`;

export const SingleSubtitle = styled.p`
  ${tw`text-center text-2xl max-w-2xl mx-auto md:mt-10 leading-normal md:leading-loose`};
`;

export const ScrollDown = styled.span`
  ${tw`absolute w-12 h-12 bg-secondary block absolute rounded-full text-3xl flex justify-center items-center text-white cursor-pointer`};
  bottom: -25px;
  right: 10px;
`;
