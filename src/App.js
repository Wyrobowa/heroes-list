import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Routing from './Routing';

// Styles
import * as Styled from './appStyles';
import variables from './common/variables';

const App = () => (
  <ThemeProvider theme={variables}>
    <Router>
      <Styled.App>
        <Styled.GlobalStyles />
        <Routing />
      </Styled.App>
    </Router>
  </ThemeProvider>
);

export default App;
