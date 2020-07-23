/* eslint-disable  react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { clickHandler } = this.props;
    const { buttonName } = this.props;
    clickHandler(buttonName);
  }

  render() {
    const { wide } = this.props;
    const { color } = this.props;
    const { buttonName } = this.props;

    let buttonWidth = '25%';
    if (wide === 'true') {
      buttonWidth = '50%';
    }
    return (
      <button
        type="button"
        wide={wide}
        style={{
          backgroundColor: color,
          width: buttonWidth,
        }}
        onClick={this.handleClick}
      >
        { buttonName }
      </button>
    );
  }
}

Button.propTypes = {
  buttonName: PropTypes.string,
  color: PropTypes.string,
  wide: PropTypes.bool,
  clickHandler: PropTypes.func,
};

Button.defaultProps = {
  color: 'orange',
  wide: false,
  buttonName: 'buttonName',
  clickHandler: '0',
};

export default Button;
