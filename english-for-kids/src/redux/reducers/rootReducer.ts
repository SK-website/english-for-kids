import { combineReducers } from 'redux';
import { Action, CurrentCategory, InitState, State } from '../../models/redux-models';
import { CHOOSE_CATEGORY, SHOW_MENU } from '../actionTypes';
import { initialCurrentCategoryState, initialMenuState } from '../initialState';

function showMenuReducer(state = initialMenuState, action: Action) {
  switch (action.type) {
    case SHOW_MENU:
      console.log({ ...state })
      return { ...state, showMenu: action.payload };
    default: return state;
  }
}

function currentCategory(state = initialCurrentCategoryState, action: Action) {
  switch (action.type) {
    case CHOOSE_CATEGORY:
      return { ...state, currentCategory: action.payload };
    default: return state;
  }
}

export const rootReducer = combineReducers({
  showMenu: showMenuReducer,
  currentCategory: currentCategory
})
