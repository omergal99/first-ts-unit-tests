import FormService from '../../services/FormService';
import {
  SET_FORM_DATA,
  LEVEL_BY_ARG,
  LEVEL_UP,
  ADD_TODO,
  LEVEL_DOWN
} from '../actionTypes';

function loadFormData() {
  return async (dispatch) => {
    const formInitData = await FormService.getFormData();
    dispatch({ type: SET_FORM_DATA, payload: formInitData })
  }
}
function addTodo() {
  return async (dispatch) => {
    dispatch({ type: ADD_TODO, payload: 'Finish docs' })
  }
}
function levelUp() {
  return async (dispatch) => {
    dispatch({ type: LEVEL_UP })
  }
}
function levelByArg(num) {
  return async (dispatch) => {
    dispatch({ type: LEVEL_BY_ARG, payload: num })
  }
}
function levelDown() {
  return async (dispatch) => {
    dispatch({ type: LEVEL_DOWN })
  }
}

export default {
  loadFormData,
  addTodo,
  levelUp,
  levelDown,
  levelByArg
}