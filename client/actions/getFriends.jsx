import axios from 'axios';

export const getFriends = (username) => {
  const endpoint = 'http://localhost:3000/api/myfriends';

  const request = axios.get(endpoint, {
    params: {
      username: username,
      token: localStorage.getItem('bookfaceAuthToken'),
    }
  }).catch( (err) => {
    console.log('An error occured while fetching friends. ');
  });

  return {
    type: 'LOAD_FRIENDS',
    payload: request,
  };
};
