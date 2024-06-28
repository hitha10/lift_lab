import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img className= "footer_logo" src={assets.logo} alt="" />
            <p>Experience fitness like never before at our gym, where innovative technology meets personalized training. Transform your workouts with our exclusive programs and community-driven approach.</p>
            <div className="footer-social-icons">
                <a href="https://www.facebook.com/"><img src={assets.facebook_icon} alt="" /></a>
                <a href="https://x.com/settings/account?lang=en" ><img src={assets.twitter_icon} alt="" /></a>
                <a href="https://www.linkedin.com/feed/"><img src={assets.linkedin_icon} alt="" /> </a>
            </div>
        </div>
        <div className="footer-content-center">
            <h2>GYM TIMINGS</h2>
            <ul>
                <li>Mon-Sat</li>
                <li>6:00am - 9:00pm</li>
                <li>Sun</li>
                <li>6:00am - 6:00pm</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+91 1234567890</li>
                <li>contact@LiftLab.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 © Liftlab.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer
