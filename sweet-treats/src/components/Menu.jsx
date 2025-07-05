// src/components/Menu.jsx
import React from 'react';
import './Menu.css';

const menuItems = [
  {
    id: 1,
    name: 'Chocolate Fudge Cake',
    desc: 'Rich, moist chocolate cake layered with fudge frosting.',
    price: 'Rs. 750',
    image: 'https://www.brighteyedbaker.com/wp-content/uploads/2023/08/Chocolate-Fudge-Cake-Recipe.jpg'
  },
  {
    id: 2,
    name: 'Strawberry Cupcake',
    desc: 'Fluffy vanilla cupcake topped with fresh strawberry buttercream.',
    price: 'Rs. 150',
    image: 'https://dessertdonelight.com/wp-content/uploads/2020/08/Vegan-Strawberry-Cupcake-1-1.jpg'
  },
  {
    id: 3,
    name: 'Almond Cookies',
    desc: 'Crunchy buttery cookies with roasted almond slices.',
    price: 'Rs. 200 (per pack)',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRedMRmHosx6FT4Vl6mUOzEfOrM6OYryCkxAg&s'
  },
  {
    id: 4,
    name: 'Fruit Tart',
    desc: 'Crispy tart crust filled with custard and fresh seasonal fruits.',
    price: 'Rs. 350',
    image: 'https://richanddelish.com/wp-content/uploads/2023/05/mini-fruit-tarts-2.jpg'
  },
  {
    id: 5,
    name: 'Red Velvet Cake',
    desc: 'Soft, velvety red sponge layered with cream cheese frosting.',
    price: 'Rs. 800',
    image: 'https://www.allrecipes.com/thmb/gDJ1S6ETLfWGyyWw_4A_IGhvDYE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/9295_red-velvet-cake_ddmfs_4x3_1129-a8ab17b825e3464a9a53ceeda54ff461.jpg'
  },
  {
    id: 6,
    name: 'Mini Cheesecakes',
    desc: 'Creamy bite-sized cheesecakes with graham crust.',
    price: 'Rs. 120 each',
    image: 'https://www.dessertfortwo.com/wp-content/uploads/2023/03/Mini-Cheesecakes-4-540x720.jpg'
  }
];

const Menu = () => {
  return (
    <div className="menu">
      <h2>Our Menu</h2>
      <div className="menu-grid">
        {menuItems.map(item => (
          <div className="menu-card" key={item.id}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.desc}</p>
            <span>{item.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
