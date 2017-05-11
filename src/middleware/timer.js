import {
  START_TIMER,
  STOP_TIMER,
  SET_TIME,
  THROW_ALERT,
  DISABLE_ALERT,
} from '../actions';

let timerId;

const timer = store => next => action => {
  switch (action.type) {
    case START_TIMER:
      store.dispatch({ type: DISABLE_ALERT });
      store.dispatch({ type: STOP_TIMER });
      store.dispatch({ type: SET_TIME, payload: { time: 3000 } });

      timerId = setInterval(() => {
        let newRemainTime = store.getState().time - 100;
        if (newRemainTime <= 0) {
          store.dispatch({ type: STOP_TIMER });
          newRemainTime = 0;
          store.dispatch({ type: THROW_ALERT });
        }
        store.dispatch({ type: SET_TIME, payload: { time: newRemainTime } });
      }, 100);
      break;
    case STOP_TIMER:
      clearInterval(timerId);
      break;
    default:
      break;
  }
  return next(action);
};

export default timer;
