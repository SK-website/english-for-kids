import '../../styles.scss';

import { BaseComponent } from "../base-component"


// const FLIP_CLASS = 'flipped';

export class Card extends BaseComponent {


  // isFlipped = false;

  constructor(readonly image: string) {
    super('div', ['card-container']);
    const card = new BaseComponent('div', ['card']);
    const cardFront = new BaseComponent('div', ['card-front']);
    const cardImg = new BaseComponent('div', ['img-card']);
    cardImg.element.style.backgroundImage = `url(./${image})`;
    console.log("cardImg.element.style.backgroundImage", `url(./${image})`);

    const cardInfoFront = new BaseComponent('div', ['info-block']);
    const cardWord = new BaseComponent('div', ['spelling']);
    const flippButton = new BaseComponent('div', ['flipp-button'])

    cardInfoFront.element.appendChild(cardWord.element);
    cardInfoFront.element.appendChild(flippButton.element);
    cardFront.element.appendChild(cardImg.element);
    cardFront.element.appendChild(cardInfoFront.element);
    card.element.appendChild(cardFront.element);
    this.element.appendChild(card.element);
  }

  // flipToBack() {
  //   this.isFlipped = true;
  //   return this.flip(true);
  // }

  // flipToFront() {
  //   this.isFlipped = false;
  //   return this.flip();
  // }

  // private flip(isFront = false): Promise<void> {
  //   return new Promise((resolve) => {
  //     this.element.classList.toggle(FLIP_CLASS, isFront);
  //     this.element.addEventListener('transitionend', () => resolve(), {
  //       once: true,
  //     });
  //   });
}
