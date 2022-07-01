import Swiper, { Navigation, Pagination } from 'swiper';

const slider = () => {
  const swiper = new Swiper('.swiper', {
    loop: false,
    slidesPerView: 'auto',
  });
};

export default slider;