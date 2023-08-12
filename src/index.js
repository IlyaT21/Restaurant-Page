import { renderHomeSections } from './home.js';
import { renderMenuSections } from './menu.js';
import { renderContactSections } from './contact.js';

const homeButton = document.getElementById('home');
const menuButton = document.getElementById('menu');
const contactButton = document.getElementById('contact');

// Initial page load
renderHomeSections();

// Button click event listeners
homeButton.addEventListener('click', () => {
  renderHomeSections();
});

menuButton.addEventListener('click', () => {
  renderMenuSections();
});

contactButton.addEventListener('click', () => {
  renderContactSections();
});