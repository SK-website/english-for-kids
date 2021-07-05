import { CardInfo } from '../../models/image-category-model';
import '../../styles.scss';

import { BaseComponent } from "../base-component"


// const FLIP_CLASS = 'flipped';

export class Card extends BaseComponent {
  public flippButton: BaseComponent;
  public card: BaseComponent
  public cardFront: BaseComponent;
  public cardBack: BaseComponent;


  // isFlipped = false;

  constructor(readonly categoryName: string, info: CardInfo) {
    super('div', ['card-container']);
    this.card = new BaseComponent('div', ['card']);

    this.cardFront = new BaseComponent('div', ['card-front']);
    const cardImg = new BaseComponent('div', ['img-card']);
    cardImg.element.style.backgroundImage = `url(./${categoryName}/${info.img})`;
    const cardInfoFront = new BaseComponent('div', ['info-block']);
    const cardWordEng = new BaseComponent('div', ['spelling']);
    cardWordEng.element.textContent = `${info.spelling_eng}`;
    this.flippButton = new BaseComponent('div', ['flipp-button']);

    cardInfoFront.element.appendChild(cardWordEng.element);
    cardInfoFront.element.appendChild(this.flippButton.element);
    this.cardFront.element.appendChild(cardImg.element);
    this.cardFront.element.appendChild(cardInfoFront.element);


    this.cardBack = new BaseComponent('div', ['card-back']);
    const cardImgBack = new BaseComponent('div', ['img-card']);
    cardImgBack.element.style.backgroundImage = `url(./${categoryName}/${info.img})`;
    const cardInfoBack = new BaseComponent('div', ['info-block']);
    const cardWordRus = new BaseComponent('div', ['spelling']);
    cardWordRus.element.textContent = `${info.spelling_rus}`;

    cardInfoBack.element.appendChild(cardWordRus.element);
    this.cardBack.element.appendChild(cardImgBack.element);
    this.cardBack.element.appendChild(cardInfoBack.element);

    this.card.element.appendChild(this.cardFront.element);
    this.card.element.appendChild(this.cardBack.element)
    this.element.appendChild(this.card.element);

    this.cardFront.element.addEventListener('click', () => {
      console.log(`audio play onclick`)
      this.playNote(`./audio/${categoryName}/${info.audio}`);

    })
    this.flippButton.element.addEventListener('click', () => {
      console.log(`flipp onclick`)
      this.flippToBack();

    })
    // this.cardFront.element.addEventListener('mouseout', () => {
    //   console.log(`flipp onclick`)
    //   this.flippToFront();

    // })
    this.card.element.addEventListener('mouseleave', (ev: MouseEvent) => {
      ev.stopPropagation();
      this.flippToFront();
    })
  }

  flippToBack() {
    this.card.element.classList.add('flipped');
  }
  flippToFront() {
    this.card.element.classList.remove('flipped');
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
