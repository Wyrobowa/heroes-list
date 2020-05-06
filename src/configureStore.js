import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducer from './reducers/index';

const configureStore = () => {
  let store;

  if (process.env.NODE_ENV === 'development') {
    store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
  } else {
    store = createStore(reducer, applyMiddleware(thunk));
  }

  return store;
};

export default configureStore;
