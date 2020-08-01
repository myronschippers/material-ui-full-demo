const defaultAttrs = [];

function allAttributesReducer(state = defaultAttrs, action) {
  switch (action.type) {
    case 'SET_ALL_ATTRIBUTES':
      return action.payload;
    default:
      return state;
  }
}

export default allAttributesReducer;