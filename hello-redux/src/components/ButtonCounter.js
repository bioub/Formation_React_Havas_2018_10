import React, { Component } from 'react';
import { connect } from 'react-redux';
import { counterIncrement } from '../actions';
import { selectCount } from '../selectors';

/*
class ButtonCounter extends Component {
  increment = () => {
    this.props.dispatch(counterIncrement());
  }

  render() {
    return <button onClick={this.increment}>{this.props.count}</button>
  }
}
*/
function ButtonCounter() {
  return <button onClick={this.props.increment}>{this.props.count}</button>
}

const mapStateToProps = (state) => ({ count: selectCount(state) });
const mapDispatchToProps = (dispatch) => ({ increment: () => dispatch(counterIncrement()), });

export default connect(mapStateToProps, mapDispatchToProps)(ButtonCounter);