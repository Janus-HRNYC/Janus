import React from 'react';
import HomeContainer from './redux/containers/homeContainer.js';
import { Container } from '@material-ui/core';

const App = () => {

  window.onclick = e => {
    console.log('e.target', e.target);
    console.log('e.target.value', e.target.value);
    console.log('e.target.parentNode', e.target.parentNode)
    console.log('e.target.parentElement', e.target.parentElement)
} 
  return (
    <Container>
      <HomeContainer />
    </Container>
  );
};

export default App;
