const fixedHeader = (scrollPxFromTop) => {
  const header = document.querySelector('header');

  const eventScroll = () => {
    if (document.documentElement.scrollTop > scrollPxFromTop) {
      header.classList.add('fixed');
    } else {
      header.classList.remove('fixed');
    }
  };

  eventScroll();

  window.addEventListener('scroll', eventScroll);
};

export default fixedHeader;