/* eslint-disable  no-unused-vars */
import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import Calculate from '../logic/calculate';

let currentResult = null;

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
    const {
      total,
      next,
      operation
    } = this.state;
    this.setState(Calculate({
      total,
      next,
      operation
    }, buttonName));
  };

  render() {
    return ( <
      div id = "container" >
      <
      Display result={this.state.total || this.state.next  || "0"}
      / > <
      ButtonPanel onClick = {
        this.handleClick
      }
      /> <
      /div>
    );
  }
}
export default App;
