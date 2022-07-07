const parallax = () => {
  const section = document.querySelector('.team');
  const background = document.querySelector('.team__bg');
  const clientHeight = document.documentElement.clientHeight;
  
  // const distance = () => {
  //   if (window.scrollY / 8 - 200) {
  //     return window.scrollY / 7 - 200;
  //   }
  // };

  const scroll = () => {

  };

  const checkSize = width => {
    if (document.documentElement.clientWidth > width) {
      window.addEventListener('scroll', () => {
        // scroll();
        if (window.scrollY + section.clientHeight - clientHeight >= section.offsetTop) {
          background.style.transform = `translateY(-${window.scrollY / 100}px)`;
          console.log('px', window.scrollY / 50);
        }
        else {
          background.style.transform = `translateY(${0}px)`;
        }
      });
    }
  };

  if (section) {

    // checkSize(550);

    // window.addEventListener('resize', () => checkSize(550));
  }
};

export default parallax;