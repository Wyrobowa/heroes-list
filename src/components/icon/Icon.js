import React from 'react';
import PropTypes from 'prop-types';

// Styles
import * as Styled from './iconStyles';

const Icon = ({ name, className }) => (
  <Styled.Icon className={`fas fa-${name} ${className}`} />
);

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
};

Icon.defaultProps = {
  className: '',
};

export default Icon;
