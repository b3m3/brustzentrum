import burger from './modules/burger.js';
import parallax from './modules/parallax.js';
import menuEvents from './modules/menu-events.js';
import slider from './modules/slider.js';

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  burger();
  parallax();
  menuEvents();
  slider();
});