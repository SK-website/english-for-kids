import './category-link.scss'

import { BaseComponent } from "../base-component";

export class CategoryLink {
  public element: HTMLElement;
  constructor(tag: keyof HTMLElementTagNameMap = 'li', styles: string[] = ['navbar-list-item'], text: string,
    tag2: keyof HTMLElementTagNameMap = 'span', tag2styles: string[] = [], container: HTMLUListElement) {
    this.element = document.createElement(tag);
    this.element.classList.add(...styles);
    this.element.textContent = text;
    const picture = new BaseComponent(tag2, tag2styles);
    this.element.insertAdjacentElement('afterbegin', picture.element);
    container.appendChild(this.element);
  }
}
