import React, { useState, useEffect } from 'react';
import { useParams, useHistory, useLocation } from 'react-router-dom';

// Components
import Button from '../../components/button/Button';
import Icon from '../../components/icon/Icon';

// Services
import { fetchData } from '../../services/requestService';

// Styles
import * as Styled from './heroStyles';
import Loader from '../../components/loader/Loader';

const Hero = () => {
  const [hero, setHero] = useState({});
  const [fetchingData, setFetchingData] = useState(true);

  const { id } = useParams();
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    const getData = async () => {
      const data = await fetchData(`http://localhost:4000/heroes/${id}`);
      setHero(data);
    };

    getData();
    setFetchingData(false);
  }, [id]);

  const handleOnClick = ({ currentTarget }) => {
    const url = currentTarget.getAttribute('data-url');
    history.push({
      pathname: url,
      state: { background: location },
    });
  };

  const handleDelete = ({ target }) => {
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
            <Styled.EditButton
              type="button"
              color="transparent"
              font="green"
              to={{
                pathname: `/editHero/${hero.id}`,
                state: { background: location.state.background },
              }}
              history={history}
            >
              <Icon name="pen" />
              Edit hero
            </Styled.EditButton>
            <Button
              type="button"
              color="transparent"
              font="red"
              onClick={handleDelete}
            >
              <Icon name="trash" />
              Delete hero
            </Button>
          </>
        )}
      </Styled.Hero>
    </Loader>
  );
};

export default Hero;
