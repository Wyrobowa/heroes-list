import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

// Reducers
import reducer from './reducers/index';

// Styles
import variables from './common/variables';

function render(
  ui,
  {
    store = createStore(reducer),
    ...renderOptions
  } = {},
) {
  const history = createMemoryHistory();

  function Wrapper({ children }) {
    return (
      <Provider store={store}>
        <Router history={history}>
          <ThemeProvider theme={variables}>
            {children}
          </ThemeProvider>
        </Router>
      </Provider>
    );
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// re-export everything
export * from '@testing-library/react';

// override render method
export { render };
