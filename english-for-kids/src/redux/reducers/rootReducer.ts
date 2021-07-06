import { combineReducers } from 'redux';
import { Action } from '../../models/redux-models';

import {
  ACTIVE_CATEGORY, CHOOSE_CATEGORY, CORRECT_INCREMENT, END_GAME, MISTAKES_INCREMENT,
  PLAY_MODE, RESET_COUNTER, RESET_MISTAKE_COUNTER, SHOW_MENU, START_GAME, TRAIN_MODE,
} from '../actionTypes';

import {
  initialCurrentCategoryState, initialGameSet, initialMenuState, initialModeState,
} from '../initialState';

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

function setGame(state = initialGameSet, action: Action) {
  switch (action.type) {
    case START_GAME:
      return { ...state, gameState: true };
    case END_GAME:
      return { ...state, gameState: false };

    default: return state;
  }
}

function correctAnswersCounter(correctAnswerCounter = 0, action: Action) {
  switch (action.type) {
    case CORRECT_INCREMENT:
      return correctAnswerCounter + 1;
    case RESET_COUNTER:
      return correctAnswerCounter - 8;
    default: return correctAnswerCounter;
  }
}

function mistakesCounter(mistakeCounter = 0, action: Action) {
  switch (action.type) {
    case MISTAKES_INCREMENT:
      return mistakeCounter + 1;
    case RESET_MISTAKE_COUNTER:
      return mistakeCounter - mistakeCounter;
    default: return mistakeCounter;
  }
}

export const rootReducer = combineReducers({
  showMenu: showMenuReducer,
  currentCategory,
  playMode: changeMode,
  gameSet: setGame,
  mistakesCounter,
  correctAnswersCounter,
});
