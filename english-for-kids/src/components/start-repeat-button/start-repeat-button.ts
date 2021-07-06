import './start-repeat-button.scss';
import { BaseComponent } from "../base-component";

export class StartRepeatButton extends BaseComponent {
  public startButton: BaseComponent;
  public repeatButton: BaseComponent;

  constructor() {
    super('div', ['start-button-wrapper']);
    this.startButton = new BaseComponent('div', ['start-button']);
    this.startButton.element.textContent = 'start'
    this.repeatButton = new BaseComponent('div', ['start-button', 'start-button-repeat', 'none']);
    this.element.appendChild(this.startButton.element);
    this.element.appendChild(this.repeatButton.element);
  }
}
