import React, { Component } from 'react';
import Clock from './Clock';

class ClockHideable extends Component {

  state = {
    show: true,
  };

  handleClick = () => {
    this.setState({
      show: !this.state.show,
    });
  };
  
  render() {
    return (
      <div>
        {this.state.show && <Clock />}
        <button onClick={this.handleClick}>{this.state.show ? 'Hide' : 'Show'}</button>
      </div>
    );
  }
}

export default ClockHideable;