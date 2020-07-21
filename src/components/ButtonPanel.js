/* eslint-disable  react/prefer-stateless-function */

import React from 'react';
import Button from './Button';

class ButtonPanel extends React.Component {
  handleClick(buttonName) {
    return this.props.clickHandler(buttonName);
  };

  render() {
    return (
      <div className="buttonPanel">
        <div>
          <Button clickHandler={this.handleClick} color="#e0e0e0" buttonName="AC" />
          <Button clickHandler={this.handleClick} color="#e0e0e0" buttonName="+/-" />
          <Button clickHandler={this.handleClick} color="#e0e0e0" buttonName="%" />
          <Button clickHandler={this.handleClick} buttonName="÷" />
        </div>
        <div>
          <Button clickHandler={this.handleClick} color="#e0e0e0" buttonName="7" />
          <Button clickHandler={this.handleClick} color="#e0e0e0" buttonName="8" />
          <Button clickHandler={this.handleClick} color="#e0e0e0" buttonName="9" />
          <Button clickHandler={this.handleClick} buttonName="X" />
        </div>
        <div>
          <Button clickHandler={this.handleClick} color="#e0e0e0" buttonName="4" />
          <Button clickHandler={this.handleClick} color="#e0e0e0" buttonName="5" />
          <Button clickHandler={this.handleClick} color="#e0e0e0" buttonName="6" />
          <Button clickHandler={this.handleClick} buttonName="-" />
        </div>
        <div>
          <Button clickHandler={this.handleClick} color="#e0e0e0" buttonName="1" />
          <Button clickHandler={this.handleClick} color="#e0e0e0" buttonName="2" />
          <Button clickHandler={this.handleClick} color="#e0e0e0" buttonName="3" />
          <Button clickHandler={this.handleClick} buttonName="+" />
        </div>
        <div>
          <Button clickHandler={this.handleClick} color="#e0e0e0" wide="true" buttonName="0" />
          <Button clickHandler={this.handleClick} color="#e0e0e0" buttonName="." />
          <Button clickHandler={this.handleClick} buttonName="=" />
        </div>
      </div>
    );
  }
}

export default ButtonPanel;
