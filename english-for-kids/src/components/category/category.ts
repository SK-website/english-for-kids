import './category.scss'
import '../../styles.scss';
import { BaseComponent } from "../base-component"

export class Category extends BaseComponent {


  constructor(name: string, url: string, container: HTMLElement) {
    super('div', ['card-container']);
    const card = new BaseComponent('div', ['card']);
    const cardFront = new BaseComponent('div', ['card-front']);
    const categoryPicture = new BaseComponent('div', ['img-card']);
    categoryPicture.element.style.backgroundImage = `url(${url})`;
    const categoryInfo = new BaseComponent('div', ['info-block', 'category-info-block']);
    const spelling = new BaseComponent('div', ['spelling']);
    spelling.element.textContent = name;

    categoryInfo.element.appendChild(spelling.element);
    cardFront.element.appendChild(categoryPicture.element);
    cardFront.element.appendChild(categoryInfo.element)
    card.element.appendChild(cardFront.element);
    this.element.appendChild(card.element);
    container.appendChild(this.element);
  }
}
