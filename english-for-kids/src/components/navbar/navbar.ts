import './navbar.scss';
import { BaseComponent } from '../base-component';
import { CategoryLink } from '../category-link/category-link';
import store from '../../redux/store';
import { chooseCategory, setActiveCategory, showMenu } from '../../redux/actionsCreators';
import { CurrentCategory } from '../../models/redux-models';

export class Navbar {
  public element: HTMLElement;

  public closeMenuButton: BaseComponent;

  public mainPageLink: CategoryLink;

  public actionsLink: CategoryLink;

  public animals1Link: CategoryLink;

  public animals2Link: CategoryLink;

  public animals3Link: CategoryLink;

  public emotionsLink: CategoryLink;

  public fairytalesLink: CategoryLink;

  public food1Link: CategoryLink;

  public food2Link: CategoryLink;

  public allCategoryLinks: CategoryLink[] = [];

  public onCategoryLinkClick: ((category: string) => void) | null = null;

  constructor() {
    this.element = document.createElement('div');
    this.element.classList.add('navbar');

    this.closeMenuButton = new BaseComponent('button', ['close-btn']);
    const linksList = document.createElement('ul');
    linksList.classList.add('navbar-list');
    this.mainPageLink = new CategoryLink('categories', 'categories', ['navbar-icon', 'main-page-icon'], linksList);
    this.actionsLink = new CategoryLink('actions', 'actions', ['navbar-icon', 'actions'], linksList);
    this.animals1Link = new CategoryLink('animals1', 'animals (set1)', ['navbar-icon', 'pig'], linksList);
    this.animals2Link = new CategoryLink('animals2', 'animals (set2)', ['navbar-icon', 'whale'], linksList);
    this.animals3Link = new CategoryLink('animals3', 'animals (set3)', ['navbar-icon', 'bug'], linksList);
    this.emotionsLink = new CategoryLink('sports', 'sports', ['navbar-icon', 'sports'], linksList);
    this.fairytalesLink = new CategoryLink('fairytales', 'fairytales', ['navbar-icon', 'fairytales'], linksList);
    this.food1Link = new CategoryLink('food1', 'food (set1)', ['navbar-icon', 'food1'], linksList);
    this.food2Link = new CategoryLink('food2', 'food (set2)', ['navbar-icon', 'food2'], linksList);
    this.element.appendChild(this.closeMenuButton.element);
    this.element.appendChild(linksList);
    this.allCategoryLinks.push(this.mainPageLink, this.actionsLink, this.animals1Link, this.animals2Link,
      this.animals3Link, this.emotionsLink, this.fairytalesLink, this.food1Link, this.food2Link);

    this.allCategoryLinks.forEach((el) => el.element.addEventListener('click', () => {
      store.dispatch(showMenu(false));
      store.dispatch(setActiveCategory(el.linkCategory));
      store.dispatch(chooseCategory(el.linkCategory));
    }));

    store.subscribe(() => {
      const state = store.getState();

      const activeCat: CurrentCategory = state.currentCategory;

      this.allCategoryLinks.forEach((el) => {
        if (el.linkCategory === activeCat.activeCategory) {
          el.element.classList.add('active-link');
        } else { el.element.classList.remove('active-link'); }
      });
    });
  }
}
