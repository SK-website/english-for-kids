import './header.scss';
import { BaseComponent } from "../base-component";



export class Header extends BaseComponent {
  public header: BaseComponent;
  public playButtonInput: HTMLInputElement;
  public playButtonName: BaseComponent;
  public menu: BaseComponent;
  public playButton: BaseComponent;


  constructor() {
    super();
    this.header = new BaseComponent('nav', ['nav']);

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
  }
}

