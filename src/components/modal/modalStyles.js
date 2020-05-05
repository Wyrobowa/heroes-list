import styled from 'styled-components';

// Components
import Button from '../button/Button';
import Icon from '../icon/Icon';

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.transparentGrey};
  overflow-y: auto;
  
  @media ${({ theme }) => theme.mediaQueries.tablet} {
    display: flex;
    justify-content: center;
    align-items: center;
    overflow-y: unset;
  }
`;

const Modal = styled.div`
  position: relative;
  width: 100%;
  box-sizing: border-box;
  padding: 2em;
  background-color: ${({ theme }) => theme.colors.grey95};
  
  @media ${({ theme }) => theme.mediaQueries.tablet} {
    width: 50%;
    border-radius: 1em;
  }
`;

const CloseButton = styled(Button)`
  width: auto;
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
