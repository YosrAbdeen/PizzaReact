/*import React from 'react';

import MenuItem from '../components/MenuItem';
 

export const MenuList = [
  { id: 8, img: "../assets/Margherita.jpg", name: 'Pizza MARGHERITA', ingredients: "Tomato sauce and mozzarella from Agerola", price: "7.5" },
  { id: 9, img: "../assets/4 formaggi.jpg", name: 'Pizza 4 formaggi', ingredients: "Tomato sauce and mozzarella from Agerola", price: "8" },
  { id: 7, img: "../assets/Marinara.jpg", name: 'Pizza Marinara', ingredients: "Tomato sauce and mozzarella from Agerola", price: "7" },
  { id: 5, img: "../assets/Napoli.jpg", name: 'Pizza Napoli', ingredients: "Tomato sauce and mozzarella from Agerola", price: "9" },
  { id: 4, img: "../assets/Pescatora.jpg", name: 'Pizza Pescatora', ingredients: "Tomato sauce and mozzarella from Agerola", price: "10" },
  { id: 2, img: "../assets/Romana.jpg", name: 'Pizza Romana', ingredients: "Tomato sauce and mozzarella from Agerola", price: "8.5" }
];
function Menu() {
 
  
  
  return (
    <div className='menu'>
      <h1 className='menuTitle'>Our Menu</h1>
      <div className='menuList'>
      {MenuList.map((menuItem, key) => {
        return(
        <MenuItem 
        key={key} 
        image={menuItem.image} 
        name={menuItem.name} 
        ingredients={menuItem.ingredients} 
        price={menuItem.price}
        />
      );
      })

      } </div>
    </div>
  )
}

export default Menu*/
import React, { useState, useEffect } from 'react';
import MenuItem from '../components/MenuItem';

function Menu() {
  const [menuList, setMenuList] = useState([]);

  useEffect(() => {
    fetchMenuList();
  }, []);

  const fetchMenuList = async () => {
    try {
      const response = await fetch('http://localhost:8080/dish/getAll', {
        method: 'GET',
      }); 
      const data = await response.json();
      setMenuList(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  return (
    <div className='menu'>
      <h1 className='menuTitle'>Our Menu</h1>
      <div className='menuList'>
        {menuList.map((menuList) => (
          <MenuItem
            key={menuList.id}
          /*  image={menuItem.img}*/
            name={menuList.name}
            ingredients={menuList.ingredients}
            price={menuList.price}
          />
        ))}
      </div>
    </div>
  );
}

export default Menu;
