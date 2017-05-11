import {
  THROW_ALERT,
  DISABLE_ALERT,
  SET_BACKGROUND,
} from '../actions';

let audio = new Audio('/alert.wav');

const register = store => next => action => {
  switch (action.type) {
    case THROW_ALERT:
      audio.play();
      store.dispatch({ type: SET_BACKGROUND, payload: { color: 'red' } });
      break;
    case DISABLE_ALERT:
      audio.pause();
      audio.currentTime = 0;
      store.dispatch({ type: SET_BACKGROUND, payload: { color: 'white' } });
      break;
    default:
      break;
  }
  return next(action);
};

export default register;
