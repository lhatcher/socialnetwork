import React from 'react';
import { connect } from 'react-redux';
import Login from './Login';
import Signup from './Signup';  
import Home from './Home';  

class App extends React.Component {
  render() {
    return (
      <div>
        {this.props.user.success ? <Home /> : <Login />}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  }
};

export default connect(mapStateToProps)(App);