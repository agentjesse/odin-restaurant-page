// importing CSS directly into the related js file
import './styles.css'
// module imports
import { homePageElements } from './homePageElements';
import { menuPageElements } from './menuPageElements';

//make javascript dom elements. these will not be global variables due to use of modules from webpack!
//select
const bodyElem = document.querySelector('body');
//make
const header = document.createElement('header');
const nav = document.createElement('nav');
const homeTabBtn = document.createElement('button');
homeTabBtn.id = `home`;
homeTabBtn.textContent = `Home`;
const menuTabBtn = document.createElement('button');
menuTabBtn.id = `menu`;
menuTabBtn.textContent = `Menu`;
const contactTabBtn = document.createElement('button');
contactTabBtn.id = `contact`;
contactTabBtn.textContent = `Contact`;
const contentDiv = document.createElement('div');
contentDiv.id = 'content';
//append elements
nav.append(homeTabBtn,menuTabBtn,contactTabBtn);
header.append(nav);
bodyElem.append(header,contentDiv);


//call homePageElements to append contents
contentDiv.append( homePageElements() )
//contentDiv.append( menuPageElements() )
