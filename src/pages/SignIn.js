import React from 'react'
import Burger from "../images/about-img.png"
import "../styles/Contact.css"
import '../styles/SignIn.css';

function SignIn() {
    const imageStyle = {
        backgroundImage: `url(${Burger})`,
    };
    return (
        <div className='signin'>
            <div className='leftSide' style={imageStyle}>
            </div>
            <div className='rightSide'>
                <h1>SignIn</h1>
                <form id="signin-form" method="Get/Post">
                    <label htmlFor='name'>Full Name</label>
                    <input name='name' placeholder='Enter Full Name' type="text" />
                    <label htmlFor='email'>Email</label>
                    <input name='name' placeholder='Enter Email' type="email" />
                    <label htmlFor='password'>Password</label>
                    <input name='name' placeholder='Enter password' type="password" />
                    <button type="submit">SignIn</button>
                </form>
            </div>
        </div>
    )
}

export default SignIn
