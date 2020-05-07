import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

// Actions
import * as actions from '../../actions/heroesListActions';

// Components
import Button from '../../components/button/Button';
import Icon from '../../components/icon/Icon';
import LinkButton from '../../components/linkButton/LinkButton';
import Loader from '../../components/loader/Loader';

// Reducers
import * as reducer from '../../reducers/heroesListReducer';

// Styles
import * as Styled from './heroesListStyles';

const LinkButtonHoc = LinkButton(Button);

const HeroesList = ({ heroesList, getHeroesListAction }) => {
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    getHeroesListAction();
  }, []);

  const handleOnClick = ({ currentTarget }) => {
    const url = currentTarget.getAttribute('data-url');
    history.push({
      pathname: url,
      state: { background: location },
    });
  };

  return (
    <Loader loading={!heroesList.length}>
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
          <div>Heroes</div>
          <div>Type</div>
          <div>Description</div>
        </Styled.Header>
        {heroesList.length > 0 && heroesList.map(hero => (
          <Styled.Row key={hero.id} onClick={handleOnClick} data-url={`/viewHero/${hero.id}`}>
            <Styled.HeroAvatar src={hero.avatar_url} alt={hero.full_name} size="small" />
            <Styled.Name>{hero.full_name}</Styled.Name>
            <Styled.Type>{hero.type && hero.type.name}</Styled.Type>
            <Styled.Description>{hero.description}</Styled.Description>
          </Styled.Row>
        ))}
      </Styled.Table>
    </Loader>
  );
};

HeroesList.propTypes = {
  heroesList: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({}),
  ])).isRequired,
  getHeroesListAction: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  heroesList: reducer.getHeroesList(state),
});

export default connect(
  mapStateToProps,
  {
    getHeroesListAction: actions.requestHeroesList,
  },
)(HeroesList);
