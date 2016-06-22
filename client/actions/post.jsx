import axios from 'axios';

export const post = (username, content) => {
  const request = axios.post('http://localhost:3000/api/posts', {
    username: username,
    content: content,
    token: localStorage.getItem('bookfaceAuthToken'),
  });

  return {
    type: 'POST',
    payload: request,
  };
};
