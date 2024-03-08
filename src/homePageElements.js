const homePageElements = () => {
  //create elements
  const welcomeText = document.createElement('div');
  welcomeText.className = 'welcomeText';
  const title = document.createElement('h2');
  title.textContent = `Welcome to Lit Tapas`;
  const para = document.createElement('p');
  para.textContent = `Our restaurant hosts delightful dining experiences amidst a vibrant and contemporary ambiance. Indulge in our captivating decor while savoring exquisite dishes like our signature tuna tartare. Join us and elevate your culinary journey with every visit.`;
  welcomeText.append(title,para);

  const buyBookLocationBtns = document.createElement('div');
  buyBookLocationBtns.className = 'BBLButtons';
  const bookBtn = document.createElement('button');
  bookBtn.textContent = 'Book Table';
  const locationBtn = document.createElement('button');
  locationBtn.textContent = 'Location';
  const merchBtn = document.createElement('button');
  merchBtn.textContent = 'Buy Merch';
  buyBookLocationBtns.append(bookBtn,locationBtn,merchBtn);

  const interiorImageWrapper = document.createElement('div');
  interiorImageWrapper.id = 'interiorImageWrapper';
  const interiorImage = document.createElement('div');
  interiorImageWrapper.append(interiorImage);

  // wrap everything & return wrapped element
  const elementsWrapper = document.createElement('div');
  elementsWrapper.className = 'homePageElementsWrapper';
  elementsWrapper.append(welcomeText, buyBookLocationBtns, interiorImageWrapper)
  return elementsWrapper
} 

export { homePageElements };
