import React from 'react';
import { Link } from 'react-router-dom';

function Item(props) {
  const itemStyle = {
    backgroundImage: `url(${props.image})`,
  };
  return (
    <div className='menuItem'>
      <div style={itemStyle}></div>
      <div className="itemContent">
        <h2>{props.name}</h2>
        <p>${props.price}</p>
        <Link to="/customize"> <button className='buyButton'>Buy</button></Link>
      </div>
    </div>
  )
}

export default Item
