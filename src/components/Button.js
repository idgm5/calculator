import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  render() {
    return <button>{'string' + this.props.buttonName}</button>;
  }
}

export default Button;
