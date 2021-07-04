export interface Action {
  type: string,
  payload?: string | object | boolean
}


export interface InitState {
  showMenu: boolean
}
export interface CurrentCategory {
  currentCategory: string
}

export interface State {
  showMenu: boolean;
  currentCategory: string
}
