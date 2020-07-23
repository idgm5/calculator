/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */

import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import Calculate from '../logic/calculate';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    const { total, next, operation } = this.state;
    this.setState(Calculate({ total, next, operation }, buttonName));
  }

  render() {
    const { total } = this.state;
    const { next } = this.state;
    return (
      <div id="container">
        <Display result={total || next || '0'} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}
export default App;
