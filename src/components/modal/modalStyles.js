import styled from 'styled-components';

// Components
import Button from '../button/Button';
import Icon from '../icon/Icon';

const ModalWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.transparentGrey};
`;

const Modal = styled.div`
  position: relative;
  width: 50%;
  box-sizing: border-box;
  padding: 2em;
  background-color: ${({ theme }) => theme.colors.grey95};
  border-radius: 1em;
`;

const CloseButton = styled(Button)`
  position: absolute;
  top: 2em;
  right: 2em;
  padding: 0;
`;

const CloseIcon = styled(Icon)`
  margin: 0;
`;

export {
  ModalWrapper,
  Modal,
  CloseButton,
  CloseIcon,
};
