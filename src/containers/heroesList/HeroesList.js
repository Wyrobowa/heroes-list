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
        <Styled.TableHeader>
          <div>Heroes</div>
          <div>Type</div>
          <div>Description</div>
        </Styled.TableHeader>
        {heroesList.length > 0 && heroesList.map(hero => (
          <Styled.TableRow key={hero.id}>
            <div>{hero.full_name}</div>
            <div>{hero.type && hero.type.name}</div>
            <div>{hero.description}</div>
          </Styled.TableRow>
        ))}
      </Styled.Table>
    </>
  );
};

export default HeroesList;
