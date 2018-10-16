import React, { Component } from 'react';
import { connect } from 'react-redux';
import { counterIncrement } from '../actions';
import { selectCount } from '../selectors';

class ButtonCounter extends Component {
  increment = () => {
    this.props.dispatch(counterIncrement());
  }

  render() {
    return <button onClick={this.increment}>{this.props.count}</button>
  }
}

const mapStateToProps = (state) => ({ count: selectCount(state) });

export default connect(mapStateToProps)(ButtonCounter);