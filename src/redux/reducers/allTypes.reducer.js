const defaultTypes = [];

function allTypesReducer(state = defaultTypes, action) {
  switch (action.type) {
    case 'SET_ALL_TYPES':
      return action.payload;
    default:
      return state;
  }
}

export default allTypesReducer;