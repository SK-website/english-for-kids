import './navbar.scss'
import { BaseComponent } from "../base-component";
import { CategoryLink } from "../category-link/category-link";

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

  constructor() {

    this.element = document.createElement('div');
    this.element.classList.add('navbar');

    this.closeMenuButton = new BaseComponent('button', ['close-btn']);
    const linksList = document.createElement('ul');
    linksList.classList.add('navbar-list');
    this.mainPageLink = new CategoryLink('li', ['navbar-list-item'], 'categories', 'span', ['navbar-icon', 'main-page-icon'], linksList)
    this.actionsLink = new CategoryLink('li', ['navbar-list-item'], 'actions', 'span', ['navbar-icon', 'actions'], linksList);
    this.animals1Link = new CategoryLink('li', ['navbar-list-item'], 'animals (set 1)', 'span', ['navbar-icon', 'pig'], linksList);
    this.animals2Link = new CategoryLink('li', ['navbar-list-item'], 'animals (set 2)', 'span', ['navbar-icon', 'whale'], linksList);
    this.animals3Link = new CategoryLink('li', ['navbar-list-item'], 'animals (set 3)', 'span', ['navbar-icon', 'bug'], linksList);
    this.emotionsLink = new CategoryLink('li', ['navbar-list-item'], 'emotions', 'span', ['navbar-icon', 'emotions'], linksList);
    this.fairytalesLink = new CategoryLink('li', ['navbar-list-item'], 'fairytales', 'span', ['navbar-icon', 'fairytales'], linksList);
    this.food1Link = new CategoryLink('li', ['navbar-list-item'], 'food (set 1)', 'span', ['navbar-icon', 'food1'], linksList);
    this.food2Link = new CategoryLink('li', ['navbar-list-item'], 'food (set 2)', 'span', ['navbar-icon', 'food2'], linksList);
    this.element.appendChild(this.closeMenuButton.element);
    this.element.appendChild(linksList);
  }
}
