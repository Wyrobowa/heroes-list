export const GET_HEROES_LIST_SUCCESSFUL = 'GET_HEROES_LIST_SUCCESSFUL';
export const GET_HEROES_LIST_UNSUCCESSFUL = 'GET_HEROES_LIST_UNSUCCESSFUL';
export const ADD_HERO = 'ADD_HERO';
export const EDIT_HERO = 'EDIT_HERO';
export const DELETE_HERO = 'DELETE_HERO';

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

export const requestHeroesList = () => dispatch => {
  fetch('http://localhost:4000/heroes')
    .then(res => res.json())
    .then(json => dispatch(getHeroesListSuccessful(json.data)))
    .catch(() => dispatch(getHeroesListUnsuccessful()));
};
