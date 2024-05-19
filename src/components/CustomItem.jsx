import React from 'react'
import { useState } from 'react';

function CustomItem(props) {
  const [totalPrice, setPrice] = useState(0);

  function handleAdd() {
    setPrice(totalPrice + props.price);
    props.onPriceChange(props.price);
  }

  function handleSub() {
    if (totalPrice >= props.price) {
      setPrice(totalPrice - props.price);
      props.onPriceChange(-props.price);
    }
  }

  const itemStyle = {
    backgroundImage: `url(${props.image})`,
  };
  return (
    <div className='customizeItem'>
      <div style={itemStyle}></div>
      <h1>{props.name}</h1>
      <h4>price : $ {props.price}</h4>
      <button className='button1' onClick={handleAdd}>+</button>
      $ {totalPrice}
      <button className='button2' onClick={handleSub}>-</button>
    </div>
  )
}

export default CustomItem
