import { SET_BACKGROUND, SET_HEAD_TITLE } from '../actions/';

export default (state = {}, action) => {
  switch (action.type) {
    case SET_BACKGROUND:
      return {
        ...state,
        background: action.color,
      };
    case SET_HEAD_TITLE:
      return {
        ...state,
        title: action.title,
      };
    default:
      return state;
  }
}