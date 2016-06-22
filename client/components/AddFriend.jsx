import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addFriend } from '../actions/addFriend';

class AddFriend extends React.Component {

  componentShouldRender() {
    let username = this.props.user.username;
    let friend = this.props.friend;
    let alreadyFriends = false;
    let notMyUsername = (friend !== username);

    this.props.friends.map( (friendObj) => {
      if ( friendObj.friend === friend ) {
        alreadyFriends = true;
      }
    });

    return (!alreadyFriends) && notMyUsername;
  }

  requestFriend() {
    let username = this.props.user.username;
    let friend = this.props.friend;
    this.props.add(username, friend);
  }

  render() {
    let friend = this.props.friend;
    return (
      <div>
        { this.componentShouldRender() ? 
          <button className="btn btn-info" onClick={this.requestFriend.bind(this)}> 
            Add {friend} as a friend 
          </button> : null }
      </div>
    );
  }

};

const mapStateToProps = (state) => {
  return {
    user: state.user,
    friends: state.friends,
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    add: addFriend,
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(AddFriend);


