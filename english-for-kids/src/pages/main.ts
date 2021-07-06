// import './../styles.scss';

import { BaseComponent } from '../components/base-component';
import { Category } from '../components/category/category';
import { ResultHearts } from '../components/result-hearts/result-hearts';

export class MainPage extends BaseComponent {
  public actionsCategory: Category;

  public animals1Category: Category;

  public animals2Category: Category;

  public animals3Category: Category;

  public emotionsCategory: Category;

  public fairytalesCategory: Category;

  public food1Category: Category;

  public food2Category: Category;

  public resultHearts: ResultHearts;

  constructor() {
    super('div', ['categories']);
    const cardsField = new BaseComponent('div', ['cards-field']);
    this.actionsCategory = new Category('actions', 'actions', './actions/actions5-drive.svg', cardsField.element);
    this.animals1Category = new Category('animals1', 'animals (set 1)', './animals/leopard-1456554_640.png',
      cardsField.element);
    this.animals2Category = new Category('animals2', 'animals (set 2)', './animals/animals-all5.png',
      cardsField.element);
    this.animals3Category = new Category('animals3', 'animals (set 3)', './animals/animals-all6.png',
      cardsField.element);
    this.emotionsCategory = new Category('sports', 'sports', './sports/sports-all.svg', cardsField.element);
    this.fairytalesCategory = new Category('fairytales', 'fairytales', './fairytales/fairytales-all.png',
      cardsField.element);
    this.food1Category = new Category('food1', 'food (set 1)', './food2/food-all3.png', cardsField.element);
    this.food2Category = new Category('food2', 'food (set 2)', './food2/food-all4.svg', cardsField.element);
    this.resultHearts = new ResultHearts();
    this.element.appendChild(this.resultHearts.container.element);
    this.element.appendChild(cardsField.element);
  }
}
