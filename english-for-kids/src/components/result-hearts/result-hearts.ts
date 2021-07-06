import './result-hearts.scss';
import { BaseComponent } from "../base-component";

export class ResultHearts {
  public container: BaseComponent;

  constructor() {
    this.container = new BaseComponent('div', ['result']);
  }

  addYellowHeart() {
    const yellowHeart = new BaseComponent('div', ['right-img-result'])
    this.container.element.appendChild(yellowHeart.element)
  }
  addGreyHeart() {
    const greyHeart = new BaseComponent('div', ['wrong-img-result'])
    this.container.element.appendChild(greyHeart.element)
  }
}
