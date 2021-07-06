import './win.scss';
import '../../styles.scss';

import { BaseComponent } from '../../components/base-component';

export class WinPage extends BaseComponent {
  constructor() {
    super('div', ['res']);
    const winText = new BaseComponent('div', ['win-text']);
    winText.element.textContent = 'Congratulations! You won this category!';
    const winImg = new BaseComponent('div', ['img-res', 'win']);

    this.element.appendChild(winText.element);
    this.element.appendChild(winImg.element);
  }
}
