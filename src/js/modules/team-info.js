const teamInfo = () => {
  const section = document.querySelector('.team-page');
  const items = document.querySelectorAll('.drs-team-page__img');
  const info = document.querySelector('.hover-team-page');
  const pointers = document.querySelectorAll('.drs-team-page__p');

  if (section) {

    const showInfo = (event) => {
      items.forEach((item, i) => {
        item.addEventListener(event, () => {
          info.classList.add('show-info');
          pointers.forEach(pointer => pointer.classList.remove('show-pointer'));
          pointers[i].classList.add('show-pointer');
        });
      });
    };

    showInfo('click');
    showInfo('mousemove');
  
    section.addEventListener('mousemove', (e) => {
      if (!e.target.classList.contains('sw-i') && 
          !e.target.closest('.hover-team-page') &&
          !e.target.classList.contains('hover-team-page')
      ) {
        info.classList.remove('show-info');
        pointers.forEach(pointer => pointer.classList.remove('show-pointer'));
      }
    });
  }
};

export default teamInfo;