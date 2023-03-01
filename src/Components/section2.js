import React from 'react';
import './section2.css';
import Image1 from '../Img/Icons/cake  icon.png'
import Image2 from '../Img/Icons/Box Icon.png'
import Image3 from '../Img/Icons/Trucj Icon.png'


class Section2 extends React.Component {
  render() {
    return (
        <div className='section_2'>
             <div className='flex'>
             <div className='flex_1'>
                <img className="sec1_image" src={Image1}></img>
                <h3 className='sec_1_text'>Birthday Cakes</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam,
	               quis nostrud exercitation ullamco </p>
            </div>

            <div className='flex_2'>
                <img className="sec1_image" src={Image2}></img>
                <h3 className='sec_1_text' >Wedding Cakes</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam,
	               quis nostrud exercitation ullamco </p>
            </div>

            <div className='flex_3'>
                <img className="sec1_image" src={Image3}></img>
                <h3 className='sec_1_text'>Wedding Cakes</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam,
	               quis nostrud exercitation ullamco </p>
            </div>
           </div>

          
        </div>
        
    );
  }
}

export default Section2;