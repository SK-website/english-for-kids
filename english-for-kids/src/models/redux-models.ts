export interface Action {
  type: string,
  payload?: string | object | boolean
}


export interface InitState {
  showMenu: boolean
}
export interface CurrentCategory {
  currentCategory: string,
  activeCategory: string
}

export interface State {
  showMenu: boolean;
  currentCategory: CurrentCategory,
  playMode: boolean,
  activeCategory: string
}

export interface PlayMode {
  playMode: boolean
}

