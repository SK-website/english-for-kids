import './result-hearts.scss';
import { BaseComponent } from "../base-component";

export class ResultHearts {
  public container: BaseComponent;
  constructor() {
    this.container = new BaseComponent('div', ['result']);
  }
}
