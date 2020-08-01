import { put as dispatch } from 'redux-saga/effects';
import axios from 'axios';

function* getAllAttributes(action) {
  try {
    const response = yield axios.get('/api/attributes');
    yield dispatch({
      type: 'SET_ALL_ATTRIBUTES',
      payload: response.data,
    });
  } catch(err) {
    console.log('ERROR:', err);
    yield dispatch({
      type: 'ERROR_MESSAGE',
      payload: `There was an error retrieving the list of attributes.`,
    });
  }
}

export default getAllAttributes;