import './category-link.scss';
import store from '../../redux/store';
import { chooseCategory, showMenu } from '../../redux/actionsCreators';
import { BaseComponent } from "../base-component";

export class CategoryLink {
  public element: HTMLElement;
  public linkCategory: string;



  constructor(categoryName: string, text: string, pictureStyles: string[] = [], container: HTMLUListElement) {
    this.linkCategory = categoryName;
    this.element = document.createElement('li');
    this.element.classList.add('navbar-list-item');
    this.element.setAttribute('data-category', categoryName);
    this.element.textContent = text;
    const picture = new BaseComponent('span', pictureStyles);
    this.element.insertAdjacentElement('afterbegin', picture.element);
    container.appendChild(this.element);

  }
}
