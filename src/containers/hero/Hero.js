import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// Components
import Button from '../../components/button/Button';
import Icon from '../../components/icon/Icon';

// Services
import { fetchData } from '../../services/requestService';

// Styles
import * as Styled from './heroStyles';
import Loader from '../../components/loader/Loader';

const Hero = ({ match }) => {
  const [hero, setHero] = useState({});
  const [fetchingData, setFetchingData] = useState(true);

  const { id } = match.params;

  useEffect(() => {
    const getData = async () => {
      const data = await fetchData(`http://localhost:4000/heroes/${id}`);
      setHero(data);
    };

    getData();
    setFetchingData(false);
  }, [id]);

  const handleOnClick = ({ target }) => {
    console.log(target);
  };

  return (
    <Loader loading={fetchingData}>
      <Styled.Hero>
        {hero && (
          <>
            <Styled.HeroAvatar src={hero.avatar_url || 'none'} alt={hero.full_name} />
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
    </Loader>
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
