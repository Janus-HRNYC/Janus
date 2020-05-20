import React from 'react';
import HomeContainer from './redux/containers/homeContainer.js';
import { Container } from '@material-ui/core';
import ReviewContainer from './redux/containers/reviewContainer.js';

const App = () => {
  return (
    <Container>
      {/* <HomeContainer /> */}
      <ReviewContainer />
    </Container>
  );
};

export default App;
