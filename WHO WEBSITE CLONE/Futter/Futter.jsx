import React from 'react'
import Style from './Futter.module.css'
import ab from './logo1.png'
import { FaYoutube } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { LuFacebook } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSnapchat } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
const Futter = () => {
  return (
    <div className={Style.futter}>
      <div className={Style.lists}>
        <div className={Style.list1}>
            <h2>Regions</h2>
            <ul>
                <li>Africa</li>
                <li>Americas</li>
                <li>Eastern Mediterranean</li>
                <li>Europe</li>
                <li>South East Asia</li>
                <li>Western Pacific</li>
            </ul>
        </div>
        <div className={Style.list1}>
            <h2>Policies</h2>
            <ul>
            
                <li>Cyber Security</li>
                <li>Ethics</li>
                <li>Permissions and licensing</li>
                <li>Preventing and sexual explotation</li>
                <li>Terms of use</li>
            </ul>
        </div>
        <div className={Style.list1}>
        <h2>About Us</h2>
            <ul>
            
                <li>Careers</li>
                <li>library</li>
                <li>Procurement</li>
                <li>Publications</li>
                <li>Frequently asked questions</li>
                <li>Contact us</li>
            </ul>
        </div>
        <div className={Style.report}>
            <button >Report misconduct</button>
        </div>
      </div>
      <div className={Style.whoicon}>
        <img src={ab} alt=''/>
      </div>
      <div  className={Style.socialmedia}>
        <h2>Privacy policy</h2>
        <ul>
            <li><FaYoutube /></li>
            <li><FaXTwitter /></li>
            <li><LuFacebook /></li>
            <li><FaInstagram /></li>
            <li><FaLinkedin /></li>
            <li><FaSnapchat /></li>
            <li><FaTiktok /></li>
        </ul>
        <p>
            <span>©</span>
            2024 WHO
        </p>
      </div>
      
    </div>
  )
}

export default Futter
