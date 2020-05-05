import React, { useState, useEffect } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';

// Components
import Button from '../../components/button/Button';
import Icon from '../../components/icon/Icon';
import LinkButton from '../../components/linkButton/LinkButton';
import Loader from '../../components/loader/Loader';

// Services
import { fetchData } from '../../services/requestService';

// Styles
import * as Styled from './heroesListStyles';

const LinkButtonHoc = LinkButton(Button);

const HeroesList = () => {
  const [heroesList, setHeroesList] = useState([]);
  const [fetchingData, setFetchingData] = useState(true);

  const history = useHistory();
  const location = useLocation();

  const handleOnClick = ({ target }) => {
    const url = target.getAttribute('data-url');
    history.push(url);
  };

  useEffect(() => {
    const getData = async () => {
      const data = await fetchData('http://localhost:4000/heroes');
      setHeroesList(data.data);
    };

    getData();
    setFetchingData(false);
  }, []);

  return (
    <Loader loading={fetchingData}>
      <LinkButtonHoc
        type="button"
        color="green"
        to={{
          pathname: '/addHero',
          state: { background: location },
        }}
        history={history}
      >
        <Icon name="plus" />
        Add hero
      </LinkButtonHoc>
      <Styled.Table>
        <Styled.Header>
          <Styled.NameColumn>Heroes</Styled.NameColumn>
          <Styled.TypeColumn>Type</Styled.TypeColumn>
          <Styled.DescriptionColumn>Description</Styled.DescriptionColumn>
        </Styled.Header>
        {heroesList.length > 0 && heroesList.map(hero => (
          <Styled.Row key={hero.id} onClick={handleOnClick} data-url={`/viewHero/${hero.id}`}>
            <Styled.TitleWrapper>
              <Styled.HeroAvatar src={hero.avatar_url} alt={hero.full_name} size="small" />
              <Styled.NameAndType>
                <Styled.Name>{hero.full_name}</Styled.Name>
                <Styled.Cell>{hero.type && hero.type.name}</Styled.Cell>
              </Styled.NameAndType>
            </Styled.TitleWrapper>
            <Styled.Description>{hero.description}</Styled.Description>
          </Styled.Row>
        ))}
      </Styled.Table>
    </Loader>
  );
};

export default HeroesList;
