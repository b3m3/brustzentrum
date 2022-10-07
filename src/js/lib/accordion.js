const accoridon = (size) => {
  const buttons = document.querySelectorAll('.accordion');
  const contents = document.querySelectorAll('.accordion-content');

  const heights = [];

  const getHeight = () => {
    contents.forEach(content => {
      heights.push(content.clientHeight);

      if (document.documentElement.clientWidth <= size) {
        content.style.height = '0px';
      } else {
        content.style.height = '100%';
        buttons.forEach(btn => btn.classList.remove('active-accordion'));
      }
    });
  };

  getHeight();

  const events = () => {
    buttons.forEach((button, index) => {
      button.addEventListener('click', () => {
        if (button.classList.contains('active-accordion')) {
          button.classList.remove('active-accordion');
          contents[index].style.height = '0px';
        } else {
          buttons.forEach(btn => btn.classList.remove('active-accordion'));
          contents.forEach(content => content.style.height = '0px');
          button.classList.add('active-accordion');
          contents[index].style.height = heights[index] + 'px';
        }
      });
    });
  };
  
  events();

  window.addEventListener('resize', getHeight);
};

export default accoridon;