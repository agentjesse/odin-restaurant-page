// const functionTwo = () => 'STRING RESULT OF FUNCTION TWO';
const homePageElements = () => {
  //create elements
  const welcomeText = document.createElement('div');
  welcomeText.className = 'welcomeText';
  const title = document.createElement('h2');
  title.textContent = `Welcome to Lit Tapas`;
  const para = document.createElement('p');
  para.textContent = `Our restaurant hosts fun experiences in a bright and modern setting. Do it for the gram! Enjoy trendy decor, mesmerizing art installations along with your duck confit`;
  //append children
  welcomeText.append(title,para);

  return [ //return array of node elements to spread and append
    welcomeText,
  ]
} 

export { homePageElements };
