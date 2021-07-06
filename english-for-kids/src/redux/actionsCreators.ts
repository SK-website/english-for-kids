import { CHOOSE_CATEGORY, PLAY_MODE, SHOW_MENU, TRAIN_MODE, MISTAKES_INCREMENT, START_GAME, ACTIVE_CATEGORY, END_GAME, CORRECT_INCREMENT } from "./actionTypes"

export function showMenu(show: boolean) {
  return {
    type: SHOW_MENU,
    payload: show
  }
}

export function chooseCategory(category: string) {
  return {
    type: CHOOSE_CATEGORY,
    payload: category
  }
}

export function toPlayMode() {
  return {
    type: PLAY_MODE
  }
}
export function toTrainMode() {
  return {
    type: TRAIN_MODE
  }
}

export function setActiveCategory(category: string) {
  return {
    type: ACTIVE_CATEGORY,
    payload: category
  }
}

export function setStartGame() {
  return {
    type: START_GAME
  }
}
export function setEndGame() {
  return {
    type: END_GAME
  }
}

export function correctCounterIncrement() {
  return {
    type: CORRECT_INCREMENT
  }
}
export function mistakesCounterIncrement() {
  return {
    type: MISTAKES_INCREMENT
  }
}
