import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

class ButtonPanel extends React.Component {
  render() {
    return (
      <div class="buttonPanel">
        <div>
          <Button color="#e0e0e0" buttonName="AC"/>
          <Button color="#e0e0e0" buttonName="+/-"/>
          <Button color="#e0e0e0" buttonName="%"/>
          <Button buttonName="÷"/>
        </div>
        <div>
          <Button color="#e0e0e0" buttonName="7"/>
          <Button color="#e0e0e0" buttonName="8"/>
          <Button color="#e0e0e0" buttonName="9"/>
          <Button buttonName="X"/>
        </div>
        <div>
          <Button color="#e0e0e0"  buttonName="4"/>
          <Button color="#e0e0e0" buttonName="5"/>
          <Button color="#e0e0e0" buttonName="6"/>
          <Button buttonName="-"/>
        </div>
        <div>
          <Button color="#e0e0e0" buttonName="1"/>
          <Button color="#e0e0e0" buttonName="2"/>
          <Button color="#e0e0e0" buttonName="3"/>
          <Button buttonName="+"/>
        </div>
        <div>
          <Button color="#e0e0e0" wide="true" buttonName="0"/>
          <Button color="#e0e0e0" buttonName="."/>
          <Button buttonName="="/>
        </div>
      </div>
    );
  }
}

export default ButtonPanel;
