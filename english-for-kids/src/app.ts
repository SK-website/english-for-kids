import { BaseComponent } from "./components/base-component";
import './styles.scss';
import { Header } from "./components/header/header";
import { Navbar } from "./components/navbar/navbar";
import { MainPage } from "./components/pages/main";
import { Game } from "./components/game/game";
import { CardInfo, ImageCategoryModel } from "./models/image-category-model";
import { getCategoriesCardsInfo } from "./api/api";
import store from "./redux/store";
import { Train } from "./components/train/train";
import { CategoryLink } from "./components/category-link/category-link";
import { CurrentCategory, InitState } from "./models/redux-models";
import { chooseCategory, showMenu } from "./redux/actionsCreators";
import { ResultHearts } from "./components/result-hearts/result-hearts";


export class App {

  private mainElement: HTMLElement | null;
  private header: Header;
  private mainPage: MainPage;
  private navbar: Navbar;
  private game: Game;
  private train: Train;
  private hearts: ResultHearts


  constructor() {
    this.mainPage = new MainPage();
    this.header = new Header();
    this.navbar = new Navbar();
    this.game = new Game();
    this.train = new Train();
    this.hearts = new ResultHearts();
    this.mainElement = document.getElementById('main');
    // this.mainElement?.insertAdjacentElement('beforebegin', this.navbar.element);
    this.mainElement?.insertAdjacentElement('beforebegin', this.header.element);
    this.mainElement?.insertAdjacentElement('beforebegin', this.hearts.container.element);

    document.addEventListener('mouseup', () => {
      if (this.header.navbar.element.classList.contains('navbar-show')) {
        store.dispatch(showMenu(false));
      }
      return
    })

    store.subscribe(() => {
      const state = store.getState();
      const category: CurrentCategory = state.currentCategory;
      if (!(category.currentCategory === ''))
        this.startTrain(category.currentCategory);

      if (category.currentCategory === 'categories')
        this.start();

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
      this.mainElement.appendChild(this.game.element);
      const categories = await getCategoriesCardsInfo();
      const cat = categories.find(el => el.category === category);
      console.log(cat);
      if (cat) this.game.newGame(cat);
      // store.dispatch(chooseCategory(''))
    }
  }

}

  // if (categoryData) this.train.newTrain(categoryData)


  // console.log('categoryData   -   ', categoryData)
  // const categoryData: ImageCategoryModel | undefined = categories.find(cat => cat.category === store.getState().currentCategory);


  // const res = await fetch('./images.json');
  // const categories: ImageCategoryModel[] = await res.json();
  // console.log(categories);
  // const categoryData = categories[1];
  // console.log(categoryData);
  // if (categoryData) this.game.newGame(categoryData);
// }



