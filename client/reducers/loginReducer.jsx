
const userInfo = (state = [], action) => {

  switch ( action.type ) {
    case 'LOGIN':
      return action.payload.data;

    case 'SIGNUP':
      return action.payload.data;

    case 'LOGOUT':
      return {success: !action.payload.data.success};

    default:
      return state;
  }
};

export default userInfo;