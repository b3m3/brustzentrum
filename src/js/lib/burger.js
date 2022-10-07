const menuBurger = () => {
  const header = document.querySelector('header');

  header.addEventListener('click', (e) => {
    const menu = document.querySelector('.header__menu');

    if (e.target.closest('.burger')) {
      document.body.style.overflow = 'hidden';
      menu.classList.add('show-menu');
    }

    if (!e.target.closest('.menu__list') && !e.target.closest('.burger')) {
      document.body.style.overflow = '';
      menu.classList.remove('show-menu');
    }

    switch (e.target.className) {
      case 'menu__close':
        menu.classList.remove('show-menu');
        break;
      case 'menu__link':
        menu.classList.remove('show-menu');
        break;
      case 'button-header__btn btn btn_white swap-button':
        menu.classList.remove('show-menu');
        break;
    }
  });
};

export default menuBurger;