import React, { useState, useEffect } from 'react';
import useSessionsData from '../../graphql/useSessionsData';
import 'react-medium-image-zoom/dist/styles.css';

import { GalleryDesktopNav } from './GalleryDesktopNav';
import { GalleryMobileNav } from './GalleryMobileNav';
import { GalleryGrid } from './GalleryGrid';

import { Wrapper, AdditionalText, CategoryNavigation } from './Gallery.styles';

export const GalleryContent = ({ location }) => {
  const presetCategory = location.state ? location.state.category : null;

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selected, setSelected] = useState(presetCategory || 'Wszystko');
  const [filteredImages, setFilteredImages] = useState([]);
  const [slicedImages, setSlicedImages] = useState([].slice(10));
  const [categories, setCategories] = useState([]);
  const [hasMore, setMore] = useState(filteredImages.length > 10);

  const sessions = useSessionsData();

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [hasMore, slicedImages]);

  useEffect(() => {
    filterData('Wszystko');
    createCategories(sessions);
  }, []);

  const loadImages = () => {
    const currentLength = slicedImages.length;
    const more = currentLength < filteredImages.length;
    const nextEdges = more ? filteredImages.slice(currentLength, currentLength + 20) : [];

    setMore(more);
    setSlicedImages([...slicedImages, ...nextEdges]);
  };

  const handleTouchEnd = () => {
    handleScroll();
  };

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight - 250
    ) {
      loadImages();
    }
  };

  const handleSelectWrapper = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleImageChange = category => {
    filterData(category);
    setSelected(category);
  };

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
      setSlicedImages(allImages.slice(0, 10));
      setFilteredImages(allImages);
    } else {
      const filteredData = sessions.filter(el => el.node.category === category)[0].node;
      setSlicedImages(filteredData.multipleImages.slice(0, 10));
      setFilteredImages(filteredData.multipleImages);
    }
  };

  return (
    <Wrapper>
      <CategoryNavigation>
        <GalleryDesktopNav
          selected={selected}
          categories={categories}
          imagesChange={category => handleImageChange(category)}
        />
        <GalleryMobileNav
          changeDropdown={() => handleSelectWrapper()}
          dropdownOpen={dropdownOpen}
          selected={selected}
          categories={categories}
          imagesChange={category => handleImageChange(category)}
        />
      </CategoryNavigation>
      <GalleryGrid images={slicedImages} />
      {hasMore && <AdditionalText>Przewiń w dół, aby załadować więcej...</AdditionalText>}
    </Wrapper>
  );
};
