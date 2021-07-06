import { ActionCreaterReturn, ActionCreaterReturnPayload } from '../models/redux-models';
import {
  CHOOSE_CATEGORY, PLAY_MODE, SHOW_MENU, TRAIN_MODE, MISTAKES_INCREMENT, START_GAME,
  ACTIVE_CATEGORY, END_GAME, CORRECT_INCREMENT, RESET_COUNTER, RESET_MISTAKE_COUNTER,
} from './actionTypes';

export function showMenu(show: boolean): ActionCreaterReturnPayload {
  return {
    type: SHOW_MENU,
    payload: show,
  };
}

export function chooseCategory(category: string): ActionCreaterReturnPayload {
  return {
    type: CHOOSE_CATEGORY,
    payload: category,
  };
}

export function toPlayMode(): ActionCreaterReturn {
  return {
    type: PLAY_MODE,
  };
}
export function toTrainMode(): ActionCreaterReturn {
  return {
    type: TRAIN_MODE,
  };
}

export function setActiveCategory(category: string): ActionCreaterReturnPayload {
  return {
    type: ACTIVE_CATEGORY,
    payload: category,
  };
}

export function setStartGame(): ActionCreaterReturn {
  return {
    type: START_GAME,
  };
}
export function setEndGame(): ActionCreaterReturn {
  return {
    type: END_GAME,
  };
}

export function correctCounterIncrement(): ActionCreaterReturn {
  return {
    type: CORRECT_INCREMENT,
  };
}
export function mistakesCounterIncrement(): ActionCreaterReturn {
  return {
    type: MISTAKES_INCREMENT,
  };
}
export function resetCounter(): ActionCreaterReturn {
  return {
    type: RESET_COUNTER,
  };
}

export function resetMistakeCounter(): ActionCreaterReturn {
  return {
    type: RESET_MISTAKE_COUNTER,
  };
}
