import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// Services
import { fetchData } from '../../services/requestService';

// Styles
import * as Styled from './heroStyles';
import Button from '../../components/button/Button';
import Icon from '../../components/icon/Icon';

const Hero = ({ match }) => {
  const [hero, setHero] = useState({});

  const { id } = match.params;

  useEffect(() => {
    const getData = async () => {
      const data = await fetchData(`http://localhost:4000/heroes/${id}`);
      setHero(data);
    };

    getData();
  }, [id]);

  const handleOnClick = ({ target }) => {
    console.log(target);
  };

  return (
    <Styled.Hero>
      {hero && (
        <>
          <Styled.Avatar />
          <Styled.Name>{hero.full_name}</Styled.Name>
          <Styled.Cell>{hero.type && hero.type.name}</Styled.Cell>
          <Styled.Cell>{hero.description}</Styled.Cell>
          <Button color="transparent" font="red" onClick={handleOnClick} type="button">
            <Icon name="trash" />
            Delete hero
          </Button>
        </>
      )}
    </Styled.Hero>
  );
};

Hero.propTypes = {
  match: PropTypes.shape({
    isExact: PropTypes.bool,
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
    path: PropTypes.string,
    url: PropTypes.string,
  }).isRequired,
};

export default Hero;
