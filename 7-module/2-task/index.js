import createElement from '../../assets/lib/create-element.js';

export default class Modal {
  constructor() {
    this.elem = this.render();

  }

  escapeEvt = (event) => {
    if (event.code === 'Escape') {
      this.close();
    }
  };

  open() {
    const body = document.querySelector('body');
    body.prepend(this.elem);
    body.classList.add("is-modal-open");
    document.addEventListener('keydown', this.escapeEvt);
  }

  setTitle(modalTitle) {
    const title = document.querySelector('.modal__title') || this.elem.querySelector('.modal__title');

    title.innerHTML = modalTitle;
  }

  setBody(node) {
    let bodyModal = document.querySelector('.modal__body') || this.elem.querySelector('.modal__body');
    bodyModal.append(node);
  }

  close() {
    const body = document.querySelector('body');
    const modal = document.querySelector('.modal');
    modal.remove();
    body.classList.remove("is-modal-open");
    document.removeEventListener('keydown', this.escapeEvt);
  }

  render() {
    const modal = createElement(`
    <div class="modal">
      <div class="modal__overlay"></div>
      <div class="modal__inner">
        <div class="modal__header">
          <button type="button" class="modal__close">
            <img src="/assets/images/icons/cross-icon.svg" alt="close-icon" />
          </button>

        <h3 class="modal__title"></h3>
        </div>

        <div class="modal__body"></div>
      </div>
  </div>
    `);

    modal.addEventListener("click", ({target}) => { if(target.closest('.modal__close')) this.close();});

    return modal;

  }
}
