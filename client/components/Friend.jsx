import React from 'react';

class Friend extends React.Component {
  render() {
    let friend = this.props.friend;
    return (
      <div className="friend">
        <h5>{this.props.friend.friend}</h5>
      </div>
    );
  }
};

export default Friend;