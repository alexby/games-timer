import {
  SET_BACKGROUND,
  SET_HEAD_TITLE,
  SET_TIME,
} from '../actions/';

const initialState = {
  background: 'white',
  title: 'default',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_BACKGROUND:
      return {
        ...state,
        background: action.payload.color,
      };
    case SET_HEAD_TITLE:
      return {
        ...state,
        title: action.payload.title,
      };
    case SET_TIME:
      return {
        ...state,
        time: action.payload.time,
      };
    default:
      return state;
  }
}