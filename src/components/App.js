/* eslint-disable  no-unused-vars */
import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import Calculate from '../logic/calculate';

function App() {
  return (
    <div id="container">
      <Display />
      <ButtonPanel />
    </div>
  );
}

export default App;
