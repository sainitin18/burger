import React from 'react';
import { MenuList } from "../MenuList";
import Item from "../components/Item";
import "../styles/Menu.css";
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <div className='menu'>
      <h1 className='menuTitle'>Menu</h1>
      <div className='menuList'>
        {MenuList.map((menu, key) => {
          return (
            <Item
              key={key}
              image={menu.image}
              name={menu.name}
              price={menu.price}
            />
          )
        })}
      </div>
      <Link to="/customize">
        <button>
          customize
        </button>
      </Link>
    </div>
  )
}

export default Menu
