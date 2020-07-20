/* eslint-disable  react/prefer-stateless-function */

import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  render() {
    const { wide } = this.props;
    const { color } = this.props;
    const { buttonName } = this.props;

    let buttonWidth = '25%';
    if (this.props.wide === 'true') {
      buttonWidth = '50%';
    }
    return (
      <button
        wide={wide}
        style={{
          backgroundColor: color,
          width: buttonWidth,
        }}
      >
        { buttonName }
      </button>
    );
  }
}

Button.propTypes = {
  buttonName: PropTypes.string,
};

Button.defaultProps = {
  color: 'orange',
  wide: false,
};

export default Button;
