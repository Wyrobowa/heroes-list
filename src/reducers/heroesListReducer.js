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
    default:
      return state;
  }
};

export const getHeroesList = state => state.heroesList.heroesList;

export default heroesList;
