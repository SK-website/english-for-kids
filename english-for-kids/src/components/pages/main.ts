
import '../../styles.scss';

import { BaseComponent } from "../base-component";
import { Category } from "../category/category";

export class MainPage extends BaseComponent {
  public actionsCategory: Category;
  public animals1Category: Category;
  public animals2Category: Category;
  public animals3Category: Category;
  public emotionsCategory: Category;
  public fairytalesCategory: Category;
  public food1Category: Category;
  public food2Category: Category;

  constructor() {
    super('div', ['categories']);
    const cardsField = new BaseComponent('div', ['cards-field']);
    this.actionsCategory = new Category('actions', './assets/actions/actions5-drive.svg', cardsField.element);
    this.animals1Category = new Category('animals 1', '../assets/animals/animals-all1.svg', cardsField.element);
    this.animals2Category = new Category('animals 2', './../assets/animals/animals-all2.svg', cardsField.element);
    this.animals3Category = new Category('animals 3', '../../assets/animals/animals-all3.svg', cardsField.element);
    this.emotionsCategory = new Category('emotions', 'assets/emotions/emotions-all1.svg', cardsField.element);
    this.fairytalesCategory = new Category('fairytales', './assets/fairytales/fairytailes-all.png', cardsField.element);
    this.food1Category = new Category('food 1', './assets/food/food-all3.png', cardsField.element);
    this.food2Category = new Category('food 2', './assets/food/food-all4.svg', cardsField.element);

    this.element.appendChild(cardsField.element);
  }
}
