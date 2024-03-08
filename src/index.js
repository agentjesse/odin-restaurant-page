// importing CSS directly into the related js file
import './styles.css'
// module imports
import { homePageElements } from './homePageElements';
import { menuPageElements } from './menuPageElements';
import { contactPageElements } from './contactPageElements';

//select elements
const bodyElem = document.querySelector('body');

//make javascript dom elements. these will not be global variables due to use of modules from webpack!
const header = document.createElement('header');
const restaurantLogo = document.createElement('div');
restaurantLogo.id = 'restaurantLogo';//for styling
restaurantLogo.textContent = 'logo';
const nav = document.createElement('nav');
const homeTabBtn = document.createElement('button');
homeTabBtn.textContent = `Home`;
const menuTabBtn = document.createElement('button');
menuTabBtn.textContent = `Menu`;
const contactTabBtn = document.createElement('button');
contactTabBtn.textContent = `Contact`;
nav.append(homeTabBtn,menuTabBtn,contactTabBtn);
header.append(restaurantLogo,nav);
//tabbed browsing div
const contentDiv = document.createElement('div');

//append to body
bodyElem.append(header,contentDiv);

//first load: home tab
contentDiv.append( homePageElements() );//call module, append its element contents

//tabbed browsing listeners and their fn's (allows removal without AbortController)
//clear contentDiv children fn
const clearContentDiv = ()=> {
  contentDiv.textContent = '';
}
//home tab button logic
const homeTabClick = e=> {
  clearContentDiv(); //clear old elements
  contentDiv.append( homePageElements() );//call module, append its element contents
}
homeTabBtn.addEventListener( 'click', homeTabClick );
//menu tab button logic
const menuTabClick = e=> {
  clearContentDiv();
  contentDiv.append( menuPageElements() );
}
menuTabBtn.addEventListener( 'click', menuTabClick );
//contact tab button logic
const contactTabClick = e=> {
  clearContentDiv();
  contentDiv.append( contactPageElements() );
}
contactTabBtn.addEventListener( 'click', contactTabClick );





