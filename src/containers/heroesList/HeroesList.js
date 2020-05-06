import React, { useState, useEffect } from 'react';
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
  const [fetchingData, setFetchingData] = useState(true);

  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    getHeroesListAction();
    setFetchingData(false);
  }, []);

  const handleOnClick = ({ currentTarget }) => {
    const url = currentTarget.getAttribute('data-url');
    history.push({
      pathname: url,
      state: { background: location },
    });
  };

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
