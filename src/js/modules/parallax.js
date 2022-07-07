const parallax = () => {
  const section = document.querySelector('.team');
  const background = document.querySelector('.team__bg');
  const clientHeight = document.documentElement.clientHeight;
  
  const distance = () => 
    window.scrollY / 8 - 200 < 55 ? window.scrollY / 7 - 200 : null;

  const scroll = () => 
    window.scrollY >= section.offsetTop - clientHeight ? 
    background.style.transform = `translateY(-${distance()}px)` :
    null;

  const checkSize = width => {

    if (document.documentElement.clientWidth > width) {
      window.addEventListener('scroll', scroll);
    } else {
      window.removeEventListener('scroll', scroll);
      background.style.transform = `translateY(${0}px)`;
    }
  };

  if (section) {
    checkSize(550);
    window.addEventListener('resize', () => checkSize(550));
  }
};

export default parallax;