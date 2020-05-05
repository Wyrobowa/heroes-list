import React from 'react';
import { Route, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

// Components
import Modal from '../modal/Modal';

const ModalRoute = ({ path, component: Component, background }) => {
  const { pathname } = useLocation();

  return (
    <>
      {(background && pathname === path) && (
        <Route path={path}><Modal><Component /></Modal></Route>
      )}
    </>
  );
};

ModalRoute.propTypes = {
  path: PropTypes.string.isRequired,
  component: PropTypes.elementType.isRequired,
  background: PropTypes.shape({}),
};

ModalRoute.defaultProps = {
  background: undefined,
};

export default ModalRoute;
