import { BaseComponent } from "./components/base-component";
import './styles.scss';
import { Header } from "./components/header/header";
import { Navbar } from "./components/navbar/navbar";
import { MainPage } from "./components/pages/main";


export class App {

  private mainElement: HTMLElement | null;
  private header: Header;
  private mainPage: MainPage;
  private navbar: Navbar;

  constructor() {
    this.mainPage = new MainPage();
    this.header = new Header();
    this.navbar = new Navbar();
    this.mainElement = document.getElementById('main');
    this.mainElement?.insertAdjacentElement('beforebegin', this.navbar.element);
    this.mainElement?.insertAdjacentElement('beforebegin', this.header.element);
  }

  start(): void {
    if (this.mainElement) {
      // this.mainElement.innerHTML = '';
      // this.mainElement.appendChild(this.mainPage.element);
    }
  }
}
