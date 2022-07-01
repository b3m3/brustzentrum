import Swiper, { Navigation, Pagination } from 'swiper';

const slider = () => {
  const swiper = new Swiper('.swiper', {
    loop: false,
    slidesPerView: 3,
    // spaceBetween: 0,
  });
};

export default slider;