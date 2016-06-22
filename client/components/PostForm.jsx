import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { post } from '../actions/post';

class PostForm extends React.Component {

  sendPost() {
    let user = this.props.user.username;
    let content = this.refs['postBody'].value;
    this.props.postThought(user, content);
  }

  render() {
    return (
      <div className="post-form">
        <h5>Post a thought!</h5>  
        <form action="javascript:void(0)" id="loginForm" onSubmit={this.sendPost.bind(this)}>
          <div className="row">
          <div className="col-md-10">
              <div className="form-group input-group">
                <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                <input className="form-control" type="text" name='postBody' placeholder="Type a thought here..." ref="postBody"/>
              </div>  
            </div>
            <div className="col-md-2 text-center">
              <div className="form-group">
                <button type="submit" className="btn btn-info btn-block">Post</button>            
              </div>
            </div>
          </div>
        </form>
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
    postThought: post,
  }, dispatch);
};

export default connect(mapStateToProps,mapDispatchToProps)(PostForm);


