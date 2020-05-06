import styled from 'styled-components';

// Components
import Avatar from '../../components/avatar/Avatar';
import LinkButton from '../../components/linkButton/LinkButton';
import Button from '../../components/button/Button';

const LinkButtonHoc = LinkButton(Button);

const Hero = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
`;

const HeroAvatar = styled(Avatar)`
  margin-bottom: 2em;
`;

const Cell = styled.div`
  margin-bottom: 2em;
`;

const Name = styled(Cell)`
  margin-bottom: .5em;
  font-weight: bold;
  font-size: 1.2em;
`;

const EditButton = styled(LinkButtonHoc)`
  margin-bottom: 1em;
`;

export {
  Hero,
  HeroAvatar,
  Cell,
  Name,
  EditButton,
};
