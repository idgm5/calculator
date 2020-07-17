import React from 'react';
import PropTypes from 'prop-types';

class Display extends React.Component {
  render() {
    return (
      <div class="display">
        <h1>{this.props.result}</h1>
      </div>
    );
  }
}

Display.defaultProps = {
  result: '0'
};

export default Display;
