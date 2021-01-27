import './styles.css';
import itemsTemplate from './templates/menu-items.hbs';
import menuItem from './menu.json';

const markup = itemsTemplate(menuItem);
console.log(markup);

const template = document.querySelector('.js-menu');
template.insertAdjacentHTML('beforeend', markup);

/* const classMenuItem = document.querySelector("ul li");
console.log(classMenuItem)
classMenuItem.setAttribute("class", "menu__item");
const addClassCard = document.querySelector("article");
console.log(addClassCard)
addClassCard.classList.add("card"); */
