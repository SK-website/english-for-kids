import { combineReducers } from 'redux';
import { Action, CurrentCategory, InitState, State } from '../../models/redux-models';
import { ACTIVE_CATEGORY, CHOOSE_CATEGORY, PLAY_MODE, SHOW_MENU, TRAIN_MODE } from '../actionTypes';
import { initialCurrentCategoryState, initialMenuState, initialModeState } from '../initialState';

function showMenuReducer(state = initialMenuState, action: Action) {
  switch (action.type) {
    case SHOW_MENU:
      return { ...state, showMenu: action.payload };
    default: return state;
  }
}

function currentCategory(state = initialCurrentCategoryState, action: Action) {
  switch (action.type) {
    case CHOOSE_CATEGORY:
      return { ...state, currentCategory: action.payload };
    case ACTIVE_CATEGORY:
      return { ...state, activeCategory: action.payload };
    default: return state;
  }
}

function changeMode(state = initialModeState, action: Action) {
  switch (action.type) {
    case PLAY_MODE:
      return { ...state, playMode: true };
    case TRAIN_MODE:
      return { ...state, playMode: false };
    default: return state;
  }
}
// function setActiveCategory(state = initialCurrentCategoryState, action: Action) {
//   switch (action.type) {
//     case ACTIVE_CATEGORY:
//       return { ...state, activeCategory: action.payload };
//     default: return state;
//   }
// }

export const rootReducer = combineReducers({
  showMenu: showMenuReducer,
  currentCategory: currentCategory,
  playMode: changeMode,
  // activeCategory: setActiveCategory

})
