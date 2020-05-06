import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams, useHistory, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

// Actions
import * as actions from '../../actions/heroActions';

// Components
import Button from '../../components/button/Button';
import Icon from '../../components/icon/Icon';

// Reducers
import * as reducer from '../../reducers/heroReducer';

// Styles
import * as Styled from './heroStyles';
import Loader from '../../components/loader/Loader';

const Hero = ({ hero, getHeroAction }) => {
  const [fetchingData, setFetchingData] = useState(true);

  const { id } = useParams();
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    getHeroAction(id);
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
      {console.log(hero)}
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

Hero.propTypes = {
  hero: PropTypes.shape({
    id: PropTypes.string,
    full_name: PropTypes.string,
    description: PropTypes.string,
    avatar_url: PropTypes.string,
    type: PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    }),
  }).isRequired,
  getHeroAction: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  hero: reducer.getHero(state),
});

export default connect(
  mapStateToProps,
  {
    getHeroAction: actions.requestHero,
  },
)(Hero);
