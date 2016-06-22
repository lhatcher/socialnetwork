
const posts = (state = [], action) => {
  switch( action.type ) {
    case 'POST':
      return [action.payload.data, ...state];

    case 'LOAD_POSTS':
      return action.payload.data;

    default:
      return state;
  }
};

export default posts;