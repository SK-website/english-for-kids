import './loss.scss';

import { BaseComponent } from '../../components/base-component';

export class LossPage extends BaseComponent {
  constructor(n: number) {
    super('div', ['res']);
    const winText = new BaseComponent('div', ['loss-text']);
    winText.element.textContent = `Made mistakes - ${n}. Let's try again!`;
    const winImg = new BaseComponent('div', ['img-res', 'loss']);

    this.element.appendChild(winText.element);
    this.element.appendChild(winImg.element);
  }
}
