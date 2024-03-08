const homePageElements = () => {
  //create elements
  const welcomeText = document.createElement('div');
  welcomeText.className = 'welcomeText';
  const title = document.createElement('h2');
  title.textContent = `Welcome to Lit Tapas`;
  const para = document.createElement('p');
  para.textContent = `Our restaurant hosts fun experiences in a bright and modern setting. Do it for the gram! Enjoy trendy decor, mesmerizing art installations along with your duck confit`;
  welcomeText.append(title,para);

  const buyBookLocationBtns = document.createElement('div');
  buyBookLocationBtns.className = 'BBLButtons';
  const bookBtn = document.createElement('button');
  bookBtn.id = 'bookBtn';
  bookBtn.textContent = 'Book Table';
  const locationBtn = document.createElement('button');
  locationBtn.id = 'locationBtn';
  locationBtn.textContent = 'Location';
  const merchBtn = document.createElement('button');
  merchBtn.id = 'merchBtn';
  merchBtn.textContent = 'Buy Merch';
  buyBookLocationBtns.append(bookBtn,locationBtn,merchBtn);

  const interiorImageWrapper = document.createElement('div');
  interiorImageWrapper.id = 'interiorImageWrapper';
  const interiorImage = document.createElement('div');
  interiorImageWrapper.append(interiorImage);

  // wrap everything & return wrapped element
  const elementsWrapper = document.createElement('div');
  elementsWrapper.className = 'elementsWrapper';
  elementsWrapper.append(welcomeText, buyBookLocationBtns, interiorImageWrapper)
  return elementsWrapper
} 

export { homePageElements };
