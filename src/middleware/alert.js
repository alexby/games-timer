import {
  THROW_ALERT,
  DISABLE_ALERT
} from '../actions';

let audio = new Audio('/alert.wav');

const register = store => next => action => {
  switch (action.type) {
    case THROW_ALERT:
      audio.play();
      break;
    case DISABLE_ALERT:
      audio.pause();
      audio.currentTime = 0;
      break;
    default:
      break;
  }
  return next(action);
};

export default register;
