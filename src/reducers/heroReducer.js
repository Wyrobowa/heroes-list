import * as actions from '../actions/heroActions';

const initialState = {
  hero: {},
};

const hero = (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_HERO_SUCCESSFUL:
      return {
        ...state,
        hero: action.payload,
      };
    case actions.GET_HERO_UNSUCCESSFUL:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export const getHero = state => state.hero.hero;

export default hero;
