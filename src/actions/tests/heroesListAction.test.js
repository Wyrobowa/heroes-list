import * as actions from '../heroesListActions';

const exampleData = {
  name: 'test_name',
};

describe('heroesListActions', () => {
  it('should create an action to getHeroesListSuccessful', () => {
    const expectedAction = {
      type: actions.GET_HEROES_LIST_SUCCESSFUL,
    };
    expect(actions.getHeroesListSuccessful()).toEqual(expectedAction);
  });

  it('should create an action to getHeroesListUnsuccessful', () => {
    const expectedAction = {
      type: actions.GET_HEROES_LIST_UNSUCCESSFUL,
    };
    expect(actions.getHeroesListUnsuccessful()).toEqual(expectedAction);
  });

  it('should create an action to addHero', () => {
    const expectedAction = {
      type: actions.ADD_HERO,
      data: exampleData,
    };
    expect(actions.addHero(exampleData)).toEqual(expectedAction);
  });

  it('should create an action to editHero', () => {
    const expectedAction = {
      type: actions.EDIT_HERO,
      data: exampleData,
      id: 'example_id',
    };
    expect(actions.editHero(exampleData, 'example_id')).toEqual(expectedAction);
  });

  it('should create an action to deleteHero', () => {
    const expectedAction = {
      type: actions.DELETE_HERO,
      id: 'example_id',
    };
    expect(actions.deleteHero('example_id')).toEqual(expectedAction);
  });

  it('should create an action to setLoadingStatus', () => {
    const expectedAction = {
      type: actions.SET_LOADING_STATUS,
      status: true,
    };
    expect(actions.setLoadingStatus(true)).toEqual(expectedAction);
  });
});
