import React from 'react'
import './Footer.css'
import { assets } from '../../assets/frontend_assets/assets'

const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.logo} alt="" />
                    <p>Choose from a diverse menu featuring deletable array of dishes. Our mission is to satisfy your cravings and elevate your dinig experience, one delicious meal st s time.</p>
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
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+91 9079680620</li>
                        <li>jayveersinghrawat93512@gmail.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <div className="footer-copyright">
                Copyright 2025 Tomato.com - All Right Reserved
            </div>
        </div>
    )
}

export default Footer