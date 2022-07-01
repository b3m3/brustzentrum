const menuEvents = () => {
  const sections = document.querySelectorAll('.sec');
  const scale = document.querySelector('.menu__scale span');
  const links = document.querySelectorAll('.menu__link');
  const lvl = [12, 62, 110, 157, 205];

  const scrollMenu = () => {
    if(sections.length > 0) {
      const offset = (el) => {
        const rect = el.getBoundingClientRect();
        const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
        return { 
          top: rect.top + scrollTop, 
          left: rect.left + scrollLeft 
        };
      };
  
      const sectionScroll = () => {
        for (let index = 0; index < sections.length; index++) {
          const section = sections[index];
          const sectionHeight = section.offsetHeight;
          const sectionOffset = offset(section).top;
          const sectionStart = 4;
  
          let sectionPoint = window.innerHeight - sectionHeight / sectionStart;

          if (sectionHeight > window.innerHeight) {
            sectionPoint = window.innerHeight - window.innerHeight / sectionStart;
          }
  
          if ((window.pageYOffset > sectionOffset - sectionPoint) && 
              window.pageYOffset < (sectionOffset + sectionHeight)) {

            links.forEach(link => link.style.fontWeight = '400');
            scale.style.top = `${lvl[index]}px`;
            links[index].style.fontWeight = '700';
          }
        }
      };
  
      sectionScroll();
    }
  };

  const activeLink = (selector, linkText) => {
    if (document.querySelector(selector)) {
      links.forEach((link, i) => {
        
        if (link.textContent === linkText) {
          links.forEach(link => link.style.fontWeight = '400');
          link.style.fontWeight = '700';
          scale.style.top = `${lvl[i]}px`;
        }
  
        if (link.textContent !== linkText) {
          link.addEventListener('click', () => {
            location.href='index.html';
          });
        }
      });
    }
  };

  activeLink('.diagnostik-page', 'Diagnostik');
  activeLink('.team-page', 'Team');

  if (document.querySelector('.werwir')) {
    scrollMenu();
  
    window.addEventListener('scroll', scrollMenu);
  }
};

export default menuEvents;