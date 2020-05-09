import React from 'react';
import {
  EuiHeader,
  EuiHeaderLink,
  EuiHeaderLinks,
  EuiHeaderLogo,
  EuiHeaderSectionItem,
  EuiHeaderSectionItemButton,
  EuiButton,
} from '@elastic/eui';
import PropTypes from 'prop-types';

import resume from './Kaizen_Conroy_Fall_2020_Resume.pdf';

const HeaderLink = ({ title }) => {
  const titleHref = () => {
    return '#' + title.toLowerCase().split(' ').join('-');
  };

  return <EuiHeaderLink href={titleHref()}>{title}</EuiHeaderLink>;
};

HeaderLink.propTypes = {
  title: PropTypes.string.isRequired,
};

const Header = ({ sections, className }) => {
  return (
    <EuiHeader className={className}>
      <EuiHeaderSectionItem border='right'>
        <EuiHeaderLogo iconType='logoAWS' href='#'>
          Kaizen Conroy
        </EuiHeaderLogo>
      </EuiHeaderSectionItem>

      <EuiHeaderLinks>
        {sections.map((section) => (
          <HeaderLink title={section} key={section} />
        ))}
      </EuiHeaderLinks>
      <EuiHeaderSectionItem>
      &emsp;
      <EuiButton href={resume} iconType="arrowRight" color="text"> Resume </EuiButton>
      &emsp;
      </EuiHeaderSectionItem>
    </EuiHeader>
  );
};

Header.propTypes = {
  sections: PropTypes.array,
};

Header.defaultProps = {
  sections: [],
};

export default Header;
