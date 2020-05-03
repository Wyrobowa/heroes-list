import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Containers
import HeroesList from './containers/heroesList/HeroesList';

// Styles
import * as Styled from './appStyles';

function App() {
  return (
    <Router>
      <Styled.App>
        <Styled.GlobalStyles />
        <Route exact path="/" component={HeroesList} />
      </Styled.App>
    </Router>
  );
}

export default App;
