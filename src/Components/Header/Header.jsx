import React from 'react'
import './Header.css'
import { assets } from '../../assets/assets'
const Header = () => {
  return (
    <div className='header'>
      <div className='header-image'>
        <img src={assets.header_img} alt="" />
      <div className='header-contents'>
        <h2>Order Your Favourite Food Here.</h2>
        <p>Choose from a diverse menu featuring a detuctable array of dishes crafted with the satisfy your cravings and elevate your dining experience. one delicious meal at a time.</p>
        <button>View Menu</button>
      </div>
    </div>
    </div>
  )
}

export default Header
