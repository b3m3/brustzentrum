const teamInfo = () => {
  const wrapp = document.querySelector('.team-page');
  const items = document.querySelectorAll('.drs-team-page__img');
  const info = document.querySelector('.hover-team-page');

  items.forEach(item => {
    item.addEventListener('mousemove', (e) => {
      info.classList.add('show-info');
    });
  });

  wrapp.addEventListener('mousemove', (e) => {
    console.log(e.target);
    if (!e.target.classList.contains('sw-i') && 
        !e.target.closest('.hover-team-page') &&
        !e.target.classList.contains('hover-team-page')
    ) {
      info.classList.remove('show-info');
    }
  });
};

export default teamInfo;