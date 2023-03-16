import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    this._container = this.render();
  }

  get elem() {
    return this._container;
  }

  render () {
    const elem = createElement(
      `
      <div class="carousel">
        <div class="carousel__arrow carousel__arrow_right">
          <img src="/assets/images/icons/angle-icon.svg" alt="icon">
        </div>
        <div class="carousel__arrow carousel__arrow_left">
          <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
        </div>
      </div>
    `);

    elem.append(this.createCarousel(this.slides));

    const carouselInner = elem.querySelector('.carousel__inner');
    const carouseLength = this.slides.length;
    const carouselArrowRigth = elem.querySelector('.carousel__arrow_right');
    const carouselArrowLeft = elem.querySelector('.carousel__arrow_left');
    let currentSlide = 0;

    const update = () => {

      let offset = carouselInner.offsetWidth * currentSlide;
      carouselInner.style.transform = `translateX(${-offset}px)`;

      if (currentSlide === 0) {
        carouselArrowLeft.style.display = 'none';
      } else {
        carouselArrowLeft.style.display = '';
      }
      if (currentSlide === carouseLength - 1) {
        carouselArrowRigth.style.display = 'none';
      } else {
        carouselArrowRigth.style.display = '';
      }
    };

    const next = () => {
      currentSlide++;
      update();
    };

    const prev = () => {
      currentSlide--;
      update();
    };


    elem.onclick = (event) => {
      if (event.target.closest('.carousel__arrow_right')) {
        next();
      }
      if (event.target.closest('.carousel__arrow_left')) {
        prev();
      }
    };

    update();

    return elem;
  }

  createCarousel(slides) {
    const elem = createElement(`<div class="carousel__inner"></div>`);
    elem.append(...slides.map(item => this.createSlide(item)));
    return elem;
  }

  createSlide(slide) {
    const elem = createElement(
      `
      <div class="carousel__slide" data-id="${slide.id}">
        <img src="/assets/images/carousel/${slide.image}" class="carousel__img" alt="slide">
        <div class="carousel__caption">
          <span class="carousel__price">€${slide['price'].toFixed(2)}</span>
          <div class="carousel__title">${slide.name}</div>
          <button type="button" class="carousel__button">
            <img src="/assets/images/icons/plus-icon.svg" alt="icon">
          </button>
        </div>
      </div>
      `
    );
    const button = elem.querySelector('.carousel__button');
    button.addEventListener("click", () => this.createCustomEvent(elem));
    return elem;
  }

  createCustomEvent(elem) {
    const event = new CustomEvent("product-add", {detail: elem.dataset.id, bubbles: true});
    console.log(elem.dataset.id);
    elem.dispatchEvent(event);
  }
}
