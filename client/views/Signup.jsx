import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { hashHistory, Link } from 'react-router';
import { signup } from '../actions/signup';

require('../styles/style.css');

class Signup extends React.Component {

  newAccount() {
    let username = this.refs['username'].value;
    let password = this.refs['password'].value;
    let firstName = this.refs['firstName'].value;
    let lastName = this.refs['lastName'].value;
    let email = this.refs['email'].value;

    this.props.createAccount(username,password,firstName,lastName,email).then( () => {
      if ( this.props.user.success ) {
        localStorage.setItem('bookfaceAuthToken', this.props.user.authToken);
        hashHistory.push('/home');
      }
    });
  }

  render() {
    return (
      <div className="container">
        <h2>Bookface Signup</h2>
        <div className="row">
          <div className="absolute-center is-responsive">
            <div className="col-sm-12 col-md-10 col-md-offset-1">
              <form action="javascript:void(0)" id="loginForm" onSubmit={ this.newAccount.bind(this) }>
                <div className="form-group input-group">
                  <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                  <input className="form-control" type="text" name='username' placeholder="username" ref="username"/>
                </div>
                <div className="form-group input-group">
                  <span className="input-group-addon"><i className="glyphicon glyphicon-lock"></i></span>
                  <input className="form-control" type="password" name='password' placeholder="password" ref="password"/>
                </div>
                <div className="form-group input-group">
                  <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                  <input className="form-control" type="text" name='firstName' placeholder="First Name" ref="firstName"/>
                </div>
                <div className="form-group input-group">
                  <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                  <input className="form-control" type="text" name='lastName' placeholder="Last Name" ref="lastName"/>
                </div>
                <div className="form-group input-group">
                  <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                  <input className="form-control" type="emauk" name='email' placeholder="email" ref="email"/>
                </div>
                <div className="form-group">
                  <button type="submit" className="btn btn-info btn-block">Create Account</button>
                  <div className="text-center">
                    --- or ---
                  </div>
                </div>
                <div className="form-group text-center">
                  <Link to="login">I already have an account.</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    createAccount: signup,
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
















