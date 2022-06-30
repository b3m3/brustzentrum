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

  const checkSize = () => {
    if (document.documentElement.clientWidth > 1024) {
      window.addEventListener('scroll', scroll);
    } else {
      window.removeEventListener('scroll', scroll);
      background.style.transform = `translateY(${0}px)`;
    }
  };

  if (document.querySelector('.team')) {
    checkSize();
    window.addEventListener('resize', checkSize);
  }
};

export default parallax;