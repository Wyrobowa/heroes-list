export const GET_HEROES_LIST_SUCCESSFUL = 'GET_HEROES_LIST_SUCCESSFUL';
export const GET_HEROES_LIST_UNSUCCESSFUL = 'GET_HEROES_LIST_UNSUCCESSFUL';
export const ADD_HEROES_LIST = 'ADD_HEROES_LIST';
export const EDIT_HEROES_LIST = 'EDIT_HEROES_LIST';

export const getHeroesListSuccessful = payload => ({
  type: GET_HEROES_LIST_SUCCESSFUL,
  payload,
});

export const getHeroesListUnsuccessful = () => ({
  type: GET_HEROES_LIST_UNSUCCESSFUL,
});

export const addHeroesList = data => ({
  type: ADD_HEROES_LIST,
  data,
});

export const editHeroesList = (data, id) => ({
  type: EDIT_HEROES_LIST,
  data,
  id,
});

export const requestHeroesList = () => dispatch => {
  fetch('http://localhost:4000/heroes')
    .then(res => res.json())
    .then(json => dispatch(getHeroesListSuccessful(json.data)))
    .catch(() => dispatch(getHeroesListUnsuccessful()));
};
