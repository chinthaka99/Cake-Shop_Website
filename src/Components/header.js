import React from 'react';
import './header.css';
import logo from '../Img/Logo.png'

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <nav>
          <img className="logo" src={logo}></img>
          <ul>
            <li><a href='#Home'>Home</a></li>
            <li><a href='#AboutUS'>About Us</a></li>
            <li><a href='#Cakes'>Cake</a></li>
            <li><button className='button'><a href="#login">Register</a></button></li>
          </ul> 
        </nav>
      </header>
    );
  }
}

export default Header;
