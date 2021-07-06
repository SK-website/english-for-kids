import { ImageCategoryModel } from '../../models/image-category-model';
import '../../styles.scss';
import { BaseComponent } from '../base-component';
import { Card } from '../card/card';
import { CardsField } from '../cards-field/cards-field';
import { ResultHearts } from '../result-hearts/result-hearts';

export class Train extends BaseComponent {
  private readonly cardsField: CardsField;

  constructor() {
    super();
    const hearts = new ResultHearts();
    this.cardsField = new CardsField();
    this.element.appendChild(hearts.container.element);
    this.element.appendChild(this.cardsField.element);
  }

  newTrain(categoryData: ImageCategoryModel): void {
    this.cardsField.clear();
    const cards = categoryData.info
      .map((cardInfo) => new Card(categoryData.category, cardInfo))
      .sort(() => Math.random() - 0.5);
    this.cardsField.addCards(cards);
  }
}
