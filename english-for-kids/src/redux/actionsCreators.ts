import { SHOW_MENU } from "./actionTypes"
export function showMenu(show: boolean) {
  return {
    type: SHOW_MENU,
    payload: show
  }
}
