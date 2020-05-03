import React from 'react';
import PropTypes from 'prop-types';

// Styles
import * as Styled from './avatarStyles';

const Avatar = ({ src, alt, size }) => (
  <Styled.Avatar src={src} alt={alt} size={size} />
);

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

Avatar.defaultProps = {
  size: 'medium',
};

export default Avatar;
