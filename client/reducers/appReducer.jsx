import { combineReducers } from 'redux';
import { routeReducer } from 'redux-simple-router';
import userInfo from './loginReducer';
import posts from './postReducer';
import friends from './friendReducer';

const appReducer = combineReducers({
  routing: routeReducer,
  user: userInfo,
  posts: posts,
  friends: friends,
});

export default appReducer;