import './styles/main.css';
import { greeting } from './js/greeting.js';
import { createElement } from './js/utils.js';
import logoImage from './assets/images/logo.png';

console.log(greeting());

const app = document.getElementById('app');

// Display logo
const logo = document.createElement('img');
logo.src = logoImage;
logo.alt = "Logo";
app.appendChild(logo);

// Display greeting
const helloEl = createElement('p', greeting('User'), 'greeting');
app.appendChild(helloEl);