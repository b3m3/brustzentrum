import burger from './modules/burger.js';
import parallax from './modules/parallax.js';
import scrollEvents from './modules/pageScrollEvents.js';

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  burger();
  parallax();
  scrollEvents();
});