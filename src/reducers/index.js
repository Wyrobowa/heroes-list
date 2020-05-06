import { combineReducers } from 'redux';

// Reducers
import hero from './heroReducer';
import heroesList from './heroesListReducer';

const AppReducers = combineReducers({
  hero,
  heroesList,
});

export default AppReducers;
