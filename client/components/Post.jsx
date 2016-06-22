import React from 'react';
import AddFriend from './AddFriend';

class Post extends React.Component {

  formatDate(dateString) {
    let timestamp = Date.parse(dateString);
    let date = new Date(timestamp);

    let months = ['Jan.','Feb.','Mar.','Apr.','May','Jun.','Jul.','Aug.','Sep.','Oct.','Nov.','Dec'];

    return {
      year: date.getFullYear(),
      month: months[date.getMonth()],
      day: date.getDate(),
      hours: date.getHours(),
      mins: date.getMinutes(),
      secs: date.getSeconds(),
    };
  }

  render() {
    let post = this.props.post;
    let date = this.formatDate(post.updatedAt);
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="post-container">
            <div className="row">
              <div className="col-md-6 text-left">
                Posted by: <b>{post.author}</b>
              </div>
              <div className="col-md-6 text-right">
                on {date.month} {date.day}, {date.year} @ {date.hours}:{date.mins}
              </div>
            </div>
            <div className="text-center">
              <p>{post.content}</p>
            </div>
            <AddFriend friend={post.author} />
          </div>
        </div>
      </div>
    );
  }
};

export default Post;