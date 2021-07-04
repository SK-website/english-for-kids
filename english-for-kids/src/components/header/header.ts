import './header.scss';
import { BaseComponent } from "../base-component";
import store from '../../redux/store';
import { showMenu } from '../../redux/actionsCreators';
import { Navbar } from '../navbar/navbar';
import { InitState } from '../../models/redux-models';



export class Header extends BaseComponent {
  public header: BaseComponent;
  public playButtonInput: HTMLInputElement;
  public playButtonName: BaseComponent;
  public menu: BaseComponent;
  public playButton: BaseComponent;
  public navbar: Navbar;


  constructor() {
    super();
    this.header = new BaseComponent('nav', ['nav']);
    this.navbar = new Navbar();

    // switch-button
    this.playButton = new BaseComponent("div", ['play-switch-btn']);
    const label = new BaseComponent('label', ['play-switch']);;
    this.playButtonInput = document.createElement('input');
    this.playButtonInput.setAttribute('type', 'checkbox');
    this.playButtonInput.classList.add('play-switch-box');
    this.playButtonName = new BaseComponent('span', ['play-switch-slider', 'train']);
    this.playButtonName.element.textContent = "train";

    // menu
    this.menu = new BaseComponent('div', ['menu-wrapper']);
    const menuContainer = new BaseComponent('div', ['menu']);
    const line1 = new BaseComponent('div', ['menu-line']);
    const line2 = new BaseComponent('div', ['menu-line']);
    const line3 = new BaseComponent('div', ['menu-line']);

    label.element.appendChild(this.playButtonInput);
    label.element.appendChild(this.playButtonName.element);
    this.playButton.element.appendChild(label.element);

    menuContainer.element.appendChild(line1.element);
    menuContainer.element.appendChild(line2.element);
    menuContainer.element.appendChild(line3.element);
    this.menu.element.appendChild(menuContainer.element);

    this.header.element.appendChild(this.playButton.element);
    this.header.element.appendChild(this.menu.element);
    this.element.appendChild(this.header.element);
    this.element.appendChild(this.navbar.element);

    this.menu.element.addEventListener('click', () => {
      const newPosition = this.navbar.element.classList.contains("navbar-show")
        ? false
        : true

      store.dispatch(showMenu(newPosition));
      console.log(store.getState())
    })

    this.navbar.closeMenuButton.element.addEventListener('click', () => {
      store.dispatch(showMenu(false));
    })
    store.subscribe(() => {
      const state = store.getState();
      const show: InitState = state.showMenu;

      show.showMenu
        ? this.navbar.element.classList.add('navbar-show')
        : this.navbar.element.classList.remove('navbar-show')

    })
  }
}
