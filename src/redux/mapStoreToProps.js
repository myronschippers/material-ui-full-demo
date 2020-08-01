/**
 * Pass in only the names of the reducers you want to
 * use so that components don't update for everything
 * updated in the store.
 * @param  {Array.strings} uniqueReducers
 * @returns {function}
 */
function mapStoreToProps(...uniqueReducers) {
  return (store) => {
    let finalStore = store;

    if (uniqueReducers.length > 0) {
      finalStore = {};

      uniqueReducers.forEach(reducerName => {
        finalStore[reducerName] = store[reducerName];
      })
    }

    return { store: finalStore };
  }
}

export default mapStoreToProps;