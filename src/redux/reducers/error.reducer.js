const defaultError = {
  errorMsg: null,
};

function errorReducer(state = defaultError, action) {
  switch (action.type) {
    case 'ERROR_MESSAGE':
      return {
        message: action.payload,
      };
    case 'CLEAR_ERROR':
      return defaultError;
    default:
      return state;
  }
}

export default errorReducer;