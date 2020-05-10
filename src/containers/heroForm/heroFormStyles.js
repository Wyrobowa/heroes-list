import styled from 'styled-components';

// Components
import Avatar from '../../components/avatar/Avatar';
import Button from '../../components/button/Button';

const Hero = styled.div`
  display: flex;
  flex-flow: column;
`;

const Title = styled.span`
  margin-bottom: 2em;
  font-weight: bold;
  font-size: 1.2em;
`;

const HeroAvatar = styled(Avatar)`
  margin-bottom: 1em;
`;

const SaveButton = styled(Button)`
  width: 100%;
  margin-top: 1em;
`;

export {
  Hero,
  Title,
  HeroAvatar,
  SaveButton,
};
