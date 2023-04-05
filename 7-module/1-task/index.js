import createElement from '../../assets/lib/create-element.js';

export default class RibbonMenu {
  constructor(categories) {
    this.categories = categories;
    this._container = this.render();
  }

  get elem() {
    return this._container;
  }

  render() {
    const ribbonMenu = createElement('<div class="ribbon"></div>');
    const arrowLeft = createElement(`
      <button class="ribbon__arrow ribbon__arrow_left">
        <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </button>
    `);
    const arrowRight = createElement(`
      <button class="ribbon__arrow ribbon__arrow_right ribbon__arrow_visible">
          <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </button>
    `);

    ribbonMenu.append(arrowLeft, this.createRibbonInner(), arrowRight);


    const ribbonInner = ribbonMenu.querySelector(".ribbon__inner");
    console.log(ribbonInner);

    const update = () => {
      if ((ribbonInner.scrollWidth - ribbonInner.scrollLeft - ribbonInner.clientWidth) < 1) {
        ribbonMenu.querySelector('.ribbon__arrow_right').classList.remove('ribbon__arrow_visible');
      }
      else {
        ribbonMenu.querySelector('.ribbon__arrow_right').classList.add('ribbon__arrow_visible');
      }
      if (!ribbonInner.scrollLeft) {
        ribbonMenu.querySelector('.ribbon__arrow_left').classList.remove('ribbon__arrow_visible');
      } else {
        ribbonMenu.querySelector('.ribbon__arrow_left').classList.add('ribbon__arrow_visible');
      }
    };

    const scroll = ({target}) => {

      if (target.closest(".ribbon__arrow_left")) {
        ribbonInner.scrollBy(-350, 0);
        setTimeout(update, 500);
      }
      if (target.closest(".ribbon__arrow_right")) {
        ribbonInner.scrollBy(350, 0);
        setTimeout(update, 500);
      }

    };

    const getActive = (event) => {
      event.preventDefault();
      const activeEl = ribbonInner.querySelector(".ribbon__item_active");
      if (activeEl) {
        activeEl.classList.remove("ribbon__item_active");
      }
      event.target.classList.add("ribbon__item_active");
      let evt = new CustomEvent('ribbon-select', {detail: event.target.dataset.id, bubbles: true});
      this.elem.dispatchEvent(evt);
    };

    ribbonMenu.addEventListener("click", scroll);
    ribbonInner.addEventListener("click", getActive);

    return ribbonMenu;
  }


  createRibbonInner() {
    const ribbonInner = createElement(`<nav class="ribbon__inner"></nav>`);
    ribbonInner.append(...this.categories.map(item => createElement(
      `
      <a href="#" class="ribbon__item" data-id="${item.id}">${item.name}</a>
      `
    )));
    return ribbonInner;
  }
}
