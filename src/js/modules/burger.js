const menuBurger = () => {
  const menu = document.querySelector('.menu');
  const burger = document.querySelector('.burger');

  const closeMenu = () => {
    burger.classList.remove('active');
    document.body.style.overflow = '';
  };

  menu.addEventListener('click', (e) => {
    if (e.target && e.target.classList.contains('burger')) {
      e.target.classList.toggle('active');
    }

    if (e.target && e.target.classList.contains('menu__link')) {
      closeMenu();
    }

    if (e.target && e.target.classList.contains('menu__wrapp')) {
      closeMenu();
    }

    if (burger.classList.contains('active')) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  });
};

export default menuBurger;