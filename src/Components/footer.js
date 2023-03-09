import React from 'react';
import './footer.css';
import Image1 from '../Img/Logo.png'
import Image2 from '../Img/Social Media/logo-facebook 1.png'
import Image3 from '../Img/Social Media/logo-tiktok 1.png'
import Image4 from '../Img/Social Media/logo-youtube 1.png'

class Footer extends React.Component {
  render() {
    return (
        <div className='footer'>
            <img className='footer-logo' src={Image1}></img>

            <div className='footer-flex'>
                <div className='footer-flex-1'>
                    <h3>Contact Information</h3>
                        <ul>
                            <li data-title="Phone"><span>+9475-0556400</span></li>
                            <li data-title="Email"><span>dilhanchinthaka99@gmail.com</span></li>
                            <li data-title="Address"><span>123 Main St, Anytown USA</span></li>
                        </ul>
                </div>

                <div className='footer-flex-2'>
                    <h3>Hours</h3>
                    <ul>
                        <li data-title="weekday">Monday-Friday: 8am-6pm</li>
                        <li data-title="weekend">Saturday: 9am-5pm </li>
                        <li data-title="holiday">Sunday: Closed </li>
                    </ul>
                </div>

                <div className='footer-flex-3'>
                    <h3>Social Media</h3>
                    <ul>
                        <li><img className="footer-image" src={Image2} />Facebook</li>
                        <li><img className="footer-image" src={Image3} />TikTok</li>
                        <li><img className="footer-image" src={Image4} />Youtube</li>
                    </ul>
                </div>
                
            </div>
        </div>
    );
  }
}

export default Footer;