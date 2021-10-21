import './category.scss';
import { BaseComponent } from '../base-component';
import store from '../../redux/store';
import { chooseCategory, setActiveCategory, showMenu } from '../../redux/actionsCreators';

export class Category extends BaseComponent {
  public linkCategory: string;

  constructor(categoryName: string, name: string, url: string, container: HTMLElement) {
    super('div', ['card-container']);
    this.linkCategory = categoryName;
    const card = new BaseComponent('div', ['card']);
    card.element.setAttribute('data-category', categoryName);
    const cardFront = new BaseComponent('div', ['card-front']);
    const categoryPicture = new BaseComponent('div', ['img-card']);
    categoryPicture.element.style.backgroundImage = `url(${url})`;
    const categoryInfo = new BaseComponent('div', ['info-block', 'category-info-block']);
    const spelling = new BaseComponent('div', ['spelling']);
    spelling.element.textContent = name;

    categoryInfo.element.appendChild(spelling.element);
    cardFront.element.appendChild(categoryPicture.element);
    cardFront.element.appendChild(categoryInfo.element);
    card.element.appendChild(cardFront.element);
    this.element.appendChild(card.element);
    container.appendChild(this.element);

    this.element.addEventListener('click', () => {
      store.dispatch(showMenu(false));
      store.dispatch(chooseCategory(categoryName));
      store.dispatch(setActiveCategory(categoryName));
    });
  }
}
