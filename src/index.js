// importing CSS directly into the related js file
import './styles.css'

// module imports, from named and default
//import { functionOne,functionTwo } from './myModule';

//javascript dom elements. these will not be global variables since using modules!
//select elements
const bodyElem = document.querySelector('body');
//make elements
const header = document.createElement('header');
const nav = document.createElement('nav');
const homeTabBtn = document.createElement('button');
const menuTabBtn = document.createElement('button');
const contactTabBtn = document.createElement('button');
//append elements
nav.append(homeTabBtn,menuTabBtn,contactTabBtn);
header.append(nav);
bodyElem.append(header);