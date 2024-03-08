const menuPageElements = () => {
  // Create elements
  const menuItems = [
    { dish: 'Tuna Tartare', desc: 'Fresh tuna served with avocado, cucumber, and soy dressing.'},
    { dish: 'Foie Gras', desc: 'Pan-seared foie gras served with caramelized onions and brioche.' },
    { dish: 'Coq au Vin', desc: 'Braised chicken cooked in red wine with mushrooms, onions, and bacon.' },
    { dish: 'Beef Wellington', desc: 'Tender beef fillet wrapped in puff pastry with mushroom duxelles.' },
    { dish: 'Lobster Bisque', desc: 'Creamy soup made with lobster, vegetables, and a hint of brandy.' },
    { dish: 'Rack of Lamb', desc: 'Herb-crusted rack of lamb served with rosemary jus and roasted vegetables.' },
    { dish: 'Wild Mushroom Risotto', desc: 'Creamy risotto cooked with a variety of wild mushrooms and Parmesan cheese.' },
    { dish: 'Chocolate Lava Cake', desc: 'Decadent chocolate cake with a molten chocolate center, served with vanilla ice cream.' },
    { dish: 'Crème Brûlée', desc: 'Classic French dessert consisting of rich custard topped with caramelized sugar.' },
  ];


  //camelCase fn
  const camelCase = (sentence)=> {
    return sentence.replace(/\s(.)/g, (match)=> { //match whitespace and ANY character
      return match.toUpperCase().trim();
    }).replace(/\s/g, '') //remove remaining white space
      .replace(/^(.)/, (match)=> match.toLowerCase() ); //first character to lowercase
  }

  const menuList = document.createElement('ul');
  menuItems.forEach( item=> { //add li elements of each dish
    const li = document.createElement('li');
    const dishName = document.createElement('h3');
    dishName.textContent = item.dish;
    const dishImage = document.createElement('div');
    dishImage.className = `dishImage ${ camelCase(item.dish) }`; //default dish styling class and specific one too
    const dishDesc = document.createElement('p');
    dishDesc.textContent = item.desc;
    li.append(dishName, dishImage, dishDesc)
    menuList.append(li)
  } );

  // Wrap everything & return wrapped element
  const elementsWrapper = document.createElement('div');
  elementsWrapper.className = 'menuPageElementsWrapper';
  elementsWrapper.appendChild(menuList);

  return elementsWrapper;
};

export { menuPageElements };
