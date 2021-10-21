import './loss.scss';

import { BaseComponent } from '../../components/base-component';

export class LossPage extends BaseComponent {
  constructor(n: number) {
    super('div', ['result-page-wrap']);
    const picture = new BaseComponent('div', ['res']);
    const lossText = new BaseComponent('div', ['loss-text']);
    lossText.element.textContent = `You have made ${n} mistake(s). Let's try again!`;
    const lossImg = new BaseComponent('div', ['img-res', 'loss']);
    picture.element.appendChild(lossImg.element);
    this.element.appendChild(lossText.element);
    this.element.appendChild(picture.element);
  }
}
