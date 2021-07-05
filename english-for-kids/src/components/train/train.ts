import { CardInfo, ImageCategoryModel } from '../../models/image-category-model';
import '../../styles.scss';
import { BaseComponent } from '../base-component';
import { Card } from '../card/card';
import { CardsField } from '../cards-field/cards-field';



export class Train extends BaseComponent {

  private readonly cardsField: CardsField;

  constructor() {
    super();
    this.cardsField = new CardsField();
    this.element.appendChild(this.cardsField.element);
  }

  newTrain(categoryData: ImageCategoryModel): void {
    console.log('new train started');
    this.cardsField.clear();
    console.log(categoryData);
    const cards = categoryData.info
      .map((cardInfo) => new Card(categoryData.category, cardInfo))
      .sort(() => Math.random() - 0.5);
    console.log(cards);
    console.log(this.cardsField);
    this.cardsField.addCards(cards);
  }
}
