const menuPageElements = () => {
  // Create elements
  const menuItems = [
    {dish:'Tuna Tartate', desc: 'Fresh tuna served with avocado, cucumber, and soy dressing.'},
    { dish: 'Foie Gras', desc: 'Pan-seared foie gras served with caramelized onions and brioche.' },
    { dish: 'Ratatouille', desc: 'Traditional Provençal stewed vegetables served with crusty bread.' },
    { dish: 'Coq au Vin', desc: 'Braised chicken cooked in red wine with mushrooms, onions, and bacon.' },
    { dish: 'Beef Wellington', desc: 'Tender beef fillet wrapped in puff pastry with mushroom duxelles.' },
    { dish: 'Crème Brûlée', desc: 'Classic French dessert consisting of rich custard topped with caramelized sugar.' },
  ]

  const menuList = document.createElement('ul');
  menuItems.forEach( item=> {
    const li = document.createElement('li');
    const dishName = document.createElement('h3');
    dishName.textContent = item.dish;
    const dishDesc = document.createElement('p');
    dishDesc.textContent = item.desc;
    li.append(dishName,dishDesc)
    menuList.append(li)
  } );

  // Wrap everything & return wrapped element
  const elementsWrapper = document.createElement('div');
  elementsWrapper.className = 'elementsWrapper';
  elementsWrapper.appendChild(menuList);

  return elementsWrapper;
};

export { menuPageElements };
