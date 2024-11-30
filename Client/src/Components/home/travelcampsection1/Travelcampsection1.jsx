import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './css/Travelcampsection1.css';
function Travelcampsection1() {
  return (
    <>
      <div>
        <section className="mainSection"> 
          <div className='mainContent'> 
            <h1>Ready to get started your travel camping us</h1>
            {/* <a href="#" className="btnstart">Start Booking</a>  */}
          </div>
          <div className="playButton"> 
            {/* <div className="circle"> 
              <div className="triangle"></div> 
            </div> */}
          </div>
        </section>

        <section className="statsSection"> 
          <div className="stats"> 
            <div className="statItem"> 
              <h3>835 +</h3>
              <p>Total Donations</p>
              <div className="starIcon"></div> 
            </div>
            <div className="statItem"> 
              <h3>6246 +</h3>
              <p>Campaigns closed</p>
              <div className="starIcon"></div> 
            </div>
            <div className="statItem"> 
              <h3>2000 +</h3>
              <p>Happy people</p>
              <div className="starIcon"></div> 
            </div>
            <div className="statItem"> 
              <h3>600 +</h3>
              <p>Our Volunteers</p> 
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Travelcampsection1;