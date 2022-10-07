const animateOnScroll = () => {

  const animatedBlocks = () => {
    const animItems = document.querySelectorAll('.animate');
  
    if(animItems.length > 0) {
      const offset = (el) => {
        const rect = el.getBoundingClientRect();
        const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
        return { 
          top: rect.top + scrollTop, 
          left: rect.left + scrollLeft 
        };
      };
  
      const animOnScroll = () => {
        for (let index = 0; index < animItems.length; index++) {
          const animItem = animItems[index];
          const animItemHeight = animItem.offsetHeight;
          const animItemOffset = offset(animItem).top;
          const animStart = 4;
  
          let animItemPoint = window.innerHeight - animItemHeight / animStart;

          if(animItemHeight > window.innerHeight) {
            animItemPoint = window.innerHeight - window.innerHeight / animStart;
          }
  
          if((window.pageYOffset > animItemOffset - animItemPoint) && 
              window.pageYOffset < (animItemOffset + animItemHeight)) {
            animItem.classList.add('animate-off');
          } 
          // else {
          //   animItem.classList.remove('animated-active');
          // }
        }
      };
  
      animOnScroll();
    }
  };

  animatedBlocks();

  window.addEventListener('scroll', animatedBlocks);
};

export default animateOnScroll;