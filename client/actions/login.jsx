import axios from 'axios';

export const login = (username, password) => {
  const request = axios.post('http://localhost:3000/api/login', {
    username: username,
    password: password,
  });

  return {
    type: 'LOGIN',
    payload: request,
  };
};
