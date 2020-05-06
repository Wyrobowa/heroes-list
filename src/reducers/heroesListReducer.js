import * as actions from '../actions/heroesListActions';

const initialState = {
  heroesList: [],
};

const heroesList = (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_HEROES_LIST_SUCCESSFUL:
      return {
        ...state,
        heroesList: action.payload,
      };
    case actions.GET_HEROES_LIST_UNSUCCESSFUL:
      return {
        ...state,
      };
    case actions.ADD_HERO:
      return {
        ...state,
        heroesList: [
          ...state.heroesList,
          action.data,
        ],
      };
    case actions.EDIT_HERO:
      return {
        ...state,
        heroesList: state.heroesList.map(hero => {
          if (hero.id === action.id) {
            return action.data;
          }
          return hero;
        }),
      };
    case actions.DELETE_HERO:
      return {
        ...state,
        heroesList: state.heroesList.filter(hero => hero.id !== action.id),
      };
    default:
      return state;
  }
};

export const getHeroesList = state => state.heroesList.heroesList;

export default heroesList;
