import React from 'react'
import puma from "./ns.png";

const Home = () => {
  return (
   
    <div> <nav className="navbar">
    <div className="logo">  <img className='logo' src={puma} alt=''/></div>
    <ul className="nav-links">
      <li><a href="/home" className='k'>Home</a></li>
      
      <li><a href="#" className='a'>Contact</a></li>
      
      <li><a href="#" className='r'>About</a></li>
    </ul>
    <input type="text" placeholder="Search products..." className="search-bar" />
  </nav></div>
  )
}

export default Home;