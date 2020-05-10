import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

// Actions
import { requestHeroesList } from '../../actions/heroesListActions';

// Components
import Button from '../../components/button/Button';
import Icon from '../../components/icon/Icon';
import LinkButton from '../../components/linkButton/LinkButton';
import Loader from '../../components/loader/Loader';

// Reducers
import {
  getHeroesList, getLoadingStatus, getQuantity, getTotalCount,
} from '../../reducers/heroesListReducer';

// Services
import observerService from '../../services/observerService';

// Styles
import * as Styled from './heroesListStyles';

const LinkButtonHoc = LinkButton(Button);

const HeroesList = ({
  heroesList, loadingStatus, getHeroesListAction, totalCount,
}) => {
  const history = useHistory();
  const location = useLocation();
  const [shouldDisplayNoMoreMessage, setShouldDisplayNoMoreMessage] = useState(false);
  const borderBottomRef = useRef(null);
  const observedElement = useRef(null);

  useEffect(() => {
    const borderBottomElement = borderBottomRef.current;
    observedElement.current = observerService.intersectionObserver(
      borderBottomElement, getHeroesListAction,
    );

    return function cleanup() {
      observedElement.current.unobserve(borderBottomElement);
    };
  }, [getHeroesListAction]);

  useEffect(() => {
    if (heroesList.length === totalCount) {
      observedElement.current.unobserve(borderBottomRef.current);
      setShouldDisplayNoMoreMessage(true);
    }
  }, [totalCount, heroesList]);

  const handleOnClick = ({ currentTarget }) => {
    const url = currentTarget.getAttribute('data-url');
    history.push({
      pathname: url,
      state: { background: location },
    });
  };

  return (
    <Loader loading={loadingStatus}>
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
      <Styled.BottomBorder ref={borderBottomRef} />
      {shouldDisplayNoMoreMessage
        && (
          <Styled.BottomMessage>No more heroes to load</Styled.BottomMessage>
        )}
    </Loader>
  );
};

HeroesList.propTypes = {
  heroesList: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({}),
  ])).isRequired,
  getHeroesListAction: PropTypes.func.isRequired,
  loadingStatus: PropTypes.bool.isRequired,
  totalCount: PropTypes.number,
};

HeroesList.defaultProps = {
  totalCount: null,
};

const mapStateToProps = state => ({
  heroesList: getHeroesList(state),
  loadingStatus: getLoadingStatus(state),
  quantity: getQuantity(state),
  totalCount: getTotalCount(state),
});

export default connect(
  mapStateToProps,
  {
    getHeroesListAction: requestHeroesList,
  },
)(HeroesList);
