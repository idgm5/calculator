import React from 'react';
import PropTypes from 'prop-types';

class Display extends React.Component {
  render() {
    return <h1>{this.props.result}</h1>;
  }
}

Display.defaultProps = {
  result: '0',
};

export default Display;
