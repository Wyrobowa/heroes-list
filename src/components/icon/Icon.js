import React from 'react';
import PropTypes from 'prop-types';

// Styles
import * as Styled from './iconStyles';

const Icon = ({ name }) => (
  <Styled.Icon className={`fas fa-${name}`} />
);

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Icon;
