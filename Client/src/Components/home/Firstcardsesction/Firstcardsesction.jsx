import React from "react";
import "./css/Firstcardsesction.css"
import Ballon from "../../assets/img/Ballon-1.png"
import star from "../../assets/img/star.png"
import blog1 from "../../assets/img/blog-1.jpg"
import blog2 from "../../assets/img/blog-2.jpg"
import blog3 from "../../assets/img/blog-3.jpg"
function Firstcardsesction() {
  return (
    <>
      <div>
        <div className="containerTopSection" >
          <section className="top">
            {/* <h1  style={{ fontFamily: 'Gloss And Bloom' }}>Top Destinations</h1> */}
            <h2>Explore the Beautiful Places Around the World</h2>
            {/* <div className="ballon">
              <img src={Ballon} alt="Balloon" />
            </div> */}
            <div className="star">
              <img src={star} alt="Star" />
            </div>
          </section>

          <div className="tourCardsContainer">
            <div className="tourCard">
              <div className="imageOverlay"></div>
              <img src={blog1} alt="Tour Image 1" className="tourImage" />
              <div className="tourInfo">
                <h2>North America</h2>
                <p>13 Tours</p>
              </div>
            </div>

            <div className="tourCard">
              <div className="imageOverlay"></div>
              <img src={blog2}alt="Tour Image 2" className="tourImage" />
              <div className="tourInfo">
                <h2>Europe</h2>
                <p>15 Tours</p>
              </div>
            </div>

            <div className="tourCard">
              <div className="imageOverlay"></div>
              <img src={blog3} alt="Tour Image 3" className="tourImage" />
              <div className="tourInfo">
                <h2>Asia</h2>
                <p>20 Tours</p>
              </div>
            </div>

            <div className="tourCard">
              <div className="imageOverlay"></div>
              <img src={blog2} alt="Tour Image 4" className="tourImage" />
              <div className="tourInfo">
                <h2>Australia</h2>
                <p>12 Tours</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Firstcardsesction;