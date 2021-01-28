import itemsTemplate from '../templates/menu-items.hbs';
import menuItem from '../menu.json';
const markup = itemsTemplate(menuItem);
console.log(markup);

const template = document.querySelector('.js-menu');
template.insertAdjacentHTML('beforeend', markup);