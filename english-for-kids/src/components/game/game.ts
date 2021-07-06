import './../../styles.scss';
import store from '../../redux/store';
import { ImageCategoryModel } from '../../models/image-category-model';
import { GameSet } from '../../models/redux-models';
import { correctCounterIncrement, mistakesCounterIncrement, setStartGame } from '../../redux/actionsCreators';
import { BaseComponent } from '../base-component';
import { Card } from '../card/card';
import { CardsField } from '../cards-field/cards-field';
import { StartRepeatButton } from '../start-repeat-button/start-repeat-button';

// const FLIP_DELAY = 3000;

export class Game extends BaseComponent {

  public cardsField: CardsField;
  private allCardsAudio: string[];
  private readonly startRepeatButton: StartRepeatButton;


  constructor() {
    super();
    this.allCardsAudio = [];
    this.startRepeatButton = new StartRepeatButton;
    this.cardsField = new CardsField();
    this.element.appendChild(this.cardsField.element);
    this.element.appendChild(this.startRepeatButton.element);

  }

  newGame(categoryData: ImageCategoryModel): void {
    let counter = 0;
    this.cardsField.clear();

    const cards = categoryData.info
      .map((cardInfo) => new Card(categoryData.category, cardInfo))
      .sort(() => Math.random() - 0.5);

    cards.forEach((card) => {
      card.element.classList.add('before-start')
      card.cardInfoFront.element.classList.add('hidden');
      card.cardImg.element.classList.add('play');
      this.allCardsAudio.push(card.cardAudioUrl);
    });

    this.mixAudio();

    cards.forEach((card) => {
      card.element.addEventListener('click', () => {
        if (card.cardAudioUrl === this.allCardsAudio[counter]) {
          counter++;
          this.playCorrectNote();
          card.cardImg.element.classList.add('inactive');
          store.dispatch(correctCounterIncrement());
          this.playNextAudio(counter);
        } else {
          this.playIncorrectNote();
          store.dispatch(mistakesCounterIncrement());
        }
        if (counter === 8) return
      })

      store.subscribe(() => {
        const state = store.getState();
        const gameSet: GameSet = state.gameSet;
        if (gameSet.gameState === true) {
          card.element.classList.remove('before-start')
        }
      })
    })

    this.cardsField.addCards(cards);

    this.startRepeatButton.startButton.element.addEventListener('click', (): void => {
      this.playNextAudio(counter);

      this.startRepeatButton.startButton.element.classList.add('none');
      this.startRepeatButton.repeatButton.element.classList.remove('none');
      store.dispatch(setStartGame());
    }, false)
    this.startRepeatButton.repeatButton.element.addEventListener('click', (): void => {
      this.playNextAudio(counter);
    });
  }


  playNextAudio(n: number) {
    console.log('next')
    Card.playNote(this.allCardsAudio[n]);
  }


  playCorrectNote() {
    Card.playNote(`./audio/game/correct.mp3`);
  }

  playIncorrectNote() {
    Card.playNote(`./audio/game/ops2.mp3`)
  }

  mixAudio() {
    console.log('before', this.allCardsAudio);
    this.allCardsAudio.sort(() => Math.random() - 0.3);
    console.log('after', this.allCardsAudio);
  }


}


