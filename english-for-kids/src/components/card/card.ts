import { CardInfo } from '../../models/image-category-model';
import store from '../../redux/store';
import { BaseComponent } from '../base-component';

export class Card extends BaseComponent {
  public flippButton: BaseComponent;

  public card: BaseComponent;

  public cardFront: BaseComponent;

  public cardBack: BaseComponent;

  public cardInfoFront: BaseComponent;

  public cardImg: BaseComponent;

  public cardAudioUrl: string;

  constructor(readonly categoryName: string, info: CardInfo) {
    super('div', ['card-container']);
    this.card = new BaseComponent('div', ['card']);

    this.cardFront = new BaseComponent('div', ['card-front']);
    this.cardImg = new BaseComponent('div', ['img-card']);
    this.cardImg.element.style.backgroundImage = `url(./${categoryName}/${info.img})`;
    this.cardInfoFront = new BaseComponent('div', ['info-block']);
    const cardWordEng = new BaseComponent('div', ['spelling']);
    cardWordEng.element.textContent = `${info.spelling_eng}`;
    this.flippButton = new BaseComponent('div', ['flipp-button']);

    this.cardInfoFront.element.appendChild(cardWordEng.element);
    this.cardInfoFront.element.appendChild(this.flippButton.element);
    this.cardFront.element.appendChild(this.cardImg.element);
    this.cardFront.element.appendChild(this.cardInfoFront.element);

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
    this.card.element.appendChild(this.cardBack.element);
    this.element.appendChild(this.card.element);
    this.cardAudioUrl = `./audio/${categoryName}/${info.audio}`;

    this.cardFront.element.addEventListener('click', () => {
      if (store.getState().playMode.playMode === false) Card.playNote(this.cardAudioUrl);
    });
    this.flippButton.element.addEventListener('click', () => {
      this.flippToBack();
    });

    this.card.element.addEventListener('mouseleave', (ev: MouseEvent) => {
      ev.stopPropagation();
      this.flippToFront();
    });
  }

  flippToBack(): void {
    this.card.element.classList.add('flipped');
  }

  flippToFront(): void {
    this.card.element.classList.remove('flipped');
  }

  static playNote(src: string): void {
    const audio = new Audio();
    audio.src = src;
    audio.currentTime = 0;
    audio.play();
  }
}
