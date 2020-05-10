import reducer from '../heroesListReducer';
import * as actions from '../../actions/heroesListActions';

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

const initialState = (withHeroes = false) => ({
  heroesList: withHeroes ? [testHero] : [],
  loading: true,
  quantity: 10,
  totalCount: null,
});

const payloadHeroesList = {
  data: {
    heroesList: [testHero],
  },
  loading: false,
  quantity: 10,
  total_count: 26,
};

describe('heroesListReducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState());
  });

  it('should handle GET_HEROES_LIST_SUCCESSFUL action', () => {
    const changedState = {
      ...initialState(),
      heroesList: payloadHeroesList.data,
      loading: false,
      quantity: 20,
      totalCount: 26,
    };

    expect(reducer(initialState(), {
      type: actions.GET_HEROES_LIST_SUCCESSFUL,
      payload: payloadHeroesList,
    })).toEqual(changedState);
  });

  it('should handle GET_HEROES_LIST_UNSUCCESSFUL action', () => {
    const changedState = {
      ...initialState(),
      loading: false,
    };

    expect(reducer(initialState(), {
      type: actions.GET_HEROES_LIST_UNSUCCESSFUL,
    })).toEqual(changedState);
  });

  it('should handle ADD_HERO action', () => {
    const changedState = {
      ...initialState(),
      heroesList: [
        ...initialState().heroesList,
        testHero,
      ],
    };

    expect(reducer(initialState(), {
      type: actions.ADD_HERO,
      data: testHero,
    })).toEqual(changedState);
  });

  it('should handle EDIT_HERO action', () => {
    const changedState = {
      ...initialState(),
      heroesList: [
        ...initialState().heroesList,
        testHero,
      ],
    };

    expect(reducer(initialState(true), {
      type: actions.EDIT_HERO,
      data: testHero,
      id: 'example_id',
    })).toEqual(changedState);
  });

  it('should handle DELETE_HERO action', () => {
    const changedState = {
      ...initialState(),
      heroesList: [
        ...initialState().heroesList,
      ],
    };

    expect(reducer(initialState(true), {
      type: actions.DELETE_HERO,
      id: 'example_id',
    })).toEqual(changedState);
  });
});
