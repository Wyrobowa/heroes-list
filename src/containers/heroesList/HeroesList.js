import React, { useState, useEffect } from 'react';

// Components
import Button from '../../components/button/Button';
import Icon from '../../components/icon/Icon';

// Services
import { fetchData } from '../../services/requestService';

// Styles
import * as Styled from './heroesListStyles';

const HeroesList = () => {
  const [heroesList, setHeroesList] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchData('http://localhost:4000/heroes');
      setHeroesList(data);
    };

    getData();
  }, []);

  const handleOnClick = ({ target }) => {
    console.log(target);
  };

  return (
    <>
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
              <Styled.Avatar />
              <Styled.NameAndType>
                <Styled.Name>{hero.full_name}</Styled.Name>
                <Styled.Cell>{hero.type && hero.type.name}</Styled.Cell>
              </Styled.NameAndType>
            </Styled.TitleWrapper>
            <Styled.Description>{hero.description}</Styled.Description>
          </Styled.Row>
        ))}
      </Styled.Table>
    </>
  );
};

export default HeroesList;
