function creatureListReducer(state = [], action) {
  if (action.type === 'SET_CREATURE_LIST') {
    return action.payload;
  }

  return state;
}

export default creatureListReducer;