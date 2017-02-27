import { SET_BACKGROUND, SET_HEAD_TITLE } from '../actions/';

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
    default:
      return state;
  }
}