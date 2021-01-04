import React, { useState, useEffect } from 'react';
import { Layout, Banner } from '../components/index';
import classNames from 'classnames';
import styled from 'styled-components';
import tw from 'twin.macro';
import Img from 'gatsby-image';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import useSessionsData from '../graphql/useSessionsData';

export default () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selected, setSelected] = useState('Wszystko');
  const [images, setImages] = useState({ allImages: [], mainImage: {} });
  const [categories, setCategories] = useState([]);

  const sessions = useSessionsData();

  useEffect(() => {
    filterData('Wszystko');
    createCategories(sessions);
  }, []);

  const handleSelectWrapper = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleImageChange = category => {
    filterData(category);
    setSelected(category);
  };

  const isSelected = category => selected === category;

  const createCategories = sessions => {
    const categories = [
      'Wszystko',
      ...new Set(
        sessions.map(({ node }) => {
          return node.category;
        }),
      ),
    ];
    setCategories(categories);
  };

  const filterData = category => {
    if (category === 'Wszystko') {
      const allImages = sessions.map(el => el.node.multipleImages).flat();
      setImages({
        allImages,
        mainImage: allImages[0],
      });
    } else {
      const filteredData = sessions.filter(el => el.node.category === category)[0].node;
      setImages({
        allImages: filteredData.multipleImages,
        mainImage: filteredData.mainImage,
      });
    }
  };

  const wrapperStyle = {
    width: '100%',
    height: '100%',
  };

  return (
    <Layout>
      <Banner image={images.mainImage} />
      <Section className="long-line">
        <Wrapper>
          <Heading className="short-line">Galeria.</Heading>
          <Paragraph>Spójrz na rezultat mojej pracy. Jest świetny!</Paragraph>
        </Wrapper>
      </Section>
      <CategoryNavigation>
        <Navigation>
          <NavList>
            {categories.map(category => {
              const btnClasses = classNames('btn-primary', {
                active: category === selected,
              });
              return (
                <NavItem>
                  <NavButton className={btnClasses} onClick={() => handleImageChange(category)}>
                    {category}
                  </NavButton>
                </NavItem>
              );
            })}
          </NavList>
        </Navigation>
        <SelectWrapper onClick={handleSelectWrapper} onKeyDown={handleSelectWrapper}>
          <Selection className={classNames({ open: dropdownOpen })}>
            <SelectTrigger>
              <span>{selected}</span>
              <Arrow />
            </SelectTrigger>
            <Options className="custom-options">
              {categories.map(category => (
                <Option
                  key={category}
                  onClick={() => handleImageChange(category)}
                  onKeyDown={() => handleImageChange(category)}
                  role="button"
                  tabIndex="0"
                  className={classNames({ selected: isSelected(category) })}>
                  {category}
                </Option>
              ))}
            </Options>
          </Selection>
        </SelectWrapper>
      </CategoryNavigation>
      <GridGallery>
        {images.allImages.map(image => {
          return (
            <Zoom>
              <Img style={wrapperStyle} fluid={image.fluid} />
            </Zoom>
          );
        })}
      </GridGallery>
    </Layout>
  );
};

const Section = styled.section`
  ${tw`bg-secondary-gray`};
`;

const Wrapper = styled.div`
  ${tw`container py-12 px-4`};
`;

const Heading = styled.h2`
  ${tw`text-center`}
`;

const Paragraph = styled.p`
  ${tw`text-center mb-10`}
`;

const GridGallery = styled.div`
  ${tw`grid `};
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(auto, 100px);
  gap: 1px;
  margin: 0 1px;

  @media screen and (min-width: 530px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media screen and (min-width: 768px) {
    ${tw`container`}
    grid-auto-rows: minmax(auto, 200px);
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: minmax(auto, 200px);
    gap: 2px;
  }
  .gatsby-image-wrapper {
    ${tw`rounded-sm h-full`};
  }
`;

const CategoryNavigation = styled.div`
  ${tw`bg-secondary-gray mx-auto pb-16 px-4 md:pb-20`};
`;

const Navigation = styled.nav`
  ${tw`container hidden md:block`};
`;

const NavList = styled.ul`
  ${tw`text-center`};
`;

const NavItem = styled.li`
  ${tw`inline-block`};
`;

const NavButton = styled.button`
  ${tw`transition duration-500 ease-in-out`};
`;

const SelectWrapper = styled.div`
  ${tw`block md:hidden relative select-none w-64 mx-auto`};
`;

const Selection = styled.div`
  ${tw`relative bg-white flex flex-col border-primary-darker border-r-2 border-l-2 text-base`};

  &.open .custom-options {
    ${tw`opacity-100 visible `};
    pointer-events: all;
  }
`;

const SelectTrigger = styled.div`
  ${tw`relative flex justify-between items-center text-base px-4 text-black h-10 leading-tight cursor-pointer border-primary-darker border-t-2 border-b-2`};
`;

const Options = styled.div`
  ${tw`absolute block bg-white left-0 right-0 border-primary-darker border-2 opacity-0 invisible pointer-events-none z-10 transition-all duration-500`};
  border-top: 0;
  top: 100%;
`;

const Option = styled.span`
  ${tw`relative flex items-center px-4 text-gray-600 leading-relaxed h-10 cursor-pointer hover:bg-gray-300 transition-all duration-500`};

  &.selected {
    ${tw`text-white bg-blue-800`};
  }
`;

const Arrow = styled.div`
  ${tw`relative h-4 w-4`};

  &::before,
  &::after {
    ${tw`transition-all duration-500 absolute bottom-0 h-full`};
    content: '';
    width: 0.15rem;
  }

  &::before {
    ${tw`bg-blue-800 transform rotate-45`};
    left: -5px;
  }
  &::after {
    ${tw`bg-blue-800 transform -rotate-45`};
    left: 5px;
  }
  .open &::before {
    ${tw`transform -rotate-45`};
    left: -5px;
  }
  .open &::after {
    ${tw`transform rotate-45`};
    left: 5px;
  }
`;
