import { CHANGE_MODE, CHOOSE_CATEGORY, PLAY_MODE, SHOW_MENU, TRAIN_MODE } from "./actionTypes"
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

export function changeMode() {
  return {
    type: CHANGE_MODE
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
    type: 'ACTIVE_CATEGORY',
    payload: category
  }
}
