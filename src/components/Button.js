import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  render() {
    let buttonWidth = "25%";
    if(this.props.wide === "true"){
      buttonWidth = "50%";
    }
    return <button
    wide={this.props.wide}
    style={{
      backgroundColor: this.props.color,
      width: buttonWidth
    }}>
    {this.props.buttonName}
    </button>;
  }
}

Button.defaultProps = {
  color: 'orange',
  wide: false
};

export default Button;
