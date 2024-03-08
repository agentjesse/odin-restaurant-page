// importing CSS directly into the related js file
import './styles.css'

// module imports, from named and default
//import { functionOne,functionTwo } from './myModule';

//javascript dom elements. these will not be global variables since using modules!
//select elements
const bodyElem = document.querySelector('body');
//make elements with data
const header = document.createElement('header');
const nav = document.createElement('nav');
const homeTabBtn = document.createElement('button');
homeTabBtn.textContent = `Home`;
const menuTabBtn = document.createElement('button');
menuTabBtn.textContent = `Menu`;
const contactTabBtn = document.createElement('button');
contactTabBtn.textContent = `Contact`;
const contentDiv = document.createElement('div');
contentDiv.id = 'content';
//append elements
nav.append(homeTabBtn,menuTabBtn,contactTabBtn);
header.append(nav);
bodyElem.append(header,contentDiv);