import reducer from '../heroesListReducer';
import * as actions from '../../actions/heroesListActions';

const initialState = {
  heroesList: [],
};

const testHero = {
  id: 'example_id',
  full_name: 'Test Full Name',
  description: 'Test Description',
  avatar_url: 'www.test.com/avatar_url',
  type: {
    id: 'example_id',
    name: 'Test Type Name',
  },
};

const testHeroesList = {
  heroesList: [testHero],
};

describe('heroesListReducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle GET_HEROES_LIST_SUCCESSFUL action', () => {
    const changedState = {
      ...initialState,
      heroesList: testHeroesList.heroesList,
    };

    expect(reducer(initialState, {
      type: actions.GET_HEROES_LIST_SUCCESSFUL,
      payload: testHeroesList.heroesList,
    })).toEqual(changedState);
  });

  it('should handle GET_HEROES_LIST_UNSUCCESSFUL action', () => {
    const changedState = {
      ...initialState,
    };

    expect(reducer(initialState, {
      type: actions.GET_HEROES_LIST_UNSUCCESSFUL,
    })).toEqual(changedState);
  });

  it('should handle ADD_HERO action', () => {
    const changedState = {
      ...initialState,
      heroesList: [
        ...initialState.heroesList,
        testHero,
      ],
    };

    expect(reducer(initialState, {
      type: actions.ADD_HERO,
      data: testHero,
    })).toEqual(changedState);
  });

  it('should handle EDIT_HERO action', () => {
    const changedState = {
      ...initialState,
      heroesList: [
        ...initialState.heroesList,
        testHero,
      ],
    };

    expect(reducer(testHeroesList, {
      type: actions.EDIT_HERO,
      data: testHero,
      id: 'example_id',
    })).toEqual(changedState);
  });

  it('should handle DELETE_HERO action', () => {
    const changedState = {
      ...initialState,
      heroesList: [
        ...initialState.heroesList,
      ],
    };

    expect(reducer(testHeroesList, {
      type: actions.DELETE_HERO,
      id: 'example_id',
    })).toEqual(changedState);
  });
});
