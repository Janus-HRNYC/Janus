import React from 'react';
import HomeContainer from './redux/containers/homeContainer.js';
import { Container } from '@material-ui/core';

const App = () => {
  return (
    <Container>
      <HomeContainer />
    </Container>
  );
};

export default App;