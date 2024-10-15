import React from 'react'
import './Footer.css'
import { assets } from '../../assests/assets'

export default function Footer() {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logoo} alt="" className='logo' />
                {/* <p>lore impsum</p> */}
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>Get In Touch</h2>
                <ul>
                    <li>+91234567890</li>
                    <li>contact@wazwan.com</li>
                </ul>
            </div>  
        </div>
        <hr />
        <p className='footer-copyright'>Copyright 2024 &copy; Wazwan.com - All Rights Reserved.</p>
    </div>
  )
}
