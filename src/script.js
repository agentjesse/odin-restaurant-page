// importing CSS directly into the related js file
import './styles.css'

// module imports, from named and default
//import { functionOne,functionTwo } from './myModule';

//add elements. these will not be global variables since using modules!
const bodyElem = document.querySelector('body');
bodyElem.appendChild(document.createElement('button'));