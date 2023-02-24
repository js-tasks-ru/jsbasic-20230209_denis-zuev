function initCarousel() {

  const carouselInner = document.querySelector('.carousel__inner');
  const carouseLength = document.querySelectorAll('.carousel__slide').length;
  const carouselArrowRigth = document.querySelector('.carousel__arrow_right');
  const carouselArrowLeft = document.querySelector('.carousel__arrow_left');

  let currentSlide = 0;

  carouselArrowLeft.style.display = 'none';

  const switchSlides = () => {

    carouselInner.style.transform = `translateX(-${carouselInner.offsetWidth * currentSlide}px)`;
    currentSlide === 0 ? carouselArrowLeft.style.display = 'none' : carouselArrowLeft.style.display = '';
    currentSlide === carouseLength - 1 ? carouselArrowRigth.style.display = 'none' : carouselArrowRigth.style.display = '';

  }

  carouselArrowLeft.onclick = () => {
    currentSlide--;
    switchSlides();
  }

  carouselArrowRigth.onclick = () => {
    currentSlide++;
    switchSlides();
  }

}
