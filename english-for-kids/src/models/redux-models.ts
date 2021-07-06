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

export interface GameSet {
  gameState: boolean,

}

// export interface GameState {
//   gameState: boolean
// }
// export interface MistakesCounter {
//   mistakesCounter: number
// }
// export interface CorrectAnswerCounter {
//   correctAnswerCounter: number
// }
