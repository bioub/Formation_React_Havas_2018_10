import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectContactsLoading, selectContactsLoadingItem } from '../selectors';

class ContactsShow extends Component {
  render() {
    return (
      <div>
        {this.props.loading && 'Loading...'}
        {this.props.contact ? this.props.contact.name : 'Not found'}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  return {
    loading: selectContactsLoading(state),
    contact: selectContactsLoadingItem(state, id),
  };
};

export default connect(mapStateToProps)(ContactsShow);