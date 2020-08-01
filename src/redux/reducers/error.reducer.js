const defaultMessage = {
  errorMsg: null,
};

function errorReducer(state = defaultMessage, action) {
  switch (action.type) {
    case 'ERROR_MESSAGE':
      return {
        message: action.payload,
      };
    default:
      return defaultMessage;
  }
}

export default errorReducer;