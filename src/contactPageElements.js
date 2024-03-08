const contactPageElements = () => {
  // Create elements
  const contactInfo = document.createElement('div');
  contactInfo.className = 'contactInfo';
  
  const address = document.createElement('p');
  address.textContent = '123 Toronto Street, Suite 100, Toronto, ON M5V 2H1';

  const phoneNumber = document.createElement('p');
  phoneNumber.textContent = 'Phone: (111) 111-1111';

  const email = document.createElement('p');
  email.textContent = 'Email: info@littapas.ca';

  contactInfo.append(address, phoneNumber, email);

  // Wrap everything & return wrapped element
  const elementsWrapper = document.createElement('div');
  elementsWrapper.className = 'contactPageElementsWrapper';
  elementsWrapper.append(contactInfo);

  return elementsWrapper;
}

export { contactPageElements };
