export const GET_HEROES_LIST_SUCCESSFUL = 'GET_HEROES_LIST_SUCCESSFUL';
export const GET_HEROES_LIST_UNSUCCESSFUL = 'GET_HEROES_LIST_UNSUCCESSFUL';
export const ADD_HERO = 'ADD_HERO';
export const EDIT_HERO = 'EDIT_HERO';
export const DELETE_HERO = 'DELETE_HERO';
export const SET_LOADING_STATUS = 'SET_LOADING_STATUS';

export const getHeroesListSuccessful = payload => ({
  type: GET_HEROES_LIST_SUCCESSFUL,
  payload,
});

export const getHeroesListUnsuccessful = () => ({
  type: GET_HEROES_LIST_UNSUCCESSFUL,
});

export const addHero = data => ({
  type: ADD_HERO,
  data,
});

export const editHero = (data, id) => ({
  type: EDIT_HERO,
  data,
  id,
});

export const deleteHero = id => ({
  type: DELETE_HERO,
  id,
});

export const setLoadingStatus = status => ({
  type: SET_LOADING_STATUS,
  status,
});

export const requestHeroesList = () => (dispatch, getState) => {
  dispatch(setLoadingStatus(true));
  const { quantity } = getState().heroesList;

  fetch(`http://localhost:4000/heroes?first=${quantity}`)
    .then(res => res.json())
    .then(json => dispatch(getHeroesListSuccessful(json)))
    .catch(() => dispatch(getHeroesListUnsuccessful()));
};
