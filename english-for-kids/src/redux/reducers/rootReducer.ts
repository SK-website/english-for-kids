import { combineReducers } from 'redux';
import { Action } from '../../models/redux-models';
import { SHOW_MENU } from '../actionTypes';
import { initialState } from '../initialState';

function showMenuReducer(state: object = initialState, action: Action) {
  switch (action.type) {
    case SHOW_MENU:
      console.log({ ...state })
      return { ...state, showMenu: action.payload };
    default: return state;
  }
}

export const rootReducer = combineReducers({
  showMenu: showMenuReducer
})
