
import { BaseComponent } from '../base-component';
import { Card } from '../card/card';
import { CardsField } from '../cards-field/cards-field';

// const FLIP_DELAY = 3000;

export class Game extends BaseComponent {

  private readonly cardsField: CardsField;

  // private activeCard?: Card;

  // private isAnimation = false;

  // private mainElement: HTMLElement | null;

  constructor() {
    super();
    this.cardsField = new CardsField();
    this.element.appendChild(this.cardsField.element);
  }

  newGame(images: string[]) {
    console.log('new game started');
    this.cardsField.clear();
    console.log(images);
    const cards = images
      .map((url) => new Card(url))
      .sort(() => Math.random() - 0.5);

    // cards.forEach((card) => {
    //   card.element.addEventListener('click', () => this.cardHandler(card));
    // });

    this.cardsField.addCards(cards);
  }

  // private async cardHandler(card: Card) {
  //   if (this.isAnimation) return;
  //   if (!card.isFlipped) return;
  //   this.isAnimation = true;
  //   await card.flipToFront();

  //   if (!this.activeCard) {
  //     this.activeCard = card;
  //     this.isAnimation = false;
  //     return;
  //   }
  //   if (this.activeCard.image !== card.image) {
  //     await delay(FLIP_DELAY);
  //     await Promise.all([this.activeCard.flipToBack(), card.flipToBack()]);
  //     this.activeCard.flipToBack();
  //     card.flipToBack();
  //   }

  //   this.activeCard = undefined;
  //   this.isAnimation = false;
  // }
}
