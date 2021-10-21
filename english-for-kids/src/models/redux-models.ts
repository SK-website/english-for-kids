export interface Action {
  type: string,
  payload?: string | boolean
}

export interface ActionCreaterReturn {
  type: string
}

export interface ActionCreaterReturnPayload {
  type: string,
  payload: string | boolean
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
  activeCategory: string,
}

export interface PlayMode {
  playMode: boolean
}

export interface GameSet {
  gameState: boolean
}
export interface ModeFlag {
  state: boolean
}
