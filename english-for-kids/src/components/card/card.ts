import { CardInfo } from '../../models/image-category-model';
import '../../styles.scss';

import { BaseComponent } from "../base-component"


// const FLIP_CLASS = 'flipped';

export class Card extends BaseComponent {


  // isFlipped = false;

  constructor(readonly categoryName: string, info: CardInfo) {
    super('div', ['card-container']);
    const card = new BaseComponent('div', ['card']);

    const cardFront = new BaseComponent('div', ['card-front']);
    const cardImg = new BaseComponent('div', ['img-card']);
    cardImg.element.style.backgroundImage = `url(./${categoryName}/${info.img})`;
    const cardInfoFront = new BaseComponent('div', ['info-block']);
    const cardWordEng = new BaseComponent('div', ['spelling']);
    cardWordEng.element.textContent = `${info.spelling_eng}`;
    const flippButton = new BaseComponent('div', ['flipp-button']);

    cardInfoFront.element.appendChild(cardWordEng.element);
    cardInfoFront.element.appendChild(flippButton.element);
    cardFront.element.appendChild(cardImg.element);
    cardFront.element.appendChild(cardInfoFront.element);


    const cardBack = new BaseComponent('div', ['card-back']);
    const cardImgBack = new BaseComponent('div', ['img-card']);
    cardImgBack.element.style.backgroundImage = `url(./${categoryName}/${info.img})`;
    const cardInfoBack = new BaseComponent('div', ['info-block']);
    const cardWordRus = new BaseComponent('div', ['spelling']);
    cardWordRus.element.textContent = `${info.spelling_rus}`;

    cardInfoBack.element.appendChild(cardWordRus.element);
    cardBack.element.appendChild(cardImgBack.element);
    cardBack.element.appendChild(cardInfoBack.element);

    card.element.appendChild(cardFront.element);
    card.element.appendChild(cardBack.element)
    this.element.appendChild(card.element);

    cardFront.element.addEventListener('click', () => {
      console.log(`audio play onclick`)
      this.playNote(`./audio/${categoryName}/${info.audio}`);

    })
  }



  playNote(src: string) {
    const audio = new Audio();
    audio.src = src;
    audio.currentTime = 0;
    audio.play();
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
