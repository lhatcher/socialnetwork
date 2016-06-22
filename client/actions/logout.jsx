import axios from 'axios';

export const logout = (username, password) => {
  const request = axios.post('http://localhost:3000/api/logout', {
    username: username,
  });

  return {
    type: 'LOGOUT',
    payload: request,
  };
};
