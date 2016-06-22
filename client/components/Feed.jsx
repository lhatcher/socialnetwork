import React from 'react';
import Post from './Post';

class Feed extends React.Component {

  render() {
    return (
      <div className="container-fluid">
        <h4>News Feed: </h4>
        {this.props.posts.map( (post, i) => <Post key={post.id} post={post} />)}
      </div>
    );
  }
};

export default Feed;