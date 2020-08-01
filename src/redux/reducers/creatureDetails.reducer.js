const defaultDetails = {
  attributes: [],
  habitats: []
};

function creatureDetailsReducer(state = defaultDetails, action) {
  switch (action.type) {
    case 'SET_CREATURE_DETAILS':
      return action.payload;
    default:
      return state;
  }
}

export default creatureDetailsReducer;