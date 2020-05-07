import * as actions from '../heroActions';

describe('heroAction', () => {
  it('should create an action to getHeroSuccessful', () => {
    const expectedAction = {
      type: actions.GET_HERO_SUCCESSFUL,
    };
    expect(actions.getHeroSuccessful()).toEqual(expectedAction);
  });

  it('should create an action to getHeroUnsuccessful', () => {
    const expectedAction = {
      type: actions.GET_HERO_UNSUCCESSFUL,
    };
    expect(actions.getHeroUnsuccessful()).toEqual(expectedAction);
  });
});
