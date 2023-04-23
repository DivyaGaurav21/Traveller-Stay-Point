import React from 'react'
import './popular.css'
import {BsFillArrowLeftCircleFill} from 'react-icons/bs'
import {BsArrowRightCircleFill} from 'react-icons/bs'
import {BsArrowRightShort} from 'react-icons/bs'

import img1 from '../Assets/img1.jpg'
import img2 from '../Assets/img2.jpg'
import img3 from '../Assets/img3.jpg'
import img4 from '../Assets/img4.jpg'
import img5 from '../Assets/img5.jpg'
import img6 from '../Assets/img6.jpg'
import img7 from '../Assets/img7.jpg'

const Data = [
  {
   id:'01',
   imgSrc:img1,
   destTitle:'Stay Point',
   destDesc:'cool enviroment near echo park',
   location:'Maharastra , Mumbai',
   price: 1200,
   available :'yes'
  },
  {
    id:'02',
    imgSrc:img2,
    destTitle:'Stay Point',
    destDesc:'cool enviroment near echo park',
    location:'Maharastra , Mumbai',
    price: 1200,
    available :'yes'
   },
   {
    id:'03',
    imgSrc:img3,
    destTitle:'Stay Point',
    destDesc:'cool enviroment near echo park',
    location:'Maharastra , Mumbai',
    price: 1200,
    available :'no'
   },
   {
    id:'04',
    imgSrc:img4,
    destTitle:'Stay Point',
    destDesc:'cool enviroment near echo park',
    location:'Maharastra , Mumbai',
    price: 1200,
    available :'yes'
   },
   {
    id:'05',
    imgSrc:img5,
    destTitle:'Stay Point',
    destDesc:'cool enviroment near echo park',
    location:'Maharastra , Mumbai',
    price: 1200,
    available :'yes'
   },
   {
    id:'06',
    imgSrc:img6,
    destTitle:'Stay Point',
    destDesc:'cool enviroment near echo park',
    location:'Maharastra , Mumbai',
    price: 1200,
    available :'no'
   },
   {
    id:'07',
    imgSrc:img7,
    destTitle:'Stay Point',
    destDesc:'cool enviroment near echo park',
    location:'Maharastra , Mumbai',
    price: 1200,
    available :'yes'
   },
]

const Popular = () => {
  return (
    <section className="popular section container">
           <div className="secContainer">

            <div className="secHeader flex">

                <div className="textDiv">
                  <h2 className="secTitle">
                    Popular Destination
                  </h2>
                  <p>
                  Explore the wonders of the world, from ancient cities to breathtaking natural landscapes.
                   <i> "Discover the beauty of the world, from historic landmarks to mesmerizing natural wonders."</i> 
                  Experience the best of the world, from cultural cities to stunning natural spectacles.
                  </p>
                </div>

                <div className="iconsDiv flex">
                <BsFillArrowLeftCircleFill className="icon"/>
                <BsArrowRightCircleFill className="icon"/>
                </div>

            </div>

            <div className="mainContent grid">
             {
              Data.map(data => (
                <div className="singleDestination">

                
                <div className="destImage">
                  <img src={data.imgSrc} alt="Image title" />

                  <div className="overlayInfo">
                    <h3>{data.destTitle}</h3>
                    <p>{data.destDesc}</p>
                    <BsArrowRightShort className='icon'/>
                  </div>

                </div>

              <div className="destFooter flex">
                <div className="destPart">
                  <p>{data.id}</p>
                  <p>{data.location}</p>
                </div>
                <div className="destPart">
                  <p>price: ₹{data.price}/day</p>
                  <p>available: {data.available}</p>
                </div>
              </div>


              </div>
              ))
             }
            </div>

            
           </div>
    </section>
  )
}

export default Popular