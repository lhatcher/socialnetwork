import React from 'react';
import Friend from './Friend';

class FriendList extends React.Component {

  render() {
    return (
      <div className="text-center friend-list">
        <h5>My Friends</h5>
        {this.props.friends.map( (friend, i) => <Friend key={friend.id} friend={friend} />)}
      </div>
    );
  }
};


export default FriendList;