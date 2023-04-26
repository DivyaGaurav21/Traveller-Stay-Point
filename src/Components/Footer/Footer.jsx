import React from 'react'
import './footer.css'
import {FcHome} from 'react-icons/fc'
import {BsFacebook} from 'react-icons/bs';
import {AiFillInstagram} from 'react-icons/ai'
import {SlSocialLinkedin} from 'react-icons/sl'
import {BsGithub} from 'react-icons/bs'

const Footer = () => {
  return (
    <div className="footer">
      <div className="secContainer container grid">

        <div className="logoDiv">
          <div className="footerLogo">
            <a href="#" className="logo">
             <h1>
             <FcHome className='icon'/>HomeHaven
             </h1>
            </a>
          </div>
          <div className="socials flex">
          <BsFacebook className="icon"/>
          <AiFillInstagram className="icon"/>
          <SlSocialLinkedin className="icon"/>
          <BsGithub className="icon"/>
        </div>
    </div>

    <div className="footerLinks">
      <span className="linkTitle">
         Information
      </span>
      <li>
        <a href="#">Home</a>
      </li>
      <li>
        <a href="#">Explore</a>
      </li>
      <li>
        <a href="#">Travel</a>
      </li>
      <li>
        <a href="#">Blog</a>
      </li>
    </div>
    <div className="footerLinks">
      <span className="linkTitle">
        Contact Us
      </span>
      <span className="developer">
        <a href="https://divyagaurav21.github.io/my-portfolio/">Divya Gaurav</a>
      </span>
      <span className="phone">+91 9334802030</span>
      <span className="email">divyagaurav1602045@gmail.com</span>
    </div>

      </div>
      <h3 className='dg'>©DG Production:All right reserved with better Experience.</h3>
    </div>
  )
}

export default Footer