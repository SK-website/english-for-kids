import { CHOOSE_CATEGORY, SHOW_MENU } from "./actionTypes"
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
