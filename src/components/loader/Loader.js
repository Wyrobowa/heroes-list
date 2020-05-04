import React from 'react';
import PropTypes from 'prop-types';

// Styles
import * as Styled from './loaderStyled';

const Loader = ({ loading, children }) => (
  <>
    {loading
      ? (
        <Styled.LoaderSpinner>
          <Styled.Spinner />
          <Styled.Spinner />
        </Styled.LoaderSpinner>
      ) : (
        <>{children}</>
      )}
  </>
);

Loader.propTypes = {
  loading: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

export default Loader;
