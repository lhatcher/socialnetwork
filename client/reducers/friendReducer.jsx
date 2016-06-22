
const friends = (state = [], action) => {
  switch( action.type ) {

    case 'LOAD_FRIENDS':
      return action.payload.data;

    case 'ADD_FRIEND':
      return [action.payload.data, ...state];

    default:
      return state;
  }
};

export default friends;