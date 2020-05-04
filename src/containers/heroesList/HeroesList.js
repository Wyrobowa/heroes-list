import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Components
import Button from '../../components/button/Button';
import Icon from '../../components/icon/Icon';
import Loader from '../../components/loader/Loader';

// Services
import { fetchData } from '../../services/requestService';

// Styles
import * as Styled from './heroesListStyles';

const HeroesList = () => {
  const [heroesList, setHeroesList] = useState([]);
  const [fetchingData, setFetchingData] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchData('http://localhost:4000/heroes');
      setHeroesList(data.data);
    };

    getData();
    setFetchingData(false);
  }, []);

  const handleOnClick = ({ target }) => {
    console.log(target);
  };

  return (
    <Loader loading={fetchingData}>
      <Button type="button" color="green" onClick={handleOnClick}>
        <Icon name="plus" />
        Add hero
      </Button>
      <Styled.Table>
        <Styled.Header>
          <Styled.NameColumn>Heroes</Styled.NameColumn>
          <Styled.TypeColumn>Type</Styled.TypeColumn>
          <Styled.DescriptionColumn>Description</Styled.DescriptionColumn>
        </Styled.Header>
        {heroesList.length > 0 && heroesList.map(hero => (
          <Styled.Row key={hero.id}>
            <Styled.TitleWrapper>
              <Styled.HeroAvatar src={hero.avatar_url} alt={hero.full_name} size="small" />
              <Styled.NameAndType>
                <Styled.Name>{hero.full_name}</Styled.Name>
                <Styled.Cell>{hero.type && hero.type.name}</Styled.Cell>
              </Styled.NameAndType>
            </Styled.TitleWrapper>
            <Styled.Description>{hero.description}</Styled.Description>
            <Link to={`/hero/${hero.id}`}>Click</Link>
          </Styled.Row>
        ))}
      </Styled.Table>
    </Loader>
  );
};

export default HeroesList;
