import React from 'react';
import PropTypes from 'prop-types';

import {
  Header,
  Wrapper,
  Heading,
  Paragraph,
  SingleSubtitle,
  ScrollDown,
} from './PageHeader.styles';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import { MdArrowDownward } from '../../assets/icons/icons';
/**
 *
 * @param {object} props
 * @param {string} props.title
 * @param {string} props.subtitle
 * @param {string} props.singleSubtitle
 * @param {Object} props.additionalOptions
 */
export const PageHeader = ({ title, subtitle, singleSubtitle, additionalOptions }) => {
  const { mobileWrapper, desktopBg, mobileBg, arrow } = additionalOptions;
  return (
    <Header
      id="naglowek-formularza"
      mobileBg={mobileBg}
      desktopBg={desktopBg}
      mobileWrapper={mobileWrapper}
      className="long-line">
      <Wrapper singleSubtitle>
        {singleSubtitle ? (
          <SingleSubtitle>{singleSubtitle}</SingleSubtitle>
        ) : (
          <>
            <Heading className="short-line">{title}</Heading>
            <Paragraph>{subtitle}</Paragraph>
          </>
        )}
        {mobileWrapper && arrow && (
          <AnchorLink to="/oferta/#szczegoly">
            <ScrollDown>
              <MdArrowDownward />
            </ScrollDown>
          </AnchorLink>
        )}
      </Wrapper>
    </Header>
  );
};

PageHeader.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  singleSubtitle: PropTypes.string,
  additionalOptions: PropTypes.object,
};

PageHeader.defaultProps = {
  singleSubtitle: '',
};
