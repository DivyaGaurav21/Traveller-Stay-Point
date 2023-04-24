import React from 'react'
import './offer.css'
import {MdKingBed} from 'react-icons/md'
import {MdBathtub} from 'react-icons/md'
import {FaWifi} from 'react-icons/fa';
import {MdAirportShuttle} from 'react-icons/md';
import {GoLocation} from 'react-icons/go';
import {BsArrowRight} from 'react-icons/bs';

import img1 from '../Assets/img4.jpg'
import img2 from '../Assets/img5.jpg'
import img3 from '../Assets/img6.jpg'
import img4 from '../Assets/img3.jpg'
import img5 from '../Assets/img2.jpg'




let offerData = [
     {
      id : 1,
      imgSrc : img1 , 
      offerTile : 'near India Gate',
      location : 'Vigyan nagar, jaipur , Rajasthan',
      discount: '30',
      price : 9999
     },
     {
      id : 2,
      imgSrc : img2 , 
      offerTile : 'near India Gate',
      location : 'Vigyan nagar, jaipur , Rajasthan',
      discount: '25',
      price : 7999
     },
     {
      id : 3,
      imgSrc : img3 , 
      offerTile : 'near India Gate',
      location : 'Vigyan nagar, jaipur , Rajasthan',
      discount: '40',
      price : 9999
     },
     {
      id : 4,
      imgSrc : img4 , 
      offerTile : 'near India Gate',
      location : 'Vigyan nagar, jaipur , Rajasthan',
      discount: '35',
      price : 7500
     },
     {
      id : 5,
      imgSrc : img5 , 
      offerTile : 'near India Gate',
      location : 'Vigyan nagar, jaipur , Rajasthan',
      discount: '30',
      price : 9999
     },
]

const Offer = () => {
  return (
    <section className="offer container section">

      <div className="secContainer">


        <div className="secIntro">
          <h2 className="secTitle">
            Special Offers
          </h2>
          <p>
            From historical cities to natural specteculars , come see the best of the world!
          </p>
        </div>
        <div className="mainContainer grid">
          {
            offerData.map(offer => (
              <div className="singleOffer">
            <div className="destImg">
              <img src={offer.imgSrc} alt="Image Name" />

              <span className="discount">
                {offer.discount}% off
              </span>
            </div>

           <div className="offerBody">
            <div className="offerPrice flex">
              <h4>
               ₹ {offer.price}/month
              </h4>
              <span className="status">
                For Rent
              </span>
            </div>

            <div className="amenities flex">
              <div className="singleAmenity flex">
                <MdKingBed className='icon'/>
                <small>2 Beds</small>
              </div>
              <div className="singleAmenity flex">
                <MdBathtub className='icon'/>
                <small>1 Bath</small>
              </div>
              <div className="singleAmenity flex">
                <FaWifi className='icon'/>
                <small>Wi-Fi</small>
              </div>
              <div className="singleAmenity flex">
                <MdAirportShuttle className='icon'/>
                <small>Shuttle</small>
              </div>
            </div>

          <div className="location flex">
            <GoLocation className='icon'/>
            <small>{offer.location}</small>
          </div>
          <button className="btn flex customBtn signupBtn">
            View Details
            <BsArrowRight className='icon'/>
          </button>

           </div>

          </div>
            ))
          }
        </div>

        
      </div>

    </section>
  )
}

export default Offer