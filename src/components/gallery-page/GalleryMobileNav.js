import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import {
  SelectWrapper,
  Selection,
  SelectTrigger,
  SelectedText,
  Options,
  Option,
  Arrow,
} from './GalleryMobileNav.styles';

/**
 * Renders a <GalleryMobileNav /> component
 * @param {object} props
 * @param {boolean} props.dropdownOpen - boolean reports on the status of the dropdown
 * @param {string} props.selected - selected default category
 * @param {func} props.imagesChange - function that passes the selected category
 * @param {func} props.changeDropdown - function that closes or opens a dropdown
 */
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

GalleryMobileNav.propTypes = {
  dropdownOpen: PropTypes.bool.isRequired,
  selected: PropTypes.string.isRequired,
  categories: PropTypes.array.isRequired,
  imagesChange: PropTypes.func.isRequired,
  changeDropdown: PropTypes.func.isRequired,
};
