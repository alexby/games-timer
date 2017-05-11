import { createStore, applyMiddleware, compose } from 'redux';
import reducers from '../reducers';
import {
  alert,
  timer,
} from '../middleware';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  composeEnhancers(
    applyMiddleware(
      alert,
      timer,
    )
  )
);

export default store;
