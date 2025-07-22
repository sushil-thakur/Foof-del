import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                    <img src={assets.logo}/>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non provident doloribus dolore mollitia natus, repudiandae cum, deserunt impedit, dicta veniam ducimus sapiente recusandae voluptas quam totam fuga molestias voluptatibus vel.</p>
                    <div className="footer-social-icon">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>

            </div>
            <div className="footer-content-center">
                    <h1>COMPANY</h1>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy policy</li>
                    </ul>
            </div>
            <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                       <li>+1-212-456-7835</li>
                       <li>contact@tomoto.com</li>
                    </ul>
            </div>
        </div>
        <hr/>
        <p className='footer-copyright'>Copyright 2025 Tomato.com -All Right Reserved</p>
      
    </div>
  )
}

export default Footer
