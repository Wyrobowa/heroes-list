import * as actions from '../actions/heroesListActions';

const initialState = {
  heroesList: [],
  loading: true,
  quantity: 10,
  totalCount: null,
};

const heroesList = (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_HEROES_LIST_SUCCESSFUL:
      return {
        ...state,
        heroesList: action.payload.data,
        loading: false,
        quantity: state.quantity + 10,
        totalCount: action.payload.total_count,
      };
    case actions.GET_HEROES_LIST_UNSUCCESSFUL:
      return {
        ...state,
        loading: false,
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
    case actions.SET_LOADING_STATUS:
      return {
        ...state,
        loading: action.status,
      };
    default:
      return state;
  }
};

export const getHeroesList = state => state.heroesList.heroesList;
export const getLoadingStatus = state => state.heroesList.loading;
export const getQuantity = state => state.heroesList.quantity;
export const getTotalCount = state => state.heroesList.totalCount;

export default heroesList;
