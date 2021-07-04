import './navbar.scss'
import { BaseComponent } from "../base-component";
import { CategoryLink } from "../category-link/category-link";
import store from '../../redux/store';
import { chooseCategory, showMenu } from '../../redux/actionsCreators';

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

  public allCategoryLinks: CategoryLink[] = []
  public onCategoryLinkClick: ((category: string) => void) | null = null;

  constructor() {


    this.element = document.createElement('div');
    this.element.classList.add('navbar');

    this.closeMenuButton = new BaseComponent('button', ['close-btn']);
    const linksList = document.createElement('ul');
    linksList.classList.add('navbar-list');
    this.mainPageLink = new CategoryLink('li', ['navbar-list-item'], 'categories', 'span', ['navbar-icon', 'main-page-icon'], linksList)
    this.actionsLink = new CategoryLink('li', ['navbar-list-item'], 'actions', 'span', ['navbar-icon', 'actions'], linksList);
    this.animals1Link = new CategoryLink('li', ['navbar-list-item'], 'animals1', 'span', ['navbar-icon', 'pig'], linksList);
    this.animals2Link = new CategoryLink('li', ['navbar-list-item'], 'animals2', 'span', ['navbar-icon', 'whale'], linksList);
    this.animals3Link = new CategoryLink('li', ['navbar-list-item'], 'animals3', 'span', ['navbar-icon', 'bug'], linksList);
    this.emotionsLink = new CategoryLink('li', ['navbar-list-item'], 'emotions', 'span', ['navbar-icon', 'emotions'], linksList);
    this.fairytalesLink = new CategoryLink('li', ['navbar-list-item'], 'fairytales', 'span', ['navbar-icon', 'fairytales'], linksList);
    this.food1Link = new CategoryLink('li', ['navbar-list-item'], 'food1', 'span', ['navbar-icon', 'food1'], linksList);
    this.food2Link = new CategoryLink('li', ['navbar-list-item'], 'food2', 'span', ['navbar-icon', 'food2'], linksList);
    this.element.appendChild(this.closeMenuButton.element);
    this.element.appendChild(linksList);
    this.allCategoryLinks.push(this.mainPageLink, this.actionsLink, this.animals1Link, this.animals2Link, this.animals3Link, this.emotionsLink, this.fairytalesLink, this.food1Link, this.food2Link);


    this.allCategoryLinks.forEach((el) => el.element.addEventListener('click', () => {
      store.dispatch(showMenu(false));
      // store.dispatch(chooseCategory(el.linkCategory));
      this.onCategoryLinkClick?.(el.linkCategory);
    }))
  }
}
