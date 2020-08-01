const defaultHabitats = [];

function allAHabitatsReducer(state = defaultHabitats, action) {
  switch (action.type) {
    case 'SET_ALL_HABITATS':
      return action.payload;
    default:
      return state;
  }
}

export default allAHabitatsReducer;