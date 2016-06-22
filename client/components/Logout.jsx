import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { hashHistory } from 'react-router';
import { logout } from '../actions/logout';

import Feed from '../components/Feed';

class Logout extends React.Component {

  logout () {
    this.props.endSession(this.props.user.username).then( () => {
      // If the user is no longer authenticated
      if ( !this.props.user.success ) {
        localStorage.setItem('bookfaceAuthToken', null);
        hashHistory.push('/login');
      } 
    });
  }

  render() {
    return <button className="btn btn-info" onClick={this.logout.bind(this)}>Log out</button>
  }

};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    endSession: logout,
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Logout);