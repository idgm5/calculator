/* eslint-disable  react/prefer-stateless-function */

import React from 'react';
import PropTypes from 'prop-types';

class Display extends React.Component {
  render() {
    const { result } = this.props;
    return (
      <div className="display">
        <h1>{result}</h1>
      </div>
    );
  }
}

Display.defaultProps = {
  result: '0',
};

Display.propTypes = {
  result: PropTypes.string,
};

export default Display;
