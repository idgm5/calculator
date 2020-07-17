import React from 'react';
import ReactDOM from 'react-dom';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

ReactDOM.render(
  <div id="container">
    <Display />
    <ButtonPanel />
  </div>,
  document.getElementById('root')
);
