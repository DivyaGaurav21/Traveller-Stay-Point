import React from 'react'
import './about.css'

import img1 from'../Assets/about/mountain.png';
import img2 from'../Assets/about/customer.png';
import img3 from'../Assets/about/hike.png';
import video from '../Assets/video.mp4'

const About = () => {
  return (
    <section className="about section">
      <div className="setContainer">

        <h3 className="aboutTitle">
          Why Hikings?
        </h3>
        <div className="mainContent container grid">

          <div className="singleItem">
            <img src={img1} alt="Images Names" />
            <h3>100+ Mountains</h3>
            <p>
            Studies have demonstrated that deviating from the regular daily routine can lower stress levels and enhance overall health and well-being.
            </p>
          </div>
          <div className="singleItem">
            <img src={img3} alt="Images Names" />
            <h3>1000+ Hikings</h3>
            <p>
            Studies have demonstrated that deviating from the regular daily routine can lower stress levels and enhance overall health and well-being.
            </p>
          </div>
          <div className="singleItem">
            <img src={img2} alt="Images Names" />
            <h3>20000+ Customers</h3>
            <p>
            Studies have demonstrated that deviating from the regular daily routine can lower stress levels and enhance overall health and well-being.
            </p>
          </div>


        </div>
        <div className="videoCard container">
          <div className="cardContent grid">

            <div className="cardText">
              <h2>Wonderful House experience there !</h2>
              <p>
                The Adventure subranking is based on an equally weighted average of scores from five country.
              </p>
            </div>

            <div className="cardVideo">
              <video src={video} autoPlay loop muted type="video/mp4"></video>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default About