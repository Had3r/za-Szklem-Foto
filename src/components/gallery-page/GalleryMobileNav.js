import React from 'react';
import classNames from 'classnames';

import {
  SelectWrapper,
  Selection,
  SelectTrigger,
  SelectedText,
  Options,
  Option,
  Arrow,
} from './Gallery.styles';

export const GalleryMobileNav = ({
  dropdownOpen,
  selected,
  categories,
  imagesChange,
  changeDropdown,
}) => {
  const isSelected = category => selected === category;
  return (
    <SelectWrapper onClick={() => changeDropdown()}>
      <Selection className={classNames({ open: dropdownOpen })}>
        <SelectTrigger>
          <SelectedText>{selected}</SelectedText>
          <Arrow />
        </SelectTrigger>
        <Options className="custom-options">
          {categories.map((category, idx) => (
            <Option
              key={category + idx}
              onClick={() => imagesChange(category)}
              onKeyDown={() => imagesChange(category)}
              role="button"
              tabIndex="0"
              className={classNames({ selected: isSelected(category) })}>
              {category}
            </Option>
          ))}
        </Options>
      </Selection>
    </SelectWrapper>
  );
};
