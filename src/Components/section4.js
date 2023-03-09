import React from 'react'
import './section4.css';
import AboutUS from '../Img/aboutus.png'
import { FaArrowRight } from 'react-icons/fa';

class Section4 extends React.Component {
  render() {
    return (
      <div className='section_4'>
        <div className='flex'>
        <div className='s4_flex_1'>
          <img className='aboutus-image' src={AboutUS}></img>
        </div>
        <div className='s4_flex_2'>
           <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut laboredolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 

              consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod

              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation co laboris nisi ut aliquipex ea commodocon. Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillu dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non

                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
           </p>
           <button className="learnmore-button">Select Cake <FaArrowRight /></button>
      </div>
      </div>
      </div>
    
    
    );
  }
}

export default Section4;









