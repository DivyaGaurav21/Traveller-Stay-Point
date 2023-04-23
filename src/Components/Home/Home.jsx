import React from 'react'
import './home.css'

const Home = () => {
  return (
    <section className="home">
      <div className="secContainer container">
        <div className="homeText">

          <h1 className="title">
            Plan Your Trip With HomeHaven.
          </h1>

          <p className="subTitle">
            Travel to favorite city and stay in respectful environment!
          </p>
          <a href="#" className="btn signupBtn exploreBtn">
              Explore Now
          </a>
        </div>

        <div className="homeCard grid">

          <div className="locationDiv">
            <label htmlFor="location">Location</label>
            <input type="text" placeholder='Dream Destination' />
          </div>

          <div className="priceDiv">
            <label htmlFor="price">Price</label>
            <input type="text" placeholder='₹5000-₹30000' />
          </div>

          <button className='btn signupBtn'>Search</button>

        </div>

      </div>
    </section>
  )
}

export default Home