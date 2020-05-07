import reducer from '../heroReducer';
import * as actions from '../../actions/heroActions';

const initialState = {
  hero: {},
};

describe('heroReducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle GET_HERO_SUCCESSFUL action', () => {
    const changedState = {
      ...initialState,
      hero: {
        full_name: 'Test Full Name',
        description: 'Test Description',
        avatar_url: 'www.test.com/avatar_url',
        type: {
          id: 'example_id',
          name: 'Test Type Name',
        },
      },
    };

    expect(reducer(initialState, {
      type: actions.GET_HERO_SUCCESSFUL,
      payload: {
        full_name: 'Test Full Name',
        description: 'Test Description',
        avatar_url: 'www.test.com/avatar_url',
        type: {
          id: 'example_id',
          name: 'Test Type Name',
        },
      },
    })).toEqual(changedState);
  });

  it('should handle GET_HERO_UNSUCCESSFUL action', () => {
    const changedState = {
      ...initialState,
    };

    expect(reducer(initialState, {
      type: actions.GET_HERO_UNSUCCESSFUL,
    })).toEqual(changedState);
  });
});
