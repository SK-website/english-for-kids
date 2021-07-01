import { BaseComponent } from "../base-component";
import '../../styles.scss';

export class Header extends BaseComponent {
  public header: BaseComponent;
  public playButton: HTMLInputElement;
  public playButtonName: BaseComponent;
  public menu: BaseComponent;


  constructor() {
    super();
    this.header = new BaseComponent('nav', ['nav']);

    // switch-button
    const btn = new BaseComponent("div", ['play-switch-btn']);
    const label = new BaseComponent('label', ['play-switch']);;
    this.playButton = document.createElement('input');
    this.playButton.setAttribute('type', 'checkbox');
    this.playButton.classList.add('play-switch-box');
    this.playButtonName = new BaseComponent('span', ['play-switch-slider', 'train']);
    this.playButtonName.element.textContent = "train";

    // menu
    this.menu = new BaseComponent('div', ['menu-wrapper']);
    const menuContainer = new BaseComponent('div', ['menu']);
    const line1 = new BaseComponent('div', ['menu-line']);
    const line2 = new BaseComponent('div', ['menu-line']);
    const line3 = new BaseComponent('div', ['menu-line']);


    this.playButton.appendChild(this.playButtonName.element);
    label.element.appendChild(this.playButton);
    btn.element.appendChild(label.element);

    menuContainer.element.appendChild(line1.element);
    menuContainer.element.appendChild(line2.element);
    menuContainer.element.appendChild(line3.element);
    this.menu.element.appendChild(menuContainer.element);

    this.header.element.appendChild(btn.element);
    this.header.element.appendChild(this.menu.element);
    this.element.appendChild(this.header.element);

  }

}

