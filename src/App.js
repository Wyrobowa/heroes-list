import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

// Containers
import HeroesList from './containers/heroesList/HeroesList';

// Styles
import * as Styled from './appStyles';
import variables from './common/variables';

function App() {
  return (
    <ThemeProvider theme={variables}>
      <Router>
        <Styled.App>
          <Styled.GlobalStyles />
          <Route exact path="/" component={HeroesList} />
        </Styled.App>
      </Router>
    </ThemeProvider>
  );
}

export default App;
