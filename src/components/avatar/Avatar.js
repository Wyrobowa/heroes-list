import React from 'react';
import PropTypes from 'prop-types';

// Styles
import * as Styled from './avatarStyles';

const Avatar = ({
  src, alt, size, className,
}) => (
  <Styled.Avatar src={src} alt={alt} size={size} className={className} />
);

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  className: PropTypes.string,
};

Avatar.defaultProps = {
  size: 'medium',
  className: '',
};

export default Avatar;
