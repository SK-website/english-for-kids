import './styles.scss';
import { Header } from "./components/header/header";
import { Navbar } from "./components/navbar/navbar";
import { MainPage } from "./pages/main";
import { Game } from "./components/game/game";

import { getCategoriesCardsInfo } from "./api/api";
import store from "./redux/store";
import { Train } from "./components/train/train";

import { CurrentCategory, GameSet, PlayMode } from "./models/redux-models";
import { chooseCategory, resetCounter, setEndGame, showMenu } from "./redux/actionsCreators";
import { ResultHearts } from "./components/result-hearts/result-hearts";
import { WinPage } from "./pages/win/win";
import { Card } from "./components/card/card";
import { LossPage } from "./pages/loss/loss";



export class App {

  private mainElement: HTMLElement | null;
  private header: Header;
  private mainPage: MainPage;
  private navbar: Navbar;
  private game: Game;
  private train: Train;
  // private hearts: ResultHearts;
  private winPage: WinPage;



  constructor() {
    this.mainPage = new MainPage();
    this.header = new Header();
    this.navbar = new Navbar();
    this.game = new Game();
    this.train = new Train();
    this.winPage = new WinPage();
    // this.hearts = new ResultHearts();
    this.mainElement = document.getElementById('main');
    // this.mainElement?.insertAdjacentElement('beforebegin', this.navbar.element);
    this.mainElement?.insertAdjacentElement('beforebegin', this.header.element);
    // this.mainElement?.insertAdjacentElement('beforebegin', this.hearts.container.element);

    document.addEventListener('mouseup', () => {
      if (this.header.navbar.element.classList.contains('navbar-show')) {
        store.dispatch(showMenu(false));
      }
      return
    })

    store.subscribe(() => {
      const state = store.getState();
      const category: CurrentCategory = state.currentCategory;
      const playMode: PlayMode = state.playMode;
      if (category.currentCategory === 'categories')
        this.start();
      else if ((category.currentCategory !== '') && (playMode.playMode === false))
        this.startTrain(category.currentCategory);
      else if ((category.currentCategory !== '') && (playMode.playMode === true))
        this.startGame(category.currentCategory);
      if (state.correctAnswerCounter === 8 && state.mistakesCounter === 0) {
        if (this.mainElement) {
          this.mainElement.innerHTML = '';
          this.mainElement?.appendChild(this.winPage.element)
          Card.playNote(`./audio/game/win_result1.mp3`);
          setTimeout(() => this.start(), 3000);
          store.dispatch(resetCounter());

        }
      }
      if ((state.correctAnswerCounter === 8) && (state.mistakesCounter > 0)) {
        if (this.mainElement) {
          this.mainElement.innerHTML = '';
          const lossPage = new LossPage(state.mistakesCounter)
          this.mainElement?.appendChild(lossPage.element)
          Card.playNote(`./audio/game/no-result1.mp3`);
          setTimeout(() => this.start(), 3000);
          store.dispatch(resetCounter());
        }
      }
    })
  }

  start(): void {
    if (this.mainElement) {
      this.mainElement.innerHTML = '';
      this.mainElement.appendChild(this.mainPage.element);
    }
  }

  async startTrain(category: string) {
    console.log('startTrain works', store.getState().currentCategory)
    if (this.mainElement) {
      this.mainElement.innerHTML = '';
      this.mainElement.appendChild(this.train.element);
      const categories = await getCategoriesCardsInfo();
      const cat = categories.find(el => el.category === category);
      console.log(cat);
      if (cat) this.train.newTrain(cat);
      store.dispatch(chooseCategory(''))
    }
  }

  async startGame(category: string) {
    console.log('startGame works', store.getState().currentCategory)
    if (this.mainElement) {
      this.mainElement.innerHTML = '';
      const startNewGame = new Game();
      // this.mainElement.appendChild(this.game.element);
      this.mainElement.appendChild(startNewGame.element);
      const categories = await getCategoriesCardsInfo();
      const cat = categories.find(el => el.category === category);
      console.log(cat);
      if (cat) startNewGame.newGame(cat);
      // if (cat) this.game.newGame(cat);
      store.dispatch(chooseCategory(''))
    }
  }

}




