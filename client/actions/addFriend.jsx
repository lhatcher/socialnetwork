import axios from 'axios';

export const addFriend = (username, friend) => {
  const endpoint = 'http://localhost:3000/api/friends';

  const request = axios.post(endpoint, {
    username: username,
    friend: friend,
    token: localStorage.getItem('bookfaceAuthToken'),
  }).catch( (err) => {
    console.log('An error occured while fetching friends. ');
  });

  return {
    type: 'ADD_FRIEND',
    payload: request,
  };
};
