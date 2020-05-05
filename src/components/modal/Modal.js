import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

// Styles
import * as Styled from './modalStyles';

const Modal = ({ children }) => {
  const history = useHistory();

  const goBack = e => {
    e.stopPropagation();
    history.goBack();
  };

  return (
    <Styled.ModalWrapper>
      <Styled.Modal>
        <Styled.CloseButton type="button" color="transparent" font="grey" onClick={goBack}>
          <Styled.CloseIcon name="times" />
        </Styled.CloseButton>
        {children}
      </Styled.Modal>
    </Styled.ModalWrapper>
  );
};

Modal.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Modal;
