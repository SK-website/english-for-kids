
import '../../styles.scss';

import { BaseComponent } from "../base-component";
import { Category } from "../category/category";
import { ResultHearts } from '../result-hearts/result-hearts';

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
    this.actionsCategory = new Category('actions', './actions/actions5-drive.svg', cardsField.element);
    this.animals1Category = new Category('animals (set 1)', './animals/leopard-1456554_640.png', cardsField.element);
    this.animals2Category = new Category('animals (set 2)', './animals/animals-all5.png', cardsField.element);
    this.animals3Category = new Category('animals (set 3)', './animals/animals-all6.png', cardsField.element);
    this.emotionsCategory = new Category('emotions', './emotions/emotions-all1.svg', cardsField.element);
    this.fairytalesCategory = new Category('fairytales', './fairytales/fairytales-all.png', cardsField.element);
    this.food1Category = new Category('food (set 1)', './food/food-all3.png', cardsField.element);
    this.food2Category = new Category('food (set 2)', './food/food-all4.svg', cardsField.element);
    this.resultHearts = new ResultHearts();
    this.element.appendChild(this.resultHearts.container.element);
    this.element.appendChild(cardsField.element);
  }
}
