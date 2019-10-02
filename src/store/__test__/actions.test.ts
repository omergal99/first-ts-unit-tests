import actions from '../actions/FormActions';
import * as Types from '../actionTypes';

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';


const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('actions', () => {
  it('should create an action to add a todo', async () => {
    const text = 'Finish docs'
    const expectedAction = {
      type: Types.ADD_TODO,
      payload: text
    }

    const store = mockStore({ todos: [] });

    return store.dispatch(actions.addTodo()).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedAction)
    })

    // expect(actions.addTodo()).toEqual(expectedAction);
  })
})