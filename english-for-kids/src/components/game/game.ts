import '../../styles.scss';
import store from '../../redux/store';
import { ImageCategoryModel } from '../../models/image-category-model';
import { correctCounterIncrement, mistakesCounterIncrement, setStartGame } from '../../redux/actionsCreators';
import { BaseComponent } from '../base-component';
import { Card } from '../card/card';
import { CardsField } from '../cards-field/cards-field';
import { StartRepeatButton } from '../start-repeat-button/start-repeat-button';
import { ResultHearts } from '../result-hearts/result-hearts';

export class Game extends BaseComponent {
  public cardsField: CardsField;

  private allCardsAudio: string[];

  private readonly startRepeatButton: StartRepeatButton;

  private hearts: ResultHearts;

  constructor() {
    super();
    this.allCardsAudio = [];
    this.startRepeatButton = new StartRepeatButton();
    this.cardsField = new CardsField();
    this.hearts = new ResultHearts();
    this.element.appendChild(this.cardsField.element);
    this.element.appendChild(this.startRepeatButton.element);
    this.element.insertAdjacentElement('afterbegin', this.hearts.container.element);
  }

  async newGame(categoryData: ImageCategoryModel): Promise<void> {
    let counter = 0;
    this.cardsField.clear();
    const cards = categoryData.info
      .map((cardInfo) => new Card(categoryData.category, cardInfo))
      .sort(() => Math.random() - 0.5);

    await cards.forEach((card) => {
      card.element.classList.add('before-start');
      card.cardInfoFront.element.classList.add('hidden');
      card.cardImg.element.classList.add('play');
      this.allCardsAudio.push(card.cardAudioUrl);
    });

    this.mixAudio();

    cards.forEach((card) => {
      card.cardImg.element.addEventListener('click', () => {
        if (counter > this.allCardsAudio.length) return;
        if (card.cardAudioUrl === this.allCardsAudio[counter]) {
          counter++;
          Game.playCorrectNote();
          card.cardImg.element.classList.add('inactive');
          // card.element.classList.add('inactive');
          this.hearts.addYellowHeart();
          store.dispatch(correctCounterIncrement());
          setTimeout(() => this.playNextAudio(counter), 1000);
        } else {
          Game.playIncorrectNote();
          this.hearts.addGreyHeart();
          store.dispatch(mistakesCounterIncrement());
        }
      });

      store.subscribe(() => {
        const state = store.getState();
        const { gameSet } = state;
        if (gameSet.gameState === true) {
          card.element.classList.remove('before-start');
        }
      });
    });

    this.cardsField.addCards(cards);

    this.startRepeatButton.startButton.element.addEventListener('click', (): void => {
      this.playNextAudio(counter);
      this.startRepeatButton.startButton.element.classList.add('none');
      this.startRepeatButton.repeatButton.element.classList.remove('none');
      store.dispatch(setStartGame());
    }, false);
    this.startRepeatButton.repeatButton.element.addEventListener('click', (): void => {
      setTimeout(() => this.playNextAudio(counter), 1000);
    });
  }

  playNextAudio(n: number): void {
    Card.playNote(this.allCardsAudio[n]);
  }

  static playCorrectNote(): void {
    Card.playNote('./audio/game/correct1.mp3');
  }

  static playIncorrectNote(): void {
    Card.playNote('./audio/game/ops1.mp3');
  }

  mixAudio(): void {
    this.allCardsAudio.sort(() => Math.random() - 0.5);
  }
}
