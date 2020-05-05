import styled from 'styled-components';

// Components
import Avatar from '../../components/avatar/Avatar';

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
  margin-bottom: 2em;
`;

export {
  Hero,
  Title,
  HeroAvatar,
};
