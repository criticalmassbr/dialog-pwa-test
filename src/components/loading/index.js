import React, { Component } from 'react';
import './styles.css';

class Loading extends Component {
  render() {
    return (
      <div class="kabobloader">
        <div class="bounce1"></div>
        <div class="bounce2"></div>
        <div class="bounce3"></div>
      </div>
    );
  }
}

export default Loading;
