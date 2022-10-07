import Swiper, { Navigation, Pagination } from 'swiper';

const slider = () => {
  const swiper = new Swiper('.swiper', {
    modules: [Navigation, Pagination],
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 20,
    navigation: {
      nextEl: '.next',
      prevEl: '.prev',
    },
    pagination: {
      el: '.dots',
      type: 'bullets',
      clickable: true,
    },
  });
};

export default slider;