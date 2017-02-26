import { createStore } from 'redux';
import reducers from '../reducers';

const store = createStore(
  reducers
);

/**
 * @todo debug
 */
store.subscribe(() => {
  console.log('RESULT', store.getState());
});

export default store;
