import styled from 'styled-components';

// Components
import Button from '../button/Button';
import LinkButton from '../linkButton/LinkButton';

const LinkButtonHoc = LinkButton(Button);

const PageNotFound = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

const Paragraph = styled.span`
  font-size: 2em;
  margin-bottom: 2rem;
  text-align: center;
`;

const Title = styled(Paragraph)`
  font-size: 4em;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.blueLight};
  
  @media ${({ theme }) => theme.mediaQueries.tablet} {
    font-size: 8em;
  }
`;

const HomepageButton = styled(LinkButtonHoc)`
  width: auto;
`;

export {
  PageNotFound,
  Title,
  Paragraph,
  HomepageButton,
};
