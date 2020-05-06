import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams, useHistory, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

// Actions
import * as heroActions from '../../actions/heroActions';
import * as heroesListActions from '../../actions/heroesListActions';

// Components
import Button from '../../components/button/Button';
import Icon from '../../components/icon/Icon';
import Loader from '../../components/loader/Loader';

// Reducers
import * as heroReducer from '../../reducers/heroReducer';

// Services
import { requester } from '../../services/requestService';

// Styles
import * as Styled from './heroStyles';

const Hero = ({ hero, getHeroAction, deleteHeroAction }) => {
  const { id } = useParams();
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    getHeroAction(id);
  }, [id]);

  const handleDelete = async event => {
    event.preventDefault();

    await requester(`http://localhost:4000/heroes/${id}`, 'DELETE');

    deleteHeroAction(id);

    history.push('/');
  };

  return (
    <Loader loading={!hero.id}>
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
  deleteHeroAction: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  hero: heroReducer.getHero(state),
});

export default connect(
  mapStateToProps,
  {
    getHeroAction: heroActions.requestHero,
    deleteHeroAction: heroesListActions.deleteHero,
  },
)(Hero);
