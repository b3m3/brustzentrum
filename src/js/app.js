import burger from './modules/burger.js';
import parallax from './modules/parallax.js';
import menuEvents from './modules/menu-events.js';

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  burger();
  parallax();
  menuEvents();
});