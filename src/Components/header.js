import React from 'react';
import './header.css';

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#login">Cake</a></li>
            <li><button className='button'><a href="#login">Register</a></button> </li>       
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
