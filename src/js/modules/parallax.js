const parallax = () => {
  const section = document.querySelector('.team');
  const background = document.querySelector('.team__bg');
  const clientHeight = document.documentElement.clientHeight;

  const scrollImage = () => {
    if (document.documentElement.clientWidth > 521) {
      if (window.scrollY > section.offsetTop - clientHeight / 3.5) {
        background.style.transform = `translateY(-${window.scrollY * 0.1 - 300}px)`;
      }
    }
  };
  
  if (section) {
    window.addEventListener('scroll', scrollImage);
    window.addEventListener('resize', scrollImage);
  }
};

export default parallax;