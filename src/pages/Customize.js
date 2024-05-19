import React, { useState } from 'react'
import { CustomizeList } from "../CustomizeList";
import CustomItem from "../components/CustomItem";
import "../styles/Customize.css";
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';

function Customize() {
  const [totalPrice, setTotalPrice] = useState(0);

  function handlePriceChange(price) {
    setTotalPrice(totalPrice + price);
  }

  function handleClick() {
    toast.success(`Total amount to be paid ${totalPrice}$ SignIn and proceed with the payment`);
  }

  return (
    <div className='customize'>
      <h1 className='customizeTitle'>You can customize now</h1>
      <div className='customizeList'>
        {CustomizeList.map((custom, key) => {
          return (
            <CustomItem
              key={key}
              image={custom.image}
              name={custom.name}
              price={custom.price}
              onPriceChange={handlePriceChange}
            />
          )
        })}
      </div>
      <h2>Total Price: ${totalPrice}</h2>
      <Link to="/signin"> <button className='buy' onClick={handleClick}>Buy</button></Link>
    </div>
  )
}

export default Customize
