import { BaseComponent } from "./components/base-component";
import './styles.scss';
import { Header } from "./components/header/header";
import { Navbar } from "./components/navbar/navbar";
import { MainPage } from "./components/pages/main";
import { Game } from "./components/game/game";
import { ImageCategoryModel } from "./models/image-category-model";


export class App {

  private mainElement: HTMLElement | null;
  private header: Header;
  private mainPage: MainPage;
  private navbar: Navbar;
  private game: Game;

  constructor() {
    this.mainPage = new MainPage();
    this.header = new Header();
    this.navbar = new Navbar();
    this.game = new Game();
    this.mainElement = document.getElementById('main');
    this.mainElement?.insertAdjacentElement('beforebegin', this.navbar.element);
    this.mainElement?.insertAdjacentElement('beforebegin', this.header.element);
  }

  async start(): Promise<void> {
    if (this.mainElement) {
      this.mainElement.innerHTML = '';
      this.mainElement.appendChild(this.mainPage.element);
      this.mainElement.appendChild(this.game.element);

      const res = await fetch('./images.json');
      const categories: ImageCategoryModel[] = await res.json();
      console.log(categories);
      const cat = categories[0];
      const images = cat.images.map((name: string) => `${cat.category}/${name}`);
      this.game.newGame(images);
    }
  }
}
