const moveElement = (size, wrappers, element, from = 0, to = 1) => {
  const wrapps = document.querySelectorAll(wrappers);
  const elem = document.querySelector(element);
  
  const move = () => document.documentElement.clientWidth < size ? 
    wrapps[from].append(elem) : 
    wrapps[to].append(elem);

  move();
  
  window.addEventListener('resize', move);
};

export default moveElement;