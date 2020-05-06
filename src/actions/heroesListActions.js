export const GET_HEROES_LIST_SUCCESSFUL = 'GET_HEROES_LIST_SUCCESSFUL';
export const GET_HEROES_LIST_UNSUCCESSFUL = 'GET_HEROES_LIST_UNSUCCESSFUL';

export const getHeroesListSuccessful = payload => ({
  type: GET_HEROES_LIST_SUCCESSFUL,
  payload,
});

export const getHeroesListUnsuccessful = () => ({
  type: GET_HEROES_LIST_UNSUCCESSFUL,
});

export const requestHeroesList = () => dispatch => {
  fetch('http://localhost:4000/heroes')
    .then(res => res.json())
    .then(json => dispatch(getHeroesListSuccessful(json.data)))
    .catch(() => dispatch(getHeroesListUnsuccessful()));
};
