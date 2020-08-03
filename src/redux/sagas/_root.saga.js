import { takeLatest } from 'redux-saga/effects';

// SAGAS
import getCreatures from './getCreatures.saga';
import getCreatureDetails from './getCreatureDetails.saga';
import updateCreature from './updateCreature.saga';
import getAllAttributes from './getAllAttributes.saga';
import getAllHabitats from './getAllHabitats.saga';
import saveCreatureAttribute from './saveCreatureAttribute.saga';
import saveCreatureHabitat from './saveCreatureHabitat.saga';
import getAllTypes from './getAllTypes.saga';
import deleteCreatureAttribute from './deleteCreatureAttribute.saga';
import deleteCreatureHabitat from './deleteCreatureHabitat.saga';

function* rootSaga() {
  yield takeLatest('GET_CREATURES', getCreatures);
  yield takeLatest('GET_CREATURE_DETAILS', getCreatureDetails);
  yield takeLatest('UPDATE_CREATURE_DETAILS', updateCreature);
  yield takeLatest('GET_ALL_ATTRIBUTES', getAllAttributes);
  yield takeLatest('GET_ALL_HABITATS', getAllHabitats);
  yield takeLatest('SAVE_CREATURE_ATTRIBUTE', saveCreatureAttribute);
  yield takeLatest('SAVE_CREATURE_HABITAT', saveCreatureHabitat);
  yield takeLatest('GET_ALL_TYPES', getAllTypes);
  yield takeLatest('DELETE_CREATURE_ATTRIBUTE', deleteCreatureAttribute);
  yield takeLatest('DELETE_CREATURE_HABITAT', deleteCreatureHabitat);
}

export default rootSaga;