import React from 'react';
import PropTypes from 'prop-types';

// Styles
import * as Styled from './loaderStyled';

const Loader = ({ loading, overlay, children }) => (
  <>
    {loading && (
      <Styled.Loader overlay={overlay}>
        <Styled.LoaderSpinner>
          <Styled.Spinner />
          <Styled.Spinner />
        </Styled.LoaderSpinner>
      </Styled.Loader>
    )}
    <>{children}</>
  </>
);

Loader.propTypes = {
  loading: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  overlay: PropTypes.bool,
};

Loader.defaultProps = {
  overlay: false,
};

export default Loader;
