import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Logout from '../components/Logout';
import Feed from '../components/Feed';

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          
          <div className="navbar-header">
            <a className="navbar-brand" href="#">Bookface</a>
          </div>
          <p className="navbar-text">Signed in as {this.props.username}</p>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li><Logout/></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;