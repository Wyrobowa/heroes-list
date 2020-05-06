export const GET_HERO_SUCCESSFUL = 'GET_HERO_SUCCESSFUL';
export const GET_HERO_UNSUCCESSFUL = 'GET_HERO_UNSUCCESSFUL';

export const getHeroSuccessful = payload => ({
  type: GET_HERO_SUCCESSFUL,
  payload,
});

export const getHeroUnsuccessful = () => ({
  type: GET_HERO_UNSUCCESSFUL,
});

export const requestHero = id => dispatch => {
  fetch(`http://localhost:4000/heroes/${id}`)
    .then(res => res.json())
    .then(json => dispatch(getHeroSuccessful(json)))
    .catch(() => dispatch(getHeroUnsuccessful()));
};
