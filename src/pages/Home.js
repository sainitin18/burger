import React from 'react';
import Homeimg from "../images/main_img.png";
import { Link } from 'react-router-dom';
import "../styles/Home.css";
function Home() {
  return (
    <div className='home' style={{ backgroundImage: `url(${Homeimg})` }}>
      <div className='headerContainer'>
        <h1>Customize The <span className="burgerText">Burger</span></h1>
        <h3>YourSelf</h3>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
        </p>
        <Link to="/menu">
          <button>
            ORDER
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Home