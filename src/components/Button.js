/* eslint-disable  react/prefer-stateless-function */

import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  render() {
    const { buttonName } = this.props;
    return <button type="button">{buttonName}</button>;
  }
}

Button.propTypes = {
  buttonName: PropTypes.string,
};

Button.defaultProps = {
  buttonName: 'ButtonName',
};

export default Button;
