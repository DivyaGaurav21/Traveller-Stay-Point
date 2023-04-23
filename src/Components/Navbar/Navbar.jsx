import React , {useState} from 'react'
import './navbar.css'
import {FcHome} from 'react-icons/fc'
import {AiFillCloseCircle} from 'react-icons/ai'
import {TbGridDots} from 'react-icons/tb'

const Navbar = () => {

  // code to show navbar 
const [active , setActive] = useState('navBar');

const showNav = () => {
  setActive('navBar activeNavbar')
}

const hideNav = () => {
  setActive('navBar');
}

//code to add background color to header
const [transparent , setTransparent] = useState('header');
const addBg = () => {
    if(window.scrollY >= 10){
      setTransparent('header activeHeader')
    }else{
      setTransparent('header')
    }
}
window.addEventListener('scroll' , addBg);

  return (
     <section className='navBarSection'>
        <div className={transparent}>

            <div className="logoDiv">
                <a href="#" className="logo flex">
                    <h1>
                    <FcHome className='icon'/>
                     HomeHaven
                    </h1>
                </a>
            </div>

            <div className={active}>

                <ul className="navLists flex">

                     <li className="navItem">
                    <a href="#" className="navLink">Home</a>
                    </li> 
                    <li className="navItem">
                    <a href="#" className="navLink">Products</a>
                    </li> 
                    <li className="navItem">
                    <a href="#" className="navLink">Resources</a>
                    </li> 
                    <li className="navItem">
                    <a href="#" className="navLink">Contact</a>
                    </li> 
                    <li className="navItem">
                    <a href="#" className="navLink">Blog</a>
                    </li> 

                  <div className="headerBtns flex">
                      <a href="#" className="btn loginBtn">Login</a>
                      <a href="#" className="btn signupBtn">Sign Up</a>
                  </div>

                </ul>

                <div className="closeNavbar" onClick={hideNav}>
                    <AiFillCloseCircle className='icon'/>
                </div>
            </div>

            <div className="toggleNavbar" onClick={showNav}>
                 <TbGridDots className='icon'/>
            </div>

        </div>
     </section>
  )
}

export default Navbar