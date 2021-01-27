import './styles.css';
import itemsTemplate from './templates/menu-items.hbs';
import menu from './menu.json';

const markup = itemsTemplate(menu);
console.log(markup);

const template = document.querySelector('.js-menu');
template.insertAdjacentHTML('beforeend', markup);
