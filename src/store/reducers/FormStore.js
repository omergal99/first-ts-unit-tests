import {
  SET_FORM_DATA,
  LEVEL_BY_ARG,
  LEVEL_UP,
  LEVEL_DOWN
} from '../actionTypes';
const initialState = {}

export default (state = initialState, action) => {
  var copy = MakeDeepCopy(state);
  switch (action.type) {
    case SET_FORM_DATA:
      return action.payload;
    case LEVEL_BY_ARG:
      copy.currLevel = action.payload;
      return copy;
    case LEVEL_UP:
      copy.currLevel++;
      return copy;
    case LEVEL_DOWN:
      copy.currLevel--;
      return copy;
    default:
      return state;
  }
}

function MakeDeepCopy(state) {
  return JSON.parse(JSON.stringify(state));
}