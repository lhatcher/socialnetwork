import axios from 'axios';

export const signup = (username, password, firstName, lastName, email) => {
  const request = axios.post('http://localhost:3000/api/signup', {
    username: username,
    password: password,
    firstName: firstName,
    lastName: lastName,
    email: email,
  });

  return {
    type: 'SIGNUP',
    payload: request,
  };
};
